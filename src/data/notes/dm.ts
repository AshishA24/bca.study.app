import { C, D, EXAM, H, NOTE, OL, P, Q, TBL, topic, UL } from "./blocks";
import type { QuizQuestion, TopicNotes } from "../types";

export const dmNotes: Record<string, TopicNotes> = {
  "dm-fundamentals": topic("dm-fundamentals", [
    P(
      "Digital marketing is the use of internet-connected channels—search engines, websites, social networks, email, mobile apps and digital advertising—to attract, convert and retain customers. It applies the classic marketing mix (product, price, place, promotion) on digital media, with the added power of data, targeting and two-way conversation. For Indian businesses it is no longer optional: customers discover, compare, pay (often via UPI) and complain online, so a brand that is absent digitally is absent from the consideration set.",
      "डिजिटल मार्केटिंग इंटरनेट से जुड़े माध्यमों—सर्च इंजन, वेबसाइट, सोशल नेटवर्क, ईमेल, मोबाइल ऐप और डिजिटल विज्ञापन—का उपयोग कर ग्राहकों को आकर्षित करने, कन्वर्ट करने और बनाए रखने की प्रक्रिया है। यह क्लासिक मार्केटिंग मिक्स (उत्पाद, मूल्य, स्थान, प्रचार) को डिजिटल मीडिया पर लागू करती है, साथ में डेटा, टारगेटिंग और द्विमार्गी संवाद की शक्ति देती है। भारतीय व्यवसायों के लिए यह अब वैकल्पिक नहीं है: ग्राहक ऑनलाइन खोजते, तुलना करते, अक्सर UPI से भुगतान करते और शिकायत करते हैं, इसलिए जो ब्रांड डिजिटल रूप से अनुपस्थित है वह विचार-सूची से भी बाहर है।",
      "Digital marketing internet se jude channels—search engines, websites, social networks, email, mobile apps aur digital ads—se customers ko attract, convert aur retain karne ka tarika hai. Classic marketing mix digital media par lagta hai, plus data, targeting aur two-way conversation. Bharat mein ye optional nahi hai: customer online discover, compare, UPI se pay aur complain karta hai, isliye digital absent brand consideration set se bahar ho jata hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Definition: planned promotion and customer relationship work using digital technologies and online media.",
        "परिभाषा: डिजिटल तकनीकों और ऑनलाइन मीडिया से योजनाबद्ध प्रचार तथा ग्राहक-संबंध कार्य।",
        "Definition: digital technologies aur online media se planned promotion aur customer-relationship ka kaam.",
      ],
      [
        "Core advantages: precise targeting, relatively lower entry cost, 24×7 presence, interactivity and measurable ROI.",
        "मुख्य लाभ: सटीक टारगेटिंग, अपेक्षाकृत कम प्रवेश लागत, 24×7 उपस्थिति, इंटरैक्टिविटी और मापनीय ROI।",
        "Mukhya fayde: precise targeting, relatively kam entry cost, 24×7 presence, interactivity aur measurable ROI.",
      ],
      [
        "Pull and push: SEO and content pull people who are already searching; ads and social posts can push a message to a chosen audience.",
        "पुल और पुश: SEO व कंटेंट उन लोगों को खींचते हैं जो पहले से खोज रहे हैं; विज्ञापन और सोशल पोस्ट चुने हुए ऑडियंस तक संदेश पहुँचा सकते हैं।",
        "Pull aur push: SEO aur content un logon ko khichte hain jo pehle se search kar rahe hain; ads aur social posts chosen audience tak message push karte hain.",
      ],
      [
        "Always-on plus campaigns: brands keep a website, search listing and social profile live, then run time-bound campaigns for launches and festivals.",
        "ऑलवेज-ऑन प्लस कैंपेन: ब्रांड वेबसाइट, सर्च लिस्टिंग और सोशल प्रोफ़ाइल लगातार चलाते हैं, फिर लॉन्च व त्योहारों पर समयबद्ध कैंपेन करते हैं।",
        "Always-on plus campaigns: website, search listing aur social profile live rehte hain, launches aur festivals par time-bound campaigns chalte hain.",
      ],
      [
        "Personalisation at scale: messages can change by city, language, past behaviour and device, which traditional mass media cannot do cheaply.",
        "स्केल पर पर्सनलाइज़ेशन: संदेश शहर, भाषा, पिछला व्यवहार और डिवाइस के अनुसार बदल सकते हैं, जो पारंपरिक मास मीडिया सस्ते में नहीं कर सकता।",
        "Scale par personalisation: message city, language, past behaviour aur device ke hisaab se badal sakte hain, jo traditional mass media saste mein nahi kar sakta.",
      ],
      [
        "Significance in India: smartphone-first users, cheap data, UPI checkout and social commerce make digital the default path to market.",
        "भारत में महत्व: स्मार्टफोन-फर्स्ट उपयोगकर्ता, सस्ता डेटा, UPI चेकआउट और सोशल कॉमर्स डिजिटल को बाज़ार तक का डिफ़ॉल्ट रास्ता बनाते हैं।",
        "Bharat mein mahatva: smartphone-first users, sasta data, UPI checkout aur social commerce digital ko market tak ka default rasta banaate hain.",
      ],
      [
        "Limitations still exist: ad fraud, privacy rules, noisy competition, and the need for content and analytics skills.",
        "सीमाएँ भी हैं: विज्ञापन धोखाधड़ी, गोपनीयता नियम, भीड़भरा मुकाबला, तथा कंटेंट और एनालिटिक्स कौशल की आवश्यकता।",
        "Seemayein bhi hain: ad fraud, privacy rules, crowded competition, aur content plus analytics skills ki zaroorat.",
      ],
    ]),
    H("Why it matters for exams and practice", "परीक्षा और अभ्यास में क्यों ज़रूरी है", "Exam aur practice mein kyun zaroori hai"),
    TBL(
      [
        ["Aspect", "पहलू", "Aspect"],
        ["What to remember", "क्या याद रखें", "Kya yaad rakhein"],
      ],
      [
        [
          ["Reach", "पहुँच", "Reach"],
          [
            "Can be local (one pincode) or global from the same campaign setup.",
            "एक ही कैंपेन से स्थानीय (एक पिनकोड) या वैश्विक पहुँच संभव।",
            "Ek hi campaign se local (ek pincode) ya global reach possible.",
          ],
        ],
        [
          ["Cost", "लागत", "Cost"],
          [
            "Small budgets can start; you pay for clicks, impressions or results.",
            "छोटे बजट से शुरुआत हो सकती है; क्लिक, इंप्रेशन या परिणाम पर भुगतान।",
            "Chhote budget se shuru kar sakte ho; clicks, impressions ya results par payment.",
          ],
        ],
        [
          ["Data", "डेटा", "Data"],
          [
            "Every click, view and purchase can be logged and used to improve the next ad.",
            "हर क्लिक, व्यू और खरीद लॉग होकर अगले विज्ञापन को सुधार सकती है।",
            "Har click, view aur purchase log ho kar agla ad improve kar sakta hai.",
          ],
        ],
        [
          ["Relationship", "संबंध", "Relationship"],
          [
            "Comments, chats, reviews and email replies make marketing a dialogue.",
            "कमेंट, चैट, रिव्यू और ईमेल जवाब मार्केटिंग को संवाद बनाते हैं।",
            "Comments, chats, reviews aur email replies marketing ko dialogue banaate hain.",
          ],
        ],
      ],
    ),
    EXAM(
      "Write a definition, list five advantages of digital marketing, and explain why it is significant for Indian firms (mobile, data, UPI, measurability). A 5-mark answer should contrast it briefly with traditional media.",
      "परिभाषा लिखें, डिजिटल मार्केटिंग के पाँच लाभ बताएँ, और भारतीय फर्मों के लिए इसका महत्व समझाएँ (मोबाइल, डेटा, UPI, मापनीयता)। 5 अंक के उत्तर में पारंपरिक मीडिया से संक्षिप्त तुलना करें।",
      "Definition likho, paanch advantages list karo, aur Indian firms ke liye significance samjhao (mobile, data, UPI, measurability). 5-mark answer mein traditional media se short contrast karo.",
    ),
  ]),

  "dm-vs": topic("dm-vs", [
    P(
      "Traditional marketing uses mass media such as television, radio, newspapers, magazines, outdoor hoardings and direct mail. Digital marketing uses online and mobile channels. The practical exam contrast is not that one is ‘good’ and the other ‘dead’: many brands still mix both (a TV spot plus a YouTube pre-roll, a newspaper insert plus a WhatsApp catalogue). The difference lies in reach pattern, cost structure, measurability and whether the audience can talk back.",
      "पारंपरिक मार्केटिंग टेलीविज़न, रेडियो, समाचारपत्र, पत्रिका, आउटडोर होर्डिंग और डायरेक्ट मेल जैसे मास मीडिया का उपयोग करती है। डिजिटल मार्केटिंग ऑनलाइन और मोबाइल चैनलों का उपयोग करती है। परीक्षा की व्यावहारिक तुलना यह नहीं कि एक ‘अच्छा’ और दूसरा ‘खत्म’ है: कई ब्रांड दोनों मिलाते हैं (TV स्पॉट के साथ YouTube प्री-रोल, अखबार इंसर्ट के साथ WhatsApp कैटलॉग)। अंतर पहुँच के पैटर्न, लागत संरचना, मापनीयता और इस बात में है कि दर्शक जवाब दे सकते हैं या नहीं।",
      "Traditional marketing TV, radio, newspapers, magazines, outdoor hoardings aur direct mail jaise mass media use karti hai. Digital marketing online aur mobile channels use karti hai. Exam contrast ye nahi ki ek ‘good’ aur doosra ‘dead’ hai: kai brands dono mix karte hain. Asli farq reach pattern, cost structure, measurability aur two-way baat-cheet mein hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Reach: traditional is broad but blunt (everyone watching a channel); digital can target by interest, location, language and behaviour.",
        "पहुँच: पारंपरिक व्यापक पर rough होती है (चैनल देखने वाले सब); डिजिटल रुचि, स्थान, भाषा और व्यवहार से टारगेट कर सकती है।",
        "Reach: traditional broad but blunt; digital interest, location, language aur behaviour se target kar sakti hai.",
      ],
      [
        "Cost: TV and print need large production and media fees; digital campaigns can start with a few thousand rupees and scale what works.",
        "लागत: TV और प्रिंट में बड़ी प्रोडक्शन व मीडिया फीस लगती है; डिजिटल कुछ हज़ार रुपये से शुरू होकर काम करने वाले हिस्से को बढ़ा सकता है।",
        "Cost: TV aur print mein badi production/media fees; digital kuch hazar rupaye se start karke jo kaam kare use scale kar sakte ho.",
      ],
      [
        "Measurability: traditional relies on recall surveys and GRPs; digital reports impressions, clicks, CTR, conversions and ROAS almost in real time.",
        "मापनीयता: पारंपरिक रिकॉल सर्वे और GRP पर निर्भर; डिजिटल इंप्रेशन, क्लिक, CTR, कन्वर्ज़न और ROAS लगभग रियल टाइम में बताता है।",
        "Measurability: traditional recall surveys aur GRPs; digital impressions, clicks, CTR, conversions aur ROAS almost real time mein dikhata hai.",
      ],
      [
        "Communication: traditional is largely one-way (brand speaks, audience receives); digital is two-way (comments, DMs, reviews, shares).",
        "संचार: पारंपरिक अधिकांशतः एकतरफ़ा; डिजिटल द्विमार्गी (कमेंट, DM, रिव्यू, शेयर)।",
        "Communication: traditional mostly one-way; digital two-way (comments, DMs, reviews, shares).",
      ],
      [
        "Speed and flexibility: a digital ad or landing page can be paused or rewritten the same day; a printed insert cannot.",
        "गति और लचीलापन: डिजिटल विज्ञापन या लैंडिंग पेज उसी दिन रोका या बदला जा सकता है; छपा इंसर्ट नहीं।",
        "Speed aur flexibility: digital ad ya landing page usi din pause/edit ho sakta hai; printed insert nahi.",
      ],
      [
        "Personalisation: traditional runs one creative for a mass audience; digital can swap headlines, language and offers by segment.",
        "पर्सनलाइज़ेशन: पारंपरिक एक ही क्रिएटिव मास ऑडियंस को दिखाता है; डिजिटल सेगमेंट के अनुसार हेडलाइन, भाषा और ऑफ़र बदल सकता है।",
        "Personalisation: traditional ek creative mass audience ko; digital segment ke hisaab se headline, language aur offer badal sakta hai.",
      ],
      [
        "Both still matter: FMCG and political brands use TV and outdoor for reach, then digital for retargeting and conversion.",
        "दोनों अभी मायने रखते हैं: FMCG और राजनीतिक ब्रांड पहुँच के लिए TV व आउटडोर, फिर रीटारगेटिंग व कन्वर्ज़न के लिए डिजिटल इस्तेमाल करते हैं।",
        "Dono ab bhi matter karte hain: FMCG aur political brands reach ke liye TV/outdoor, phir retargeting aur conversion ke liye digital.",
      ],
    ]),
    TBL(
      [
        ["Dimension", "आयाम", "Dimension"],
        ["Traditional", "पारंपरिक", "Traditional"],
        ["Digital", "डिजिटल", "Digital"],
      ],
      [
        [
          ["Reach", "पहुँच", "Reach"],
          ["Mass, geography-bound by media buy", "मास, मीडिया खरीद से भूगोल-बद्ध", "Mass, media buy se geography-bound"],
          ["Targeted, can be hyperlocal or global", "लक्षित, हाइपरलोकल या वैश्विक", "Targeted, hyperlocal ya global"],
        ],
        [
          ["Cost", "लागत", "Cost"],
          ["High fixed production and slot cost", "ऊँची निश्चित प्रोडक्शन व स्लॉट लागत", "High fixed production aur slot cost"],
          ["Variable; pay per impression, click or action", "परिवर्ती; इंप्रेशन, क्लिक या एक्शन पर भुगतान", "Variable; impression, click ya action par pay"],
        ],
        [
          ["Measurability", "मापनीयता", "Measurability"],
          ["Indirect (GRP, recall, circulation)", "अप्रत्यक्ष (GRP, रिकॉल, सर्कुलेशन)", "Indirect (GRP, recall, circulation)"],
          ["Direct (CTR, CPC, CPA, ROAS)", "प्रत्यक्ष (CTR, CPC, CPA, ROAS)", "Direct (CTR, CPC, CPA, ROAS)"],
        ],
        [
          ["Direction", "दिशा", "Direction"],
          ["Mostly one-way", "अधिकांशतः एकतरफ़ा", "Mostly one-way"],
          ["Two-way and shareable", "द्विमार्गी और साझा करने योग्य", "Two-way aur shareable"],
        ],
        [
          ["Time to change", "बदलाव का समय", "Time to change"],
          ["Days to weeks", "दिनों से सप्ताह", "Days to weeks"],
          ["Minutes to hours", "मिनटों से घंटों", "Minutes to hours"],
        ],
      ],
    ),
    EXAM(
      "A favourite 7–10 mark question: compare traditional and digital marketing on reach, cost, measurability and two-way communication, with one Indian example of each medium.",
      "पसंदीदा 7–10 अंक का प्रश्न: पहुँच, लागत, मापनीयता और द्विमार्गी संचार पर पारंपरिक बनाम डिजिटल की तुलना करें, प्रत्येक माध्यम का एक भारतीय उदाहरण दें।",
      "Favourite 7–10 mark question: reach, cost, measurability aur two-way communication par traditional vs digital compare karo, har medium ka ek Indian example do.",
    ),
  ]),

  "dm-evolution": topic("dm-evolution", [
    P(
      "Digital marketing did not appear overnight. It evolved with the web itself: from static brochure sites and early banner ads, through social and user-generated content, then into a mobile-and-app world, and now towards automation and AI-assisted optimisation. Syllabus answers should keep this four-stage story—Web 1.0 brochure, Web 2.0 social, mobile/app, AI/automation—rather than listing every new app name.",
      "डिजिटल मार्केटिंग एक रात में नहीं आई। यह वेब के साथ विकसित हुई: स्थिर ब्रोशर साइटों और शुरुआती बैनर विज्ञापनों से, सोशल व यूज़र-जनित कंटेंट से होते हुए, मोबाइल-और-ऐप की दुनिया में, और अब ऑटोमेशन तथा AI-सहायता प्राप्त अनुकूलन की ओर। सिलेबस उत्तर में यही चार चरण रखें—Web 1.0 ब्रोशर, Web 2.0 सोशल, मोबाइल/ऐप, AI/ऑटोमेशन—हर नए ऐप का नाम गिनाने के बजाय।",
      "Digital marketing ek raat mein nahi aayi. Web ke saath evolve hui: static brochure sites aur early banners se, social aur user-generated content se hote hue, mobile-and-app duniya mein, ab automation aur AI-assisted optimisation ki taraf. Syllabus answer mein ye char stages rakho—Web 1.0 brochure, Web 2.0 social, mobile/app, AI/automation.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Web 1.0 (roughly 1990s–early 2000s): read-only brochure websites, email newsletters and static banner ads. Brands published; users consumed.",
        "Web 1.0 (लगभग 1990s–early 2000s): केवल पढ़ने योग्य ब्रोशर वेबसाइटें, ईमेल न्यूज़लेटर और स्थिर बैनर विज्ञापन। ब्रांड प्रकाशित करते, उपयोगकर्ता ग्रहण करते।",
        "Web 1.0 (lagbhag 1990s–early 2000s): read-only brochure websites, email newsletters aur static banners. Brands publish karte; users consume karte.",
      ],
      [
        "Search marketing begins: directories and then Google made keyword-based discovery and pay-per-click auctions central to finding customers.",
        "सर्च मार्केटिंग की शुरुआत: डायरेक्टरी फिर Google ने कीवर्ड खोज और PPC नीलामी को ग्राहक खोज का केंद्र बनाया।",
        "Search marketing shuru: directories phir Google ne keyword discovery aur PPC auctions ko central bana diya.",
      ],
      [
        "Web 2.0 (mid-2000s): blogs, YouTube, Facebook and sharing tools. User-generated content, comments and viral loops turned audiences into media.",
        "Web 2.0 (mid-2000s): ब्लॉग, YouTube, Facebook और शेयरिंग टूल। यूज़र-जनित कंटेंट, कमेंट और वायरल लूप ने दर्शकों को मीडिया बना दिया।",
        "Web 2.0 (mid-2000s): blogs, YouTube, Facebook aur sharing tools. UGC, comments aur viral loops ne audience ko media bana diya.",
      ],
      [
        "Social and content marketing: brands had to converse, not only broadcast; reputation could be made or broken in public threads.",
        "सोशल और कंटेंट मार्केटिंग: ब्रांडों को केवल प्रसारण नहीं, संवाद करना पड़ा; सार्वजनिक थ्रेड में प्रतिष्ठा बन भी सकती थी, बिगड़ भी सकती थी।",
        "Social aur content marketing: brands ko broadcast nahi, converse karna pada; public threads mein reputation ban/bigad sakti thi.",
      ],
      [
        "Mobile and app era (2010s): smartphones, app stores, SMS/push, location and messaging (including WhatsApp in India) moved marketing into the pocket.",
        "मोबाइल और ऐप युग (2010s): स्मार्टफोन, ऐप स्टोर, SMS/पुश, लोकेशन और मैसेजिंग (भारत में WhatsApp सहित) ने मार्केटिंग को जेब में पहुँचा दिया।",
        "Mobile aur app era (2010s): smartphones, app stores, SMS/push, location aur messaging (Bharat mein WhatsApp) ne marketing pocket mein le aayi.",
      ],
      [
        "AI and automation (current syllabus tone): programmatic buying, bidding algorithms, chatbots, recommendation engines and automated reporting speed up optimisation. Marketers still set objectives, brand rules and ethics.",
        "AI और ऑटोमेशन (वर्तमान सिलेबस स्वर): प्रोग्रामेटिक खरीद, बिडिंग अल्गोरिदम, चैटबॉट, रेकमेंडेशन इंजन और स्वचालित रिपोर्टिंग अनुकूलन तेज़ करते हैं। उद्देश्य, ब्रांड नियम और नैतिकता अभी भी मार्केटर तय करते हैं।",
        "AI aur automation: programmatic buying, bidding algorithms, chatbots, recommendations aur automated reporting optimisation tez karte hain. Objectives, brand rules aur ethics ab bhi marketer set karte hain.",
      ],
      [
        "Each stage added a layer; older tools did not vanish. Email and search still convert, social still builds community, mobile is the default screen.",
        "हर चरण ने एक परत जोड़ी; पुराने टूल गायब नहीं हुए। ईमेल और सर्च अभी कन्वर्ट करते हैं, सोशल समुदाय बनाता है, मोबाइल डिफ़ॉल्ट स्क्रीन है।",
        "Har stage ne ek layer jodi; purane tools gayab nahi hue. Email aur search ab bhi convert karte hain, social community banata hai, mobile default screen hai.",
      ],
    ]),
    TBL(
      [
        ["Stage", "चरण", "Stage"],
        ["Typical channels", "सामान्य माध्यम", "Typical channels"],
        ["User role", "उपयोगकर्ता की भूमिका", "User ki bhumika"],
      ],
      [
        [
          ["Web 1.0 brochure", "Web 1.0 ब्रोशर", "Web 1.0 brochure"],
          ["Static sites, banners, email blasts", "स्थिर साइटें, बैनर, ईमेल ब्लास्ट", "Static sites, banners, email blasts"],
          ["Reader / viewer", "पाठक / दर्शक", "Reader / viewer"],
        ],
        [
          ["Web 2.0 social", "Web 2.0 सोशल", "Web 2.0 social"],
          ["Blogs, YouTube, social networks, SEO content", "ब्लॉग, YouTube, सोशल नेटवर्क, SEO कंटेंट", "Blogs, YouTube, social networks, SEO content"],
          ["Creator, commenter, sharer", "रचनाकार, कमेंटर, शेयरर", "Creator, commenter, sharer"],
        ],
        [
          ["Mobile / app", "मोबाइल / ऐप", "Mobile / app"],
          ["Apps, SMS, push, maps, messaging", "ऐप, SMS, पुश, मैप, मैसेजिंग", "Apps, SMS, push, maps, messaging"],
          ["On-the-go customer", "चलते-फिरते ग्राहक", "On-the-go customer"],
        ],
        [
          ["AI / automation", "AI / ऑटोमेशन", "AI / automation"],
          ["Programmatic, bidding AI, chatbots, personalisation", "प्रोग्रामेटिक, बिडिंग AI, चैटबॉट, पर्सनलाइज़ेशन", "Programmatic, bidding AI, chatbots, personalisation"],
          ["Data subject; expects relevance", "डेटा विषय; प्रासंगिकता की अपेक्षा", "Data subject; relevance expect karta hai"],
        ],
      ],
    ),
    EXAM(
      "Describe the evolution of digital marketing in four stages (Web 1.0 brochure → Web 2.0 social → mobile/app → AI/automation) with one channel example per stage.",
      "डिजिटल मार्केटिंग के विकास को चार चरणों में लिखें (Web 1.0 ब्रोशर → Web 2.0 सोशल → मोबाइल/ऐप → AI/ऑटोमेशन) और प्रत्येक चरण का एक चैनल उदाहरण दें।",
      "Digital marketing ka evolution char stages mein likho (Web 1.0 brochure → Web 2.0 social → mobile/app → AI/automation) aur har stage ka ek channel example do.",
    ),
  ]),

  "dm-landscape": topic("dm-landscape", [
    P(
      "The digital marketing landscape is the mix of platforms, devices, payment rails, content formats and regulations in which campaigns run. In India the landscape is distinctive: it is mobile-first, video-heavy, multilingual, and turbocharged by cheap data and instant payments. Key drivers explain why digital ad spend and e-commerce keep rising even in smaller towns.",
      "डिजिटल मार्केटिंग परिदृश्य वह मिश्रण है जिसमें कैंपेन चलते हैं—प्लेटफ़ॉर्म, डिवाइस, भुगतान व्यवस्था, कंटेंट फ़ॉर्मेट और नियम। भारत में यह परिदृश्य विशिष्ट है: मोबाइल-फर्स्ट, वीडियो-प्रधान, बहुभाषी, तथा सस्ते डेटा और तत्काल भुगतान से त्वरित। प्रमुख चालक बताते हैं कि छोटे शहरों में भी डिजिटल विज्ञापन खर्च और ई-कॉमर्स क्यों बढ़ रहे हैं।",
      "Digital marketing landscape platforms, devices, payment rails, content formats aur rules ka mix hai jisme campaigns chalte hain. Bharat mein ye mobile-first, video-heavy, multilingual hai, aur saste data plus instant payments se tez bada hai. Key drivers samjhate hain ki chhote towns mein bhi digital ad spend aur e-commerce kyun badh rahe hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Smartphones: the primary screen for search, video, shopping and chat; most Indian journeys never touch a desktop.",
        "स्मार्टफोन: सर्च, वीडियो, शॉपिंग और चैट की मुख्य स्क्रीन; अधिकांश भारतीय यात्राएँ डेस्कटॉप छूती ही नहीं।",
        "Smartphones: search, video, shopping aur chat ki primary screen; zyadatar Indian journeys desktop touch hi nahi karti.",
      ],
      [
        "Cheap data: the Jio-era price crash made streaming, social feeds and app use affordable for hundreds of millions.",
        "सस्ता डेटा: Jio-काल की कीमत गिरावट ने स्ट्रीमिंग, सोशल फ़ीड और ऐप उपयोग को करोड़ों लोगों के लिए सस्ता कर दिया।",
        "Sasta data: Jio-era price crash ne streaming, social feeds aur app use ko crores logon ke liye affordable bana diya.",
      ],
      [
        "UPI and digital payments: checkout friction fell; ads can send a user from video to payment in a few taps.",
        "UPI और डिजिटल भुगतान: चेकआउट की रगड़ कम हुई; विज्ञापन यूज़र को वीडियो से भुगतान तक कुछ टैप में ले जा सकते हैं।",
        "UPI aur digital payments: checkout friction giri; ads user ko video se payment tak kuch taps mein le ja sakte hain.",
      ],
      [
        "Social platforms: Facebook, Instagram, YouTube, WhatsApp and short-video apps are discovery engines, not only chat tools.",
        "सोशल प्लेटफ़ॉर्म: Facebook, Instagram, YouTube, WhatsApp और शॉर्ट-वीडियो ऐप केवल चैट नहीं, डिस्कवरी इंजन हैं।",
        "Social platforms: Facebook, Instagram, YouTube, WhatsApp aur short-video apps sirf chat nahi, discovery engines hain.",
      ],
      [
        "E-commerce and logistics: marketplaces and 1–2 day delivery in many cities make performance ads commercially useful.",
        "ई-कॉमर्स और लॉजिस्टिक्स: मार्केटप्लेस और कई शहरों में 1–2 दिन डिलीवरी परफ़ॉर्मेंस विज्ञापनों को व्यावसायिक रूप से उपयोगी बनाती है।",
        "E-commerce aur logistics: marketplaces aur kai cities mein 1–2 day delivery performance ads ko commercially useful banati hai.",
      ],
      [
        "Vernacular and video: Hindi and regional language content plus cheap 4G turned India into a video-first internet.",
        "वर्नाक्युलर और वीडियो: हिंदी व क्षेत्रीय भाषा कंटेंट तथा सस्ते 4G ने भारत को वीडियो-फर्स्ट इंटरनेट बना दिया।",
        "Vernacular aur video: Hindi aur regional language content plus sasta 4G ne Bharat ko video-first internet bana diya.",
      ],
      [
        "Public digital rails: Aadhaar-linked KYC, UPI and account aggregators reduce onboarding cost for fintech and e-commerce.",
        "सार्वजनिक डिजिटल रेल: आधार-linked KYC, UPI और अकाउंट एग्रीगेटर फिनटेक व ई-कॉमर्स की ऑनबोर्डिंग लागत घटाते हैं।",
        "Public digital rails: Aadhaar-linked KYC, UPI aur account aggregators fintech/e-commerce ki onboarding cost ghatate hain.",
      ],
      [
        "Constraints: patchy rural networks, privacy and spam rules, fake engagement, and platform fee dependence.",
        "बाधाएँ: ग्रामीण नेटवर्क की अनियमितता, गोपनीयता व स्पैम नियम, नकली एंगेजमेंट, और प्लेटफ़ॉर्म शुल्क पर निर्भरता।",
        "Constraints: patchy rural networks, privacy/spam rules, fake engagement, aur platform fees par dependence.",
      ],
    ]),
    TBL(
      [
        ["Driver", "चालक", "Driver"],
        ["Effect on marketing", "मार्केटिंग पर प्रभाव", "Marketing par asar"],
      ],
      [
        [
          ["Smartphones", "स्मार्टफोन", "Smartphones"],
          ["Mobile-first creatives, app campaigns, vertical video", "मोबाइल-फर्स्ट क्रिएटिव, ऐप कैंपेन, वर्टिकल वीडियो", "Mobile-first creatives, app campaigns, vertical video"],
        ],
        [
          ["Cheap data", "सस्ता डेटा", "Sasta data"],
          ["Longer watch time; YouTube and Reels as mass media", "अधिक वॉच टाइम; YouTube और Reels मास मीडिया जैसे", "Zyada watch time; YouTube aur Reels mass media jaise"],
        ],
        [
          ["UPI", "UPI", "UPI"],
          ["Faster conversion; pay-on-delivery less necessary", "तेज़ कन्वर्ज़न; कैश-ऑन-डिलीवरी कम ज़रूरी", "Tez conversion; COD kam zaroori"],
        ],
        [
          ["Social", "सोशल", "Social"],
          ["Influencers, communities, social commerce", "इन्फ़्लुएंसर, कम्युनिटी, सोशल कॉमर्स", "Influencers, communities, social commerce"],
        ],
      ],
    ),
    EXAM(
      "List key drivers of the Indian digital marketing landscape and explain how smartphones, cheap data, UPI and social media change campaign design.",
      "भारतीय डिजिटल मार्केटिंग परिदृश्य के प्रमुख चालक लिखें और बताएँ कि स्मार्टफोन, सस्ता डेटा, UPI और सोशल मीडिया कैंपेन डिज़ाइन कैसे बदलते हैं।",
      "Indian digital marketing landscape ke key drivers list karo aur samjhao smartphones, sasta data, UPI aur social media campaign design kaise badalte hain.",
    ),
  ]),

  "dm-consumers": topic("dm-consumers", [
    P(
      "A digital consumer is a person who uses connected devices to discover, evaluate, buy and talk about products. They are not a separate species from ‘offline’ buyers: the same person may see a kirana shop and a YouTube review on the same day. What changed is access to information, peer opinion and communities that sit outside the brand’s control.",
      "डिजिटल उपभोक्ता वह व्यक्ति है जो उत्पादों को खोजने, मूल्यांकन करने, खरीदने और उन पर बात करने के लिए कनेक्टेड डिवाइस का उपयोग करता है। वे ‘ऑफ़लाइन’ खरीदारों से अलग प्रजाति नहीं हैं: वही व्यक्ति एक दिन किराना दुकान और YouTube रिव्यू दोनों देख सकता है। बदला यह है कि जानकारी, साथियों की राय और ऐसे समुदाय उपलब्ध हैं जो ब्रांड के नियंत्रण से बाहर हैं।",
      "Digital consumer wo vyakti hai jo connected devices se products discover, evaluate, buy aur unke baare mein baat karta hai. Ye offline buyers se alag species nahi hai: wahi insaan ek din kirana shop aur YouTube review dono dekh sakta hai. Badla ye hai ki information, peer opinion aur communities brand ke control ke bahar milte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Informed and sceptical: consumers search, compare prices and read ratings before many purchases (the ‘zero moment of truth’).",
        "सूचित और संशयात्मक: कई खरीद से पहले सर्च, कीमत तुलना और रेटिंग पढ़ना (‘ज़ीरो मोमेंट ऑफ़ ट्रुथ’)।",
        "Informed aur sceptical: kai purchases se pehle search, price compare aur ratings (‘zero moment of truth’).",
      ],
      [
        "Multi-device and multi-channel: a journey may start on YouTube, continue in a WhatsApp group, and end on an app with UPI.",
        "मल्टी-डिवाइस और मल्टी-चैनल: यात्रा YouTube पर शुरू, WhatsApp ग्रुप में जारी, ऐप पर UPI से खत्म हो सकती है।",
        "Multi-device aur multi-channel: journey YouTube se shuru, WhatsApp group mein continue, app par UPI se khatam ho sakti hai.",
      ],
      [
        "Communities: Facebook groups, Reddit-like forums, Discord servers, Telegram/WhatsApp groups and hobby clubs shape taste and trust.",
        "समुदाय: Facebook ग्रुप, फ़ोरम, Discord, Telegram/WhatsApp ग्रुप और शौक क्लब स्वाद और विश्वास बनाते हैं।",
        "Communities: Facebook groups, forums, Discord, Telegram/WhatsApp groups aur hobby clubs taste aur trust banate hain.",
      ],
      [
        "User-generated content: reviews, unboxings and memes often out-rank brand ads in credibility.",
        "यूज़र-जनित कंटेंट: रिव्यू, अनबॉक्सिंग और मीम विश्वसनीयता में अक्सर ब्रांड विज्ञापन से आगे होते हैं।",
        "UGC: reviews, unboxings aur memes credibility mein aksar brand ads se aage hote hain.",
      ],
      [
        "Short attention, high expectation: slow sites, late replies and fake-looking ads are punished with a bounce or a public complaint.",
        "कम ध्यान, ऊँची अपेक्षा: धीमी साइट, देर से जवाब और नकली-से विज्ञापन बाउंस या सार्वजनिक शिकायत से दंडित होते हैं।",
        "Short attention, high expectation: slow sites, late replies aur fake-looking ads bounce ya public complaint se punish hote hain.",
      ],
      [
        "Always connected: notifications, stories and live commerce mean the ‘shop’ is open whenever the phone is.",
        "हमेशा जुड़े: नोटिफ़िकेशन, स्टोरीज़ और लाइव कॉमर्स का मतलब है दुकान तब खुली है जब फोन खुला है।",
        "Always connected: notifications, stories aur live commerce ka matlab shop tab khuli hai jab phone on hai.",
      ],
      [
        "Marketer implication: participate in communities without spamming; design for research (comparison pages, FAQs, honest reviews).",
        "मार्केटर निहितार्थ: स्पैम किए बिना समुदायों में शामिल हों; शोध के लिए डिज़ाइन करें (तुलना पेज, FAQ, ईमानदार रिव्यू)।",
        "Marketer implication: spam kiye bina communities mein participate karo; research ke liye design karo (comparison pages, FAQs, honest reviews).",
      ],
    ]),
    TBL(
      [
        ["Trait", "लक्षण", "Trait"],
        ["Offline-era buyer", "ऑफ़लाइन-युग खरीदार", "Offline-era buyer"],
        ["Digital consumer", "डिजिटल उपभोक्ता", "Digital consumer"],
      ],
      [
        [
          ["Information", "जानकारी", "Information"],
          ["Salesperson, TV, neighbours", "सेल्समैन, TV, पड़ोसी", "Salesperson, TV, neighbours"],
          ["Search, reviews, creators, groups", "सर्च, रिव्यू, क्रिएटर, ग्रुप", "Search, reviews, creators, groups"],
        ],
        [
          ["Power", "शक्ति", "Power"],
          ["Limited public voice", "सीमित सार्वजनिक आवाज़", "Limited public voice"],
          ["Can amplify praise or anger instantly", "प्रशंसा या गुस्सा तुरंत बढ़ा सकते हैं", "Praise ya anger turant amplify kar sakte hain"],
        ],
        [
          ["Loyalty", "वफादारी", "Loyalty"],
          ["Habit and availability", "आदत और उपलब्धता", "Habit aur availability"],
          ["Must be earned via experience and community", "अनुभव और समुदाय से कमानी पड़ती है", "Experience aur community se earn karni padti hai"],
        ],
      ],
    ),
    EXAM(
      "Define digital consumers and communities. Explain how reviews and peer groups change the path to purchase, with two marketing implications.",
      "डिजिटल उपभोक्ता और समुदाय परिभाषित करें। बताएँ कि रिव्यू और साथी-समूह खरीद पथ कैसे बदलते हैं, दो मार्केटिंग निहितार्थ सहित।",
      "Digital consumers aur communities define karo. Reviews aur peer groups path-to-purchase kaise badalte hain, do marketing implications ke saath.",
    ),
  ]),

  "dm-geny": topic("dm-geny", [
    P(
      "Generation Y (millennials, roughly born 1981–1996) grew up as the web became mainstream; together with younger netizens they set the tone for digital-native expectations. A netizen is a ‘citizen of the internet’—someone who lives a substantial social and commercial life online. Exam answers should connect their expectations (speed, authenticity, mobile-first, dialogue) to how brands must design content and service.",
      "जनरेशन Y (मिलेनियल, लगभग 1981–1996 जन्म) उस समय बड़े हुए जब वेब मुख्यधारा बना; युवा नेटीज़न के साथ वे डिजिटल-नेटिव अपेक्षाओं का स्वर तय करते हैं। नेटीज़न ‘इंटरनेट का नागरिक’ है—जो सामाजिक और व्यावसायिक जीवन का बड़ा हिस्सा ऑनलाइन जीता है। परीक्षा उत्तर में उनकी अपेक्षाएँ (गति, प्रामाणिकता, मोबाइल-फर्स्ट, संवाद) को इस से जोड़ें कि ब्रांड कंटेंट और सेवा कैसे डिज़ाइन करें।",
      "Generation Y (millennials, lagbhag 1981–1996) us time bade hue jab web mainstream hua; younger netizens ke saath digital-native expectations set karte hain. Netizen ‘internet ka citizen’ hai—jo social aur commercial life ka bada hissa online jeeta hai. Exam answer mein unki expectations (speed, authenticity, mobile-first, dialogue) ko brand content aur service design se jodo.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Speed: they expect pages, replies and deliveries to be fast; lag feels like disrespect.",
        "गति: पेज, जवाब और डिलीवरी तेज़ अपेक्षित; देरी अपमान जैसी लगती है।",
        "Speed: pages, replies aur deliveries tez chahiye; lag disrespect jaisa lagta hai.",
      ],
      [
        "Authenticity: polished slogans lose to real faces, UGC and brands that admit flaws; hard-sell is skipped.",
        "प्रामाणिकता: चमकदार नारे असली चेहरों, UGC और खामी मानने वाले ब्रांड से हारते हैं; कठोर बिक्री स्किप होती है।",
        "Authenticity: polished slogans real faces, UGC aur honest brands se haarte hain; hard-sell skip hota hai.",
      ],
      [
        "Mobile-first and visual: stories, short video and chat beat long desktop forms.",
        "मोबाइल-फर्स्ट और विज़ुअल: स्टोरीज़, शॉर्ट वीडियो और चैट लंबे डेस्कटॉप फ़ॉर्म से आगे।",
        "Mobile-first aur visual: stories, short video aur chat lambe desktop forms se aage.",
      ],
      [
        "Social proof: ratings, influencer try-ons and friend shares substitute for the neighbourhood recommendation.",
        "सोशल प्रूफ़: रेटिंग, इन्फ़्लुएंसर ट्राय-ऑन और दोस्तों के शेयर पड़ोसी की सिफ़ारिश की जगह लेते हैं।",
        "Social proof: ratings, influencer try-ons aur friend shares neighbourhood recommendation ki jagah lete hain.",
      ],
      [
        "Dialogue not monologue: they expect DMs, comments and complaint resolution in public or near-public view.",
        "संवाद न कि एकालाप: वे DM, कमेंट और सार्वजनिक या लगभग सार्वजनिक शिकायत समाधान की अपेक्षा करते हैं।",
        "Dialogue not monologue: DMs, comments aur near-public complaint resolution expect karte hain.",
      ],
      [
        "Purpose and identity: many prefer brands that signal values (sustainability, inclusion) without sounding fake.",
        "उद्देश्य और पहचान: कई ब्रांडों को मूल्य (सततता, समावेश) दिखाने वाले पसंद करते हैं, बशर्ते नकली न लगे।",
        "Purpose aur identity: kai brands values (sustainability, inclusion) signal karein, lekin fake na lagen.",
      ],
      [
        "Control of attention: ad blockers, skip buttons and multiple tabs mean unearned ads are ignored.",
        "ध्यान पर नियंत्रण: ऐड ब्लॉकर, स्किप बटन और कई टैब का मतलब है अनअर्न्ड विज्ञापन नज़रअंदाज़।",
        "Attention par control: ad blockers, skip buttons aur multiple tabs—unearned ads ignore ho jaate hain.",
      ],
      [
        "Marketing response: be useful, be quick, be honest, be mobile, and invite participation rather than only shouting offers.",
        "मार्केटिंग प्रतिक्रिया: उपयोगी, तेज़, ईमानदार, मोबाइल बनें, और केवल ऑफ़र चिल्लाने के बजाय भागीदारी आमंत्रित करें।",
        "Marketing response: useful, tez, honest, mobile bano, aur sirf offers chilane ke bajay participation invite karo.",
      ],
    ]),
    TBL(
      [
        ["Expectation", "अपेक्षा", "Expectation"],
        ["What the brand should do", "ब्रांड को क्या करना चाहिए", "Brand ko kya karna chahiye"],
      ],
      [
        [
          ["Instant service", "तुरंत सेवा", "Instant service"],
          ["Chat, FAQs, same-day replies", "चैट, FAQ, उसी दिन जवाब", "Chat, FAQs, same-day replies"],
        ],
        [
          ["Authenticity", "प्रामाणिकता", "Authenticity"],
          ["Real customers, behind-the-scenes, no fake reviews", "असली ग्राहक, पर्दे के पीछे, नकली रिव्यू नहीं", "Real customers, behind-the-scenes, no fake reviews"],
        ],
        [
          ["Personalisation", "पर्सनलाइज़ेशन", "Personalisation"],
          ["Relevant offers, language and size, not creepy stalking", "प्रासंगिक ऑफ़र, भाषा व साइज़; डरावनी स्टॉकिंग नहीं", "Relevant offers, language aur size; creepy stalking nahi"],
        ],
        [
          ["Shareability", "साझा करने योग्यता", "Shareability"],
          ["Content worth forwarding in WhatsApp and Reels", "WhatsApp और Reels में फ़ॉरवर्ड करने लायक कंटेंट", "WhatsApp aur Reels mein forward-worthy content"],
        ],
      ],
    ),
    EXAM(
      "Who are Gen Y and netizens? List their expectations and explain how each should change a digital campaign (tone, format, response time).",
      "Gen Y और नेटीज़न कौन हैं? उनकी अपेक्षाएँ लिखें और बताएँ कि प्रत्येक अपेक्षा डिजिटल कैंपेन (टोन, फ़ॉर्मेट, प्रतिक्रिया समय) कैसे बदले।",
      "Gen Y aur netizens kaun hain? Unki expectations list karo aur samjhao har expectation digital campaign (tone, format, response time) kaise badle.",
    ),
  ]),

  "dm-india-users": topic("dm-india-users", [
    P(
      "India’s digital user base exploded after cheap 4G data (the Jio era from 2016), inexpensive Android phones and vernacular video. The typical user is mobile-first, often bilingual or regional-language first, and may be more comfortable with WhatsApp and YouTube than with email or desktop websites. Marketers must plan for both ‘metro India’ and ‘Bharat’ (tier-2/3 towns and rural users) instead of copying a Silicon Valley desktop playbook.",
      "भारत का डिजिटल उपयोगकर्ता आधार सस्ते 4G डेटा (2016 से Jio युग), सस्ते Android फोन और वर्नाक्युलर वीडियो के बाद तेजी से बढ़ा। सामान्य उपयोगकर्ता मोबाइल-फर्स्ट है, अक्सर द्विभाषी या क्षेत्रीय-भाषा-प्रथम, और ईमेल या डेस्कटॉप वेबसाइट से अधिक WhatsApp व YouTube पर सहज हो सकता है। मार्केटर्स को केवल सिलिकॉन वैली डेस्कटॉप प्लेबुक की नकल के बजाय ‘मेट्रो इंडिया’ और ‘भारत’ (टियर-2/3 कस्बे व ग्रामीण उपयोगकर्ता) दोनों के लिए योजना बनानी चाहिए।",
      "Bharat ka digital user base saste 4G data (2016 se Jio era), saste Android phones aur vernacular video ke baad tez badha. Typical user mobile-first hai, aksar bilingual ya regional-language first, aur email/desktop se zyada WhatsApp aur YouTube par comfortable ho sakta hai. Marketers ko metro India aur Bharat (tier-2/3 aur rural) dono ke liye plan karna chahiye, Silicon Valley desktop playbook copy nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Jio-era data: free/cheap 4G pulled first-time users online and made video streaming a mass habit.",
        "Jio-युग डेटा: मुफ़्त/सस्ते 4G ने पहली बार उपयोगकर्ताओं को ऑनलाइन खींचा और वीडियो स्ट्रीमिंग को मास आदत बनाया।",
        "Jio-era data: free/saste 4G ne first-time users ko online khicha aur video streaming ko mass habit bana diya.",
      ],
      [
        "Mobile-first: a large majority of Indian internet time is on smartphones; sites that are not thumb-friendly lose users.",
        "मोबाइल-फर्स्ट: भारतीय इंटरनेट समय का बड़ा हिस्सा स्मार्टफोन पर है; जो साइटें अंगूठे-अनुकूल नहीं, वे उपयोगकर्ता खोती हैं।",
        "Mobile-first: Indian internet time ka bada hissa smartphones par hai; jo sites thumb-friendly nahi, wo users kho deti hain.",
      ],
      [
        "Multilingual: Hindi and regional languages (Tamil, Telugu, Marathi, Bengali and others) often outperform English for reach.",
        "बहुभाषी: पहुँच के लिए हिंदी और क्षेत्रीय भाषाएँ (तमिल, तेलुगु, मराठी, बंगाली आदि) अक्सर अंग्रेज़ी से आगे रहती हैं।",
        "Multilingual: reach ke liye Hindi aur regional languages (Tamil, Telugu, Marathi, Bengali) aksar English se aage rehti hain.",
      ],
      [
        "Metro vs Bharat: metros have higher card/UPI ticket sizes and English campaigns; Bharat leans on vernacular video, cash-on-delivery plus UPI, and trust via WhatsApp.",
        "मेट्रो बनाम भारत: मेट्रो में अधिक कार्ड/UPI टिकट साइज़ और अंग्रेज़ी कैंपेन; भारत वर्नाक्युलर वीडियो, COD प्लस UPI, और WhatsApp से विश्वास पर झुकता है।",
        "Metro vs Bharat: metros mein higher card/UPI ticket size aur English campaigns; Bharat vernacular video, COD plus UPI, aur WhatsApp trust par jhukta hai.",
      ],
      [
        "Time-spend mix: chat, short video, long YouTube, cricket/OTT and digital payments dominate over desktop browsing.",
        "समय-व्यय मिश्रण: चैट, शॉर्ट वीडियो, लंबा YouTube, क्रिकेट/OTT और डिजिटल भुगतान डेस्कटॉप ब्राउज़िंग से ऊपर हैं।",
        "Time-spend mix: chat, short video, lamba YouTube, cricket/OTT aur digital payments desktop browsing se upar hain.",
      ],
      [
        "New users: many are first-generation internet users; UX must use icons, voice, simple Hindi/regional copy and assisted video.",
        "नए उपयोगकर्ता: कई प्रथम-पीढ़ी इंटरनेट उपयोगकर्ता हैं; UX में आइकन, वॉइस, सरल हिंदी/क्षेत्रीय कॉपी और सहायक वीडियो चाहिए।",
        "New users: kai first-generation internet users hain; UX mein icons, voice, simple Hindi/regional copy aur assisted video chahiye.",
      ],
      [
        "Gaps: gender and rural–urban gaps have narrowed but not vanished; feature-phone remnants still exist in some segments.",
        "अंतर: लिंग और ग्रामीण–शहरी अंतर घटे हैं पर गए नहीं; कुछ खंडों में फ़ीचर-फोन अभी भी हैं।",
        "Gaps: gender aur rural–urban gaps ghate hain par gayab nahi; kuch segments mein feature phones ab bhi hain.",
      ],
    ]),
    TBL(
      [
        ["Lens", "नज़रिया", "Lens"],
        ["Metro India", "मेट्रो इंडिया", "Metro India"],
        ["Bharat (tier-2/3, rural)", "भारत (टियर-2/3, ग्रामीण)", "Bharat (tier-2/3, rural)"],
      ],
      [
        [
          ["Language", "भाषा", "Language"],
          ["English + Hindi mix", "अंग्रेज़ी + हिंदी मिश्रण", "English + Hindi mix"],
          ["Hindi / regional first", "हिंदी / क्षेत्रीय प्रथम", "Hindi / regional first"],
        ],
        [
          ["Discovery", "डिस्कवरी", "Discovery"],
          ["Google, Instagram, apps", "Google, Instagram, ऐप", "Google, Instagram, apps"],
          ["YouTube, WhatsApp, short video", "YouTube, WhatsApp, शॉर्ट वीडियो", "YouTube, WhatsApp, short video"],
        ],
        [
          ["Payments", "भुगतान", "Payments"],
          ["UPI, cards, wallets", "UPI, कार्ड, वॉलेट", "UPI, cards, wallets"],
          ["UPI growing; COD still common", "UPI बढ़ रहा; COD अभी आम", "UPI badh raha; COD ab bhi common"],
        ],
        [
          ["Trust cues", "विश्वास संकेत", "Trust cues"],
          ["Brand site, ratings", "ब्रांड साइट, रेटिंग", "Brand site, ratings"],
          ["Local language, known faces, COD", "स्थानीय भाषा, जाने-पहचाने चेहरे, COD", "Local language, known faces, COD"],
        ],
      ],
    ),
    EXAM(
      "Characterise digital users in India: Jio-era data, multilingual use, mobile-first behaviour, and metro versus Bharat. Give campaign implications for language and channel.",
      "भारत में डिजिटल उपयोगकर्ताओं का चित्रण करें: Jio-युग डेटा, बहुभाषी उपयोग, मोबाइल-फर्स्ट व्यवहार, मेट्रो बनाम भारत। भाषा और चैनल के लिए कैंपेन निहितार्थ दें।",
      "Bharat mein digital users characterize karo: Jio-era data, multilingual, mobile-first, metro vs Bharat. Language aur channel ke campaign implications do.",
    ),
  ]),

  "dm-india-ads": topic("dm-india-ads", [
    P(
      "India’s digital advertising market is one of the fastest-growing media markets in the country, taking share from print and, increasingly, competing with television. Spend is concentrated: Google (Search and YouTube) and Meta (Facebook, Instagram, and WhatsApp-related products) take the majority of rupees. Growing slices include OTT/connected TV (Hotstar and other streaming apps), e-commerce ads, and vernacular networks. Performance marketing—paying for leads and sales, not only fame—is the dominant culture.",
      "भारत का डिजिटल विज्ञापन बाज़ार देश के सबसे तेज़ बढ़ते मीडिया बाज़ारों में है, प्रिंट से हिस्सा ले रहा है और बढ़ते हुए टेलीविज़न से प्रतिस्पर्धा कर रहा है। खर्च केंद्रित है: Google (Search और YouTube) तथा Meta (Facebook, Instagram, और WhatsApp-संबंधित उत्पाद) रुपये का बड़ा हिस्सा लेते हैं। बढ़ते हिस्से में OTT/कनेक्टेड TV (Hotstar और अन्य स्ट्रीमिंग ऐप), ई-कॉमर्स विज्ञापन और वर्नाक्युलर नेटवर्क हैं। परफ़ॉर्मेंस मार्केटिंग—केवल प्रसिद्धि नहीं, लीड और बिक्री के लिए भुगतान—प्रमुख संस्कृति है।",
      "Bharat ka digital advertising market tez badhta media market hai, print se share le raha hai aur TV se compete kar raha hai. Spend concentrated hai: Google (Search aur YouTube) aur Meta (Facebook, Instagram, WhatsApp-related) majority rupees lete hain. Growing slices: OTT/CTV (Hotstar aur doosre streaming apps), e-commerce ads, vernacular networks. Performance marketing—leads aur sales ke liye pay—dominant culture hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Google/Meta dominance: search intent (Google) plus social/display targeting (Meta) cover discovery and remarketing for most advertisers.",
        "Google/Meta प्रभुत्व: सर्च इंटेंट (Google) प्लस सोशल/डिस्प्ले टारगेटिंग (Meta) अधिकांश विज्ञापनदाताओं के लिए डिस्कवरी और रीмарकेटिंग कवर करते हैं।",
        "Google/Meta dominance: search intent (Google) plus social/display targeting (Meta) zyadatar advertisers ki discovery aur remarketing cover karte hain.",
      ],
      [
        "YouTube as TV-like reach: cheap data made YouTube a mass video channel for both brand and performance campaigns.",
        "YouTube TV-जैसी पहुँच: सस्ते डेटा ने YouTube को ब्रांड और परफ़ॉर्मेंस दोनों के लिए मास वीडियो चैनल बना दिया।",
        "YouTube TV-jaisi reach: saste data ne YouTube ko brand aur performance dono ke liye mass video channel bana diya.",
      ],
      [
        "OTT and Hotstar-class inventory: cricket and streaming shows sell premium video ads next to live sport and original series.",
        "OTT और Hotstar-स्तरीय इन्वेंटरी: क्रिकेट और स्ट्रीमिंग शो लाइव खेल व ओरिजिनल सीरीज़ के साथ प्रीमियम वीडियो विज्ञापन बेचते हैं।",
        "OTT aur Hotstar-class inventory: cricket aur streaming shows live sport aur originals ke saath premium video ads bechte hain.",
      ],
      [
        "Vernacular premium: regional YouTube, ShareChat-class platforms and language targeting unlock Bharat audiences.",
        "वर्नाक्युलर प्रीमियम: क्षेत्रीय YouTube, ShareChat-स्तरीय प्लेटफ़ॉर्म और भाषा टारगेटिंग भारत ऑडियंस खोलते हैं।",
        "Vernacular premium: regional YouTube, ShareChat-class platforms aur language targeting Bharat audiences kholte hain.",
      ],
      [
        "E-commerce ads: Amazon, Flipkart and others sell search and display inside their apps—high intent, high fees.",
        "ई-कॉमर्स विज्ञापन: Amazon, Flipkart आदि अपने ऐप के अंदर सर्च व डिस्प्ले बेचते हैं—ऊँचा इंटेंट, ऊँची फीस।",
        "E-commerce ads: Amazon, Flipkart apne apps ke andar search/display bechte hain—high intent, high fees.",
      ],
      [
        "Shift from print, pressure on TV: digital is more measurable; TV still wins some mass-brand moments (cricket, IPL).",
        "प्रिंट से स्थानांतरण, TV पर दबाव: डिजिटल अधिक मापनीय; TV अभी कुछ मास-ब्रांड क्षण (क्रिकेट, IPL) जीतता है।",
        "Print se shift, TV par pressure: digital zyada measurable; TV ab bhi kuch mass-brand moments (cricket, IPL) jeetta hai.",
      ],
      [
        "Challenges: fraud, brand safety on UGC, walled gardens (limited data sharing), and small-brand dependence on two platforms.",
        "चुनौतियाँ: धोखाधड़ी, UGC पर ब्रांड सेफ़्टी, वॉल्ड गार्डन (सीमित डेटा साझा), छोटे ब्रांडों की दो प्लेटफ़ॉर्म पर निर्भरता।",
        "Challenges: fraud, UGC par brand safety, walled gardens, chhote brands ki do platforms par dependence.",
      ],
    ]),
    TBL(
      [
        ["Player / slice", "खिलाड़ी / हिस्सा", "Player / slice"],
        ["Role in the Indian mix", "भारतीय मिश्रण में भूमिका", "Bharatiya mix mein role"],
      ],
      [
        [
          ["Google (Search + YouTube)", "Google (Search + YouTube)", "Google (Search + YouTube)"],
          ["Intent capture and mass video", "इंटेंट कैप्चर और मास वीडियो", "Intent capture aur mass video"],
        ],
        [
          ["Meta (Facebook, Instagram)", "Meta (Facebook, Instagram)", "Meta (Facebook, Instagram)"],
          ["Interest targeting, creative testing, social commerce", "रुचि टारगेटिंग, क्रिएटिव टेस्ट, सोशल कॉमर्स", "Interest targeting, creative tests, social commerce"],
        ],
        [
          ["OTT / Hotstar-class", "OTT / Hotstar-स्तरीय", "OTT / Hotstar-class"],
          ["Premium video next to sport and shows", "खेल व शो के साथ प्रीमियम वीडियो", "Premium video sport aur shows ke saath"],
        ],
        [
          ["Vernacular / short video", "वर्नाक्युलर / शॉर्ट वीडियो", "Vernacular / short video"],
          ["Reach beyond English metros", "अंग्रेज़ी मेट्रो से परे पहुँच", "English metros se pare reach"],
        ],
      ],
    ),
    EXAM(
      "Outline the Indian digital advertising market: Google/Meta dominance, the rise of OTT (e.g. Hotstar), vernacular growth, and why performance culture matters.",
      "भारतीय डिजिटल विज्ञापन बाज़ार का रूपरेखा चित्रण: Google/Meta प्रभुत्व, OTT (जैसे Hotstar) का उदय, वर्नाक्युलर वृद्धि, और परफ़ॉर्मेंस संस्कृति क्यों मायने रखती है।",
      "Indian digital ad market outline karo: Google/Meta dominance, OTT (jaise Hotstar) ka rise, vernacular growth, aur performance culture kyun matter karti hai.",
    ),
  ]),

  "dm-strategy": topic("dm-strategy", [
    P(
      "A digital marketing strategy is a documented choice of objectives, audience, channels, budget, creative approach and KPIs that support a business goal. Tactics (a Facebook ad, a blog post) without strategy waste money. The logic is always the same: start from the business problem, define who must be reached, pick POEM channels that those people actually use, fund them, and measure outcomes that matter—not vanity likes.",
      "डिजिटल मार्केटिंग रणनीति व्यावसायिक लक्ष्य के समर्थन में उद्देश्यों, ऑडियंस, चैनलों, बजट, क्रिएटिव दृष्टिकोण और KPI का दस्तावेज़ी चुनाव है। रणनीति के बिना युक्तियाँ (एक Facebook विज्ञापन, एक ब्लॉग पोस्ट) पैसा बर्बाद करती हैं। तर्क हमेशा एक है: व्यावसायिक समस्या से शुरू करें, किसे पहुँचना है परिभाषित करें, POEM चैनल चुनें जिन्हें वे लोग वास्तव में इस्तेमाल करते हैं, उन्हें फंड दें, और मायने रखने वाले परिणाम मापें—केवल दिखावटी लाइक नहीं।",
      "Digital marketing strategy business goal ke support mein objectives, audience, channels, budget, creative approach aur KPIs ka documented choice hai. Strategy ke bina tactics paisa barbaad karti hain. Logic hamesha same hai: business problem se start karo, kaun tak pahunchna hai define karo, POEM channels chuno jo wo log sach mein use karte hain, fund do, aur matter karne wale outcomes measure karo—sirf vanity likes nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Objectives first: awareness, consideration, conversion, loyalty or advocacy—each needs different channels and KPIs.",
        "पहले उद्देश्य: जागरूकता, विचार, कन्वर्ज़न, वफादारी या वकालत—प्रत्येक के अलग चैनल और KPI।",
        "Pehle objectives: awareness, consideration, conversion, loyalty ya advocacy—har ek ke alag channels aur KPIs.",
      ],
      [
        "Audience: who (persona), where they live online, language, barriers and what job they are hiring the product to do.",
        "ऑडियंस: कौन (पर्सोना), वे ऑनलाइन कहाँ रहते हैं, भाषा, बाधाएँ, और उत्पाद से वे कौन-सा काम करवाना चाहते हैं।",
        "Audience: kaun (persona), online kahan rehte hain, language, barriers, aur product se kaun-sa job chahte hain.",
      ],
      [
        "Channel choice follows audience and objective, not fashion: LinkedIn for B2B, YouTube for education, search for high intent.",
        "चैनल ऑडियंस और उद्देश्य के बाद आते हैं, फ़ैशन के नहीं: B2B के लिए LinkedIn, शिक्षा के लिए YouTube, उच्च इंटेंट के लिए सर्च।",
        "Channel audience aur objective ke baad aate hain, fashion ke nahi: B2B ke liye LinkedIn, education ke liye YouTube, high intent ke liye search.",
      ],
      [
        "Budget: split by funnel stage; keep a test slice; do not dump everything into one platform because a friend ‘got leads’.",
        "बजट: फ़नल चरण से बाँटें; टेस्ट हिस्सा रखें; केवल इसलिए एक प्लेटफ़ॉर्म में सब न डालें कि किसी मित्र को ‘लीड मिली’।",
        "Budget: funnel stage se baanto; test slice rakho; sirf isliye ek platform mein sab mat daalo ki kisi dost ko leads mili.",
      ],
      [
        "KPIs must match the objective: reach/CPM for awareness, CTR and time-on-site for consideration, CPA/ROAS for conversion.",
        "KPI उद्देश्य से मेल खाने चाहिए: जागरूकता के लिए पहुँच/CPM, विचार के लिए CTR व टाइम-ऑन-साइट, कन्वर्ज़न के लिए CPA/ROAS।",
        "KPIs objective se match karein: awareness ke liye reach/CPM, consideration ke liye CTR aur time-on-site, conversion ke liye CPA/ROAS.",
      ],
      [
        "Creative and offer are strategy too: the same audience ignores a weak promise even on a perfect channel.",
        "क्रिएटिव और ऑफ़र भी रणनीति हैं: कमज़ोर वादा सही चैनल पर भी नज़रअंदाज़ होता है।",
        "Creative aur offer bhi strategy hain: weak promise perfect channel par bhi ignore hota hai.",
      ],
      [
        "Optimise in cycles: launch, measure, learn, reallocate. Strategy is a loop, not a PDF frozen in April.",
        "चक्र में अनुकूलन: लॉन्च, माप, सीख, पुनर्आवंटन। रणनीति एक लूप है, अप्रैल में जमा PDF नहीं।",
        "Cycles mein optimise: launch, measure, learn, reallocate. Strategy ek loop hai, April ki frozen PDF nahi.",
      ],
    ]),
    H("A simple strategy sequence", "एक सरल रणनीति क्रम", "Ek simple strategy sequence"),
    OL([
      [
        "Fix the business objective (e.g. 20% more online sales in Q3 in Hindi-speaking states).",
        "व्यावसायिक उद्देश्य तय करें (जैसे Q3 में हिंदी-भाषी राज्यों में 20% अधिक ऑनलाइन बिक्री)।",
        "Business objective fix karo (jaise Q3 mein Hindi-speaking states mein 20% zyada online sales).",
      ],
      [
        "Define audience and insight (who buys, why they hesitate).",
        "ऑडियंस और इनसाइट परिभाषित करें (कौन खरीदता है, क्यों हिचकता है)।",
        "Audience aur insight define karo (kaun kharidta hai, kyun hesitate karta hai).",
      ],
      [
        "Choose channels (search, YouTube, Meta, email, WhatsApp) mapped to the journey.",
        "यात्रा से मैप कर चैनल चुनें (सर्च, YouTube, Meta, ईमेल, WhatsApp)।",
        "Journey se map karke channels chuno (search, YouTube, Meta, email, WhatsApp).",
      ],
      [
        "Allocate budget and calendar (always-on plus campaign bursts).",
        "बजट और कैलेंडर आवंटित करें (ऑलवेज-ऑन प्लस कैंपेन बर्स्ट)।",
        "Budget aur calendar allocate karo (always-on plus campaign bursts).",
      ],
      [
        "Set KPIs and tracking (pixels, UTM, CRM) before spend starts.",
        "खर्च से पहले KPI और ट्रैकिंग (पिक्सेल, UTM, CRM) सेट करें।",
        "Spend se pehle KPIs aur tracking (pixels, UTM, CRM) set karo.",
      ],
      [
        "Review weekly; shift money from weak ads to proven ones.",
        "साप्ताहिक समीक्षा; कमज़ोर विज्ञापनों से पैसे सिद्ध विज्ञापनों पर शिफ़्ट करें।",
        "Weekly review; weak ads se paisa proven ads par shift karo.",
      ],
    ]),
    TBL(
      [
        ["Objective", "उद्देश्य", "Objective"],
        ["Typical KPI", "सामान्य KPI", "Typical KPI"],
      ],
      [
        [
          ["Awareness", "जागरूकता", "Awareness"],
          ["Reach, impressions, view-through, brand search lift", "पहुँच, इंप्रेशन, व्यू-थ्रू, ब्रांड सर्च लिफ़्ट", "Reach, impressions, view-through, brand search lift"],
        ],
        [
          ["Consideration", "विचार", "Consideration"],
          ["CTR, video views, site time, add-to-cart", "CTR, वीडियो व्यू, साइट समय, ऐड-टू-कार्ट", "CTR, video views, site time, add-to-cart"],
        ],
        [
          ["Conversion", "कन्वर्ज़न", "Conversion"],
          ["CPA, ROAS, sales, qualified leads", "CPA, ROAS, बिक्री, योग्य लीड", "CPA, ROAS, sales, qualified leads"],
        ],
        [
          ["Loyalty", "वफादारी", "Loyalty"],
          ["Repeat rate, NPS, unsubscribe, referral", "रिपीट दर, NPS, अनसब्सक्राइब, रेफ़रल", "Repeat rate, NPS, unsubscribe, referral"],
        ],
      ],
    ),
    EXAM(
      "Write the steps of a digital marketing strategy: objectives, audience, channels, budget and KPIs. Give one KPI example for awareness versus conversion.",
      "डिजिटल मार्केटिंग रणनीति के चरण लिखें: उद्देश्य, ऑडियंस, चैनल, बजट और KPI। जागरूकता बनाम कन्वर्ज़न के लिए एक-एक KPI उदाहरण दें।",
      "Digital marketing strategy ke steps likho: objectives, audience, channels, budget aur KPIs. Awareness vs conversion ke liye ek-ek KPI example do.",
    ),
  ]),

  "dm-cdj": topic("dm-cdj", [
    P(
      "McKinsey’s Consumer Decision Journey (CDJ) replaced the old linear funnel for many exam and strategy discussions. People do not always walk Awareness → Interest → Desire → Action in a straight line. They start with an initial consideration set, actively evaluate options (search, reviews, friends), buy, and then enjoy, advocate and bond—often looping back so that the next purchase skips the long evaluation. Brands must be present at evaluate and after purchase, not only at the ‘big bang’ ad that creates awareness.",
      "McKinsey की Consumer Decision Journey (CDJ) ने कई परीक्षा व रणनीति चर्चाओं में पुराने रैखिक फ़नल की जगह ली। लोग हमेशा Awareness → Interest → Desire → Action सीधी रेखा में नहीं चलते। वे प्रारंभिक विचार-सेट से शुरू करते हैं, विकल्पों का सक्रिय मूल्यांकन करते हैं (सर्च, रिव्यू, मित्र), खरीदते हैं, फिर एन्जॉय, एडवोकेट और बॉन्ड करते हैं—अक्सर लूप कर अगली खरीद में लंबा मूल्यांकन छोड़ देते हैं। ब्रांडों को केवल जागरूकता वाले ‘बिग बैंग’ विज्ञापन पर नहीं, मूल्यांकन और खरीद के बाद भी मौजूद रहना चाहिए।",
      "McKinsey ki Consumer Decision Journey (CDJ) ne kai exam/strategy discussions mein purane linear funnel ki jagah li. Log hamesha Awareness → Interest → Desire → Action seedhi line mein nahi chalte. Wo initial consideration set se start karte hain, options actively evaluate karte hain (search, reviews, friends), buy karte hain, phir enjoy, advocate aur bond—aksar loop karke agli purchase mein lamba evaluation skip kar dete hain. Brands ko sirf awareness ad par nahi, evaluate aur purchase ke baad bhi present rehna chahiye.",
    ),
    D(
      "cdj",
      "McKinsey Consumer Decision Journey: consider, evaluate, buy, then enjoy / advocate / bond, versus a linear funnel that ends at purchase.",
      "McKinsey उपभोक्ता निर्णय यात्रा: कंसिडर, इवैल्यूएट, बाय, फिर एन्जॉय / एडवोकेट / बॉन्ड, बनाम खरीद पर खत्म होने वाला रैखिक फ़नल।",
      "McKinsey Consumer Decision Journey: consider, evaluate, buy, phir enjoy / advocate / bond, versus purchase par khatam hone wala linear funnel.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Consider: the brands that come to mind at the start (triggered by need, ad, or a friend’s post).",
        "कंसिडर: शुरुआत में दिमाग में आने वाले ब्रांड (ज़रूरत, विज्ञापन या मित्र की पोस्ट से ट्रिगर)।",
        "Consider: shuruaat mein dimag mein aane wale brands (need, ad, ya friend ki post se trigger).",
      ],
      [
        "Evaluate: active research—search queries, comparison sites, reviews, YouTube, store visits. The set can grow or shrink.",
        "इवैल्यूएट: सक्रिय शोध—सर्च, तुलना साइटें, रिव्यू, YouTube, स्टोर विज़िट। सेट बढ़ या घट सकता है।",
        "Evaluate: active research—search, comparison sites, reviews, YouTube, store visits. Set badh ya ghat sakta hai.",
      ],
      [
        "Buy: the moment of purchase, including payment friction, offers, COD versus UPI, and last-click experience.",
        "बाय: खरीद का क्षण, जिसमें भुगतान रगड़, ऑफ़र, COD बनाम UPI, और लास्ट-क्लिक अनुभव शामिल।",
        "Buy: purchase ka moment, including payment friction, offers, COD vs UPI, aur last-click experience.",
      ],
      [
        "Enjoy, advocate, bond: usage quality, support, unboxing, and whether the customer posts a review or recommends in a group.",
        "एन्जॉय, एडवोकेट, बॉन्ड: उपयोग गुणवत्ता, सपोर्ट, अनबॉक्सिंग, और ग्राहक रिव्यू पोस्ट करता है या ग्रुप में सुझाव देता है।",
        "Enjoy, advocate, bond: usage quality, support, unboxing, aur customer review post karta hai ya group mein recommend karta hai.",
      ],
      [
        "Loyalty loop: a bonded customer may go consider → buy next time, skipping long evaluation—this is why post-purchase experience is marketing.",
        "लॉयल्टी लूप: जुड़ा ग्राहक अगली बार कंसिडर → बाय कर सकता है, लंबा मूल्यांकन छोड़कर—इसीलिए खरीद-बाद अनुभव भी मार्केटिंग है।",
        "Loyalty loop: bonded customer agli baar consider → buy kar sakta hai, lamba evaluation skip karke—isliye post-purchase experience bhi marketing hai.",
      ],
      [
        "Versus old funnel: the funnel is linear and treats purchase as the end; CDJ is circular and treats advocacy as a growth engine.",
        "पुराने फ़नल से: फ़नल रैखिक है और खरीद को अंत मानता है; CDJ वृत्ताकार है और वकालत को वृद्धि इंजन मानती है।",
        "Purane funnel se: funnel linear hai aur purchase ko end maanta hai; CDJ circular hai aur advocacy ko growth engine maanti hai.",
      ],
      [
        "Implication: win evaluate with useful content and reviews; win bond with product quality, support and community.",
        "निहितार्थ: उपयोगी कंटेंट व रिव्यू से इवैल्यूएट जीतें; उत्पाद गुणवत्ता, सपोर्ट व समुदाय से बॉन्ड जीतें।",
        "Implication: useful content aur reviews se evaluate jeeto; product quality, support aur community se bond jeeto.",
      ],
    ]),
    H("Stages to memorise", "याद रखने योग्य चरण", "Yaad rakhne yogya stages"),
    OL([
      [
        "Consider — initial consideration set.",
        "कंसिडर — प्रारंभिक विचार-सेट।",
        "Consider — initial consideration set.",
      ],
      [
        "Evaluate — active evaluation and research.",
        "इवैल्यूएट — सक्रिय मूल्यांकन और शोध।",
        "Evaluate — active evaluation aur research.",
      ],
      [
        "Buy — moment of purchase.",
        "बाय — खरीद का क्षण।",
        "Buy — purchase ka moment.",
      ],
      [
        "Enjoy / advocate / bond — post-purchase loyalty loop.",
        "एन्जॉय / एडवोकेट / बॉन्ड — खरीद-बाद लॉयल्टी लूप।",
        "Enjoy / advocate / bond — post-purchase loyalty loop.",
      ],
    ]),
    TBL(
      [
        ["Idea", "विचार", "Idea"],
        ["Old funnel", "पुराना फ़नल", "Purana funnel"],
        ["CDJ", "CDJ", "CDJ"],
      ],
      [
        [
          ["Shape", "आकार", "Shape"],
          ["Linear, wide to narrow", "रैखिक, चौड़े से संकरा", "Linear, wide to narrow"],
          ["Circular loop after purchase", "खरीद के बाद वृत्ताकार लूप", "Purchase ke baad circular loop"],
        ],
        [
          ["End point", "अंत बिंदु", "End point"],
          ["Purchase / action", "खरीद / क्रिया", "Purchase / action"],
          ["Bonding and advocacy feed the next consider", "बॉन्डिंग व वकालत अगले कंसिडर को खिलाती हैं", "Bonding aur advocacy agla consider feed karte hain"],
        ],
        [
          ["Brand job", "ब्रांड कार्य", "Brand job"],
          ["Push awareness at the top", "शीर्ष पर जागरूकता धकेलें", "Top par awareness push karo"],
          ["Be present at evaluate and after care", "इवैल्यूएट और बाद की देखभाल में मौजूद रहें", "Evaluate aur after-care mein present raho"],
        ],
      ],
    ),
    EXAM(
      "Draw or describe McKinsey CDJ (consider, evaluate, buy, enjoy/advocate/bond) and contrast it with the traditional funnel. Mention the loyalty loop.",
      "McKinsey CDJ (कंसिडर, इवैल्यूएट, बाय, एन्जॉय/एडवोकेट/बॉन्ड) बनाएँ या वर्णन करें और पारंपरिक फ़नल से तुलना करें। लॉयल्टी लूप का उल्लेख करें।",
      "McKinsey CDJ (consider, evaluate, buy, enjoy/advocate/bond) describe karo aur traditional funnel se contrast karo. Loyalty loop mention karo.",
    ),
  ]),

  "dm-poem": topic("dm-poem", [
    P(
      "POEM classifies media as Paid, Owned or Earned. It is the standard planning grid in BCA digital marketing papers because every channel you name can be dropped into one of the three buckets—and good plans use all three together. Paid buys attention; owned is the asset you control; earned is attention you receive because others talk about you.",
      "POEM मीडिया को Paid, Owned या Earned के रूप में वर्गीकृत करता है। BCA डिजिटल मार्केटिंग पेपरों में यह मानक प्लानिंग ग्रिड है क्योंकि आप जो भी चैनल नाम दें, वह तीन में से एक टोकरी में बैठता है—और अच्छे प्लान तीनों को साथ चलाते हैं। Paid ध्यान खरीदता है; Owned वह संपत्ति है जिसे आप नियंत्रित करते हैं; Earned वह ध्यान है जो इसलिए मिलता है कि दूसरे आपके बारे में बात करते हैं।",
      "POEM media ko Paid, Owned ya Earned classify karta hai. BCA papers mein ye standard planning grid hai kyunki har channel in teen buckets mein baithta hai—aur acche plans teenon ko saath use karte hain. Paid attention kharidta hai; owned wo asset hai jo aap control karte ho; earned wo attention hai jo isliye milti hai ki doosre aapke baare mein baat karte hain.",
    ),
    D(
      "poem",
      "POEM framework: Paid media buys reach, Owned media is the brand’s own assets, Earned media is unpaid attention from others.",
      "POEM फ़्रेमवर्क: Paid मीडिया पहुँच खरीदता है, Owned मीडिया ब्रांड की अपनी संपत्ति है, Earned मीडिया दूसरों से बिना भुगतान का ध्यान है।",
      "POEM framework: Paid media reach kharidta hai, Owned media brand ke apne assets hain, Earned media doosron se unpaid attention hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Paid: Google Ads, Meta ads, display/video buys, paid influencer posts, sponsored listings on marketplaces. Fast, controllable, stops when budget stops.",
        "Paid: Google Ads, Meta विज्ञापन, डिस्प्ले/वीडियो खरीद, पेड इन्फ़्लुएंसर पोस्ट, मार्केटप्लेस स्पॉन्सर्ड लिस्टिंग। तेज़, नियंत्रित, बजट रुकते ही रुकता है।",
        "Paid: Google Ads, Meta ads, display/video buys, paid influencer posts, marketplace sponsored listings. Tez, controllable, budget rukte hi rukta hai.",
      ],
      [
        "Owned: website, app, blog, email list, official social profiles, stores, packaging QR. You set the rules; you still pay to create and host.",
        "Owned: वेबसाइट, ऐप, ब्लॉग, ईमेल लिस्ट, आधिकारिक सोशल प्रोफ़ाइल, स्टोर, पैकेजिंग QR। नियम आप तय करते हैं; बनाने और होस्ट करने का खर्च फिर भी आपका है।",
        "Owned: website, app, blog, email list, official social profiles, stores, packaging QR. Rules aap set karte ho; create aur host karne ka kharcha phir bhi aapka hai.",
      ],
      [
        "Earned: reviews, organic shares, press mentions, word of mouth, viral UGC, ranking in unpaid search (partly earned via SEO).",
        "Earned: रिव्यू, ऑर्गेनिक शेयर, प्रेस उल्लेख, मुँह-ज़बानी, वायरल UGC, बिना भुगतान सर्च रैंकिंग (SEO से आंशिक रूप से अर्जित)।",
        "Earned: reviews, organic shares, press mentions, word of mouth, viral UGC, unpaid search ranking (SEO se partly earned).",
      ],
      [
        "Integration: paid traffic should land on strong owned pages; great owned content earns links and shares; earned proof (reviews) should appear in paid ads.",
        "एकीकरण: पेड ट्रैफ़िक मज़बूत ओन्ड पेज पर गिरे; बढ़िया ओन्ड कंटेंट लिंक व शेयर कमाता है; अर्जित प्रमाण (रिव्यू) पेड विज्ञापनों में दिखना चाहिए।",
        "Integration: paid traffic strong owned pages par lande; accha owned content links aur shares kamata hai; earned proof (reviews) paid ads mein dikhna chahiye.",
      ],
      [
        "Control versus credibility: paid and owned are more controllable; earned is less controllable but often more trusted.",
        "नियंत्रण बनाम विश्वसनीयता: paid और owned अधिक नियंत्रित; earned कम नियंत्रित पर अक्सर अधिक विश्वसनीय।",
        "Control vs credibility: paid aur owned zyada controllable; earned kam controllable lekin aksar zyada trusted.",
      ],
      [
        "Shared/converged media: a paid influencer post that users remix sits between paid and earned—mention this only if the question asks for nuance.",
        "शेयर्ड/कनवर्ज्ड मीडिया: पेड इन्फ़्लुएंसर पोस्ट जिसे यूज़र रीमिक्स करें, paid और earned के बीच बैठती है—केवल तभी उल्लेख करें जब प्रश्न सूक्ष्मता माँगे।",
        "Shared/converged media: paid influencer post jo users remix karein, paid aur earned ke beech baithti hai—tabhi mention karo jab question nuance maange.",
      ],
      [
        "Planning use: list every activity under P, O or E so budget and skills are not all dumped into ads.",
        "प्लानिंग उपयोग: हर गतिविधि को P, O या E के तहत लिखें ताकि बजट और कौशल केवल विज्ञापनों में न ढेर हों।",
        "Planning use: har activity ko P, O ya E ke under likho taaki budget aur skills sirf ads mein dump na hon.",
      ],
    ]),
    TBL(
      [
        ["Type", "प्रकार", "Type"],
        ["Examples", "उदाहरण", "Examples"],
        ["Exam one-liner", "परीक्षा एक-पंक्ति", "Exam one-liner"],
      ],
      [
        [
          ["Paid", "Paid", "Paid"],
          ["Google Ads, Meta ads, display, paid influencers", "Google Ads, Meta विज्ञापन, डिस्प्ले, पेड इन्फ़्लुएंसर", "Google Ads, Meta ads, display, paid influencers"],
          ["Buy reach; stop paying, stop appearing", "पहुँच खरीदें; भुगतान रुकें तो दिखना रुके", "Reach kharido; pay band to dikhna band"],
        ],
        [
          ["Owned", "Owned", "Owned"],
          ["Website, app, blog, email list, brand social IDs", "वेबसाइट, ऐप, ब्लॉग, ईमेल लिस्ट, ब्रांड सोशल ID", "Website, app, blog, email list, brand social IDs"],
          ["You control the asset; still costs to build", "संपत्ति आपका नियंत्रण; बनाने की लागत फिर भी", "Asset aap control karte ho; build cost phir bhi"],
        ],
        [
          ["Earned", "Earned", "Earned"],
          ["Reviews, shares, PR, word of mouth, viral UGC", "रिव्यू, शेयर, PR, मुँह-ज़बानी, वायरल UGC", "Reviews, shares, PR, word of mouth, viral UGC"],
          ["Highest trust; least control", "सबसे अधिक विश्वास; सबसे कम नियंत्रण", "Sabse zyada trust; sabse kam control"],
        ],
      ],
    ),
    NOTE(
      "Owned media is not ‘free’. You pay salaries, tools, hosting and content time. The point is you do not pay a publisher per impression.",
      "Owned मीडिया ‘मुफ़्त’ नहीं है। वेतन, टूल, होस्टिंग और कंटेंट समय चुकता होता है। बात यह है कि आप प्रकाशक को प्रति इंप्रेशन नहीं देते।",
      "Owned media ‘free’ nahi hai. Salary, tools, hosting aur content time lagta hai. Point ye hai ki publisher ko per impression nahi dete.",
    ),
    EXAM(
      "Explain POEM with two examples each. Show how a product launch could use paid ads, an owned landing page, and earned reviews together.",
      "POEM को प्रत्येक के दो उदाहरणों से समझाएँ। दिखाएँ कि उत्पाद लॉन्च पेड विज्ञापन, ओन्ड लैंडिंग पेज और अर्जित रिव्यू को साथ कैसे इस्तेमाल कर सकता है।",
      "POEM ko har type ke do examples se samjhao. Dikhao product launch paid ads, owned landing page aur earned reviews ko saath kaise use kare.",
    ),
  ]),

  "dm-segment": topic("dm-segment", [
    P(
      "Segmentation divides a market into groups that share needs or behaviours so the brand can send a more relevant message. Digital tools make this cheap: the same campaign can show a Hindi video to Lucknow, an English carousel to Bengaluru, and a retargeting offer only to people who abandoned a cart. Customising the message is not a luxury—it is how you raise CTR and conversion without simply raising bids.",
      "सेगमेंटेशन बाज़ार को ऐसे समूहों में बाँटता है जिनकी ज़रूरतें या व्यवहार समान हों, ताकि ब्रांड अधिक प्रासंगिक संदेश भेज सके। डिजिटल टूल इसे सस्ता बनाते हैं: एक ही कैंपेन लखनऊ को हिंदी वीडियो, बेंगलुरु को अंग्रेज़ी कैरोसेल, और केवल कार्ट छोड़ने वालों को रीटारगेटिंग ऑफ़र दिखा सकता है। संदेश अनुकूलन विलासिता नहीं—बिना बोली बढ़ाए CTR और कन्वर्ज़न उठाने का तरीका है।",
      "Segmentation market ko un groups mein baantta hai jinki needs ya behaviours similar hon, taaki brand zyada relevant message bhej sake. Digital tools ise sasta banate hain: ek hi campaign Lucknow ko Hindi video, Bengaluru ko English carousel, aur sirf cart-abandoners ko retargeting offer dikha sakta hai. Message customise karna luxury nahi—bina bid badhaye CTR aur conversion uthane ka tarika hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Demographic: age, gender, income, education, occupation—useful but blunt if used alone.",
        "जनसांख्यिकीय: आयु, लिंग, आय, शिक्षा, व्यवसाय—अकेले इस्तेमाल पर rough।",
        "Demographic: age, gender, income, education, occupation—akele use par blunt.",
      ],
      [
        "Geographic: country, state, city, pincode, store radius, climate (heaters versus ACs).",
        "भौगोलिक: देश, राज्य, शहर, पिनकोड, स्टोर रेडियस, जलवायु (हीटर बनाम AC)।",
        "Geographic: country, state, city, pincode, store radius, climate (heaters vs ACs).",
      ],
      [
        "Psychographic: values, lifestyle, personality (eco-conscious, status-seeking, value hunter).",
        "मनोवृत्तिक: मूल्य, जीवनशैली, व्यक्तित्व (पर्यावरण-सचेत, स्टेटस-सीकिंग, वैल्यू हंटर)।",
        "Psychographic: values, lifestyle, personality (eco-conscious, status-seeking, value hunter).",
      ],
      [
        "Behavioural: purchase history, cart abandoners, heavy users, app openers, content viewers.",
        "व्यवहारिक: खरीद इतिहास, कार्ट छोड़ने वाले, हैवी यूज़र, ऐप खोलने वाले, कंटेंट व्यूअर।",
        "Behavioural: purchase history, cart abandoners, heavy users, app openers, content viewers.",
      ],
      [
        "Firmographic (B2B): industry, company size, role (owner versus intern) on LinkedIn-type platforms.",
        "फ़र्मोग्राफ़िक (B2B): उद्योग, कंपनी आकार, भूमिका (मालिक बनाम इंटर्न) LinkedIn-जैसे प्लेटफ़ॉर्म पर।",
        "Firmographic (B2B): industry, company size, role (owner vs intern) LinkedIn-type platforms par.",
      ],
      [
        "Personas: a named sketch (e.g. ‘Priya, 24, first job, shops on Instagram’) that keeps the team aligned.",
        "पर्सोना: नामित रेखाचित्र (जैसे ‘प्रिया, 24, पहली नौकरी, Instagram पर खरीदारी’) जो टीम को एक दिशा देता है।",
        "Personas: named sketch (jaise ‘Priya, 24, first job, Instagram par shopping’) jo team ko align rakhta hai.",
      ],
      [
        "Message customisation: language, offer, proof, creative format and CTA change by segment; dynamic creative can automate swaps.",
        "संदेश अनुकूलन: भाषा, ऑफ़र, प्रमाण, क्रिएटिव फ़ॉर्मेट और CTA सेगमेंट से बदलते हैं; डायनामिक क्रिएटिव स्वैप स्वचालित कर सकता है।",
        "Message customisation: language, offer, proof, creative format aur CTA segment se badalte hain; dynamic creative swaps automate kar sakta hai.",
      ],
      [
        "Ethics: targeting should not discriminate unlawfully or stalk people in creepy ways; frequency caps matter.",
        "नैतिकता: टारगेटिंग अवैध भेदभाव या डरावनी स्टॉकिंग न करे; फ़्रीक्वेंसी कैप मायने रखते हैं।",
        "Ethics: targeting unlawful discriminate ya creepy stalking na kare; frequency caps matter karte hain.",
      ],
    ]),
    TBL(
      [
        ["Segment type", "सेगमेंट प्रकार", "Segment type"],
        ["Example message customisation", "संदेश अनुकूलन उदाहरण", "Message customisation example"],
      ],
      [
        [
          ["Geographic", "भौगोलिक", "Geographic"],
          ["Mumbai monsoon offer versus Jaipur summer AC offer", "मुंबई मानसून ऑफ़र बनाम जयपुर गर्मी AC ऑफ़र", "Mumbai monsoon offer vs Jaipur summer AC offer"],
        ],
        [
          ["Behavioural", "व्यवहारिक", "Behavioural"],
          ["10% off only for cart abandoners, not first-time browsers", "केवल कार्ट छोड़ने वालों को 10% छूट, पहली बार ब्राउज़र को नहीं", "Sirf cart abandoners ko 10% off, first-time browsers ko nahi"],
        ],
        [
          ["Language", "भाषा", "Language"],
          ["Hindi voice-over for Bharat; English captions for metro professionals", "भारत के लिए हिंदी वॉइस-ओवर; मेट्रो पेशेवरों के लिए अंग्रेज़ी कैप्शन", "Bharat ke liye Hindi voice-over; metro professionals ke liye English captions"],
        ],
        [
          ["B2B role", "B2B भूमिका", "B2B role"],
          ["ROI case study for a CFO; easy setup demo for an IT admin", "CFO के लिए ROI केस स्टडी; IT एडमिन के लिए आसान सेटअप डेमो", "CFO ke liye ROI case study; IT admin ke liye easy setup demo"],
        ],
      ],
    ),
    EXAM(
      "Define segmentation in digital marketing. List four bases (demographic, geographic, psychographic, behavioural) and show how message customisation improves relevance.",
      "डिजिटल मार्केटिंग में सेगमेंटेशन परिभाषित करें। चार आधार लिखें (जनसांख्यिकीय, भौगोलिक, मनोवृत्तिक, व्यवहारिक) और दिखाएँ कि संदेश अनुकूलन प्रासंगिकता कैसे सुधारता है।",
      "Digital marketing mein segmentation define karo. Char bases list karo (demographic, geographic, psychographic, behavioural) aur dikhao message customisation relevance kaise sudharta hai.",
    ),
  ]),

  "dm-plan": topic("dm-plan", [
    P(
      "A digital marketing plan turns strategy into a calendar, budget and measurement system. Writing the plan also reveals the skills a team (or a BCA graduate) must bring: content, SEO, paid media, social, email, analytics and basic technical literacy. Examiners often ask for the structure of the plan and for SMART goals, not for a fictional 50-page document.",
      "डिजिटल मार्केटिंग प्लान रणनीति को कैलेंडर, बजट और मापन प्रणाली में बदलता है। प्लान लिखने से वे कौशल भी दिखते हैं जो टीम (या BCA स्नातक) के पास होने चाहिए: कंटेंट, SEO, पेड मीडिया, सोशल, ईमेल, एनालिटिक्स और बुनियादी तकनीकी साक्षरता। परीक्षक अक्सर प्लान की संरचना और SMART लक्ष्य माँगते हैं, काल्पनिक 50-पृष्ठ दस्तावेज़ नहीं।",
      "Digital marketing plan strategy ko calendar, budget aur measurement system mein badalta hai. Plan likhne se wo skills bhi dikhte hain jo team (ya BCA graduate) ke paas hone chahiye: content, SEO, paid media, social, email, analytics aur basic technical literacy. Examiners aksar plan ki structure aur SMART goals maangte hain, fictional 50-page document nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Skills mix: copywriting, basic design, SEO, Google Ads / Meta Ads, social community, email, analytics, spreadsheet hygiene, and privacy awareness.",
        "कौशल मिश्रण: कॉपीराइटिंग, बुनियादी डिज़ाइन, SEO, Google Ads / Meta Ads, सोशल कम्युनिटी, ईमेल, एनालिटिक्स, स्प्रेडशीट स्वच्छता, गोपनीयता जागरूकता।",
        "Skills mix: copywriting, basic design, SEO, Google Ads / Meta Ads, social community, email, analytics, spreadsheet hygiene, privacy awareness.",
      ],
      [
        "Audit first: current site speed, SEO health, social presence, past campaign results, competitors and customer reviews.",
        "पहले ऑडिट: वर्तमान साइट स्पीड, SEO स्वास्थ्य, सोशल उपस्थिति, पिछले कैंपेन परिणाम, प्रतियोगी और ग्राहक रिव्यू।",
        "Pehle audit: current site speed, SEO health, social presence, past campaign results, competitors aur customer reviews.",
      ],
      [
        "SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound (e.g. 300 qualified leads in 90 days at CPA under ₹400).",
        "SMART लक्ष्य: Specific, Measurable, Achievable, Relevant, Time-bound (जैसे 90 दिनों में CPA ₹400 से कम पर 300 योग्य लीड)।",
        "SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound (jaise 90 din mein CPA ₹400 se kam par 300 qualified leads).",
      ],
      [
        "Channel and POEM map: which paid, owned and earned activities support each goal.",
        "चैनल और POEM मैप: कौन-सी paid, owned व earned गतिविधियाँ प्रत्येक लक्ष्य को सहारा देती हैं।",
        "Channel aur POEM map: kaun-si paid, owned aur earned activities har goal ko support karti hain.",
      ],
      [
        "Content calendar: themes, festivals, product drops, posting frequency, owners and assets.",
        "कंटेंट कैलेंडर: थीम, त्योहार, प्रोडक्ट ड्रॉप, पोस्टिंग आवृत्ति, मालिक और एसेट।",
        "Content calendar: themes, festivals, product drops, posting frequency, owners aur assets.",
      ],
      [
        "Budget and media mix: monthly caps, test budget, production versus media split.",
        "बजट और मीडिया मिक्स: मासिक सीमा, टेस्ट बजट, प्रोडक्शन बनाम मीडिया विभाजन।",
        "Budget aur media mix: monthly caps, test budget, production vs media split.",
      ],
      [
        "Measurement: tracking plan, dashboard, reporting cadence, and a rule for killing weak ads.",
        "मापन: ट्रैकिंग प्लान, डैशबोर्ड, रिपोर्टिंग लय, और कमज़ोर विज्ञापन बंद करने का नियम।",
        "Measurement: tracking plan, dashboard, reporting cadence, aur weak ads band karne ka rule.",
      ],
    ]),
    H("Plan structure (memorise this order)", "प्लान संरचना (यह क्रम याद करें)", "Plan structure (ye order yaad karo)"),
    OL([
      [
        "Situation audit (internal + competitors + audience).",
        "स्थिति ऑडिट (आंतरिक + प्रतियोगी + ऑडियंस)।",
        "Situation audit (internal + competitors + audience).",
      ],
      [
        "SMART objectives and KPIs.",
        "SMART उद्देश्य और KPI।",
        "SMART objectives aur KPIs.",
      ],
      [
        "Audience, segments and personas.",
        "ऑडियंस, सेगमेंट और पर्सोना।",
        "Audience, segments aur personas.",
      ],
      [
        "POEM channel plan and offers.",
        "POEM चैनल प्लान और ऑफ़र।",
        "POEM channel plan aur offers.",
      ],
      [
        "Content calendar and asset list.",
        "कंटेंट कैलेंडर और एसेट सूची।",
        "Content calendar aur asset list.",
      ],
      [
        "Budget, timeline, roles (RACI-style).",
        "बजट, समयरेखा, भूमिकाएँ (RACI-शैली)।",
        "Budget, timeline, roles (RACI-style).",
      ],
      [
        "Measurement, optimisation and risk (fraud, privacy, brand safety).",
        "मापन, अनुकूलन और जोखिम (धोखाधड़ी, गोपनीयता, ब्रांड सेफ़्टी)।",
        "Measurement, optimisation aur risk (fraud, privacy, brand safety).",
      ],
    ]),
    TBL(
      [
        ["Plan section", "प्लान खंड", "Plan section"],
        ["What to put in the answer", "उत्तर में क्या लिखें", "Answer mein kya likhein"],
      ],
      [
        [
          ["Audit", "ऑडिट", "Audit"],
          ["Site, SEO, social, past ROI, gaps", "साइट, SEO, सोशल, पिछला ROI, अंतराल", "Site, SEO, social, past ROI, gaps"],
        ],
        [
          ["Goals", "लक्ष्य", "Goals"],
          ["SMART + matched KPIs", "SMART + मेल खाते KPI", "SMART + matched KPIs"],
        ],
        [
          ["Calendar", "कैलेंडर", "Calendar"],
          ["Weekly posts, campaign bursts, festivals", "साप्ताहिक पोस्ट, कैंपेन बर्स्ट, त्योहार", "Weekly posts, campaign bursts, festivals"],
        ],
        [
          ["Measurement", "मापन", "Measurement"],
          ["Tools, cadence, decision rule", "टूल, लय, निर्णय नियम", "Tools, cadence, decision rule"],
        ],
      ],
    ),
    EXAM(
      "List skills needed for digital marketing and the structure of a digital marketing plan. Expand SMART with a numeric example.",
      "डिजिटल मार्केटिंग के लिए कौशल और डिजिटल मार्केटिंग प्लान की संरचना लिखें। SMART को एक संख्यात्मक उदाहरण से खोलें।",
      "Digital marketing ke skills aur plan ki structure list karo. SMART ko ek numeric example se expand karo.",
    ),
  ]),

  "dm-terms": topic("dm-terms", [
    P(
      "Digital marketing has a shared vocabulary of metrics. If you confuse impressions with reach, or CPC with CPA, you will misread every dashboard and every exam numerical. Learn the definition, the formula where it exists, and the decision the metric supports (branding versus performance).",
      "डिजिटल मार्केटिंग में मेट्रिक्स की साझा शब्दावली है। यदि आप इंप्रेशन को पहुँच से, या CPC को CPA से मिला दें, तो हर डैशबोर्ड और हर परीक्षा संख्या गलत पढ़ेंगे। परिभाषा, जहाँ हो वहाँ सूत्र, और मेट्रिक जो निर्णय सहारा देता है (ब्रांडिंग बनाम परफ़ॉर्मेंस) सीखें।",
      "Digital marketing mein metrics ki shared vocabulary hai. Agar impressions ko reach se, ya CPC ko CPA se milaya to har dashboard aur exam numerical galat padhoge. Definition, jahan ho wahan formula, aur metric ka decision (branding vs performance) seekho.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Impression: one serving of an ad or page. The same person can generate many impressions.",
        "इंप्रेशन: विज्ञापन या पेज का एक बार दिखना। एक ही व्यक्ति कई इंप्रेशन दे सकता है।",
        "Impression: ad ya page ka ek serving. Ek hi person kai impressions de sakta hai.",
      ],
      [
        "Reach: unique people (or unique cookies/devices) who saw the message at least once.",
        "पहुँच: अद्वितीय लोग (या कुकी/डिवाइस) जिन्होंने संदेश कम से कम एक बार देखा।",
        "Reach: unique log (ya cookies/devices) jinhone message kam se kam ek baar dekha.",
      ],
      [
        "CTR (Click-Through Rate): clicks ÷ impressions × 100. Measures ad or snippet attractiveness.",
        "CTR: क्लिक ÷ इंप्रेशन × 100। विज्ञापन या स्निपेट की आकर्षकता मापता है।",
        "CTR: clicks ÷ impressions × 100. Ad ya snippet ki attractiveness measure karta hai.",
      ],
      [
        "CPC / CPM / CPA: cost per click; cost per thousand impressions; cost per acquisition (lead or sale).",
        "CPC / CPM / CPA: प्रति क्लिक लागत; प्रति हज़ार इंप्रेशन लागत; प्रति अधिग्रहण लागत (लीड या बिक्री)।",
        "CPC / CPM / CPA: cost per click; cost per thousand impressions; cost per acquisition (lead ya sale).",
      ],
      [
        "ROAS: return on ad spend = revenue attributed to ads ÷ ad spend. Related to ROI but usually ad-specific.",
        "ROAS: विज्ञापन खर्च पर प्रतिफल = विज्ञापनों से जुड़ी आय ÷ विज्ञापन खर्च। ROI से संबंधित पर आमतौर पर विज्ञापन-विशिष्ट।",
        "ROAS: return on ad spend = ads se attributed revenue ÷ ad spend. ROI se related lekin usually ad-specific.",
      ],
      [
        "Bounce rate: share of sessions that view only one page then leave. High bounce can mean bad match or slow page.",
        "बाउंस दर: उन सत्रों का हिस्सा जो केवल एक पेज देखकर चले जाएँ। ऊँचा बाउंस खराब मैच या धीमे पेज का संकेत हो सकता है।",
        "Bounce rate: un sessions ka hissa jo sirf ek page dekh kar chale jaayen. High bounce bad match ya slow page ka signal ho sakta hai.",
      ],
      [
        "Conversion and conversion rate: a counted valuable action (purchase, lead, install); conversions ÷ clicks or sessions.",
        "कन्वर्ज़न और कन्वर्ज़न दर: गिना गया मूल्यवान कार्य (खरीद, लीड, इंस्टॉल); कन्वर्ज़न ÷ क्लिक या सत्र।",
        "Conversion aur conversion rate: counted valuable action (purchase, lead, install); conversions ÷ clicks ya sessions.",
      ],
      [
        "Attribution: which touch (first click, last click, linear, data-driven) gets credit for the conversion.",
        "एट्रिब्यूशन: कौन-सा स्पर्श (फ़र्स्ट क्लिक, लास्ट क्लिक, लीनियर, डेटा-ड्रिवन) कन्वर्ज़न का श्रेय पाए।",
        "Attribution: kaun-sa touch (first click, last click, linear, data-driven) conversion ka credit paaye.",
      ],
    ]),
    TBL(
      [
        ["Term", "पद", "Term"],
        ["Formula / meaning", "सूत्र / अर्थ", "Formula / meaning"],
      ],
      [
        [
          ["CTR", "CTR", "CTR"],
          ["(Clicks ÷ Impressions) × 100", "(क्लिक्स ÷ इंप्रेशन) × 100", "(Clicks ÷ Impressions) × 100"],
        ],
        [
          ["CPC", "CPC", "CPC"],
          ["Spend ÷ Clicks", "खर्च ÷ क्लिक", "Spend ÷ Clicks"],
        ],
        [
          ["CPM", "CPM", "CPM"],
          ["(Spend ÷ Impressions) × 1000", "(खर्च ÷ इंप्रेशन) × 1000", "(Spend ÷ Impressions) × 1000"],
        ],
        [
          ["CPA", "CPA", "CPA"],
          ["Spend ÷ Conversions", "खर्च ÷ कन्वर्ज़न", "Spend ÷ Conversions"],
        ],
        [
          ["ROAS", "ROAS", "ROAS"],
          ["Ad revenue ÷ Ad spend", "विज्ञापन आय ÷ विज्ञापन खर्च", "Ad revenue ÷ Ad spend"],
        ],
        [
          ["Frequency", "फ़्रीक्वेंसी", "Frequency"],
          ["Impressions ÷ Reach", "इंप्रेशन ÷ पहुँच", "Impressions ÷ Reach"],
        ],
      ],
    ),
    NOTE(
      "Impressions are not reach. 10,000 impressions with reach 2,000 means average frequency 5—the same people saw the ad five times.",
      "इंप्रेशन पहुँच नहीं हैं। 10,000 इंप्रेशन और 2,000 पहुँच का मतलब औसत फ़्रीक्वेंसी 5—उन्हीं लोगों ने विज्ञापन पाँच बार देखा।",
      "Impressions reach nahi hain. 10,000 impressions aur 2,000 reach ka matlab average frequency 5—unhi logon ne ad paanch baar dekha.",
    ),
    EXAM(
      "Define impressions, reach, CTR, CPC, CPA, ROAS, bounce rate, conversion and attribution. Be ready to compute CTR or CPC from a small table of numbers.",
      "इंप्रेशन, पहुँच, CTR, CPC, CPA, ROAS, बाउंस दर, कन्वर्ज़न और एट्रिब्यूशन परिभाषित करें। छोटी संख्या तालिका से CTR या CPC निकालने को तैयार रहें।",
      "Impressions, reach, CTR, CPC, CPA, ROAS, bounce rate, conversion aur attribution define karo. Chhoti number table se CTR ya CPC nikalne ko ready raho.",
    ),
  ]),

  "dm-seo": topic("dm-seo", [
    P(
      "Search Engine Optimisation (SEO) is the set of techniques that help a page get crawled, indexed and ranked for relevant queries so it earns unpaid (organic) traffic. Search engines use crawlers (spiders) to fetch pages, store them in an index, then rank them using hundreds of signals. For exams, organise SEO as three pillars: on-page, off-page and technical—plus a light mention of Core Web Vitals.",
      "सर्च इंजन ऑप्टिमाइज़ेशन (SEO) उन तकनीकों का समूह है जो किसी पेज को प्रासंगिक क्वेरी पर क्रॉल, इंडेक्स और रैंक करवाकर बिना भुगतान (ऑर्गेनिक) ट्रैफ़िक दिलाती हैं। सर्च इंजन क्रॉलर (स्पाइडर) से पेज लाते हैं, इंडेक्स में रखते हैं, फिर सैकड़ों संकेतों से रैंक करते हैं। परीक्षा के लिए SEO को तीन स्तंभों में बाँधें: ऑन-पेज, ऑफ-पेज और टेक्निकल—साथ में Core Web Vitals का हल्का उल्लेख।",
      "SEO un techniques ka set hai jo page ko relevant queries par crawl, index aur rank karke unpaid (organic) traffic dilati hain. Search engines crawlers (spiders) se pages laate hain, index mein rakhte hain, phir hundreds signals se rank karte hain. Exam ke liye SEO teen pillars: on-page, off-page aur technical—plus Core Web Vitals ka light mention.",
    ),
    D(
      "seo",
      "SEO pillars: crawlers fetch pages, the index stores them, ranking uses on-page, off-page and technical signals including Core Web Vitals.",
      "SEO स्तंभ: क्रॉलर पेज लाते हैं, इंडेक्स उन्हें रखता है, रैंकिंग ऑन-पेज, ऑफ-पेज और टेक्निकल संकेतों—Core Web Vitals सहित—का उपयोग करती है।",
      "SEO pillars: crawlers pages laate hain, index store karta hai, ranking on-page, off-page aur technical signals—Core Web Vitals including—use karti hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Crawl → index → rank: if robots.txt or a noindex tag blocks a page, it cannot rank no matter how good the copy is.",
        "क्रॉल → इंडेक्स → रैंक: यदि robots.txt या noindex टैग पेज रोक दे, तो कॉपी कितनी भी अच्छी हो रैंक नहीं होगा।",
        "Crawl → index → rank: agar robots.txt ya noindex tag page rok de, to copy kitni bhi acchi ho rank nahi hoga.",
      ],
      [
        "Keywords: map search intent (informational, navigational, commercial, transactional) to pages; avoid stuffing.",
        "कीवर्ड: सर्च इंटेंट (सूचनात्मक, नेविगेशनल, कमर्शियल, ट्रांजैक्शनल) को पेज से मैप करें; स्टफ़िंग से बचें।",
        "Keywords: search intent (informational, navigational, commercial, transactional) ko pages se map karo; stuffing se bacho.",
      ],
      [
        "On-page: title tag, meta description, headings (H1–H3), unique content, internal links, image alt text, URL slugs.",
        "ऑन-पेज: टाइटल टैग, मेटा डिस्क्रिप्शन, हेडिंग (H1–H3), अनूठा कंटेंट, आंतरिक लिंक, इमेज alt टेक्स्ट, URL स्लग।",
        "On-page: title tag, meta description, headings (H1–H3), unique content, internal links, image alt text, URL slugs.",
      ],
      [
        "Off-page: backlinks from other sites, brand mentions, digital PR. Quality and relevance of links beat raw quantity.",
        "ऑफ-पेज: अन्य साइटों से बैकलिंक, ब्रांड उल्लेख, डिजिटल PR। लिंक की गुणवत्ता और प्रासंगिकता कच्ची मात्रा से ऊपर।",
        "Off-page: doosri sites se backlinks, brand mentions, digital PR. Link quality aur relevance raw quantity se upar.",
      ],
      [
        "Technical: HTTPS, mobile-friendly layout, XML sitemap, canonical tags, structured data, crawl budget, clean architecture.",
        "टेक्निकल: HTTPS, मोबाइल-अनुकूल लेआउट, XML साइटमैप, कैनोनिकल टैग, स्ट्रक्चर्ड डेटा, क्रॉल बजट, साफ़ आर्किटेक्चर।",
        "Technical: HTTPS, mobile-friendly layout, XML sitemap, canonical tags, structured data, crawl budget, clean architecture.",
      ],
      [
        "Core Web Vitals (light): LCP (loading), INP (interactivity; replaced FID), CLS (visual stability). Slow or jumpy pages lose rank and users.",
        "Core Web Vitals (हल्का): LCP (लोडिंग), INP (इंटरैक्टिविटी; FID की जगह), CLS (विज़ुअल स्थिरता)। धीमे या उछलते पेज रैंक व यूज़र दोनों खोते हैं।",
        "Core Web Vitals (light): LCP (loading), INP (interactivity; FID ki jagah), CLS (visual stability). Slow ya jumpy pages rank aur users dono khote hain.",
      ],
      [
        "White-hat versus black-hat: useful content and honest links versus cloaking, link farms and keyword stuffing—the latter can be penalised.",
        "व्हाइट-हैट बनाम ब्लैक-हैट: उपयोगी कंटेंट व ईमानदार लिंक बनाम क्लोकिंग, लिंक फ़ार्म और कीवर्ड स्टफ़िंग—बाद वाले दंडित हो सकते हैं।",
        "White-hat vs black-hat: useful content aur honest links vs cloaking, link farms aur keyword stuffing—baad wale penalise ho sakte hain.",
      ],
    ]),
    TBL(
      [
        ["Pillar", "स्तंभ", "Pillar"],
        ["What you actually do", "वास्तव में क्या करते हैं", "Actually kya karte ho"],
      ],
      [
        [
          ["On-page", "ऑन-पेज", "On-page"],
          ["Titles, content, headings, internals, alt text", "टाइटल, कंटेंट, हेडिंग, इंटरनल, alt टेक्स्ट", "Titles, content, headings, internals, alt text"],
        ],
        [
          ["Off-page", "ऑफ-पेज", "Off-page"],
          ["Earn backlinks and mentions", "बैकलिंक और उल्लेख कमाएँ", "Backlinks aur mentions kamao"],
        ],
        [
          ["Technical", "टेक्निकल", "Technical"],
          ["Crawlability, speed, mobile, HTTPS, sitemaps", "क्रॉलेबिलिटी, स्पीड, मोबाइल, HTTPS, साइटमैप", "Crawlability, speed, mobile, HTTPS, sitemaps"],
        ],
      ],
    ),
    C(
      "html",
      `<title>Running Shoes for Wide Feet | Brand</title>
<meta name="description" content="Lightweight running shoes with wide sizes. Free delivery and 7-day returns.">
<h1>Running shoes for wide feet</h1>`,
      [
        "On-page SEO: unique title, meta description and a single H1 that match search intent.",
        "ऑन-पेज SEO: अनूठा टाइटल, मेटा डिस्क्रिप्शन और एक H1 जो सर्च इंटेंट से मेल खाए।",
        "On-page SEO: unique title, meta description aur ek H1 jo search intent se match kare.",
      ],
    ),
    EXAM(
      "Explain on-page, off-page and technical SEO. Mention crawlers, keywords, backlinks and Core Web Vitals. Contrast white-hat with black-hat in one line.",
      "ऑन-पेज, ऑफ-पेज और टेक्निकल SEO समझाएँ। क्रॉलर, कीवर्ड, बैकलिंक और Core Web Vitals का उल्लेख करें। व्हाइट-हैट बनाम ब्लैक-हैट एक पंक्ति में लिखें।",
      "On-page, off-page aur technical SEO samjhao. Crawlers, keywords, backlinks aur Core Web Vitals mention karo. White-hat vs black-hat ek line mein likho.",
    ),
  ]),

  "dm-webmaster": topic("dm-webmaster", [
    P(
      "Google Search Console (historically Google Webmaster Tools) is the free report card of how Google Search sees your site. Google Analytics (GA) is the report card of what people do after they arrive. Together they close the loop: GSC explains queries, clicks and index problems; GA explains sessions, sources, behaviour and conversions. BCA answers should not treat them as the same product.",
      "Google Search Console (ऐतिहासिक रूप से Google Webmaster Tools) वह मुफ़्त रिपोर्ट कार्ड है कि Google Search आपकी साइट को कैसे देखता है। Google Analytics (GA) वह रिपोर्ट कार्ड है कि लोग आने के बाद क्या करते हैं। दोनों लूप बंद करते हैं: GSC क्वेरी, क्लिक और इंडेक्स समस्याएँ बताता है; GA सत्र, स्रोत, व्यवहार और कन्वर्ज़न बताता है। BCA उत्तर में इन्हें एक ही उत्पाद न मानें।",
      "Google Search Console (pehle Google Webmaster Tools) wo free report card hai ki Google Search aapki site ko kaise dekhta hai. Google Analytics (GA) wo report card hai ki log aane ke baad kya karte hain. Dono loop band karte hain: GSC queries, clicks aur index problems batata hai; GA sessions, sources, behaviour aur conversions batata hai. BCA answer mein inhe same product mat samjho.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Search Console jobs: inspect URLs, submit sitemaps, watch index coverage, fix crawl errors, view search queries, clicks, CTR and average position.",
        "Search Console कार्य: URL जाँच, साइटमैप जमा, इंडेक्स कवरेज, क्रॉल त्रुटियाँ, सर्च क्वेरी, क्लिक, CTR और औसत स्थिति।",
        "Search Console jobs: URL inspect, sitemaps submit, index coverage, crawl errors, search queries, clicks, CTR aur average position.",
      ],
      [
        "It also reports Core Web Vitals, mobile usability, manual actions (penalties) and inbound links Google noticed.",
        "यह Core Web Vitals, मोबाइल उपयोगिता, मैनुअल एक्शन (दंड) और Google द्वारा देखे इनबाउंड लिंक भी बताता है।",
        "Ye Core Web Vitals, mobile usability, manual actions (penalties) aur Google ke dekhe inbound links bhi batata hai.",
      ],
      [
        "Analytics jobs: traffic volume, acquisition channels (organic, paid, social, direct), audience, behaviour flow and conversion goals/ecommerce.",
        "Analytics कार्य: ट्रैफ़िक मात्रा, अधिग्रहण चैनल (ऑर्गेनिक, पेड, सोशल, डायरेक्ट), ऑडियंस, व्यवहार प्रवाह और कन्वर्ज़न लक्ष्य/ईकॉमर्स।",
        "Analytics jobs: traffic volume, acquisition channels (organic, paid, social, direct), audience, behaviour flow aur conversion goals/ecommerce.",
      ],
      [
        "GSC is search-centric and sampled from Google’s side; GA is on-site and depends on a correctly installed measurement tag.",
        "GSC सर्च-केंद्रित है और Google की ओर से आता है; GA ऑन-साइट है और सही इंस्टॉल टैग पर निर्भर है।",
        "GSC search-centric hai aur Google ki side se aata hai; GA on-site hai aur sahi installed tag par depend karta hai.",
      ],
      [
        "UTM parameters and channel grouping in GA tell you which campaign actually sent the session.",
        "GA में UTM पैरामीटर और चैनल ग्रुपिंग बताते हैं कि सत्र वास्तव में किस कैंपेन ने भेजा।",
        "GA mein UTM parameters aur channel grouping batate hain ki session sach mein kis campaign ne bheja.",
      ],
      [
        "Practical loop: GSC shows a query with impressions but low CTR → rewrite title/meta; GA shows high bounce on that landing page → fix content or speed.",
        "व्यावहारिक लूप: GSC में इंप्रेशन वाले क्वेरी पर कम CTR → टाइटल/मेटा लिखें; GA में उस लैंडिंग पेज पर ऊँचा बाउंस → कंटेंट या स्पीड सुधारें।",
        "Practical loop: GSC mein impressions wali query par low CTR → title/meta rewrite; GA mein us landing page par high bounce → content ya speed fix karo.",
      ],
      [
        "Property setup: verify the site in GSC (DNS or file); install the GA tag on every page (or via a tag manager).",
        "प्रॉपर्टी सेटअप: GSC में साइट सत्यापित करें (DNS या फ़ाइल); हर पेज पर GA टैग लगाएँ (या टैग मैनेजर से)।",
        "Property setup: GSC mein site verify karo (DNS ya file); har page par GA tag lagao (ya tag manager se).",
      ],
    ]),
    TBL(
      [
        ["Question", "प्रश्न", "Question"],
        ["Use GSC", "GSC इस्तेमाल करें", "GSC use karo"],
        ["Use GA", "GA इस्तेमाल करें", "GA use karo"],
      ],
      [
        [
          ["Which queries show us?", "कौन-सी क्वेरी हमें दिखाती हैं?", "Kaun-si queries humein dikhati hain?"],
          ["Yes — Queries report", "हाँ — Queries रिपोर्ट", "Haan — Queries report"],
          ["Not directly", "सीधे नहीं", "Seedha nahi"],
        ],
        [
          ["Did Google index this URL?", "क्या Google ने यह URL इंडेक्स किया?", "Kya Google ne ye URL index kiya?"],
          ["URL Inspection", "URL Inspection", "URL Inspection"],
          ["No", "नहीं", "Nahi"],
        ],
        [
          ["Which channel converted?", "किस चैनल ने कन्वर्ट किया?", "Kis channel ne convert kiya?"],
          ["Limited", "सीमित", "Limited"],
          ["Acquisition + conversions", "Acquisition + conversions", "Acquisition + conversions"],
        ],
        [
          ["Is the page slow for users?", "क्या पेज यूज़र के लिए धीमा है?", "Kya page users ke liye slow hai?"],
          ["Core Web Vitals (lab/field mix)", "Core Web Vitals", "Core Web Vitals"],
          ["Engagement / bounce as a symptom", "एंगेजमेंट / बाउंस लक्षण", "Engagement / bounce as symptom"],
        ],
      ],
    ),
    C(
      "txt",
      `User-agent: *
Allow: /
Disallow: /admin
Disallow: /cart
Sitemap: https://www.example.com/sitemap.xml`,
      [
        "A simple robots.txt: allow crawling, block private paths, point crawlers to the XML sitemap. Submit the sitemap in Search Console.",
        "सरल robots.txt: क्रॉलिंग अनुमति दें, निजी पथ रोकें, क्रॉलर को XML साइटमैप दिखाएँ। साइटमैप Search Console में जमा करें।",
        "Simple robots.txt: crawling allow karo, private paths block karo, crawlers ko XML sitemap dikhao. Sitemap Search Console mein submit karo.",
      ],
    ),
    EXAM(
      "Differentiate Google Search Console (Webmaster) from Google Analytics. List three reports from each and one action you would take from a low-CTR query.",
      "Google Search Console (Webmaster) को Google Analytics से अलग करें। प्रत्येक की तीन रिपोर्ट और कम-CTR क्वेरी पर एक कार्रवाई लिखें।",
      "Google Search Console (Webmaster) ko Google Analytics se alag karo. Har ek ki teen reports aur low-CTR query par ek action likho.",
    ),
  ]),

  "dm-ppc": topic("dm-ppc", [
    P(
      "Pay-Per-Click (PPC) is paid marketing in which the advertiser is charged mainly when a user clicks the ad (sometimes impressions are billed instead, but the classic exam model is click-based). Google Ads search campaigns are the textbook example: advertisers bid in an auction, but the winner is not simply the highest bidder. Quality Score and Ad Rank decide who appears and in which order. Social platforms run similar auctions for feed and story ads.",
      "Pay-Per-Click (PPC) वह पेड मार्केटिंग है जिसमें विज्ञापनदाता से मुख्यतः तब शुल्क लिया जाता है जब उपयोगकर्ता विज्ञापन पर क्लिक करे (कभी इंप्रेशन बिल होते हैं, पर क्लासिक परीक्षा मॉडल क्लिक-आधारित है)। Google Ads सर्च कैंपेन पाठ्यपुस्तक उदाहरण हैं: विज्ञापनदाता नीलामी में बोली लगाते हैं, पर विजेता केवल सबसे ऊँची बोली नहीं होता। Quality Score और Ad Rank तय करते हैं कौन दिखे और किस क्रम में। सोशल प्लेटफ़ॉर्म फ़ीड व स्टोरी विज्ञापनों के लिए इसी तरह की नीलामी चलाते हैं।",
      "PPC wo paid marketing hai jisme advertiser se mainly tab charge hota hai jab user ad par click kare (kabhi impressions bill hote hain, par classic exam model click-based hai). Google Ads search campaigns textbook example hain: advertisers auction mein bid karte hain, par winner sirf highest bidder nahi hota. Quality Score aur Ad Rank decide karte hain kaun dikhe aur kis order mein. Social platforms feed/story ads ke liye similar auctions chalate hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Auction: for each query or impression, eligible ads compete. You set a bid (what you are willing to pay) and targeting.",
        "नीलामी: प्रत्येक क्वेरी या इंप्रेशन पर योग्य विज्ञापन प्रतिस्पर्धा करते हैं। आप बोली (कितना देने को तैयार) और टारगेटिंग तय करते हैं।",
        "Auction: har query ya impression par eligible ads compete karte hain. Aap bid (kitna dene ko taiyar) aur targeting set karte ho.",
      ],
      [
        "Ad Rank (search): roughly bid × Quality Score (plus format/extensions). Higher Ad Rank wins better position, often at a lower actual CPC than a low-quality rival.",
        "Ad Rank (सर्च): मोटे तौर पर बोली × Quality Score (प्लस फ़ॉर्मेट/एक्सटेंशन)। ऊँचा Ad Rank बेहतर स्थान जीतता है, अक्सर कम-गुणवत्ता प्रतिद्वंद्वी से कम वास्तविक CPC पर।",
        "Ad Rank (search): roughly bid × Quality Score (plus formats/extensions). Higher Ad Rank better position jeetta hai, aksar low-quality rival se kam actual CPC par.",
      ],
      [
        "Quality Score factors: expected CTR, ad relevance to the query, and landing page experience (speed, match, transparency).",
        "Quality Score कारक: अपेक्षित CTR, क्वेरी से विज्ञापन प्रासंगिकता, और लैंडिंग पेज अनुभव (गति, मैच, पारदर्शिता)।",
        "Quality Score factors: expected CTR, query se ad relevance, aur landing page experience (speed, match, transparency).",
      ],
      [
        "Google Ads structure: account → campaign (budget, goal, network) → ad group (theme) → keywords + ads.",
        "Google Ads संरचना: अकाउंट → कैंपेन (बजट, लक्ष्य, नेटवर्क) → ऐड ग्रुप (थीम) → कीवर्ड + विज्ञापन।",
        "Google Ads structure: account → campaign (budget, goal, network) → ad group (theme) → keywords + ads.",
      ],
      [
        "Why PPC complements SEO: SEO takes months; PPC can appear on page one this afternoon for the same keyword, with full control of copy.",
        "PPC SEO का पूरक क्यों: SEO महीनों लेता है; PPC इसी दोपहर उसी कीवर्ड पर पेज वन पर आ सकता है, कॉपी पर पूरा नियंत्रण के साथ।",
        "PPC SEO ka complement kyun: SEO mahine leta hai; PPC aaj dopahar usi keyword par page one par aa sakta hai, copy par full control ke saath.",
      ],
      [
        "Social PPC: Meta and others auction attention in feeds. Targeting is interest/behaviour based more than keyword based.",
        "सोशल PPC: Meta आदि फ़ीड में ध्यान की नीलामी करते हैं। टारगेटिंग कीवर्ड से अधिक रुचि/व्यवहार आधारित होती है।",
        "Social PPC: Meta wagairah feed mein attention auction karte hain. Targeting keyword se zyada interest/behaviour based hoti hai.",
      ],
      [
        "Risks: wasted spend on broad matches, poor landing pages, click fraud, and converting clicks that never become customers—watch CPA not only CTR.",
        "जोखिम: ब्रॉड मैच पर बर्बादी, कमज़ोर लैंडिंग पेज, क्लिक धोखाधड़ी, और ऐसे क्लिक जो ग्राहक न बनें—केवल CTR नहीं, CPA देखें।",
        "Risks: broad match par wastage, weak landing pages, click fraud, aur clicks jo customer na banen—sirf CTR nahi, CPA dekho.",
      ],
    ]),
    TBL(
      [
        ["Piece", "हिस्सा", "Piece"],
        ["Role", "भूमिका", "Role"],
      ],
      [
        [
          ["Bid", "बोली", "Bid"],
          ["Your maximum willingness to pay", "आपकी अधिकतम भुगतान इच्छा", "Aapki maximum pay karne ki iccha"],
        ],
        [
          ["Quality Score", "Quality Score", "Quality Score"],
          ["Google’s 1–10 relevance diagnosis", "Google का 1–10 प्रासंगिकता निदान", "Google ka 1–10 relevance diagnosis"],
        ],
        [
          ["Ad Rank", "Ad Rank", "Ad Rank"],
          ["Who shows, in what order, at what price", "कौन दिखे, किस क्रम में, किस कीमत पर", "Kaun dikhe, kis order mein, kis price par"],
        ],
        [
          ["Landing page", "लैंडिंग पेज", "Landing page"],
          ["Must match the ad promise or QS and conversion suffer", "विज्ञापन वादे से मेल खाए वरना QS व कन्वर्ज़न दोनों गिरें", "Ad promise se match kare warna QS aur conversion dono giren"],
        ],
      ],
    ),
    EXAM(
      "Explain PPC, the Google Ads auction, Quality Score and Ad Rank. State why a higher bid does not always win the top slot.",
      "PPC, Google Ads नीलामी, Quality Score और Ad Rank समझाएँ। बताएँ कि ऊँची बोली हमेशा शीर्ष स्थान क्यों नहीं जीतती।",
      "PPC, Google Ads auction, Quality Score aur Ad Rank samjhao. Batao higher bid hamesha top slot kyun nahi jeetti.",
    ),
  ]),

  "dm-smm": topic("dm-smm", [
    P(
      "Social Media Marketing (SMM) is the use of social platforms to build awareness, community, traffic and sales. It includes organic posts, community management, influencer collaborations and paid social. Indian papers expect you to name major platforms, what each is good for, and the idea of content pillars—recurring themes that stop the calendar from becoming random selfies and festival greetings only.",
      "सोशल मीडिया मार्केटिंग (SMM) जागरूकता, समुदाय, ट्रैफ़िक और बिक्री बनाने के लिए सोशल प्लेटफ़ॉर्म का उपयोग है। इसमें ऑर्गेनिक पोस्ट, कम्युनिटी प्रबंधन, इन्फ़्लुएंसर सहयोग और पेड सोशल शामिल हैं। भारतीय पेपर चाहते हैं कि आप प्रमुख प्लेटफ़ॉर्म, प्रत्येक किस काम के लिए अच्छा है, और कंटेंट पिलर का विचार लिखें—आवर्ती थीम जो कैलेंडर को केवल रैंडम सेल्फ़ी और त्योहार बधाई बनने से रोकती हैं।",
      "SMM social platforms se awareness, community, traffic aur sales banane ka use hai. Isme organic posts, community management, influencer collaborations aur paid social shamil hain. Indian papers expect karte hain major platforms, har ek kis kaam ke liye accha hai, aur content pillars—recurring themes jo calendar ko sirf random selfies aur festival greetings banne se rokengi.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Platform fit: YouTube for long explainers and TV-like ads; Instagram for visual lifestyle and Reels; Facebook for communities and broader age groups; LinkedIn for B2B; X for news-style commentary; WhatsApp for service and catalogues.",
        "प्लेटफ़ॉर्म फिट: YouTube लंबे समझावे व TV-जैसे विज्ञापन; Instagram विज़ुअल लाइफ़स्टाइल व Reels; Facebook समुदाय व व्यापक आयु; LinkedIn B2B; X समाचार-शैली टिप्पणी; WhatsApp सेवा व कैटलॉग।",
        "Platform fit: YouTube lambe explainers aur TV-like ads; Instagram visual lifestyle aur Reels; Facebook communities aur broader age; LinkedIn B2B; X news-style commentary; WhatsApp service aur catalogues.",
      ],
      [
        "Content pillars (typical four): educate, entertain, inspire/brand, convert (offer). Rotate so the feed is not only sales.",
        "कंटेंट पिलर (सामान्य चार): शिक्षित करें, मनोरंजन, प्रेरित/ब्रांड, कन्वर्ट (ऑफ़र)। घुमाएँ ताकि फ़ीड केवल बिक्री न हो।",
        "Content pillars (typical four): educate, entertain, inspire/brand, convert (offer). Rotate karo taaki feed sirf sales na ho.",
      ],
      [
        "Organic versus paid: organic reach is limited and algorithm-dependent; paid social boosts the posts that already prove they resonate.",
        "ऑर्गेनिक बनाम पेड: ऑर्गेनिक पहुँच सीमित व अल्गोरिदम-निर्भर; पेड सोशल उन पोस्ट को बढ़ाता है जो पहले से गूँजती हैं।",
        "Organic vs paid: organic reach limited aur algorithm-dependent; paid social un posts ko boost karta hai jo pehle se resonate karti hain.",
      ],
      [
        "Community management: reply to comments and DMs; a ignored complaint on a public post is negative earned media.",
        "कम्युनिटी प्रबंधन: कमेंट व DM का जवाब दें; सार्वजनिक पोस्ट पर अनसुनी शिकायत नकारात्मक earned media है।",
        "Community management: comments aur DMs ka jawab do; public post par ignored complaint negative earned media hai.",
      ],
      [
        "Influencers: paid or gifted creators; disclose sponsorships; micro-influencers often convert better in niche Indian languages.",
        "इन्फ़्लुएंसर: पेड या गिफ़्टेड क्रिएटर; स्पॉन्सरशिप बताएँ; भारतीय निशान भाषाओं में माइक्रो-इन्फ़्लुएंसर अक्सर बेहतर कन्वर्ट करते हैं।",
        "Influencers: paid ya gifted creators; sponsorships disclose karo; Indian niche languages mein micro-influencers aksar better convert karte hain.",
      ],
      [
        "Calendar and consistency: pick a frequency you can keep; dead accounts hurt trust more than no account.",
        "कैलेंडर और निरंतरता: वह आवृत्ति चुनें जो निभा सकें; मरा अकाउंट न होने से अधिक विश्वास तोड़ता है।",
        "Calendar aur consistency: wo frequency chuno jo nibha sako; mara account na hone se zyada trust todta hai.",
      ],
      [
        "Measurement: reach, engagement rate, saves/shares, click-outs, and assisted conversions—not likes alone.",
        "मापन: पहुँच, एंगेजमेंट दर, सेव/शेयर, क्लिक-आउट, और सहायक कन्वर्ज़न—केवल लाइक नहीं।",
        "Measurement: reach, engagement rate, saves/shares, click-outs, aur assisted conversions—sirf likes nahi.",
      ],
    ]),
    TBL(
      [
        ["Platform", "प्लेटफ़ॉर्म", "Platform"],
        ["Best used for", "सबसे उपयुक्त", "Best used for"],
      ],
      [
        [
          ["YouTube", "YouTube", "YouTube"],
          ["Education, demos, brand video, long consideration", "शिक्षा, डेमो, ब्रांड वीडियो, लंबा विचार", "Education, demos, brand video, lamba consideration"],
        ],
        [
          ["Instagram", "Instagram", "Instagram"],
          ["Visual products, Reels, influencers, youth", "विज़ुअल उत्पाद, Reels, इन्फ़्लुएंसर, युवा", "Visual products, Reels, influencers, youth"],
        ],
        [
          ["Facebook", "Facebook", "Facebook"],
          ["Groups, events, older demographics, local business", "ग्रुप, इवेंट, अधिक आयु, स्थानीय व्यवसाय", "Groups, events, older demographics, local business"],
        ],
        [
          ["LinkedIn", "LinkedIn", "LinkedIn"],
          ["B2B thought leadership and lead gen", "B2B विचार नेतृत्व और लीड जेन", "B2B thought leadership aur lead gen"],
        ],
        [
          ["WhatsApp", "WhatsApp", "WhatsApp"],
          ["Service, catalogues, order updates, communities", "सेवा, कैटलॉग, ऑर्डर अपडेट, समुदाय", "Service, catalogues, order updates, communities"],
        ],
      ],
    ),
    EXAM(
      "Define SMM. Compare three platforms and explain content pillars with an example mix (educate / entertain / convert).",
      "SMM परिभाषित करें। तीन प्लेटफ़ॉर्म की तुलना करें और कंटेंट पिलर को उदाहरण मिश्रण (शिक्षित / मनोरंजन / कन्वर्ट) से समझाएँ।",
      "SMM define karo. Teen platforms compare karo aur content pillars ko example mix (educate / entertain / convert) se samjhao.",
    ),
  ]),

  "dm-keyword": topic("dm-keyword", [
    P(
      "Keyword advertising is paid search in which ads are triggered by the words people type. Match types tell the engine how strictly the search query must match your keyword. Combined with search intent, match types are how you control relevance and stop burning budget on accidental traffic. This topic sits next to PPC but the exam often wants the match-type table by name.",
      "कीवर्ड विज्ञापन पेड सर्च है जिसमें लोग जो शब्द टाइप करते हैं उनसे विज्ञापन ट्रिगर होते हैं। मैच टाइप इंजन को बताते हैं कि सर्च क्वेरी आपके कीवर्ड से कितनी सख्ती से मेल खाए। सर्च इंटेंट के साथ मैच टाइप ही प्रासंगिकता नियंत्रित करते हैं और आकस्मिक ट्रैफ़िक पर बजट जलना रोकते हैं। यह विषय PPC के पास बैठता है पर परीक्षा अक्सर मैच-टाइप तालिका नाम से माँगती है।",
      "Keyword advertising paid search hai jisme log jo words type karte hain unse ads trigger hote hain. Match types engine ko batate hain ki query aapke keyword se kitni strictly match kare. Search intent ke saath match types relevance control karte hain aur accidental traffic par budget jalna rok te hain. Ye topic PPC ke paas baithta hai par exam aksar match-type table naam se maangta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Broad match: widest net; ads may show for related searches and synonyms. High reach, easy waste if negatives are weak.",
        "ब्रॉड मैच: सबसे चौड़ी जाल; संबंधित खोजों व पर्याय पर विज्ञापन दिख सकते हैं। ऊँची पहुँच, कमज़ोर नेगेटिव पर बर्बादी आसान।",
        "Broad match: sabse chaudi jaal; related searches aur synonyms par ads dikh sakte hain. High reach, weak negatives par wastage aasaan.",
      ],
      [
        "Phrase match: query should include the meaning of the phrase in order; extra words allowed around it (engine rules evolve, but this is the syllabus idea).",
        "फ़्रेज़ मैच: क्वेरी में वाक्यांश का अर्थ क्रम में होना चाहिए; आसपास अतिरिक्त शब्द चल सकते हैं (इंजन नियम बदलते हैं, यह सिलेबस विचार है)।",
        "Phrase match: query mein phrase ka meaning order mein hona chahiye; aas-paas extra words chal sakte hain (engine rules badalte hain, ye syllabus idea hai).",
      ],
      [
        "Exact match: tightest control; close variants (plurals, misspellings) may still match, but intent should stay the same.",
        "एग्ज़ैक्ट मैच: सबसे कसा नियंत्रण; क्लोज़ वेरिएंट (बहुवचन, वर्तनी) अभी मैच हो सकते हैं, पर इंटेंट वही रहना चाहिए।",
        "Exact match: sabse tight control; close variants (plurals, spellings) ab bhi match ho sakte hain, par intent wahi rehna chahiye.",
      ],
      [
        "Negative keywords: tell the engine when not to show (e.g. ‘free’, ‘jobs’, competitor names you will not serve).",
        "नेगेटिव कीवर्ड: इंजन को बताएँ कब न दिखाएँ (जैसे ‘free’, ‘jobs’, प्रतियोगी नाम जिन्हें आप नहीं चलाना चाहते)।",
        "Negative keywords: engine ko batao kab na dikhaye (jaise ‘free’, ‘jobs’, competitor names jo aap nahi chalana chahte).",
      ],
      [
        "Intent types: informational (how to), navigational (brand name), commercial (best X), transactional (buy X). Bid more on transactional if the goal is sales.",
        "इंटेंट प्रकार: सूचनात्मक (कैसे करें), नेविगेशनल (ब्रांड नाम), कमर्शियल (बेस्ट X), ट्रांजैक्शनल (X खरीदें)। बिक्री लक्ष्य हो तो ट्रांजैक्शनल पर अधिक बोली।",
        "Intent types: informational (how to), navigational (brand name), commercial (best X), transactional (buy X). Sales goal ho to transactional par zyada bid.",
      ],
      [
        "Keyword research: seed terms, search volume, competition, cost, and your page’s ability to satisfy the query.",
        "कीवर्ड रिसर्च: सीड शब्द, सर्च वॉल्यूम, प्रतिस्पर्धा, लागत, और आपके पेज की क्वेरी संतुष्ट करने की क्षमता।",
        "Keyword research: seed terms, search volume, competition, cost, aur aapke page ki query satisfy karne ki capacity.",
      ],
      [
        "Ad group hygiene: one theme per ad group so the ad copy can repeat the keyword and lift Quality Score.",
        "ऐड ग्रुप स्वच्छता: प्रति ग्रुप एक थीम ताकि विज्ञापन कॉपी कीवर्ड दोहराए और Quality Score उठे।",
        "Ad group hygiene: har group mein ek theme taaki ad copy keyword dohraye aur Quality Score uthe.",
      ],
    ]),
    TBL(
      [
        ["Match type", "मैच टाइप", "Match type"],
        ["Syntax idea", "सिंटैक्स विचार", "Syntax idea"],
        ["Control", "नियंत्रण", "Control"],
      ],
      [
        [
          ["Broad", "ब्रॉड", "Broad"],
          ["running shoes", "running shoes", "running shoes"],
          ["Lowest (widest reach)", "सबसे कम (सबसे चौड़ी पहुँच)", "Sabse kam (sabse chaudi reach)"],
        ],
        [
          ["Phrase", "फ़्रेज़", "Phrase"],
          ['"running shoes"', '"running shoes"', '"running shoes"'],
          ["Medium", "मध्यम", "Medium"],
        ],
        [
          ["Exact", "एग्ज़ैक्ट", "Exact"],
          ["[running shoes]", "[running shoes]", "[running shoes]"],
          ["Highest", "सबसे अधिक", "Sabse zyada"],
        ],
        [
          ["Negative", "नेगेटिव", "Negative"],
          ["-free  -jobs", "-free  -jobs", "-free  -jobs"],
          ["Blocks waste", "बर्बादी रोकता है", "Wastage rokta hai"],
        ],
      ],
    ),
    NOTE(
      "Start newer accounts tighter (phrase/exact) then carefully broaden. Dumping everything on broad match is a classic budget leak.",
      "नए अकाउंट सख्त (फ़्रेज़/एग्ज़ैक्ट) से शुरू करें फिर सावधानी से चौड़े करें। सब कुछ ब्रॉड मैच पर डालना क्लासिक बजट रिसाव है।",
      "Naye accounts tight (phrase/exact) se start karo phir carefully broaden karo. Sab kuch broad match par daalna classic budget leak hai.",
    ),
    EXAM(
      "Explain keyword advertising match types (broad, phrase, exact, negative) with syntax and one example query that would / would not match.",
      "कीवर्ड विज्ञापन मैच टाइप (ब्रॉड, फ़्रेज़, एग्ज़ैक्ट, नेगेटिव) सिंटैक्स और एक उदाहरण क्वेरी के साथ समझाएँ जो मैच करे / न करे।",
      "Keyword advertising match types (broad, phrase, exact, negative) syntax aur ek example query ke saath samjhao jo match kare / na kare.",
    ),
  ]),

  "dm-affiliate": topic("dm-affiliate", [
    P(
      "Affiliate marketing is performance partnership: an advertiser (merchant/brand) pays a publisher (affiliate) a commission when a referred visitor completes a desired action. A network or tracking platform often sits in the middle to issue links, cookies and reports. It is earned-looking distribution that is actually paid on results (typically CPA or CPL), which is why startups and e-commerce catalogues love it.",
      "अफ़िलिएट मार्केटिंग परफ़ॉर्मेंस साझेदारी है: विज्ञापनदाता (मर्चेंट/ब्रांड) पब्लिशर (अफ़िलिएट) को कमीशन देता है जब रेफ़र किया विज़िटर वांछित क्रिया पूरी करे। बीच में अक्सर नेटवर्क या ट्रैकिंग प्लेटफ़ॉर्म लिंक, कुकी और रिपोर्ट देता है। यह earned जैसी दिखने वाली डिस्ट्रीब्यूशन है जो वास्तव में परिणाम पर भुगतान होती है (आमतौर पर CPA या CPL), इसलिए स्टार्टअप और ई-कॉमर्स कैटलॉग इसे पसंद करते हैं।",
      "Affiliate marketing performance partnership hai: advertiser (merchant/brand) publisher (affiliate) ko commission deta hai jab referred visitor desired action complete kare. Beech mein aksar network ya tracking platform links, cookies aur reports deta hai. Ye earned-looking distribution hai jo actually results par paid hoti hai (typically CPA ya CPL), isliye startups aur e-commerce catalogues ise pasand karte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Roles: advertiser/merchant (pays), publisher/affiliate (promotes), network (tracking, payments, offers), customer (buys or leads).",
        "भूमिकाएँ: विज्ञापनदाता/मर्चेंट (भुगतान), पब्लिशर/अफ़िलिएट (प्रचार), नेटवर्क (ट्रैकिंग, भुगतान, ऑफ़र), ग्राहक (खरीद या लीड)।",
        "Roles: advertiser/merchant (pays), publisher/affiliate (promote karta hai), network (tracking, payments, offers), customer (buy ya lead).",
      ],
      [
        "CPA (cost per acquisition): pay when a sale or qualified action happens—lowest risk for the advertiser.",
        "CPA: बिक्री या योग्य क्रिया पर भुगतान—विज्ञापनदाता के लिए सबसे कम जोखिम।",
        "CPA: sale ya qualified action par pay—advertiser ke liye sabse kam risk.",
      ],
      [
        "CPL (cost per lead): pay for a form fill, callback request or app install that is not yet a sale.",
        "CPL: फ़ॉर्म भरना, कॉलबैक या ऐप इंस्टॉल पर भुगतान जो अभी बिक्री नहीं है।",
        "CPL: form fill, callback ya app install par pay jo abhi sale nahi hai.",
      ],
      [
        "Other models: CPS (cost per sale, a type of CPA), CPC (pay per click to the affiliate—rarer, more fraud-prone).",
        "अन्य मॉडल: CPS (प्रति बिक्री, CPA का प्रकार), CPC (अफ़िलिएट को प्रति क्लिक—कम प्रचलित, अधिक धोखाधड़ी जोखिम)।",
        "Doosre models: CPS (per sale, CPA ka type), CPC (affiliate ko per click—kam common, zyada fraud risk).",
      ],
      [
        "Tracking: unique links, cookies or click IDs attribute the conversion to a publisher for a cookie window (e.g. 7–30 days).",
        "ट्रैकिंग: अनूठे लिंक, कुकी या क्लिक ID कन्वर्ज़न को कुकी विंडो (जैसे 7–30 दिन) में पब्लिशर से जोड़ते हैं।",
        "Tracking: unique links, cookies ya click IDs conversion ko cookie window (jaise 7–30 din) mein publisher se jodte hain.",
      ],
      [
        "Publisher types: review blogs, coupon sites, YouTube creators, telegram/WhatsApp catalogue sellers, comparison pages.",
        "पब्लिशर प्रकार: रिव्यू ब्लॉग, कूपन साइट, YouTube क्रिएटर, टेलीग्राम/WhatsApp कैटलॉग विक्रेता, तुलना पेज।",
        "Publisher types: review blogs, coupon sites, YouTube creators, telegram/WhatsApp catalogue sellers, comparison pages.",
      ],
      [
        "Compliance: disclose affiliate relationships; ban trademark bidding wars if the contract says so; watch fake-lead fraud.",
        "अनुपालन: अफ़िलिएट संबंध बताएँ; यदि अनुबंध कहे तो ट्रेडमार्क बिडिंग युद्ध रोकें; नकली-लीड धोखाधड़ी देखें।",
        "Compliance: affiliate relationships disclose karo; agar contract kahe to trademark bidding wars roko; fake-lead fraud dekho.",
      ],
    ]),
    TBL(
      [
        ["Model", "मॉडल", "Model"],
        ["Publisher is paid when…", "पब्लिशर को तब भुगतान जब…", "Publisher ko tab pay jab…"],
        ["Advertiser risk", "विज्ञापनदाता जोखिम", "Advertiser risk"],
      ],
      [
        [
          ["CPA / CPS", "CPA / CPS", "CPA / CPS"],
          ["A sale or qualified acquisition happens", "बिक्री या योग्य अधिग्रहण हो", "Sale ya qualified acquisition ho"],
          ["Lowest", "सबसे कम", "Sabse kam"],
        ],
        [
          ["CPL", "CPL", "CPL"],
          ["A lead is captured", "लीड कैप्चर हो", "Lead capture ho"],
          ["Medium (leads may be junk)", "मध्यम (लीड कचरा हो सकती है)", "Medium (leads junk ho sakti hain)"],
        ],
        [
          ["CPC", "CPC", "CPC"],
          ["Someone clicks the affiliate link", "कोई अफ़िलिएट लिंक क्लिक करे", "Koi affiliate link click kare"],
          ["Higher (clicks ≠ customers)", "अधिक (क्लिक ≠ ग्राहक)", "Higher (clicks ≠ customers)"],
        ],
      ],
    ),
    EXAM(
      "Define affiliate marketing. Identify advertiser, publisher and network. Contrast CPA and CPL, and mention tracking/cookies plus disclosure.",
      "अफ़िलिएट मार्केटिंग परिभाषित करें। विज्ञापनदाता, पब्लिशर और नेटवर्क पहचानें। CPA व CPL की तुलना करें, ट्रैकिंग/कुकी और डिस्क्लोज़र का उल्लेख करें।",
      "Affiliate marketing define karo. Advertiser, publisher aur network identify karo. CPA vs CPL contrast karo, tracking/cookies aur disclosure mention karo.",
    ),
  ]),

  "dm-email": topic("dm-email", [
    P(
      "Email marketing is permission-based messaging to a list you own (owned media). It remains one of the highest-ROI channels because you do not rent the audience from a platform each time. The non-negotiable principle is permission: people must opt in, and you must honour unsubscribe. Deliverability (landing in the inbox, not spam) depends on authentication, list hygiene and sending content people actually want.",
      "ईमेल मार्केटिंग आपके स्वामित्व वाली सूची (owned media) पर अनुमति-आधारित संदेश है। यह उच्च-ROI चैनलों में रहता है क्योंकि हर बार प्लेटफ़ॉर्म से ऑडियंस किराए पर नहीं लेनी पड़ती। अहस्तांतरणीय सिद्धांत अनुमति है: लोगों को ऑप्ट-इन करना चाहिए, और अनसब्सक्राइब का सम्मान होना चाहिए। डिलिवरेबिलिटी (इनबॉक्स में पहुँचना, स्पैम नहीं) प्रमाणीकरण, लिस्ट स्वच्छता और ऐसे कंटेंट पर निर्भर है जो लोग सच में चाहते हैं।",
      "Email marketing aapki owned list par permission-based messaging hai. Ye high-ROI channels mein rehta hai kyunki har baar platform se audience rent nahi karni padti. Non-negotiable principle permission hai: log opt-in karein, aur unsubscribe honour ho. Deliverability (inbox mein pahunchna, spam nahi) authentication, list hygiene aur aise content par depend karti hai jo log sach mein chahte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Permission: single or double opt-in; never buy scraped lists. Buying lists wrecks deliverability and trust.",
        "अनुमति: सिंगल या डबल ऑप्ट-इन; स्क्रैप की सूची कभी न खरीदें। खरीदी लिस्ट डिलिवरेबिलिटी और विश्वास तोड़ती है।",
        "Permission: single ya double opt-in; scraped lists kabhi mat kharido. Bought lists deliverability aur trust todti hain.",
      ],
      [
        "Deliverability: authenticate with SPF, DKIM and DMARC; keep bounce rates low; avoid spammy subject lines and huge image-only mails.",
        "डिलिवरेबिलिटी: SPF, DKIM, DMARC से प्रमाणित करें; बाउंस दर कम रखें; स्पैमी विषय पंक्ति और केवल-इमेज मेल से बचें।",
        "Deliverability: SPF, DKIM, DMARC se authenticate karo; bounce rate kam rakho; spammy subjects aur sirf-image mails se bacho.",
      ],
      [
        "Sequences (automation): welcome series, nurture drips, abandoned-cart reminders, post-purchase, win-back, and transactional mail (orders, OTPs).",
        "सीक्वेंस (ऑटोमेशन): वेलकम सीरीज़, नर्चर ड्रिप, छोड़े कार्ट की याद, खरीद-बाद, विन-बैक, और ट्रांजैक्शनल मेल (ऑर्डर, OTP)।",
        "Sequences (automation): welcome series, nurture drips, abandoned-cart reminders, post-purchase, win-back, aur transactional mail (orders, OTPs).",
      ],
      [
        "Personalisation: first name is weak; behaviour (category browsed, last purchase) and language are stronger.",
        "पर्सनलाइज़ेशन: पहला नाम कमज़ोर है; व्यवहार (देखी श्रेणी, पिछली खरीद) और भाषा अधिक मजबूत।",
        "Personalisation: first name kamzor hai; behaviour (category browsed, last purchase) aur language zyada strong hain.",
      ],
      [
        "Anatomy: from-name, subject line, preheader, body, one clear CTA, footer with physical address and unsubscribe (legal/good practice).",
        "संरचना: फ्रॉम-नेम, सब्जेक्ट, प्रीहेडर, बॉडी, एक स्पष्ट CTA, फ़ुटर में पता व अनसब्सक्राइब (कानूनी/अच्छी प्रथा)।",
        "Anatomy: from-name, subject, preheader, body, ek clear CTA, footer mein address aur unsubscribe (legal/good practice).",
      ],
      [
        "Metrics: delivery rate, open rate, CTR, conversion, unsubscribe and spam-complaint rate. Opens are imperfect (privacy mail apps).",
        "मेट्रिक्स: डिलीवरी दर, ओपन दर, CTR, कन्वर्ज़न, अनसब्सक्राइब और स्पैम-शिकायत दर। ओपन अपूर्ण हैं (प्राइवेसी मेल ऐप)।",
        "Metrics: delivery rate, open rate, CTR, conversion, unsubscribe aur spam-complaint rate. Opens imperfect hain (privacy mail apps).",
      ],
      [
        "India note: pair email with WhatsApp for service; email still wins for long catalogues, B2B and formal records.",
        "भारत नोट: सेवा के लिए ईमेल के साथ WhatsApp जोड़ें; लंबे कैटलॉग, B2B और औपचारिक रिकॉर्ड में ईमेल अभी जीतता है।",
        "India note: service ke liye email ke saath WhatsApp jodo; lambe catalogues, B2B aur formal records mein email ab bhi jeetta hai.",
      ],
    ]),
    TBL(
      [
        ["Sequence", "सीक्वेंस", "Sequence"],
        ["Job", "कार्य", "Job"],
      ],
      [
        [
          ["Welcome", "वेलकम", "Welcome"],
          ["Confirm permission, set expectations, first offer", "अनुमति पुष्टि, अपेक्षाएँ, पहला ऑफ़र", "Permission confirm, expectations, first offer"],
        ],
        [
          ["Nurture", "नर्चर", "Nurture"],
          ["Educate until the buyer is ready", "खरीदार तैयार होने तक शिक्षित करें", "Educate until buyer ready ho"],
        ],
        [
          ["Abandoned cart", "छोड़ा कार्ट", "Abandoned cart"],
          ["Remind + remove friction (stock, UPI, size)", "याद दिलाएँ + रगड़ हटाएँ (स्टॉक, UPI, साइज़)", "Remind + friction hatao (stock, UPI, size)"],
        ],
        [
          ["Win-back", "विन-बैक", "Win-back"],
          ["Re-activate quiet subscribers before you drop them", "शांत सब्सक्राइबर को छोड़ने से पहले जगाएँ", "Quiet subscribers ko drop se pehle jagao"],
        ],
      ],
    ),
    EXAM(
      "Explain permission, deliverability and email sequences. List four metrics. State why bought lists are a bad idea.",
      "अनुमति, डिलिवरेबिलिटी और ईमेल सीक्वेंस समझाएँ। चार मेट्रिक्स लिखें। खरीदी लिस्ट खराब विचार क्यों है बताएँ।",
      "Permission, deliverability aur email sequences samjhao. Char metrics likho. Bought lists kharab idea kyun hain batao.",
    ),
  ]),

  "dm-mobile": topic("dm-mobile", [
    P(
      "Mobile marketing reaches people on phones and tablets through SMS, rich messaging, in-app ads, push notifications, mobile web, app campaigns and payment-linked offers. In India this is not a side channel: it is the main channel. Campaigns must be thumb-friendly, data-light, vernacular-ready and often UPI-aware. Google’s mobile-first indexing also means the mobile page is the page that gets ranked.",
      "मोबाइल मार्केटिंग फोन और टैबलेट पर SMS, रिच मैसेजिंग, इन-ऐप विज्ञापन, पुश नोटिफ़िकेशन, मोबाइल वेब, ऐप कैंपेन और भुगतान-जुड़े ऑफ़र से पहुँचती है। भारत में यह साइड चैनल नहीं, मुख्य चैनल है। कैंपेन अंगूठे-अनुकूल, डेटा-हल्के, वर्नाक्युलर-तैयार और अक्सर UPI-जागरूक होने चाहिए। Google की मोबाइल-फर्स्ट इंडेक्सिंग का मतलब है रैंक वही पेज पाता है जो मोबाइल पर है।",
      "Mobile marketing phones aur tablets par SMS, rich messaging, in-app ads, push notifications, mobile web, app campaigns aur payment-linked offers se pahunchti hai. Bharat mein ye side channel nahi, main channel hai. Campaigns thumb-friendly, data-light, vernacular-ready aur aksar UPI-aware hone chahiye. Google ki mobile-first indexing ka matlab rank wahi page pata hai jo mobile par hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "SMS / RCS: high open rates; keep it permission-based (DND rules); short CTA and link; RCS adds richer cards where supported.",
        "SMS / RCS: ऊँची ओपन दर; अनुमति-आधारित रखें (DND नियम); छोटा CTA व लिंक; RCS जहाँ समर्थित हो समृद्ध कार्ड जोड़ता है।",
        "SMS / RCS: high open rates; permission-based rakho (DND rules); chhota CTA aur link; RCS jahan supported ho richer cards add karta hai.",
      ],
      [
        "In-app and push: ads or messages inside an app the user already installed; frequency and relevance decide whether they disable notifications.",
        "इन-ऐप और पुश: पहले इंस्टॉल ऐप के अंदर विज्ञापन या संदेश; आवृत्ति व प्रासंगिकता तय करती है नोटिफ़िकेशन बंद होंगे या नहीं।",
        "In-app aur push: pehle installed app ke andar ads ya messages; frequency aur relevance decide karti hai notifications band honge ya nahi.",
      ],
      [
        "Responsive web: one site that reflows to small screens (flexible grid, readable type, tap targets). Essential for SEO and ads.",
        "रेस्पॉन्सिव वेब: एक साइट जो छोटी स्क्रीन पर ढलती है (लचीला ग्रिड, पठनीय टाइप, टैप टारगेट)। SEO व विज्ञापनों के लिए आवश्यक।",
        "Responsive web: ek site jo chhoti screens par dhalti hai (flexible grid, readable type, tap targets). SEO aur ads ke liye zaroori.",
      ],
      [
        "App campaigns: Google App campaigns and store listing ads drive installs; post-install events (registration, purchase) are the real KPI.",
        "ऐप कैंपेन: Google App campaigns व स्टोर लिस्टिंग विज्ञापन इंस्टॉल लाते हैं; इंस्टॉल-बाद इवेंट (रजिस्ट्रेशन, खरीद) असली KPI हैं।",
        "App campaigns: Google App campaigns aur store listing ads installs laate hain; post-install events (registration, purchase) asli KPI hain.",
      ],
      [
        "UPI-linked: cashback, collect requests and in-app UPI checkout shorten the path from ad to payment.",
        "UPI-linked: कैशबैक, कलेक्ट रिक्वेस्ट और इन-ऐप UPI चेकआउट विज्ञापन से भुगतान का पथ छोटा करते हैं।",
        "UPI-linked: cashback, collect requests aur in-app UPI checkout ad se payment ka path chhota karte hain.",
      ],
      [
        "Location and QR: geo-fenced offers near a store; QR on packaging and kirana counters jump the user into a mobile journey.",
        "लोकेशन और QR: स्टोर के पास जियो-फ़ेंस ऑफ़र; पैकेजिंग व किराना काउंटर पर QR यूज़र को मोबाइल यात्रा में कूदता है।",
        "Location aur QR: store ke paas geo-fenced offers; packaging aur kirana counters par QR user ko mobile journey mein kudata hai.",
      ],
      [
        "Constraints: small screen, fat-finger taps, patchy data, battery, and notification fatigue—design for skim and speed.",
        "बाधाएँ: छोटी स्क्रीन, मोटी-उँगली टैप, अनियमित डेटा, बैटरी, नोटिफ़िकेशन थकान—स्किम और गति के लिए डिज़ाइन करें।",
        "Constraints: chhoti screen, fat-finger taps, patchy data, battery, notification fatigue—skim aur speed ke liye design karo.",
      ],
    ]),
    TBL(
      [
        ["Mobile channel", "मोबाइल चैनल", "Mobile channel"],
        ["Typical use", "सामान्य उपयोग", "Typical use"],
      ],
      [
        [
          ["SMS / RCS", "SMS / RCS", "SMS / RCS"],
          ["OTPs, alerts, brief offers", "OTP, अलर्ट, संक्षिप्त ऑफ़र", "OTPs, alerts, brief offers"],
        ],
        [
          ["Push / in-app", "पुश / इन-ऐप", "Push / in-app"],
          ["Retention, flash sales, feature education", "रिटेंशन, फ़्लैश सेल, फ़ीचर शिक्षा", "Retention, flash sales, feature education"],
        ],
        [
          ["Responsive site", "रेस्पॉन्सिव साइट", "Responsive site"],
          ["SEO landing pages and mobile checkout", "SEO लैंडिंग पेज और मोबाइल चेकआउट", "SEO landing pages aur mobile checkout"],
        ],
        [
          ["App campaigns", "ऐप कैंपेन", "App campaigns"],
          ["Installs and in-app conversions", "इंस्टॉल और इन-ऐप कन्वर्ज़न", "Installs aur in-app conversions"],
        ],
        [
          ["UPI-linked", "UPI-linked", "UPI-linked"],
          ["Instant pay, cashback, collect", "तुरंत भुगतान, कैशबैक, कलेक्ट", "Instant pay, cashback, collect"],
        ],
      ],
    ),
    EXAM(
      "Define mobile marketing. Cover SMS, in-app, UPI-linked offers, responsive design and app campaigns. Explain why India is mobile-first.",
      "मोबाइल मार्केटिंग परिभाषित करें। SMS, इन-ऐप, UPI-linked ऑफ़र, रेस्पॉन्सिव डिज़ाइन और ऐप कैंपेन कवर करें। भारत मोबाइल-फर्स्ट क्यों है समझाएँ।",
      "Mobile marketing define karo. SMS, in-app, UPI-linked offers, responsive design aur app campaigns cover karo. Bharat mobile-first kyun hai samjhao.",
    ),
  ]),

  "dm-display": topic("dm-display", [
    P(
      "Display advertising is visual advertising on websites, apps and video players—banners, rich media, video and native units—rather than a text ad sitting on a search results page. It is the workhorse of branding and remarketing: you can show a product image to someone who visited your site yesterday, or buy cheap reach while people read news. Terminology includes impressions, viewability, brand safety and frequency capping.",
      "डिस्प्ले विज्ञापन वेबसाइटों, ऐप और वीडियो प्लेयर पर दृश्य विज्ञापन है—बैनर, रिच मीडिया, वीडियो और नेटिव इकाई—न कि सर्च परिणाम पृष्ठ पर बैठा टेक्स्ट विज्ञापन। यह ब्रांडिंग और रीमारकेटिंग का मुख्य घोड़ा है: कल आपकी साइट देखने वाले को उत्पाद छवि दिखा सकते हैं, या समाचार पढ़ते समय सस्ती पहुँच खरीद सकते हैं। शब्दावली में इंप्रेशन, व्यूएबिलिटी, ब्रांड सेफ़्टी और फ़्रीक्वेंसी कैप शामिल हैं।",
      "Display advertising websites, apps aur video players par visual ads hain—banners, rich media, video aur native units—na ki search results page par baitha text ad. Ye branding aur remarketing ka workhorse hai: kal aapki site dekhne wale ko product image dikha sakte ho, ya news padhte waqt sasti reach kharid sakte ho. Terminology mein impressions, viewability, brand safety aur frequency capping shamil hain.",
    ),
    D(
      "display-ads",
      "Display advertising on a page: banner and native units above and below the fold, with video and rich media as common formats.",
      "पेज पर डिस्प्ले विज्ञापन: फोल्ड के ऊपर और नीचे बैनर व नेटिव इकाई, सामान्य फ़ॉर्मेट के रूप में वीडियो और रिच मीडिया।",
      "Page par display advertising: fold ke upar aur neeche banner aur native units, common formats ke roop mein video aur rich media.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Job of display: awareness, retargeting, and supporting search (people who saw the banner later search the brand).",
        "डिस्प्ले का कार्य: जागरूकता, रीटारगेटिंग, और सर्च का समर्थन (बैनर देखने वाले बाद में ब्रांड सर्च करते हैं)।",
        "Display ka kaam: awareness, retargeting, aur search ka support (banner dekhne wale baad mein brand search karte hain).",
      ],
      [
        "Google Display Network (GDN) and similar networks place ads across many publisher sites and apps from one buy.",
        "Google Display Network (GDN) और समान नेटवर्क एक खरीद से कई पब्लिशर साइटों व ऐप पर विज्ञापन रखते हैं।",
        "GDN aur similar networks ek buy se kai publisher sites aur apps par ads rakhte hain.",
      ],
      [
        "Viewability: an impression that was actually on screen (IAB standard: typically 50% of pixels in view for at least one second for display).",
        "व्यूएबिलिटी: वह इंप्रेशन जो वास्तव में स्क्रीन पर था (IAB मानक: डिस्प्ले के लिए आमतौर पर कम से कम एक सेकंड तक 50% पिक्सेल दृश्य में)।",
        "Viewability: wo impression jo sach mein screen par tha (IAB standard: display ke liye typically 1 second tak 50% pixels in view).",
      ],
      [
        "Brand safety: ads should not sit next to hate, porn, fake news or piracy. Use exclusions and brand-safety tools.",
        "ब्रांड सेफ़्टी: विज्ञापन घृणा, अश्लील, नकली समाचार या पायरेसी के पास न बैठें। एक्सक्लूज़न और ब्रांड-सेफ़्टी टूल इस्तेमाल करें।",
        "Brand safety: ads hate, porn, fake news ya piracy ke paas na baithen. Exclusions aur brand-safety tools use karo.",
      ],
      [
        "Frequency cap: limit how many times one person sees the ad so you do not annoy them or waste impressions.",
        "फ़्रीक्वेंसी कैप: एक व्यक्ति विज्ञापन कितनी बार देखे इसकी सीमा, ताकि चिढ़ न हो और इंप्रेशन बर्बाद न हों।",
        "Frequency cap: ek person ad kitni baar dekhe uski limit, taaki annoy na ho aur impressions waste na hon.",
      ],
      [
        "Remarketing/retargeting: cookie or list-based ads to past visitors; high intent but can feel stalkerish if overused.",
        "रीमारकेटिंग/रीटारगेटिंग: पिछले विज़िटर को कुकी या लिस्ट आधारित विज्ञापन; ऊँचा इंटेंट पर अधिक इस्तेमाल पर स्टॉकर जैसा।",
        "Remarketing/retargeting: past visitors ko cookie ya list based ads; high intent par overuse pe stalkerish lag sakta hai.",
      ],
      [
        "Creative still matters: a slow, unreadable 728×90 wastes even a cheap CPM.",
        "क्रिएटिव अभी मायने रखता है: धीमा, अपठनीय 728×90 सस्ता CPM भी बर्बाद करता है।",
        "Creative ab bhi matter karta hai: slow, unreadable 728×90 sasta CPM bhi barbaad karta hai.",
      ],
    ]),
    TBL(
      [
        ["Term", "पद", "Term"],
        ["Meaning", "अर्थ", "Meaning"],
      ],
      [
        [
          ["Impression", "इंप्रेशन", "Impression"],
          ["Ad was served (not always seen)", "विज्ञापन परोसा गया (हमेशा देखा नहीं गया)", "Ad serve hua (hamesha dekha nahi gaya)"],
        ],
        [
          ["Viewable impression", "व्यूएबल इंप्रेशन", "Viewable impression"],
          ["Met IAB viewability threshold", "IAB व्यूएबिलिटी सीमा पूरी की", "IAB viewability threshold poori ki"],
        ],
        [
          ["Share of voice", "शेयर ऑफ़ वॉइस", "Share of voice"],
          ["Your impressions among category ads", "श्रेणी विज्ञापनों में आपके इंप्रेशन", "Category ads mein aapke impressions"],
        ],
        [
          ["Brand lift", "ब्रांड लिफ़्ट", "Brand lift"],
          ["Surveyed change in recall/search after ads", "विज्ञापनों के बाद रिकॉल/सर्च में सर्वेक्षित बदलाव", "Ads ke baad recall/search mein surveyed change"],
        ],
      ],
    ),
    EXAM(
      "Define display advertising and its terminology (impression, viewability, brand safety, frequency cap, remarketing). Contrast it with search text ads.",
      "डिस्प्ले विज्ञापन और शब्दावली (इंप्रेशन, व्यूएबिलिटी, ब्रांड सेफ़्टी, फ़्रीक्वेंसी कैप, रीमारकेटिंग) परिभाषित करें। सर्च टेक्स्ट विज्ञापन से तुलना करें।",
      "Display advertising aur terminology (impression, viewability, brand safety, frequency cap, remarketing) define karo. Search text ads se contrast karo.",
    ),
  ]),

  "dm-formats": topic("dm-formats", [
    P(
      "Display ads come in several formats. Syllabus answers should name banners, rich media, video and native, plus a few IAB-standard sizes. Format choice follows the job: a simple banner is cheap and easy; rich media and video grab more attention; native blends into the page so it feels less like an interruption—and therefore carries extra responsibility not to deceive.",
      "डिस्प्ले विज्ञापन कई फ़ॉर्मेट में आते हैं। सिलेबस उत्तर में बैनर, रिच मीडिया, वीडियो और नेटिव नाम दें, कुछ IAB-मानक आकार सहित। फ़ॉर्मेट चुनाव कार्य के बाद आता है: सरल बैनर सस्ता व आसान; रिच मीडिया व वीडियो अधिक ध्यान खींचते हैं; नेटिव पेज में घुल जाता है इसलिए कम व्यवधान लगता है—और धोखा न देने की अतिरिक्त ज़िम्मेदारी रखता है।",
      "Display ads kai formats mein aate hain. Syllabus answer mein banners, rich media, video aur native naam do, kuch IAB-standard sizes ke saath. Format choice job ke baad aata hai: simple banner sasta aur aasaan; rich media aur video zyada dhyan khichte hain; native page mein ghul jata hai isliye kam interruption lagta hai—aur deceive na karne ki extra zimmedari rakhta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Banners (static or simple HTML5): image or lightweight animation in standard sizes. Workhorse of GDN.",
        "बैनर (स्थिर या सरल HTML5): मानक आकार में छवि या हल्की एनिमेशन। GDN का मुख्य घोड़ा।",
        "Banners (static ya simple HTML5): standard sizes mein image ya halki animation. GDN ka workhorse.",
      ],
      [
        "Common IAB sizes: 300×250 (medium rectangle), 728×90 (leaderboard), 160×600 (wide skyscraper), 320×50 (mobile banner), 300×600 (half page).",
        "सामान्य IAB आकार: 300×250 (मीडियम रेक्टैंगल), 728×90 (लीडरबोर्ड), 160×600 (वाइड स्काईस्क्रेपर), 320×50 (मोबाइल बैनर), 300×600 (हाफ़ पेज)।",
        "Common IAB sizes: 300×250 (medium rectangle), 728×90 (leaderboard), 160×600 (wide skyscraper), 320×50 (mobile banner), 300×600 (half page).",
      ],
      [
        "Rich media: expandable, floating, interactive (games, taps, video inside the unit). Higher engagement, heavier file, stricter publisher rules.",
        "रिच मीडिया: विस्तार योग्य, फ़्लोटिंग, इंटरैक्टिव (गेम, टैप, इकाई के अंदर वीडियो)। अधिक एंगेजमेंट, भारी फ़ाइल, सख्त पब्लिशर नियम।",
        "Rich media: expandable, floating, interactive (games, taps, unit ke andar video). Higher engagement, heavier file, stricter publisher rules.",
      ],
      [
        "Video: in-stream (before/during/after a video, e.g. YouTube) or out-stream (in an article feed). Skip versus non-skip changes completion rates.",
        "वीडियो: इन-स्ट्रीम (वीडियो से पहले/दौरान/बाद, जैसे YouTube) या आउट-स्ट्रीम (आर्टिकल फ़ीड में)। स्किप बनाम नॉन-स्किप पूर्णता दर बदलता है।",
        "Video: in-stream (video se pehle/dauran/baad, jaise YouTube) ya out-stream (article feed mein). Skip vs non-skip completion rates badalta hai.",
      ],
      [
        "Native: designed to match the surrounding content (look, fonts, placement) while remaining labelled as an ad. Used in feeds and recommendation widgets.",
        "नेटिव: आसपास के कंटेंट (रूप, फ़ॉन्ट, स्थान) से मेल खाए, फिर भी विज्ञापन के रूप में लेबल हो। फ़ीड और रेकमेंडेशन विजेट में।",
        "Native: surrounding content (look, fonts, placement) se match kare, phir bhi ad ke roop mein labelled ho. Feeds aur recommendation widgets mein.",
      ],
      [
        "Interstitials and app-open ads: full-screen takeovers. High attention, high annoyance if timed badly (e.g. mid-level in a game).",
        "इंटरस्टिशियल और ऐप-ओपन विज्ञापन: फ़ुल-स्क्रीन कब्ज़ा। ऊँचा ध्यान, गलत समय पर ऊँची चिढ़ (जैसे गेम के बीच)।",
        "Interstitials aur app-open ads: full-screen takeovers. High attention, galat timing par high annoyance (jaise game ke beech).",
      ],
      [
        "HTML5 replaced old Flash: keep file weight low for Indian mobile networks.",
        "HTML5 ने पुराने Flash की जगह ली: भारतीय मोबाइल नेटवर्क के लिए फ़ाइल भार कम रखें।",
        "HTML5 ne purane Flash ki jagah li: Indian mobile networks ke liye file weight kam rakho.",
      ],
    ]),
    TBL(
      [
        ["Format", "फ़ॉर्मेट", "Format"],
        ["Strength", "शक्ति", "Strength"],
        ["Watch-out", "सावधानी", "Watch-out"],
      ],
      [
        [
          ["Banner", "बैनर", "Banner"],
          ["Cheap, standard, easy production", "सस्ता, मानक, आसान प्रोडक्शन", "Sasta, standard, aasaan production"],
          ["Banner blindness", "बैनर ब्लाइंडनेस", "Banner blindness"],
        ],
        [
          ["Rich media", "रिच मीडिया", "Rich media"],
          ["Interaction, memorable", "इंटरैक्शन, यादगार", "Interaction, memorable"],
          ["Heavy; can hurt page speed", "भारी; पेज स्पीड बिगाड़ सकता है", "Bhaari; page speed bigaad sakta hai"],
        ],
        [
          ["Video", "वीडियो", "Video"],
          ["Storytelling, YouTube/OTT scale", "कहानी, YouTube/OTT पैमाना", "Storytelling, YouTube/OTT scale"],
          ["Skip, sound-off, cost", "स्किप, साउंड-ऑफ़, लागत", "Skip, sound-off, cost"],
        ],
        [
          ["Native", "नेटिव", "Native"],
          ["Less interruption, feed-friendly", "कम व्यवधान, फ़ीड-अनुकूल", "Kam interruption, feed-friendly"],
          ["Must be clearly disclosed as ads", "स्पष्ट रूप से विज्ञापन बताना ज़रूरी", "Clearly ads ke roop mein disclose karna zaroori"],
        ],
      ],
    ),
    EXAM(
      "List types of display ads (banner, rich media, video, native). Quote two IAB sizes and explain when native is appropriate.",
      "डिस्प्ले विज्ञापन प्रकार लिखें (बैनर, रिच मीडिया, वीडियो, नेटिव)। दो IAB आकार बताएँ और नेटिव कब उपयुक्त है समझाएँ।",
      "Display ad types list karo (banner, rich media, video, native). Do IAB sizes batao aur native kab appropriate hai samjhao.",
    ),
  ]),

  "dm-placement": topic("dm-placement", [
    P(
      "Placement is where the ad actually appears: which site or app, which page, which slot on that page, and whether it is seen without scrolling. Buying a network means the engine picks placements automatically; managed placements let you choose specific publishers. In-app placements follow a different canvas (feeds, banners, interstitials). ‘Above the fold’ remains a favourite exam phrase even on infinite mobile scrolls—it means the first screenful.",
      "प्लेसमेंट वह जगह है जहाँ विज्ञापन वास्तव में दिखता है: कौन-सी साइट या ऐप, कौन-सा पेज, उस पेज पर कौन-सा स्लॉट, और बिना स्क्रॉल देखी जाती है या नहीं। नेटवर्क खरीदने का मतलब इंजन प्लेसमेंट खुद चुनता है; मैनेज्ड प्लेसमेंट में आप विशिष्ट पब्लिशर चुनते हैं। इन-ऐप प्लेसमेंट अलग कैनवस पर चलते हैं (फ़ीड, बैनर, इंटरस्टिशियल)। ‘अबाव द फोल्ड’ अनंत मोबाइल स्क्रॉल पर भी परीक्षा का पसंदीदा वाक्यांश है—इसका अर्थ पहली स्क्रीन है।",
      "Placement wo jagah hai jahan ad sach mein dikhta hai: kaun-si site ya app, kaun-sa page, us page par kaun-sa slot, aur bina scroll dikhai deti hai ya nahi. Network buy ka matlab engine placements khud chunta hai; managed placements mein aap specific publishers chunte ho. In-app placements alag canvas par chalte hain (feeds, banners, interstitials). ‘Above the fold’ infinite mobile scroll par bhi exam ka favourite phrase hai—matlab pehli screen.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Network placement: GDN or similar automatically matches your ad to sites/apps in the network based on targeting.",
        "नेटवर्क प्लेसमेंट: GDN या समान आपके टारगेटिंग के आधार पर नेटवर्क की साइटों/ऐप से विज्ञापन स्वतः मिलाता है।",
        "Network placement: GDN ya similar aapke targeting ke basis par network ki sites/apps se ad automatically milata hai.",
      ],
      [
        "Managed / targeted placements: you pick specific URLs, YouTube channels or apps—useful for brand control.",
        "मैनेज्ड / टारगेटेड प्लेसमेंट: आप विशिष्ट URL, YouTube चैनल या ऐप चुनते हैं—ब्रांड नियंत्रण के लिए उपयोगी।",
        "Managed / targeted placements: aap specific URLs, YouTube channels ya apps chunte ho—brand control ke liye useful.",
      ],
      [
        "In-app: banners, native feed units, rewarded video, interstitials. Users are often more engaged than on a random website.",
        "इन-ऐप: बैनर, नेटिव फ़ीड इकाई, रिवॉर्डेड वीडियो, इंटरस्टिशियल। यूज़र अक्सर रैंडम वेबसाइट से अधिक एंगेज्ड होते हैं।",
        "In-app: banners, native feed units, rewarded video, interstitials. Users aksar random website se zyada engaged hote hain.",
      ],
      [
        "Above the fold: visible without scrolling when the page loads. Higher viewability, usually higher price.",
        "अबाव द फोल्ड: पेज लोड होते ही बिना स्क्रॉल दिखाई। अधिक व्यूएबिलिटी, आमतौर पर अधिक कीमत।",
        "Above the fold: page load hote hi bina scroll dikhai. Higher viewability, usually higher price.",
      ],
      [
        "Below the fold: user must scroll; cheaper; viewability depends on content quality.",
        "बिलो द फोल्ड: यूज़र को स्क्रॉल करना पड़ता है; सस्ता; व्यूएबिलिटी कंटेंट गुणवत्ता पर निर्भर।",
        "Below the fold: user ko scroll karna padta hai; sasta; viewability content quality par depend karti hai.",
      ],
      [
        "Contextual versus audience: contextual sits next to matching content (cricket page → sports shoes); audience follows the person across sites.",
        "कॉन्टेक्स्टुअल बनाम ऑडियंस: कॉन्टेक्स्टुअल मेल खाते कंटेंट के पास (क्रिकेट पेज → स्पोर्ट्स शूज़); ऑडियंस व्यक्ति का कई साइटों पर पीछा करता है।",
        "Contextual vs audience: contextual matching content ke paas (cricket page → sports shoes); audience person ka kai sites par peecha karta hai.",
      ],
      [
        "Exclusions: block categories, specific sites, and poorly performing apps to protect brand and CPA.",
        "एक्सक्लूज़न: श्रेणियाँ, विशिष्ट साइटें और खराब प्रदर्शन ऐप रोकें ताकि ब्रांड व CPA बचें।",
        "Exclusions: categories, specific sites aur poorly performing apps block karo taaki brand aur CPA bachen.",
      ],
    ]),
    TBL(
      [
        ["Term", "पद", "Term"],
        ["Exam meaning", "परीक्षा अर्थ", "Exam meaning"],
      ],
      [
        [
          ["Network", "नेटवर्क", "Network"],
          ["One buy, many publisher sites/apps", "एक खरीद, कई पब्लिशर साइट/ऐप", "Ek buy, kai publisher sites/apps"],
        ],
        [
          ["In-app", "इन-ऐप", "In-app"],
          ["Inside a mobile application, not mobile web", "मोबाइल ऐप के अंदर, मोबाइल वेब नहीं", "Mobile app ke andar, mobile web nahi"],
        ],
        [
          ["Above the fold", "अबाव द फोल्ड", "Above the fold"],
          ["First screen, no scroll required", "पहली स्क्रीन, स्क्रॉल नहीं", "Pehli screen, scroll nahi"],
        ],
        [
          ["Exclusion", "एक्सक्लूज़न", "Exclusion"],
          ["Sites/apps/categories you refuse", "साइट/ऐप/श्रेणियाँ जिन्हें आप मना करते हैं", "Sites/apps/categories jinhe aap mana karte ho"],
        ],
      ],
    ),
    EXAM(
      "Explain ad placement: network versus managed, in-app, above the fold versus below the fold, and why exclusions matter for brand safety.",
      "विज्ञापन प्लेसमेंट समझाएँ: नेटवर्क बनाम मैनेज्ड, इन-ऐप, अबाव द फोल्ड बनाम बिलो द फोल्ड, और ब्रांड सेफ़्टी के लिए एक्सक्लूज़न क्यों ज़रूरी हैं।",
      "Ad placement samjhao: network vs managed, in-app, above the fold vs below the fold, aur brand safety ke liye exclusions kyun zaroori hain.",
    ),
  ]),

  "dm-buying": topic("dm-buying", [
    P(
      "Buying models describe how the advertiser pays for display (and other) inventory. Matching the model to the objective is an exam favourite: pay for views when you want fame, for clicks when you want traffic, for actions when you want leads or sales. Flat deals still exist for homepage takeovers. Viewable CPM tries to stop paying for ads that never appeared on screen.",
      "खरीद मॉडल बताते हैं कि विज्ञापनदाता डिस्प्ले (और अन्य) इन्वेंटरी के लिए कैसे भुगतान करता है। मॉडल को उद्देश्य से मिलाना परीक्षा का पसंदीदा है: प्रसिद्धि हो तो व्यू, ट्रैफ़िक हो तो क्लिक, लीड या बिक्री हो तो एक्शन पर भुगतान। होमपेज टेकओवर के लिए फ़्लैट डील अभी हैं। Viewable CPM उन विज्ञापनों का भुगतान रोकने की कोशिश करता है जो स्क्रीन पर कभी आए ही नहीं।",
      "Buying models batate hain ki advertiser display (aur doosri) inventory ke liye kaise pay karta hai. Model ko objective se milana exam favourite hai: fame chahiye to views, traffic chahiye to clicks, leads/sales chahiye to actions par pay. Homepage takeovers ke liye flat deals ab bhi hain. Viewable CPM un ads ka payment rokne ki koshish karta hai jo screen par aaye hi nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "CPM (cost per mille): pay per 1,000 impressions. Natural for awareness when you care about being seen, not clicked.",
        "CPM (प्रति हज़ार लागत): 1,000 इंप्रेशन पर भुगतान। जागरूकता के लिए स्वाभाविक जब दिखना मायने रखे, क्लिक नहीं।",
        "CPM (cost per mille): 1,000 impressions par pay. Awareness ke liye natural jab dikhna matter kare, click nahi.",
      ],
      [
        "CPC: pay per click. Shifts risk toward the publisher/platform until someone is interested enough to click.",
        "CPC: प्रति क्लिक भुगतान। जोखिम पब्लिशर/प्लेटफ़ॉर्म की ओर तब तक जाता है जब कोई क्लिक जितना इच्छुक न हो।",
        "CPC: per click pay. Risk publisher/platform ki taraf tab tak jata hai jab koi click jitna interested na ho.",
      ],
      [
        "CPA: pay per acquisition (lead, sale, install). Lowest advertiser risk; platforms need enough conversion data to bid this way.",
        "CPA: प्रति अधिग्रहण भुगतान (लीड, बिक्री, इंस्टॉल)। विज्ञापनदाता का सबसे कम जोखिम; प्लेटफ़ॉर्म को इस तरह बोली के लिए पर्याप्त कन्वर्ज़न डेटा चाहिए।",
        "CPA: per acquisition pay (lead, sale, install). Advertiser ka sabse kam risk; platforms ko is tarah bid ke liye kaafi conversion data chahiye.",
      ],
      [
        "Flat / fixed / sponsorship: one price for a slot and time window (homepage takeover for IPL week). Simple, little optimisation.",
        "फ़्लैट / निश्चित / स्पॉन्सरशिप: स्लॉट व समय के लिए एक कीमत (IPL सप्ताह होमपेज टेकओवर)। सरल, कम अनुकूलन।",
        "Flat / fixed / sponsorship: slot aur time ke liye ek price (IPL week homepage takeover). Simple, kam optimisation.",
      ],
      [
        "vCPM (viewable CPM): you pay only (or mainly) when the impression meets the viewability standard.",
        "vCPM (व्यूएबल CPM): भुगतान केवल (या मुख्यतः) तब जब इंप्रेशन व्यूएबिलिटी मानक पूरा करे।",
        "vCPM (viewable CPM): pay tabhi (ya mainly tab) jab impression viewability standard poora kare.",
      ],
      [
        "Effective metrics: even if you buy on CPM, still watch eCPC and CPA so cheap views that never convert do not fool you.",
        "प्रभावी मेट्रिक्स: CPM पर खरीदने पर भी eCPC व CPA देखें ताकि सस्ते व्यू जो कन्वर्ट न करें धोखा न दें।",
        "Effective metrics: CPM par kharidne par bhi eCPC aur CPA dekho taaki saste views jo convert na karein dhokha na den.",
      ],
      [
        "Negotiation: large advertisers still do IO (insertion order) deals; smaller ones live inside self-serve auctions.",
        "मोलभाव: बड़े विज्ञापनदाता अभी IO (insertion order) डील करते हैं; छोटे सेल्फ़-सर्व नीलामी में रहते हैं।",
        "Negotiation: bade advertisers ab bhi IO (insertion order) deals karte hain; chhote self-serve auctions mein rehte hain.",
      ],
    ]),
    TBL(
      [
        ["Model", "मॉडल", "Model"],
        ["You pay for", "आप भुगतान करते हैं", "Aap pay karte ho"],
        ["Best when", "सबसे अच्छा जब", "Best when"],
      ],
      [
        [
          ["CPM", "CPM", "CPM"],
          ["1,000 impressions", "1,000 इंप्रेशन", "1,000 impressions"],
          ["Awareness / reach", "जागरूकता / पहुँच", "Awareness / reach"],
        ],
        [
          ["vCPM", "vCPM", "vCPM"],
          ["1,000 viewable impressions", "1,000 व्यूएबल इंप्रेशन", "1,000 viewable impressions"],
          ["Brand with viewability guarantee", "व्यूएबिलिटी गारंटी वाला ब्रांड", "Brand with viewability guarantee"],
        ],
        [
          ["CPC", "CPC", "CPC"],
          ["Each click", "प्रत्येक क्लिक", "Har click"],
          ["Traffic to a site or app", "साइट या ऐप को ट्रैफ़िक", "Site ya app ko traffic"],
        ],
        [
          ["CPA", "CPA", "CPA"],
          ["Each conversion", "प्रत्येक कन्वर्ज़न", "Har conversion"],
          ["Leads or sales at a target cost", "लक्ष्य लागत पर लीड या बिक्री", "Target cost par leads ya sales"],
        ],
        [
          ["Flat", "फ़्लैट", "Flat"],
          ["A reserved slot and dates", "आरक्षित स्लॉट और तिथियाँ", "Reserved slot aur dates"],
          ["Sponsorships, takeovers", "स्पॉन्सरशिप, टेकओवर", "Sponsorships, takeovers"],
        ],
      ],
    ),
    EXAM(
      "Compare CPM, CPC, CPA, flat rate and viewable CPM. Recommend a model for a branding IPL campaign versus an e-commerce sale campaign.",
      "CPM, CPC, CPA, फ़्लैट रेट और viewable CPM की तुलना करें। ब्रांडिंग IPL कैंपेन बनाम ई-कॉमर्स सेल कैंपेन के लिए मॉडल सुझाएँ।",
      "CPM, CPC, CPA, flat rate aur viewable CPM compare karo. Branding IPL campaign vs e-commerce sale campaign ke liye model suggest karo.",
    ),
  ]),

  "dm-tools": topic("dm-tools", [
    P(
      "Ad tools are the software surfaces where campaigns are built, targeted, billed and reported. For this syllabus, master Google Ads (search, display, YouTube, apps), Meta Ads Manager (Facebook and Instagram), and the idea of a DSP for programmatic display. Analytics and Search Console (previous topic) sit beside them. Do not invent exotic product names in the exam—describe roles.",
      "विज्ञापन टूल वे सॉफ़्टवेयर सतहें हैं जहाँ कैंपेन बनते, टारगेट होते, बिल होते और रिपोर्ट होते हैं। इस सिलेबस के लिए Google Ads (सर्च, डिस्प्ले, YouTube, ऐप), Meta Ads Manager (Facebook और Instagram), और प्रोग्रामेटिक डिस्प्ले के लिए DSP का विचार सीखें। एनालिटिक्स और Search Console (पिछला विषय) उनके साथ बैठते हैं। परीक्षा में अजीब उत्पाद नाम न गढ़ें—भूमिकाएँ लिखें।",
      "Ad tools wo software surfaces hain jahan campaigns bante, target hote, bill hote aur report hote hain. Is syllabus ke liye Google Ads (search, display, YouTube, apps), Meta Ads Manager (Facebook aur Instagram), aur programmatic display ke liye DSP ka idea seekho. Analytics aur Search Console (pichla topic) unke saath baithte hain. Exam mein ajeeb product names mat gadho—roles likho.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Google Ads: campaigns for Search, Display, YouTube, Shopping and Apps; keyword and audience targeting; auction bidding; conversion tracking via tags.",
        "Google Ads: Search, Display, YouTube, Shopping और Apps के कैंपेन; कीवर्ड व ऑडियंस टारगेटिंग; नीलामी बोली; टैग से कन्वर्ज़न ट्रैकिंग।",
        "Google Ads: Search, Display, YouTube, Shopping aur Apps ke campaigns; keyword aur audience targeting; auction bidding; tags se conversion tracking.",
      ],
      [
        "Meta Ads Manager: create, A/B test and report ads on Facebook, Instagram and related placements; powerful interest and lookalike audiences.",
        "Meta Ads Manager: Facebook, Instagram व संबंधित प्लेसमेंट पर विज्ञापन बनाएँ, A/B टेस्ट व रिपोर्ट करें; शक्तिशाली रुचि व लुकअलाइक ऑडियंस।",
        "Meta Ads Manager: Facebook, Instagram aur related placements par ads banao, A/B test aur report karo; powerful interest aur lookalike audiences.",
      ],
      [
        "DSP (demand-side platform): software advertisers (or agencies) use to buy display/video inventory programmatically across many publishers.",
        "DSP (डिमांड-साइड प्लेटफ़ॉर्म): वह सॉफ़्टवेयर जिससे विज्ञापनदाता (या एजेंसी) कई पब्लिशर पर प्रोग्रामेटिक डिस्प्ले/वीडियो इन्वेंटरी खरीदते हैं।",
        "DSP (demand-side platform): wo software jisse advertisers (ya agencies) kai publishers par programmatic display/video inventory kharidte hain.",
      ],
      [
        "Pixels and tags: the Meta pixel (or equivalent) and Google tags record events so tools can optimise and attribute.",
        "पिक्सेल और टैग: Meta पिक्सेल (या समकक्ष) और Google टैग इवेंट रिकॉर्ड करते हैं ताकि टूल अनुकूलन व एट्रिब्यूट कर सकें।",
        "Pixels aur tags: Meta pixel (ya equivalent) aur Google tags events record karte hain taaki tools optimise aur attribute kar saken.",
      ],
      [
        "Creative tools sit nearby: Canva-class design, video editors, and product feeds for shopping ads—mention only as support, not as fake ad networks.",
        "क्रिएटिव टूल पास में: Canva-स्तरीय डिज़ाइन, वीडियो एडिटर, शॉपिंग विज्ञापनों के लिए प्रोडक्ट फ़ीड—केवल समर्थन के रूप में उल्लेख, नकली ऐड नेटवर्क के रूप में नहीं।",
        "Creative tools paas mein: Canva-class design, video editors, shopping ads ke liye product feeds—sirf support ke roop mein mention, fake ad networks ke roop mein nahi.",
      ],
      [
        "Reporting: each tool has its own attribution window; reconcile with GA so you do not double-count sales.",
        "रिपोर्टिंग: प्रत्येक टूल की अपनी एट्रिब्यूशन विंडो होती है; GA से मिलाएँ ताकि बिक्री दो बार न गिनें।",
        "Reporting: har tool ki apni attribution window hoti hai; GA se milao taaki sales do baar na ginen.",
      ],
      [
        "Access control: keep billing, pixels and admin logins with the brand, not locked inside a freelancer’s personal account.",
        "एक्सेस नियंत्रण: बिलिंग, पिक्सेल और एडमिन लॉगिन ब्रांड के पास रखें, फ़्रीलांसर के निजी अकाउंट में बंद न हों।",
        "Access control: billing, pixels aur admin logins brand ke paas rakho, freelancer ke personal account mein band na hon.",
      ],
    ]),
    TBL(
      [
        ["Tool", "टूल", "Tool"],
        ["Primary job", "मुख्य कार्य", "Primary job"],
      ],
      [
        [
          ["Google Ads", "Google Ads", "Google Ads"],
          ["Search, YouTube, GDN, App campaigns", "Search, YouTube, GDN, App कैंपेन", "Search, YouTube, GDN, App campaigns"],
        ],
        [
          ["Meta Ads Manager", "Meta Ads Manager", "Meta Ads Manager"],
          ["Facebook / Instagram ads and audiences", "Facebook / Instagram विज्ञापन व ऑडियंस", "Facebook / Instagram ads aur audiences"],
        ],
        [
          ["DSP", "DSP", "DSP"],
          ["Programmatic buying across exchanges", "एक्सचेंज पर प्रोग्रामेटिक खरीद", "Exchanges par programmatic buying"],
        ],
        [
          ["GA + GSC", "GA + GSC", "GA + GSC"],
          ["On-site behaviour and search health (not buying)", "ऑन-साइट व्यवहार व सर्च स्वास्थ्य (खरीद नहीं)", "On-site behaviour aur search health (kharid nahi)"],
        ],
      ],
    ),
    EXAM(
      "Name major ad tools (Google Ads, Meta Ads Manager, DSPs) and state what each is used for. Mention conversion tags/pixels.",
      "प्रमुख विज्ञापन टूल (Google Ads, Meta Ads Manager, DSP) नाम दें और प्रत्येक किस काम का है लिखें। कन्वर्ज़न टैग/पिक्सेल का उल्लेख करें।",
      "Major ad tools (Google Ads, Meta Ads Manager, DSPs) naam do aur har ek kis kaam ka hai likho. Conversion tags/pixels mention karo.",
    ),
  ]),

  "dm-programmatic": topic("dm-programmatic", [
    P(
      "Programmatic digital advertising is the automated buying and selling of ad inventory using software, data and (often) real-time auctions—instead of a human emailing a publisher for every banner slot. The core exam map is: advertiser uses a DSP, publisher uses an SSP, they meet in an ad exchange, and an RTB auction may fire in about 100 milliseconds while the page loads. Data (first-party lists, contextual signals; third-party cookies are declining) decides who is worth bidding on. Avoid inventing fake platform names; describe the roles.",
      "प्रोग्रामेटिक डिजिटल विज्ञापन सॉफ़्टवेयर, डेटा और (अक्सर) रियल-टाइम नीलामी से विज्ञापन इन्वेंटरी की स्वचालित खरीद-बिक्री है—हर बैनर स्लॉट के लिए पब्लिशर को ईमेल करने वाले इंसान की जगह। परीक्षा का मूल नक्शा: विज्ञापनदाता DSP इस्तेमाल करता है, पब्लिशर SSP, वे ऐड एक्सचेंज में मिलते हैं, और पेज लोड होते लगभग 100 मिलीसेकंड में RTB नीलामी चल सकती है। डेटा (फ़र्स्ट-पार्टी लिस्ट, कॉन्टेक्स्टुअल संकेत; थर्ड-पार्टी कुकी घट रही हैं) तय करता है किस पर बोली लगे। नकली प्लेटफ़ॉर्म नाम न गढ़ें; भूमिकाएँ लिखें।",
      "Programmatic digital advertising software, data aur (aksar) real-time auctions se ad inventory ki automated kharid-farokht hai—har banner slot ke liye publisher ko email karne wale insaan ki jagah. Exam ka core map: advertiser DSP use karta hai, publisher SSP, ve ad exchange mein milte hain, aur page load hote lagbhag 100 milliseconds mein RTB auction chal sakti hai. Data (first-party lists, contextual signals; third-party cookies ghat rahi hain) decide karta hai kis par bid lage. Fake platform names mat gadho; roles likho.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "RTB (real-time bidding): each impression can be auctioned as the page or app loads; bid request includes placement and (limited) user signals.",
        "RTB: प्रत्येक इंप्रेशन पेज या ऐप लोड होते नीलाम हो सकता है; बिड रिक्वेस्ट में प्लेसमेंट और (सीमित) यूज़र संकेत होते हैं।",
        "RTB: har impression page ya app load hote auction ho sakta hai; bid request mein placement aur (limited) user signals hote hain.",
      ],
      [
        "DSP: demand-side platform used by advertisers/agencies to set budgets, targeting, bids and creatives across many exchanges.",
        "DSP: डिमांड-साइड प्लेटफ़ॉर्म जिससे विज्ञापनदाता/एजेंसी कई एक्सचेंज पर बजट, टारगेटिंग, बोली और क्रिएटिव सेट करते हैं।",
        "DSP: demand-side platform jisse advertisers/agencies kai exchanges par budgets, targeting, bids aur creatives set karte hain.",
      ],
      [
        "SSP: supply-side platform used by publishers to offer inventory, set floors and pick the highest paying safe demand.",
        "SSP: सप्लाई-साइड प्लेटफ़ॉर्म जिससे पब्लिशर इन्वेंटरी देते, फ़्लोर सेट करते और सबसे अधिक भुगतान वाली सुरक्षित डिमांड चुनते हैं।",
        "SSP: supply-side platform jisse publishers inventory dete, floors set karte aur sabse zyada paying safe demand chunte hain.",
      ],
      [
        "Ad exchange: the marketplace matching DSP bids to SSP inventory (think stock exchange, but for impressions).",
        "ऐड एक्सचेंज: DSP बोलियों को SSP इन्वेंटरी से मिलाने वाला बाज़ार (इंप्रेशन का स्टॉक एक्सचेंज समझें)।",
        "Ad exchange: DSP bids ko SSP inventory se milane wala marketplace (impressions ka stock exchange samjho).",
      ],
      [
        "Data: first-party (your customers, site events) is the durable asset; contextual data uses page content; third-party cookie pools are shrinking due to privacy.",
        "डेटा: फ़र्स्ट-पार्टी (आपके ग्राहक, साइट इवेंट) टिकाऊ संपत्ति है; कॉन्टेक्स्टुअल पेज कंटेंट इस्तेमाल करता है; प्राइवेसी से थर्ड-पार्टी कुकी पूल सिकुड़ रहे हैं।",
        "Data: first-party (aapke customers, site events) durable asset hai; contextual page content use karta hai; privacy se third-party cookie pools sikud rahe hain.",
      ],
      [
        "Not all programmatic is RTB: there is also programmatic guaranteed (automated reserved deals) and private marketplaces (invite-only inventory).",
        "सारा प्रोग्रामेटिक RTB नहीं: प्रोग्रामेटिक गारंटीड (स्वचालित आरक्षित डील) और प्राइवेट मार्केटप्लेस (आमंत्रण-मात्र इन्वेंटरी) भी हैं।",
        "Sara programmatic RTB nahi: programmatic guaranteed (automated reserved deals) aur private marketplaces (invite-only inventory) bhi hain.",
      ],
      [
        "Risks: ad fraud, malware, brand-unsafe content, bid shading complexity. Programmatic is not ‘set and forget’.",
        "जोखिम: विज्ञापन धोखाधड़ी, मैलवेयर, ब्रांड-असुरक्षित कंटेंट, बिड जटिलता। प्रोग्रामेटिक ‘सेट एंड फ़ॉरगेट’ नहीं है।",
        "Risks: ad fraud, malware, brand-unsafe content, bid complexity. Programmatic ‘set and forget’ nahi hai.",
      ],
    ]),
    H("How an RTB impression is sold", "RTB इंप्रेशन कैसे बिकता है", "RTB impression kaise bikta hai"),
    OL([
      [
        "User opens a page or app; the publisher’s SSP announces an impression.",
        "यूज़र पेज या ऐप खोलता है; पब्लिशर का SSP इंप्रेशन घोषित करता है।",
        "User page ya app kholta hai; publisher ka SSP impression announce karta hai.",
      ],
      [
        "The ad exchange sends a bid request to many DSPs.",
        "ऐड एक्सचेंज कई DSP को बिड रिक्वेस्ट भेजता है।",
        "Ad exchange kai DSPs ko bid request bhejta hai.",
      ],
      [
        "Each DSP checks targeting, data and remaining budget, then bids or skips.",
        "प्रत्येक DSP टारगेटिंग, डेटा और बचा बजट जाँच कर बोली लगाता है या छोड़ता है।",
        "Har DSP targeting, data aur bacha budget check karke bid karta hai ya skip karta hai.",
      ],
      [
        "Highest valid bid wins (subject to floors and brand rules); the ad is returned and rendered.",
        "सबसे ऊँची वैध बोली जीतती है (फ़्लोर व ब्रांड नियमों के अधीन); विज्ञापन लौट कर रेंडर होता है।",
        "Sabse unchi valid bid jeetti hai (floors aur brand rules ke saath); ad return ho kar render hota hai.",
      ],
      [
        "The whole loop typically finishes in about one-tenth of a second.",
        "पूरा लूप आमतौर पर लगभग एक-दसवें सेकंड में पूरा होता है।",
        "Poora loop typically lagbhag ek-daswen second mein complete hota hai.",
      ],
    ]),
    TBL(
      [
        ["Player", "खिलाड़ी", "Player"],
        ["Whose side?", "किसकी ओर?", "Kiski taraf?"],
        ["Job", "कार्य", "Job"],
      ],
      [
        [
          ["DSP", "DSP", "DSP"],
          ["Advertiser / demand", "विज्ञापनदाता / डिमांड", "Advertiser / demand"],
          ["Buy impressions that match targeting", "टारगेटिंग से मेल खाते इंप्रेशन खरीदें", "Targeting se match karte impressions kharido"],
        ],
        [
          ["SSP", "SSP", "SSP"],
          ["Publisher / supply", "पब्लिशर / सप्लाई", "Publisher / supply"],
          ["Sell inventory at the best safe price", "सबसे अच्छी सुरक्षित कीमत पर इन्वेंटरी बेचें", "Best safe price par inventory becho"],
        ],
        [
          ["Ad exchange", "ऐड एक्सचेंज", "Ad exchange"],
          ["Neutral marketplace", "तटस्थ बाज़ार", "Neutral marketplace"],
          ["Run the auction / matching", "नीलामी / मिलान चलाएँ", "Auction / matching chalao"],
        ],
        [
          ["Data", "डेटा", "Data"],
          ["Both sides (privacy-limited)", "दोनों ओर (प्राइवेसी-सीमित)", "Dono taraf (privacy-limited)"],
          ["Decide value of the impression", "इंप्रेशन का मूल्य तय करें", "Impression ka value decide karo"],
        ],
      ],
    ),
    NOTE(
      "Programmatic is a method of buying, not a magic format. You can buy banners, video or native programmatically. Brand safety still needs human rules.",
      "प्रोग्रामेटिक खरीद की विधि है, जादुई फ़ॉर्मेट नहीं। बैनर, वीडियो या नेटिव प्रोग्रामेटिक खरीदे जा सकते हैं। ब्रांड सेफ़्टी के लिए अभी मानव नियम चाहिए।",
      "Programmatic kharidne ka method hai, magic format nahi. Banners, video ya native programmatic kharide ja sakte hain. Brand safety ke liye ab bhi human rules chahiye.",
    ),
    EXAM(
      "Explain programmatic advertising using RTB, DSP, SSP, ad exchange and data. Sketch the millisecond auction. Do not invent product names.",
      "RTB, DSP, SSP, ऐड एक्सचेंज और डेटा से प्रोग्रामेटिक विज्ञापन समझाएँ। मिलीसेकंड नीलामी का रेखाचित्र बनाएँ। उत्पाद नाम न गढ़ें।",
      "RTB, DSP, SSP, ad exchange aur data se programmatic advertising samjhao. Millisecond auction sketch karo. Product names mat gadho.",
    ),
  ]),
};

