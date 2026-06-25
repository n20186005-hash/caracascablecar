export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "深度科普",
      visiting: "游览指南",
      transportation: "交通物流",
      tips: "游览建议",
      reviews: "游客评价",
      faq: "常见问题",
      location: "地图位置",
    },
    hero: {
      tagline: "连接都市与云端森林的工程奇迹",
      title: "马拉韦雷帕诺缆车",
      subtitle: "Sistema Teleférico Warairarepano (原加拉加斯缆车)",
      cta: "探索缆车之旅",
    },
    rating: {
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "深度科普：你所不知道的阿维拉山与缆车",
      p1: "1. 名字背后的原住民记忆\n这座分隔了加拉加斯谷地与加勒比海的雄伟山脉，西班牙殖民时期被称为 Cerro El Ávila。而它现在的官方名称 Warairarepano（马拉韦雷帕诺）源自加拉加斯原住民（加拉加斯印第安人）的语言，意为“貘（Tapir）的故乡”或“广阔的山脉”。这座山不仅是城市的天然肺叶，更是委内瑞拉本土文化的象征。",
      p2: "2. 跨越时代的工程地标\n马拉韦雷帕诺缆车系统于1956年首次建成，在当时是世界上最长、最先进的客运缆车系统之一。它是一项卓越的山地工程，旨在将拥挤的加拉加斯谷地与高山自然环境直接相连。经过2007年的大规模现代化改造，如今的缆车系统采用了更安全的双轨技术，全长约3.5公里，仅需15-20分钟即可完成近1000米的海拔爬升。",
      p3: "4. 从都市到云雾林的垂直生态\n乘坐缆车不仅是一次交通位移，更是一堂生动的垂直生态课。随着海拔的升高，游客可以明显观察到植被的演变——从谷地的干燥灌木丛，逐渐过渡到山顶常年被云雾缭绕的热带高山云雾林。这里是数百种鸟类、兰花和特有昆虫的栖息地。",
      highlights: {
        title: "景点速览 (Quick Facts)",
        items: [
          "地理位置：委内瑞拉，加拉加斯首都区",
          "所属山脉：委内瑞拉海岸山脉 (Cordillera de la Costa)",
          "最高海拔：约 2,100 米 (Ávila 山顶)",
          "首建年份：1956 年",
          "生态系统：热带高山云雾林 (Bosque Nublado)",
        ],
      },
      management: {
        title: "3. 山顶的现代主义建筑瑰宝：洪堡酒店 (Hotel Humboldt)",
        content: "到达缆车终点，映入眼帘的圆柱形塔楼便是著名的洪堡酒店。这座建于1956年的建筑由委内瑞拉著名建筑师 Tomás Sanabria 设计，是拉美现代主义建筑的典范。它的独特之处在于其360度的圆形结构，使入住者可以同时俯瞰南侧的加拉加斯市景和北侧的加勒比海。它曾经历过长时间的荒废，但如今已作为重要的历史建筑遗产被全面修复并恢复运营，不仅是建筑地标，游客也可在此体验高端餐饮或预订入住。",
      },
    },
    visiting: {
      title: "客观游览指南 (Visitor Information)",
      hours: {
        title: "开放时间",
        content: "周二至周日： 10:00 - 18:00",
        note: "周一： 缆车系统例行安全维护，不对外开放。",
      },
      price: {
        title: "票务参考",
        content: "外国游客往返约 15-20 美元（以官方实时公示为准）",
        note: "售票处广泛支持美元现金、国际信用卡及 Zelle 等电子支付方式。",
      },
      duration: {
        title: "气候与温差",
        content: "山顶比市区低 5°C - 8°C",
        note: "常伴冷风，务必携带防风外套或毛衣",
      },
      bring: {
        title: "游览准备",
        items: [
          "防风外套或毛衣（山顶常伴有冷风）",
          "到达山顶后，可在终点站换乘当地吉普车前往传统农业小镇 Galipán（加利潘），了解花卉种植文化。",
        ],
      },
    },
    transportation: {
      title: "交通物流：如何抵达马拉佩雷斯起点站",
      airport: {
        title: "从机场出发 (CCS：迈克蒂亚国际机场)",
        content: "从机场到马拉佩雷斯缆车站全程约 30 公里，穿越多山地形。为了确保安全和高效，请参考以下详细步骤：",
        options: [
          {
            name: "选项 A：官方机场出租车（最推荐）",
            price: "$30 - $50 美元",
            time: "45 - 60 分钟",
            steps: [
              "第 1 步：提取行李后，请勿跟随主动搭讪的私人司机走出航站楼。",
              "第 2 步：在国际到达大厅内部，寻找官方认证的出租车柜台（通常提供黑色 SUV 或带有官方标识的轿车）。",
              "第 3 步：在柜台购票或确认价格，明确告知目的地为：“Estación Teleférico Maripérez”（马拉佩雷斯缆车站）。",
              "第 4 步：凭票跟随指定司机前往专用停车位上车，直达缆车站入口。"
            ]
          },
          {
            name: "选项 B：网约车服务 (Ridery / Yummy)",
            price: "$25 - $40 美元",
            time: "45 - 60 分钟",
            steps: [
              "第 1 步：出发前在手机上下载委内瑞拉本土网约车 App：Ridery 或 Yummy Rides。",
              "第 2 步：连接机场 Wi-Fi 或使用漫游网络，在 App 中将目的地设置为“Teleférico de Caracas (Estación Maripérez)”。",
              "第 3 步：确认订单后，在 App 指定的航站楼出口处与司机碰面。"
            ]
          },
          {
            name: "选项 C：机场大巴 + 城市出租车",
            price: "$10 美元以内",
            time: "1.5 - 2 小时",
            steps: [
              "第 1 步：在机场出口乘坐官方 UCAMC 机场大巴，前往加拉加斯市区（终点通常在 Parque Central 或 Gato Negro 附近）。",
              "第 2 步：抵达市区下车点后，通过网约车 App 或在路边呼叫正规的城市出租车（车顶有 Taxi 标志）。",
              "第 3 步：前往缆车站（大巴下车点距离缆车站仍有约 10-15 分钟车程）。"
            ]
          }
        ]
      },
      city: {
        title: "从加拉加斯市区出发 (地铁 + 接驳)",
        content: "缆车站位于城市北部山脉脚下，由于有一段长且陡峭的上坡路，极其不建议游客直接从地铁站步行前往。",
        steps: [
          "第 1 步：乘坐地铁。 搭乘加拉加斯地铁 1 号线（Linea 1），在 Plaza Venezuela（委内瑞拉广场站）下车。",
          "第 2 步：出站换乘。 从地铁站出站后，请使用 Ridery/Yummy App 呼叫车辆，或直接在广场附近寻找正规出租车。",
          "第 3 步：前往终点。 告诉司机沿着 Avenida Principal de Maripérez（马拉佩雷斯主干道）一直向北行驶至尽头，车程仅需 5-8 分钟即可抵达缆车售票大厅。"
        ]
      },
      selfDrive: {
        title: "自驾或包车直达",
        content: "如果您在当地租车或包车游览，前往缆车站的道路非常清晰。",
        steps: [
          "导航设置：在 Google Maps 或 Waze 中输入精准坐标 G477+4CP, Final Av. Principal de Maripérez 或搜索 Sistema Teleférico Warairarepano。",
          "行车路线：最快捷的路线是驶入加拉加斯北部的 Avenida Boyacá，从 Maripérez 出口驶出，缆车站就位于出口交汇处附近。",
          "停车指南：车站入口大门内设有专用的游客收费停车场。周末及节假日车位紧张，建议在上午 10:00 前抵达。"
        ]
      }
    },
    tips: {
      title: "游览建议",
      items: [
        "温差准备：山顶海拔超过2000米，气温通常比加拉加斯市区低 5°C - 8°C，且常伴有冷风，务必携带防风外套或毛衣。",
        "路线延伸：到达山顶后，除了观景，还可在终点站换乘当地的四驱吉普车，前往山脊背后的传统农业小镇 Galipán（加利潘），了解当地的花卉种植文化。",
        "如遇强风或雷暴天气，缆车会出于安全考虑临时停运。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题科普 (FAQ)",
      subtitle: "深入了解缆车与周边环境",
      items: [
        {
          question: "需要提前在网上预订缆车票吗？",
          answer: "目前无需提前网购。门票直接在起点站（Maripérez）的售票窗口现场购买即可。周末和节假日人流量较大，建议在上午 10:00 开门前抵达排队。"
        },
        {
          question: "缆车可以将我带到多高的地方？会有高原反应吗？",
          answer: "缆车终点站的海拔约为 2,100 米（6,890 英尺）。大多数游客在此高度不会出现严重的高原反应，但可能会感到气喘或轻微疲劳。建议放慢步行速度，并注意保暖。"
        },
        {
          question: "我可以带宠物一起乘坐缆车吗？",
          answer: "出于安全和国家公园生态保护的规定，普通游客不允许携带宠物（包括猫狗）乘坐缆车或进入 Ávila 国家公园区域。导盲犬等服务性动物需提前出示相关证明文件。"
        },
        {
          question: "缆车站和车厢是否对轮椅使用者友好？",
          answer: "缆车系统进行了现代化升级，起点和终点站均配有坡道和电梯。宽敞的缆车车厢允许标准尺寸的折叠轮椅进入，工作人员会提供登车协助。"
        },
        {
          question: "山顶除了看风景，还有其他餐饮选择吗？",
          answer: "有非常丰富的选择。除了标志性的洪堡酒店（Hotel Humboldt）内的高级餐厅外，山顶步道沿途有众多售卖当地特色美食的摊位，如草莓奶油杯（Fresas con crema）、热巧克力、手工饼干以及委内瑞拉传统的阿雷帕饼（Arepas）。"
        },
        {
          question: "我可以徒步爬上 Ávila 山，然后坐缆车下山吗？",
          answer: "可以。很多当地户外爱好者会选择清晨从 Sabas Nieves 等步道徒步登顶，然后在山顶购买单程票乘坐缆车下山。请注意，徒步路线极具挑战性，需具备良好的体能并准备充足的饮用水。"
        },
        {
          question: "如果遇到下雨或恶劣天气，缆车还会运行吗？",
          answer: "出于安全考量，遇到强风、雷暴或极端恶劣天气时，缆车会暂时停止运行，直到天气条件恢复安全标准。建议在雨季（5月至11月）出行前，关注当天早上的实时天气预报。"
        },
        {
          question: "缆车在运行途中会因为停电而停在半空中吗？",
          answer: "缆车系统配备了独立的备用发电机组。即使加拉加斯市区发生电网故障，备用电源也能确保缆车低速运行，将所有车厢内的乘客安全运送至终点或起点站。"
        },
        {
          question: "为什么下午上山经常看不到全景？",
          answer: "这属于典型的热带高山气候特征。下午受加勒比海暖湿气流抬升影响，山顶极易形成浓厚的云雾（即“云雾林”的成因）。因此，若以拍摄清晰的加拉加斯城市全景为目的，气象学上建议在上午10:00至中午12:00之间抵达山顶。"
        },
        {
          question: "洪堡酒店现在是一片废墟吗？",
          answer: "并非如此。虽然它曾在历史中经历了数十年的关闭和局部损坏，但目前已经过国家级文保标准的全面修复，并恢复了其作为高级酒店和历史地标的功能。游客可以近距离欣赏其修复后的现代主义建筑细节。"
        }
      ],
    },
    location: {
      title: "地图位置",
      address: "G477+4CP, Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital, 委内瑞拉",
      openMaps: "在 Google Maps 查看位置",
    },
    contact: {
      title: "联系方式",
      phone: "+58 212 901 5555",
      phoneNote: "建议提前致电确认运营状态",
    },
    footer: {
      text: "© 2026 马拉韦雷帕诺缆车旅行指南 · 保留所有权利。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "委内瑞拉国家公园管理局", url: "https://www.inparques.gob.ve/" },
        { name: "委内瑞拉人民政权旅游部", url: "http://www.mintur.gob.ve/" },
        { name: "世界保护区数据库", url: "https://www.protectedplanet.net/" },
        { name: "委内瑞拉非盈利生态保护NGO", url: "https://www.provita.org.ve/" },
        { name: "委内瑞拉缆车公司", url: "https://ventel.gob.ve/" },
      ],
    },
  },
  en: {
    nav: {
      about: "In-Depth",
      visiting: "Visit Guide",
      transportation: "Logistics",
      tips: "Travel Tips",
      reviews: "Reviews",
      faq: "FAQ",
      location: "Location",
    },
    hero: {
      tagline: "An Engineering Marvel Connecting City and Cloud Forest",
      title: "Warairarepano Cable Car",
      subtitle: "Sistema Teleférico Warairarepano (Formerly Caracas Cable Car)",
      cta: "Explore the Cable Car Journey",
    },
    rating: {
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "In-Depth: Ávila Mountain & The Cable Car",
      p1: "1. Indigenous Memory Behind the Name\nThis majestic mountain range separating the Caracas valley from the Caribbean Sea was known as Cerro El Ávila during Spanish colonization. Its current official name, Warairarepano, comes from the language of the indigenous Caracas people, meaning 'Home of the Tapir' or 'Vast Mountains.' This mountain is not only the city's natural lung but also a symbol of Venezuelan native culture.",
      p2: "2. An Engineering Landmark Across Eras\nThe Warairarepano cable car system was first built in 1956 and was one of the longest and most advanced passenger cable car systems in the world at the time. It is an outstanding piece of mountain engineering designed to connect the crowded Caracas valley directly with the high-altitude natural environment. Following a major modernization in 2007, the current system uses safer dual-track technology. Spanning approximately 3.5 kilometers, it climbs nearly 1,000 meters in elevation in just 15-20 minutes.",
      p3: "4. Vertical Ecology: From City to Cloud Forest\nRiding the cable car is not just a transit journey, but a vivid lesson in vertical ecology. As the altitude increases, visitors can clearly observe the evolution of vegetation—from dry shrubs in the valley to the tropical high-altitude cloud forest (Bosque Nublado) at the summit, which is perpetually shrouded in mist. This area is home to hundreds of bird species, orchids, and endemic insects.",
      highlights: {
        title: "Quick Facts",
        items: [
          "Location: Caracas Capital District, Venezuela",
          "Mountain Range: Venezuelan Coastal Range (Cordillera de la Costa)",
          "Highest Elevation: ~2,100 meters (Ávila Summit)",
          "Year Built: 1956",
          "Ecosystem: Tropical Cloud Forest (Bosque Nublado)",
        ],
      },
      management: {
        title: "3. Modernist Architectural Gem: Hotel Humboldt",
        content: "Upon reaching the cable car terminal, the cylindrical tower that comes into view is the famous Hotel Humboldt. Built in 1956 and designed by renowned Venezuelan architect Tomás Sanabria, it is a masterpiece of Latin American modernist architecture. Its unique 360-degree circular structure allows guests to simultaneously overlook the Caracas cityscape to the south and the Caribbean Sea to the north. Although it was abandoned for a long period, it has now been fully restored and resumed operations. It is not only a historical landmark but also a place where visitors can experience fine dining or book a stay.",
      },
    },
    visiting: {
      title: "Objective Visitor Information",
      hours: {
        title: "Operating Hours",
        content: "Tuesday - Sunday: 10:00 - 18:00",
        note: "Monday: Closed for routine safety maintenance.",
      },
      price: {
        title: "Ticket Information",
        content: "Foreign tourists: ~$15-20 USD round trip (subject to official rates)",
        note: "Ticket offices widely accept US dollars, international credit cards, and electronic payments like Zelle.",
      },
      duration: {
        title: "Climate & Temperature",
        content: "Summit is 5°C - 8°C cooler than the city",
        note: "Always bring a windproof jacket or sweater",
      },
      bring: {
        title: "Preparation",
        items: [
          "Windproof jacket or sweater (cold winds are common at the summit)",
          "Upon reaching the summit, you can transfer to local 4x4 jeeps to visit Galipán, a traditional agricultural town known for its flower cultivation.",
        ],
      },
    },
    transportation: {
      title: "Logistics: How to Reach the Maripérez Station",
      airport: {
        title: "From the Airport (CCS: Maiquetía Int'l)",
        content: "The distance from the airport to Maripérez cable car station is about 30 km through mountainous terrain. For safety and efficiency, please follow these step-by-step guides:",
        options: [
          {
            name: "Option A: Official Airport Taxi (Highly Recommended)",
            price: "$30 - $50 USD",
            time: "45 - 60 mins",
            steps: [
              "Step 1: After claiming your luggage, do not follow unauthorized drivers soliciting outside the terminal.",
              "Step 2: Inside the international arrivals hall, look for the official certified taxi counters (usually offering black SUVs or cars with official logos).",
              "Step 3: Buy a ticket or confirm the price at the counter, clearly stating your destination: 'Estación Teleférico Maripérez'.",
              "Step 4: With your ticket, follow the assigned driver to the dedicated parking spot. They will take you directly to the cable car entrance."
            ]
          },
          {
            name: "Option B: Ride-Hailing (Ridery / Yummy)",
            price: "$25 - $40 USD",
            time: "45 - 60 mins",
            steps: [
              "Step 1: Download Venezuelan local ride-hailing apps: Ridery or Yummy Rides before your trip.",
              "Step 2: Connect to airport Wi-Fi or roaming, and set your destination to 'Teleférico de Caracas (Estación Maripérez)'.",
              "Step 3: After confirming the ride, meet your driver at the designated terminal exit."
            ]
          },
          {
            name: "Option C: Airport Bus + City Taxi",
            price: "Under $10 USD",
            time: "1.5 - 2 hours",
            steps: [
              "Step 1: Take the official UCAMC airport bus outside the terminal heading to downtown Caracas (usually dropping off near Parque Central or Gato Negro).",
              "Step 2: Once downtown, use a ride-hailing app or hail a registered city taxi (with a Taxi sign on the roof).",
              "Step 3: Head to the cable car station (it's still a 10-15 minute drive from the bus drop-off)."
            ]
          }
        ]
      },
      city: {
        title: "From Downtown Caracas (Metro + Transfer)",
        content: "The station is located at the foot of the northern mountains. Because there is a long and steep uphill walk, it is highly discouraged for tourists to walk directly from the metro station.",
        steps: [
          "Step 1: Take the Metro. Ride Caracas Metro Line 1 and get off at Plaza Venezuela station.",
          "Step 2: Transfer. After exiting the metro station, use the Ridery/Yummy app or find a registered taxi near the plaza.",
          "Step 3: Reach the Destination. Tell the driver to go straight north along Avenida Principal de Maripérez until the end. It's only a 5-8 minute drive to the ticket hall."
        ]
      },
      selfDrive: {
        title: "Self-Drive or Chartered Vehicle",
        content: "If you rent a car or hire a private driver, the route to the station is very straightforward.",
        steps: [
          "Navigation: Enter the exact coordinates G477+4CP, Final Av. Principal de Maripérez or search 'Sistema Teleférico Warairarepano' in Google Maps or Waze.",
          "Driving Route: The fastest way is to get onto Avenida Boyacá (locally known as Cota Mil highway) in northern Caracas and take the Maripérez exit. The station is right near the intersection.",
          "Parking: There is a dedicated paid parking lot for visitors inside the station gates. Arrive before 10:00 AM on weekends and holidays to secure a spot."
        ]
      }
    },
    tips: {
      title: "Travel Tips",
      items: [
        "Temperature Prep: The summit altitude exceeds 2,000 meters, and temperatures are typically 5°C - 8°C cooler than downtown Caracas with cold winds. A windproof jacket or sweater is essential.",
        "Route Extension: Beyond sightseeing at the summit, you can take a local 4x4 jeep from the terminal to Galipán, a traditional agricultural town on the mountain's ridge, to learn about local flower cultivation.",
        "Weather Interruptions: In the event of strong winds or thunderstorms, the cable car will temporarily suspend operations for safety.",
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Learn more about the cable car and its surroundings",
      items: [
        {
          question: "Do I need to book cable car tickets online in advance?",
          answer: "Currently, online booking is not required. You can purchase tickets directly at the ticket window at the starting station (Maripérez). On weekends and holidays, it's recommended to arrive before the 10:00 AM opening time to avoid long queues."
        },
        {
          question: "How high does the cable car go? Will I get altitude sickness?",
          answer: "The terminal station is at an altitude of approximately 2,100 meters (6,890 feet). Most visitors do not experience severe altitude sickness at this height, but you might feel slightly short of breath or fatigued. It's advisable to walk slowly and stay warm."
        },
        {
          question: "Can I bring my pet on the cable car?",
          answer: "For safety reasons and national park ecological protection rules, regular visitors are not allowed to bring pets (including cats and dogs) on the cable car or into the Ávila National Park area. Service animals like guide dogs require proper documentation."
        },
        {
          question: "Are the cable car stations and cabins wheelchair accessible?",
          answer: "Yes, the cable car system has been modernized, and both stations are equipped with ramps and elevators. The spacious cabins can accommodate standard-sized folding wheelchairs, and staff are available to assist with boarding."
        },
        {
          question: "Are there food options at the summit besides enjoying the view?",
          answer: "There are plenty of options! In addition to the fine dining at the iconic Hotel Humboldt, there are many stalls along the summit pathways selling local treats like strawberries with cream (Fresas con crema), hot chocolate, handmade cookies, and traditional Venezuelan Arepas."
        },
        {
          question: "Can I hike up Ávila mountain and take the cable car down?",
          answer: "Yes! Many local outdoor enthusiasts hike up early in the morning via trails like Sabas Nieves, and then buy a one-way ticket at the summit to ride the cable car down. Note that the hiking trails are challenging, requiring good fitness and plenty of drinking water."
        },
        {
          question: "Does the cable car run if it rains or in bad weather?",
          answer: "For safety reasons, operations are temporarily suspended during strong winds, thunderstorms, or extreme weather conditions until it's safe again. During the rainy season (May to November), check the real-time weather forecast on the morning of your visit."
        },
        {
          question: "Will the cable car get stuck mid-air during a power outage?",
          answer: "The cable car system is equipped with independent backup generators. Even if the Caracas city power grid fails, the backup power ensures the cable cars can operate at a lower speed to safely transport all passengers to the terminal or starting station."
        },
        {
          question: "Why is it hard to see the panoramic view in the afternoon?",
          answer: "This is a typical feature of the tropical alpine climate. Influenced by warm, moist air currents from the Caribbean Sea rising in the afternoon, dense clouds easily form at the summit (this is how the 'cloud forest' is created). Therefore, if your goal is to photograph a clear panorama of Caracas, meteorologists recommend arriving at the summit between 10:00 AM and 12:00 PM."
        },
        {
          question: "Is the Hotel Humboldt currently a ruin?",
          answer: "Not at all. Although it experienced decades of closure and partial damage in the past, it has now undergone a comprehensive restoration to national heritage standards. It has resumed its function as a luxury hotel and historical landmark. Visitors can admire its restored modernist architectural details up close or enjoy its premium services."
        }
      ],
    },
    location: {
      title: "Map Location",
      address: "G477+4CP, Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital, Venezuela",
      openMaps: "View Location on Google Maps",
    },
    contact: {
      title: "Contact",
      phone: "+58 212 901 5555",
      phoneNote: "Call ahead to confirm operating status",
    },
    footer: {
      text: "© 2026 Warairarepano Cable Car Travel Guide · All rights reserved.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "Inparques (Venezuela National Parks Institute)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministry of Tourism (Venezuela)", url: "http://www.mintur.gob.ve/" },
        { name: "World Database on Protected Areas", url: "https://www.protectedplanet.net/" },
        { name: "Provita (Venezuelan Conservation NGO)", url: "https://www.provita.org.ve/" },
        { name: "VENETEL (Venezuelan Cable Car Company)", url: "https://ventel.gob.ve/" },
      ],
    },
  },
  es: {
    nav: {
      about: "Ciencia en Profundidad",
      visiting: "Guía de Visita",
      transportation: "Logística",
      tips: "Consejos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
      location: "Ubicación",
    },
    hero: {
      tagline: "Una Maravilla de Ingeniería entre la Ciudad y el Bosque Nublado",
      title: "Teleférico Warairarepano",
      subtitle: "Sistema Teleférico Warairarepano (Anteriormente Teleférico de Caracas)",
      cta: "Explora el Viaje en Teleférico",
    },
    rating: {
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Ciencia en Profundidad: El Ávila y el Teleférico",
      p1: "1. La Memoria Indígena Detrás del Nombre\nEsta majestuosa cordillera que separa el valle de Caracas del Mar Caribe fue conocida como Cerro El Ávila durante la colonización española. Su nombre oficial actual, Warairarepano, proviene de la lengua de los indígenas de Caracas y significa 'Hogar del Tapir' o 'Sierra Grande'. Esta montaña no solo es el pulmón natural de la ciudad, sino también un símbolo de la cultura originaria venezolana.",
      p2: "2. Un Hito de Ingeniería de Diferentes Épocas\nEl sistema de teleférico Warairarepano fue inaugurado en 1956 y era uno de los sistemas de teleférico de pasajeros más largos y avanzados del mundo en ese momento. Es una obra de ingeniería de montaña excepcional diseñada para conectar directamente el concurrido valle de Caracas con el entorno natural de alta montaña. Tras una importante modernización en 2007, el sistema actual utiliza tecnología de doble vía más segura. Con una longitud de aproximadamente 3,5 kilómetros, asciende casi 1.000 metros de altitud en solo 15-20 minutos.",
      p3: "4. Ecología Vertical: De la Ciudad al Bosque Nublado\nViajar en el teleférico no es solo un desplazamiento de transporte, sino una vívida lección de ecología vertical. A medida que aumenta la altitud, los visitantes pueden observar claramente la evolución de la vegetación, desde los arbustos secos del valle hasta el bosque nublado tropical de alta montaña en la cima, permanentemente envuelto en neblina. Esta área es el hábitat de cientos de especies de aves, orquídeas e insectos endémicos.",
      highlights: {
        title: "Datos Rápidos (Quick Facts)",
        items: [
          "Ubicación: Distrito Capital, Caracas, Venezuela",
          "Cordillera: Cordillera de la Costa de Venezuela",
          "Altitud Máxima: ~2.100 metros (Cima del Ávila)",
          "Año de Construcción: 1956",
          "Ecosistema: Bosque Nublado Tropical",
        ],
      },
      management: {
        title: "3. Joya Arquitectónica Modernista: Hotel Humboldt",
        content: "Al llegar a la estación del teleférico, la torre cilíndrica que aparece a la vista es el famoso Hotel Humboldt. Construido en 1956 y diseñado por el renombrado arquitecto venezolano Tomás Sanabria, es una obra maestra de la arquitectura modernista latinoamericana. Su singular estructura circular de 360 grados permite a los huéspedes contemplar simultáneamente el paisaje urbano de Caracas al sur y el Mar Caribe al norte. Aunque estuvo abandonado durante un largo período, ahora ha sido completamente restaurado y ha reanudado sus operaciones. No solo es un hito arquitectónico, sino también un lugar donde los visitantes pueden disfrutar de alta cocina o reservar una estadía.",
      },
    },
    visiting: {
      title: "Guía Objetiva para Visitantes",
      hours: {
        title: "Horario de Operación",
        content: "Martes - Domingo: 10:00 - 18:00",
        note: "Lunes: Cerrado por mantenimiento de seguridad de rutina.",
      },
      price: {
        title: "Información de Boletos",
        content: "Turistas extranjeros: ~$15-20 USD ida y vuelta (sujeto a tarifas oficiales)",
        note: "Las taquillas aceptan dólares en efectivo, tarjetas de crédito internacionales y pagos electrónicos como Zelle.",
      },
      duration: {
        title: "Clima y Temperatura",
        content: "La cima es 5°C - 8°C más fría que la ciudad",
        note: "Lleve siempre una chaqueta cortavientos o suéter",
      },
      bring: {
        title: "Preparación",
        items: [
          "Chaqueta cortavientos o suéter (los vientos fríos son comunes en la cima)",
          "Al llegar a la cima, puede tomar un jeep 4x4 local para visitar Galipán, un pueblo agrícola tradicional conocido por el cultivo de flores.",
        ],
      },
    },
    transportation: {
      title: "Logística: Cómo Llegar a la Estación Maripérez",
      airport: {
        title: "Desde el Aeropuerto (CCS: Internacional de Maiquetía)",
        content: "La distancia desde el aeropuerto hasta la estación del teleférico de Maripérez es de unos 30 km a través de terreno montañoso. Para mayor seguridad y eficiencia, siga estas guías paso a paso:",
        options: [
          {
            name: "Opción A: Taxi Oficial del Aeropuerto (Muy Recomendado)",
            price: "$30 - $50 USD",
            time: "45 - 60 min",
            steps: [
              "Paso 1: Después de recoger su equipaje, no siga a los conductores no autorizados que ofrecen servicios fuera de la terminal.",
              "Paso 2: Dentro de la sala de llegadas internacionales, busque los mostradores de taxis oficiales certificados (generalmente ofrecen SUV negros o autos con logotipos oficiales).",
              "Paso 3: Compre un boleto o confirme el precio en el mostrador, indicando claramente su destino: 'Estación Teleférico Maripérez'.",
              "Paso 4: Con su boleto, siga al conductor asignado hasta el lugar de estacionamiento exclusivo. Lo llevarán directamente a la entrada del teleférico."
            ]
          },
          {
            name: "Opción B: App de Transporte (Ridery / Yummy)",
            price: "$25 - $40 USD",
            time: "45 - 60 min",
            steps: [
              "Paso 1: Descargue las aplicaciones locales de transporte de Venezuela: Ridery o Yummy Rides antes de su viaje.",
              "Paso 2: Conéctese al Wi-Fi del aeropuerto o roaming, y establezca su destino en 'Teleférico de Caracas (Estación Maripérez)'.",
              "Paso 3: Después de confirmar el viaje, reúnase con su conductor en la salida designada de la terminal."
            ]
          },
          {
            name: "Opción C: Autobús del Aeropuerto + Taxi Urbano",
            price: "Menos de $10 USD",
            time: "1.5 - 2 horas",
            steps: [
              "Paso 1: Tome el autobús oficial del aeropuerto UCAMC fuera de la terminal con destino al centro de Caracas (generalmente deja cerca de Parque Central o Gato Negro).",
              "Paso 2: Una vez en el centro, use una aplicación de transporte o llame a un taxi urbano registrado (con un letrero de Taxi en el techo).",
              "Paso 3: Diríjase a la estación del teleférico (todavía hay un viaje de 10-15 minutos desde donde lo deja el autobús)."
            ]
          }
        ]
      },
      city: {
        title: "Desde el Centro de Caracas (Metro + Traslado)",
        content: "La estación se encuentra al pie de las montañas del norte. Debido a que hay una caminata cuesta arriba larga y empinada, se desaconseja encarecidamente que los turistas caminen directamente desde la estación de metro.",
        steps: [
          "Paso 1: Tome el Metro. Tome la Línea 1 del Metro de Caracas y bájese en la estación Plaza Venezuela.",
          "Paso 2: Traslado. Después de salir de la estación de metro, use la aplicación Ridery/Yummy o busque un taxi registrado cerca de la plaza.",
          "Paso 3: Llegue al Destino. Dígale al conductor que siga recto hacia el norte por la Avenida Principal de Maripérez hasta el final. Es solo un viaje de 5-8 minutos hasta la sala de boletos."
        ]
      },
      selfDrive: {
        title: "Conducción Propia o Vehículo Privado",
        content: "Si alquila un automóvil o contrata un conductor privado, la ruta a la estación es muy directa.",
        steps: [
          "Navegación: Ingrese las coordenadas exactas G477+4CP, Final Av. Principal de Maripérez o busque 'Sistema Teleférico Warairarepano' en Google Maps o Waze.",
          "Ruta de Conducción: La forma más rápida es tomar la Avenida Boyacá (conocida localmente como autopista Cota Mil) en el norte de Caracas y tomar la salida de Maripérez. La estación está justo cerca de la intersección.",
          "Estacionamiento: Hay un estacionamiento pago exclusivo para visitantes dentro de las puertas de la estación. Llegue antes de las 10:00 AM los fines de semana y días festivos para asegurar un lugar."
        ]
      }
    },
    tips: {
      title: "Consejos de Viaje",
      items: [
        "Preparación para el Clima: La altitud de la cima supera los 2.000 metros, y las temperaturas suelen ser 5°C - 8°C más frías que en el centro de Caracas con vientos fríos. Es esencial una chaqueta cortavientos o suéter.",
        "Extensión de Ruta: Además de las vistas en la cima, puede tomar un jeep 4x4 local desde la terminal hasta Galipán, un pueblo agrícola tradicional en la cresta de la montaña, para conocer el cultivo de flores local.",
        "Interrupciones por Clima: En caso de vientos fuertes o tormentas eléctricas, el teleférico suspenderá temporalmente sus operaciones por seguridad.",
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Conozca más sobre el teleférico y su entorno",
      items: [
        {
          question: "¿Necesito reservar los boletos del teleférico por internet con anticipación?",
          answer: "Actualmente no es necesario comprar en línea. Puede adquirir los boletos directamente en la taquilla de la estación de inicio (Maripérez). Los fines de semana y días festivos, se recomienda llegar antes de la apertura a las 10:00 AM para evitar largas filas."
        },
        {
          question: "¿Qué tan alto llega el teleférico? ¿Me dará el mal de altura?",
          answer: "La estación terminal se encuentra a una altitud de aproximadamente 2.100 metros (6.890 pies). La mayoría de los visitantes no experimentan mal de altura severo a esta altura, pero podrían sentir un poco de fatiga o falta de aliento. Se recomienda caminar despacio y mantenerse abrigado."
        },
        {
          question: "¿Puedo llevar a mi mascota en el teleférico?",
          answer: "Por razones de seguridad y normas de protección ecológica del parque nacional, no se permite a los visitantes regulares llevar mascotas (incluidos perros y gatos) en el teleférico o en el área del Parque Nacional Ávila. Los animales de servicio, como los perros guía, requieren documentación adecuada."
        },
        {
          question: "¿Las estaciones y las cabinas del teleférico son accesibles para sillas de ruedas?",
          answer: "Sí, el sistema de teleférico ha sido modernizado y ambas estaciones cuentan con rampas y ascensores. Las espaciosas cabinas pueden acomodar sillas de ruedas plegables de tamaño estándar, y el personal está disponible para ayudar con el embarque."
        },
        {
          question: "¿Hay opciones de comida en la cima además de disfrutar de la vista?",
          answer: "¡Hay muchas opciones! Además de la alta cocina en el icónico Hotel Humboldt, hay numerosos puestos a lo largo de los senderos de la cima que venden delicias locales como fresas con crema, chocolate caliente, galletas artesanales y las tradicionales arepas venezolanas."
        },
        {
          question: "¿Puedo subir caminando la montaña Ávila y tomar el teleférico para bajar?",
          answer: "¡Sí! Muchos entusiastas locales del aire libre suben temprano en la mañana a través de senderos como Sabas Nieves, y luego compran un boleto de ida en la cima para bajar en el teleférico. Tenga en cuenta que los senderos son desafiantes, requieren buena condición física y abundante agua."
        },
        {
          question: "¿Funciona el teleférico si llueve o hay mal tiempo?",
          answer: "Por razones de seguridad, las operaciones se suspenden temporalmente durante vientos fuertes, tormentas eléctricas o condiciones climáticas extremas hasta que sea seguro nuevamente. Durante la temporada de lluvias (mayo a noviembre), verifique el pronóstico del tiempo en tiempo real en la mañana de su visita."
        },
        {
          question: "¿Se quedará atascado el teleférico en el aire durante un apagón?",
          answer: "El sistema de teleférico está equipado con generadores de respaldo independientes. Incluso si falla la red eléctrica de la ciudad de Caracas, la energía de respaldo garantiza que las cabinas puedan operar a menor velocidad para transportar de manera segura a todos los pasajeros hasta la terminal o la estación de inicio."
        },
        {
          question: "¿Por qué es difícil ver la vista panorámica por la tarde?",
          answer: "Esta es una característica típica del clima alpino tropical. Influenciado por las corrientes de aire cálido y húmedo del Mar Caribe que ascienden por la tarde, se forman fácilmente nubes densas en la cima (así se crea el 'bosque nublado'). Por lo tanto, si su objetivo es fotografiar un panorama claro de Caracas, los meteorólogos recomiendan llegar a la cima entre las 10:00 y las 12:00 horas."
        },
        {
          question: "¿El Hotel Humboldt es actualmente una ruina?",
          answer: "En absoluto. Aunque experimentó décadas de cierre y daños parciales en el pasado, ahora ha sido sometido a una restauración integral con estándares de patrimonio nacional. Ha retomado su función como hotel de lujo y monumento histórico. Los visitantes pueden admirar de cerca los detalles arquitectónicos modernistas restaurados o disfrutar de sus servicios de primera clase."
        }
      ],
    },
    location: {
      title: "Ubicación en el Mapa",
      address: "G477+4CP, Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital, Venezuela",
      openMaps: "Ver Ubicación en Google Maps",
    },
    contact: {
      title: "Contacto",
      phone: "+58 212 901 5555",
      phoneNote: "Llame con anticipación para confirmar el estado de operación",
    },
    footer: {
      text: "© 2026 Guía de Viaje Teleférico Warairarepano · Todos los derechos reservados.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "Inparques (Instituto Nacional de Parques)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministerio del Poder Popular para el Turismo", url: "http://www.mintur.gob.ve/" },
        { name: "Base de Datos Mundial de Áreas Protegidas", url: "https://www.protectedplanet.net/" },
        { name: "Provita (ONG de Conservación Venezolana)", url: "https://www.provita.org.ve/" },
        { name: "VENETEL (Empresa Venezolana de Teleféricos)", url: "https://ventel.gob.ve/" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: { title: string; items: string[] };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    airport: { title: string; content: string; options: TransportOption[] };
    city: { title: string; content: string; steps: string[] };
    selfDrive: { title: string; content: string; steps: string[] };
  };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  footer: { text: string; made: string; linksTitle: string; links: LinkItem[] };
};
