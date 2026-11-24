const fs=require('node:fs');const {chromium}=require('playwright-core');
(async()=>{
 const dir='evidence/143/visual';fs.mkdirSync(dir,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage']});const page=await browser.newPage();const results=[];
 try {
 for(const [viewport,width,height] of [['desktop',1280,800],['mobile',390,844]]){
  await page.setViewportSize({width,height});let detail='';
  for(const kind of ['home','cathedral']){
   const url=kind==='home'?'https://www.caracascablecar.com/zh':detail;
   const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:50000});await page.locator('h1').first().waitFor();
   const links=await page.locator('a[href]').evaluateAll(as=>as.map(a=>({text:a.innerText,path:a.pathname,href:a.href})).filter(x=>x.href.startsWith(location.origin+'/zh/')));
   if(kind==='home'){const choice=links.find(x=>/cathedral|catedral/i.test(x.path)||/大教堂|主教座堂/.test(x.text));if(!choice)throw new Error('Missing cathedral entry: '+JSON.stringify(links.map(a=>a.path).slice(0,50)));detail=choice.href;}
   await page.evaluate(async()=>{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,5000))]);});
   await page.waitForTimeout(1800);
   const ui=await page.evaluate(async()=>{
    const areas=[...document.querySelectorAll('body,body *')].filter(el=>{const r=el.getBoundingClientRect();return r.width>180&&r.height>100&&r.bottom>0&&r.top<innerHeight;});
    let image='';let imgWidth=0;
    for(const el of areas){
     let src=el.tagName==='IMG'?el.currentSrc:'';
     if(!src){const bg=[getComputedStyle(el).backgroundImage,getComputedStyle(el,'::before').backgroundImage,getComputedStyle(el,'::after').backgroundImage].join(',');const match=bg.match(/url\(["']?([^"')]+)["']?\)/);src=match&&match[1];}
     if(!src)continue;
     try{const im=new Image();im.src=src;await Promise.race([im.decode(),new Promise((_,no)=>setTimeout(()=>no('timeout'),4500))]);if(im.naturalWidth>=240){image=src;imgWidth=im.naturalWidth;break;}}catch{}
    }
    const footer=document.querySelector('footer')||document.querySelector('[class*=site-footer]');
    return {width:innerWidth,contentWidth:document.documentElement.scrollWidth,h1:document.querySelector('h1').innerText,image,imgWidth,
      footer:!!footer,footerLinks:footer?[...footer.querySelectorAll('a[href]')].map(a=>a.pathname):[],
      nearbyNav:[...document.querySelectorAll('nav a, header a')].filter(a=>/周邊|周边|附近|景點|景点|探索|nearby|attractions/i.test(a.innerText+' '+a.getAttribute('href'))).map(a=>({text:a.innerText,href:a.getAttribute('href')}))};
   });
   const stem=dir+'/'+viewport+'-'+kind;await page.screenshot({path:stem+'-hero.jpg',type:'jpeg',quality:82});
   const footer=page.locator('footer,[class*=site-footer]').first();if(await footer.count()){await footer.scrollIntoViewIfNeeded();await page.screenshot({path:stem+'-footer.jpg',type:'jpeg',quality:80});}
   const pref=kind==='home'?new URL(detail).pathname.split('/').slice(0,-1).join('/')+'/':'';
   const count=kind==='home'?new Set(links.filter(x=>x.path.startsWith(pref)).map(x=>x.path)).size:0;
   const result={kind,viewport,url:page.url(),status:response?.status(),...ui,homeDetailLinks:count};
   result.pass=response?.status()===200&&ui.contentWidth<=width&&ui.imgWidth>=240&&ui.footer&&ui.footerLinks.length>=3&&(kind==='home'?count>=31:/大教堂|主教座堂|教堂|座堂/.test(ui.h1));
   results.push(result);fs.writeFileSync(dir+'/results.json',JSON.stringify({sha:process.env.PRODUCTION_SHA,results},null,2));
  }
 }
 if(results.length!==4||results.some(r=>!r.pass))process.exitCode=1;
 }finally{await browser.close();}
})().catch(e=>{console.error(e);fs.mkdirSync('evidence/143/visual',{recursive:true});fs.writeFileSync('evidence/143/visual/error.txt',String(e));process.exitCode=1;});