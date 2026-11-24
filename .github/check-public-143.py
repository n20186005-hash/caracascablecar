import concurrent.futures, hashlib, html.parser, json, os, pathlib, time
from urllib.parse import quote, urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET
base = 'https://www.caracascablecar.com'
locales = ['en','es','zh']
records = json.load(open('src/nearby/places.json'))
def fetch(path):
    for attempt in range(3):
        try:
            with urlopen(Request(base+path,headers={'User-Agent':'Caracas-Publication-Check/1'}), timeout=25) as response:
                assert response.status == 200 and urlparse(response.url).hostname == 'www.caracascablecar.com'
                return response.read()
        except Exception:
            if attempt == 2: raise
            time.sleep(1)
class Page(html.parser.HTMLParser):
    def __init__(self,data):
        super().__init__(); self.tags=[]; self.words=[]; self.footer=[]; self.block=0; self.in_footer=False
        self.feed(data.decode('utf8'))
    def handle_starttag(self,tag,attrs):
        a=dict(attrs); self.tags.append((tag,a))
        if tag=='footer': self.in_footer=True
        if tag in ('script','style'): self.block+=1
        if self.in_footer and tag=='a': self.footer.append(a.get('href'))
    def handle_endtag(self,tag):
        if tag=='footer': self.in_footer=False
        if tag in ('script','style'): self.block=max(0,self.block-1)
    def handle_data(self,data):
        if not self.block: self.words.append(data)
homes={l:Page(fetch('/'+l)) for l in locales}
sitemap={x.text for x in ET.fromstring(fetch('/sitemap.xml')).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
def photo(p):
    path=p['image']
    return path,hashlib.sha256(fetch(quote(path))).digest()==hashlib.sha256(pathlib.Path('public'+path).read_bytes()).digest()
def check(job):
    p,l=job; route='/'+l+'/nearby/'+p['slug']; url=base+route
    try:
        doc=Page(fetch(route)); body=' '.join(' '.join(doc.words).split()); c=p['locales'][l]
        tests={k:' '.join(c[k].split()) in body for k in ('name','intro','look','walk','photo','highlight','fees','hours')}
        links=[a.get('href') for t,a in doc.tags if t=='a']
        tests.update(photo=images[p['image']] and any(t=='img' and a.get('src')==p['image'] for t,a in doc.tags),
           footer=bool(doc.footer) and doc.footer==homes[l].footer,
           nav=any(t=='nav' for t,a in doc.tags),lang=any(t=='html' and a.get('lang')==l for t,a in doc.tags),
           facts=any(t=='table' for t,a in doc.tags),FAQ=sum(t=='details' for t,a in doc.tags)==3,
           route=all(stop in body for stop in c['stops']),map=p['map'] in links,
           canonical=any(t=='link' and a.get('rel')=='canonical' and a.get('href')==url for t,a in doc.tags),
           hreflang=all(any(t=='link' and a.get('hreflang')==other and a.get('href')==base+'/'+other+'/nearby/'+p['slug'] for t,a in doc.tags) for other in locales),
           sitemap=url in sitemap, home_link=any(t=='a' and a.get('href')==route for t,a in homes[l].tags))
        return {'url':url,'passed':all(tests.values()),'missing':[k for k,v in tests.items() if not v]}
    except Exception as e: return {'url':url,'passed':False,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(5) as pool:
    images=dict(pool.map(photo,records))
    rows=list(pool.map(check,[(p,l) for p in records for l in locales]))
json.dump(rows,open('public-143.json','w'),ensure_ascii=False,indent=2)
n=sum(r['passed'] for r in rows); print(f'{n}/{len(rows)} URLs, {sum(images.values())} photographs matched')
for r in rows:
    if not r['passed']: print(r)
with open(os.environ['GITHUB_STEP_SUMMARY'],'a') as f: f.write(f'{n}/{len(rows)} production URLs and {sum(images.values())}/31 photographs match.\n')
assert len(rows)==93 and n==93 and len(images)==31 and all(images.values())