export const dmQuestions: QuizQuestion[] = [
  Q(
    "dm-fundamentals-q1",
    "dm-fundamentals",
    [
      "Digital marketing is best described as:",
      "डिजिटल मार्केटिंग का सबसे उपयुक्त वर्णन है:",
      "Digital marketing ka sabse sahi description hai:",
    ],
    [
      [
        "Only television and newspaper advertising with a website mentioned in the ad",
        "केवल टेलीविज़न और अखबार विज्ञापन जिनमें वेबसाइट का उल्लेख हो",
        "Sirf TV aur newspaper advertising jisme website mention ho",
      ],
      [
        "Promoting products and relationships through internet-connected, measurable, two-way channels",
        "इंटरनेट-जुड़े, मापनीय, द्विमार्गी चैनलों से उत्पादों और संबंधों का प्रचार",
        "Internet-connected, measurable, two-way channels se products aur relationships promote karna",
      ],
      [
        "Printing extra catalogues so the sales team can travel less",
        "अतिरिक्त कैटलॉग छापना ताकि सेल्स टीम कम यात्रा करे",
        "Extra catalogues print karna taaki sales team kam travel kare",
      ],
      [
        "A one-way outdoor hoarding that cannot be changed for a year",
        "एकतरफ़ा आउटडोर होर्डिंग जिसे एक साल न बदला जा सके",
        "One-way outdoor hoarding jo ek saal na badli ja sake",
      ],
    ],
    1,
    [
      "Digital marketing uses connected channels that can be targeted, measured and answered. Mentioning a URL in a TV ad does not by itself make the campaign digital.",
      "डिजिटल मार्केटिंग जुड़े चैनल इस्तेमाल करती है जिन्हें टारगेट, मापा और जवाब दिया जा सकता है। TV विज्ञापन में URL लिखना अकेले कैंपेन को डिजिटल नहीं बनाता।",
      "Digital marketing connected channels use karti hai jo target, measure aur jawab diye ja sakte hain. TV ad mein URL likhna akele campaign ko digital nahi banata.",
    ],
  ),
  Q(
    "dm-vs-q1",
    "dm-vs",
    [
      "Compared with traditional mass media, a distinctive strength of digital marketing is:",
      "पारंपरिक मास मीडिया की तुलना में डिजिटल मार्केटिंग की विशिष्ट शक्ति है:",
      "Traditional mass media ki tulna mein digital marketing ki distinctive strength hai:",
    ],
    [
      ["It can never use video", "यह कभी वीडियो इस्तेमाल नहीं कर सकती", "Ye kabhi video use nahi kar sakti"],
      ["It is always more expensive per person reached", "पहुँचे प्रत्येक व्यक्ति पर यह हमेशा महँगी है", "Pahunche har person par ye hamesha mehengi hai"],
      ["Two-way communication and near real-time measurability", "द्विमार्गी संचार और लगभग रियल-टाइम मापनीयता", "Two-way communication aur almost real-time measurability"],
      ["It cannot target a city or language", "यह शहर या भाषा टारगेट नहीं कर सकती", "Ye city ya language target nahi kar sakti"],
    ],
    2,
    [
      "Traditional media is largely one-way and measured indirectly (GRP, recall). Digital allows comments/DMs and precise CTR, CPC and conversion data.",
      "पारंपरिक मीडिया अधिकांशतः एकतरफ़ा और अप्रत्यक्ष माप (GRP, रिकॉल) वाला है। डिजिटल कमेंट/DM तथा सटीक CTR, CPC व कन्वर्ज़न डेटा देता है।",
      "Traditional media mostly one-way aur indirect measure (GRP, recall) wali hai. Digital comments/DMs aur precise CTR, CPC, conversion data deta hai.",
    ],
  ),
  Q(
    "dm-evolution-q1",
    "dm-evolution",
    [
      "Web 1.0 digital marketing is best associated with:",
      "Web 1.0 डिजिटल मार्केटिंग सबसे अधिक जुड़ी है:",
      "Web 1.0 digital marketing sabse zyada judi hai:",
    ],
    [
      [
        "Static brochure websites, email blasts and banner ads with little user participation",
        "स्थिर ब्रोशर वेबसाइटें, ईमेल ब्लास्ट और बैनर विज्ञापन जिनमें यूज़र भागीदारी कम",
        "Static brochure websites, email blasts aur banner ads jisme user participation kam",
      ],
      ["Programmatic RTB and generative AI copy only", "केवल प्रोग्रामेटिक RTB और जनरेटिव AI कॉपी", "Sirf programmatic RTB aur generative AI copy"],
      ["Instagram Reels as the only channel", "केवल Instagram Reels चैनल", "Sirf Instagram Reels channel"],
      ["UPI collect requests inside games", "गेम के अंदर UPI कलेक्ट रिक्वेस्ट", "Games ke andar UPI collect requests"],
    ],
    0,
    [
      "Web 1.0 was read-only brochure publishing. Social UGC is Web 2.0; apps/mobile and AI/automation are later stages.",
      "Web 1.0 केवल पढ़ने योग्य ब्रोशर प्रकाशन था। सोशल UGC Web 2.0 है; ऐप/मोबाइल और AI/ऑटोमेशन बाद के चरण हैं।",
      "Web 1.0 read-only brochure publishing tha. Social UGC Web 2.0 hai; apps/mobile aur AI/automation baad ke stages hain.",
    ],
  ),
  Q(
    "dm-landscape-q1",
    "dm-landscape",
    [
      "Which driver most clearly explains why video and social became mass media for Indian digital marketing?",
      "कौन-सा चालक सबसे स्पष्ट समझाता है कि भारत में वीडियो और सोशल डिजिटल मार्केटिंग के मास मीडिया क्यों बने?",
      "Kaun-sa driver sabse clearly samjhata hai ki Bharat mein video aur social digital marketing ke mass media kyun bane?",
    ],
    [
      ["The decline of UPI", "UPI का पतन", "UPI ka decline"],
      ["A nationwide shift back to desktop-only browsing", "केवल डेस्कटॉप ब्राउज़िंग की राष्ट्रव्यापी वापसी", "Sirf desktop browsing ki nationwide wapsi"],
      ["A ban on regional-language content", "क्षेत्रीय-भाषा कंटेंट पर प्रतिबंध", "Regional-language content par ban"],
      [
        "Cheap mobile data (Jio-era) plus smartphone penetration",
        "सस्ता मोबाइल डेटा (Jio-युग) प्लस स्मार्टफोन पहुँच",
        "Sasta mobile data (Jio-era) plus smartphone penetration",
      ],
    ],
    3,
    [
      "Inexpensive 4G data and phones made streaming and social feeds affordable at population scale. UPI helps conversion, not the media habit itself.",
      "सस्ते 4G डेटा और फोन ने स्ट्रीमिंग व सोशल फ़ीड को जनसंख्या पैमाने पर सस्ता किया। UPI कन्वर्ज़न मदद करता है, मीडिया आदत स्वयं नहीं।",
      "Saste 4G data aur phones ne streaming aur social feeds ko population scale par affordable banaya. UPI conversion help karta hai, media habit khud nahi.",
    ],
  ),
  Q(
    "dm-consumers-q1",
    "dm-consumers",
    [
      "A typical digital consumer is most likely to:",
      "एक सामान्य डिजिटल उपभोक्ता सबसे अधिक संभावना से:",
      "Ek typical digital consumer sabse zyada possibility se:",
    ],
    [
      ["Never read reviews and buy only what a TV ad shows", "रिव्यू कभी न पढ़े और केवल TV विज्ञापन वाला उत्पाद खरीदे", "Reviews kabhi na padhe aur sirf TV ad wala product kharide"],
      [
        "Research online, use communities and reviews, then buy across devices",
        "ऑनलाइन शोध करे, समुदाय व रिव्यू इस्तेमाल करे, फिर डिवाइस पार कर खरीदे",
        "Online research kare, communities aur reviews use kare, phir devices across buy kare",
      ],
      ["Refuse to join any WhatsApp or Facebook group", "किसी WhatsApp या Facebook ग्रुप में शामिल होने से मना करे", "Kisi WhatsApp ya Facebook group mein join karne se mana kare"],
      ["Ignore price comparison because data is scarce", "कीमत तुलना नज़रअंदाज़ करे क्योंकि डेटा दुर्लभ है", "Price comparison ignore kare kyunki data durlabh hai"],
    ],
    1,
    [
      "Digital consumers use search, reviews and communities (ZMOT) and often complete journeys across phone and other devices.",
      "डिजिटल उपभोक्ता सर्च, रिव्यू और समुदाय (ZMOT) इस्तेमाल करते हैं और यात्रा अक्सर फोन व अन्य डिवाइस पर पूरी करते हैं।",
      "Digital consumers search, reviews aur communities (ZMOT) use karte hain aur journey aksar phone aur doosre devices par complete karte hain.",
    ],
  ),
  Q(
    "dm-geny-q1",
    "dm-geny",
    [
      "Gen Y / netizen expectations imply that brands should mainly:",
      "Gen Y / नेटीज़न अपेक्षाओं का निहितार्थ है कि ब्रांड मुख्यतः:",
      "Gen Y / netizen expectations ka matlab hai brands mainly:",
    ],
    [
      [
        "Reply fast, stay mobile-first, sound authentic and invite dialogue",
        "तेज़ जवाब दें, मोबाइल-फर्स्ट रहें, प्रामाणिक लगें और संवाद आमंत्रित करें",
        "Tez jawab den, mobile-first rahen, authentic lagen aur dialogue invite karen",
      ],
      ["Use only printed brochures with no website", "केवल छपे ब्रोशर, बिना वेबसाइट", "Sirf printed brochures, bina website"],
      ["Avoid social proof such as reviews", "रिव्यू जैसे सोशल प्रूफ़ से बचें", "Reviews jaise social proof se bachen"],
      ["Maximise hard-sell pop-ups and ignore DMs", "कठोर-बिक्री पॉप-अप अधिकतम करें और DM नज़रअंदाज़ करें", "Hard-sell pop-ups max karein aur DMs ignore karein"],
    ],
    0,
    [
      "Netizens expect speed, authenticity, mobile experiences and two-way service—not monologue hard-sell.",
      "नेटीज़न गति, प्रामाणिकता, मोबाइल अनुभव और द्विमार्गी सेवा चाहते हैं—एकालाप कठोर बिक्री नहीं।",
      "Netizens speed, authenticity, mobile experiences aur two-way service chahte hain—monologue hard-sell nahi.",
    ],
  ),
  Q(
    "dm-india-users-q1",
    "dm-india-users",
    [
      "Indian digital users are best characterised as:",
      "भारतीय डिजिटल उपयोगकर्ता सबसे अच्छा चित्रण:",
      "Bharatiya digital users ka sabse accha characterisation:",
    ],
    [
      ["Desktop-first and English-only in every district", "हर ज़िले में डेस्कटॉप-फर्स्ट और केवल अंग्रेज़ी", "Har district mein desktop-first aur sirf English"],
      ["Uninterested in video after the Jio era", "Jio युग के बाद वीडियो में अरुचि", "Jio era ke baad video mein aruchi"],
      [
        "Mobile-first, increasingly vernacular, with a metro versus Bharat split",
        "मोबाइल-फर्स्ट, बढ़ते वर्नाक्युलर, मेट्रो बनाम भारत विभाजन के साथ",
        "Mobile-first, badhta vernacular, metro vs Bharat split ke saath",
      ],
      ["Reached only through magazine inserts", "केवल पत्रिका इंसर्ट से पहुँचाए जाते हैं", "Sirf magazine inserts se pahunchaye jaate hain"],
    ],
    2,
    [
      "Post-Jio India is a smartphone internet: Hindi/regional video and chat dominate, and Bharat users differ from metros in language, trust and payments mix.",
      "Jio के बाद भारत स्मार्टफोन इंटरनेट है: हिंदी/क्षेत्रीय वीडियो व चैट हावी, और भारत उपयोगकर्ता भाषा, विश्वास व भुगतान मिश्रण में मेट्रो से भिन्न हैं।",
      "Jio ke baad Bharat smartphone internet hai: Hindi/regional video aur chat dominate, aur Bharat users language, trust, payments mix mein metros se alag hain.",
    ],
  ),
  Q(
    "dm-india-ads-q1",
    "dm-india-ads",
    [
      "The largest share of India’s digital ad spend is widely associated with:",
      "भारत के डिजिटल विज्ञापन खर्च का सबसे बड़ा हिस्सा व्यापक रूप से जुड़ा है:",
      "Bharat ke digital ad spend ka sabse bada hissa widely associated hai:",
    ],
    [
      ["Only printed Yellow Pages", "केवल छपे Yellow Pages", "Sirf printed Yellow Pages"],
      ["Google (Search/YouTube) and Meta (Facebook/Instagram) platforms", "Google (Search/YouTube) और Meta (Facebook/Instagram) प्लेटफ़ॉर्म", "Google (Search/YouTube) aur Meta (Facebook/Instagram) platforms"],
      ["FM radio exclusively", "केवल FM रेडियो", "Sirf FM radio"],
      ["Cinema slides in a single multiplex chain", "एक मल्टीप्लेक्स श्रृंखला की सिनेमा स्लाइड", "Ek multiplex chain ki cinema slides"],
    ],
    1,
    [
      "Search + YouTube (Google) and social (Meta) take the majority. OTT such as Hotstar and vernacular/e-commerce ads are important growth slices, not the historic lion’s share.",
      "Search + YouTube (Google) और सोशल (Meta) बहुमत लेते हैं। Hotstar जैसे OTT व वर्नाक्युलर/ई-कॉमर्स विज्ञापन महत्वपूर्ण वृद्धि हिस्से हैं, ऐतिहासिक शेर-हिस्सा नहीं।",
      "Search + YouTube (Google) aur social (Meta) majority lete hain. Hotstar jaise OTT aur vernacular/e-commerce ads important growth slices hain, historic lion’s share nahi.",
    ],
  ),
  Q(
    "dm-strategy-q1",
    "dm-strategy",
    [
      "A digital marketing strategy should start with:",
      "डिजिटल मार्केटिंग रणनीति शुरू होनी चाहिए:",
      "Digital marketing strategy shuru honi chahiye:",
    ],
    [
      ["Business objectives and a defined audience, then channels, budget and KPIs", "व्यावसायिक उद्देश्यों व परिभाषित ऑडियंस से, फिर चैनल, बजट और KPI", "Business objectives aur defined audience se, phir channels, budget aur KPIs"],
      ["Buying the trendiest platform first and inventing a goal later", "पहले सबसे ट्रेंडी प्लेटफ़ॉर्म खरीदना और लक्ष्य बाद में गढ़ना", "Pehle sabse trendy platform kharidna aur goal baad mein gadhna"],
      ["Maximising vanity likes regardless of sales", "बिक्री न देखते हुए दिखावटी लाइक अधिकतम करना", "Sales na dekhte hue vanity likes max karna"],
      ["Ignoring measurement until the financial year ends", "वित्तीय वर्ष अंत तक मापन नज़रअंदाज़ करना", "Financial year end tak measurement ignore karna"],
    ],
    0,
    [
      "Channels follow objectives and audience. KPIs must match the job (reach for awareness, CPA/ROAS for conversion).",
      "चैनल उद्देश्यों व ऑडियंस के बाद आते हैं। KPI कार्य से मेल खाने चाहिए (जागरूकता के लिए पहुँच, कन्वर्ज़न के लिए CPA/ROAS)।",
      "Channels objectives aur audience ke baad aate hain. KPIs job se match karein (awareness ke liye reach, conversion ke liye CPA/ROAS).",
    ],
  ),
  Q(
    "dm-cdj-q1",
    "dm-cdj",
    [
      "In McKinsey’s Consumer Decision Journey, what follows the Buy stage?",
      "McKinsey की Consumer Decision Journey में Buy चरण के बाद क्या आता है?",
      "McKinsey ki Consumer Decision Journey mein Buy stage ke baad kya aata hai?",
    ],
    [
      ["The journey ends permanently at the cash counter", "यात्रा कैश काउंटर पर स्थायी रूप से खत्म", "Journey cash counter par permanently khatam"],
      ["Only a new TV burst campaign", "केवल नया TV बर्स्ट कैंपेन", "Sirf naya TV burst campaign"],
      ["A mandatory return to newspaper classifieds", "अखबार क्लासिफाइड की अनिवार्य वापसी", "Newspaper classifieds ki mandatory wapsi"],
      ["Enjoy, advocate and bond (the loyalty loop)", "एन्जॉय, एडवोकेट और बॉन्ड (लॉयल्टी लूप)", "Enjoy, advocate aur bond (loyalty loop)"],
    ],
    3,
    [
      "CDJ is circular: after purchase, enjoy/advocate/bond can skip long evaluation next time. The old funnel treated purchase as the end.",
      "CDJ वृत्ताकार है: खरीद के बाद एन्जॉय/एडवोकेट/बॉन्ड अगली बार लंबा मूल्यांकन छोड़ सकते हैं। पुराना फ़नल खरीद को अंत मानता था।",
      "CDJ circular hai: purchase ke baad enjoy/advocate/bond agli baar lamba evaluation skip kar sakte hain. Purana funnel purchase ko end maanta tha.",
    ],
  ),
  Q(
    "dm-poem-q1",
    "dm-poem",
    [
      "Which of the following is earned media in the POEM framework?",
      "POEM फ़्रेमवर्क में निम्नलिखित में से कौन earned media है?",
      "POEM framework mein inme se kaun earned media hai?",
    ],
    [
      ["A Google Ads text ad you paid for", "आपका भुगतान किया Google Ads टेक्स्ट विज्ञापन", "Aapka pay kiya Google Ads text ad"],
      ["Your brand’s official website", "आपकी ब्रांड की आधिकारिक वेबसाइट", "Aapke brand ki official website"],
      ["A customer review that is shared on social media without paid promotion", "बिना पेड प्रमोशन सोशल मीडिया पर साझा ग्राहक रिव्यू", "Bina paid promotion social media par share kiya customer review"],
      ["Your email newsletter list", "आपकी ईमेल न्यूज़लेटर सूची", "Aapki email newsletter list"],
    ],
    2,
    [
      "Earned is unpaid attention from others (reviews, shares, PR). Ads are paid; site and email list are owned.",
      "Earned दूसरों से बिना भुगतान का ध्यान है (रिव्यू, शेयर, PR)। विज्ञापन paid हैं; साइट व ईमेल लिस्ट owned हैं।",
      "Earned doosron se unpaid attention hai (reviews, shares, PR). Ads paid hain; site aur email list owned hain.",
    ],
  ),
  Q(
    "dm-segment-q1",
    "dm-segment",
    [
      "Message customisation in digital marketing means:",
      "डिजिटल मार्केटिंग में संदेश अनुकूलन का अर्थ है:",
      "Digital marketing mein message customisation ka matlab hai:",
    ],
    [
      ["Showing one identical ad to every human on earth", "पृथ्वी के प्रत्येक इंसान को एक समान विज्ञापन", "Dharti ke har insaan ko ek saman ad"],
      ["Changing language, offer or creative by segment so relevance rises", "सेगमेंट के अनुसार भाषा, ऑफ़र या क्रिएटिव बदलना ताकि प्रासंगिकता उठे", "Segment ke hisaab se language, offer ya creative badalna taaki relevance uthe"],
      ["Deleting analytics so nobody can measure waste", "एनालिटिक्स मिटाना ताकि बर्बादी न मापी जाए", "Analytics mitana taaki wastage na napi jaaye"],
      ["Using only outdoor hoardings for Gen Y", "Gen Y के लिए केवल आउटडोर होर्डिंग", "Gen Y ke liye sirf outdoor hoardings"],
    ],
    1,
    [
      "Segmentation exists so the promise, proof and language match the group. Digital makes this cheap via targeting and dynamic creative.",
      "सेगमेंटेशन इसलिए है कि वादा, प्रमाण और भाषा समूह से मेल खाएँ। डिजिटल टारगेटिंग व डायनामिक क्रिएटिव से इसे सस्ता करता है।",
      "Segmentation isliye hai ki promise, proof aur language group se match karein. Digital targeting aur dynamic creative se ise sasta karta hai.",
    ],
  ),
  Q(
    "dm-plan-q1",
    "dm-plan",
    [
      "SMART in a digital marketing plan stands for:",
      "डिजिटल मार्केटिंग प्लान में SMART का अर्थ है:",
      "Digital marketing plan mein SMART ka matlab hai:",
    ],
    [
      [
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Specific, Measurable, Achievable, Relevant, Time-bound",
      ],
      ["Social, Mobile, Ads, Radio, TV", "Social, Mobile, Ads, Radio, TV", "Social, Mobile, Ads, Radio, TV"],
      ["Spend Money And Run Tests", "Spend Money And Run Tests", "Spend Money And Run Tests"],
      ["Search, Meta, Affiliate, RTB, Telegram", "Search, Meta, Affiliate, RTB, Telegram", "Search, Meta, Affiliate, RTB, Telegram"],
    ],
    0,
    [
      "SMART goals are Specific, Measurable, Achievable, Relevant and Time-bound—e.g. 300 leads in 90 days at CPA under ₹400. The plan then adds audit, calendar and measurement.",
      "SMART लक्ष्य Specific, Measurable, Achievable, Relevant और Time-bound हैं—जैसे 90 दिन में CPA ₹400 से कम पर 300 लीड। प्लान फिर ऑडिट, कैलेंडर व मापन जोड़ता है।",
      "SMART goals Specific, Measurable, Achievable, Relevant aur Time-bound hain—jaise 90 din mein CPA ₹400 se kam par 300 leads. Plan phir audit, calendar aur measurement jodta hai.",
    ],
  ),
  Q(
    "dm-terms-q1",
    "dm-terms",
    [
      "CTR is calculated as:",
      "CTR निकाला जाता है:",
      "CTR nikala jata hai:",
    ],
    [
      ["Spend ÷ conversions", "खर्च ÷ कन्वर्ज़न", "Spend ÷ conversions"],
      ["Impressions ÷ reach", "इंप्रेशन ÷ पहुँच", "Impressions ÷ reach"],
      ["(Clicks ÷ impressions) × 100", "(क्लिक्स ÷ इंप्रेशन) × 100", "(Clicks ÷ impressions) × 100"],
      ["Revenue ÷ ad spend", "आय ÷ विज्ञापन खर्च", "Revenue ÷ ad spend"],
    ],
    2,
    [
      "CTR is clicks divided by impressions (×100 for a percentage). Spend ÷ conversions is CPA; revenue ÷ ad spend is ROAS; impressions ÷ reach is frequency.",
      "CTR क्लिक विभाजित इंप्रेशन है (प्रतिशत के लिए ×100)। खर्च ÷ कन्वर्ज़न CPA है; आय ÷ विज्ञापन खर्च ROAS है; इंप्रेशन ÷ पहुँच फ़्रीक्वेंसी है।",
      "CTR clicks divided by impressions hai (percentage ke liye ×100). Spend ÷ conversions CPA hai; revenue ÷ ad spend ROAS hai; impressions ÷ reach frequency hai.",
    ],
  ),
  Q(
    "dm-seo-q1",
    "dm-seo",
    [
      "Earning relevant backlinks from other websites is primarily:",
      "अन्य वेबसाइटों से प्रासंगिक बैकलिंक कमाना मुख्यतः है:",
      "Doosri websites se relevant backlinks kamaana mainly hai:",
    ],
    [
      ["A Core Web Vital named CLS", "CLS नाम का Core Web Vital", "CLS naam ka Core Web Vital"],
      ["Off-page SEO", "ऑफ-पेज SEO", "Off-page SEO"],
      ["A paid search match type", "एक पेड सर्च मैच टाइप", "Ek paid search match type"],
      ["An email authentication record (SPF)", "एक ईमेल प्रमाणीकरण रिकॉर्ड (SPF)", "Ek email authentication record (SPF)"],
    ],
    1,
    [
      "Backlinks and mentions are off-page signals. On-page is titles/content; technical is crawl/speed/HTTPS; CLS is a Core Web Vital for visual stability.",
      "बैकलिंक व उल्लेख ऑफ-पेज संकेत हैं। ऑन-पेज टाइटल/कंटेंट है; टेक्निकल क्रॉल/स्पीड/HTTPS है; CLS विज़ुअल स्थिरता का Core Web Vital है।",
      "Backlinks aur mentions off-page signals hain. On-page titles/content hai; technical crawl/speed/HTTPS hai; CLS visual stability ka Core Web Vital hai.",
    ],
  ),
  Q(
    "dm-webmaster-q1",
    "dm-webmaster",
    [
      "Google Search Console is the better tool if you need to know:",
      "Google Search Console बेहतर टूल है यदि आपको जानना हो:",
      "Google Search Console better tool hai agar aapko jaanna ho:",
    ],
    [
      ["Which Google search queries showed your pages, and whether a URL is indexed", "कौन-सी Google सर्च क्वेरी ने आपके पेज दिखाए, और URL इंडेक्स है या नहीं", "Kaun-si Google search queries ne aapke pages dikhaye, aur URL index hai ya nahi"],
      ["The exact path a user took through a 12-step checkout funnel only", "केवल 12-चरण चेकआउट फ़नल में यूज़र का सटीक पथ", "Sirf 12-step checkout funnel mein user ka exact path"],
      ["How to buy Facebook lookalike audiences", "Facebook लुकअलाइक ऑडियंस कैसे खरीदें", "Facebook lookalike audiences kaise khariden"],
      ["Your CPA on a Meta catalogue campaign", "Meta कैटलॉग कैंपेन पर आपका CPA", "Meta catalogue campaign par aapka CPA"],
    ],
    0,
    [
      "GSC (Webmaster) reports queries, clicks, index coverage and sitemaps from Google Search’s point of view. On-site funnels live in Analytics; paid social lives in Ads Manager.",
      "GSC (Webmaster) Google Search के नज़रिए से क्वेरी, क्लिक, इंडेक्स कवरेज व साइटमैप बताता है। ऑन-साइट फ़नल Analytics में हैं; पेड सोशल Ads Manager में।",
      "GSC (Webmaster) Google Search ke nazariye se queries, clicks, index coverage aur sitemaps batata hai. On-site funnels Analytics mein hain; paid social Ads Manager mein.",
    ],
  ),
  Q(
    "dm-ppc-q1",
    "dm-ppc",
    [
      "In classic PPC on Google Search, the advertiser is charged primarily:",
      "Google Search पर क्लासिक PPC में विज्ञापनदाता से मुख्यतः शुल्क तब:",
      "Google Search par classic PPC mein advertiser se mainly charge tab:",
    ],
    [
      ["When a billboard is printed", "जब होर्डिंग छपती है", "Jab hoarding chhapti hai"],
      ["Only once a year regardless of clicks", "क्लिक चाहे जितने हों, वर्ष में एक बार", "Clicks chahe jitne hon, saal mein ek baar"],
      ["Whenever a crawler indexes the homepage", "जब क्रॉलर होमपेज इंडेक्स करे", "Jab crawler homepage index kare"],
      ["When a user clicks the ad (the auction also uses Quality Score / Ad Rank)", "जब यूज़र विज्ञापन क्लिक करे (नीलामी Quality Score / Ad Rank भी इस्तेमाल करती है)", "Jab user ad click kare (auction Quality Score / Ad Rank bhi use karti hai)"],
    ],
    3,
    [
      "PPC means you pay per click. Who appears is decided by Ad Rank (bid × Quality Score and related factors), not bid alone.",
      "PPC का अर्थ प्रति क्लिक भुगतान है। कौन दिखे Ad Rank (बोली × Quality Score व संबंधित कारक) तय करता है, केवल बोली नहीं।",
      "PPC ka matlab per click pay. Kaun dikhe Ad Rank (bid × Quality Score aur related factors) decide karta hai, sirf bid nahi.",
    ],
  ),
  Q(
    "dm-smm-q1",
    "dm-smm",
    [
      "Content pillars in social media marketing are:",
      "सोशल मीडिया मार्केटिंग में कंटेंट पिलर हैं:",
      "Social media marketing mein content pillars hain:",
    ],
    [
      [
        "Recurring themes (e.g. educate, entertain, convert) that keep the calendar consistent",
        "आवर्ती थीम (जैसे शिक्षित, मनोरंजन, कन्वर्ट) जो कैलेंडर को सुसंगत रखती हैं",
        "Recurring themes (jaise educate, entertain, convert) jo calendar ko consistent rakhti hain",
      ],
      ["Physical pillars used to hang printed posters", "छपे पोस्टर लटकाने के भौतिक स्तंभ", "Printed posters latkane ke physical pillars"],
      ["A Google Ads match type", "एक Google Ads मैच टाइप", "Ek Google Ads match type"],
      ["The same as Core Web Vitals", "Core Web Vitals के समान", "Core Web Vitals ke saman"],
    ],
    0,
    [
      "Pillars are planned content themes so the feed is not only random offers. They sit beside platform choice and community management.",
      "पिलर योजनाबद्ध कंटेंट थीम हैं ताकि फ़ीड केवल रैंडम ऑफ़र न हो। वे प्लेटफ़ॉर्म चुनाव व कम्युनिटी प्रबंधन के साथ बैठते हैं।",
      "Pillars planned content themes hain taaki feed sirf random offers na ho. Ye platform choice aur community management ke saath baithte hain.",
    ],
  ),
  Q(
    "dm-keyword-q1",
    "dm-keyword",
    [
      "Which keyword match type gives the tightest control over which queries can trigger the ad?",
      "कौन-सा कीवर्ड मैच टाइप इस पर सबसे कसा नियंत्रण देता है कि कौन-सी क्वेरी विज्ञापन ट्रिगर कर सकती है?",
      "Kaun-sa keyword match type is par sabse tight control deta hai ki kaun-si query ad trigger kar sakti hai?",
    ],
    [
      ["Broad match", "ब्रॉड मैच", "Broad match"],
      ["Open match (not a Google Ads type)", "ओपन मैच (Google Ads प्रकार नहीं)", "Open match (Google Ads type nahi)"],
      ["Exact match", "एग्ज़ैक्ट मैच", "Exact match"],
      ["Billboard match", "बिलबोर्ड मैच", "Billboard match"],
    ],
    2,
    [
      "Exact match is the most restrictive (close variants may still apply). Broad is widest; negatives block waste. ‘Open’ and ‘billboard’ are not match types.",
      "एग्ज़ैक्ट मैच सबसे प्रतिबंधक है (क्लोज़ वेरिएंट अभी लागू हो सकते हैं)। ब्रॉड सबसे चौड़ा; नेगेटिव बर्बादी रोकते हैं। ‘ओपन’ और ‘बिलबोर्ड’ मैच टाइप नहीं।",
      "Exact match sabse restrictive hai (close variants ab bhi lag sakte hain). Broad sabse chauda; negatives wastage rok te hain. ‘Open’ aur ‘billboard’ match types nahi.",
    ],
  ),
  Q(
    "dm-affiliate-q1",
    "dm-affiliate",
    [
      "In affiliate marketing, CPA usually means the publisher is paid:",
      "अफ़िलिएट मार्केटिंग में CPA का आमतौर पर अर्थ है पब्लिशर को भुगतान:",
      "Affiliate marketing mein CPA ka usually matlab publisher ko pay:",
    ],
    [
      ["When a referred visitor completes a sale or other qualified acquisition", "जब रेफ़र विज़िटर बिक्री या अन्य योग्य अधिग्रहण पूरा करे", "Jab referred visitor sale ya doosra qualified acquisition complete kare"],
      ["Whenever the advertiser prints a brochure", "जब भी विज्ञापनदाता ब्रोशर छापे", "Jab bhi advertiser brochure chhape"],
      ["Only for brand mentions with no tracking link", "केवल बिना ट्रैकिंग लिंक ब्रांड उल्लेख पर", "Sirf bina tracking link brand mentions par"],
      ["Once, when the website is registered", "एक बार, जब वेबसाइट रजिस्टर हो", "Ek baar, jab website register ho"],
    ],
    0,
    [
      "CPA/CPS pays on a completed acquisition. CPL pays on a lead; CPC on a click. Tracking links/cookies attribute the action to the publisher.",
      "CPA/CPS पूर्ण अधिग्रहण पर भुगतान करता है। CPL लीड पर; CPC क्लिक पर। ट्रैकिंग लिंक/कुकी क्रिया को पब्लिशर से जोड़ते हैं।",
      "CPA/CPS complete acquisition par pay karta hai. CPL lead par; CPC click par. Tracking links/cookies action ko publisher se jodte hain.",
    ],
  ),
  Q(
    "dm-email-q1",
    "dm-email",
    [
      "The foundation of ethical, high-ROI email marketing is:",
      "नैतिक, उच्च-ROI ईमेल मार्केटिंग की नींव है:",
      "Ethical, high-ROI email marketing ki neenv hai:",
    ],
    [
      ["Scraping inboxes and buying leftover CD databases", "इनबॉक्स स्क्रैप कर बचे CD डेटाबेस खरीदना", "Inboxes scrape karke bache CD databases kharidna"],
      ["Sending only to people who gave permission (opt-in) and honouring unsubscribe", "केवल अनुमति देने वालों को भेजना (ऑप्ट-इन) और अनसब्सक्राइब का सम्मान", "Sirf permission dene walon ko bhejna (opt-in) aur unsubscribe honour karna"],
      ["Forging From: addresses to pass spam filters", "स्पैम फ़िल्टर पार करने From: पता नकली बनाना", "Spam filters paar karne From: address nakli banana"],
      ["Never authenticating SPF/DKIM because it slows sending", "SPF/DKIM कभी प्रमाणित न करना क्योंकि भेजना धीमा होता है", "SPF/DKIM kabhi authenticate na karna kyunki sending slow hoti hai"],
    ],
    1,
    [
      "Permission is the rule: opt-in lists plus unsubscribe. Bought/scraped lists destroy deliverability. SPF/DKIM/DMARC help inbox placement.",
      "अनुमति नियम है: ऑप्ट-इन सूची प्लस अनसब्सक्राइब। खरीदी/स्क्रैप लिस्ट डिलिवरेबिलिटी तोड़ती हैं। SPF/DKIM/DMARC इनबॉक्स पहुँच मदद करते हैं।",
      "Permission rule hai: opt-in list plus unsubscribe. Bought/scraped lists deliverability todti hain. SPF/DKIM/DMARC inbox placement help karte hain.",
    ],
  ),
  Q(
    "dm-mobile-q1",
    "dm-mobile",
    [
      "Responsive design in mobile marketing means:",
      "मोबाइल मार्केटिंग में रेस्पॉन्सिव डिज़ाइन का अर्थ है:",
      "Mobile marketing mein responsive design ka matlab hai:",
    ],
    [
      ["Printing a separate newspaper for each city", "प्रत्येक शहर के लिए अलग अखबार छापना", "Har city ke liye alag newspaper print karna"],
      ["Using only SMS and never a website", "केवल SMS, कभी वेबसाइट नहीं", "Sirf SMS, kabhi website nahi"],
      ["Fixing the layout at 1920 pixels wide for all phones", "सभी फोन के लिए लेआउट 1920 पिक्सेल चौड़ा फिक्स करना", "Sab phones ke liye layout 1920 pixels chauda fix karna"],
      ["The layout reflows to different screen sizes so tap targets and type remain usable", "लेआउट विभिन्न स्क्रीन आकारों पर ढलता है ताकि टैप टारगेट व टाइप उपयोगी रहें", "Layout alag screen sizes par dhalta hai taaki tap targets aur type usable rahen"],
    ],
    3,
    [
      "Responsive sites use flexible layouts for phones and desktops. That is required for mobile-first indexing and for ads that land on mobile web.",
      "रेस्पॉन्सिव साइटें फोन व डेस्कटॉप के लिए लचीला लेआउट इस्तेमाल करती हैं। मोबाइल-फर्स्ट इंडेक्सिंग और मोबाइल वेब पर गिरने वाले विज्ञापनों के लिए यह आवश्यक है।",
      "Responsive sites phones aur desktops ke liye flexible layout use karti hain. Mobile-first indexing aur mobile web par land karne wale ads ke liye ye zaroori hai.",
    ],
  ),
  Q(
    "dm-display-q1",
    "dm-display",
    [
      "Display advertising primarily refers to:",
      "डिस्प्ले विज्ञापन मुख्यतः संदर्भित करता है:",
      "Display advertising mainly refer karta hai:",
    ],
    [
      ["Visual ads (banners, rich media, video, native) on websites and apps", "वेबसाइटों व ऐप पर दृश्य विज्ञापन (बैनर, रिच मीडिया, वीडियो, नेटिव)", "Websites aur apps par visual ads (banners, rich media, video, native)"],
      ["A radio jingle with no visual", "बिना दृश्य का रेडियो जिंगल", "Bina visual ka radio jingle"],
      ["Organic SEO title tags only", "केवल ऑर्गेनिक SEO टाइटल टैग", "Sirf organic SEO title tags"],
      ["The text of a Google search query the user typed", "यूज़र द्वारा टाइप Google सर्च क्वेरी का पाठ", "User dwara type Google search query ka text"],
    ],
    0,
    [
      "Display is visual inventory on sites/apps/players, used for branding and remarketing. Search text ads are a different format.",
      "डिस्प्ले साइट/ऐप/प्लेयर पर दृश्य इन्वेंटरी है, ब्रांडिंग व रीमारकेटिंग के लिए। सर्च टेक्स्ट विज्ञापन अलग फ़ॉर्मेट हैं।",
      "Display sites/apps/players par visual inventory hai, branding aur remarketing ke liye. Search text ads alag format hain.",
    ],
  ),
  Q(
    "dm-formats-q1",
    "dm-formats",
    [
      "A native display ad is designed to:",
      "नेटिव डिस्प्ले विज्ञापन डिज़ाइन किया जाता है:",
      "Native display ad design kiya jata hai:",
    ],
    [
      ["Look like a system crash warning so people click in panic", "सिस्टम क्रैश चेतावनी जैसा दिखे ताकि लोग घबरा कर क्लिक करें", "System crash warning jaisa dikhe taaki log ghabra kar click karein"],
      ["Use only 728×90 and never appear in a feed", "केवल 728×90 इस्तेमाल करे और फ़ीड में कभी न आए", "Sirf 728×90 use kare aur feed mein kabhi na aaye"],
      ["Match the surrounding content’s look while remaining labelled as advertising", "आसपास के कंटेंट के रूप से मेल खाए पर विज्ञापन के रूप में लेबल रहे", "Surrounding content ke look se match kare par advertising ke roop mein labelled rahe"],
      ["Replace the need for any disclosure", "किसी भी डिस्क्लोज़र की ज़रूरत हटा दे", "Kisi bhi disclosure ki zaroorat hata de"],
    ],
    2,
    [
      "Native matches feed/widget styling so it is less interruptive, but it must still be disclosed as an ad. Deceptive formats are unethical and often illegal.",
      "नेटिव फ़ीड/विजेट स्टाइल से मेल खाता है ताकि कम व्यवधान हो, पर विज्ञापन के रूप में बताना ज़रूरी है। धोखेबाज फ़ॉर्मेट अनैतिक और अक्सर अवैध हैं।",
      "Native feed/widget styling se match karta hai taaki kam interruptive ho, par ad ke roop mein disclose karna zaroori hai. Deceptive formats unethical aur aksar illegal hain.",
    ],
  ),
  Q(
    "dm-placement-q1",
    "dm-placement",
    [
      "‘Above the fold’ placement means the ad is:",
      "‘अबाव द फोल्ड’ प्लेसमेंट का अर्थ है विज्ञापन:",
      "‘Above the fold’ placement ka matlab ad:",
    ],
    [
      ["Hidden in the footer CSS so crawlers cannot see it", "फ़ुटर CSS में छिपा ताकि क्रॉलर न देखें", "Footer CSS mein chhipa taaki crawlers na dekhen"],
      ["Visible on the first screen without scrolling", "बिना स्क्रॉल पहली स्क्रीन पर दिखाई", "Bina scroll pehli screen par dikhai"],
      ["Always inside a printed newspaper fold only", "हमेशा केवल छपे अखबार की तह में", "Hamesha sirf printed newspaper ki fold mein"],
      ["Restricted to SMS short codes", "केवल SMS शॉर्ट कोड तक सीमित", "Sirf SMS short codes tak seemit"],
    ],
    1,
    [
      "Above the fold is the first viewport—no scroll. It usually has higher viewability (and price) than below-the-fold slots.",
      "अबाव द फोल्ड पहली व्यूपोर्ट है—स्क्रॉल नहीं। आमतौर पर बिलो-द-फोल्ड से अधिक व्यूएबिलिटी (और कीमत) होती है।",
      "Above the fold pehli viewport hai—scroll nahi. Usually below-the-fold se higher viewability (aur price) hoti hai.",
    ],
  ),
  Q(
    "dm-buying-q1",
    "dm-buying",
    [
      "CPM means the advertiser pays:",
      "CPM का अर्थ है विज्ञापनदाता भुगतान करता है:",
      "CPM ka matlab advertiser pay karta hai:",
    ],
    [
      ["Per one thousand impressions", "प्रति एक हज़ार इंप्रेशन", "Prati ek hazaar impressions"],
      ["Only when a sale is tracked, never for views", "केवल ट्रैक बिक्री पर, व्यू के लिए कभी नहीं", "Sirf tracked sale par, views ke liye kabhi nahi"],
      ["A flat annual salary to every publisher staff member", "प्रत्येक पब्लिशर कर्मचारी को वार्षिक वेतन", "Har publisher staff ko annual salary"],
      ["Per completed phone call exclusively", "केवल पूर्ण फोन कॉल पर", "Sirf complete phone call par"],
    ],
    0,
    [
      "CPM is cost per mille (1,000 impressions). vCPM counts viewable impressions; CPC is per click; CPA is per conversion; flat is a reserved slot price.",
      "CPM प्रति मिले (1,000 इंप्रेशन) लागत है। vCPM व्यूएबल इंप्रेशन गिनता है; CPC प्रति क्लिक; CPA प्रति कन्वर्ज़न; फ़्लैट आरक्षित स्लॉट कीमत है।",
      "CPM cost per mille (1,000 impressions) hai. vCPM viewable impressions ginta hai; CPC per click; CPA per conversion; flat reserved slot price hai.",
    ],
  ),
  Q(
    "dm-tools-q1",
    "dm-tools",
    [
      "To run and report ads on Facebook and Instagram, the usual tool is:",
      "Facebook और Instagram पर विज्ञापन चलाने व रिपोर्ट करने का सामान्य टूल है:",
      "Facebook aur Instagram par ads chalaane aur report karne ka usual tool hai:",
    ],
    [
      ["Google Search Console only", "केवल Google Search Console", "Sirf Google Search Console"],
      ["A newspaper insertion order with no digital login", "बिना डिजिटल लॉगिन अखबार insertion order", "Bina digital login newspaper insertion order"],
      ["Meta Ads Manager", "Meta Ads Manager", "Meta Ads Manager"],
      ["robots.txt", "robots.txt", "robots.txt"],
    ],
    2,
    [
      "Meta Ads Manager is the buying/reporting UI for Facebook/Instagram. GSC is search health; robots.txt guides crawlers; Google Ads is Google inventory.",
      "Meta Ads Manager Facebook/Instagram का खरीद/रिपोर्ट UI है। GSC सर्च स्वास्थ्य है; robots.txt क्रॉलर गाइड करता है; Google Ads Google इन्वेंटरी है।",
      "Meta Ads Manager Facebook/Instagram ka buying/reporting UI hai. GSC search health hai; robots.txt crawlers guide karta hai; Google Ads Google inventory hai.",
    ],
  ),
  Q(
    "dm-programmatic-q1",
    "dm-programmatic",
    [
      "In programmatic advertising, the DSP is used by:",
      "प्रोग्रामेटिक विज्ञापन में DSP इस्तेमाल होता है:",
      "Programmatic advertising mein DSP use hota hai:",
    ],
    [
      ["Publishers only, to print physical banners", "केवल पब्लिशर, भौतिक बैनर छापने के लिए", "Sirf publishers, physical banners print karne ke liye"],
      ["Advertisers (demand) to buy impressions across exchanges in automated auctions", "विज्ञापनदाता (डिमांड) स्वचालित नीलामी में एक्सचेंज पर इंप्रेशन खरीदने के लिए", "Advertisers (demand) automated auctions mein exchanges par impressions kharidne ke liye"],
      ["Telecom firms to issue SIM cards", "टेलीकॉम फर्म SIM जारी करने के लिए", "Telecom firms SIM issue karne ke liye"],
      ["Users to block all cookies from their fridge", "यूज़र अपने फ्रिज से सारी कुकी ब्लॉक करने के लिए", "Users apne fridge se saari cookies block karne ke liye"],
    ],
    1,
    [
      "DSP = demand-side (advertiser) buying tool. SSP = supply-side (publisher) selling tool. They meet in an ad exchange; RTB auctions often complete in ~100 ms.",
      "DSP = डिमांड-साइड (विज्ञापनदाता) खरीद टूल। SSP = सप्लाई-साइड (पब्लिशर) बिक्री टूल। वे ऐड एक्सचेंज में मिलते हैं; RTB नीलामी अक्सर ~100 ms में पूरी होती है।",
      "DSP = demand-side (advertiser) buying tool. SSP = supply-side (publisher) selling tool. Woh ad exchange mein milte hain; RTB auctions aksar ~100 ms mein complete hoti hain.",
    ],
  ),
];
