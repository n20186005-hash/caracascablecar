export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "关于",
      visiting: "游览信息",
      transportation: "交通方式",
      tips: "旅游贴士",
      reviews: "游客评价",
      faq: "常见问题",
      location: "地图位置",
    },
    hero: {
      tagline: "穿越云端，俯瞰加拉加斯",
      title: "马拉韦雷帕诺缆车",
      subtitle: "Sistema Teleférico Warairarepano",
      cta: "探索缆车之旅",
    },
    rating: {
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "关于马拉韦雷帕诺缆车",
      p1: "马拉韦雷帕诺缆车（Sistema Teleférico Warairarepano），原名加拉加斯缆车（Teleférico de Caracas），是委内瑞拉首都加拉加斯的一座山地缆车系统，连接市区与Ávila国家公园山顶。缆车线路起点为马拉佩雷斯站（Estación Maripérez），终点为Ávila山顶的Humboldt酒店区域，全程约需15-20分钟，是欣赏加拉加斯全景和加勒比海远景的绝佳方式。",
      p2: "缆车于1956年首次开通，是当时世界上最长的缆车系统之一。经过多年停运后，于2007年重新修复开放。如今，它不仅是重要的公共交通方式，也是加拉加斯最受欢迎的旅游景点之一，被当地人和游客誉为通往天空的旅程。",
      highlights: {
        title: "景点亮点",
        items: [
          "全长约3.5公里的缆车线路",
          "直达Ávila国家公园山顶",
          "俯瞰加拉加斯全城美景",
          "山顶餐厅与观景台",
          "连接市区与自然的便捷通道",
        ],
      },
      management: {
        title: "运营管理",
        content: "缆车系统由委内瑞拉缆车公司（VENETEL）运营维护。作为连接城市与Ávila国家公园的重要交通设施，缆车不仅服务于游客，也为当地居民提供便捷的登山通道。票价实惠，是体验加拉加斯自然与城市风光的理想选择。",
      },
    },
    visiting: {
      title: "游览信息",
      hours: {
        title: "运营时间",
        content: "周二至周日 10:00 - 18:00",
        note: "周一例行维护，不对外开放",
      },
      price: {
        title: "票价",
        content: "约 2 - 5 美元（以当地货币为准）",
        note: "建议携带现金，部分窗口可能不支持刷卡",
      },
      duration: {
        title: "建议游览时长",
        content: "2 - 4 小时",
        note: "含缆车往返、山顶观景与用餐",
      },
      bring: {
        title: "建议携带",
        items: ["轻便外套（山顶温度较低）", "防晒霜与太阳镜", "相机或手机（拍照绝佳地点）", "舒适步行鞋", "现金（山顶消费使用）", "轻便背包"],
      },
    },
    transportation: {
      title: "交通指南",
      toStation: {
        title: "前往马拉佩雷斯站",
        content: "马拉佩雷斯站（Estación Maripérez）位于加拉加斯西北部，可乘坐地铁至La Bandera站后转乘出租车，或直接打车前往。地址：Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital。",
      },
      selfDrive: {
        title: "自驾前往",
        content: "从加拉加斯市中心沿Av. Principal de Maripérez行驶即可到达车站。车站附近有停车场，但车位有限，建议早到或选择公共交通。",
      },
      publicTransport: {
        title: "公共交通",
        content: "可乘坐加拉加斯地铁（Metro de Caracas）至最近站点后转乘出租车或公交车。建议向当地人询问最新交通路线，或使用打车软件直接前往Maripérez站。",
      },
      topActivities: {
        title: "山顶活动",
        content: "到达Ávila山顶后，可参观Humboldt酒店遗址、在观景台欣赏加拉加斯全景、在山顶餐厅用餐，或沿步道徒步探索Ávila国家公园的自然风光。",
      },
    },
    tips: {
      title: "实用信息与安全贴士",
      items: [
        "建议上午前往，天气较为晴朗，视野更佳，可拍摄清晰的城市全景。",
        "山顶温度比市区低5-8°C，务必携带轻便外套或毛衣，避免着凉。",
        "缆车途中景色壮观，建议提前清洁相机镜头，并确保手机/相机电量充足。",
        "山顶消费价格较高，建议自带水和零食，或预留足够的现金消费。",
        "加拉加斯天气变化较快，建议出发前查看天气，避免雨天影响视野。",
        "节假日和周末人流量较大，建议平日前往或提前排队，以免长时间等待。",
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
      title: "常见问题",
      subtitle: "关于马拉韦雷帕诺缆车的一切疑问",
      items: [
        {
          question: "缆车的起点站和终点站分别在哪里？",
          answer: "起点站为马拉佩雷斯站（Estación Maripérez），位于加拉加斯西北部；终点站为Ávila山顶区域，靠近Humboldt酒店遗址。全程约3.5公里，单程约15-20分钟。"
        },
        {
          question: "缆车票可以在哪里购买？",
          answer: "可在起点站Maripérez站的售票窗口现场购买。建议携带现金，因为部分窗口可能不接受信用卡。票价实惠，通常往返票价在几美元以内。"
        },
        {
          question: "山顶有什么值得游览的景点？",
          answer: "山顶主要景点包括：\n\n1. Humboldt酒店遗址 — 曾是山顶标志性建筑，现为观景点和历史遗迹。\n\n2. 观景台 — 可360度俯瞰加拉加斯全城，天气晴朗时甚至可以看到加勒比海。\n\n3. 山顶餐厅 — 提供当地美食，可在用餐的同时欣赏美景。\n\n4. Ávila国家公园步道 — 适合徒步爱好者探索自然风光。"
        },
        {
          question: "什么时间段去最好？",
          answer: "建议上午10:00-12:00前往，此时天气较为稳定，空气质量最佳，拍摄城市全景的效果最好。下午可能出现云雾，影响视野。日落前一小时也是热门时段，可欣赏壮丽日落。"
        },
        {
          question: "缆车安全吗？有安全保障措施吗？",
          answer: "缆车系统经过2007年的全面修复，符合国际安全标准。每个缆车车厢都配备安全装置，运营方会定期维护检查。但如有恐高症的游客需谨慎考虑。"
        },
        {
          question: "可以在山顶露营或过夜吗？",
          answer: "山顶区域不具备正规露营设施。Humboldt酒店已不再作为酒店运营。如需在Ávila国家公园内过夜，建议提前咨询相关部门了解规定和许可要求。"
        },
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
      about: "About",
      visiting: "Visit",
      transportation: "Getting There",
      tips: "Travel Tips",
      reviews: "Reviews",
      faq: "FAQ",
      location: "Location",
    },
    hero: {
      tagline: "Cross the Clouds, Overlook Caracas",
      title: "Warairarepano Cable Car",
      subtitle: "Sistema Teleférico Warairarepano",
      cta: "Explore the Cable Car Journey",
    },
    rating: {
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "About Warairarepano Cable Car",
      p1: "The Warairarepano Cable Car System (Sistema Teleférico Warairarepano), formerly known as the Caracas Cable Car (Teleférico de Caracas), is a mountain cable car system in Caracas, the capital of Venezuela. It connects the city to the summit of Ávila National Park. The line starts at Maripérez Station (Estación Maripérez) and ends at the Humboldt Hotel area on the Ávila summit. The journey takes about 15-20 minutes and offers spectacular views of Caracas and the distant Caribbean Sea.",
      p2: "Originally opened in 1956, it was one of the longest cable car systems in the world at the time. After years of closure, it was fully restored and reopened in 2007. Today, it serves not only as an important public transportation option but also as one of Caracas' most popular tourist attractions, praised by locals and visitors alike as a journey to the sky.",
      highlights: {
        title: "Highlights",
        items: [
          "Approximately 3.5 km cable car line",
          "Direct access to Ávila National Park summit",
          "Panoramic views of Caracas",
          "Mountain-top restaurant & viewpoint",
          "Convenient connection between city & nature",
        ],
      },
      management: {
        title: "Operations & Management",
        content: "The cable car system is operated and maintained by VENETEL (Venezuelan Cable Car Company). As an important transportation link between the city and Ávila National Park, the cable car serves both tourists and local residents. With affordable ticket prices, it is an ideal way to experience the natural and urban beauty of Caracas."
      },
    },
    visiting: {
      title: "Visitor Information",
      hours: {
        title: "Operating Hours",
        content: "Tuesday - Sunday 10:00 - 18:00",
        note: "Closed on Mondays for maintenance",
      },
      price: {
        title: "Ticket Price",
        content: "Approx. $2 - $5 USD (local currency applies)",
        note: "Bring cash; some ticket offices may not accept cards",
      },
      duration: {
        title: "Suggested Duration",
        content: "2 - 4 Hours",
        note: "Including round-trip cable car, summit viewing & dining",
      },
      bring: {
        title: "What to Bring",
        items: ["Light jacket (lower temperature at summit)", "Sunscreen & sunglasses", "Camera or smartphone (great photo spots)", "Comfortable walking shoes", "Cash (for summit expenses)", "Light backpack"],
      },
    },
    transportation: {
      title: "Transportation Guide",
      toStation: {
        title: "Getting to Maripérez Station",
        content: "Maripérez Station (Estación Maripérez) is located in northwestern Caracas. You can take the Caracas Metro to La Bandera Station and then transfer to a taxi, or take a taxi directly. Address: Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital.",
      },
      selfDrive: {
        title: "Self-Drive",
        content: "Drive from downtown Caracas along Av. Principal de Maripérez to reach the station. There is parking near the station, but spaces are limited. Arriving early or using public transportation is recommended.",
      },
      publicTransport: {
        title: "Public Transportation",
        content: "Take the Caracas Metro (Metro de Caracas) to the nearest station and transfer to a taxi or bus. It is recommended to ask locals for the latest route information, or use ride-hailing apps to go directly to Maripérez Station.",
      },
      topActivities: {
        title: "Summit Activities",
        content: "After reaching the Ávila summit, you can visit the Humboldt Hotel ruins, enjoy panoramic views of Caracas from the viewpoint, dine at the summit restaurant, or hike the trails to explore the natural beauty of Ávila National Park.",
      },
    },
    tips: {
      title: "Practical Info & Travel Tips",
      items: [
        "Visit in the morning for clearer weather and better city panorama views for photography.",
        "The summit is 5-8°C cooler than the city — bring a light jacket or sweater to avoid catching a chill.",
        "The cable car journey offers spectacular views — clean your camera lens beforehand and ensure your devices are fully charged.",
        "Prices at the summit are higher — bring water and snacks, or carry enough cash for expenses.",
        "Caracas weather changes quickly — check the forecast before departure to avoid rain affecting visibility.",
        "Weekends and holidays are crowded — visit on weekdays or arrive early to avoid long waiting times.",
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
      subtitle: "Everything you need to know about Warairarepano Cable Car",
      items: [
        {
          question: "Where are the starting and ending stations of the cable car?",
          answer: "The starting station is Maripérez Station (Estación Maripérez) in northwestern Caracas; the terminal station is the Ávila summit area, near the Humboldt Hotel ruins. The total distance is about 3.5 km, and a one-way trip takes about 15-20 minutes."
        },
        {
          question: "Where can I buy cable car tickets?",
          answer: "Tickets can be purchased at the ticket office at Maripérez Station. Bringing cash is recommended, as some ticket offices may not accept credit cards. Ticket prices are affordable, usually under a few dollars for a round trip."
        },
        {
          question: "What are the worth-visiting attractions at the summit?",
          answer: "Main attractions at the summit include:\n\n1. Humboldt Hotel Ruins — Once a landmark mountaintop building, now a viewpoint and historical site.\n\n2. Viewpoint — 360-degree panoramic view of Caracas; on clear days you can even see the Caribbean Sea.\n\n3. Summit Restaurant — Serves local cuisine; enjoy meals while taking in the beautiful scenery.\n\n4. Ávila National Park Trails — Suitable for hiking enthusiasts to explore the natural scenery."
        },
        {
          question: "What is the best time to visit?",
          answer: "It is recommended to visit between 10:00-12:00 in the morning, when the weather is more stable, air quality is best, and the effect of photographing the city panorama is optimal. Clouds and fog may appear in the afternoon, affecting visibility. One hour before sunset is also a popular time to enjoy the spectacular sunset."
        },
        {
          question: "Is the cable car safe? Are there safety measures?",
          answer: "The cable car system underwent a comprehensive restoration in 2007 and meets international safety standards. Each cable car cabin is equipped with safety devices, and the operator conducts regular maintenance and inspections. However, visitors with acrophobia should consider carefully."
        },
        {
          question: "Can I camp or stay overnight at the summit?",
          answer: "The summit area does not have proper camping facilities. The Humboldt Hotel no longer operates as a hotel. If you wish to stay overnight in Ávila National Park, it is recommended to consult the relevant authorities in advance about regulations and permit requirements."
        },
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
      about: "Acerca de",
      visiting: "Visitar",
      transportation: "Cómo Llegar",
      tips: "Consejos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
      location: "Ubicación",
    },
    hero: {
      tagline: "Cruza las Nubes, Contempla Caracas",
      title: "Teleférico Warairarepano",
      subtitle: "Sistema Teleférico Warairarepano",
      cta: "Explora el Viaje en Teleférico",
    },
    rating: {
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Acerca del Teleférico Warairarepano",
      p1: "El Sistema Teleférico Warairarepano, anteriormente conocido como el Teleférico de Caracas, es un sistema de teleférico de montaña en Caracas, capital de Venezuela. Conecta la ciudad con la cima del Parque Nacional Ávila. La línea comienza en la Estación Maripérez y termina en el área del Hotel Humboldt en la cima del Ávila. El trayecto dura aproximadamente 15-20 minutos y ofrece vistas espectaculares de Caracas y el lejano Mar Caribe.",
      p2: "Inaugurado originalmente en 1956, fue uno de los sistemas de teleférico más largos del mundo en su época. Después de años de cierre, fue totalmente restaurado y reabierto en 2007. Hoy en día, sirve no solo como una importante opción de transporte público, sino también como una de las atracciones turísticas más populares de Caracas, elogiada por locales y visitantes como un viaje al cielo.",
      highlights: {
        title: "Aspectos Destacados",
        items: [
          "Aproximadamente 3.5 km de línea de teleférico",
          "Acceso directo a la cima del Parque Nacional Ávila",
          "Vistas panorámicas de Caracas",
          "Restaurante y mirador en la cima",
          "Conexión conveniente entre la ciudad y la naturaleza",
        ],
      },
      management: {
        title: "Operación y Gestión",
        content: "El sistema de teleférico es operado y mantenido por VENETEL (Empresa Venezolana de Teleféricos). Como un importante enlace de transporte entre la ciudad y el Parque Nacional Ávila, el teleférico sirve tanto a turistas como a residentes locales. Con precios de boletos asequibles, es una forma ideal de experimentar la belleza natural y urbana de Caracas."
      },
    },
    visiting: {
      title: "Información para Visitas",
      hours: {
        title: "Horario de Operación",
        content: "Martes - Domingo 10:00 - 18:00",
        note: "Cerrado los lunes por mantenimiento",
      },
      price: {
        title: "Precio del Boleto",
        content: "Aprox. $2 - $5 USD (sujeto a moneda local)",
        note: "Traiga efectivo; algunas boleterías pueden no aceptar tarjetas",
      },
      duration: {
        title: "Duración Sugerida",
        content: "2 - 4 Horas",
        note: "Incluyendo teleférico ida y vuelta, mirador y comida en la cima",
      },
      bring: {
        title: "Qué Llevar",
        items: ["Chaqueta ligera (temperatura más baja en la cima)", "Protector solar y gafas de sol", "Cámara o smartphone (excelentes lugares para fotos)", "Zapatos cómodos para caminar", "Efectivo (para gastos en la cima)", "Mochila ligera"],
      },
    },
    transportation: {
      title: "Guía de Transporte",
      toStation: {
        title: "Cómo Llegar a la Estación Maripérez",
        content: "La Estación Maripérez está ubicada en el noroeste de Caracas. Puede tomar el Metro de Caracas hasta la Estación La Bandera y luego transferir a un taxi, o tomar un taxi directamente. Dirección: Final Av. Principal de Maripérez, Caracas 1050, Distrito Capital.",
      },
      selfDrive: {
        title: "Conducción Propia",
        content: "Conduzca desde el centro de Caracas por la Av. Principal de Maripérez hasta llegar a la estación. Hay estacionamiento cerca de la estación, pero los espacios son limitados. Se recomienda llegar temprano o usar transporte público.",
      },
      publicTransport: {
        title: "Transporte Público",
        content: "Tome el Metro de Caracas (Metro de Caracas) hasta la estación más cercana y transfiera a un taxi o autobús. Se recomienda preguntar a los locales sobre la información de ruta más actualizada, o usar aplicaciones de transporte para ir directamente a la Estación Maripérez.",
      },
      topActivities: {
        title: "Actividades en la Cima",
        content: "Después de llegar a la cima del Ávila, puede visitar las ruinas del Hotel Humboldt, disfrutar de vistas panorámicas de Caracas desde el mirador, comer en el restaurante de la cima, o caminar por los senderos para explorar la belleza natural del Parque Nacional Ávila.",
      },
    },
    tips: {
      title: "Información Práctica y Consejos de Viaje",
      items: [
        "Visite por la mañana para un clima más despejado y mejores vistas panorámicas de la ciudad para fotografía.",
        "La cima está 5-8°C más fresca que la ciudad — traiga una chaqueta ligera o suéter para evitar enfriarse.",
        "El viaje en teleférico ofrece vistas espectaculares — limpie su lente de cámara de antemano y asegúrese de que sus dispositivos estén completamente cargados.",
        "Los precios en la cima son más altos — traiga agua y snacks, o lleve suficiente efectivo para gastos.",
        "El clima de Caracas cambia rápidamente — verifique el pronóstico antes de salir para evitar que la lluvia afecte la visibilidad.",
        "Los fines de semana y festivos están concurridos — visite entre semana o llegue temprano para evitar tiempos de espera largos.",
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
      subtitle: "Todo lo que necesitas saber sobre el Teleférico Warairarepano",
      items: [
        {
          question: "¿Dónde están las estaciones de inicio y término del teleférico?",
          answer: "La estación de inicio es la Estación Maripérez en el noroeste de Caracas; la estación terminal es el área de la cima del Ávila, cerca de las ruinas del Hotel Humboldt. La distancia total es de aproximadamente 3.5 km, y un viaje de ida toma aproximadamente 15-20 minutos."
        },
        {
          question: "¿Dónde puedo comprar boletos para el teleférico?",
          answer: "Los boletos se pueden comprar en la boletería de la Estación Maripérez. Se recomienda traer efectivo, ya que algunas boleterías pueden no aceptar tarjetas de crédito. Los precios de los boletos son asequibles, generalmente menos de unos pocos dólares para un viaje de ida y vuelta."
        },
        {
          question: "¿Cuáles son las atracciones que vale la pena visitar en la cima?",
          answer: "Las principales atracciones en la cima incluyen:\n\n1. Ruinas del Hotel Humboldt — Una vez un edificio emblemático en la cima, ahora es un mirador y sitio histórico.\n\n2. Mirador — Vista panorámica de 360 grados de Caracas; en días despejados incluso puede ver el Mar Caribe.\n\n3. Restaurante de la Cima — Sirve cocina local; disfrute de comidas mientras contempla el hermoso paisaje.\n\n4. Senderos del Parque Nacional Ávila — Adecuados para entusiastas del senderismo para explorar el paisaje natural."
        },
        {
          question: "¿Cuál es el mejor momento para visitar?",
          answer: "Se recomienda visitar entre las 10:00-12:00 del mediodía, cuando el clima es más estable, la calidad del aire es mejor y el efecto de fotografiar el panorama de la ciudad es óptimo. Nubes y niebla pueden aparecer por la tarde, afectando la visibilidad. Una hora antes del atardecer también es un momento popular para disfrutar del atardecer espectacular."
        },
        {
          question: "¿Es seguro el teleférico? ¿Hay medidas de seguridad?",
          answer: "El sistema de teleférico sufrió una restauración integral en 2007 y cumple con los estándares internacionales de seguridad. Cada cabina de teleférico está equipada con dispositivos de seguridad, y el operador realiza mantenimiento e inspecciones regulares. Sin embargo, los visitantes con acrofobia deben considerar cuidadosamente."
        },
        {
          question: "¿Puedo acampar o quedarme en la cima?",
          answer: "El área de la cima no tiene instalaciones de camping adecuadas. El Hotel Humboldt ya no opera como hotel. Si desea quedarse en el Parque Nacional Ávila, se recomienda consultar a las autoridades pertinentes de antemano sobre regulaciones y requisitos de permisos."
        },
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

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
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
    toStation: { title: string; content: string };
    selfDrive: { title: string; content: string };
    publicTransport: { title: string; content: string };
    topActivities: { title: string; content: string };
  };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  footer: { text: string; made: string; linksTitle: string; links: LinkItem[] };
};
