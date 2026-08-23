import { C, D, EXAM, H, NOTE, OL, P, Q, TBL, topic, UL } from "./blocks";
import type { QuizQuestion, TopicNotes } from "../types";

export const seNotes: Record<string, TopicNotes> = {
  "se-evolving-role": topic("se-evolving-role", [
    P(
      "Software Engineering treats software as an engineered product, not as an ad-hoc programming exercise. Over six decades the role of software has shifted from a supporting tool for hardware to the principal driver of business, government, science, and everyday life. Pressman describes a dual role: software is both a product (information transformer that delivers computing potential) and a vehicle for delivering the product (operating systems, networks, and tools that enable other software). Understanding this evolving role is the starting point of any BCA course because it explains why we need process, quality, and project management rather than mere coding.",
      "सॉफ्टवेयर इंजीनियरिंग सॉफ्टवेयर को एक इंजीनियर उत्पाद मानती है, न कि केवल ad-hoc प्रोग्रामिंग। छह दशकों में सॉफ्टवेयर की भूमिका हार्डवेयर के सहायक उपकरण से बढ़कर व्यवसाय, सरकार, विज्ञान और दैनिक जीवन का मुख्य चालक बन गई है। Pressman द्वैत भूमिका बताते हैं: सॉफ्टवेयर स्वयं एक उत्पाद है और अन्य उत्पादों को पहुँचाने का वाहन भी है (operating systems, networks, tools)। यह समझना BCA पाठ्यक्रम का आधार है क्योंकि इसी से प्रक्रिया, गुणवत्ता और परियोजना प्रबंधन की आवश्यकता स्पष्ट होती है।",
      "Software Engineering software ko engineered product maanti hai, sirf ad-hoc programming nahi. Chhe dashakon mein software ki role hardware ke helper se badhkar business, government, science aur daily life ka main driver ban gayi hai. Pressman dual role batate hain: software khud product hai aur doosre products deliver karne ka vehicle bhi hai. Yahi samajhna BCA ka starting point hai kyunki isi se process, quality aur project management ki zaroorat samajh aati hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "1950s–60s: software was custom code written by the same people who used the machine; documentation and process were almost absent.",
        "1950–60 के दशक: सॉफ्टवेयर उसी व्यक्ति द्वारा लिखा custom code था जो मशीन चलाता था; documentation और process लगभग नहीं थे।",
        "1950s–60s mein software custom code tha jo machine chalane wala khud likhta tha; documentation aur process almost nahi the.",
      ],
      [
        "1970s software crisis: projects ran over budget and schedule, quality was poor, and maintenance consumed most of the life-cycle cost. This crisis created Software Engineering as a discipline (NATO conferences 1968–69).",
        "1970 के दशक का software crisis: परियोजनाएँ बजट और समय से आगे निकल गईं, गुणवत्ता खराब थी और maintenance पर जीवनचक्र लागत का अधिकांश भाग खर्च हुआ। इसी संकट ने Software Engineering को अनुशासन बनाया (NATO conferences 1968–69)।",
        "1970s software crisis: projects budget aur schedule se nikal gaye, quality kharab thi, maintenance par zyadatar cost chali. Isi crisis ne Software Engineering ko discipline banaya (NATO 1968–69).",
      ],
      [
        "Dual role of software (Pressman): (1) as a product it produces, manages, modifies, displays or transmits information; (2) as a vehicle it is the basis for control of computers, communication of information, and creation of other programs.",
        "सॉफ्टवेयर की द्वैत भूमिका (Pressman): (1) उत्पाद के रूप में यह सूचना उत्पन्न, प्रबंधित, संशोधित, प्रदर्शित या संचारित करता है; (2) वाहन के रूप में यह कंप्यूटर नियंत्रण, सूचना संचार और अन्य प्रोग्राम बनाने का आधार है।",
        "Dual role (Pressman): product ke roop mein information produce/manage karta hai; vehicle ke roop mein computers control, communication aur doosre programs ka base hai.",
      ],
      [
        "Today software is a strategic differentiator: banks, airlines, e-governance, healthcare and defence fail if software fails. Reliability, security and maintainability therefore have legal and economic weight.",
        "आज सॉफ्टवेयर रणनीतिक विभेदक है: बैंक, एयरलाइन, e-governance, स्वास्थ्य और रक्षा सॉफ्टवेयर फेल होने पर ठप हो जाते हैं। इसलिए विश्वसनीयता, सुरक्षा और maintainability का कानूनी व आर्थिक महत्व है।",
        "Aaj software strategic differentiator hai: banks, airlines, e-governance, health aur defence software fail hone par ruk jaate hain. Isliye reliability, security aur maintainability ka legal-economic weight hai.",
      ],
      [
        "The programmer’s role evolved into a team of analysts, designers, testers, SQA staff and project managers. Engineering implies measurable process, not hero-coding.",
        "प्रोग्रामर की भूमिका विश्लेषक, डिज़ाइनर, टेस्टर, SQA स्टाफ और परियोजना प्रबंधकों की टीम में बदल गई। इंजीनियरिंग का अर्थ मापने योग्य प्रक्रिया है, hero-coding नहीं।",
        "Programmer ki role analyst, designer, tester, SQA aur project manager ki team mein badal gayi. Engineering ka matlab measurable process hai, hero-coding nahi.",
      ],
      [
        "IEEE definition: Software Engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software; that is, the application of engineering to software.",
        "IEEE परिभाषा: Software Engineering सॉफ्टवेयर के विकास, संचालन और रखरखाव के लिए व्यवस्थित, अनुशासित, मापने योग्य दृष्टिकोण का अनुप्रयोग है; अर्थात् सॉफ्टवेयर पर इंजीनियरिंग का अनुप्रयोग।",
        "IEEE definition: Software Engineering development, operation aur maintenance par systematic, disciplined, quantifiable approach ka application hai — matlab software par engineering.",
      ],
      [
        "Software now lives longer than the hardware it first ran on. Evolution, reuse and legacy integration dominate industry effort, so process models must support change, not only first-time construction.",
        "सॉफ्टवेयर अब उस हार्डवेयर से अधिक जीवित रहता है जिस पर वह पहले चला। Evolution, reuse और legacy एकीकरण उद्योग का मुख्य कार्य हैं, अतः process models को केवल पहली बार निर्माण नहीं बल्कि परिवर्तन का समर्थन करना चाहिए।",
        "Software ab hardware se lambe jeeta hai. Evolution, reuse aur legacy integration industry ka main kaam hai, isliye process models ko change support karna chahiye, sirf pehli baar banana nahi.",
      ],
    ]),
    TBL(
      [
        ["Era", "युग", "Era"],
        ["Dominant role of software", "सॉफ्टवेयर की प्रमुख भूमिका", "Software ki mukhya bhumika"],
        ["Engineering emphasis", "इंजीनियरिंग बल", "Engineering emphasis"],
      ],
      [
        [
          ["1950s–60s", "1950–60 दशक", "1950s–60s"],
          ["Batch programs; software as hardware add-on", "बैच प्रोग्राम; हार्डवेयर का जोड़", "Batch programs; hardware ka add-on"],
          ["Coding skill of individuals", "व्यक्तिगत कोडिंग कौशल", "Individual coding skill"],
        ],
        [
          ["1970s–80s", "1970–80 दशक", "1970s–80s"],
          ["Application systems; software crisis visible", "एप्लिकेशन सिस्टम; software crisis स्पष्ट", "Application systems; crisis visible"],
          ["Structured methods, SDLC, SQA", "Structured methods, SDLC, SQA", "Structured methods, SDLC, SQA"],
        ],
        [
          ["1990s–2000s", "1990–2000 दशक", "1990s–2000s"],
          ["Enterprise, web, product-line software", "एंटरप्राइज़, वेब, product-line सॉफ्टवेयर", "Enterprise, web, product-line"],
          ["OO, process maturity (CMM), reuse", "OO, process maturity (CMM), reuse", "OO, CMM, reuse"],
        ],
        [
          ["2010s–present", "2010–वर्तमान", "2010s–ab"],
          ["Cloud, mobile, AI, cyber-physical systems", "क्लाउड, मोबाइल, AI, cyber-physical सिस्टम", "Cloud, mobile, AI, CPS"],
          ["Agile, DevOps, continuous quality", "Agile, DevOps, continuous quality", "Agile, DevOps, continuous quality"],
        ],
      ],
    ),
    EXAM(
      "Examiners ask: dual role of software (product vs vehicle), definition of Software Engineering (IEEE/Pressman), causes of the software crisis, and why process is needed. Write 5–8 marks answers with eras and examples (banking, e-governance).",
      "परीक्षक पूछते हैं: सॉफ्टवेयर की द्वैत भूमिका (उत्पाद बनाम वाहन), Software Engineering की परिभाषा (IEEE/Pressman), software crisis के कारण, और प्रक्रिया क्यों आवश्यक है। 5–8 अंक के उत्तर युगों और उदाहरणों (बैंकिंग, e-governance) सहित लिखें।",
      "Examiner poochhte hain: dual role (product vs vehicle), SE ki definition, software crisis ke kaaran, process kyun zaroori. 5–8 marks mein eras aur examples (banking, e-governance) do.",
    ),
  ]),

  "se-changing-nature": topic("se-changing-nature", [
    P(
      "The nature of software is not uniform. Pressman classifies software by the domain it serves, because each category has different reliability, delivery and maintenance constraints. System software sits close to hardware; application software serves business logic; engineering and scientific software is number-intensive; embedded software is tightly coupled to devices; product-line software is reused across a family; web and mobile applications change daily; artificial-intelligence software reasons with knowledge; legacy software is old but mission-critical. A BCA student must map a given system to these categories before choosing a process model or quality plan.",
      "सॉफ्टवेयर की प्रकृति एक समान नहीं है। Pressman सॉफ्टवेयर को उसके domain के अनुसार वर्गीकृत करते हैं क्योंकि प्रत्येक श्रेणी की विश्वसनीयता, delivery और रखरखाव की बाधाएँ भिन्न हैं। System software हार्डवेयर के निकट होता है; application software व्यवसाय तर्क देता है; engineering/scientific सॉफ्टवेयर संख्या-प्रधान है; embedded सॉफ्टवेयर उपकरणों से जुड़ा है; product-line परिवार भर में पुनः प्रयुक्त होता है; web/mobile रोज़ बदलते हैं; AI सॉफ्टवेयर ज्ञान से तर्क करता है; legacy पुराना पर mission-critical है। BCA विद्यार्थी को process model चुनने से पहले सिस्टम को इन श्रेणियों में रखना चाहिए।",
      "Software ki prakriti ek jaisi nahi. Pressman domain ke hisaab se classify karte hain kyunki reliability, delivery aur maintenance alag hote hain. System software hardware ke paas; application business logic; engineering/scientific number-heavy; embedded devices se juda; product-line reuse; web/mobile daily change; AI knowledge se reason; legacy purana par mission-critical. Process model se pehle category identify karo.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "System software: compilers, OS, drivers, networking stacks. Heavy interaction with hardware, concurrent, often written for reuse by many applications.",
        "System software: compilers, OS, drivers, networking stacks। हार्डवेयर से गहरा संपर्क, concurrent, कई अनुप्रयोगों द्वारा reuse के लिए लिखा जाता है।",
        "System software: compilers, OS, drivers, networking. Hardware se tight interaction, concurrent, kai applications reuse karti hain.",
      ],
      [
        "Application software: standalone business programs (payroll, inventory, GST filing). Requirements come from domain experts; data and rules change frequently.",
        "Application software: स्वतंत्र व्यावसायिक प्रोग्राम (payroll, inventory, GST)। आवश्यकताएँ domain विशेषज्ञों से आती हैं; डेटा और नियम बार-बार बदलते हैं।",
        "Application software: payroll, inventory, GST jaise business programs. Requirements domain experts se aati hain; data aur rules frequently badalte hain.",
      ],
      [
        "Engineering/scientific software: CAD, simulation, weather models. Characterised by number crunching, floating-point accuracy and algorithm complexity rather than UI.",
        "Engineering/scientific software: CAD, simulation, मौसम मॉडल। विशेषता संख्या गणना, floating-point सटीकता और एल्गोरिद्म जटिलता है, UI नहीं।",
        "Engineering/scientific: CAD, simulation, weather models. Number crunching, floating-point accuracy aur algorithm complexity UI se zyada matter karti hai.",
      ],
      [
        "Embedded software: resides in ROM/firmware of automobiles, medical devices, washing machines. Real-time constraints, limited memory, and safety standards (e.g. ISO 26262) dominate.",
        "Embedded software: ऑटोमोबाइल, चिकित्सा उपकरणों, वाशिंग मशीन के ROM/firmware में रहता है। Real-time बाधाएँ, सीमित memory और सुरक्षा मानक (जैसे ISO 26262) प्रधान हैं।",
        "Embedded software gaadi, medical device, washing machine ke ROM/firmware mein rehta hai. Real-time, limited memory aur safety standards dominate karte hain.",
      ],
      [
        "Product-line (or system-of-systems) software: a reusable core plus variant features for a family of products (e.g. a bank’s core-banking suite). Architecture and configuration management are critical.",
        "Product-line सॉफ्टवेयर: एक reusable core तथा उत्पाद परिवार के लिए variant features (जैसे बैंक का core-banking suite)। Architecture और configuration management निर्णायक हैं।",
        "Product-line: reusable core plus variant features (jaise core-banking suite). Architecture aur SCM yahan critical hain.",
      ],
      [
        "Web/mobile applications: content-driven, continuously deployed, security and usability are first-class. AI software uses knowledge bases, ML models and heuristics; requirements are often exploratory.",
        "Web/mobile अनुप्रयोग: content-driven, निरंतर deployed, सुरक्षा और usability प्रथम श्रेणी हैं। AI सॉफ्टवेयर knowledge bases, ML models और heuristics उपयोग करता है; आवश्यकताएँ अक्सर exploratory होती हैं।",
        "Web/mobile: content-driven, continuously deployed, security aur usability first-class. AI knowledge bases, ML models use karta hai; requirements aksar exploratory hoti hain.",
      ],
      [
        "Legacy software: decades-old COBOL/C systems that still run Indian railways, banks and government. They must be maintained, wrapped or re-engineered; they are part of the changing nature, not a finished past.",
        "Legacy software: दशकों पुराने COBOL/C सिस्टम जो अभी भी भारतीय रेल, बैंकों और सरकार को चलाते हैं। इन्हें maintain, wrap या re-engineer करना पड़ता है; ये बदलती प्रकृति का हिस्सा हैं, समाप्त अतीत नहीं।",
        "Legacy: dashakon purane COBOL/C systems jo ab bhi railways, banks, government chalate hain. Maintain, wrap ya re-engineer karna padta hai — yeh changing nature ka hissa hain.",
      ],
    ]),
    TBL(
      [
        ["Category", "श्रेणी", "Category"],
        ["Typical constraint", "विशिष्ट बाधा", "Typical constraint"],
        ["Example", "उदाहरण", "Example"],
      ],
      [
        [
          ["System", "सिस्टम", "System"],
          ["Concurrency, hardware coupling", "Concurrency, हार्डवेयर युग्मन", "Concurrency, hardware coupling"],
          ["Linux kernel, device driver", "Linux kernel, device driver", "Linux kernel, device driver"],
        ],
        [
          ["Embedded", "एम्बेडेड", "Embedded"],
          ["Real-time, memory, safety", "Real-time, memory, सुरक्षा", "Real-time, memory, safety"],
          ["ABS controller, pacemaker", "ABS नियंत्रक, पेसमेकर", "ABS controller, pacemaker"],
        ],
        [
          ["Web/mobile", "वेब/मोबाइल", "Web/mobile"],
          ["Security, UX, continuous change", "सुरक्षा, UX, निरंतर परिवर्तन", "Security, UX, continuous change"],
          ["UPI app, IRCTC", "UPI ऐप, IRCTC", "UPI app, IRCTC"],
        ],
        [
          ["Legacy", "लेगेसी", "Legacy"],
          ["Maintainability, undocumented logic", "Maintainability, अदस्तावेजित तर्क", "Maintainability, undocumented logic"],
          ["Core banking COBOL", "कोर बैंकिंग COBOL", "Core banking COBOL"],
        ],
      ],
    ),
    EXAM(
      "List and briefly explain categories of software (system, application, engineering/scientific, embedded, product-line, web, AI, legacy). A 5-mark question often asks differences with one example each.",
      "सॉफ्टवेयर की श्रेणियाँ सूचीबद्ध कर संक्षेप में समझाएँ (system, application, engineering/scientific, embedded, product-line, web, AI, legacy)। 5 अंक के प्रश्न में प्रायः प्रत्येक का एक उदाहरण सहित अंतर पूछा जाता है।",
      "Software ki categories list karke explain karo. 5-mark question mein har category ka ek example ke saath difference poochha jaata hai.",
    ),
  ]),

  "se-evolution": topic("se-evolution", [
    P(
      "Software Engineering did not appear overnight. It evolved in response to rising complexity, the software crisis, and new application domains. Early years used code-and-fix. The 1970s introduced structured programming, Waterfall and the idea of a life cycle. The 1980s brought CASE tools, 4GLs and quantitative project control. The 1990s emphasised object orientation, reuse and process maturity (CMM). The 2000s added Agile, web engineering and open source. Tracing this evolution helps students see why multiple process models coexist and why older methods are still taught.",
      "सॉफ्टवेयर इंजीनियरिंग एक रात में नहीं बनी। यह बढ़ती जटिलता, software crisis और नए application domains की प्रतिक्रिया में विकसित हुई। आरंभिक वर्षों में code-and-fix था। 1970 के दशक ने structured programming, Waterfall और जीवनचक्र का विचार दिया। 1980 में CASE tools, 4GL और मात्रात्मक परियोजना नियंत्रण आए। 1990 में object orientation, reuse और process maturity (CMM) पर बल रहा। 2000 के बाद Agile, web engineering और open source जुड़े। यह विकास समझने से पता चलता है कि अनेक process models साथ-साथ क्यों हैं।",
      "Software Engineering raat-raat mein nahi bani. Complexity, software crisis aur naye domains ki wajah se evolve hui. Pehle code-and-fix. 1970s: structured programming, Waterfall, life cycle. 1980s: CASE, 4GL, quantitative control. 1990s: OO, reuse, CMM. 2000s: Agile, web, open source. Evolution se samajh aata hai ki kai process models saath kyun chalte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "NATO Science Committee conferences (Garmisch 1968, Rome 1969) coined the term Software Engineering and documented the software crisis: late delivery, cost overruns, unreliable products.",
        "NATO Science Committee सम्मेलनों (Garmisch 1968, Rome 1969) ने Software Engineering शब्द गढ़ा और software crisis दर्ज किया: देरी, लागत वृद्धि, अविश्वसनीय उत्पाद।",
        "NATO conferences (Garmisch 1968, Rome 1969) ne Software Engineering term diya aur software crisis document kiya: delay, cost overrun, unreliable products.",
      ],
      [
        "First era — code and fix (till ~1970): write code, discover bugs, patch. No requirements baseline; maintenance cost exploded as systems grew.",
        "प्रथम युग — code and fix (~1970 तक): कोड लिखो, बग खोजो, पैच करो। Requirements baseline नहीं; सिस्टम बढ़ने पर maintenance लागत फूट गई।",
        "Pehla yug — code and fix (~1970 tak): code likho, bugs dhoondo, patch karo. Requirements baseline nahi; system badhne par maintenance cost phoot gayi.",
      ],
      [
        "Second era — process and methods (1970s): Waterfall (Royce), structured analysis/design (Yourdon, DeMarco, Constantine), information hiding (Parnas). Life-cycle thinking became standard.",
        "द्वितीय युग — प्रक्रिया और विधियाँ (1970s): Waterfall (Royce), structured analysis/design (Yourdon, DeMarco, Constantine), information hiding (Parnas)। Life-cycle सोच मानक बनी।",
        "Doosra yug — process aur methods (1970s): Waterfall (Royce), SA/SD (Yourdon, DeMarco), information hiding (Parnas). Life-cycle soch standard bani.",
      ],
      [
        "Third era — tools and measurement (1980s): CASE environments, 4GLs, software metrics, early COCOMO (Boehm 1981). Productivity and estimation became research topics.",
        "तृतीय युग — उपकरण और मापन (1980s): CASE वातावरण, 4GL, software metrics, प्रारंभिक COCOMO (Boehm 1981)। उत्पादकता और अनुमान शोध विषय बने।",
        "Teesra yug — tools aur measurement (1980s): CASE, 4GL, metrics, early COCOMO (Boehm 1981). Productivity aur estimation research topics ban gaye.",
      ],
      [
        "Fourth era — objects and maturity (1990s): OOP, UML (Booch, Rumbaugh, Jacobson — the Three Amigos), design patterns, CMM (SEI), ISO 9000 for software.",
        "चतुर्थ युग — ऑब्जेक्ट और परिपक्वता (1990s): OOP, UML (Booch, Rumbaugh, Jacobson — Three Amigos), design patterns, CMM (SEI), सॉफ्टवेयर के लिए ISO 9000।",
        "Chautha yug — objects aur maturity (1990s): OOP, UML (Three Amigos), design patterns, CMM (SEI), ISO 9000 for software.",
      ],
      [
        "Fifth era — agility and the web (2000s–present): Agile Manifesto (2001), Scrum/XP, DevOps, cloud-native, AI-assisted development. Process is iterative and customer-facing.",
        "पंचम युग — एजाइल और वेब (2000–वर्तमान): Agile Manifesto (2001), Scrum/XP, DevOps, cloud-native, AI-assisted development। प्रक्रिया iterative और ग्राहक-केंद्रित है।",
        "Paanchva yug — agility aur web (2000–ab): Agile Manifesto (2001), Scrum/XP, DevOps, cloud-native. Process iterative aur customer-facing hai.",
      ],
      [
        "Laws of software evolution (Lehman): continuing change, increasing complexity, self-regulation, conservation of organisational stability, conservation of familiarity, continuing growth, declining quality unless maintained, feedback system. These laws justify maintenance as engineering, not afterthought.",
        "सॉफ्टवेयर विकास के नियम (Lehman): निरंतर परिवर्तन, बढ़ती जटिलता, स्व-नियमन, संगठनात्मक स्थिरता का संरक्षण, परिचितता का संरक्षण, निरंतर वृद्धि, रखरखाव के बिना घटती गुणवत्ता, फीडबैक सिस्टम। ये नियम maintenance को इंजीनियरिंग सिद्ध करते हैं।",
        "Lehman ke laws: continuing change, increasing complexity, declining quality unless maintained. Yahi laws maintenance ko engineering saabit karte hain, afterthought nahi.",
      ],
    ]),
    OL([
      [
        "Code-and-fix → unstructured, heroic programming.",
        "Code-and-fix → असंरचित, वीर प्रोग्रामिंग।",
        "Code-and-fix → unstructured, heroic programming.",
      ],
      [
        "Structured life-cycle (Waterfall, SA/SD) → documents and phases.",
        "Structured life-cycle (Waterfall, SA/SD) → दस्तावेज़ और चरण।",
        "Structured life-cycle → documents aur phases.",
      ],
      [
        "Measurement, CASE, COCOMO → manage as a project.",
        "मापन, CASE, COCOMO → परियोजना के रूप में प्रबंधन।",
        "Measurement, CASE, COCOMO → project ki tarah manage.",
      ],
      [
        "OO, UML, CMM → architecture and organisational process.",
        "OO, UML, CMM → आर्किटेक्चर और संगठनात्मक प्रक्रिया।",
        "OO, UML, CMM → architecture aur organisational process.",
      ],
      [
        "Agile, DevOps, cloud → frequent delivery and feedback.",
        "Agile, DevOps, cloud → बार-बार delivery और फीडबैक।",
        "Agile, DevOps, cloud → frequent delivery aur feedback.",
      ],
    ]),
    EXAM(
      "Write short notes on the software crisis and the evolution of Software Engineering. Mention NATO conferences, Waterfall, COCOMO, UML/CMM and Agile with years. Lehman’s laws may appear in 2-mark questions.",
      "Software crisis और Software Engineering के विकास पर संक्षिप्त टिप्पणी लिखें। NATO सम्मेलन, Waterfall, COCOMO, UML/CMM और Agile वर्षों सहित बताएँ। Lehman के नियम 2 अंक में आ सकते हैं।",
      "Software crisis aur SE ke evolution par short notes. NATO, Waterfall, COCOMO, UML/CMM, Agile saal ke saath. Lehman laws 2-mark mein aa sakte hain.",
    ),
  ]),

  "se-characteristics": topic("se-characteristics", [
    P(
      "Software has characteristics that distinguish it from manufactured hardware, and these characteristics drive every SE method. Software is intangible: you cannot touch a program the way you touch a chip. It does not wear out; hardware follows a bathtub failure curve (infant mortality, useful life, wear-out), whereas software failures are due to residual defects and change, giving an inverted or idealised curve that rises again when modifications inject new faults. Software is mostly custom-built rather than assembled from identical spare parts, although component reuse is growing. Brooks also listed complexity, conformity, changeability and invisibility as essential difficulties. These facts explain why copy-paste of factory QC does not work for programs.",
      "सॉफ्टवेयर की विशेषताएँ इसे निर्मित हार्डवेयर से अलग करती हैं और यही विशेषताएँ हर SE विधि को निर्देशित करती हैं। सॉफ्टवेयर अमूर्त (intangible) है: प्रोग्राम को चिप की तरह छुआ नहीं जा सकता। यह घिसता नहीं; हार्डवेयर bathtub failure वक्र (शिशु मृत्यु, उपयोगी जीवन, घिसाव) दिखाता है, जबकि सॉफ्टवेयर विफलताएँ अवशिष्ट दोषों और परिवर्तन से होती हैं — संशोधन नए दोष डालते हैं तो वक्र फिर उठता है। सॉफ्टवेयर अधिकतर custom-built होता है, समान पुर्जों से नहीं जुड़ता, यद्यपि component reuse बढ़ रहा है। Brooks ने जटिलता, अनुरूपता, परिवर्तनशीलता और अदृश्यता को मूल कठिनाइयाँ कहा। इसलिए फैक्टरी QC की नकल प्रोग्राम पर काम नहीं करती।",
      "Software ki characteristics ise hardware se alag karti hain. Software intangible hai — chip ki tarah chhoo nahi sakte. Wear nahi hota; hardware bathtub curve follow karta hai, software residual defects aur change se fail hota hai, modifications naye faults daalte hain. Software zyadatar custom-built hai. Brooks ne complexity, conformity, changeability, invisibility ko essential difficulties kaha. Factory QC copy-paste programs par kaam nahi karta.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Intangible / invisible: progress is hard to see; documentation, reviews and metrics are needed to make work visible. Invisibility is one of Brooks’ essential difficulties.",
        "अमूर्त / अदृश्य: प्रगति दिखना कठिन है; कार्य को दृश्य बनाने के लिए documentation, reviews और metrics चाहिए। अदृश्यता Brooks की essential difficulties में है।",
        "Intangible/invisible: progress dikhna mushkil; documentation, reviews, metrics se kaam visible hota hai. Invisibility Brooks ki essential difficulty hai.",
      ],
      [
        "Does not wear out: bits do not corrode. The failure-rate curve of well-maintained software should stay flat, but each change can inject defects, so the curve spikes (often drawn as a saw-tooth or inverted bathtub).",
        "घिसता नहीं: bits क्षरित नहीं होते। अच्छे रखरखाव वाले सॉफ्टवेयर की failure-rate सपाट रहनी चाहिए, पर प्रत्येक परिवर्तन दोष डाल सकता है, इसलिए वक्र उछलता है (saw-tooth या inverted bathtub)।",
        "Wear nahi hota: bits corrode nahi karte. Failure-rate flat honi chahiye, lekin har change defects daal sakta hai, curve spike karti hai (saw-tooth / inverted bathtub).",
      ],
      [
        "Custom-built: unlike ICs stamped in millions, most software is engineered for a specific organisation. Reusable components, product lines and open-source libraries reduce but do not remove this trait.",
        "Custom-built: लाखों में stamped ICs के विपरीत अधिकांश सॉफ्टवेयर किसी विशिष्ट संगठन के लिए बनता है। Reusable components, product lines और open-source यह लक्षण कम करते हैं, मिटाते नहीं।",
        "Custom-built: ICs ki tarah millions mein stamp nahi hota. Reusable components, product lines, open-source yeh trait kam karte hain, mitaate nahi.",
      ],
      [
        "Complexity (Brooks): software entities are more complex for their size than any other human construct; no two parts are alike. Complexity is essential, not accidental.",
        "जटिलता (Brooks): आकार के अनुपात में सॉफ्टवेयर किसी भी अन्य मानव रचना से अधिक जटिल है; दो भाग एक जैसे नहीं। जटिलता essential है, accidental नहीं।",
        "Complexity (Brooks): size ke hisaab se software kisi bhi human construct se zyada complex hai. Complexity essential hai, accidental nahi.",
      ],
      [
        "Conformity: software must conform to arbitrary human institutions (tax law, university rules, bank circulars) that are irregular. Unlike physics, there is no unifying law to simplify the interface.",
        "अनुरूपता: सॉफ्टवेयर को मनमाने मानव संस्थानों (कर कानून, विश्वविद्यालय नियम, बैंक परिपत्र) के अनुरूप होना पड़ता है जो अनियमित हैं। भौतिकी की तरह सरल करने वाला एक नियम नहीं है।",
        "Conformity: software ko tax law, university rules, bank circulars jaise arbitrary institutions ke hisaab se chalna padta hai. Physics jaisa unifying law nahi.",
      ],
      [
        "Changeability: successful software is changed — because it is useful, because the business changed, because it is cheaper to change software than hardware. Change is the default state.",
        "परिवर्तनशीलता: सफल सॉफ्टवेयर बदला जाता है — क्योंकि वह उपयोगी है, व्यवसाय बदला, हार्डवेयर से सस्ता है बदलना। परिवर्तन सामान्य अवस्था है।",
        "Changeability: successful software change hota hai — useful hai, business badla, hardware se sasta hai badalna. Change default state hai.",
      ],
      [
        "No spare parts: you cannot replace a failed module with an identical warehouse spare. Repair means redesign or recode, which is why maintainability and modularity are design goals from day one.",
        "Spare parts नहीं: फेल मॉड्यूल को गोदाम के समान पुर्जे से नहीं बदल सकते। मरम्मत का अर्थ redesign या recode है, इसलिए maintainability और modularity पहले दिन से डिज़ाइन लक्ष्य हैं।",
        "Spare parts nahi: failed module ko warehouse spare se nahi badal sakte. Repair matlab redesign/recode. Isliye maintainability aur modularity din ek se design goal hain.",
      ],
    ]),
    TBL(
      [
        ["Aspect", "पहलू", "Aspect"],
        ["Hardware", "हार्डवेयर", "Hardware"],
        ["Software", "सॉफ्टवेयर", "Software"],
      ],
      [
        [
          ["Failure over time", "समय के साथ विफलता", "Failure over time"],
          ["Bathtub curve; wears out", "Bathtub वक्र; घिसता है", "Bathtub curve; wears out"],
          ["Does not wear; defects + change", "घिसता नहीं; दोष + परिवर्तन", "Wear nahi; defects + change"],
        ],
        [
          ["Visibility", "दृश्यता", "Visibility"],
          ["Physical, inspectable", "भौतिक, निरीक्षण योग्य", "Physical, inspectable"],
          ["Invisible; needs documents", "अदृश्य; दस्तावेज़ चाहिए", "Invisible; documents chahiye"],
        ],
        [
          ["Construction", "निर्माण", "Construction"],
          ["Assembled from parts", "पुर्जों से जोड़ा जाता है", "Parts se assemble"],
          ["Mostly custom-built", "अधिकतर custom-built", "Mostly custom-built"],
        ],
        [
          ["Repair", "मरम्मत", "Repair"],
          ["Replace spare part", "Spare part बदलें", "Spare part badlo"],
          ["Redesign / recode", "Redesign / recode", "Redesign / recode"],
        ],
      ],
    ),
    EXAM(
      "Compare hardware and software characteristics. Draw or describe the bathtub vs software failure-rate curve. List Brooks’ essential difficulties (complexity, conformity, changeability, invisibility). These are favourite 5–8 mark questions.",
      "हार्डवेयर और सॉफ्टवेयर विशेषताओं की तुलना करें। Bathtub बनाम सॉफ्टवेयर failure-rate वक्र बताएँ। Brooks की essential difficulties (complexity, conformity, changeability, invisibility) लिखें। ये पसंदीदा 5–8 अंक प्रश्न हैं।",
      "Hardware vs software characteristics compare karo. Bathtub vs software failure curve. Brooks ki essential difficulties list karo. 5–8 marks ke favourite questions hain.",
    ),
  ]),

  "se-sdlc": topic("se-sdlc", [
    P(
      "The Software Development Life Cycle (SDLC) is a structured sequence of stages that takes a software product from an idea to retirement. A life cycle gives management checkpoints, defines work products (SRS, design, code, test reports) and assigns roles. Typical generic phases are: communication (or requirement gathering), planning, modelling (analysis and design), construction (code and test), and deployment (delivery, support, maintenance). Different process models (Waterfall, V-model, Spiral, Agile) arrange these phases linearly, iteratively or incrementally, but none skip the underlying activities. SDLC is the backbone of Unit 1 because every later topic — SRS, design, testing, SCM — is a phase or a supporting process of this cycle.",
      "Software Development Life Cycle (SDLC) चरणों का संरचित क्रम है जो सॉफ्टवेयर उत्पाद को विचार से सेवा-निवृत्ति तक ले जाता है। जीवनचक्र प्रबंधन को checkpoints देता है, कार्य-उत्पाद (SRS, डिज़ाइन, कोड, परीक्षण रिपोर्ट) परिभाषित करता है और भूमिकाएँ सौंपता है। सामान्य चरण: communication (requirement gathering), planning, modelling (analysis और design), construction (code और test), और deployment (delivery, support, maintenance)। विभिन्न process models (Waterfall, V-model, Spiral, Agile) इन चरणों को रैखिक, iterative या incremental रूप में सजाते हैं, पर अंतर्निहित गतिविधियाँ नहीं छोड़ते। SDLC इकाई 1 की रीढ़ है क्योंकि SRS, डिज़ाइन, टेस्टिंग, SCM इसी चक्र के भाग हैं।",
      "SDLC structured stages ka sequence hai jo idea se retirement tak le jaata hai. Life cycle checkpoints, work products (SRS, design, code, test reports) aur roles define karta hai. Typical phases: communication, planning, modelling, construction, deployment. Waterfall, V-model, Spiral, Agile in phases ko linear/iterative/incremental tarike se sajate hain, lekin activities skip nahi karte. SDLC Unit 1 ki backbone hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Purpose: reduce risk, make progress visible, ensure quality gates, and provide a common vocabulary among customer, developers and managers.",
        "उद्देश्य: जोखिम कम करना, प्रगति दृश्य बनाना, quality gates सुनिश्चित करना, तथा ग्राहक, डेवलपर्स और प्रबंधकों में साझा शब्दावली देना।",
        "Maqsad: risk kam karna, progress visible banana, quality gates, aur customer-developer-manager ke beech common vocabulary.",
      ],
      [
        "Communication / requirements: understand the problem, stakeholders, constraints and success criteria. Output is typically a requirements document or product backlog.",
        "Communication / requirements: समस्या, stakeholders, बाधाएँ और सफलता मानदंड समझना। आउटपुट प्रायः requirements document या product backlog होता है।",
        "Communication/requirements: problem, stakeholders, constraints, success criteria. Output: requirements document ya product backlog.",
      ],
      [
        "Planning: estimates (size, effort, cost, schedule), risk analysis, staffing and the Software Project Management Plan (SPMP).",
        "Planning: अनुमान (आकार, प्रयास, लागत, अनुसूची), जोखिम विश्लेषण, स्टाफिंग और Software Project Management Plan (SPMP)।",
        "Planning: size, effort, cost, schedule ke estimates, risk analysis, staffing aur SPMP.",
      ],
      [
        "Modelling: analysis models (DFD, ER, use cases) and design models (architecture, interface, components, database). Modelling is cheaper than recoding.",
        "Modelling: विश्लेषण मॉडल (DFD, ER, use cases) और डिज़ाइन मॉडल (architecture, interface, components, database)। Modelling recoding से सस्ता है।",
        "Modelling: analysis (DFD, ER, use cases) aur design (architecture, interface, components, DB). Modelling recoding se sasta hai.",
      ],
      [
        "Construction: coding, unit testing, integration. Coding should implement the design, not invent requirements.",
        "Construction: कोडिंग, unit testing, integration। कोडिंग को डिज़ाइन लागू करना चाहिए, आवश्यकताएँ गढ़नी नहीं।",
        "Construction: coding, unit testing, integration. Coding design implement kare, requirements invent na kare.",
      ],
      [
        "Deployment and maintenance: delivery, training, support, corrective/adaptive/perfective/preventive maintenance, and eventual retirement or replacement. Maintenance often consumes 50–80% of life-cycle cost.",
        "Deployment और maintenance: delivery, प्रशिक्षण, support, corrective/adaptive/perfective/preventive रखरखाव, तथा अंत में सेवा-निवृत्ति। Maintenance प्रायः जीवनचक्र लागत का 50–80% खाती है।",
        "Deployment aur maintenance: delivery, training, support, chaar types ki maintenance, retirement. Maintenance aksar life-cycle cost ka 50–80% khaati hai.",
      ],
      [
        "A process model is a specific arrangement of SDLC activities (linear, iterative, evolutionary, agile). SDLC is the set of activities; the model is the strategy for executing them.",
        "Process model SDLC गतिविधियों की विशिष्ट व्यवस्था है (linear, iterative, evolutionary, agile)। SDLC गतिविधियों का समुच्चय है; मॉडल उन्हें चलाने की रणनीति है।",
        "Process model SDLC activities ki arrangement hai. SDLC activities ka set hai; model unhe execute karne ki strategy hai.",
      ],
    ]),
    D(
      "sdlc",
      "Generic SDLC: communication → planning → modelling → construction → deployment, with maintenance looping back.",
      "सामान्य SDLC: communication → planning → modelling → construction → deployment, maintenance वापस लूप करता है।",
      "Generic SDLC: communication → planning → modelling → construction → deployment, maintenance wapas loop karta hai.",
    ),
    NOTE(
      "Do not confuse SDLC (the cycle of activities) with a named model. Waterfall is one SDLC model; Agile is another. Questions that say “explain SDLC” want phases plus the idea of a process model.",
      "SDLC (गतिविधियों का चक्र) को किसी नामित मॉडल से भ्रमित न करें। Waterfall एक SDLC मॉडल है; Agile दूसरा। “SDLC समझाएँ” वाले प्रश्न चरण और process model का विचार चाहते हैं।",
      "SDLC ko named model se confuse mat karo. Waterfall ek SDLC model hai, Agile doosra. “Explain SDLC” mein phases plus process-model idea chahiye.",
    ),
    EXAM(
      "Draw the SDLC and explain each phase with deliverables. Distinguish SDLC from a process model. Mention that maintenance dominates cost — a frequent 2-mark rider.",
      "SDLC बनाकर प्रत्येक चरण deliverables सहित समझाएँ। SDLC और process model में अंतर करें। यह बताएँ कि maintenance लागत पर हावी है — अक्सर 2 अंक का अतिरिक्त प्रश्न।",
      "SDLC draw karke har phase deliverables ke saath explain karo. SDLC vs process model. Maintenance cost dominate karti hai — yeh 2-mark rider aksar aata hai.",
    ),
  ]),

  "se-waterfall": topic("se-waterfall", [
    P(
      "The Waterfall model (classic life cycle), popularised by Winston Royce (1970), is a linear sequential process: each phase starts after the previous phase is complete and documented. Canonical phases are feasibility / requirements analysis, design, implementation (coding), testing (verification), and maintenance. Information flows downward like a waterfall; in the strict form there is no going back, though practical descriptions allow limited feedback to the previous phase. Waterfall fits projects where requirements are well understood, technology is stable, and the product definition is frozen — for example a compiler, an embedded controller with a fixed spec, or a student academic project with a signed SRS. It fails when requirements are volatile or the customer cannot visualise the system until they see it.",
      "Waterfall मॉडल (क्लासिक जीवनचक्र), जिसे Winston Royce (1970) ने लोकप्रिय किया, एक रैखिक क्रमिक प्रक्रिया है: प्रत्येक चरण पिछले चरण के पूरा और दस्तावेजीकरण के बाद शुरू होता है। मानक चरण: feasibility / requirements analysis, design, implementation (coding), testing (verification), और maintenance। सूचना जलप्रपात की तरह नीचे बहती है; कठोर रूप में वापस नहीं जाते, यद्यपि व्यावहारिक वर्णन पिछले चरण तक सीमित फीडबैक मानते हैं। Waterfall उन परियोजनाओं पर ठीक है जहाँ आवश्यकताएँ सुस्पष्ट हों, तकनीक स्थिर हो और उत्पाद परिभाषा जमी हो — जैसे compiler, निश्चित spec वाला embedded controller, या हस्ताक्षरित SRS वाली छात्र परियोजना। जब आवश्यकताएँ अस्थिर हों या ग्राहक सिस्टम देखे बिना कल्पना न कर सके, तब यह असफल होता है।",
      "Waterfall model (classic life cycle), Winston Royce (1970), linear sequential process hai: har phase pichhle complete-documented phase ke baad start hota hai. Phases: requirements, design, coding, testing, maintenance. Information neeche behti hai. Tab fit hai jab requirements clear hon, technology stable ho, spec freeze ho — compiler, embedded controller, signed SRS wala student project. Volatile requirements ya unvisualisable system par fail hota hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Phases (commonly asked): Requirement analysis → System design → Implementation/coding → Integration and testing → Deployment → Maintenance. Some syllabi insert feasibility before requirements and unit testing inside implementation.",
        "चरण (अक्सर पूछे जाते हैं): Requirement analysis → System design → Implementation/coding → Integration and testing → Deployment → Maintenance। कुछ पाठ्यक्रम requirements से पहले feasibility और implementation के भीतर unit testing रखते हैं।",
        "Phases: Requirement analysis → Design → Coding → Testing → Deployment → Maintenance. Kuch syllabi feasibility aur unit testing alag rakhte hain.",
      ],
      [
        "Each phase produces a baseline document (SRS, design specification, code, test report) that is reviewed before the next phase. This is document-driven development.",
        "प्रत्येक चरण एक baseline दस्तावेज़ (SRS, design specification, code, test report) बनाता है जिसकी समीक्षा अगले चरण से पहले होती है। यह document-driven development है।",
        "Har phase baseline document banata hai (SRS, design spec, code, test report) jo next se pehle review hota hai. Yeh document-driven development hai.",
      ],
      [
        "Advantages: simple to understand and manage; milestones are clear; works well for small, stable projects; easy to explain in exams and to junior teams.",
        "लाभ: समझना और प्रबंधित करना सरल; milestones स्पष्ट; छोटी, स्थिर परियोजनाओं के लिए उपयुक्त; परीक्षा और junior टीमों को समझाना आसान।",
        "Advantages: samajhna-manage karna simple; milestones clear; chhoti stable projects ke liye theek; exam aur junior teams ko explain karna asaan.",
      ],
      [
        "Disadvantages: late working software; high risk if requirements were wrong; no overlapping of phases; poor handling of change; customer sees the product only at the end (Big Bang delivery).",
        "हानियाँ: काम करता सॉफ्टवेयर देर से; यदि आवश्यकताएँ गलत थीं तो उच्च जोखिम; चरण ओवरलैप नहीं; परिवर्तन का कमजोर प्रबंधन; ग्राहक उत्पाद अंत में ही देखता है (Big Bang delivery)।",
        "Disadvantages: working software late milta hai; galat requirements par high risk; phases overlap nahi; change weak; customer product end mein dekhta hai (Big Bang).",
      ],
      [
        "Royce himself warned that a pure waterfall is risky and recommended iteration and prototyping — a fact many textbooks omit. Exam answers should still present the linear form, then mention feedback between adjacent phases.",
        "Royce ने स्वयं चेताया कि शुद्ध waterfall जोखिमपूर्ण है और iteration व prototyping सुझाए — कई पाठ्यपुस्तकें यह छोड़ देती हैं। परीक्षा उत्तर में रैखिक रूप लिखें, फिर आसन्न चरणों के बीच फीडबैक बताएँ।",
        "Royce khud bole ki pure waterfall risky hai aur iteration/prototyping suggest kiya. Exam mein linear form likho, phir adjacent phases ke beech feedback mention karo.",
      ],
      [
        "Not suitable when: requirements are unclear, technology is unproven, long-running projects with evolving scope, or user-interface intensive systems that need early feedback.",
        "अनुपयुक्त जब: आवश्यकताएँ अस्पष्ट हों, तकनीक अप्रमाणित हो, बदलते scope वाली लंबी परियोजनाएँ हों, या UI-intensive सिस्टम जिन्हें जल्दी फीडबैक चाहिए।",
        "Suitable nahi jab: requirements unclear, technology unproven, evolving scope, ya UI-intensive systems jinhe early feedback chahiye.",
      ],
      [
        "Comparison hook: Waterfall is plan-driven; Agile is change-driven. V-model is waterfall with explicit test mapping. Incremental delivers usable chunks instead of one drop at the end.",
        "तुलना बिंदु: Waterfall plan-driven है; Agile change-driven। V-model स्पष्ट टेस्ट मैपिंग वाला waterfall है। Incremental अंत में एक बूँद की जगह उपयोगी टुकड़े देता है।",
        "Comparison: Waterfall plan-driven; Agile change-driven. V-model waterfall + explicit test mapping. Incremental usable chunks deta hai, ek final drop nahi.",
      ],
    ]),
    D(
      "waterfall",
      "Waterfall: requirements → design → implementation → testing → maintenance, flowing downward.",
      "Waterfall: requirements → design → implementation → testing → maintenance, नीचे की ओर प्रवाह।",
      "Waterfall: requirements → design → implementation → testing → maintenance, neeche ki ore flow.",
    ),
    EXAM(
      "Draw the Waterfall model, list phases, write 4 advantages and 4 disadvantages, and state when it is used. A comparison with Spiral or Agile is a common 8–10 mark question.",
      "Waterfall मॉडल बनाएँ, चरण लिखें, 4 लाभ और 4 हानियाँ दें, तथा कब उपयोग होता है बताएँ। Spiral या Agile से तुलना सामान्य 8–10 अंक प्रश्न है।",
      "Waterfall draw karo, phases, 4 advantages, 4 disadvantages, kab use hota hai. Spiral/Agile se comparison 8–10 marks ka common question hai.",
    ),
  ]),

  "se-vmodel": topic("se-vmodel", [
    P(
      "The V-model (Verification and Validation model) is an extension of Waterfall that makes testing explicit on the right arm of a V. The left arm is development: business requirements, system specification, high-level design, detailed design, coding. The right arm is testing: unit, integration, system, and acceptance tests. Each development phase has a corresponding test phase; test planning starts as soon as the paired development artefact is ready. The bottom of the V is coding. Verification asks “are we building the product right?” (reviews, inspections, unit/integration tests against specs). Validation asks “are we building the right product?” (system and acceptance tests against user needs). The V-model is favoured in safety-critical and contract-driven work because every requirement is traceable to a test.",
      "V-model (Verification and Validation मॉडल) Waterfall का विस्तार है जो V की दाहिनी भुजा पर टेस्टिंग को स्पष्ट करता है। बाईं भुजा विकास है: business requirements, system specification, high-level design, detailed design, coding। दाहिनी भुजा टेस्टिंग: unit, integration, system, और acceptance tests। प्रत्येक विकास चरण का संगत टेस्ट चरण होता है; टेस्ट योजना जोड़े गए artefact तैयार होते ही शुरू होती है। V का तल coding है। Verification पूछता है “क्या हम उत्पाद सही बना रहे हैं?” (reviews, inspections, specs के विरुद्ध unit/integration)। Validation पूछता है “क्या हम सही उत्पाद बना रहे हैं?” (user needs के विरुद्ध system/acceptance)। सुरक्षा-महत्वपूर्ण और अनुबंध-चालित कार्य में V-model इसलिए पसंद है क्योंकि हर requirement किसी टेस्ट से ट्रेस होती है।",
      "V-model Waterfall ka extension hai jo testing ko V ki right arm par explicit karta hai. Left arm: requirements, HLD, detailed design, coding. Right arm: unit, integration, system, acceptance tests. Har development phase ka matching test phase hota hai. V ka bottom coding hai. Verification: product right bana rahe hain? Validation: right product bana rahe hain? Safety-critical aur contract work mein favourite hai kyunki har requirement test se trace hoti hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Mapping (memorise this table): User requirements ↔ Acceptance testing; System requirements ↔ System testing; High-level / architectural design ↔ Integration testing; Detailed / module design ↔ Unit testing; Coding at the vertex.",
        "मैपिंग (यह तालिका याद करें): User requirements ↔ Acceptance testing; System requirements ↔ System testing; High-level / architectural design ↔ Integration testing; Detailed / module design ↔ Unit testing; शीर्ष पर Coding।",
        "Mapping yaad karo: User req ↔ Acceptance; System req ↔ System test; HLD/architecture ↔ Integration; Detailed design ↔ Unit test; Coding vertex par.",
      ],
      [
        "Test artefacts are prepared on the way down (left arm) and executed on the way up (right arm). This is early test design, a major improvement over Waterfall’s late testing phase.",
        "टेस्ट artefact नीचे जाते समय (बाईं भुजा) तैयार होते हैं और ऊपर जाते समय (दाहिनी भुजा) चलाए जाते हैं। यह early test design है, जो Waterfall की देर से टेस्टिंग से बड़ा सुधार है।",
        "Test artefacts left arm par banate hain, right arm par chalate hain. Yeh early test design hai — Waterfall ki late testing se bada improvement.",
      ],
      [
        "Verification techniques on the left: reviews, walkthroughs, inspections, traceability matrices. Validation techniques on the right: execution of tests in an environment closer and closer to production.",
        "बाईं ओर Verification तकनीकें: reviews, walkthroughs, inspections, traceability matrices। दाईं ओर Validation: उत्पादन के निकटतर वातावरण में टेस्ट निष्पादन।",
        "Left par verification: reviews, walkthroughs, inspections, traceability. Right par validation: production-jaisa environment mein tests chalana.",
      ],
      [
        "Advantages: defects found earlier than in pure Waterfall; clear relationship between spec and test; good for projects with stable, documented requirements (defence, medical, automotive).",
        "लाभ: शुद्ध Waterfall से पहले दोष पकड़; spec और टेस्ट का स्पष्ट संबंध; स्थिर, दस्तावेजी आवश्यकताओं वाली परियोजनाओं (रक्षा, चिकित्सा, ऑटोमोटिव) के लिए अच्छा।",
        "Advantages: Waterfall se pehle defects milte hain; spec-test relation clear; stable documented requirements (defence, medical, automotive) ke liye accha.",
      ],
      [
        "Disadvantages: still largely sequential; working software is late; rigid with changing requirements; more documents than Agile; no risk-driven iteration like Spiral.",
        "हानियाँ: अभी भी अधिकतर क्रमिक; काम करता सॉफ्टवेयर देर से; बदलती आवश्यकताओं पर कठोर; Agile से अधिक दस्तावेज़; Spiral जैसी जोखिम-चालित iteration नहीं।",
        "Disadvantages: ab bhi sequential; working software late; changing requirements par rigid; Agile se zyada documents; Spiral jaisi risk-driven iteration nahi.",
      ],
      [
        "The V can be extended to a W-model (adding an extra testing path) or combined with increments. For BCA, stick to the four-level mapping plus V&V definitions.",
        "V को W-model तक बढ़ाया जा सकता है या increments से जोड़ा जा सकता है। BCA के लिए चार-स्तरीय मैपिंग और V&V परिभाषाएँ पर्याप्त हैं।",
        "V ko W-model tak badhaya ja sakta hai. BCA ke liye four-level mapping aur V&V definitions kaafi hain.",
      ],
    ]),
    D(
      "vmodel",
      "V-model: left arm development, right arm testing; each development level maps to a test level.",
      "V-model: बाईं भुजा विकास, दाहिनी भुजा टेस्टिंग; प्रत्येक विकास स्तर एक टेस्ट स्तर से जुड़ता है।",
      "V-model: left arm development, right arm testing; har development level ek test level se map hota hai.",
    ),
    TBL(
      [
        ["Left arm (build)", "बाईं भुजा (निर्माण)", "Left arm (build)"],
        ["Right arm (test)", "दाहिनी भुजा (टेस्ट)", "Right arm (test)"],
        ["V or V?", "V या V?", "V ya V?"],
      ],
      [
        [
          ["User / business requirements", "उपयोगकर्ता / व्यवसाय आवश्यकताएँ", "User / business requirements"],
          ["Acceptance testing (UAT)", "Acceptance testing (UAT)", "Acceptance testing (UAT)"],
          ["Validation", "Validation", "Validation"],
        ],
        [
          ["System requirements / SRS", "सिस्टम आवश्यकताएँ / SRS", "System requirements / SRS"],
          ["System testing", "सिस्टम टेस्टिंग", "System testing"],
          ["Validation", "Validation", "Validation"],
        ],
        [
          ["High-level design", "High-level design", "High-level design"],
          ["Integration testing", "Integration testing", "Integration testing"],
          ["Verification", "Verification", "Verification"],
        ],
        [
          ["Detailed design", "Detailed design", "Detailed design"],
          ["Unit testing", "Unit testing", "Unit testing"],
          ["Verification", "Verification", "Verification"],
        ],
      ],
    ),
    EXAM(
      "Draw the V-model and show the mapping of each development phase to a test phase. Define verification vs validation (Boehm). State advantages over Waterfall and limitations versus Agile/Spiral.",
      "V-model बनाकर प्रत्येक विकास चरण का टेस्ट चरण से मैपिंग दिखाएँ। Verification बनाम validation (Boehm) परिभाषित करें। Waterfall पर लाभ और Agile/Spiral की तुलना में सीमाएँ लिखें।",
      "V-model draw karke mapping dikhao. Verification vs validation (Boehm). Waterfall par advantages aur Agile/Spiral se limitations likho.",
    ),
  ]),

  "se-prototype": topic("se-prototype", [
    P(
      "A prototype is a working model of selected aspects of a system, built quickly to clarify requirements or to explore design. The Prototype model is used when the customer has a general objective but not detailed input/output/processing needs, or when the developer is unsure of algorithm efficiency, OS compatibility or HCI. Typical loop: gather known requirements → quick design of visible parts (especially UI) → build prototype → customer evaluates → refine requirements → iterate, then engineer the actual product (or evolve the prototype). Throwaway (rapid) prototypes are discarded after learning; evolutionary prototypes are refined into the delivered system. Prototyping reduces the risk of building the wrong product, which is the classic Waterfall failure mode.",
      "प्रोटोटाइप सिस्टम के चयनित पहलुओं का कार्यशील मॉडल है, जो आवश्यकताओं को स्पष्ट करने या डिज़ाइन खोजने के लिए शीघ्र बनता है। Prototype मॉडल तब उपयोग होता है जब ग्राहक के पास सामान्य उद्देश्य हो पर विस्तृत input/output/processing जरूरतें न हों, या डेवलपर एल्गोरिद्म दक्षता, OS अनुकूलता या HCI को लेकर अनिश्चित हो। सामान्य लूप: ज्ञात आवश्यकताएँ → दृश्य भागों (विशेषकर UI) का त्वरित डिज़ाइन → प्रोटोटाइप बनाना → ग्राहक मूल्यांकन → आवश्यकताएँ परिष्कृत → iterate, फिर वास्तविक उत्पाद इंजीनियर करना (या प्रोटोटाइप को विकसित करना)। Throwaway (rapid) प्रोटोटाइप सीखने के बाद त्याग दिए जाते हैं; evolutionary प्रोटोटाइप वितरित सिस्टम बन जाते हैं। प्रोटोटाइपिंग गलत उत्पाद बनाने का जोखिम घटाती है, जो Waterfall की क्लासिक विफलता है।",
      "Prototype system ke selected aspects ka working model hai, jaldi banaya jaata hai requirements clear karne ya design explore karne ke liye. Tab use hota hai jab customer ke paas general objective ho lekin detailed I/O na ho, ya developer algorithm/OS/HCI par unsure ho. Loop: known requirements → quick design (UI) → build → customer evaluate → refine → iterate. Throwaway seekh kar phenk dete hain; evolutionary delivered system ban jaata hai. Galat product banane ka risk kam hota hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "When to use: unclear HCI, novel algorithms, “I will know it when I see it” customers, proof-of-concept for feasibility, and elicitation workshops.",
        "कब उपयोग: अस्पष्ट HCI, नए एल्गोरिद्म, “देख कर पता चलेगा” वाले ग्राहक, feasibility का proof-of-concept, elicitation कार्यशालाएँ।",
        "Kab use: unclear HCI, naye algorithms, “dekh kar pata chalega” customers, feasibility ka POC, elicitation workshops.",
      ],
      [
        "Throwaway / rapid prototyping: built with dummy data, 4GLs or UI builders; thrown away so that the real system can be engineered with quality attributes that the prototype ignored (performance, security, maintainability).",
        "Throwaway / rapid prototyping: dummy डेटा, 4GL या UI builders से; फेंक दिया जाता है ताकि वास्तविक सिस्टम उन quality attributes के साथ बने जिन्हें प्रोटोटाइप ने अनदेखा किया (performance, security, maintainability)।",
        "Throwaway/rapid: dummy data, 4GL, UI builders; phenk diya jaata hai taaki real system performance, security, maintainability ke saath engineer ho.",
      ],
      [
        "Evolutionary prototyping: the prototype is iteratively strengthened until it becomes the product. Needs a solid architecture from the start, otherwise a “quick and dirty” core becomes unmaintainable.",
        "Evolutionary prototyping: प्रोटोटाइप को बार-बार मजबूत कर उत्पाद बना दिया जाता है। शुरू से ठोस architecture चाहिए, नहीं तो “quick and dirty” कोर unmaintainable हो जाता है।",
        "Evolutionary: prototype ko iteratively product bana dete hain. Shuru se solid architecture chahiye, warna quick-and-dirty core unmaintainable ho jaata hai.",
      ],
      [
        "Advantages: user involvement, early feedback, better requirement completeness, reduced risk of rejection at delivery, useful training vehicle.",
        "लाभ: उपयोगकर्ता भागीदारी, जल्दी फीडबैक, बेहतर requirement पूर्णता, delivery पर अस्वीकृति का कम जोखिम, प्रशिक्षण सहायक।",
        "Advantages: user involvement, early feedback, better completeness, delivery par reject hone ka kam risk, training ke kaam aata hai.",
      ],
      [
        "Disadvantages: customer may believe the prototype is the product and demand immediate delivery; developer may reuse throwaway code; incomplete analysis of non-functional requirements; management may skip documentation.",
        "हानियाँ: ग्राहक प्रोटोटाइप को उत्पाद मान तत्काल delivery माँग सकता है; डेवलपर throwaway कोड reuse कर सकता है; NFR का अधूरा विश्लेषण; प्रबंधन documentation छोड़ सकता है।",
        "Disadvantages: customer prototype ko product maan kar turant delivery maang sakta hai; developer throwaway code reuse kare; NFR adhoora; management documentation skip kare.",
      ],
      [
        "Horizontal prototype: wide UI with dummy back-end (good for requirements). Vertical prototype: one slice implemented end-to-end (good for technical risk). Mentioning this distinction scores extra marks.",
        "Horizontal prototype: चौड़ा UI, dummy बैक-एंड (आवश्यकताओं के लिए अच्छा)। Vertical prototype: एक स्लाइस अंत-से-अंत लागू (तकनीकी जोखिम के लिए)। यह अंतर अतिरिक्त अंक दिलाता है।",
        "Horizontal: chhada UI, dummy back-end (requirements). Vertical: ek slice end-to-end (technical risk). Yeh farq extra marks dilata hai.",
      ],
      [
        "Close cousins: RAD uses component-based prototyping under a short time box; Agile delivers evolutionary increments that are production-quality, not throwaways.",
        "निकट संबंधी: RAD छोटे time box में component-based prototyping करता है; Agile उत्पादन-गुणवत्ता वाले evolutionary increments देता है, throwaway नहीं।",
        "Close cousins: RAD short time-box mein component-based prototyping; Agile production-quality evolutionary increments deta hai, throwaway nahi.",
      ],
    ]),
    OL([
      [
        "Identify basic requirements and areas of uncertainty.",
        "मूल आवश्यकताएँ और अनिश्चितता के क्षेत्र पहचानें।",
        "Basic requirements aur uncertainty ke areas identify karo.",
      ],
      [
        "Quick design focusing on user-visible behaviour.",
        "उपयोगकर्ता-दृश्य व्यवहार पर केंद्रित त्वरित डिज़ाइन।",
        "User-visible behaviour par focused quick design.",
      ],
      [
        "Build the prototype (tools, dummy data, limited NFRs).",
        "प्रोटोटाइप बनाएँ (tools, dummy डेटा, सीमित NFR)।",
        "Prototype banao (tools, dummy data, limited NFRs).",
      ],
      [
        "Customer evaluation and feedback.",
        "ग्राहक मूल्यांकन और फीडबैक।",
        "Customer evaluation aur feedback.",
      ],
      [
        "Refine requirements; iterate or freeze and engineer the product.",
        "आवश्यकताएँ परिष्कृत करें; iterate करें या फ्रीज कर उत्पाद इंजीनियर करें।",
        "Requirements refine karo; iterate ya freeze karke product engineer karo.",
      ],
    ]),
    EXAM(
      "Explain the Prototype model with a diagram of the loop. Distinguish throwaway vs evolutionary and horizontal vs vertical. List advantages, disadvantages and a situation where Waterfall is worse than prototyping.",
      "Prototype मॉडल लूप के चित्र सहित समझाएँ। Throwaway बनाम evolutionary तथा horizontal बनाम vertical में अंतर करें। लाभ, हानियाँ और वह स्थिति लिखें जहाँ Waterfall प्रोटोटाइपिंग से बुरा है।",
      "Prototype model loop ke diagram ke saath. Throwaway vs evolutionary, horizontal vs vertical. Advantages, disadvantages, aur kab Waterfall se better hai.",
    ),
  ]),

  "se-rad": topic("se-rad", [
    P(
      "Rapid Application Development (RAD) is a high-speed adaptation of the linear sequential model that emphasises extremely short development cycles (typically 60–90 days) by using component-based construction and heavy user involvement. James Martin popularised RAD in the early 1990s. The model assumes that the business application can be modularised, that reusable components exist or can be generated, and that a committed customer team is available full-time. Phases commonly listed in Indian syllabi are: Business modelling, Data modelling, Process modelling, Application generation, and Testing & turnover. RAD fails when a system cannot be properly modularised, when high performance requires careful tuning, or when technical risk is high.",
      "Rapid Application Development (RAD) रैखिक क्रमिक मॉडल का उच्च-गति अनुकूलन है जो component-based निर्माण और गहन उपयोगकर्ता भागीदारी द्वारा अत्यंत छोटे विकास चक्र (प्रायः 60–90 दिन) पर बल देता है। James Martin ने 1990 के आरंभ में RAD को लोकप्रिय किया। मॉडल मानता है कि व्यावसायिक अनुप्रयोग मॉड्यूलर हो सकता है, reusable components मौजूद हैं या जनरेट किए जा सकते हैं, और एक प्रतिबद्ध ग्राहक टीम पूर्णकालिक उपलब्ध है। भारतीय पाठ्यक्रमों में सामान्य चरण: Business modelling, Data modelling, Process modelling, Application generation, और Testing & turnover। जब सिस्टम सही मॉड्यूलर न हो, उच्च performance के लिए सावधानीपूर्ण ट्यूनिंग चाहिए, या तकनीकी जोखिम अधिक हो, तब RAD असफल होता है।",
      "RAD linear sequential model ka high-speed version hai — 60–90 din ke short cycles, component-based construction, heavy user involvement. James Martin (early 1990s). Assume karta hai: application modular ho, reusable components hon, customer team full-time available ho. Phases: Business modelling, Data modelling, Process modelling, Application generation, Testing & turnover. Fail hota hai jab modularise na ho sake, high performance tuning chahiye, ya technical risk high ho.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Business modelling: what information drives the business, who generates it, where it goes. Output is a set of information flows among business functions.",
        "Business modelling: कौन-सी सूचना व्यवसाय चलाती है, कौन उत्पन्न करता है, कहाँ जाती है। आउटपुट व्यावसायिक कार्यों के बीच information flows है।",
        "Business modelling: kaunsi information business chalaati hai, kaun generate karta hai, kahan jaati hai. Output: information flows.",
      ],
      [
        "Data modelling: information flow is refined into data objects, attributes and relationships (like a quick ER model).",
        "Data modelling: information flow को data objects, attributes और relationships में परिष्कृत किया जाता है (त्वरित ER मॉडल जैसा)।",
        "Data modelling: information flow ko data objects, attributes, relationships mein refine kiya jaata hai (quick ER jaisa).",
      ],
      [
        "Process modelling: data objects are transformed to achieve the business functions; add, modify, delete, retrieve processes are specified.",
        "Process modelling: व्यावसायिक कार्यों के लिए data objects रूपांतरित होते हैं; add, modify, delete, retrieve प्रक्रियाएँ निर्दिष्ट होती हैं।",
        "Process modelling: business functions ke liye data objects transform hote hain; add/modify/delete/retrieve specify kiye jaate hain.",
      ],
      [
        "Application generation: 4GLs, code generators, reusable components and automated tools replace hand-coding wherever possible. This is why RAD is “rapid”.",
        "Application generation: 4GL, code generators, reusable components और स्वचालित उपकरण जहाँ संभव हो hand-coding की जगह लेते हैं। इसीलिए RAD “rapid” है।",
        "Application generation: 4GL, code generators, reusable components hand-coding ki jagah lete hain. Isi liye RAD rapid hai.",
      ],
      [
        "Testing and turnover: because reuse is high, many components are already tested; emphasis is on interface testing and user-driven acceptance. Teams “turn over” working modules to the customer in the time box.",
        "Testing and turnover: reuse अधिक होने से कई components पहले से परीक्षित हैं; बल interface testing और उपयोगकर्ता-चालित acceptance पर है। टीमें time box में कार्यशील मॉड्यूल ग्राहक को सौंपती हैं।",
        "Testing & turnover: reuse zyada hone se kai components pehle se tested; zor interface testing aur UAT par. Teams time box mein working modules customer ko de deti hain.",
      ],
      [
        "Constraints (must write in exams): (1) needs sufficient human resources for multiple RAD teams; (2) developers and customers must be committed to rapid-fire activities; (3) system must be modularisable; (4) not for high technical risk or novel technology; (5) not when performance is critical and components cannot be tuned; (6) time box of 2–3 months is typical — beyond that RAD loses meaning.",
        "बाधाएँ (परीक्षा में लिखें): (1) अनेक RAD टीमों के लिए पर्याप्त मानव संसाधन; (2) डेवलपर और ग्राहक तीव्र गतिविधियों के लिए प्रतिबद्ध; (3) सिस्टम मॉड्यूलर हो; (4) उच्च तकनीकी जोखिम या नई तकनीक पर नहीं; (5) जब performance निर्णायक हो और components ट्यून न हों तब नहीं; (6) 2–3 महीने का time box — उससे अधिक पर RAD अर्थहीन।",
        "Constraints: kaafi log multiple teams ke liye; developers-customers committed; system modular; high technical risk par nahi; critical performance par nahi; 2–3 month time box — usse zyada par RAD bekaar.",
      ],
      [
        "RAD vs Prototype: both involve users and speed, but RAD aims to deliver a production system via reusable components under a rigid time box; throwaway prototyping aims to learn, not necessarily to ship.",
        "RAD बनाम Prototype: दोनों में उपयोगकर्ता और गति हैं, पर RAD reusable components से production सिस्टम time box में देता है; throwaway prototyping सीखने के लिए है, शिप करने के लिए नहीं।",
        "RAD vs Prototype: dono mein users aur speed. RAD production system time box mein deta hai reusable components se; throwaway prototyping seekhne ke liye hai, ship karne ke liye nahi.",
      ],
    ]),
    TBL(
      [
        ["Fits RAD", "RAD उपयुक्त", "Fits RAD"],
        ["Does not fit RAD", "RAD अनुपयुक्त", "RAD fit nahi"],
      ],
      [
        [
          ["Information systems with clear modular boundaries", "स्पष्ट मॉड्यूल सीमाओं वाले सूचना सिस्टम", "Clear modules wale information systems"],
          ["Safety-critical or novel-algorithm systems", "सुरक्षा-महत्वपूर्ण या नए एल्गोरिद्म सिस्टम", "Safety-critical ya novel-algorithm systems"],
        ],
        [
          ["Reusable GUI and database components available", "Reusable GUI और database components उपलब्ध", "Reusable GUI aur DB components available"],
          ["Performance-critical kernels that need hand-tuning", "Performance-critical कर्नेल जिन्हें hand-tuning चाहिए", "Performance-critical kernels needing hand-tuning"],
        ],
        [
          ["Customer team can sit with developers for 60–90 days", "ग्राहक टीम 60–90 दिन डेवलपर्स के साथ बैठ सकती है", "Customer 60–90 din developers ke saath baith sake"],
          ["Stakeholders unavailable; requirements politically unstable", "Stakeholders अनुपलब्ध; आवश्यकताएँ राजनीतिक रूप से अस्थिर", "Stakeholders unavailable; politically unstable req"],
        ],
      ],
    ),
    EXAM(
      "List RAD phases (business, data, process modelling, application generation, testing & turnover). Write constraints / when RAD cannot be used — this is the most scored 5-mark part. Compare RAD with Waterfall and Prototype.",
      "RAD चरण लिखें (business, data, process modelling, application generation, testing & turnover)। बाधाएँ / कब RAD नहीं चल सकता — यही 5 अंक का सबसे स्कोर वाला भाग है। Waterfall और Prototype से तुलना करें।",
      "RAD phases list karo. Constraints / kab RAD nahi chalega — yeh 5-mark ka sabse scoring part hai. Waterfall aur Prototype se compare karo.",
    ),
  ]),

  "se-incremental": topic("se-incremental", [
    P(
      "The Incremental development model delivers the system as a series of increments, each of which is a usable product. The first increment is often a core product that implements basic requirements; later increments add supplementary features. Each increment passes through requirements, design, code and test, so the model combines Waterfall’s discipline inside an increment with iterative delivery across increments. Customers can use early increments, provide feedback, and spread cost over time. Incremental development is the ancestor of many Agile practices, but the increments and their requirements are usually planned up front rather than emerging sprint by sprint.",
      "Incremental development मॉडल सिस्टम को increments की श्रृंखला के रूप में देता है, जिनमें से प्रत्येक उपयोगी उत्पाद होता है। पहला increment प्रायः core product होता है जो मूल आवश्यकताएँ लागू करता है; बाद के increments पूरक विशेषताएँ जोड़ते हैं। प्रत्येक increment requirements, design, code और test से गुजरता है, अतः मॉडल increment के भीतर Waterfall का अनुशासन और increments के आर-पार iterative delivery जोड़ता है। ग्राहक प्रारंभिक increments उपयोग कर फीडबैक दे सकते हैं और लागत समय पर फैला सकते हैं। Incremental development कई Agile प्रथाओं का पूर्वज है, पर increments और उनकी आवश्यकताएँ प्रायः पहले से नियोजित होती हैं, sprint-दर-sprint उभरती नहीं।",
      "Incremental model system ko increments ki series mein deta hai, har increment usable product hota hai. Pehla increment aksar core product hota hai; baad wale features add karte hain. Har increment requirements-design-code-test se guzarta hai — andar Waterfall, bahar iterative delivery. Customer early increment use karke feedback deta hai, cost time par failti hai. Agile ka ancestor hai, lekin increments usually up front plan hote hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Core product first: the essential functions that make the system operational (e.g. a library system that can issue and return books) ship in increment 1; catalogues, SMS alerts and analytics wait for later increments.",
        "पहले core product: वे आवश्यक कार्य जो सिस्टम को चालू बनाते हैं (जैसे पुस्तकालय सिस्टम जो पुस्तक issue/return कर सके) increment 1 में जाते हैं; catalogues, SMS alerts और analytics बाद में।",
        "Pehle core product: essential functions increment 1 mein (jaise library issue/return); catalogues, SMS, analytics baad ke increments mein.",
      ],
      [
        "Each increment is Waterfall-like internally: analyse the increment’s requirements, design, build, test, then integrate with previous increments.",
        "प्रत्येक increment आंतरिक रूप से Waterfall जैसा: increment की आवश्यकताएँ, डिज़ाइन, निर्माण, परीक्षण, फिर पिछले increments से एकीकरण।",
        "Har increment andar se Waterfall jaisa: us increment ki requirements, design, build, test, phir previous se integrate.",
      ],
      [
        "Advantages: working software early; partial product can be deployed; requirements can be refined using operational experience; staffing can be planned (small core team, then more people); risk of total project failure is reduced.",
        "लाभ: जल्दी कार्यशील सॉफ्टवेयर; आंशिक उत्पाद deploy हो सकता है; परिचालन अनुभव से आवश्यकताएँ परिष्कृत; स्टाफिंग योजना (छोटी core टीम, फिर अधिक लोग); पूर्ण असफलता का जोखिम कम।",
        "Advantages: jaldi working software; partial product deploy; experience se requirements refine; staffing plan (chhoti core team, phir zyada log); total failure ka risk kam.",
      ],
      [
        "Disadvantages: later increments may require costly changes to the core if architecture was not designed for growth; waiting for later features can frustrate users; needs good increment planning and a stable architecture.",
        "हानियाँ: यदि architecture वृद्धि के लिए नहीं बनी तो बाद के increments core में महंगे परिवर्तन माँग सकते हैं; बाद की features का इंतज़ार उपयोगकर्ताओं को निराश कर सकता है; अच्छे increment planning और स्थिर architecture चाहिए।",
        "Disadvantages: architecture growth ke liye na ho to later increments core mein mehange changes maangte hain; users later features ka wait karke frustrated; acchi increment planning aur stable architecture chahiye.",
      ],
      [
        "Calendar-time overlap is possible: while increment n is being tested, increment n+1 can be designed — this is why incremental is faster than a single Waterfall of the whole system.",
        "कैलेंडर-समय ओवरलैप संभव: जब increment n टेस्ट हो रहा हो, increment n+1 डिज़ाइन हो सकता है — इसलिए पूरा सिस्टम एक Waterfall में करने से तेज है।",
        "Calendar overlap possible: increment n test ho raha ho to n+1 design ho sakta hai — poora system ek Waterfall se tez.",
      ],
      [
        "Contrast with evolutionary: incremental usually freezes the requirement set for each planned increment; evolutionary keeps the overall requirement set open and lets the product grow from a seed in response to feedback.",
        "Evolutionary से अंतर: incremental प्रायः प्रत्येक नियोजित increment की आवश्यकताओं को फ्रीज करता है; evolutionary समग्र आवश्यकता सेट खुला रखता है और फीडबैक से उत्पाद को बीज से बढ़ाता है।",
        "Evolutionary se farq: incremental har planned increment ki requirements freeze karta hai; evolutionary overall set khula rakhta hai aur feedback se seed badhata hai.",
      ],
      [
        "Typical exam example: an e-commerce site — Increment 1 catalogue + cart, Increment 2 payments, Increment 3 recommendations and wallet. The customer can start selling after Increment 2.",
        "विशिष्ट परीक्षा उदाहरण: e-commerce साइट — Increment 1 catalogue + cart, Increment 2 payments, Increment 3 recommendations और wallet। Increment 2 के बाद ग्राहक बेचना शुरू कर सकता है।",
        "Exam example: e-commerce — Inc 1 catalogue+cart, Inc 2 payments, Inc 3 recommendations+wallet. Increment 2 ke baad bechna shuru ho sakta hai.",
      ],
    ]),
    D(
      "incremental",
      "Incremental model: successive usable increments built on a core product, each passing through analysis–design–code–test.",
      "Incremental मॉडल: core product पर क्रमिक उपयोगी increments, प्रत्येक analysis–design–code–test से गुजरता है।",
      "Incremental model: core product par successive usable increments, har ek analysis–design–code–test se guzarta hai.",
    ),
    EXAM(
      "Draw incremental development, explain core product vs later increments, give 4 advantages. Distinguish incremental from Waterfall, Spiral and evolutionary — a standard 8-mark comparison.",
      "Incremental development बनाएँ, core product बनाम बाद के increments समझाएँ, 4 लाभ दें। Waterfall, Spiral और evolutionary से अंतर — मानक 8 अंक तुलना।",
      "Incremental draw karo, core vs later increments, 4 advantages. Waterfall, Spiral, evolutionary se farq — standard 8-mark comparison.",
    ),
  ]),

  "se-spiral": topic("se-spiral", [
    P(
      "The Spiral model, proposed by Barry Boehm (1986/1988), is a risk-driven evolutionary process. The project is pictured as a spiral; each loop is a phase (concept, specification, prototype, design, implementation, …). Angular movement around the spiral represents progress through activities in a cycle; radial movement represents growing cost and the accumulating product. Every cycle has four quadrants: (1) Determine objectives, alternatives and constraints; (2) Evaluate alternatives and identify/resolve risks (often via prototypes); (3) Develop and verify the next-level product; (4) Plan the next iteration. Spiral is chosen for large, high-risk, long-lived systems where neither pure Waterfall nor simple prototyping is enough.",
      "Spiral मॉडल, Barry Boehm (1986/1988) द्वारा प्रस्तावित, जोखिम-चालित evolutionary प्रक्रिया है। परियोजना सर्पिल के रूप में चित्रित होती है; प्रत्येक लूप एक चरण है (concept, specification, prototype, design, implementation, …)। सर्पिल के चारों ओर कोणीय गति चक्र की गतिविधियों में प्रगति दर्शाती है; त्रिज्यीय गति बढ़ती लागत और संचित उत्पाद दर्शाती है। प्रत्येक चक्र के चार quadrant: (1) उद्देश्य, विकल्प और बाधाएँ निर्धारित करें; (2) विकल्पों का मूल्यांकन तथा जोखिम पहचान/समाधान (प्रायः प्रोटोटाइप से); (3) अगले स्तर का उत्पाद विकसित व सत्यापित करें; (4) अगली iteration की योजना। Spiral बड़े, उच्च-जोखिम, दीर्घजीवी सिस्टम के लिए चुना जाता है जहाँ शुद्ध Waterfall या साधारण prototyping पर्याप्त नहीं।",
      "Spiral model Barry Boehm (1986/88) ne diya — risk-driven evolutionary process. Project spiral dikhti hai; har loop ek phase. Angular movement = cycle mein progress; radial = badhti cost aur product. Chaar quadrants: (1) objectives, alternatives, constraints; (2) evaluate, identify/resolve risks (prototypes); (3) develop and verify next-level product; (4) plan next iteration. Bade, high-risk, long-lived systems ke liye jab Waterfall ya simple prototype kaafi nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Four quadrants (write these exact names in exams): Planning / determine objectives; Risk analysis; Engineering (development and verification); Customer evaluation / planning the next cycle. Some books label Q1 Determine objectives, Q2 Identify and resolve risks, Q3 Development and test, Q4 Plan next phase.",
        "चार quadrant (परीक्षा में ये नाम लिखें): Planning / determine objectives; Risk analysis; Engineering (development and verification); Customer evaluation / अगले चक्र की योजना। कुछ पुस्तकें Q1 Determine objectives, Q2 Identify and resolve risks, Q3 Development and test, Q4 Plan next phase लिखती हैं।",
        "Chaar quadrants exam mein exactly likho: Determine objectives; Risk analysis; Engineering (develop+verify); Plan next cycle / customer evaluation.",
      ],
      [
        "Risk is first-class: each cycle starts by listing what could go wrong (technology, cost, usability, staffing) and inserting a prototype, simulation or benchmark to resolve the biggest risks before more money is spent.",
        "जोखिम प्रथम श्रेणी है: प्रत्येक चक्र में पहले संभावित विफलताएँ (तकनीक, लागत, usability, स्टाफिंग) सूचीबद्ध कर सबसे बड़े जोखिम हल करने के लिए prototype, simulation या benchmark लगाया जाता है, इससे पहले कि अधिक धन खर्च हो।",
        "Risk first-class hai: har cycle mein pehle kya galat ho sakta hai list karo, bade risks prototype/simulation/benchmark se solve karo — zyada paise se pehle.",
      ],
      [
        "Angular vs radial: angle = how far you have progressed through the activities of the current cycle; radius = cumulative cost and the size of the elaborated product.",
        "कोणीय बनाम त्रिज्यीय: कोण = वर्तमान चक्र की गतिविधियों में कितनी प्रगति; त्रिज्या = संचित लागत और विस्तृत उत्पाद का आकार।",
        "Angular vs radial: angle = current cycle ki activities mein kitni progress; radius = cumulative cost aur product ka size.",
      ],
      [
        "Anchoring milestones (Boehm later): Life Cycle Objectives (LCO), Life Cycle Architecture (LCA), Initial Operational Capability (IOC). These keep the spiral from circling forever.",
        "Anchoring milestones (बाद में Boehm): Life Cycle Objectives (LCO), Life Cycle Architecture (LCA), Initial Operational Capability (IOC)। ये सर्पिल को अनंत चक्कर से रोकते हैं।",
        "Anchoring milestones: LCO, LCA, IOC. Yeh spiral ko forever ghoomne se rokete hain.",
      ],
      [
        "Advantages: risk reduction; fits large and evolving systems; can embed Waterfall or prototype inside a cycle; customer sees progress each loop.",
        "लाभ: जोखिम कमी; बड़े व विकसित होते सिस्टम पर ठीक; चक्र के भीतर Waterfall या prototype समा सकता है; ग्राहक प्रत्येक लूप में प्रगति देखता है।",
        "Advantages: risk kam; bade evolving systems par fit; cycle ke andar Waterfall/prototype; customer har loop mein progress dekhta hai.",
      ],
      [
        "Disadvantages: needs risk-assessment expertise (rare in small teams); costly to run; not ideal for short, low-risk, well-understood projects; success depends on the ability to identify risks early; contract and milestone tracking is harder than Waterfall.",
        "हानियाँ: जोखिम-आकलन विशेषज्ञता चाहिए (छोटी टीमों में दुर्लभ); चलाना महंगा; छोटी, कम-जोखिम, सुस्पष्ट परियोजनाओं के लिए आदर्श नहीं; सफलता जोखिम जल्दी पहचानने पर निर्भर; Waterfall से अनुबंध व milestone ट्रैकिंग कठिन।",
        "Disadvantages: risk-assessment expertise chahiye (chhoti teams mein rare); mehnga; short low-risk projects ke liye nahi; early risk identification par depend; contract/milestones Waterfall se mushkil.",
      ],
      [
        "Win-Win Spiral (Boehm): adds negotiation among stakeholders so that each cycle begins with “win conditions” — useful extra for 2-mark questions.",
        "Win-Win Spiral (Boehm): stakeholders के बीच negotiation जोड़ता है ताकि प्रत्येक चक्र “win conditions” से शुरू हो — 2 अंक के लिए उपयोगी अतिरिक्त।",
        "Win-Win Spiral (Boehm): stakeholders ke beech negotiation, har cycle win conditions se start — 2-mark extra.",
      ],
    ]),
    D(
      "spiral",
      "Spiral model: each loop has four quadrants — objectives, risk analysis, engineering, evaluation — with cost growing radially.",
      "Spiral मॉडल: प्रत्येक लूप में चार quadrant — objectives, risk analysis, engineering, evaluation — लागत त्रिज्यीय रूप से बढ़ती है।",
      "Spiral model: har loop mein chaar quadrants — objectives, risk analysis, engineering, evaluation — cost radially badhti hai.",
    ),
    EXAM(
      "Draw the spiral, name Boehm, label four quadrants, explain angular vs radial dimension. Write when to use it and 3 disadvantages. Win-Win spiral and LCO/LCA/IOC are bonus points.",
      "सर्पिल बनाएँ, Boehm का नाम, चार quadrant, कोणीय बनाम त्रिज्यीय आयाम। कब उपयोग और 3 हानियाँ। Win-Win spiral तथा LCO/LCA/IOC बोनस अंक हैं।",
      "Spiral draw karo, Boehm ka naam, chaar quadrants, angular vs radial. Kab use, 3 disadvantages. Win-Win aur LCO/LCA/IOC bonus marks.",
    ),
  ]),

  "se-evolutionary": topic("se-evolutionary", [
    P(
      "Evolutionary process models build a more complete version of the software with each pass, using customer feedback as the selection pressure — analogous to biological evolution. The family includes evolutionary prototyping, the incremental model, the spiral model, and concurrent development. The common idea: deliver something executable early, learn, and evolve the specification and the product together. Unlike a single-pass Waterfall, evolutionary models accept that the complete requirement set is not known at t = 0. They differ in how they control risk (spiral), how they slice function (incremental), and whether early versions are throwaways or production code.",
      "Evolutionary process models प्रत्येक पास में सॉफ्टवेयर का अधिक पूर्ण संस्करण बनाते हैं, ग्राहक फीडबैक को चयन दबाव की तरह उपयोग कर — जैविक विकास के समान। परिवार में evolutionary prototyping, incremental model, spiral model और concurrent development हैं। साझा विचार: जल्दी कुछ executable दें, सीखें, और specification व उत्पाद साथ-साथ विकसित करें। एकल-पास Waterfall के विपरीत, evolutionary models मानते हैं कि पूर्ण आवश्यकता सेट t = 0 पर ज्ञात नहीं। वे जोखिम नियंत्रण (spiral), फ़ंक्शन काटने (incremental), और यह कि प्रारंभिक संस्करण throwaway हैं या production code, इन बातों में भिन्न हैं।",
      "Evolutionary models har pass mein zyada complete version banate hain, customer feedback selection pressure ki tarah — biological evolution jaisa. Family: evolutionary prototyping, incremental, spiral, concurrent. Idea: jaldi executable do, seekho, spec aur product saath evolve karo. Waterfall se farq: complete requirements t=0 par nahi. Farq is baat mein hai ki risk kaise control (spiral), function kaise slice (incremental), early version throwaway hai ya production.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Motivation: real users discover what they need by using a system; markets change; technology risk is revealed only by building. Evolution is therefore the honest model of most software, not a compromise.",
        "प्रेरणा: वास्तविक उपयोगकर्ता सिस्टम चलाकर जानते हैं कि उन्हें क्या चाहिए; बाजार बदलते हैं; तकनीक जोखिम बनाने पर ही खुलता है। अतः अधिकांश सॉफ्टवेयर के लिए evolution ईमानदार मॉडल है, समझौता नहीं।",
        "Motivation: real users system chala kar jaante hain kya chahiye; market badalta hai; tech risk banane par khulta hai. Isliye evolution compromise nahi, honest model hai.",
      ],
      [
        "Evolutionary prototyping vs throwaway: evolutionary keeps the code; each iteration adds robustness, complete function and NFRs until the prototype is the product.",
        "Evolutionary prototyping बनाम throwaway: evolutionary कोड रखता है; प्रत्येक iteration robustness, पूर्ण function और NFR जोड़ती है जब तक प्रोटोटाइप उत्पाद न बन जाए।",
        "Evolutionary prototyping vs throwaway: evolutionary code rakhta hai; har iteration robustness, full function, NFR jodti hai jab tak prototype product na ban jaye.",
      ],
      [
        "Incremental is a planned evolutionary strategy: the requirement set is partitioned in advance into increments of increasing capability.",
        "Incremental एक नियोजित evolutionary रणनीति है: आवश्यकता सेट पहले से बढ़ती क्षमता के increments में बाँटा जाता है।",
        "Incremental planned evolutionary strategy hai: requirement set pehle se increasing capability ke increments mein baanta jaata hai.",
      ],
      [
        "Spiral is a risk-driven evolutionary strategy: the next increment’s content is chosen to resolve the current highest risk, not merely to add the next feature on a list.",
        "Spiral जोखिम-चालित evolutionary रणनीति है: अगले increment की सामग्री वर्तमान सबसे बड़े जोखिम को हल करने के लिए चुनी जाती है, केवल सूची की अगली feature जोड़ने के लिए नहीं।",
        "Spiral risk-driven evolutionary hai: agle increment ki content current highest risk solve karne ke liye choose hoti hai, sirf next feature ke liye nahi.",
      ],
      [
        "Concurrent / concurrent development model: activities such as modelling, construction and deployment happen in parallel states; a trigger (e.g. change request) moves the product from one state to another. Useful for describing real organisations.",
        "Concurrent development मॉडल: modelling, construction और deployment समानांतर अवस्थाओं में चलते हैं; कोई trigger (जैसे change request) उत्पाद को एक अवस्था से दूसरी में ले जाता है। वास्तविक संगठनों का वर्णन करने में उपयोगी।",
        "Concurrent model: modelling, construction, deployment parallel states mein; trigger (change request) product ko state se state le jaata hai. Real organisations describe karne mein useful.",
      ],
      [
        "Dangers: requirements creep without a freeze point; architecture erosion; never-ending projects; customer expecting production quality from a first sketch. Mitigation: time boxes, a defined architecture, and explicit “done” criteria per evolution step.",
        "खतरे: फ्रीज बिंदु के बिना requirements creep; architecture क्षरण; कभी न खत्म होने वाली परियोजनाएँ; ग्राहक पहले रेखाचित्र से production quality की अपेक्षा। निवारण: time boxes, परिभाषित architecture, प्रत्येक कदम पर स्पष्ट “done” मानदंड।",
        "Khatre: freeze ke bina requirements creep; architecture erosion; kabhi na khatam projects; pehle sketch se production quality. Mitigation: time boxes, defined architecture, explicit done criteria.",
      ],
      [
        "Exam framing: “Evolutionary models” is an umbrella. Always name at least incremental, spiral and evolutionary prototyping, then contrast them on planning vs risk vs throwaway code.",
        "परीक्षा ढाँचा: “Evolutionary models” एक छत्र है। कम से कम incremental, spiral और evolutionary prototyping नाम दें, फिर planning बनाम risk बनाम throwaway code पर अंतर करें।",
        "Exam framing: Evolutionary models umbrella hai. Kam se kam incremental, spiral, evolutionary prototyping naam do, phir planning vs risk vs throwaway par farq karo.",
      ],
    ]),
    TBL(
      [
        ["Model", "मॉडल", "Model"],
        ["What evolves", "क्या विकसित होता है", "Kya evolve hota hai"],
        ["Control mechanism", "नियंत्रण तंत्र", "Control mechanism"],
      ],
      [
        [
          ["Evolutionary prototype", "Evolutionary prototype", "Evolutionary prototype"],
          ["The running system itself", "चलता सिस्टम स्वयं", "Running system khud"],
          ["Customer feedback each iteration", "प्रत्येक iteration पर ग्राहक फीडबैक", "Har iteration par customer feedback"],
        ],
        [
          ["Incremental", "Incremental", "Incremental"],
          ["Capability, feature by feature", "क्षमता, feature दर feature", "Capability, feature by feature"],
          ["Pre-planned increment list", "पूर्व-नियोजित increment सूची", "Pre-planned increment list"],
        ],
        [
          ["Spiral", "Spiral", "Spiral"],
          ["Product + understanding of risk", "उत्पाद + जोखिम की समझ", "Product + risk ki samajh"],
          ["Risk analysis each cycle", "प्रत्येक चक्र जोखिम विश्लेषण", "Har cycle risk analysis"],
        ],
      ],
    ),
    EXAM(
      "Define evolutionary process models and explain how incremental, spiral and evolutionary prototyping belong to this family. Give two dangers of unconstrained evolution. This topic is often a short note (5 marks) or part of a comparison question.",
      "Evolutionary process models परिभाषित करें और बताएँ incremental, spiral तथा evolutionary prototyping इस परिवार में कैसे हैं। असीमित evolution के दो खतरे दें। यह विषय प्रायः संक्षिप्त टिप्पणी (5 अंक) या तुलना प्रश्न का भाग है।",
      "Evolutionary process models define karo; incremental, spiral, evolutionary prototyping is family mein kaise hain. Do dangers. Aksar 5-mark short note ya comparison ka part.",
    ),
  ]),

  "se-agile": topic("se-agile", [
    P(
      "Agile software development is a family of iterative, incremental methods that value working software and response to change over heavy documentation and frozen plans. The Agile Manifesto (February 2001, Snowbird, Utah) was signed by 17 practitioners including Beck, Beedle, Cockburn, Cunningham, Fowler, Highsmith, Martin, Schwaber and Sutherland. Four values and twelve principles guide practices such as Scrum, Extreme Programming (XP), Kanban and Crystal. Agile is now the default industrial approach for business-information and web/mobile systems; it is less automatic for certified safety-critical software, where plan-driven evidence is still required. For BCA exams, manifesto values, Scrum roles/artefacts/events, and a comparison with Waterfall are mandatory.",
      "Agile सॉफ्टवेयर विकास iterative, incremental विधियों का परिवार है जो भारी documentation और जमे प्लान से अधिक कार्यशील सॉफ्टवेयर और परिवर्तन की प्रतिक्रिया को महत्व देता है। Agile Manifesto (फरवरी 2001, Snowbird, Utah) पर Beck, Beedle, Cockburn, Cunningham, Fowler, Highsmith, Martin, Schwaber और Sutherland सहित 17 pratitioners ने हस्ताक्षर किए। चार मूल्य और बारह सिद्धांत Scrum, Extreme Programming (XP), Kanban और Crystal जैसी प्रथाओं का मार्गदर्शन करते हैं। व्यवसाय-सूचना और web/mobile सिस्टम के लिए Agile अब औद्योगिक डिफ़ॉल्ट है; प्रमाणित सुरक्षा-महत्वपूर्ण सॉफ्टवेयर पर कम स्वचालित है, जहाँ plan-driven साक्ष्य अभी चाहिए। BCA परीक्षा में manifesto मूल्य, Scrum roles/artefacts/events, और Waterfall से तुलना अनिवार्य हैं।",
      "Agile iterative-incremental methods ka family hai jo working software aur change ke response ko bhaari documentation aur frozen plans se upar maanta hai. Agile Manifesto Feb 2001, Snowbird, Utah — 17 logon ne sign kiya. Chaar values, barah principles; Scrum, XP, Kanban, Crystal. Business/web/mobile ke liye default; safety-critical par plan-driven evidence ab bhi chahiye. Exam mein manifesto values, Scrum roles/artefacts/events, Waterfall comparison zaroori.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Four values: (1) Individuals and interactions over processes and tools; (2) Working software over comprehensive documentation; (3) Customer collaboration over contract negotiation; (4) Responding to change over following a plan. The manifesto says the items on the right have value, but the items on the left are valued more.",
        "चार मूल्य: (1) Individuals and interactions over processes and tools; (2) Working software over comprehensive documentation; (3) Customer collaboration over contract negotiation; (4) Responding to change over following a plan। घोषणापत्र कहता है कि दाईं वस्तुएँ मूल्यवान हैं, पर बाईं अधिक मूल्यवान हैं।",
        "Chaar values: Individuals & interactions > processes & tools; Working software > comprehensive docs; Customer collaboration > contract negotiation; Responding to change > following a plan. Right side ki bhi value hai, left zyada.",
      ],
      [
        "Selected principles (often asked): early and continuous delivery of valuable software; welcome changing requirements even late; business people and developers work together daily; face-to-face conversation; working software is the primary measure of progress; sustainable pace; technical excellence and good design; simplicity; self-organising teams; regular retrospectives.",
        "चयनित सिद्धांत (अक्सर पूछे जाते हैं): मूल्यवान सॉफ्टवेयर की जल्दी व निरंतर delivery; देर से भी बदलती आवश्यकताएँ स्वागत योग्य; व्यवसाय और डेवलपर रोज़ साथ काम; आमने-सामने बात; कार्यशील सॉफ्टवेयर प्रगति का प्राथमिक माप; सतत गति; तकनीकी उत्कृष्टता व अच्छा डिज़ाइन; सरलता; स्व-संगठित टीमें; नियमित retrospective।",
        "Principles: early continuous delivery; late change welcome; business+dev daily saath; face-to-face; working software primary measure; sustainable pace; technical excellence; simplicity; self-organising teams; retrospectives.",
      ],
      [
        "Scrum: Product Owner (backlog), Scrum Master (servant-leader, removes impediments), Development Team. Artefacts: Product Backlog, Sprint Backlog, Increment. Events: Sprint (1–4 weeks), Sprint Planning, Daily Scrum (15 min), Sprint Review, Sprint Retrospective.",
        "Scrum: Product Owner (backlog), Scrum Master (servant-leader, बाधाएँ हटाता है), Development Team। Artefacts: Product Backlog, Sprint Backlog, Increment। Events: Sprint (1–4 सप्ताह), Sprint Planning, Daily Scrum (15 मिनट), Sprint Review, Sprint Retrospective।",
        "Scrum: PO (backlog), SM (impediments hatata hai), Dev Team. Artefacts: Product Backlog, Sprint Backlog, Increment. Events: Sprint 1–4 weeks, Planning, Daily Scrum 15 min, Review, Retro.",
      ],
      [
        "XP practices: pair programming, test-driven development (TDD), continuous integration, refactoring, simple design, coding standards, collective ownership, 40-hour week, on-site customer, user stories and small releases.",
        "XP प्रथाएँ: pair programming, test-driven development (TDD), continuous integration, refactoring, simple design, coding standards, collective ownership, 40-hour week, on-site customer, user stories और small releases।",
        "XP: pair programming, TDD, CI, refactoring, simple design, coding standards, collective ownership, 40-hour week, on-site customer, user stories, small releases.",
      ],
      [
        "Advantages: fast feedback, higher customer satisfaction, ability to reprioritise, early ROI, motivated teams. Disadvantages: poor fit when contracts demand a frozen spec; less documentation for future maintainers; needs experienced, co-located (or well-connected) teams; scope can creep if Product Owner is weak.",
        "लाभ: तेज फीडबैक, अधिक ग्राहक संतुष्टि, पुनः प्राथमिकता, जल्दी ROI, प्रेरित टीमें। हानियाँ: जमी spec माँगने वाले अनुबंधों पर कम ठीक; भविष्य के maintainers के लिए कम documentation; अनुभवी, co-located (या सुसंबद्ध) टीमें चाहिए; कमजोर Product Owner पर scope फैल सकता है।",
        "Advantages: fast feedback, customer satisfaction, reprioritise, early ROI. Disadvantages: frozen-spec contracts par kam fit; kam documentation; experienced teams chahiye; weak PO par scope creep.",
      ],
      [
        "Agile is not “no process” and not “no documentation”. It is a different risk strategy: buy information with short increments instead of buying certainty with a big up-front design (BDUF).",
        "Agile “कोई प्रक्रिया नहीं” या “कोई documentation नहीं” नहीं है। यह भिन्न जोखिम रणनीति है: बड़े up-front डिज़ाइन (BDUF) से निश्चितता खरीदने की जगह छोटे increments से जानकारी खरीदना।",
        "Agile “no process / no docs” nahi. Alag risk strategy hai: BDUF se certainty kharidne ki jagah short increments se information kharidna.",
      ],
    ]),
    D(
      "agile",
      "Agile / Scrum loop: product backlog → sprint planning → sprint (daily scrum) → increment → review and retrospective.",
      "Agile / Scrum लूप: product backlog → sprint planning → sprint (daily scrum) → increment → review और retrospective।",
      "Agile/Scrum loop: product backlog → sprint planning → sprint (daily scrum) → increment → review aur retrospective.",
    ),
    EXAM(
      "Write the four Agile values verbatim. Explain Scrum roles, artefacts and events. Compare Agile with Waterfall (change, documentation, customer, delivery). XP practices may appear as 2-mark bullets.",
      "चार Agile मूल्य शब्दशः लिखें। Scrum roles, artefacts और events समझाएँ। Agile की Waterfall से तुलना (change, documentation, customer, delivery)। XP प्रथाएँ 2 अंक की गोलियों में आ सकती हैं।",
      "Chaar Agile values verbatim likho. Scrum roles, artefacts, events. Agile vs Waterfall. XP practices 2-mark bullets mein aa sakti hain.",
    ),
  ]),

  "se-req-gathering": topic("se-req-gathering", [
    P(
      "Requirement gathering (elicitation) is the process of discovering what the customer and other stakeholders need from the software. It is the most error-prone early activity: a missed or misunderstood requirement is far cheaper to fix now than after coding. Elicitation is not a single interview; it is a planned combination of techniques that uncover functions, constraints, domain rules and unspoken expectations. The output feeds analysis (resolving conflicts, modelling) and is written into user and system requirements. In the requirements-engineering process the usual order is: inception → elicitation → elaboration → negotiation → specification → validation, with management running in parallel.",
      "Requirement gathering (elicitation) वह प्रक्रिया है जिसमें पता चलता है कि ग्राहक और अन्य stakeholders सॉफ्टवेयर से क्या चाहते हैं। यह सबसे त्रुटि-प्रवण प्रारंभिक गतिविधि है: छूटी या गलत समझी requirement कोडिंग के बाद ठीक करने से कहीं सस्ती अभी है। Elicitation एक साक्षात्कार नहीं; यह तकनीकों का नियोजित संयोजन है जो functions, बाधाएँ, domain नियम और अनकही अपेक्षाएँ उजागर करता है। आउटपुट विश्लेषण (संघर्ष हल, modelling) में जाता है और user तथा system requirements में लिखा जाता है। Requirements-engineering प्रक्रिया का सामान्य क्रम: inception → elicitation → elaboration → negotiation → specification → validation, समानांतर में management।",
      "Requirement gathering (elicitation) se pata chalta hai customer aur stakeholders software se kya chahte hain. Sabse error-prone early activity: galat requirement ab sasti, coding ke baad mehngi. Elicitation ek interview nahi — techniques ka combination jo functions, constraints, domain rules, unspoken expectations nikaalta hai. Output analysis mein jaata hai, user/system requirements mein likha jaata hai. Order: inception → elicitation → elaboration → negotiation → specification → validation.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Inception: ask context-free questions — who is behind the request, who will use it, what is the economic benefit, is there another source for the solution? Establishes stakeholders and overall scope.",
        "Inception: context-free प्रश्न — अनुरोध किसके पीछे, कौन उपयोग करेगा, आर्थिक लाभ क्या, क्या दूसरा स्रोत है? Stakeholders और समग्र scope स्थापित करता है।",
        "Inception: context-free questions — request kiske peeche, kaun use karega, economic benefit, kya doosra source hai? Stakeholders aur scope set hote hain.",
      ],
      [
        "Interviews: structured (fixed questionnaire) or unstructured (open conversation). Need both open questions (“walk me through a day”) and closed questions. Interview several roles; one manager does not represent clerks.",
        "साक्षात्कार: structured (निश्चित प्रश्नावली) या unstructured (खुली बात)। खुले प्रश्न (“एक दिन बताइए”) और बंद प्रश्न दोनों चाहिए। कई भूमिकाएँ पूछें; एक प्रबंधक क्लर्कों का प्रतिनिधित्व नहीं करता।",
        "Interviews: structured ya unstructured. Open (“ek din batao”) aur closed dono. Kai roles poochho; ek manager clerks ko represent nahi karta.",
      ],
      [
        "Questionnaires and surveys: cheap for many geographically spread users; poor for deep or conflicting needs. Observation / ethnography: sit with users doing the real job; captures tacit knowledge that interviews miss.",
        "प्रश्नावली और सर्वे: कई भौगोलिक रूप से फैले उपयोगकर्ताओं के लिए सस्ते; गहरी या संघर्षपूर्ण जरूरतों के लिए कमजोर। Observation / ethnography: वास्तविक काम करते उपयोगकर्ताओं के साथ बैठें; साक्षात्कार से छूटी मौन ज्ञान पकड़ती है।",
        "Questionnaires: bahut users ke liye saste; deep/conflicting needs par kamzor. Observation/ethnography: real kaam dekhna — tacit knowledge milti hai jo interview miss karta hai.",
      ],
      [
        "Workshops / Facilitated Application Specification Technique (FAST): a controlled meeting of customers and developers with a facilitator, agenda, and definition of rules. Joint Application Development (JAD) is a similar IBM-originated practice.",
        "कार्यशाला / FAST: facilitator, एजेंडा और नियमों के साथ ग्राहकों व डेवलपर्स की नियंत्रित बैठक। Joint Application Development (JAD) इसी प्रकार की IBM-मूल प्रथा है।",
        "Workshops/FAST: facilitator, agenda, rules ke saath customers aur developers ki controlled meeting. JAD similar IBM practice hai.",
      ],
      [
        "Use cases and user stories: describe interaction from an actor’s point of view. Prototypes and mock-ups make HCI requirements concrete. Document analysis and competitor products provide baseline features.",
        "Use cases और user stories: अभिनेता के दृष्टिकोण से संपर्क वर्णन। Prototypes और mock-ups HCI आवश्यकताओं को ठोस बनाते हैं। Document analysis और प्रतिस्पर्धी उत्पाद आधारभूत features देते हैं।",
        "Use cases/user stories actor ke viewpoint se interaction. Prototypes/mock-ups HCI ko concrete banate hain. Document analysis aur competitor products baseline features dete hain.",
      ],
      [
        "Problems: stakeholders do not know what they want; conflicting requirements; organisational politics; volatile requirements; the vocabulary gap between users and developers (domain terms vs CS terms).",
        "समस्याएँ: stakeholders नहीं जानते वे क्या चाहते हैं; संघर्षपूर्ण आवश्यकताएँ; संगठनात्मक राजनीति; अस्थिर आवश्यकताएँ; उपयोगकर्ताओं और डेवलपर्स के बीच शब्दावली अंतर (domain शब्द बनाम CS शब्द)।",
        "Problems: stakeholders nahi jaante kya chahiye; conflicting requirements; politics; volatile requirements; vocabulary gap (domain terms vs CS terms).",
      ],
      [
        "Quality of elicitation is judged later by completeness, consistency and testability of the SRS. Always record source (who said it) for traceability.",
        "Elicitation की गुणवत्ता बाद में SRS की पूर्णता, संगति और परीक्षण-योग्यता से आँकी जाती है। Traceability के लिए स्रोत (किसने कहा) हमेशा दर्ज करें।",
        "Elicitation ki quality baad mein SRS ki completeness, consistency, testability se naapi jaati hai. Traceability ke liye source (kisne kaha) hamesha record karo.",
      ],
    ]),
    OL([
      [
        "Identify stakeholders and business goals (inception).",
        "Stakeholders और व्यावसायिक लक्ष्य पहचानें (inception)।",
        "Stakeholders aur business goals identify karo (inception).",
      ],
      [
        "Select elicitation techniques appropriate to the domain.",
        "Domain के अनुकूल elicitation तकनीकें चुनें।",
        "Domain ke hisaab se elicitation techniques chuno.",
      ],
      [
        "Collect raw statements; tag source and priority.",
        "कच्चे कथन संग्रह करें; स्रोत और प्राथमिकता टैग करें।",
        "Raw statements collect karo; source aur priority tag karo.",
      ],
      [
        "Analyse, resolve conflicts, model (use cases, DFD, class model).",
        "विश्लेषण, संघर्ष हल, मॉडल (use cases, DFD, class model)।",
        "Analyse, conflicts resolve, model (use cases, DFD, class model).",
      ],
      [
        "Negotiate, specify, and pass to validation.",
        "Negotiate करें, specify करें, validation को दें।",
        "Negotiate, specify, validation ko do.",
      ],
    ]),
    EXAM(
      "List elicitation techniques (interview, questionnaire, observation, FAST/JAD, prototype, use case, document analysis) with one merit and one limitation each. Describe problems in gathering requirements. FAST/JAD is a frequent 2-mark name-drop.",
      "Elicitation तकनीकें (interview, questionnaire, observation, FAST/JAD, prototype, use case, document analysis) प्रत्येक के एक गुण व एक सीमा सहित लिखें। आवश्यकताओं के संग्रह की समस्याएँ बताएँ। FAST/JAD अक्सर 2 अंक में नाम पूछा जाता है।",
      "Elicitation techniques list karo, ek merit ek limitation. Gathering problems. FAST/JAD aksar 2-mark name-drop hai.",
    ),
  ]),

  "se-feasibility": topic("se-feasibility", [
    P(
      "A feasibility study asks a blunt question before serious money is spent: should we build this system at all, and can we? It is a short, focused study (often 2–6 weeks) that examines technical, economic, operational, legal/ethical and schedule feasibility. The output is a feasibility report with a go / no-go / go-with-changes recommendation. Skipping feasibility is a classic cause of failed campus and government projects: the idea was attractive, the organisation could not run or afford it. In SDLC, feasibility sits at the front of communication/planning, or as a mini-project before the full SRS.",
      "Feasibility study गंभीर धन खर्च से पहले सीधा प्रश्न पूछती है: क्या यह सिस्टम बनाना चाहिए, और क्या हम बना सकते हैं? यह छोटा, केंद्रित अध्ययन (प्रायः 2–6 सप्ताह) है जो तकनीकी, आर्थिक, परिचालन, कानूनी/नैतिक और अनुसूची व्यवहार्यता जाँचता है। आउटपुट feasibility report होता है जिसमें go / no-go / go-with-changes सिफारिश होती है। Feasibility छोड़ना असफल परिसर व सरकारी परियोजनाओं का क्लासिक कारण है: विचार आकर्षक था, संगठन चला या वहन नहीं सकता था। SDLC में feasibility communication/planning के आगे, या पूर्ण SRS से पहले mini-project के रूप में बैठती है।",
      "Feasibility study paise se pehle poochhti hai: kya yeh system banana chahiye, kya hum bana sakte hain? Short study (2–6 weeks) — technical, economic, operational, legal/ethical, schedule. Output: feasibility report with go / no-go / go-with-changes. Skip karna failed campus/govt projects ka classic kaaran. SDLC mein communication/planning ke aage ya full SRS se pehle.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Technical feasibility: does the technology exist, does the team have the skill, are performance/security/reliability targets achievable, are vendors and APIs stable? A prototype or spike may be used as evidence.",
        "Technical feasibility: क्या तकनीक मौजूद है, टीम के पास कौशल है, performance/security/reliability लक्ष्य साध्य हैं, vendors और APIs स्थिर हैं? साक्ष्य के लिए prototype या spike हो सकता है।",
        "Technical: technology exist karti hai? Team ke paas skill? Performance/security/reliability achievable? Vendors/APIs stable? Prototype/spike evidence ban sakta hai.",
      ],
      [
        "Economic feasibility (cost–benefit): development + operational cost versus tangible benefits (staff saved, revenue, error reduction) and intangible benefits (goodwill, compliance). Tools include Payback Period, NPV, ROI and Break-even analysis.",
        "Economic feasibility (लागत–लाभ): विकास + परिचालन लागत बनाम मूर्त लाभ (बचा स्टाफ, राजस्व, त्रुटि कमी) और अमूर्त लाभ (सद्भावना, अनुपालन)। उपकरण: Payback Period, NPV, ROI, Break-even analysis।",
        "Economic (cost–benefit): development+operational cost vs tangible (staff, revenue, fewer errors) aur intangible (goodwill, compliance). Tools: Payback, NPV, ROI, Break-even.",
      ],
      [
        "Operational / organisational feasibility: will people actually use it? Does it fit culture, skills, union rules, existing processes? A technically perfect system that clerks refuse is infeasible.",
        "Operational / organisational feasibility: क्या लोग वास्तव में उपयोग करेंगे? क्या संस्कृति, कौशल, यूनियन नियम, मौजूदा प्रक्रियाओं से मेल खाता है? तकनीकी रूप से पूर्ण सिस्टम जिसे क्लर्क नकारें, infeasible है।",
        "Operational: kya log use karenge? Culture, skills, union rules, existing processes se fit? Technically perfect system jo clerks refuse karein woh infeasible hai.",
      ],
      [
        "Legal, ethical and security feasibility: licences, data-protection (IT Act, DPDP in India), medical/aviation certification, copyright of components, privacy of student or citizen data.",
        "कानूनी, नैतिक और सुरक्षा feasibility: लाइसेंस, डेटा-सुरक्षा (भारत में IT Act, DPDP), चिकित्सा/उड्डयन प्रमाणन, components का copyright, छात्र या नागरिक डेटा की गोपनीयता।",
        "Legal/ethical/security: licences, data-protection (IT Act, DPDP), medical/aviation certification, copyright, student/citizen data ki privacy.",
      ],
      [
        "Schedule feasibility: can a useful system be delivered by the hard deadline (exam portal before semester, GST change by a notified date)? If not, scope must shrink or the project should stop.",
        "Schedule feasibility: क्या उपयोगी सिस्टम कठोर समय-सीमा तक दिया जा सकता है (सेमेस्टर से पहले परीक्षा पोर्टल, अधिसूचित तिथि तक GST परिवर्तन)? यदि नहीं, scope घटाना या परियोजना रोकनी चाहिए।",
        "Schedule: kya useful system hard deadline tak mil sakta hai (semester se pehle exam portal)? Nahi to scope ghatao ya project rok do.",
      ],
      [
        "Political / cultural feasibility (sometimes listed separately): management support, turf wars between departments, and who loses power if the system succeeds.",
        "राजनीतिक / सांस्कृतिक feasibility (कभी अलग सूचीबद्ध): प्रबंधन समर्थन, विभागों के बीच अधिकार संघर्ष, और सिस्टम सफल होने पर कौन शक्ति खोता है।",
        "Political/cultural: management support, departments ke beech turf wars, system successful ho to kaun power khota hai.",
      ],
      [
        "The feasibility report typically contains: problem definition, alternatives (including “do nothing”), evaluation of each feasibility dimension, recommended alternative, high-level plan and risks. “Do nothing” is a valid alternative.",
        "Feasibility report में प्रायः: समस्या परिभाषा, विकल्प (including “do nothing”), प्रत्येक आयाम का मूल्यांकन, अनुशंसित विकल्प, उच्च-स्तरीय योजना और जोखिम। “Do nothing” वैध विकल्प है।",
        "Report mein: problem definition, alternatives (do nothing bhi), har dimension ka evaluation, recommended alternative, high-level plan, risks. Do nothing valid alternative hai.",
      ],
    ]),
    TBL(
      [
        ["Dimension", "आयाम", "Dimension"],
        ["Core question", "मूल प्रश्न", "Core question"],
        ["Typical tool / evidence", "विशिष्ट उपकरण / साक्ष्य", "Typical tool / evidence"],
      ],
      [
        [
          ["Technical", "तकनीकी", "Technical"],
          ["Can we build it?", "क्या बना सकते हैं?", "Kya bana sakte hain?"],
          ["Spike, prototype, skill inventory", "Spike, prototype, कौशल सूची", "Spike, prototype, skill inventory"],
        ],
        [
          ["Economic", "आर्थिक", "Economic"],
          ["Should we spend?", "क्या खर्च करें?", "Kya kharch karein?"],
          ["NPV, ROI, payback, cost–benefit", "NPV, ROI, payback, लागत–लाभ", "NPV, ROI, payback, cost–benefit"],
        ],
        [
          ["Operational", "परिचालन", "Operational"],
          ["Will they use it?", "क्या वे उपयोग करेंगे?", "Kya weh use karenge?"],
          ["Interviews, change-readiness", "साक्षात्कार, परिवर्तन-तैयारी", "Interviews, change-readiness"],
        ],
        [
          ["Schedule", "अनुसूची", "Schedule"],
          ["In time?", "समय पर?", "Time par?"],
          ["Rough estimate vs hard date", "मोटा अनुमान बनाम कठोर तिथि", "Rough estimate vs hard date"],
        ],
      ],
    ),
    EXAM(
      "Explain types of feasibility (technical, economic, operational, legal, schedule) with one example each. Outline contents of a feasibility report. Economic tools (NPV, ROI, payback) may be asked as 2-markers.",
      "Feasibility के प्रकार (technical, economic, operational, legal, schedule) प्रत्येक के एक उदाहरण सहित समझाएँ। Feasibility report की विषय-वस्तु रूपरेखा दें। आर्थिक उपकरण (NPV, ROI, payback) 2 अंक में पूछे जा सकते हैं।",
      "Feasibility types explain karo ek example ke saath. Report ke contents. NPV, ROI, payback 2-mark mein aa sakte hain.",
    ),
  ]),

  "se-req-validation": topic("se-req-validation", [
    P(
      "Requirements validation checks that the documented requirements actually define the system the customer wants, and that they are of sufficient quality to drive design and testing. Elicitation collects statements; analysis organises them; validation asks “are these the right statements, and are they good enough?” Boehm’s reminder applies: validation is about the right product. Typical checks are validity (does the user really need this?), consistency (no contradictions), completeness (no missing functions or constraints), realism (can it be implemented with budget, schedule and technology?) and verifiability (can we write a test that would pass or fail?). Errors remaining in the SRS are the most expensive class of defects.",
      "Requirements validation जाँचती है कि दस्तावेजी आवश्यकताएँ वास्तव में वही सिस्टम परिभाषित करती हैं जो ग्राहक चाहता है, और वे डिज़ाइन व टेस्टिंग चलाने लायक गुणवत्ता की हैं। Elicitation कथन संग्रह करती है; analysis उन्हें व्यवस्थित करता है; validation पूछती है “क्या ये सही कथन हैं, और क्या पर्याप्त अच्छे हैं?” Boehm की याद: validation सही उत्पाद के बारे में है। विशिष्ट जाँच: validity (क्या उपयोगकर्ता को सच में यह चाहिए?), consistency (कोई अंतर्विरोध नहीं), completeness (कोई छूटा function या बाधा नहीं), realism (क्या बजट, अनुसूची, तकनीक से लागू हो सकता है?) और verifiability (क्या ऐसा टेस्ट लिख सकते हैं जो pass/fail हो?)। SRS में बचे दोष सबसे महंगे वर्ग हैं।",
      "Requirements validation check karti hai ki documented requirements wohi system define karti hain jo customer chahta hai, aur design/testing chalane layak hain. Elicitation collect karti hai; analysis organise karta hai; validation poochhti hai “kya yeh sahi aur kaafi acchi hain?” Boehm: validation right product ke baare mein. Checks: validity, consistency, completeness, realism, verifiability. SRS mein bache defects sabse mehange hote hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Requirements reviews: a team of analysts, designers, testers, customers and domain experts reads the SRS against a checklist. This is the primary validation technique and a form of FTR.",
        "Requirements reviews: विश्लेषक, डिज़ाइनर, टेस्टर, ग्राहक और domain विशेषज्ञ SRS को checklist के विरुद्ध पढ़ते हैं। यह प्राथमिक validation तकनीक है और FTR का रूप है।",
        "Requirements reviews: analysts, designers, testers, customers, domain experts SRS ko checklist ke against padhte hain. Primary validation technique, FTR ka form.",
      ],
      [
        "Checklist items (write 5–6 in exams): unambiguous language; each requirement has a unique ID; testable; consistent with others; traceable to a source; ranked by priority/stability; no design disguised as requirement; feasible NFRs with numbers (e.g. “response < 2 s”).",
        "Checklist वस्तुएँ (परीक्षा में 5–6 लिखें): unambiguous भाषा; प्रत्येक requirement की अद्वितीय ID; परीक्षण योग्य; दूसरों से संगत; स्रोत तक ट्रेस; priority/stability से क्रमित; डिज़ाइन requirement की आड़ में नहीं; संख्याओं वाले साध्य NFR (जैसे “response < 2 s”)।",
        "Checklist: unambiguous; unique ID; testable; consistent; traceable; priority/stability; design requirement ki aad mein nahi; numbered NFRs (response < 2 s).",
      ],
      [
        "Prototyping as validation: show a mock-up or executable prototype so users can recognise missing or wrong behaviour before the SRS is baselined.",
        "Validation के रूप में prototyping: mock-up या executable prototype दिखाएँ ताकि SRS baseline होने से पहले उपयोगकर्ता छूटे या गलत व्यवहार पहचान सकें।",
        "Prototyping as validation: mock-up/executable dikhao taaki SRS baseline se pehle users missing/wrong behaviour pehchaan saken.",
      ],
      [
        "Test-case generation: if you cannot invent a test for a requirement, the requirement is not verifiable and must be rewritten. Acceptance tests drafted now become the contract of “done”.",
        "टेस्ट-केस जनरेशन: यदि किसी requirement के लिए टेस्ट नहीं बन सकता, वह verifiable नहीं और उसे फिर लिखना चाहिए। अभी बनाए acceptance tests “done” का अनुबंध बनते हैं।",
        "Test-case generation: agar requirement ka test nahi ban sakta, woh verifiable nahi — rewrite. Abhi draft kiye acceptance tests “done” ka contract banate hain.",
      ],
      [
        "Model validation: execute or inspect analysis models (DFD balance, use-case pre/post-conditions, state diagrams) to find incompleteness that prose hides.",
        "Model validation: विश्लेषण मॉडल (DFD balance, use-case pre/post-conditions, state diagrams) चलाकर या निरीक्षण कर वह अधूरापन ढूँढ़ें जो गद्य छुपाता है।",
        "Model validation: DFD balance, use-case pre/post, state diagrams inspect karke woh incompleteness dhoondo jo prose chhupata hai.",
      ],
      [
        "Automated analysis (where tools exist): consistency checkers, traceability-matrix tools, requirements-management tools that flag orphans and contradictions.",
        "स्वचालित विश्लेषण (जहाँ उपकरण हों): consistency checkers, traceability-matrix tools, requirements-management tools जो orphans और अंतर्विरोध चिह्नित करें।",
        "Automated analysis: consistency checkers, traceability tools, RM tools jo orphans aur contradictions flag karein.",
      ],
      [
        "Validation is not a one-time gate. After every change the affected requirements must be re-validated — this links validation to requirements management.",
        "Validation एक बार का गेट नहीं। प्रत्येक परिवर्तन के बाद प्रभावित आवश्यकताओं को फिर validate करना चाहिए — यह validation को requirements management से जोड़ता है।",
        "Validation ek baar ka gate nahi. Har change ke baad affected requirements re-validate — yeh RM se judta hai.",
      ],
    ]),
    NOTE(
      "Do not confuse requirements validation with software validation at the end of V-model. Both ask “right product?”, but one inspects the SRS and the other inspects the built system against that SRS.",
      "Requirements validation को V-model के अंत की software validation से भ्रमित न करें। दोनों “सही उत्पाद?” पूछते हैं, पर एक SRS का निरीक्षण करती है और दूसरी बने सिस्टम का उस SRS के विरुद्ध।",
      "Requirements validation ko V-model ke end ki software validation se confuse mat karo. Dono “right product?” poochhte hain; ek SRS inspect karti hai, doosri built system ko SRS ke against.",
    ),
    EXAM(
      "Define requirements validation and list techniques (review, prototype, test-case generation, model validation). Give the five quality checks: validity, consistency, completeness, realism, verifiability. Distinguish from verification.",
      "Requirements validation परिभाषित कर तकनीकें लिखें (review, prototype, test-case generation, model validation)। पाँच गुणवत्ता जाँच: validity, consistency, completeness, realism, verifiability। Verification से अंतर करें।",
      "Requirements validation define karo, techniques list karo. Paanch checks: validity, consistency, completeness, realism, verifiability. Verification se farq.",
    ),
  ]),

  "se-req-management": topic("se-req-management", [
    P(
      "Requirements management is the process of understanding, controlling and tracing changes to requirements throughout the life cycle. Requirements are not frozen in real projects: laws change, users learn, budgets shrink, and new stakeholders appear. Without management you get requirements creep (uncontrolled growth of scope), lost traceability, and silent contradictions. The activities are: unique identification, change control, versioning, traceability, and status tracking (proposed, approved, implemented, verified, deleted). A requirements baseline is the reviewed, approved set at a point in time; further changes go through a Change Control Board (CCB).",
      "Requirements management जीवनचक्र भर आवश्यकताओं के परिवर्तनों को समझने, नियंत्रित करने और ट्रेस करने की प्रक्रिया है। वास्तविक परियोजनाओं में आवश्यकताएँ फ्रीज नहीं रहतीं: कानून बदलते हैं, उपयोगकर्ता सीखते हैं, बजट घटता है, नए stakeholders आते हैं। प्रबंधन के बिना requirements creep (scope की अनियंत्रित वृद्धि), खोई traceability और मौन अंतर्विरोध मिलते हैं। गतिविधियाँ: अद्वितीय पहचान, change control, versioning, traceability, और स्थिति ट्रैकिंग (proposed, approved, implemented, verified, deleted)। Requirements baseline किसी समय बिंदु पर समीक्षित, स्वीकृत सेट है; आगे के परिवर्तन Change Control Board (CCB) से जाते हैं।",
      "Requirements management life cycle bhar requirements ke changes ko samajhne, control karne aur trace karne ki process hai. Real projects mein freeze nahi rehti: kanoon, users, budget, naye stakeholders. Bina management: requirements creep, khoi traceability, silent contradictions. Activities: unique ID, change control, versioning, traceability, status tracking. Baseline = reviewed approved set; aage ke changes CCB se.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Unique IDs: every requirement gets a stable identifier (e.g. FR-12, NFR-PERF-03) that never changes meaning. Text may be edited; the ID is the handle used in design, code, tests and contracts.",
        "अद्वितीय ID: प्रत्येक requirement को स्थिर पहचानकर्ता (जैसे FR-12, NFR-PERF-03) मिलता है जिसका अर्थ नहीं बदलता। पाठ संपादित हो सकता है; ID डिज़ाइन, कोड, टेस्ट और अनुबंध में हैंडल है।",
        "Unique IDs: har requirement ko stable identifier (FR-12, NFR-PERF-03). Text edit ho sakta hai; ID design, code, tests, contracts mein handle hai.",
      ],
      [
        "Traceability: forward (requirement → design → code → test) and backward (test → requirement → source stakeholder). A requirements traceability matrix (RTM) is the usual exam artefact. Orphan tests or untested requirements show up as empty cells.",
        "Traceability: आगे (requirement → design → code → test) और पीछे (test → requirement → स्रोत stakeholder)। Requirements traceability matrix (RTM) सामान्य परीक्षा artefact है। अनाथ टेस्ट या अपरीक्षित आवश्यकताएँ खाली कक्षों में दिखती हैं।",
        "Traceability: forward (req → design → code → test) aur backward (test → req → stakeholder). RTM exam artefact hai. Orphan tests ya untested reqs khaali cells mein dikhte hain.",
      ],
      [
        "Change control process: request → impact analysis (effort, schedule, cost, other requirements, architecture) → CCB decision (accept / reject / defer) → update SRS and RTM → re-validate → notify implementers.",
        "Change control प्रक्रिया: अनुरोध → प्रभाव विश्लेषण (प्रयास, अनुसूची, लागत, अन्य आवश्यकताएँ, architecture) → CCB निर्णय (accept / reject / defer) → SRS और RTM अद्यतन → फिर validate → implementers को सूचित।",
        "Change control: request → impact analysis (effort, schedule, cost, other reqs, architecture) → CCB accept/reject/defer → SRS+RTM update → re-validate → implementers ko notify.",
      ],
      [
        "Requirements creep / gold-plating: creep is unplanned growth of customer scope; gold-plating is the developer adding “nice” features that were never requested. Both destroy estimates. Management’s job is to make every addition visible and approved.",
        "Requirements creep / gold-plating: creep ग्राहक scope की अनियोजित वृद्धि है; gold-plating डेवलपर द्वारा कभी न माँगी “अच्छी” features जोड़ना है। दोनों अनुमान तोड़ते हैं। प्रबंधन का काम हर जोड़ को दृश्य और स्वीकृत बनाना है।",
        "Creep = customer scope ki unplanned growth; gold-plating = developer bina maange “nice” features jodna. Dono estimates todte hain. Har addition visible aur approved honi chahiye.",
      ],
      [
        "Classification for management: priority (must / should / could / won’t — MoSCoW), stability (volatile vs frozen), and risk. Volatile items should be isolated in the architecture so that change is cheap.",
        "प्रबंधन के लिए वर्गीकरण: priority (must / should / could / won’t — MoSCoW), stability (volatile बनाम frozen), और जोखिम। अस्थिर वस्तुओं को architecture में अलग रखें ताकि परिवर्तन सस्ता हो।",
        "Classification: priority (MoSCoW), stability (volatile vs frozen), risk. Volatile items architecture mein isolate karo taaki change sasta ho.",
      ],
      [
        "Tooling: a spreadsheet RTM is enough for student projects; industry uses DOORS, Jira, Polarion, Azure DevOps. The concept matters more than the brand.",
        "उपकरण: छात्र परियोजनाओं के लिए spreadsheet RTM पर्याप्त; उद्योग DOORS, Jira, Polarion, Azure DevOps उपयोग करता है। अवधारणा ब्रांड से अधिक मायने रखती है।",
        "Tools: student projects ke liye spreadsheet RTM kaafi; industry DOORS, Jira, Polarion, Azure DevOps. Concept brand se zyada matter karta hai.",
      ],
      [
        "Link to SCM: a baselined SRS is a configuration item. Requirement changes are a special class of change requests and must follow the same audit trail as code changes.",
        "SCM से संबंध: baselined SRS एक configuration item है। Requirement परिवर्तन change requests का विशेष वर्ग हैं और कोड परिवर्तन जैसी ही audit trail का पालन करते हैं।",
        "SCM se link: baselined SRS ek configuration item hai. Requirement changes bhi change requests hain, code jaisi audit trail follow karti hain.",
      ],
    ]),
    C(
      "text",
      "RTM (fragment)\nID       | Source        | Design     | Code          | Test\nFR-12    | Registrar     | DSN-ISSUE  | IssueBook.java| TC-12a, TC-12b\nNFR-P-03 | Librarian     | DSN-CACHE  | CacheSvc.java | TC-P03-load",
      [
        "Fragment of a requirements traceability matrix.",
        "Requirements traceability matrix का अंश।",
        "RTM ka fragment.",
      ],
    ),
    EXAM(
      "Explain requirements management activities: identification, traceability (RTM), change control, baselining. Define requirements creep vs gold-plating. Draw or describe a change-control flow through a CCB.",
      "Requirements management गतिविधियाँ समझाएँ: identification, traceability (RTM), change control, baselining। Requirements creep बनाम gold-plating परिभाषित करें। CCB से होते change-control प्रवाह का वर्णन करें।",
      "RM activities: identification, RTM, change control, baseline. Creep vs gold-plating. CCB ke through change-control flow.",
    ),
  ]),

  "se-func-nfr": topic("se-func-nfr", [
    P(
      "Functional requirements (FR) describe what the system must do — services, reactions to inputs, behaviour in particular situations, and what it should not do. Non-functional requirements (NFR) describe how well the system must do it — quality attributes, constraints and process requirements that cut across functions. A library system FR is “a member shall be able to reserve a book”; an NFR is “reservation confirmation shall appear within 2 seconds under 200 concurrent users”. NFRs often determine architecture (you cannot bolt security or 99.9% availability on at the end) and they must be quantified to be testable. Sommerville classifies NFRs as product, organisational and external.",
      "Functional requirements (FR) बताती हैं कि सिस्टम को क्या करना चाहिए — सेवाएँ, इनपुट की प्रतिक्रियाएँ, विशेष स्थितियों में व्यवहार, और क्या नहीं करना चाहिए। Non-functional requirements (NFR) बताती हैं कि कितनी अच्छी तरह करना चाहिए — गुणवत्ता गुण, बाधाएँ और प्रक्रिया आवश्यकताएँ जो functions के आर-पार कटती हैं। पुस्तकालय सिस्टम की FR है “सदस्य पुस्तक reserve कर सके”; NFR है “200 concurrent उपयोगकर्ताओं पर reservation पुष्टि 2 सेकंड में दिखे”। NFR प्रायः architecture तय करती हैं (सुरक्षा या 99.9% उपलब्धता अंत में नहीं चिपकाई जा सकती) और परीक्षण योग्य होने के लिए मात्राबद्ध होनी चाहिए। Sommerville NFR को product, organisational और external में बाँटते हैं।",
      "FR batati hain system kya kare — services, input reactions, behaviour, kya na kare. NFR batati hain kitni acchi tarah kare — quality attributes, constraints, process requirements. Library FR: “member book reserve kar sake”; NFR: “200 concurrent users par confirmation 2 second mein”. NFR architecture decide karti hain; testable hone ke liye numbers chahiye. Sommerville: product, organisational, external.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "FR examples: login with OTP, generate fee receipt, apply GST slab, send hall-ticket email, record blood-pressure reading, reject expired medicine batch. FR can be expressed as use cases, user stories or shall-statements.",
        "FR उदाहरण: OTP से login, fee receipt बनाना, GST slab लगाना, hall-ticket ईमेल, रक्तचाप पढ़ना, expired दवा बैच अस्वीकार। FR use cases, user stories या shall-statements में लिखी जा सकती हैं।",
        "FR examples: OTP login, fee receipt, GST slab, hall-ticket email, BP reading, expired batch reject. Use cases, user stories, ya shall-statements.",
      ],
      [
        "Product NFRs (on the software itself): performance, reliability, availability, security, usability, portability, efficiency, maintainability, scalability. These are also called quality attributes or “ilities”.",
        "Product NFR (सॉफ्टवेयर पर): performance, reliability, availability, security, usability, portability, efficiency, maintainability, scalability। इन्हें quality attributes या “ilities” भी कहते हैं।",
        "Product NFRs: performance, reliability, availability, security, usability, portability, efficiency, maintainability, scalability — “ilities”.",
      ],
      [
        "Organisational NFRs: process standards (must use ISO 9001, must follow coding standard), implementation requirements (language Java 17, DBMS PostgreSQL), delivery requirements (source on Git, monthly demo).",
        "Organisational NFR: प्रक्रिया मानक (ISO 9001, coding standard), implementation आवश्यकताएँ (Java 17, DBMS PostgreSQL), delivery आवश्यकताएँ (Git पर स्रोत, मासिक डेमो)।",
        "Organisational NFRs: process standards (ISO 9001, coding standard), implementation (Java 17, PostgreSQL), delivery (Git, monthly demo).",
      ],
      [
        "External NFRs: legislative (IT Act, DPDP, RBI guidelines), ethical, interoperability with a government API (Aadhaar, UPI, DigiLocker), and economic constraints imposed from outside the team.",
        "External NFR: विधायी (IT Act, DPDP, RBI दिशानिर्देश), नैतिक, सरकारी API से अंतरसंचालन (Aadhaar, UPI, DigiLocker), तथा टीम के बाहर से आई आर्थिक बाधाएँ।",
        "External NFRs: legislative (IT Act, DPDP, RBI), ethical, government API (Aadhaar, UPI, DigiLocker), bahar se aayi economic constraints.",
      ],
      [
        "Bad NFR: “the system shall be fast and user-friendly.” Good NFR: “95th-percentile search response ≤ 1.5 s for a catalogue of 10 lakh titles; a new clerk shall complete issue in < 3 minutes after 1 hour of training.”",
        "खराब NFR: “सिस्टम तेज और उपयोगकर्ता-मित्र होगा।” अच्छी NFR: “10 लाख शीर्षकों की catalogue पर 95th-percentile खोज प्रतिक्रिया ≤ 1.5 s; नया क्लर्क 1 घंटे प्रशिक्षण के बाद 3 मिनट में issue पूरा करे।”",
        "Buri NFR: “system fast aur user-friendly hoga.” Acchi NFR: “10 lakh titles par 95th-percentile search ≤ 1.5 s; naya clerk 1 hour training ke baad 3 min mein issue complete kare.”",
      ],
      [
        "Conflicts: security vs usability, performance vs maintainability, cost vs reliability. Requirements engineering must negotiate and record the chosen trade-off; architecture realises it.",
        "संघर्ष: security बनाम usability, performance बनाम maintainability, cost बनाम reliability। Requirements engineering को समझौता कर दर्ज करना चाहिए; architecture उसे साकार करती है।",
        "Conflicts: security vs usability, performance vs maintainability, cost vs reliability. Negotiate karke record karo; architecture realise karti hai.",
      ],
      [
        "Domain requirements: constraints from the application domain (library fine rules, double-entry bookkeeping). They look like FRs but come from the domain, not from a particular customer whim; violating them makes the system unacceptable.",
        "Domain requirements: अनुप्रयोग domain की बाधाएँ (पुस्तकालय जुर्माना नियम, double-entry bookkeeping)। वे FR जैसी दिखती हैं पर domain से आती हैं, किसी ग्राहक की लहर से नहीं; उल्लंघन सिस्टम को अस्वीकार्य बनाता है।",
        "Domain requirements: domain ki constraints (library fine rules, double-entry). FR jaisi dikhti hain lekin domain se aati hain; violate ki to system unacceptable.",
      ],
    ]),
    TBL(
      [
        ["Kind", "प्रकार", "Kind"],
        ["Example FR / NFR", "उदाहरण FR / NFR", "Example"],
        ["Test idea", "टेस्ट विचार", "Test idea"],
      ],
      [
        [
          ["FR", "FR", "FR"],
          ["System shall calculate late fine at ₹2/day", "सिस्टम विलंब जुर्माना ₹2/दिन गणना करे", "System late fine ₹2/day calculate kare"],
          ["Boundary: 0, 1, 30 days", "सीमा: 0, 1, 30 दिन", "Boundary: 0, 1, 30 days"],
        ],
        [
          ["Product NFR", "Product NFR", "Product NFR"],
          ["Availability ≥ 99.5% per month", "उपलब्धता ≥ 99.5% प्रति माह", "Availability ≥ 99.5% per month"],
          ["Uptime log vs 30-day window", "30-दिन खिड़की में uptime लॉग", "Uptime log vs 30-day window"],
        ],
        [
          ["Organisational NFR", "Organisational NFR", "Organisational NFR"],
          ["Code shall be Java + JUnit", "कोड Java + JUnit होगा", "Code Java + JUnit hoga"],
          ["Build pipeline checks", "Build pipeline जाँच", "Build pipeline checks"],
        ],
        [
          ["External NFR", "External NFR", "External NFR"],
          ["Store passwords per CERT-In advice", "पासवर्ड CERT-In सलाह के अनुसार", "Passwords CERT-In ke anusaar"],
          ["Security audit / hash check", "सुरक्षा ऑडिट / hash जाँच", "Security audit / hash check"],
        ],
      ],
    ),
    EXAM(
      "Define FR vs NFR with two examples each. Classify NFRs as product, organisational, external (Sommerville). Convert a vague NFR into a measurable one. Mention domain requirements.",
      "FR बनाम NFR दो-दो उदाहरण सहित परिभाषित करें। NFR को product, organisational, external (Sommerville) में वर्गीकृत करें। अस्पष्ट NFR को मापने योग्य बनाएँ। Domain requirements का उल्लेख करें।",
      "FR vs NFR do-do examples. NFR: product, organisational, external. Vague NFR ko measurable banao. Domain requirements mention karo.",
    ),
  ]),

  "se-user-system": topic("se-user-system", [
    P(
      "User requirements and system requirements are two levels of the same story, written for different readers. User requirements are high-level statements, in natural language plus simple diagrams, of what services the system is expected to provide and the constraints under which it must operate. They are for customers, managers and end-users who are not software specialists. System requirements are detailed descriptions of the system’s functions, services and operational constraints — the specification that designers and implementers contract against. Mixing the two levels is a standard SRS fault: either users cannot read the document, or developers cannot build from it.",
      "User requirements और system requirements एक ही कहानी के दो स्तर हैं, भिन्न पाठकों के लिए लिखे गए। User requirements प्राकृतिक भाषा और सरल चित्रों में उच्च-स्तरीय कथन हैं कि सिस्टम कौन-सी सेवाएँ देगा और किन बाधाओं में चलेगा। वे ग्राहकों, प्रबंधकों और अंत-उपयोगकर्ताओं के लिए हैं जो सॉफ्टवेयर विशेषज्ञ नहीं। System requirements सिस्टम के functions, सेवाओं और परिचालन बाधाओं का विस्तृत वर्णन हैं — वह विनिर्देश जिसके विरुद्ध डिज़ाइनर और implementer अनुबंध करते हैं। दोनों स्तर मिलाना SRS का मानक दोष है: या तो उपयोगकर्ता दस्तावेज़ नहीं पढ़ सकते, या डेवलपर उससे बना नहीं सकते।",
      "User requirements aur system requirements ek hi kahani ke do levels hain, alag readers ke liye. User requirements: natural language + simple diagrams, high-level services aur constraints — customers, managers, end-users ke liye. System requirements: detailed functions, services, operational constraints — designers/implementers ka contract. Mix karna SRS ka standard fault hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "User requirement style: “The library system shall allow a member to reserve a book that is currently on loan.” Language is the customer’s; avoid Java class names and table layouts here.",
        "User requirement शैली: “पुस्तकालय सिस्टम सदस्य को उस पुस्तक को reserve करने दे जो वर्तमान में loan पर है।” भाषा ग्राहक की है; यहाँ Java class नाम और table layouts न लिखें।",
        "User requirement style: “Library system member ko woh book reserve karne de jo abhi loan par hai.” Customer ki bhasha; yahan Java class names aur table layouts mat likho.",
      ],
      [
        "System requirement style: “On selecting Reserve, the system shall (a) verify membership status ACTIVE, (b) check that Book.copyCount – Book.loanCount > 0 is false, (c) create Reservation(memberId, isbn, timestamp) if none exists for that pair, (d) notify via registered email within 60 s.” This is still WHAT, not HOW (no algorithm yet).",
        "System requirement शैली: “Reserve चुनने पर सिस्टम (a) membership ACTIVE जाँचे, (b) Book.copyCount – Book.loanCount > 0 गलत हो तो, (c) Reservation(memberId, isbn, timestamp) बनाए यदि उस जोड़े की पहले से नहीं, (d) 60 s में registered ईमेल से सूचित करे।” यह अभी भी WHAT है, HOW नहीं (एल्गोरिद्म अभी नहीं)।",
        "System requirement: “Reserve par (a) membership ACTIVE, (b) koi copy free nahi, (c) Reservation record, (d) 60 s mein email.” Yeh ab bhi WHAT hai, HOW nahi.",
      ],
      [
        "Problems of natural language: ambiguity, over-flexibility (same thing said many ways), mix of FR/NFR/design, amalgamation of several requirements in one paragraph. Mitigations: structured natural language (shall-statements with IDs), tables, use-case specifications, and formal methods for critical fragments.",
        "प्राकृतिक भाषा की समस्याएँ: ambiguity, अति-लचीलापन (एक बात अनेक ढंग), FR/NFR/design का मिश्रण, एक पैराग्राफ में कई आवश्यकताएँ। निवारण: structured natural language (ID वाली shall-statements), तालिकाएँ, use-case specifications, गंभीर अंशों के लिए औपचारिक विधियाँ।",
        "Natural language problems: ambiguity, over-flexibility, FR/NFR/design mix, kai requirements ek paragraph mein. Mitigation: structured shall-statements, tables, use cases, critical parts ke liye formal methods.",
      ],
      [
        "User requirements map to acceptance tests and contracts. System requirements map to system tests, design and implementation tasks. Traceability must connect a user requirement to the system requirements that realise it.",
        "User requirements acceptance tests और अनुबंधों से जुड़ती हैं। System requirements सिस्टम टेस्ट, डिज़ाइन और implementation कार्यों से। Traceability को user requirement को साकार करने वाली system requirements से जोड़ना चाहिए।",
        "User requirements acceptance tests/contracts se judti hain. System requirements system tests, design, implementation se. Traceability user req ko realise karne wali system reqs se jode.",
      ],
      [
        "Some syllabi also mention software design specification as a third, even more detailed, level. Do not dump design (class diagrams, SQL) into user requirements.",
        "कुछ पाठ्यक्रम software design specification को तीसरे, और अधिक विस्तृत, स्तर के रूप में भी कहते हैं। User requirements में डिज़ाइन (class diagrams, SQL) न डालें।",
        "Kuch syllabi teesra level bhi kehte hain — software design specification. User requirements mein class diagrams/SQL mat daalo.",
      ],
      [
        "Guidelines: use a standard format; use “shall” for mandatory, “should” for desirable; one requirement one sentence; avoid pronouns with unclear antecedents; define domain terms in a glossary.",
        "दिशा-निर्देश: मानक प्रारूप; अनिवार्य के लिए “shall”, वांछनीय के लिए “should”; एक requirement एक वाक्य; अस्पष्ट सर्वनाम न हों; glossary में domain शब्द परिभाषित करें।",
        "Guidelines: standard format; mandatory “shall”, desirable “should”; ek req ek sentence; unclear pronouns na hon; glossary mein domain terms.",
      ],
      [
        "IEEE 830 / ISO/IEC/IEEE 29148 recommend separating user-oriented and developer-oriented views, often as different sections of the same SRS or as a two-volume specification.",
        "IEEE 830 / ISO/IEC/IEEE 29148 उपयोगकर्ता-उन्मुख और डेवलपर-उन्मुख दृश्यों को अलग रखने की सलाह देते हैं, प्रायः एक ही SRS के भिन्न खंडों या दो-खंड विनिर्देश के रूप में।",
        "IEEE 830 / 29148 user-oriented aur developer-oriented views alag rakhne ko kehte hain — same SRS ke alag sections ya two-volume spec.",
      ],
    ]),
    TBL(
      [
        ["", "", ""],
        ["User requirements", "User requirements", "User requirements"],
        ["System requirements", "System requirements", "System requirements"],
      ],
      [
        [
          ["Reader", "पाठक", "Reader"],
          ["Customer, manager, end-user", "ग्राहक, प्रबंधक, अंत-उपयोगकर्ता", "Customer, manager, end-user"],
          ["Designer, programmer, tester", "डिज़ाइनर, प्रोग्रामर, टेस्टर", "Designer, programmer, tester"],
        ],
        [
          ["Language", "भाषा", "Language"],
          ["Natural language, simple diagrams", "प्राकृतिक भाषा, सरल चित्र", "Natural language, simple diagrams"],
          ["Structured NL, models, tables", "Structured NL, मॉडल, तालिकाएँ", "Structured NL, models, tables"],
        ],
        [
          ["Detail", "विस्तार", "Detail"],
          ["Services and constraints", "सेवाएँ और बाधाएँ", "Services aur constraints"],
          ["Functions, interfaces, NFRs quantified", "Functions, interfaces, मात्राबद्ध NFR", "Functions, interfaces, quantified NFRs"],
        ],
        [
          ["Maps to", "जुड़ता है", "Maps to"],
          ["Acceptance test, contract", "Acceptance test, अनुबंध", "Acceptance test, contract"],
          ["System test, design, code tasks", "System test, डिज़ाइन, कोड कार्य", "System test, design, code tasks"],
        ],
      ],
    ),
    EXAM(
      "Differentiate user requirements and system requirements with an example rewritten at both levels. List problems of natural-language specification and remedies. Mention who reads each document.",
      "User requirements और system requirements में अंतर करें, एक उदाहरण दोनों स्तरों पर लिखें। प्राकृतिक भाषा विनिर्देश की समस्याएँ और उपाय। प्रत्येक दस्तावेज़ कौन पढ़ता है बताएँ।",
      "User vs system requirements, ek example dono levels par. Natural language ke problems aur remedies. Kaun padhta hai har document.",
    ),
  ]),

  "se-srs": topic("se-srs", [
    P(
      "A Software Requirements Specification (SRS) is the official statement of what the system will do, used by customers as a contract and by developers as the parent document for design, coding and testing. IEEE Std 830 (and its successor ISO/IEC/IEEE 29148) is the template Indian universities expect. A good SRS is complete, consistent, unambiguous, verifiable, modifiable, traceable, ranked for importance/stability, and does not over-specify design. Writing SRS is not clerical: it forces conflicts into the open and is the single most valuable document if the project is litigated, outsourced or handed to a new team.",
      "Software Requirements Specification (SRS) सिस्टम क्या करेगा का आधिकारिक कथन है, जिसे ग्राहक अनुबंध के रूप में और डेवलपर डिज़ाइन, कोडिंग व टेस्टिंग के मूल दस्तावेज़ के रूप में उपयोग करते हैं। IEEE Std 830 (और उत्तराधिकारी ISO/IEC/IEEE 29148) वह टेम्पलेट है जिसकी भारतीय विश्वविद्यालय अपेक्षा करते हैं। अच्छा SRS पूर्ण, संगत, unambiguous, verifiable, modifiable, traceable, महत्व/स्थिरता में क्रमित होता है और डिज़ाइन का अति-विनिर्देश नहीं करता। SRS लिखना लिपिकीय कार्य नहीं: यह संघर्षों को सामने लाता है और यदि परियोजना मुकदमे, आउटसोर्स या नई टीम को सौंपी जाए तो सबसे मूल्यवान दस्तावेज़ है।",
      "SRS system kya karega ka official statement hai — customer ke liye contract, developer ke liye design/code/test ka parent document. IEEE 830 (ab 29148) woh template hai jo Indian universities expect karti hain. Accha SRS: complete, consistent, unambiguous, verifiable, modifiable, traceable, ranked; design over-specify nahi karta. Clerical kaam nahi — conflicts bahar laata hai, litigation/outsourcing/new team par sabse valuable document.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "IEEE 830 recommended structure (memorise headings): 1. Introduction (purpose, scope, definitions/acronyms, references, overview); 2. Overall description (product perspective, functions, user characteristics, constraints, assumptions); 3. Specific requirements (FR, NFR, interfaces, database, …); 4. Appendices and index. Specific requirements may be organised by feature, by use case, or by stimulus-response.",
        "IEEE 830 अनुशंसित संरचना (शीर्षक याद करें): 1. Introduction (purpose, scope, definitions/acronyms, references, overview); 2. Overall description (product perspective, functions, user characteristics, constraints, assumptions); 3. Specific requirements (FR, NFR, interfaces, database, …); 4. Appendices और index। Specific requirements feature, use case, या stimulus-response से व्यवस्थित हो सकती हैं।",
        "IEEE 830 structure yaad karo: 1 Introduction (purpose, scope, definitions, references, overview); 2 Overall description (perspective, functions, users, constraints, assumptions); 3 Specific requirements (FR, NFR, interfaces, DB); 4 Appendices. Specific reqs feature/use-case/stimulus-response se organise ho sakti hain.",
      ],
      [
        "Characteristics of a good SRS (IEEE): correct, unambiguous, complete, consistent, ranked for importance/stability, verifiable, modifiable, traceable. “Complete” includes responses to invalid inputs and the word “TBD” being resolved.",
        "अच्छे SRS की विशेषताएँ (IEEE): correct, unambiguous, complete, consistent, ranked for importance/stability, verifiable, modifiable, traceable। “Complete” में अमान्य इनपुट की प्रतिक्रियाएँ और “TBD” का हल शामिल है।",
        "Good SRS: correct, unambiguous, complete, consistent, ranked, verifiable, modifiable, traceable. Complete mein invalid inputs ki responses aur TBD resolve hona bhi hai.",
      ],
      [
        "Product perspective: if the software is a component of a larger system, show a block diagram of interfaces (hardware, software, communications, user). Standalone products still list external interfaces.",
        "Product perspective: यदि सॉफ्टवेयर बड़े सिस्टम का घटक है, interfaces (hardware, software, communications, user) का ब्लॉक चित्र दिखाएँ। स्वतंत्र उत्पाद भी बाहरी interfaces सूचीबद्ध करते हैं।",
        "Product perspective: bade system ka part ho to interfaces ka block diagram. Standalone products bhi external interfaces list karte hain.",
      ],
      [
        "Interface requirements: user (screens, help, accessibility), hardware (sensors, printers), software (OS, DBMS, other apps), communication (protocol, format, encryption). These become integration-test seeds.",
        "Interface requirements: उपयोगकर्ता (स्क्रीन, मदद, accessibility), हार्डवेयर (sensors, printers), सॉफ्टवेयर (OS, DBMS, अन्य ऐप्स), संचार (protocol, format, encryption)। ये integration-test के बीज बनते हैं।",
        "Interfaces: user (screens, help), hardware (sensors, printers), software (OS, DBMS), communication (protocol, format, encryption). Yeh integration tests ke beej hain.",
      ],
      [
        "What SRS should NOT contain: project plans, cost, detailed design (algorithms, table schemas unless they are genuine constraints), and marketing fluff. Those belong in SPMP or SDS.",
        "SRS में क्या नहीं: परियोजना योजना, लागत, विस्तृत डिज़ाइन (एल्गोरिद्म, table schemas जब तक वास्तविक बाधा न हों), और विपणन भाषा। वे SPMP या SDS में हैं।",
        "SRS mein kya nahi: project plans, cost, detailed design (algorithms, schemas jab tak constraint na hon), marketing fluff. Weh SPMP ya SDS mein hain.",
      ],
      [
        "SRS is baselined after review and customer sign-off. Subsequent edits follow requirements management / SCM. Multiple views (use-case appendix, data dictionary, DFD) may be attached so that different readers find their language.",
        "समीक्षा और ग्राहक हस्ताक्षर के बाद SRS baseline होता है। बाद के संपादन requirements management / SCM से होते हैं। विभिन्न पाठकों के लिए use-case appendix, data dictionary, DFD जैसे अनेक दृश्य जोड़े जा सकते हैं।",
        "Review aur customer sign-off ke baad SRS baseline. Baad ke edits RM/SCM se. Use-case appendix, data dictionary, DFD alag readers ke liye.",
      ],
      [
        "Indian exam favourite: “Explain IEEE 830 SRS document” — they want the section outline plus 5–6 characteristics, not a philosophy essay.",
        "भारतीय परीक्षा पसंदीदा: “IEEE 830 SRS document समझाएँ” — वे खंड रूपरेखा और 5–6 विशेषताएँ चाहते हैं, दर्शन निबंध नहीं।",
        "Indian exam favourite: “IEEE 830 SRS explain karo” — section outline plus 5–6 characteristics chahiye, philosophy essay nahi.",
      ],
    ]),
    C(
      "text",
      "IEEE 830 skeleton\n1. Introduction\n   1.1 Purpose   1.2 Scope   1.3 Definitions   1.4 References   1.5 Overview\n2. Overall description\n   2.1 Product perspective   2.2 Product functions\n   2.3 User characteristics   2.4 Constraints   2.5 Assumptions\n3. Specific requirements  (FR, NFR, interfaces, logical DB)\n4. Supporting information  (appendices, index)",
      [
        "Headings to reproduce in an 8-mark SRS question.",
        "8 अंक के SRS प्रश्न में पुनः लिखने योग्य शीर्षक।",
        "8-mark SRS question mein yeh headings likhna.",
      ],
    ),
    EXAM(
      "Give the IEEE 830 outline and characteristics of a good SRS. State what an SRS should not include. A long question may ask you to write a mini-SRS for a library / hospital / ATM system — keep FR, NFR and interfaces separate.",
      "IEEE 830 रूपरेखा और अच्छे SRS की विशेषताएँ दें। SRS में क्या नहीं होना चाहिए बताएँ। लंबे प्रश्न में पुस्तकालय / अस्पताल / ATM का mini-SRS लिखने को कहा जा सकता है — FR, NFR और interfaces अलग रखें।",
      "IEEE 830 outline aur good SRS characteristics. Kya nahi hona chahiye. Long question mein library/hospital/ATM ka mini-SRS — FR, NFR, interfaces alag rakho.",
    ),
  ]),

  "se-design-concepts": topic("se-design-concepts", [
    P(
      "Software design is the process of translating SRS into a blueprint for construction. Design concepts are the intellectual tools that make that blueprint understandable, changeable and verifiable. Pressman lists abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring, and design classes among the core concepts. Without them a system may “work” on day one and collapse under the first change request. Design sits between requirements (what) and code (how in a programming language); a good design is the cheapest place to reason about quality attributes such as performance, security and maintainability.",
      "सॉफ्टवेयर डिज़ाइन SRS को निर्माण के ब्लूप्रिंट में अनुवाद करने की प्रक्रिया है। डिज़ाइन अवधारणाएँ वे बौद्धिक उपकरण हैं जो ब्लूप्रिंट को समझने, बदलने और सत्यापित करने योग्य बनाती हैं। Pressman मुख्य अवधारणाओं में abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring और design classes गिनाते हैं। इनके बिना सिस्टम पहले दिन “चल” सकता है और पहली change request पर टूट सकता है। डिज़ाइन आवश्यकताओं (क्या) और कोड (प्रोग्रामिंग भाषा में कैसे) के बीच बैठता है; अच्छा डिज़ाइन performance, security, maintainability जैसे quality attributes पर तर्क करने का सबसे सस्ता स्थान है।",
      "Software design SRS ko construction ke blueprint mein translate karta hai. Design concepts woh intellectual tools hain jo blueprint ko samajhne, badalne, verify karne layak banate hain. Pressman: abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring, design classes. Inke bina system din ek chal sakta hai, pehli change par toot sakta hai. Design “what” aur code ke beech hai; quality attributes yahin saste padte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Abstraction: ignore irrelevant detail at a given level. Data abstraction (a stack as push/pop, not an array), procedural abstraction (a procedure name for a sequence of steps), and control abstraction (synchronisation without exposing locks). Levels of abstraction let humans handle Brooks’ complexity.",
        "Abstraction: दिए स्तर पर अप्रासंगिक विस्तार अनदेखा। Data abstraction (stack को push/pop, array नहीं), procedural abstraction (चरणों के क्रम का procedure नाम), control abstraction (locks दिखाए बिना तुल्यकालन)। Abstraction के स्तर Brooks की जटिलता संभालते हैं।",
        "Abstraction: given level par irrelevant detail ignore. Data (stack = push/pop), procedural (procedure name), control (sync without locks). Levels of abstraction Brooks ki complexity sambhalte hain.",
      ],
      [
        "Architecture: the overall structure — major components, their interfaces, and the patterns of interaction (layered, client–server, pipe-filter, microservices). Architecture realises NFRs and is decided early because it is expensive to change.",
        "Architecture: समग्र संरचना — प्रमुख components, उनके interfaces, और संपर्क के पैटर्न (layered, client–server, pipe-filter, microservices)। Architecture NFR साकार करती है और जल्दी तय होती है क्योंकि बदलना महंगा है।",
        "Architecture: overall structure — major components, interfaces, interaction patterns (layered, client–server, pipe-filter, microservices). NFR yahin realise hoti hain; change mehnga hai.",
      ],
      [
        "Patterns: named, reusable solutions to recurring design problems (GoF: Singleton, Observer, Factory, MVC as an architectural pattern). Patterns transfer experience; they are not copy-paste code.",
        "Patterns: आवर्ती डिज़ाइन समस्याओं के नामित, reusable समाधान (GoF: Singleton, Observer, Factory, MVC एक architectural pattern)। Patterns अनुभव स्थानांतरित करते हैं; copy-paste कोड नहीं।",
        "Patterns: recurring design problems ke named reusable solutions (Singleton, Observer, Factory, MVC). Experience transfer karte hain, copy-paste code nahi.",
      ],
      [
        "Modularity and information hiding (Parnas, 1972): decompose into modules that hide a secret (a data structure, a hardware interface, a policy). Change of the secret stays inside the module. This is the theoretical root of encapsulation.",
        "Modularity और information hiding (Parnas, 1972): ऐसे मॉड्यूल में विघटन जो एक रहस्य छुपाएँ (data structure, हार्डवेयर interface, नीति)। रहस्य का परिवर्तन मॉड्यूल के भीतर रहता है। यह encapsulation की सैद्धांतिक जड़ है।",
        "Modularity aur information hiding (Parnas 1972): modules jo ek secret chhupayein (data structure, hardware interface, policy). Secret ka change module ke andar rehta hai. Encapsulation ki root.",
      ],
      [
        "Functional independence: design modules with high cohesion and low coupling (treated fully in se-modularity). Independence makes development, testing and reuse parallelisable.",
        "Functional independence: उच्च cohesion और निम्न coupling वाले मॉड्यूल (विस्तार se-modularity में)। स्वतंत्रता विकास, टेस्टिंग और reuse को समांतर बनाती है।",
        "Functional independence: high cohesion, low coupling (detail se-modularity mein). Development, testing, reuse parallel ho sakte hain.",
      ],
      [
        "Refinement (Wirth): stepwise elaboration from abstract to concrete. Refactoring (Fowler): improve internal structure without changing external behaviour — the daily hygiene of evolutionary design.",
        "Refinement (Wirth): अमूर्त से ठोस तक चरणबद्ध विस्तार। Refactoring (Fowler): बाहरी व्यवहार बदले बिना आंतरिक संरचना सुधार — evolutionary डिज़ाइन की दैनिक स्वच्छता।",
        "Refinement (Wirth): abstract se concrete tak stepwise. Refactoring (Fowler): external behaviour same, internal structure better — evolutionary design ki daily hygiene.",
      ],
      [
        "Other concepts often listed: separation of concerns, completeness and sufficiency of a module’s interface, design classes (user-level, business-domain, process, persistence, system), and the open–closed principle (open for extension, closed for modification).",
        "अन्य अवधारणाएँ: concerns का पृथक्करण, मॉड्यूल interface की पूर्णता व पर्याप्तता, design classes (user-level, business-domain, process, persistence, system), तथा open–closed सिद्धांत (विस्तार के लिए खुला, संशोधन के लिए बंद)।",
        "Aur concepts: separation of concerns, interface completeness, design classes (user, domain, process, persistence, system), open–closed principle.",
      ],
    ]),
    EXAM(
      "List and explain software design concepts: abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring. Parnas (information hiding) and high cohesion / low coupling are 2-mark favourites.",
      "सॉफ्टवेयर डिज़ाइन अवधारणाएँ सूचीबद्ध कर समझाएँ: abstraction, architecture, patterns, modularity, information hiding, functional independence, refinement, refactoring। Parnas (information hiding) और high cohesion / low coupling 2 अंक के पसंदीदा हैं।",
      "Design concepts list karke explain karo. Parnas (information hiding) aur high cohesion / low coupling 2-mark favourites hain.",
    ),
  ]),

  "se-design-process": topic("se-design-process", [
    P(
      "The design process converts the analysis model into a design model through a set of iterative steps. Typical outputs, in the order Indian textbooks present them, are: data/architectural design, interface design, and component-level (detailed) design. A methodology is a prescribed combination of steps, notations and guidelines — Structured Design, OOAD/UML, or a clean-architecture approach. Process quality is judged by whether the design is traceable to requirements, implements all FRs, honours NFRs, is modular, and can be assessed with reviews. Design is not a single phase in Agile, but the same work products appear as evolving architecture and just-enough detailed design.",
      "डिज़ाइन प्रक्रिया विश्लेषण मॉडल को iterative चरणों से डिज़ाइन मॉडल में बदलती है। भारतीय पुस्तकों के क्रम में विशिष्ट आउटपुट: data/architectural design, interface design, और component-level (detailed) design। Methodology चरणों, संकेतनों और दिशानिर्देशों का निर्धारित संयोजन है — Structured Design, OOAD/UML, या clean-architecture दृष्टिकोण। प्रक्रिया गुणवत्ता इस से आँकी जाती है कि डिज़ाइन आवश्यकताओं से ट्रेस होता है, सभी FR लागू करता है, NFR मानता है, मॉड्यूलर है, और reviews से जाँचा जा सकता है। Agile में डिज़ाइन एक अकेला चरण नहीं, पर वही कार्य-उत्पाद evolving architecture और just-enough detailed design के रूप में आते हैं।",
      "Design process analysis model ko iterative steps se design model banata hai. Typical outputs: data/architectural design, interface design, component-level design. Methodology = prescribed steps + notations + guidelines (Structured Design, OOAD/UML). Quality: traceable to reqs, saari FR, NFR honour, modular, reviewable. Agile mein ek phase nahi, lekin wahi work products evolving architecture ke roop mein aate hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Architectural design: identify major subsystems, their responsibilities and communication (client–server, layered, MVC, pipe-filter, event-bus). Decide deployment (one node vs many). This is the first design activity because it constrains everything else.",
        "Architectural design: प्रमुख subsystems, उनकी जिम्मेदारियाँ और संचार पहचानें (client–server, layered, MVC, pipe-filter, event-bus)। Deployment तय करें (एक नोड बनाम अनेक)। यह पहली डिज़ाइन गतिविधि है क्योंकि यह बाकी सब बाधित करती है।",
        "Architectural design: major subsystems, responsibilities, communication (client–server, layered, MVC, pipe-filter). Deployment decide. Pehli design activity kyunki baaki sab constrain karti hai.",
      ],
      [
        "Data design: translate the information model (ER, class attributes) into databases, files, data structures and integrity rules. Poor data design produces slow queries and inconsistent records that no UI can hide.",
        "Data design: सूचना मॉडल (ER, class attributes) को databases, files, data structures और अखंडता नियमों में अनुवाद। खराब data design धीमे query और असंगत रिकॉर्ड देता है जिन्हें UI नहीं छुपा सकता।",
        "Data design: information model (ER, attributes) ko DB, files, structures, integrity rules mein. Bura data design slow queries aur inconsistent records deta hai.",
      ],
      [
        "Interface design: three faces — user interface (HCI: navigation, layout, accessibility), external system interfaces (APIs, files, protocols), and internal module interfaces (signatures, pre/post-conditions). Usability NFRs live here.",
        "Interface design: तीन चेहरे — user interface (HCI: नेविगेशन, लेआउट, accessibility), बाहरी सिस्टम interfaces (APIs, files, protocols), और आंतरिक मॉड्यूल interfaces (signatures, pre/post-conditions)। Usability NFR यहीं रहते हैं।",
        "Interface design: teen chehre — UI/HCI, external system interfaces (APIs, files), internal module interfaces (signatures, pre/post). Usability NFRs yahin.",
      ],
      [
        "Component-level / detailed design: algorithms, data structures inside a module, state machines, and the stepwise refinement that programmers can code from. Represented by PDL/pseudocode, flowcharts, Nassi–Shneiderman charts, or detailed class/sequence diagrams.",
        "Component-level / detailed design: मॉड्यूल के भीतर एल्गोरिद्म, data structures, state machines, और stepwise refinement जिससे प्रोग्रामर कोड करें। प्रतिनिधित्व: PDL/pseudocode, flowcharts, Nassi–Shneiderman, या विस्तृत class/sequence diagrams।",
        "Component-level design: module ke andar algorithms, data structures, state machines. Representation: PDL/pseudocode, flowcharts, detailed class/sequence diagrams.",
      ],
      [
        "Design methodology spectrum: function-oriented (SA/SD, DFD → structure chart) versus object-oriented (use cases → class/sequence/state). Hybrid systems use both (e.g. DFD for batch GST computation inside an OO enterprise app).",
        "डिज़ाइन पद्धति स्पेक्ट्रम: function-oriented (SA/SD, DFD → structure chart) बनाम object-oriented (use cases → class/sequence/state)। Hybrid सिस्टम दोनों उपयोग करते हैं (जैसे OO एंटरप्राइज़ ऐप के भीतर बैच GST गणना के लिए DFD)।",
        "Methodologies: function-oriented (SA/SD, DFD → structure chart) vs OO (use cases → class/sequence/state). Hybrid bhi chalta hai.",
      ],
      [
        "Quality checks during the process: design reviews, traceability to SRS, prototype of risky interfaces, and measurement (coupling, cohesion, cyclomatic complexity of proposed modules).",
        "प्रक्रिया के दौरान गुणवत्ता जाँच: design reviews, SRS तक traceability, जोखिमपूर्ण interfaces का prototype, और मापन (प्रस्तावित मॉड्यूल का coupling, cohesion, cyclomatic complexity)।",
        "Quality checks: design reviews, SRS traceability, risky interfaces ka prototype, metrics (coupling, cohesion, cyclomatic complexity).",
      ],
      [
        "Iterative nature: a discovered data-design flaw may force an architectural tweak. Agile records architecture decisions (ADRs) continuously rather than in one SDS freeze.",
        "Iterative प्रकृति: खोजा गया data-design दोष architectural बदलाव मजबूर कर सकता है। Agile architecture निर्णयों (ADR) को एक SDS फ्रीज की जगह निरंतर दर्ज करता है।",
        "Iterative: data-design flaw architecture badal sakta hai. Agile architecture decisions (ADR) continuously record karta hai, ek SDS freeze nahi.",
      ],
    ]),
    OL([
      [
        "Review and elaborate the analysis models (use cases, DFD, class model, NFRs).",
        "विश्लेषण मॉडल समीक्षा व विस्तार (use cases, DFD, class model, NFR)।",
        "Analysis models review/elaborate (use cases, DFD, class model, NFRs).",
      ],
      [
        "Propose candidate architectures; evaluate against NFRs and risk.",
        "उम्मीदवार architectures प्रस्तावित करें; NFR और जोखिम के विरुद्ध मूल्यांकन।",
        "Candidate architectures propose karo; NFR aur risk ke against evaluate.",
      ],
      [
        "Design data, interfaces and then components; keep an RTM.",
        "Data, interfaces फिर components डिज़ाइन करें; RTM रखें।",
        "Data, interfaces, phir components design karo; RTM rakho.",
      ],
      [
        "Review, prototype risky parts, refactor, baseline the design documents.",
        "समीक्षा, जोखिमपूर्ण भाग prototype, refactor, डिज़ाइन दस्तावेज़ baseline।",
        "Review, risky parts prototype, refactor, design documents baseline.",
      ],
    ]),
    EXAM(
      "Describe the design process and its outputs: architectural, data, interface, component-level design. Distinguish function-oriented and object-oriented methodologies. Mention reviews and traceability as quality gates.",
      "डिज़ाइन प्रक्रिया और आउटपुट वर्णन करें: architectural, data, interface, component-level design। Function-oriented और object-oriented पद्धतियों में अंतर। गुणवत्ता गेट के रूप में reviews और traceability का उल्लेख।",
      "Design process aur outputs: architectural, data, interface, component-level. FO vs OO methodology. Reviews aur traceability quality gates hain.",
    ),
  ]),

  "se-fo-design": topic("se-fo-design", [
    P(
      "Function-oriented software design (also called structured design) views a system as a hierarchy of processing functions that transform data. It grew from structured analysis (DeMarco, Gane & Sarson, Yourdon) and structured design (Constantine & Yourdon, Myers). The designer starts from a DFD of the current or proposed system, identifies the central transform or the transaction centre, and maps the DFD onto a structure chart of modules. Each module is a function with inputs, processing and outputs. This is the classical BCA method for “design a library / payroll / inventory system” questions and is still used inside batch, scientific and many MIS systems.",
      "Function-oriented सॉफ्टवेयर डिज़ाइन (structured design भी कहा जाता है) सिस्टम को डेटा रूपांतरित करने वाले processing functions के पदानुक्रम के रूप में देखता है। यह structured analysis (DeMarco, Gane & Sarson, Yourdon) और structured design (Constantine & Yourdon, Myers) से जन्मा। डिज़ाइनर वर्तमान या प्रस्तावित सिस्टम के DFD से शुरू कर central transform या transaction centre पहचानता है, और DFD को मॉड्यूल के structure chart पर मैप करता है। प्रत्येक मॉड्यूल इनपुट, प्रसंस्करण और आउटपुट वाला function है। यह “पुस्तकालय / पेरोल / इन्वेंटरी सिस्टम डिज़ाइन करें” प्रश्नों की क्लासिकल BCA विधि है और बैच, वैज्ञानिक तथा कई MIS सिस्टम में अभी भी उपयोग होती है।",
      "Function-oriented design (structured design) system ko processing functions ke hierarchy ki tarah dekhta hai jo data transform karte hain. Structured analysis (DeMarco, Yourdon) aur structured design (Constantine, Myers) se aaya. Designer DFD se start karke central transform ya transaction centre identify karta hai, DFD ko structure chart par map karta hai. Har module ek function hai. Library/payroll design questions ki classical BCA method; batch/MIS mein ab bhi use hoti hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Structured analysis produces: context diagram, levelled DFDs, data dictionary, process specifications (minispecs / structured English / decision tables). These are the inputs to design.",
        "Structured analysis उत्पन्न करता है: context diagram, levelled DFDs, data dictionary, process specifications (minispecs / structured English / decision tables)। ये डिज़ाइन के इनपुट हैं।",
        "Structured analysis: context diagram, levelled DFDs, data dictionary, minispecs/structured English/decision tables. Yeh design ke inputs hain.",
      ],
      [
        "Structure chart: a tree (sometimes a network) of modules. Arrows are invocation; labelled couples show data and control passing. Library modules appear as reusable leaves. Unlike a flowchart, a structure chart shows organisation, not sequence.",
        "Structure chart: मॉड्यूल का वृक्ष (कभी नेटवर्क)। तीर invocation हैं;labelled couples डेटा और नियंत्रण पासिंग दिखाते हैं। Library मॉड्यूल reusable पत्ते हैं। Flowchart के विपरीत structure chart संगठन दिखाता है, क्रम नहीं।",
        "Structure chart: modules ka tree. Arrows = invocation; couples data/control passing. Flowchart se farq: organisation dikhata hai, sequence nahi.",
      ],
      [
        "Transform analysis: used when the DFD has a clear input stream, a central transform (the “essence”), and an output stream. Steps: draw DFD, find afferent (input) and efferent (output) branches, factor the central transform, produce a boss module that calls input-control, transform, output-control.",
        "Transform analysis: जब DFD में स्पष्ट इनपुट धारा, central transform (“सार”) और आउटपुट धारा हो। चरण: DFD बनाएँ, afferent (इनपुट) और efferent (आउटपुट) शाखाएँ खोजें, central transform को factor करें, एक boss मॉड्यूल बनाएँ जो input-control, transform, output-control को बुलाए।",
        "Transform analysis: jab DFD mein clear input stream, central transform, output stream ho. Steps: DFD, afferent/efferent branches, factor central transform, boss module jo input-control, transform, output-control call kare.",
      ],
      [
        "Transaction analysis: used when a transaction centre dispatches to different action paths (e.g. bank: deposit / withdraw / enquiry). The structure chart has a transaction-centre module that receives the transaction type and calls the appropriate action module.",
        "Transaction analysis: जब transaction centre विभिन्न क्रिया पथों पर dispatch करे (जैसे बैंक: deposit / withdraw / enquiry)। Structure chart में transaction-centre मॉड्यूल transaction प्रकार पाकर उपयुक्त action मॉड्यूल बुलाता है।",
        "Transaction analysis: jab transaction centre alag action paths par dispatch kare (bank: deposit/withdraw/enquiry). Structure chart mein transaction-centre module type dekh kar action module call karta hai.",
      ],
      [
        "Design heuristics (Constantine/Yourdon): module size “fits in the head”; avoid pathological connections (jumping into the middle of a module); keep fan-out moderate; fan-in is good for reuse; decide factoring depth so that the chart is neither pancake nor too deep.",
        "डिज़ाइन heuristics (Constantine/Yourdon): मॉड्यूल आकार “सिर में समाए”; pathological connections से बचें (मॉड्यूल के बीच में कूदना); fan-out मध्यम; fan-in reuse के लिए अच्छा; factoring गहराई ऐसी कि चार्ट न pancake हो न बहुत गहरा।",
        "Heuristics: module size “fits in the head”; pathological connections se bacho; fan-out moderate; fan-in reuse ke liye accha; chart pancake na ho na bahut gehra.",
      ],
      [
        "Advantages: maps well to batch and information-processing systems; DFD is easy to walk through with customers; structure charts make coupling visible. Limitations: poor match for GUI-rich, event-driven or heavily stateful systems — OOAD handles those better.",
        "लाभ: बैच और सूचना-प्रसंस्करण सिस्टम से अच्छा मैप; DFD ग्राहकों के साथ walk-through में आसान; structure charts coupling दृश्य करते हैं। सीमाएँ: GUI-समृद्ध, event-driven या अधिक stateful सिस्टम से कम मेल — उनके लिए OOAD बेहतर।",
        "Advantages: batch/MIS se accha map; DFD customer walk-through asaan; coupling visible. Limits: GUI-rich, event-driven, stateful systems — unke liye OOAD better.",
      ],
    ]),
    TBL(
      [
        ["Technique", "तकनीक", "Technique"],
        ["When to use", "कब उपयोग", "Kab use"],
        ["Resulting top of chart", "चार्ट का शीर्ष", "Chart ka top"],
      ],
      [
        [
          ["Transform analysis", "Transform analysis", "Transform analysis"],
          ["Input → transform → output pipeline", "इनपुट → रूपांतर → आउटपुट पाइपलाइन", "Input → transform → output pipeline"],
          ["Boss calling in / transform / out", "Boss in / transform / out बुलाता है", "Boss in / transform / out call karta hai"],
        ],
        [
          ["Transaction analysis", "Transaction analysis", "Transaction analysis"],
          ["One centre, many action types", "एक केंद्र, अनेक क्रिया प्रकार", "Ek centre, kai action types"],
          ["Dispatcher / transaction centre", "Dispatcher / transaction centre", "Dispatcher / transaction centre"],
        ],
      ],
    ),
    EXAM(
      "Explain function-oriented design, structure charts, and the difference between transform analysis and transaction analysis (steps of each). A 10-mark question may ask you to draw a DFD and the corresponding structure chart for a small system.",
      "Function-oriented design, structure charts, तथा transform analysis और transaction analysis का अंतर (प्रत्येक के चरण) समझाएँ। 10 अंक के प्रश्न में छोटे सिस्टम का DFD और संगत structure chart बनवाया जा सकता है।",
      "FO design, structure charts, transform vs transaction analysis (steps). 10-mark mein chhote system ka DFD aur structure chart banwana pad sakta hai.",
    ),
  ]),

  "se-dfd": topic("se-dfd", [
    P(
      "Structured analysis models a system as data flowing among processes, stores and external entities. The Data Flow Diagram (DFD) is the central picture; it is supported by a data dictionary and process specifications. A context diagram (Level 0) shows the whole system as one process plus terminators. Level 1 explodes that process into major subprocesses; further levels explode until a process is primitive (specified in structured English or a decision table). Balancing rule: data flows crossing a parent process boundary must appear on the child diagram. Structure charts are then derived from DFDs as described in function-oriented design. DFDs are not flowcharts: they show data movement, not control sequence, and they have no loops or decision diamonds.",
      "Structured analysis सिस्टम को processes, stores और बाहरी इकाइयों के बीच बहते डेटा के रूप में मॉडल करता है। Data Flow Diagram (DFD) केंद्रीय चित्र है; इसे data dictionary और process specifications सहारा देते हैं। Context diagram (Level 0) पूरे सिस्टम को एक process व terminators के रूप में दिखाता है। Level 1 उस process को प्रमुख subprocesses में फोड़ता है; आगे के स्तर तब तक फोड़ते हैं जब process primitive न हो (structured English या decision table)। Balancing नियम: parent process सीमा पार करने वाले data flows बच्चे के चित्र पर आने चाहिए। Structure charts फिर DFD से बनाए जाते हैं। DFD flowchart नहीं: वे डेटा गति दिखाते हैं, नियंत्रण क्रम नहीं, और उनमें loops या decision diamonds नहीं होते।",
      "Structured analysis system ko processes, stores aur external entities ke beech data flow ki tarah model karta hai. DFD central picture hai; data dictionary aur process specs saath. Context (Level 0): poora system ek process + terminators. Level 1 explode; taab tak jab process primitive ho. Balancing: parent boundary ke flows child par dikhne chahiye. DFD flowchart nahi — data movement, control sequence nahi; loops/diamonds nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Symbols (Yourdon/DeMarco vs Gane & Sarson): process = circle or rounded rectangle; external entity (terminator) = square; data store = two parallel lines or open rectangle; data flow = labelled arrow. Pick one notation and stay consistent.",
        "प्रतीक (Yourdon/DeMarco बनाम Gane & Sarson): process = वृत्त याRounded आयत; external entity = वर्ग; data store = दो समांतर रेखाएँ या खुला आयत; data flow = नामांकित तीर। एक संकेतन चुनकर स्थिर रहें।",
        "Symbols: process = circle ya rounded rectangle; external entity = square; data store = two parallel lines; data flow = labelled arrow. Ek notation chuno aur consistent raho.",
      ],
      [
        "Rules: every process must have at least one input and one output; a process cannot create data from nothing; a store is not a process (no logic inside the store symbol); flows are named with nouns (Book-record, Fine-amount), processes with verbs (Compute-fine, Issue-book).",
        "नियम: प्रत्येक process में कम से कम एक इनपुट और एक आउटपुट; process शून्य से डेटा नहीं बना सकता; store process नहीं (store प्रतीक में तर्क नहीं); flows संज्ञा से नाम (Book-record, Fine-amount), processes क्रिया से (Compute-fine, Issue-book)।",
        "Rules: har process mein kam se kam ek input aur output; process kuch nahi se data nahi banaata; store process nahi; flows nouns, processes verbs.",
      ],
      [
        "Context diagram: one process numbered 0, all external entities (Member, Librarian, Bank, …), major data flows only. No data stores on a strict context diagram (some books allow them if they are external files).",
        "Context diagram: एक process क्रमांक 0, सभी external entities (Member, Librarian, Bank, …), केवल प्रमुख data flows। कठोर context diagram पर data stores नहीं (कुछ पुस्तकें बाहरी files होने पर अनुमति देती हैं)।",
        "Context diagram: ek process 0, saari external entities, major flows. Strict context par data stores nahi.",
      ],
      [
        "Levelling and numbering: 0 explodes to 1.0, 2.0, 3.0; 2.0 explodes to 2.1, 2.2, … A child diagram’s incoming/outgoing flows must balance the parent’s boundary flows (conservation of data).",
        "Levelling और numbering: 0 फूटकर 1.0, 2.0, 3.0; 2.0 फूटकर 2.1, 2.2, … बच्चे के आने/जाने flows parent की सीमा के flows से balance होने चाहिए (डेटा संरक्षण)।",
        "Levelling: 0 → 1.0, 2.0, 3.0; 2.0 → 2.1, 2.2. Child ke incoming/outgoing flows parent boundary se balance hone chahiye.",
      ],
      [
        "Data dictionary: a repository of every data flow, store and process name — composition (Student = Name + Roll + …), aliases, types, constraints. Without a dictionary, DFD names become ambiguous.",
        "Data dictionary: प्रत्येक data flow, store और process नाम का भंडार — संरचना (Student = Name + Roll + …), उपनाम, प्रकार, बाधाएँ। Dictionary के बिना DFD नाम अस्पष्ट हो जाते हैं।",
        "Data dictionary: har flow, store, process name ka repository — composition (Student = Name + Roll + …), aliases, types. Bina dictionary DFD names ambiguous.",
      ],
      [
        "Process specification (minispec): for a primitive process, structured English, a decision table or a decision tree. Example: IF days-late > 0 THEN fine = days-late * rate. This becomes the module spec in the structure chart.",
        "Process specification (minispec): primitive process के लिए structured English, decision table या decision tree। उदाहरण: IF days-late > 0 THEN fine = days-late * rate। यही structure chart में मॉड्यूल spec बनता है।",
        "Minispec: primitive process ke liye structured English, decision table ya tree. Example: IF days-late > 0 THEN fine = days-late * rate. Yahi structure chart ki module spec banti hai.",
      ],
      [
        "Common mistakes (examiners cut marks): flowchart arrows, unnamed flows, process-to-process flows that skip needed stores, sources connected directly to sinks without a process, and unbalanced levels.",
        "सामान्य गलतियाँ (अंक कटते हैं): flowchart तीर, बिना नाम flows, आवश्यक stores छोड़ते process-to-process flows, बिना process के source सीधे sink से जुड़ना, unbalanced levels।",
        "Common mistakes: flowchart arrows, unnamed flows, source seedha sink se bina process, unbalanced levels — in par marks katte hain.",
      ],
    ]),
    D(
      "dfd",
      "DFD notation and levelling: context (level 0) explodes into level-1 processes, stores and flows that must balance.",
      "DFD संकेतन और levelling: context (level 0) level-1 processes, stores और flows में फूटता है जो balance होने चाहिए।",
      "DFD notation aur levelling: context (level 0) level-1 processes, stores, flows mein phootta hai jo balance hone chahiye.",
    ),
    EXAM(
      "Draw a context diagram and Level-1 DFD for a prescribed system (library, railway reservation, ATM). State DFD symbols, balancing, and difference from a flowchart. Mention data dictionary and minispecs.",
      "निर्धारित सिस्टम (पुस्तकालय, रेल आरक्षण, ATM) का context diagram और Level-1 DFD बनाएँ। DFD प्रतीक, balancing, flowchart से अंतर। Data dictionary और minispecs का उल्लेख।",
      "Context + Level-1 DFD banao (library, railway, ATM). Symbols, balancing, flowchart se farq. Data dictionary aur minispecs mention karo.",
    ),
  ]),

  "se-modularity": topic("se-modularity", [
    P(
      "Modularity is the design decision to partition software into separately named and addressable components (modules) that are integrated to satisfy problem requirements. The goal is functional independence: each module addresses a single, well-bounded sub-function and has a simple interface to the rest of the world. Independence is measured by two qualitative metrics. Cohesion is the degree to which internal elements of a module belong together (want HIGH). Coupling is the degree of interdependence among modules (want LOW). Parnas’ information hiding is the principle that produces high cohesion and low coupling in practice. These ideas appear in every design, testing and maintenance question.",
      "Modularity वह डिज़ाइन निर्णय है जो सॉफ्टवेयर को अलग-अलग नामित व संबोधित घटकों (मॉड्यूल) में बाँटता है जिन्हें समस्या आवश्यकताओं की पूर्ति के लिए एकीकृत किया जाता है। लक्ष्य functional independence है: प्रत्येक मॉड्यूल एक एकल, सुपरिभाषित उप-कार्य करे और शेष विश्व से साधारण interface रखे। स्वतंत्रता दो गुणात्मक मेट्रिक्स से मापी जाती है। Cohesion मॉड्यूल के आंतरिक तत्वों के साथ होने की मात्रा है (उच्च चाहिए)। Coupling मॉड्यूलों की पारस्परिक निर्भरता है (निम्न चाहिए)। Parnas का information hiding वह सिद्धांत है जो व्यवहार में high cohesion और low coupling पैदा करता है। ये विचार हर डिज़ाइन, टेस्टिंग और रखरखाव प्रश्न में आते हैं।",
      "Modularity software ko named addressable modules mein baantne ka design decision hai. Goal: functional independence — har module ek well-bounded sub-function, simple interface. Do metrics: cohesion (HIGH chahiye) = andar ke elements kitne saath hain; coupling (LOW chahiye) = modules kitne interdependent. Parnas ka information hiding practical mein yeh produce karta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Cohesion types, worst to best (memorise order): coincidental → logical → temporal → procedural → communicational → sequential → functional. Some lists insert analogical or coincidental at the bottom and informational near the top. Functional cohesion (all elements contribute to a single function, e.g. Compute-fine) is the goal.",
        "Cohesion प्रकार, सबसे खराब से सर्वश्रेष्ठ (क्रम याद करें): coincidental → logical → temporal → procedural → communicational → sequential → functional। कुछ सूचियाँ नीचे analogical/coincidental और ऊपर informational रखती हैं। Functional cohesion (सभी तत्व एक function में योगदान, जैसे Compute-fine) लक्ष्य है।",
        "Cohesion worst→best: coincidental → logical → temporal → procedural → communicational → sequential → functional. Functional (saare elements ek function, jaise Compute-fine) goal hai.",
      ],
      [
        "Coincidental: unrelated statements dumped together. Logical: similar-in-kind operations (all inputs, all prints) in one module with a flag. Temporal: things that happen at the same time (start-up). Procedural: elements that follow a control sequence. Communicational: same data set. Sequential: output of one is input of next. Functional: one job.",
        "Coincidental: असंबंधित कथन एक साथ। Logical: एक जैसे कार्य (सभी इनपुट, सभी प्रिंट) एक flag के साथ एक मॉड्यूल में। Temporal: एक समय की चीजें (start-up)। Procedural: नियंत्रण क्रम वाले तत्व। Communicational: एक ही डेटा सेट। Sequential: एक का आउटपुट अगले का इनपुट। Functional: एक काम।",
        "Coincidental: unrelated dump. Logical: similar operations + flag. Temporal: same time (start-up). Procedural: control sequence. Communicational: same data. Sequential: output→next input. Functional: one job.",
      ],
      [
        "Coupling types, worst to best: content (one module modifies another’s internals) → common (shared global data) → control (one passes flags that control another’s logic) → stamp (pass a composite data structure when only a field is needed) → data (pass only the necessary parameters) → (sometimes listed) message / no coupling. Data coupling is the desirable end for conventional modules; message coupling for OO objects.",
        "Coupling प्रकार, सबसे खराब से सर्वश्रेष्ठ: content (एक मॉड्यूल दूसरे के आंतरिक बदलता है) → common (साझा global डेटा) → control (flag से दूसरे की logic नियंत्रित) → stamp (पूरा composite structure जब केवल एक field चाहिए) → data (केवल आवश्यक पैरामीटर) → (कभी) message / no coupling। पारंपरिक मॉड्यूल के लिए data coupling वांछनीय; OO के लिए message coupling।",
        "Coupling worst→best: content → common → control → stamp → data → (kabhi) message. Conventional modules ke liye data coupling desirable; OO ke liye message coupling.",
      ],
      [
        "Why it matters: a highly cohesive, loosely coupled module can be coded, tested, understood and reused in isolation. A content-coupled pair cannot be changed without breaking its twin — maintenance cost explodes.",
        "क्यों मायने: उच्च cohesive, शिथिल coupled मॉड्यूल अकेले कोड, टेस्ट, समझ और reuse हो सकता है। Content-coupled जोड़ी को बिना जुड़वाँ तोड़े नहीं बदला जा सकता — रखरखाव लागत फूटती है।",
        "Kyun matter: high cohesion + low coupling = akele code/test/reuse. Content-coupled jodi ko bina tootey nahi badal sakte — maintenance cost phootti hai.",
      ],
      [
        "Design actions that improve the metrics: hide data structures behind access functions (information hiding); avoid global variables; pass parameters not control flags; split coincidental modules; keep a module’s secret in one place (single responsibility).",
        "मेट्रिक्स सुधारने वाले डिज़ाइन कार्य: data structures को access functions के पीछे छुपाएँ (information hiding); global variables से बचें; control flags नहीं पैरामीटर दें; coincidental मॉड्यूल बाँटें; मॉड्यूल का रहस्य एक जगह (single responsibility)।",
        "Improve kaise: data structures access functions ke peeche chhupao; globals se bacho; flags nahi parameters; coincidental modules baanto; ek secret ek jagah (SRP).",
      ],
      [
        "Related measures: fan-in (how many modules call this one — high is good for reuse), fan-out (how many this one calls — too high means the module is a manager doing too much), and size (a module that cannot be understood in one sitting is too large).",
        "संबंधित माप: fan-in (कितने मॉड्यूल इसे बुलाते हैं — reuse के लिए उच्च अच्छा), fan-out (यह कितनों को बुलाता है — बहुत उच्च का अर्थ प्रबंधक बहुत काम कर रहा), आकार (एक बैठक में न समझ आए तो बड़ा है)।",
        "Related: fan-in (kitne call karte hain — high accha), fan-out (yeh kitne call karta hai — bahut high = zyada kaam), size (ek sitting mein na samajh aaye to bada hai).",
      ],
    ]),
    D(
      "cohesion",
      "Cohesion scale (coincidental → functional) and coupling scale (content → data); design toward the right of both scales.",
      "Cohesion पैमाना (coincidental → functional) और coupling पैमाना (content → data); दोनों पर दाईं ओर डिज़ाइन करें।",
      "Cohesion scale (coincidental → functional) aur coupling scale (content → data); dono par right ki ore design karo.",
    ),
    TBL(
      [
        ["Metric", "मेट्रिक", "Metric"],
        ["Want", "चाहिए", "Chahiye"],
        ["Best form", "सर्वोत्तम रूप", "Best form"],
      ],
      [
        [
          ["Cohesion", "Cohesion", "Cohesion"],
          ["High", "उच्च", "High"],
          ["Functional", "Functional", "Functional"],
        ],
        [
          ["Coupling", "Coupling", "Coupling"],
          ["Low", "निम्न", "Low"],
          ["Data (or message)", "Data (या message)", "Data (ya message)"],
        ],
      ],
    ),
    EXAM(
      "Define modularity, cohesion and coupling. List cohesion types in order with one example each, and coupling types in order. State the design goal: high cohesion, low coupling. Information hiding (Parnas) is often the 2-mark rider.",
      "Modularity, cohesion और coupling परिभाषित करें। Cohesion प्रकार क्रम सहित एक-एक उदाहरण, coupling प्रकार क्रम सहित। डिज़ाइन लक्ष्य: high cohesion, low coupling। Information hiding (Parnas) अक्सर 2 अंक का अतिरिक्त प्रश्न है।",
      "Modularity, cohesion, coupling define karo. Cohesion types order + example, coupling types order. Goal: high cohesion, low coupling. Parnas 2-mark rider.",
    ),
  ]),

  "se-ooad": topic("se-ooad", [
    P(
      "Object-Oriented Analysis and Design (OOAD) models the problem and the solution as a society of collaborating objects rather than as a hierarchy of functions. Analysis discovers objects that exist in the domain (Book, Member, Loan); design adds software objects (controllers, views, persistence mappers) and specifies their responsibilities and messages. The intellectual toolkit is the object model: class, object, attribute, operation, inheritance, polymorphism, encapsulation, association, aggregation and composition. UML is the standard notation. OOAD maps naturally onto Java/C++/Python implementation and onto reuse via class libraries and frameworks. It does not abolish cohesion and coupling; it re-expresses them as well-named classes with narrow interfaces.",
      "Object-Oriented Analysis and Design (OOAD) समस्या और समाधान को functions के पदानुक्रम की जगह सहयोगी objects के समाज के रूप में मॉडल करता है। Analysis domain में मौजूद objects खोजता है (Book, Member, Loan); design सॉफ्टवेयर objects (controllers, views, persistence mappers) जोड़कर उनकी जिम्मेदारियाँ और संदेश निर्दिष्ट करता है। बौद्धिक उपकरण object model है: class, object, attribute, operation, inheritance, polymorphism, encapsulation, association, aggregation और composition। UML मानक संकेतन है। OOAD Java/C++/Python implementation और class libraries/frameworks से reuse पर स्वाभाविक बैठता है। यह cohesion और coupling मिटाता नहीं; उन्हें संकीर्ण interfaces वाली सुनामित classes के रूप में फिर व्यक्त करता है।",
      "OOAD problem aur solution ko functions ki hierarchy ki jagah collaborating objects ke society ki tarah model karta hai. Analysis domain objects dhoondhta hai (Book, Member, Loan); design software objects (controllers, views, mappers) jodta hai. Toolkit: class, object, attribute, operation, inheritance, polymorphism, encapsulation, association, aggregation, composition. UML notation. Java/C++ par natural map; cohesion/coupling mitate nahi — narrow interfaces wali classes banate hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Object = identity + state (attributes) + behaviour (operations). Class = a template / set of objects with the same structure and behaviour. Instance = a particular object (member “Asha, M-1021”).",
        "Object = पहचान + अवस्था (attributes) + व्यवहार (operations)। Class = समान संरचना व व्यवहार वाले objects का टेम्पलेट / समुच्चय। Instance = विशेष object (सदस्य “Asha, M-1021”)।",
        "Object = identity + state + behaviour. Class = template. Instance = particular object (member “Asha, M-1021”).",
      ],
      [
        "Encapsulation / information hiding: state is accessed through operations; representation can change without breaking clients. Abstraction: a class exposes a meaningful domain concept, not its storage layout.",
        "Encapsulation / information hiding: अवस्था operations से पहुँची जाती है; representation बदल सकती है बिना clients तोड़े। Abstraction: class सार्थक domain अवधारणा दिखाती है, भंडारण लेआउट नहीं।",
        "Encapsulation: state operations se access; representation badal sakti hai. Abstraction: class domain concept dikhati hai, storage layout nahi.",
      ],
      [
        "Inheritance (generalisation): a subclass obtains attributes and operations of a superclass and may add or override. Supports “is-a” (Student is-a Member). Overuse creates brittle hierarchies; prefer composition when the relation is “has-a”.",
        "Inheritance (generalisation): subclass superclass के attributes व operations प्राप्त कर जोड़ या override कर सकती है। “is-a” समर्थन (Student is-a Member)। अति प्रयोग भंगुर पदानुक्रम बनाता है; “has-a” पर composition बेहतर।",
        "Inheritance: subclass ko superclass ke attributes/operations milte hain, add/override. “is-a” (Student is-a Member). Overuse brittle; “has-a” par composition better.",
      ],
      [
        "Polymorphism and dynamic binding: a client sends the same message (calculateFee()) to different classes; each class runs its own version. New subclasses can be added without editing the client (open–closed principle).",
        "Polymorphism और dynamic binding: client विभिन्न classes को एक ही संदेश (calculateFee()) भेजता है; प्रत्येक अपनी संस्करण चलाती है। नई subclasses client संपादित किए बिना जोड़ी जा सकती हैं (open–closed principle)।",
        "Polymorphism: client same message (calculateFee()) alag classes ko bhejta hai; har class apna version chalaati hai. Nayi subclasses bina client edit kiye jud sakti hain.",
      ],
      [
        "Relationships: association (Member borrows Book); multiplicity (1, 0..1, *, 1..*); aggregation (weak has-a: Department has Teachers, teachers can exist alone); composition (strong has-a: Book has Chapters that die with the book); dependency (a dashed “uses” relation).",
        "संबंध: association (Member Book उधार लेता है); multiplicity (1, 0..1, *, 1..*); aggregation (कमजोर has-a: Department के Teachers, शिक्षक अकेले जी सकते हैं); composition (मजबूत has-a: Book के Chapters पुस्तक के साथ मरते हैं); dependency (dashed “uses” संबंध)।",
        "Relationships: association (Member borrows Book); multiplicity 1, 0..1, *, 1..*; aggregation weak has-a; composition strong has-a; dependency = uses.",
      ],
      [
        "OO analysis steps (typical): identify actors and use cases; find candidate classes (nouns in the problem statement); discard extras (attributes mistaken as classes, implementation classes too early); assign responsibilities (CRC cards); model relationships and behaviour (state, sequence).",
        "OO analysis चरण: actors और use cases पहचानें; उम्मीदवार classes (समस्या कथन के संज्ञा); अतिरिक्त हटाएँ (attributes को class समझना, बहुत जल्दी implementation classes); जिम्मेदारियाँ सौंपें (CRC cards); संबंध व व्यवहार मॉडल करें (state, sequence)।",
        "OOA steps: actors/use cases; candidate classes (nouns); extras hatao; responsibilities (CRC cards); relationships aur behaviour (state, sequence).",
      ],
      [
        "OO vs function-oriented: FO decomposes by processing steps (verbs); OO decomposes by domain concepts (nouns) that own their verbs. FO is still better for simple batch transforms; OO is better when many entities with rich state interact.",
        "OO बनाम function-oriented: FO प्रसंस्करण चरणों (क्रिया) से विघटित करता है; OO domain अवधारणाओं (संज्ञा) से जो अपनी क्रियाएँ रखती हैं। सरल बैच रूपांतरण पर FO अभी बेहतर; समृद्ध अवस्था वाली अनेक इकाइयों के संपर्क पर OO बेहतर।",
        "OO vs FO: FO verbs/processing se todta hai; OO nouns/domain concepts se jo apne verbs own karte hain. Simple batch par FO; rich state wali entities par OO.",
      ],
    ]),
    EXAM(
      "Define class, object, encapsulation, inheritance, polymorphism. Distinguish association, aggregation and composition with multiplicity. Contrast OOAD with function-oriented design. CRC cards and “is-a vs has-a” are common 2-markers.",
      "Class, object, encapsulation, inheritance, polymorphism परिभाषित करें। Association, aggregation, composition में multiplicity सहित अंतर। OOAD की function-oriented design से तुलना। CRC cards और “is-a बनाम has-a” सामान्य 2 अंक प्रश्न हैं।",
      "Class, object, encapsulation, inheritance, polymorphism. Association vs aggregation vs composition. OOAD vs FO design. CRC aur is-a vs has-a 2-markers.",
    ),
  ]),

  "se-uml-views": topic("se-uml-views", [
    P(
      "The Unified Modeling Language (UML) is the OMG standard visual language for specifying, visualising, constructing and documenting software-intensive systems. It was unified in the mid-1990s by Grady Booch, James Rumbaugh and Ivar Jacobson (the Three Amigos) from their earlier methods, and adopted by OMG in 1997. UML is a language, not a process; RUP or any Agile practice can use it. A single diagram cannot show a whole system, so UML is organised into views. Kruchten’s 4+1 view model is the exam-standard way to group those diagrams: logical, process, development (implementation), physical (deployment), plus use-case view that ties them together.",
      "Unified Modeling Language (UML) सॉफ्टवेयर-intensive सिस्टम को निर्दिष्ट, दृश्य, निर्मित और दस्तावेजित करने की OMG मानक दृश्य भाषा है। 1990 के मध्य में Grady Booch, James Rumbaugh और Ivar Jacobson (Three Amigos) ने अपनी पुरानी विधियों से इसे एकीकृत किया, OMG ने 1997 में अपनाया। UML भाषा है, प्रक्रिया नहीं; RUP या कोई Agile प्रथा इसे उपयोग कर सकती है। एक चित्र पूरा सिस्टम नहीं दिखा सकता, अतः UML views में संगठित है। Kruchten का 4+1 view मॉडल परीक्षा-मानक समूह है: logical, process, development (implementation), physical (deployment), तथा उन्हें बाँधने वाला use-case view।",
      "UML OMG standard visual language hai specify, visualise, construct, document karne ke liye. Mid-1990s mein Booch, Rumbaugh, Jacobson (Three Amigos) ne unify kiya; OMG 1997. UML language hai, process nahi. Ek diagram poora system nahi dikhata — views chahiye. Kruchten 4+1: logical, process, development, physical, plus use-case view jo sab ko baandhta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Use-case view (+1): what the system does for actors. Diagrams: use-case diagrams, use-case specifications. This view drives requirements and acceptance; the other four views realise it.",
        "Use-case view (+1): सिस्टम actors के लिए क्या करता है। चित्र: use-case diagrams, use-case specifications। यह view आवश्यकताएँ और acceptance चलाता है; शेष चार इसे साकार करते हैं।",
        "Use-case view (+1): system actors ke liye kya karta hai. Use-case diagrams/specs. Yeh requirements aur acceptance drive karta hai; baaki chaar ise realise karte hain.",
      ],
      [
        "Logical view: functional requirements as classes, relationships, states. Diagrams: class, object, state, (sometimes) sequence. Audience: designers and programmers thinking about structure and behaviour of concepts.",
        "Logical view: classes, संबंधों, अवस्थाओं के रूप में कार्यात्मक आवश्यकताएँ। चित्र: class, object, state, (कभी) sequence। दर्शक: संरचना व व्यवहार सोचते डिज़ाइनर और प्रोग्रामर।",
        "Logical view: FR as classes, relationships, states. Diagrams: class, object, state, sequence. Audience: designers/programmers.",
      ],
      [
        "Process view: concurrency, threads, timing, performance, fault tolerance. Diagrams: activity (with partitions), communication, sequence emphasising tasks, maybe timing diagrams. Audience: performance and integration engineers.",
        "Process view: concurrency, threads, timing, performance, fault tolerance। चित्र: activity (partitions सहित), communication, tasks पर जोर देते sequence, शायद timing diagrams। दर्शक: performance व integration इंजीनियर।",
        "Process view: concurrency, threads, timing, performance. Diagrams: activity, communication, sequence, timing. Audience: performance/integration engineers.",
      ],
      [
        "Development / implementation view: how the software is organised into packages, components and source files. Diagrams: package, component. Audience: programmers and configuration managers.",
        "Development / implementation view: सॉफ्टवेयर packages, components और स्रोत files में कैसे संगठित है। चित्र: package, component। दर्शक: प्रोग्रामर और configuration managers।",
        "Development/implementation view: packages, components, source files. Diagrams: package, component. Audience: programmers, SCM.",
      ],
      [
        "Physical / deployment view: mapping of software onto hardware (nodes, devices, communication paths). Diagrams: deployment. Audience: operations, network and system administrators. Realises availability and deployment NFRs.",
        "Physical / deployment view: सॉफ्टवेयर का हार्डवेयर पर मैपिंग (nodes, devices, संचार पथ)। चित्र: deployment। दर्शक: operations, नेटवर्क व सिस्टम प्रशासक। उपलब्धता व deployment NFR साकार करता है।",
        "Physical/deployment view: software ka hardware par mapping (nodes, devices). Diagram: deployment. Audience: ops/network admins. Availability NFRs yahin.",
      ],
      [
        "UML 2 diagram groups: structure (class, object, component, composite structure, package, deployment) and behaviour (use case, activity, state machine, sequence, communication, interaction overview, timing). You need not memorise every rare diagram; class, use case, sequence, activity, state, component, deployment cover BCA.",
        "UML 2 चित्र समूह: संरचना (class, object, component, composite structure, package, deployment) और व्यवहार (use case, activity, state machine, sequence, communication, interaction overview, timing)। हर दुर्लभ चित्र याद करने की जरूरत नहीं; class, use case, sequence, activity, state, component, deployment BCA कवर करते हैं।",
        "UML 2: structure diagrams aur behaviour diagrams. BCA ke liye class, use case, sequence, activity, state, component, deployment kaafi.",
      ],
      [
        "UML is not a methodology. The Unified Process (RUP) is a use-case-driven, architecture-centric, iterative process that happens to use UML. Agile teams use UML sketches, not necessarily a full 4+1 document set.",
        "UML methodology नहीं है। Unified Process (RUP) use-case-driven, architecture-centric, iterative प्रक्रिया है जो UML उपयोग करती है। Agile टीमें UML sketches उपयोग करती हैं, आवश्यक नहीं कि पूर्ण 4+1 दस्तावेज़ सेट।",
        "UML methodology nahi. RUP use-case-driven, architecture-centric, iterative process hai jo UML use karti hai. Agile teams UML sketches use karti hain, poora 4+1 set zaroori nahi.",
      ],
    ]),
    D(
      "uml-views",
      "Kruchten 4+1 views: logical, process, development, physical, tied together by the use-case view.",
      "Kruchten 4+1 views: logical, process, development, physical, use-case view से बँधे।",
      "Kruchten 4+1 views: logical, process, development, physical, use-case view se bandhe.",
    ),
    EXAM(
      "Name the Three Amigos and state that UML is a language not a process. Explain Kruchten’s 4+1 views with the diagrams that belong to each. List major structural vs behavioural diagrams.",
      "Three Amigos का नाम बताएँ और कहें UML भाषा है प्रक्रिया नहीं। Kruchten के 4+1 views प्रत्येक के diagrams सहित समझाएँ। प्रमुख structural बनाम behavioural diagrams लिखें।",
      "Three Amigos, UML language hai process nahi. Kruchten 4+1 views diagrams ke saath. Structural vs behavioural diagrams list karo.",
    ),
  ]),

  "se-class-object": topic("se-class-object", [
    P(
      "A class diagram is the static structural view of a system: classes, their attributes and operations, and the relationships among classes. An object diagram is an instance snapshot at a moment in time: particular objects, their attribute values, and the links that currently exist. Class diagrams are the most used UML artefact in BCA courses and in design reviews; object diagrams are used to explain a tricky example, to debug a collaboration, or to show a test fixture. If a class diagram is the town plan, an object diagram is a photograph of the streets on Tuesday 10 a.m.",
      "Class diagram सिस्टम का स्थैतिक संरचनात्मक दृश्य है: classes, उनके attributes व operations, और classes के बीच संबंध। Object diagram किसी समय बिंदु का instance स्नैपशॉट है: विशेष objects, उनके attribute मान, और वर्तमान links। Class diagrams BCA पाठ्यक्रमों और design reviews में सबसे प्रयुक्त UML artefact हैं; object diagrams जटिल उदाहरण समझाने, collaboration डिबग करने, या टेस्ट fixture दिखाने के लिए। यदि class diagram नगर योजना है, object diagram मंगलवार सुबह 10 बजे सड़कों का फोटो है।",
      "Class diagram static structural view hai: classes, attributes, operations, relationships. Object diagram kisi pal ka instance snapshot: particular objects, values, current links. Class diagrams sabse used; object diagrams tricky example, debug, test fixture ke liye. Class diagram town plan hai, object diagram Tuesday 10 a.m. ki photo.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Class box: three compartments — name (singular noun, Capitalised), attributes (visibility name: type = default), operations (visibility name(params): return). Visibility: + public, − private, # protected, ~ package.",
        "Class बॉक्स: तीन खंड — नाम (एकवचन संज्ञा, Capitalised), attributes (visibility name: type = default), operations (visibility name(params): return)। Visibility: + public, − private, # protected, ~ package।",
        "Class box: teen compartments — name, attributes, operations. Visibility: + public, − private, # protected, ~ package.",
      ],
      [
        "Object box: objectName : ClassName underlined (e.g. asha : Member). Attributes show current values (roll = 1021). Operations are usually omitted. Anonymous objects are written : ClassName.",
        "Object बॉक्स: objectName : ClassName रेखांकित (जैसे asha : Member)। Attributes वर्तमान मान दिखाते हैं (roll = 1021)। Operations प्रायः छोड़ी जाती हैं। Anonymous objects : ClassName लिखे जाते हैं।",
        "Object box: objectName : ClassName underlined (asha : Member). Attributes current values. Operations usually nahi. Anonymous: :ClassName.",
      ],
      [
        "Association: a solid line, optional name and reading arrow, roles at each end, multiplicity (1, 0..1, 1..*, 0..*, n). A link on an object diagram is one instance of that association.",
        "Association: ठोस रेखा, वैकल्पिक नाम व पढ़ने का तीर, प्रत्येक सिरे पर roles, multiplicity (1, 0..1, 1..*, 0..*, n)। Object diagram पर link उस association का एक instance है।",
        "Association: solid line, optional name, roles, multiplicity. Object diagram par link us association ka ek instance hai.",
      ],
      [
        "Aggregation (hollow diamond) vs composition (filled diamond): both are has-a. Composition implies exclusive ownership and coincident lifetime (a University composed of Departments that vanish if the university is dissolved). Aggregation is a shared, weaker whole–part (a Professor aggregated by a Department but who may exist independently).",
        "Aggregation (खोखला हीरा) बनाम composition (भरा हीरा): दोनों has-a। Composition का अर्थ अनन्य स्वामित्व और संपाती जीवनकाल (University के Departments विश्वविद्यालय भंग होने पर गायब)। Aggregation साझा, कमजोर whole–part (Professor Department से aggregated पर स्वतंत्र जी सकता है)।",
        "Aggregation (hollow diamond) vs composition (filled): dono has-a. Composition = exclusive ownership + same lifetime. Aggregation = weaker shared whole–part.",
      ],
      [
        "Generalisation: a triangle on the superclass end (Student → Member). Abstract class names in italics. Interfaces may be shown with a circle or «interface» stereotype. Association classes attach attributes to the relationship itself (Loan with dateIssued).",
        "Generalisation: superclass सिरे पर त्रिभुज (Student → Member)। Abstract class नाम तिरछे। Interfaces वृत्त या «interface» stereotype से। Association classes संबंध पर ही attributes लगाती हैं (Loan with dateIssued)।",
        "Generalisation: triangle superclass end par. Abstract names italics. Interfaces circle ya «interface». Association class relationship par attributes (Loan with dateIssued).",
      ],
      [
        "Dependency: dashed arrow “uses” (a Controller depends on a Service). Realization: dashed line with hollow triangle (a class realizes an interface). These appear more on class diagrams than on object diagrams.",
        "Dependency: dashed तीर “uses” (Controller Service पर depends)। Realization: खोखले त्रिभुज वाली dashed रेखा (class interface realize करती है)। ये object diagrams से अधिक class diagrams पर आते हैं।",
        "Dependency: dashed arrow uses. Realization: dashed + hollow triangle. Yeh class diagrams par zyada aate hain.",
      ],
      [
        "How many objects: a class diagram can represent infinitely many object diagrams. Multiplicity “1..*” on Member—Loan means an object diagram might show one member linked to three loans this afternoon and zero tomorrow after return.",
        "कितने objects: एक class diagram अनंत object diagrams निरूपित कर सकता है। Member—Loan पर multiplicity “1..*” का अर्थ है object diagram आज दोपहर तीन loans से जुड़े एक सदस्य दिखा सकता है और वापसी के बाद कल शून्य।",
        "Ek class diagram infinitely many object diagrams represent karta hai. Multiplicity 1..* ka matlab aaj teen loans, kal zero ho sakte hain.",
      ],
    ]),
    D(
      "class-diagram",
      "Class diagram: classes with attributes/operations and relationships (association, aggregation, composition, generalisation).",
      "Class diagram: attributes/operations वाली classes और संबंध (association, aggregation, composition, generalisation)।",
      "Class diagram: attributes/operations wali classes aur relationships (association, aggregation, composition, generalisation).",
    ),
    TBL(
      [
        ["", "", ""],
        ["Class diagram", "Class diagram", "Class diagram"],
        ["Object diagram", "Object diagram", "Object diagram"],
      ],
      [
        [
          ["Shows", "दिखाता है", "Shows"],
          ["Types and possible relations", "प्रकार और संभावित संबंध", "Types aur possible relations"],
          ["Instances and current links", "Instances और वर्तमान links", "Instances aur current links"],
        ],
        [
          ["Names", "नाम", "Names"],
          ["Member, Book", "Member, Book", "Member, Book"],
          ["asha : Member, b12 : Book", "asha : Member, b12 : Book", "asha : Member, b12 : Book"],
        ],
        [
          ["Lifetime", "जीवनकाल", "Lifetime"],
          ["Valid for the system’s life", "सिस्टम के जीवन भर मान्य", "System ke life bhar valid"],
          ["Valid for one moment / scenario", "एक क्षण / परिदृश्य के लिए", "Ek pal / scenario ke liye"],
        ],
      ],
    ),
    EXAM(
      "Draw a class diagram for a stated domain (library, hospital, ATM) with correct multiplicity and at least one inheritance or composition. Contrast class vs object diagram. Visibility symbols and aggregation vs composition are 2-mark items.",
      "दिए domain (पुस्तकालय, अस्पताल, ATM) का class diagram सही multiplicity और कम से कम एक inheritance या composition सहित बनाएँ। Class बनाम object diagram। Visibility प्रतीक और aggregation बनाम composition 2 अंक की वस्तुएँ हैं।",
      "Domain ka class diagram multiplicity + inheritance/composition ke saath. Class vs object. Visibility symbols aur aggregation vs composition 2-marks.",
    ),
  ]),

  "se-uml-behavior": topic("se-uml-behavior", [
    P(
      "Behavioural UML diagrams show how the system changes over time: what happens inside a process, how objects talk, and how an object’s state reacts to events. The three families BCA syllabi group together are activity diagrams (control/data flow of a procedure or business process), interaction diagrams (sequence and communication/collaboration — messages among objects), and state chart / state machine diagrams (states of one object and transitions). Together they answer questions a class diagram cannot: “in what order?”, “who calls whom?”, “what happens if the book is already reserved?” Use them to specify use-case realisations, to find missing operations, and to design test scenarios.",
      "व्यवहारिक UML चित्र दिखाते हैं सिस्टम समय के साथ कैसे बदलता है: प्रक्रिया के भीतर क्या होता है, objects कैसे बात करते हैं, और किसी object की अवस्था घटनाओं पर कैसे प्रतिक्रिया देती है। BCA पाठ्यक्रम जो तीन परिवार साथ रखते हैं: activity diagrams (प्रक्रिया या व्यावसायिक प्रक्रिया का नियंत्रण/डेटा प्रवाह), interaction diagrams (sequence और communication/collaboration — objects के बीच संदेश), और state chart / state machine diagrams (एक object की अवस्थाएँ और transitions)। साथ में वे वे प्रश्न उत्तर देते हैं जो class diagram नहीं कर सकता: “किस क्रम में?”, “कौन किसे बुलाता है?”, “यदि पुस्तक पहले से reserved है तो?” इन्हें use-case realizations निर्दिष्ट करने, छूटे operations ढूँढ़ने, और टेस्ट परिदृश्य डिज़ाइन करने के लिए उपयोग करें।",
      "Behavioural UML dikhate hain system time ke saath kaise badalta hai. Teen families: activity (procedure/business flow), interaction (sequence aur communication — objects ke messages), state chart (ek object ki states aur transitions). Class diagram nahi bata sakta: kis order mein, kaun kisko call kare, book already reserved ho to kya. Use-case realisation, missing operations, test scenarios ke liye.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Activity diagram: rounded actions, filled start (initial) node, bullseye end (activity final), diamonds for decisions/merges, bars for forks/joins (parallelism), partitions (swimlanes) for who does the action, objects as optional data tokens. Use for business workflows (issue-book end-to-end) and for algorithms with parallelism.",
        "Activity diagram: rounded actions, भरा start (initial) नोड, बैलआई end (activity final), निर्णय/merge के लिए हीरे, parallelism के लिए fork/join पट्टियाँ, कौन करता है इसके लिए partitions (swimlanes), वैकल्पिक डेटा टोकन के रूप में objects। व्यावसायिक workflows (issue-book अंत-से-अंत) और parallelism वाले एल्गोरिद्म के लिए।",
        "Activity: rounded actions, start node, bullseye end, diamonds decision/merge, bars fork/join, swimlanes, optional objects. Business workflows aur parallel algorithms ke liye.",
      ],
      [
        "Sequence diagram: objects/lifelines as vertical dashed lines, time flows down, messages as arrows (sync solid with filled head, async stick head, return dashed). Activation bars show when an object is executing. Combined fragments (UML 2): alt, opt, loop, par. Ideal for a single use-case scenario (happy path + one alternative).",
        "Sequence diagram: objects/lifelines ऊर्ध्वाधर dashed रेखाएँ, समय नीचे बहता है, संदेश तीर (sync भरे सिरे वाला ठोस, async stick head, return dashed)। Activation पट्टियाँ दिखाती हैं object कब चल रहा है। Combined fragments (UML 2): alt, opt, loop, par। एक use-case परिदृश्य (happy path + एक विकल्प) के लिए आदर्श।",
        "Sequence: lifelines vertical, time neeche, messages arrows (sync, async, return). Activation bars. Fragments: alt, opt, loop, par. Ek use-case scenario ke liye ideal.",
      ],
      [
        "Communication / collaboration diagram: objects as boxes, numbered messages on links (1, 1.1, 1.2, 2). Same information as a sequence diagram, emphasising structure of collaborators rather than time. Older papers say “collaboration diagram”; UML 2 renamed it communication diagram.",
        "Communication / collaboration diagram: objects बॉक्स, links पर क्रमांकित संदेश (1, 1.1, 1.2, 2)। Sequence जितनी जानकारी, सहयोगियों की संरचना पर जोर, समय पर नहीं। पुराने प्रश्नपत्र “collaboration diagram” कहते हैं; UML 2 ने communication diagram नाम दिया।",
        "Communication/collaboration: objects boxes, numbered messages (1, 1.1, 2). Sequence jaisi info, structure par zor. Purane papers collaboration kehte hain; UML 2 communication.",
      ],
      [
        "State chart (Harel statecharts, adopted by UML): states as rounded rectangles, filled initial dot, transitions labelled event [guard] / action. Nested states, concurrent regions, entry/exit/do activities. Models the life of one object (a Loan: created → active → overdue → closed).",
        "State chart (Harel statecharts, UML ने अपनाया): rounded आयत अवस्थाएँ, भरा initial बिंदु, transitions पर event [guard] / action। Nested states, concurrent regions, entry/exit/do गतिविधियाँ। एक object का जीवन (Loan: created → active → overdue → closed)।",
        "State chart (Harel): rounded states, initial dot, event [guard] / action. Nested, concurrent regions, entry/exit/do. Ek object ki life (Loan: created → active → overdue → closed).",
      ],
      [
        "When to pick which: workflow / business process → activity; “this scenario of this use case” → sequence; “who is connected to whom in this collaboration” → communication; “life cycle of this domain object, including unusual events” → state machine. Many designs need two of these, not one.",
        "कौन-सा चुनें: workflow / व्यावसायिक प्रक्रिया → activity; “इस use case का यह परिदृश्य” → sequence; “इस collaboration में कौन किससे जुड़ा” → communication; “इस domain object का जीवन, असामान्य घटनाएँ सहित” → state machine। कई डिज़ाइनों को इनमें से दो चाहिए, एक नहीं।",
        "Kab kaunsa: workflow → activity; use-case scenario → sequence; kaun kisse juda → communication; object ka life cycle → state machine. Aksar do chahiye, ek nahi.",
      ],
      [
        "Link back to class diagrams: every message on a sequence diagram should be an operation on the receiver’s class; every event on a state chart should appear as an operation or signal; missing ones are analysis bugs found cheaply.",
        "Class diagrams से संबंध: sequence के प्रत्येक संदेश प्राप्तकर्ता class की operation होनी चाहिए; state chart की प्रत्येक घटना operation या signal; छूटी हुई विश्लेषण त्रुटियाँ सस्ती पकड़ में आती हैं।",
        "Class se link: sequence ka har message receiver class ki operation ho; state chart ka har event operation/signal; missing wale saste analysis bugs hain.",
      ],
    ]),
    EXAM(
      "For a given use case, draw an activity or sequence diagram. Explain sequence vs communication vs state chart: what each emphasises. Know UML 2 rename (collaboration → communication) and transition label event [guard] / action.",
      "दिए use case का activity या sequence diagram बनाएँ। Sequence बनाम communication बनाम state chart: प्रत्येक किस पर जोर देता है। UML 2 नाम परिवर्तन (collaboration → communication) और transition लेबल event [guard] / action जानें।",
      "Use case ka activity ya sequence draw karo. Sequence vs communication vs state chart. UML 2 rename collaboration→communication. Transition: event [guard] / action.",
    ),
  ]),

  "se-spm-need": topic("se-spm-need", [
    P(
      "Software Project Management (SPM) is the application of knowledge, skills, tools and techniques to software project activities to meet requirements. Software needs dedicated management because it is intangible, complexity grows non-linearly, requirements change, and the product is mostly unique — factory-style supervision does not work. Pressman frames management around four P’s: People, Product, Process and Project. Without SPM, even a technically skilled team delivers late, over budget, or a system nobody asked for. Industry data (Standish CHAOS reports, NASA studies) have repeatedly shown that poor planning, unclear scope and weak people management — not coding skill — dominate failure. BCA graduates who can only program are incomplete; they must also estimate, schedule, track and communicate.",
      "Software Project Management (SPM) सॉफ्टवेयर परियोजना गतिविधियों पर ज्ञान, कौशल, उपकरण और तकनीकों का अनुप्रयोग है ताकि आवश्यकताएँ पूरी हों। सॉफ्टवेयर को समर्पित प्रबंधन चाहिए क्योंकि वह अमूर्त है, जटिलता गैर-रैखिक बढ़ती है, आवश्यकताएँ बदलती हैं, और उत्पाद अधिकतर अद्वितीय है — फैक्टरी-शैली पर्यवेक्षण काम नहीं करता। Pressman प्रबंधन को चार P के इर्द-गिर्द रखते हैं: People, Product, Process और Project। SPM के बिना तकनीकी रूप से कुशल टीम भी देर से, बजट से अधिक, या ऐसा सिस्टम देती है जो किसी ने नहीं माँगा। उद्योग आँकड़े (Standish CHAOS, NASA) बार-बार दिखाते हैं कि असफलता पर खराब योजना, अस्पष्ट scope और कमजोर लोग-प्रबंधन हावी हैं, कोडिंग कौशल नहीं। केवल प्रोग्राम करने वाले BCA स्नातक अधूरे हैं; उन्हें अनुमान, अनुसूची, ट्रैक और संचार भी करना चाहिए।",
      "SPM software project activities par knowledge, skills, tools, techniques ka application hai. Software ko dedicated management chahiye kyunki intangible hai, complexity non-linear, requirements badalti hain, product unique hai — factory supervision kaam nahi karta. Pressman ke 4 P: People, Product, Process, Project. Bina SPM skilled team bhi late/over-budget/galat system deti hai. Failures planning, scope, people se hote hain, coding se nahi. BCA graduate ko estimate, schedule, track, communicate bhi aana chahiye.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Why software projects fail: unrealistic deadlines, changing requirements, poor estimates, inadequate risk management, weak communication, lack of user involvement, and the “mythical man-month” (Brooks: adding people to a late project makes it later).",
        "सॉफ्टवेयर परियोजनाएँ क्यों असफल: अवास्तविक समय-सीमा, बदलती आवश्यकताएँ, खराब अनुमान, अपर्याप्त जोखिम प्रबंधन, कमजोर संचार, उपयोगकर्ता भागीदारी का अभाव, तथा “mythical man-month” (Brooks: देर परियोजना में लोग जोड़ने से और देर)।",
        "Kyun fail: unrealistic deadlines, changing reqs, poor estimates, weak risk mgmt, kam communication, user involvement nahi, mythical man-month (Brooks: late project mein log jodne se aur late).",
      ],
      [
        "People (most critical P): recruiting, training, motivation, team structure (egoless team, chief-programmer team, democratic, matrix). Software is a people-intensive product; process cannot compensate for a toxic or unskilled team.",
        "People (सबसे निर्णायक P): भर्ती, प्रशिक्षण, प्रेरणा, टीम संरचना (egoless team, chief-programmer team, democratic, matrix)। सॉफ्टवेयर लोग-intensive उत्पाद है; विषैली या अकुशल टीम की भरपाई process नहीं कर सकता।",
        "People (sabse critical P): recruiting, training, motivation, team structure (egoless, chief-programmer, democratic, matrix). Process toxic/unskilled team ki bharti nahi kar sakta.",
      ],
      [
        "Product: scope, constraints, interfaces, reliability needs. You cannot plan what you have not bounded. Product engineering (requirements + architecture sketch) precedes detailed planning.",
        "Product: scope, बाधाएँ, interfaces, विश्वसनीयता जरूरतें। जो सीमाबद्ध नहीं, उसकी योजना नहीं। Product engineering (requirements + architecture रेखा) विस्तृत योजना से पहले आती है।",
        "Product: scope, constraints, interfaces, reliability. Jo bound nahi uski plan nahi. Product engineering (reqs + architecture sketch) detailed planning se pehle.",
      ],
      [
        "Process: choose a life-cycle model that matches product and people (Waterfall vs Spiral vs Agile). A mismatched process is itself a project risk.",
        "Process: उत्पाद और लोगों से मेल खाता जीवनचक्र मॉडल चुनें (Waterfall बनाम Spiral बनाम Agile)। बेमेल process स्वयं परियोजना जोखिम है।",
        "Process: product aur people se match karta life-cycle chuno. Mismatched process khud project risk hai.",
      ],
      [
        "Project: the actual job of planning, scheduling, tracking, controlling, risk management and delivery. W5HH principle (Boehm): Why, What, When, Who, Where, How, How much — a compact planning checklist.",
        "Project: योजना, अनुसूची, ट्रैकिंग, नियंत्रण, जोखिम प्रबंधन और delivery का वास्तविक कार्य। W5HH सिद्धांत (Boehm): Why, What, When, Who, Where, How, How much — संक्षिप्त योजना checklist।",
        "Project: planning, scheduling, tracking, control, risk, delivery. W5HH (Boehm): Why, What, When, Who, Where, How, How much.",
      ],
      [
        "SPM objectives: deliver on time, within budget, at agreed quality, with a still-standing team (sustainable pace). Optimising only one of time/cost/quality without stating the trade-off is how projects silently fail.",
        "SPM उद्देश्य: समय पर, बजट में, सहमत गुणवत्ता पर, खड़ी टीम के साथ (sustainable pace) delivery। समय/लागत/गुणवत्ता में से केवल एक का अनुकूलन बिना trade-off बताए चुपचाप असफल करता है।",
        "SPM objectives: on time, within budget, agreed quality, team still standing. Sirf ek (time/cost/quality) optimise karna bina trade-off ke silent failure hai.",
      ],
      [
        "Need in the Indian context: student projects, start-ups and government MIS all suffer from “we will code first and see”. SPM is the difference between a demo and a maintainable deployed system.",
        "भारतीय संदर्भ में आवश्यकता: छात्र परियोजनाएँ, start-ups और सरकारी MIS सभी “पहले कोड करेंगे देखेंगे” से पीड़ित। SPM डेमो और maintainable deployed सिस्टम का अंतर है।",
        "Indian context: student projects, start-ups, govt MIS “pehle code karenge” se suffer. SPM demo aur maintainable deployed system ka farq hai.",
      ],
    ]),
    NOTE(
      "Brooks’ Law: adding manpower to a late software project makes it later — because new people need ramp-up and communication paths grow as n(n−1)/2.",
      "Brooks का नियम: देर सॉफ्टवेयर परियोजना में जनशक्ति जोड़ने से वह और देर होती है — क्योंकि नए लोगों को ramp-up चाहिए और संचार पथ n(n−1)/2 से बढ़ते हैं।",
      "Brooks’ Law: late software project mein log jodne se aur late — naye logon ko ramp-up chahiye, communication paths n(n−1)/2 se badhte hain.",
    ),
    EXAM(
      "Explain the need for SPM and Pressman’s 4 P’s (People, Product, Process, Project). State Brooks’ Law and W5HH. A 5-mark question often asks “why is software project management harder than hardware project management?”",
      "SPM की आवश्यकता और Pressman के 4 P (People, Product, Process, Project) समझाएँ। Brooks का नियम और W5HH लिखें। 5 अंक का प्रश्न अक्सर पूछता है “सॉफ्टवेयर परियोजना प्रबंधन हार्डवेयर से कठिन क्यों?”",
      "SPM ki zaroorat aur 4 P’s. Brooks’ Law, W5HH. 5-mark: software PM hardware se kyun mushkil?",
    ),
  ]),

  "se-spm-types": topic("se-spm-types", [
    P(
      "Software project management is not a single activity; it is a bundle of specialised management types that together keep the 4 P’s under control. Indian BCA syllabi typically list: time (schedule) management, cost management, quality management, risk management, people / human-resource management, communication management, configuration (change) management, and scope management. Each type has its own plans, metrics and review points, but they interact — a scope change is also a cost, time, risk and configuration event. A project manager’s job is to keep these views consistent, not to run them as isolated departments.",
      "सॉफ्टवेयर परियोजना प्रबंधन एक अकेली गतिविधि नहीं; यह विशिष्ट प्रबंधन प्रकारों का समूह है जो मिलकर 4 P नियंत्रण में रखते हैं। भारतीय BCA पाठ्यक्रम प्रायः गिनाते हैं: समय (अनुसूची) प्रबंधन, लागत प्रबंधन, गुणवत्ता प्रबंधन, जोखिम प्रबंधन, लोग / मानव-संसाधन प्रबंधन, संचार प्रबंधन, configuration (परिवर्तन) प्रबंधन, और scope प्रबंधन। प्रत्येक के अपने प्लान, मेट्रिक्स और समीक्षा बिंदु हैं, पर वे अंतःक्रिया करते हैं — scope परिवर्तन लागत, समय, जोखिम और configuration घटना भी है। परियोजना प्रबंधक का काम इन दृश्यों को संगत रखना है, अलग विभागों की तरह चलाना नहीं।",
      "SPM ek activity nahi — specialised management types ka bundle hai jo 4 P control mein rakhta hai. BCA list: time/schedule, cost, quality, risk, people/HR, communication, configuration/change, scope. Har ek ke plans/metrics hain, lekin interact karte hain — scope change cost, time, risk, SCM event bhi hai. PM ka kaam views consistent rakhna hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Scope management: define what is in and out of the product (scope statement, WBS). Control creep via change control. Gold-plating is a scope failure even if the customer did not ask for the extra feature.",
        "Scope management: उत्पाद में क्या अंदर-बाहर है परिभाषित करें (scope statement, WBS)। Change control से creep रोकें। Gold-plating scope विफलता है भले ग्राहक ने अतिरिक्त feature न माँगी हो।",
        "Scope: kya in/out (scope statement, WBS). Creep ko change control se roko. Gold-plating bhi scope failure hai.",
      ],
      [
        "Time / schedule management: activity definition, sequencing, duration estimating, schedule development (Gantt, PERT/CPM), and schedule control. Treated in detail under se-scheduling.",
        "समय / अनुसूची प्रबंधन: गतिविधि परिभाषा, क्रम, अवधि अनुमान, अनुसूची विकास (Gantt, PERT/CPM), और अनुसूची नियंत्रण। विस्तार se-scheduling में।",
        "Time/schedule: activity definition, sequencing, duration, Gantt/PERT/CPM, control. Detail se-scheduling mein.",
      ],
      [
        "Cost management: resource costing, estimate (analogous, bottom-up, COCOMO), budget, and earned-value tracking (PV, EV, AC, SPI, CPI). Cost and schedule variances must be seen together.",
        "लागत प्रबंधन: संसाधन लागत, अनुमान (analogous, bottom-up, COCOMO), बजट, earned-value ट्रैकिंग (PV, EV, AC, SPI, CPI)। लागत व अनुसूची विचलन साथ देखने चाहिए।",
        "Cost: resource costing, estimate (analogous, bottom-up, COCOMO), budget, earned value (PV, EV, AC, SPI, CPI).",
      ],
      [
        "Quality management: SQA plan, reviews, testing strategy, metrics, and standards (ISO, CMM). Quality is planned in, not inspected in at the end (covered in Unit 4).",
        "गुणवत्ता प्रबंधन: SQA plan, reviews, testing strategy, metrics, मानक (ISO, CMM)। गुणवत्ता योजना में डाली जाती है, अंत में inspect नहीं (इकाई 4)।",
        "Quality: SQA plan, reviews, testing, metrics, ISO/CMM. Quality plan mein daali jaati hai, end mein inspect nahi.",
      ],
      [
        "Risk management: identification, analysis, prioritisation, mitigation, monitoring (se-risk). Every other management type surfaces risks.",
        "जोखिम प्रबंधन: पहचान, विश्लेषण, प्राथमिकता, mitigation, निगरानी (se-risk)। अन्य प्रत्येक प्रबंधन प्रकार जोखिम उजागर करता है।",
        "Risk: identification, analysis, priority, mitigation, monitoring. Baaki har type risks surface karta hai.",
      ],
      [
        "People / HR management: roles, staffing profile over time (Rayleigh curve of effort), training, appraisals, conflict resolution. Communication management: who needs what information when (status reports, dashboards, stand-ups).",
        "लोग / HR प्रबंधन: भूमिकाएँ, समय के साथ स्टाफिंग प्रोफ़ाइल (प्रयास का Rayleigh वक्र), प्रशिक्षण, appraisals, संघर्ष समाधान। संचार प्रबंधन: किसे कब क्या जानकारी चाहिए (status reports, dashboards, stand-ups)।",
        "People/HR: roles, staffing profile (Rayleigh curve), training, conflict. Communication: kise kab kya info (status reports, stand-ups).",
      ],
      [
        "Configuration / change management (SCM): identify configuration items, baseline, control changes, audit (se-scm). Integration management (PMBOK) is the umbrella that coordinates all the above into one project plan.",
        "Configuration / change management (SCM): configuration items पहचान, baseline, परिवर्तन नियंत्रण, ऑडिट (se-scm)। Integration management (PMBOK) छत्र है जो उपरोक्त सबको एक परियोजना योजना में समन्वय करता है।",
        "SCM: CIs, baseline, change control, audit. Integration management (PMBOK) sabko ek project plan mein coordinate karta hai.",
      ],
    ]),
    TBL(
      [
        ["Type", "प्रकार", "Type"],
        ["Typical artefact", "विशिष्ट artefact", "Typical artefact"],
        ["Failure symptom if ignored", "अनदेखी का लक्षण", "Agar ignore to"],
      ],
      [
        [
          ["Scope", "Scope", "Scope"],
          ["WBS, scope statement", "WBS, scope statement", "WBS, scope statement"],
          ["Creep, gold-plating", "Creep, gold-plating", "Creep, gold-plating"],
        ],
        [
          ["Time", "समय", "Time"],
          ["Gantt, PERT/CPM", "Gantt, PERT/CPM", "Gantt, PERT/CPM"],
          ["Missed delivery", "छूटी delivery", "Missed delivery"],
        ],
        [
          ["Cost", "लागत", "Cost"],
          ["Budget, EVM", "बजट, EVM", "Budget, EVM"],
          ["Overrun, cash crisis", "अतिव्यय, नकद संकट", "Overrun, cash crisis"],
        ],
        [
          ["Quality", "गुणवत्ता", "Quality"],
          ["SQA plan, metrics", "SQA plan, metrics", "SQA plan, metrics"],
          ["Rework, customer reject", "Rework, ग्राहक अस्वीकृति", "Rework, customer reject"],
        ],
        [
          ["Risk", "जोखिम", "Risk"],
          ["Risk register", "Risk register", "Risk register"],
          ["Surprise crisis", "आकस्मिक संकट", "Surprise crisis"],
        ],
        [
          ["SCM", "SCM", "SCM"],
          ["Baseline, CCB logs", "Baseline, CCB लॉग", "Baseline, CCB logs"],
          ["Wrong version shipped", "गलत संस्करण भेजा", "Wrong version shipped"],
        ],
      ],
    ),
    EXAM(
      "List types of management in SPM (scope, time, cost, quality, risk, people, communication, configuration) with one artefact each. Explain how a single change request touches several types. PMBOK knowledge areas may be accepted as equivalent answers.",
      "SPM में प्रबंधन प्रकार (scope, time, cost, quality, risk, people, communication, configuration) प्रत्येक के एक artefact सहित लिखें। एक change request कई प्रकारों को कैसे छूता है समझाएँ। PMBOK knowledge areas समकक्ष उत्तर माने जा सकते हैं।",
      "SPM ke types list karo ek artefact ke saath. Ek change request kai types ko kaise chhoota hai. PMBOK knowledge areas bhi accept ho sakte hain.",
    ),
  ]),

  "se-planning": topic("se-planning", [
    P(
      "Project planning is the set of activities that produce a Software Project Management Plan (SPMP): what will be delivered, by whom, when, at what cost, with what process, and under which risks. Planning starts after a feasibility go-decision and a first-cut scope. It is not a one-time document burst; plans are revised at each major milestone or sprint. A usable plan is detailed enough that a new team member can see their tasks, yet light enough to update. IEEE 1058 / ISO/IEC/IEEE 16326 give SPMP templates that Indian universities often expect as section headings.",
      "परियोजना योजना उन गतिविधियों का सेट है जो Software Project Management Plan (SPMP) बनाती हैं: क्या deliver होगा, किसके द्वारा, कब, कितनी लागत, किस प्रक्रिया से, किन जोखिमों में। योजना feasibility go-निर्णय और प्रथम-कट scope के बाद शुरू होती है। यह एक बार का दस्तावेज़ विस्फोट नहीं; प्रत्येक प्रमुख milestone या sprint पर योजनाएँ संशोधित होती हैं। उपयोगी योजना इतनी विस्तृत हो कि नया सदस्य अपने कार्य देखे, इतनी हल्की कि अद्यतन हो सके। IEEE 1058 / ISO/IEC/IEEE 16326 SPMP टेम्पलेट देते हैं जिनके खंड शीर्षक भारतीय विश्वविद्यालय अक्सर चाहते हैं।",
      "Project planning woh activities hain jo SPMP banati hain: kya deliver, kaun, kab, kitni cost, kaunsa process, kaunse risks. Feasibility go aur first-cut scope ke baad start. Ek-baar ka document nahi — har milestone/sprint par revise. Itni detailed ki naya member tasks dekhe, itni light ki update ho sake. IEEE 1058 SPMP template exam headings ke liye.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Scope and WBS: decompose the product and the work into a Work Breakdown Structure — a tree of work packages small enough to estimate and assign. WBS is product-oriented or activity-oriented; both must cover 100% of the agreed scope (the 100% rule).",
        "Scope और WBS: उत्पाद व कार्य को Work Breakdown Structure में विघटित करें — अनुमान व सौंपने लायक छोटे work packages का वृक्ष। WBS उत्पाद-उन्मुख या गतिविधि-उन्मुख; दोनों सहमत scope का 100% कवर करें (100% नियम)।",
        "Scope aur WBS: product/work ko tree of work packages mein todo, itna chhota ki estimate/assign ho. 100% rule: agreed scope poora cover.",
      ],
      [
        "Size and effort estimation (se-loc-fp, se-estimation, se-cocomo) feed the schedule and the budget. Never reverse-engineer an estimate from a politically chosen deadline without showing the squeezed scope or risk.",
        "आकार व प्रयास अनुमान (se-loc-fp, se-estimation, se-cocomo) अनुसूची और बजट को खिलाते हैं। राजनीतिक समय-सीमा से अनुमान उल्टा न निकालें बिना घटे scope या जोखिम दिखाए।",
        "Size/effort estimates schedule aur budget ko feed karte hain. Political deadline se ulta estimate mat nikalo bina squeezed scope/risk dikhaye.",
      ],
      [
        "Resource plan: people (roles, FTE over months), hardware, software licences, third-party components. The staffing profile usually ramps up after requirements and peaks in construction (Rayleigh-like).",
        "संसाधन योजना: लोग (भूमिकाएँ, महीनों में FTE), हार्डवेयर, सॉफ्टवेयर लाइसेंस, third-party components। स्टाफिंग प्रोफ़ाइल प्रायः requirements के बाद बढ़ती है और construction में शिखर (Rayleigh-जैसी)।",
        "Resource plan: log (roles, FTE), hardware, licences, third-party. Staffing requirements ke baad ramp, construction mein peak (Rayleigh-like).",
      ],
      [
        "Risk plan and SQA plan are chapters of the SPMP, not optional appendices. Process model choice (Waterfall vs Agile) changes the shape of the schedule chapter.",
        "Risk plan और SQA plan SPMP के अध्याय हैं, वैकल्पिक परिशिष्ट नहीं। Process model चुनाव (Waterfall बनाम Agile) अनुसूची अध्याय का आकार बदलता है।",
        "Risk plan aur SQA plan SPMP ke chapters hain, optional nahi. Process model (Waterfall vs Agile) schedule chapter ki shape badalta hai.",
      ],
      [
        "Typical SPMP contents (IEEE 1058 flavour): introduction, project organisation, managerial process (objectives, assumptions, constraints, risk, monitoring, staffing), technical process (methods, tools, documentation), work packages, schedule, budget.",
        "विशिष्ट SPMP विषय (IEEE 1058 स्वाद): परिचय, परियोजना संगठन, प्रबंधकीय प्रक्रिया (उद्देश्य, धारणाएँ, बाधाएँ, जोखिम, निगरानी, स्टाफिंग), तकनीकी प्रक्रिया (विधियाँ, उपकरण, documentation), work packages, अनुसूची, बजट।",
        "SPMP contents: introduction, organisation, managerial process (objectives, assumptions, constraints, risk, monitoring, staffing), technical process (methods, tools, docs), work packages, schedule, budget.",
      ],
      [
        "Monitoring against the plan: milestones, earned value, burndown (Agile), and regular status reviews. A plan that is not compared with actuals is a wish list.",
        "योजना के विरुद्ध निगरानी: milestones, earned value, burndown (Agile), नियमित status reviews। जो योजना वास्तविक से तुलना न हो, वह इच्छा-सूची है।",
        "Monitoring: milestones, earned value, burndown (Agile), status reviews. Jo plan actuals se compare na ho woh wish list hai.",
      ],
      [
        "Planning deliverable vs planning activity: the SPMP is the deliverable; the activity includes estimation workshops, WBS building, negotiation with the customer, and getting commitments from team leads. Commitments, not wishes, make a plan real.",
        "योजना deliverable बनाम गतिविधि: SPMP deliverable है; गतिविधि में अनुमान कार्यशालाएँ, WBS निर्माण, ग्राहक से negotiation, टीम लीड से प्रतिबद्धताएँ शामिल हैं। इच्छाएँ नहीं, प्रतिबद्धताएँ योजना को वास्तविक बनाती हैं।",
        "SPMP deliverable hai; activity mein estimation workshops, WBS, customer negotiation, team-lead commitments. Commitments plan ko real banate hain, wishes nahi.",
      ],
    ]),
    OL([
      [
        "Confirm scope, constraints and success criteria.",
        "Scope, बाधाएँ और सफलता मानदंड पुष्ट करें।",
        "Scope, constraints, success criteria confirm karo.",
      ],
      [
        "Build the WBS; identify work packages and deliverables.",
        "WBS बनाएँ; work packages और deliverables पहचानें।",
        "WBS banao; work packages aur deliverables identify karo.",
      ],
      [
        "Estimate size, effort, cost; choose process model.",
        "आकार, प्रयास, लागत अनुमान; process model चुनें।",
        "Size, effort, cost estimate; process model chuno.",
      ],
      [
        "Schedule activities, assign resources, plan risks and SQA.",
        "गतिविधियाँ अनुसूचित करें, संसाधन सौंपें, जोखिम व SQA योजना।",
        "Activities schedule, resources assign, risks aur SQA plan.",
      ],
      [
        "Write SPMP, review, baseline; revise at milestones.",
        "SPMP लिखें, समीक्षा, baseline; milestones पर संशोधन।",
        "SPMP likho, review, baseline; milestones par revise.",
      ],
    ]),
    EXAM(
      "What is an SPMP? List typical contents (IEEE 1058). Explain WBS and the 100% rule. Describe planning steps from scope to baseline. Mention that plans are living documents.",
      "SPMP क्या है? विशिष्ट विषय-वस्तु (IEEE 1058) लिखें। WBS और 100% नियम समझाएँ। Scope से baseline तक योजना चरण। बताएँ कि योजनाएँ जीवित दस्तावेज़ हैं।",
      "SPMP kya hai? Contents (IEEE 1058). WBS aur 100% rule. Planning steps scope se baseline tak. Plans living documents hain.",
    ),
  ]),

  "se-scheduling": topic("se-scheduling", [
    P(
      "Software project scheduling converts the WBS and effort estimates into a calendar: which activity happens when, which can overlap, and which path determines the delivery date. The basic building blocks are activities (or tasks), durations, precedence (finish-to-start is the usual dependency), resources, and milestones (zero-duration events such as “SRS signed”). Two classical network techniques — CPM (Critical Path Method) and PERT (Program Evaluation and Review Technique) — plus Gantt charts are the BCA toolkit. Scheduling is also where Brooks’ Law, Parkinson’s Law (“work expands to fill the time available”) and the student syndrome (start at the last moment) must be managed.",
      "सॉफ्टवेयर परियोजना अनुसूची WBS और प्रयास अनुमानों को कैलेंडर में बदलती है: कौन-सी गतिविधि कब, कौन ओवरलैप कर सकती है, और कौन-सा पथ delivery तिथि तय करता है। मूल खंड: गतिविधियाँ (या कार्य), अवधि, precedence (finish-to-start सामान्य dependency), संसाधन, और milestones (शून्य-अवधि घटनाएँ जैसे “SRS हस्ताक्षरित”)। दो क्लासिकल नेटवर्क तकनीकें — CPM (Critical Path Method) और PERT (Program Evaluation and Review Technique) — तथा Gantt charts BCA उपकरण हैं। अनुसूची वही जगह है जहाँ Brooks का नियम, Parkinson का नियम (“कार्य उपलब्ध समय भरने तक फैलता है”) और student syndrome (आखिरी क्षण में शुरू) संभालने पड़ते हैं।",
      "Scheduling WBS aur effort estimates ko calendar banati hai: kaunsi activity kab, kaun overlap, kaunsa path delivery date. Building blocks: activities, durations, precedence (FS usual), resources, milestones (zero-duration, jaise SRS signed). CPM, PERT, Gantt — BCA toolkit. Yahan Brooks’ Law, Parkinson’s Law, student syndrome sambhalne padte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Gantt / bar chart: activities as horizontal bars against a calendar. Easy to draw and to show progress (shaded portion). Weak at showing complex dependencies; that is why we also draw a network.",
        "Gantt / bar chart: कैलेंडर के विरुद्ध क्षैतिज पट्टियाँ। बनाना और प्रगति दिखाना आसान (छायांकित भाग)। जटिल dependencies दिखाने में कमजोर; इसीलिए नेटवर्क भी बनाते हैं।",
        "Gantt: activities horizontal bars vs calendar. Draw aur progress dikhana asaan. Complex dependencies par kamzor — isliye network bhi.",
      ],
      [
        "CPM: a deterministic network. Forward pass computes Earliest Start/Finish (ES, EF); backward pass Latest Start/Finish (LS, LF). Slack (float) = LS − ES. The critical path is the longest path, slack = 0; it determines project duration. Any delay on it delays the project.",
        "CPM: निर्धारणात्मक नेटवर्क। Forward pass Earliest Start/Finish (ES, EF); backward pass Latest Start/Finish (LS, LF)। Slack (float) = LS − ES। Critical path सबसे लंबा पथ, slack = 0; यही परियोजना अवधि तय करता है। इस पर कोई देरी परियोजना देरी है।",
        "CPM: deterministic. Forward pass ES/EF; backward LS/LF. Slack = LS − ES. Critical path sabse lamba, slack 0; yahi duration. Is par delay = project delay.",
      ],
      [
        "PERT: like CPM but duration is probabilistic. Three times per activity — optimistic (O), most likely (M), pessimistic (P). Expected te = (O + 4M + P) / 6; variance = ((P − O) / 6)^2. Project duration is the sum of te on the critical path; we can talk about probability of meeting a deadline.",
        "PERT: CPM जैसा पर अवधि संभाव्य। प्रति गतिविधि तीन समय — optimistic (O), most likely (M), pessimistic (P)। Expected te = (O + 4M + P) / 6; variance = ((P − O) / 6)^2। परियोजना अवधि critical path पर te का योग; समय-सीमा मिलने की प्रायिकता कही जा सकती है।",
        "PERT: CPM jaisa lekin probabilistic. O, M, P. te = (O+4M+P)/6; variance ((P−O)/6)^2. Project duration critical path ke te ka sum; deadline milne ki probability.",
      ],
      [
        "Task network / activity-on-node: boxes are activities, arrows dependencies. Dummy activities (activity-on-arrow style) preserve logic without work. Milestones as diamonds or zero-length nodes.",
        "Task network / activity-on-node: बॉक्स गतिविधियाँ, तीर dependencies। Dummy activities (activity-on-arrow शैली) बिना काम के तर्क बचाती हैं। Milestones हीरे या शून्य-लंबाई नोड।",
        "Task network: boxes = activities, arrows = dependencies. Dummy activities logic ke liye. Milestones diamonds ya zero-length.",
      ],
      [
        "Resource levelling: if two critical tasks need the same person, duration grows. Scheduling is not only network math; it is constrained by who is available. Overtime and extra hiring have Brooks-Law limits.",
        "Resource levelling: यदि दो critical कार्यों को एक ही व्यक्ति चाहिए, अवधि बढ़ती है। अनुसूची केवल नेटवर्क गणित नहीं; कौन उपलब्ध है इससे बाधित। ओवरटाइम और अतिरिक्त भर्ती पर Brooks-Law सीमाएँ हैं।",
        "Resource levelling: do critical tasks ko same person chahiye to duration badhti hai. Scheduling sirf network math nahi. Overtime/hiring par Brooks-Law limits.",
      ],
      [
        "Tracking: percent-complete on Gantt, earned value (SPI = EV/PV), Agile burndown/burnup, and “red-amber-green” milestone reviews. Late discovery of a slipped critical path is a management failure.",
        "ट्रैकिंग: Gantt पर percent-complete, earned value (SPI = EV/PV), Agile burndown/burnup, और “red-amber-green” milestone reviews। फिसली critical path की देर से खोज प्रबंधन विफलता है।",
        "Tracking: Gantt par percent-complete, SPI=EV/PV, burndown, RAG milestone reviews. Slipped critical path late milna management failure hai.",
      ],
      [
        "Software-specific issues: tasks are not as independent as in civil engineering; integration and debugging durations are chronically under-estimated; 40% of effort often sits after “coding complete”. Put explicit integration and test bars on the Gantt.",
        "सॉफ्टवेयर-विशिष्ट मुद्दे: कार्य सिविल इंजीनियरिंग जितने स्वतंत्र नहीं; integration और debugging अवधि हमेशा कम आँकी जाती है; “coding complete” के बाद अक्सर 40% प्रयास रहता है। Gantt पर स्पष्ट integration और test पट्टियाँ रखें।",
        "Software-specific: tasks civil jitna independent nahi; integration/debug underestimate; coding complete ke baad aksar 40% effort. Gantt par explicit integration/test bars rakho.",
      ],
    ]),
    C(
      "text",
      "PERT expected time\n  te = (O + 4M + P) / 6\n  sigma = (P - O) / 6\nCPM slack\n  Slack = LS - ES = LF - EF\nCritical path: all activities with slack = 0 (longest path).",
      [
        "Formulae that must appear in a 5–8 mark scheduling answer.",
        "5–8 अंक के अनुसूची उत्तर में आने वाले सूत्र।",
        "5–8 mark scheduling answer mein yeh formulae.",
      ],
    ),
    EXAM(
      "Draw a Gantt chart and a CPM network for a small WBS. Compute ES, EF, LS, LF, slack, critical path. Write PERT te formula and when to use PERT vs CPM. Mention Brooks’ Law as a scheduling constraint.",
      "छोटे WBS का Gantt और CPM नेटवर्क बनाएँ। ES, EF, LS, LF, slack, critical path गणना करें। PERT te सूत्र और PERT बनाम CPM कब। अनुसूची बाधा के रूप में Brooks का नियम।",
      "Chhote WBS ka Gantt aur CPM. ES/EF/LS/LF/slack/critical path. PERT te formula, PERT vs CPM. Brooks’ Law scheduling constraint.",
    ),
  ]),

  "se-loc-fp": topic("se-loc-fp", [
    P(
      "Project size is the independent variable from which effort, cost and schedule are derived. Two classical size measures dominate BCA syllabi: Lines of Code (LOC / KLOC) and Function Points (FP). LOC counts source statements (typically non-comment, non-blank) in the implementation language. Function Points, introduced by Allan Albrecht at IBM (1979), measure functionality delivered to the user — independent of language — by weighting five components: External Inputs (EI), External Outputs (EO), External Inquiries (EQ), Internal Logical Files (ILF) and External Interface Files (EIF). LOC is easy after the code exists and terrible for early estimation in mixed languages; FP is harder to count but comparable across projects and available from the SRS.",
      "परियोजना आकार वह स्वतंत्र चर है जिससे प्रयास, लागत और अनुसूची निकाले जाते हैं। दो क्लासिकल आकार माप BCA पाठ्यक्रम पर हावी: Lines of Code (LOC / KLOC) और Function Points (FP)। LOC कार्यान्वयन भाषा में स्रोत कथन गिनता है (प्रायः non-comment, non-blank)। Function Points, Allan Albrecht ने IBM (1979) पर दिए, उपयोगकर्ता को दी गई functionality मापते हैं — भाषा से स्वतंत्र — पाँच घटकों को भार देकर: External Inputs (EI), External Outputs (EO), External Inquiries (EQ), Internal Logical Files (ILF) और External Interface Files (EIF)। कोड मौजूद होने पर LOC आसान और मिश्रित भाषाओं में प्रारंभिक अनुमान के लिए खराब; FP गिनना कठिन पर परियोजनाओं में तुलनीय और SRS से उपलब्ध।",
      "Project size se effort, cost, schedule nikalte hain. Do measures: LOC/KLOC aur Function Points. LOC source statements (non-comment, non-blank). FP Albrecht (IBM 1979) — user ko mili functionality, language-independent. Paanch components: EI, EO, EQ, ILF, EIF. LOC code ke baad asaan, early mixed-language par bura; FP mushkil lekin comparable aur SRS se mil jaata hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "LOC variants: physical LOC vs logical SLOC; with or without comments/blanks; generated code counted or not. Always state the convention. Productivity is often quoted as LOC/person-month — a dangerous metric if used to compare languages or to pressure people (Goodhart’s law).",
        "LOC रूप: physical LOC बनाम logical SLOC; comments/blanks सहित या रहित; generated कोड गिना या नहीं। सम्मेलन हमेशा बताएँ। उत्पादकता प्रायः LOC/person-month — भाषा तुलना या लोगों पर दबाव के लिए खतरनाक मेट्रिक (Goodhart का नियम)।",
        "LOC variants: physical vs logical SLOC; comments yes/no; generated code. Convention hamesha batao. LOC/person-month dangerous metric hai compare/pressure ke liye.",
      ],
      [
        "FP counting outline: for each of EI, EO, EQ, ILF, EIF classify complexity low/average/high using DET/RET (or FTR) tables, apply standard weights, sum to Unadjusted FP (UFP).",
        "FP गिनती रूपरेखा: EI, EO, EQ, ILF, EIF प्रत्येक को DET/RET (या FTR) तालिकाओं से low/average/high जटिलता दें, मानक भार लगाएँ, योग Unadjusted FP (UFP)।",
        "FP counting: EI, EO, EQ, ILF, EIF ko low/avg/high classify (DET/RET tables), weights lagaao, sum = UFP.",
      ],
      [
        "Value Adjustment Factor (VAF): 14 General System Characteristics (GSC) such as data communication, distributed processing, performance, reuse, each rated 0–5. VAF = 0.65 + 0.01 × ΣFi. AFP = UFP × VAF. (IFPUG method; COSMIC is a later ISO FP variant — mention if you want bonus.)",
        "Value Adjustment Factor (VAF): 14 General System Characteristics (GSC) जैसे data communication, distributed processing, performance, reuse, प्रत्येक 0–5। VAF = 0.65 + 0.01 × ΣFi। AFP = UFP × VAF। (IFPUG विधि; COSMIC बाद का ISO FP रूप — बोनस के लिए उल्लेख।)",
        "VAF: 14 GSC (communication, distributed, performance, reuse…) 0–5. VAF = 0.65 + 0.01×ΣFi. AFP = UFP × VAF. IFPUG; COSMIC later ISO variant.",
      ],
      [
        "Language gearing: FP can be converted to LOC by language-dependent averages (e.g. ~50–80 LOC/FP for C, ~30–50 for Java, ~15–25 for a 4GL — figures vary by source; do not treat them as laws). This is how an FP estimate feeds a LOC-based COCOMO.",
        "भाषा gearing: FP को भाषा-निर्भर औसत से LOC में बदला जा सकता है (जैसे C में ~50–80 LOC/FP, Java ~30–50, 4GL ~15–25 — स्रोत से भिन्न; नियम मत समझें)। इसी से FP अनुमान LOC-आधारित COCOMO को खिलाता है।",
        "Language gearing: FP se LOC (C ~50–80, Java ~30–50, 4GL ~15–25 LOC/FP — vary). Isi se FP estimate LOC-based COCOMO ko feed karta hai.",
      ],
      [
        "Pros of LOC: simple, maps to compiler output, lots of historical data. Cons: language-dependent, penalises high-level languages, unavailable early, encourages verbose code, poor correlation with value delivered.",
        "LOC के गुण: सरल, compiler आउटपुट से मैप, बहुत ऐतिहासिक डेटा। दोष: भाषा-निर्भर, उच्च-स्तरीय भाषाओं को दंड, जल्दी अनुपलब्ध, verbose कोड प्रोत्साहित, delivered value से कमजोर सहसंबंध।",
        "LOC pros: simple, compiler se map, historical data. Cons: language-dependent, HLL ko dand, early unavailable, verbose code, value se weak correlation.",
      ],
      [
        "Pros of FP: language-independent, available from SRS, better for early contracts, comparable across teams. Cons: counting rules take training, subjectivity in classifying ILF/EI, weak for embedded/real-time where “files and inquiries” fit poorly, 14 GSCs criticised as dated.",
        "FP के गुण: भाषा-स्वतंत्र, SRS से उपलब्ध, प्रारंभिक अनुबंधों के लिए बेहतर, टीमों में तुलनीय। दोष: गिनती नियमों का प्रशिक्षण, ILF/EI वर्गीकरण में व्यक्तिपरकता, embedded/real-time पर कमजोर जहाँ “files and inquiries” ठीक नहीं बैठते, 14 GSC पुराने कहे जाते हैं।",
        "FP pros: language-independent, SRS se, early contracts, comparable. Cons: training chahiye, subjectivity, embedded/real-time par weak, 14 GSC dated.",
      ],
      [
        "Other size measures (short note): Feature Points (for algorithms), Use-Case Points, Story Points (Agile, not a size of the product but of effort relative to a team), object points / application points (early COCOMO II).",
        "अन्य आकार माप (संक्षिप्त): Feature Points (एल्गोरिद्म के लिए), Use-Case Points, Story Points (Agile, उत्पाद आकार नहीं टीम-सापेक्ष प्रयास), object points / application points (प्रारंभिक COCOMO II)।",
        "Aur measures: Feature Points, Use-Case Points, Story Points (Agile — relative effort), object/application points (COCOMO II).",
      ],
    ]),
    TBL(
      [
        ["FP component", "FP घटक", "FP component"],
        ["Meaning", "अर्थ", "Arth"],
        ["Example (library)", "उदाहरण (पुस्तकालय)", "Example (library)"],
      ],
      [
        [
          ["EI", "EI", "EI"],
          ["User data entering the app", "ऐप में प्रवेश करता उपयोगकर्ता डेटा", "App mein entering user data"],
          ["Issue-book form", "Issue-book फॉर्म", "Issue-book form"],
        ],
        [
          ["EO", "EO", "EO"],
          ["Processed output to user", "उपयोगकर्ता को संसाधित आउटपुट", "User ko processed output"],
          ["Overdue-fine report", "Overdue-fine रिपोर्ट", "Overdue-fine report"],
        ],
        [
          ["EQ", "EQ", "EQ"],
          ["Input+output retrieval", "इनपुट+आउटपुट retrieval", "Input+output retrieval"],
          ["Search catalogue", "Catalogue खोज", "Search catalogue"],
        ],
        [
          ["ILF", "ILF", "ILF"],
          ["Logical file maintained inside", "अंदर अनुरक्षित logical file", "Andar maintained logical file"],
          ["Member master, Book master", "Member master, Book master", "Member master, Book master"],
        ],
        [
          ["EIF", "EIF", "EIF"],
          ["File maintained by another system, used here", "दूसरे सिस्टम की file, यहाँ प्रयुक्त", "Doosre system ki file, yahan use"],
          ["University student DB (read-only)", "विश्वविद्यालय छात्र DB (केवल पढ़ना)", "University student DB (read-only)"],
        ],
      ],
    ),
    EXAM(
      "Define LOC and FP. List five FP components with examples. Write VAF = 0.65 + 0.01 ΣFi and AFP = UFP × VAF. Compare LOC vs FP (language dependence, when available, distortions). Albrecht/IFPUG names score extra.",
      "LOC और FP परिभाषित करें। पाँच FP घटक उदाहरण सहित। VAF = 0.65 + 0.01 ΣFi और AFP = UFP × VAF लिखें। LOC बनाम FP तुलना। Albrecht/IFPUG नाम अतिरिक्त अंक दिलाते हैं।",
      "LOC aur FP define. Paanch FP components examples. VAF formula, AFP = UFP×VAF. LOC vs FP. Albrecht/IFPUG extra marks.",
    ),
  ]),

  "se-estimation": topic("se-estimation", [
    P(
      "Effort estimation predicts person-months (and from them cost and schedule) before the product exists. Techniques are grouped in most Indian syllabi as empirical (experience-based), heuristic / algorithmic (formulas fitted on historical data, e.g. COCOMO) and analytical (theoretically derived, e.g. Halstead). No technique is magic: an estimate is a probability distribution, not a single number, and it must state assumptions, scope and uncertainty. Good practice uses at least two methods and reconciles them (triangulation). Under-estimation is the default cultural disease; padding without a risk register is the other.",
      "प्रयास अनुमान उत्पाद के अस्तित्व से पहले person-months (और उनसे लागत व अनुसूची) का पूर्वानुमान है। अधिकांश भारतीय पाठ्यक्रम तकनीकों को empirical (अनुभव-आधारित), heuristic / algorithmic (ऐतिहासिक डेटा पर फिट सूत्र, जैसे COCOMO) और analytical (सैद्धांतिक रूप से व्युत्पन्न, जैसे Halstead) में बाँटते हैं। कोई तकनीक जादू नहीं: अनुमान प्रायिकता वितरण है, एक संख्या नहीं, और उसे धारणाएँ, scope व अनिश्चितता बतानी चाहिए। अच्छी प्रथा कम से कम दो विधियाँ उपयोग कर उन्हें मिलाती है (triangulation)। कम आँकना डिफ़ॉल्ट सांस्कृतिक रोग है; बिना risk register के padding दूसरा।",
      "Effort estimation product se pehle person-months (phir cost, schedule) predict karta hai. Techniques: empirical (experience), heuristic/algorithmic (historical data par formula, COCOMO), analytical (theory, Halstead). Magic nahi: estimate probability distribution hai, assumptions/scope/uncertainty ke saath. Do methods use karke reconcile karo. Under-estimation default bimari hai; bina risk register padding doosri.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Empirical — expert judgement: a knowledgeable person quotes effort. Fast, cheap, biased, not repeatable. Better when structured as Wideband Delphi: several experts estimate anonymously, a moderator shows spread, they discuss, and iterate until the band is tight.",
        "Empirical — expert judgement: जानकार व्यक्ति प्रयास बताता है। तेज, सस्ता, पक्षपाती, अप्राप्य। बेहतर जब Wideband Delphi: कई विशेषज्ञ गुमनाम अनुमान, moderator फैलाव दिखाता है, चर्चा, बैंड सिकुड़ने तक iterate।",
        "Empirical — expert judgement: jaankar effort bataata hai. Tez, sasta, biased. Better: Wideband Delphi — kai experts anonymous, moderator spread dikhata, discuss, iterate.",
      ],
      [
        "Empirical — analogy / case-based: find a completed similar project, scale by size ratio and known differences (domain, team, NFR). Needs a historical database. Parkinson’s and price-to-win (quote what wins the bid, not what it costs) are political distortions, not techniques.",
        "Empirical — analogy / case-based: पूरा समान प्रोजेक्ट खोजें, आकार अनुपात व ज्ञात अंतरों (domain, टीम, NFR) से स्केल करें। ऐतिहासिक डेटाबेस चाहिए। Parkinson और price-to-win (बोली जीतने वाला भाव, लागत नहीं) राजनीतिक विकृतियाँ हैं, तकनीक नहीं।",
        "Analogy: similar completed project dhoondo, size ratio se scale. Historical DB chahiye. Parkinson aur price-to-win techniques nahi, political distortions hain.",
      ],
      [
        "Heuristic / algorithmic: Effort = a × (Size)^b × EAF. Size is KLOC or FP; a, b come from the model class (organic/semidetached/embedded in COCOMO); EAF is an effort-adjustment factor from cost drivers. Putnam’s SLIM and COCOMO II are other members of this family.",
        "Heuristic / algorithmic: Effort = a × (Size)^b × EAF। Size KLOC या FP; a, b मॉडल वर्ग से (COCOMO में organic/semidetached/embedded); EAF cost drivers से effort-adjustment। Putnam का SLIM और COCOMO II इसी परिवार में हैं।",
        "Heuristic/algorithmic: Effort = a × (Size)^b × EAF. Size KLOC ya FP; a,b model class se; EAF cost drivers se. Putnam SLIM, COCOMO II isi family.",
      ],
      [
        "Analytical — Halstead’s software science: from operators and operands, derive volume V, difficulty D, effort E = D × V / 18 (elementary mental discriminations). Theoretically neat, practically sensitive to how tokens are counted; used more in exam derivations than in industry bids.",
        "Analytical — Halstead की software science: operators व operands से volume V, difficulty D, effort E = D × V / 18। सैद्धांतिक रूप से सुंदर, व्यावहारिक रूप से टोकन गिनती के प्रति संवेदनशील; उद्योग बोली से अधिक परीक्षा व्युत्पत्तियों में।",
        "Analytical — Halstead: operators/operands se V, D, E = D×V/18. Theory mein sundar, practice mein token counting par sensitive; exam derivations mein zyada.",
      ],
      [
        "Bottom-up vs top-down: bottom-up estimates each work package then sums (accurate if WBS is complete, labour-intensive, can miss integration). Top-down estimates the whole then apportions (fast, good for feasibility, hides detail errors). Combine them.",
        "Bottom-up बनाम top-down: bottom-up प्रत्येक work package अनुमान कर जोड़ता है (WBS पूर्ण हो तो सटीक, श्रम-intensive, integration छूट सकती है)। Top-down पूरा अनुमान कर बाँटता है (तेज, feasibility के लिए अच्छा, विस्तार त्रुटियाँ छुपाता है)। दोनों मिलाएँ।",
        "Bottom-up: har work package phir sum. Top-down: poora estimate phir baanto. Combine karo.",
      ],
      [
        "Uncertainty: cone of uncertainty (Boehm) — early estimates may be 0.25× to 4×; they tighten as requirements and architecture freeze. Present a range (best / likely / worst) or a three-point PERT on effort, not a fake-precise 1234 person-hours.",
        "अनिश्चितता: cone of uncertainty (Boehm) — प्रारंभिक अनुमान 0.25× से 4× हो सकते हैं; requirements व architecture फ्रीज होने पर सिकुड़ते हैं। रेंज (best / likely / worst) या प्रयास पर three-point PERT दें, नकली-सटीक 1234 person-hours नहीं।",
        "Uncertainty: cone of uncertainty — early 0.25× se 4×; freeze par tight. Range ya three-point do, fake-precise 1234 hours nahi.",
      ],
      [
        "From effort to schedule: Tdev ≈ c × (Effort)^d (COCOMO time equation). Compressing schedule below about 75% of nominal explodes effort (you cannot make a baby in one month with nine women — Brooks).",
        "प्रयास से अनुसूची: Tdev ≈ c × (Effort)^d (COCOMO समय समीकरण)। नाममात्र के लगभग 75% से नीचे अनुसूची दबाने पर प्रयास फूटता है (नौ महिलाओं से एक महीने में बच्चा नहीं — Brooks)।",
        "Effort se schedule: Tdev ≈ c × (Effort)^d. Nominal ke ~75% se neeche squeeze karo to effort phootta hai (Brooks: 9 women, 1 month, 1 baby nahi).",
      ],
    ]),
    TBL(
      [
        ["Family", "परिवार", "Family"],
        ["Examples", "उदाहरण", "Examples"],
        ["Basis", "आधार", "Basis"],
      ],
      [
        [
          ["Empirical", "Empirical", "Empirical"],
          ["Expert, Delphi, analogy", "Expert, Delphi, analogy", "Expert, Delphi, analogy"],
          ["People’s experience / past projects", "लोगों का अनुभव / पिछली परियोजनाएँ", "Experience / past projects"],
        ],
        [
          ["Heuristic / algorithmic", "Heuristic / algorithmic", "Heuristic / algorithmic"],
          ["COCOMO, SLIM, FP-based", "COCOMO, SLIM, FP-based", "COCOMO, SLIM, FP-based"],
          ["Fitted formula on historical data", "ऐतिहासिक डेटा पर फिट सूत्र", "Historical data par fitted formula"],
        ],
        [
          ["Analytical", "Analytical", "Analytical"],
          ["Halstead, (sometimes) function of complexity metrics", "Halstead, (कभी) जटिलता मेट्रिक्स का फलन", "Halstead, complexity metrics"],
          ["Theory of program tokens / structure", "प्रोग्राम टोकन / संरचना का सिद्धांत", "Program tokens / structure ki theory"],
        ],
      ],
    ),
    EXAM(
      "Classify estimation as empirical, heuristic/algorithmic, analytical with examples (Delphi, COCOMO, Halstead). Write Effort = a Size^b × EAF. Explain Wideband Delphi, analogy, bottom-up vs top-down, and the cone of uncertainty.",
      "अनुमान को empirical, heuristic/algorithmic, analytical में उदाहरण सहित वर्गीकृत करें (Delphi, COCOMO, Halstead)। Effort = a Size^b × EAF लिखें। Wideband Delphi, analogy, bottom-up बनाम top-down, cone of uncertainty समझाएँ।",
      "Empirical, heuristic, analytical classify (Delphi, COCOMO, Halstead). Effort = a Size^b × EAF. Wideband Delphi, analogy, bottom-up vs top-down, cone of uncertainty.",
    ),
  ]),

  "se-cocomo": topic("se-cocomo", [
    P(
      "COCOMO (COnstructive COst MOdel) is Barry Boehm’s algorithmic estimation model, first published in 1981 (often called COCOMO 81) and later succeeded by COCOMO II (1997–2000). It estimates effort and development time from size in KLOC (or, in COCOMO II, from function points / object points). COCOMO 81 has three levels of detail — Basic, Intermediate, Detailed — and three modes of projects — Organic, Semidetached, Embedded — which change the exponents in the equations. For BCA you must reproduce the Basic equations, explain the three modes, list Intermediate cost drivers, and state what Detailed adds. COCOMO is a heuristic model: the constants were fitted on Boehm’s historical TRW projects, so they must be calibrated to your organisation.",
      "COCOMO (COnstructive COst MOdel) Barry Boehm का algorithmic अनुमान मॉडल है, 1981 में प्रकाशित (COCOMO 81) और बाद में COCOMO II (1997–2000) से विस्थापित। यह KLOC में आकार (या COCOMO II में function points / object points) से प्रयास व विकास समय अनुमानित करता है। COCOMO 81 की तीन विस्तार स्तर — Basic, Intermediate, Detailed — और तीन परियोजना मोड — Organic, Semidetached, Embedded — समीकरणों के exponents बदलते हैं। BCA में Basic समीकरण, तीन मोड, Intermediate cost drivers, और Detailed क्या जोड़ता है लिखना चाहिए। COCOMO heuristic मॉडल है: स्थिरांक Boehm की ऐतिहासिक TRW परियोजनाओं पर फिट हुए, अतः अपने संगठन पर calibrate करें।",
      "COCOMO Boehm ka algorithmic estimation model hai, 1981 (COCOMO 81), baad mein COCOMO II. Size (KLOC, ya COCOMO II mein FP/object points) se effort aur Tdev. Teen levels: Basic, Intermediate, Detailed. Teen modes: Organic, Semidetached, Embedded — exponents badalte hain. BCA: Basic equations, teen modes, Intermediate cost drivers, Detailed kya add karta hai. Constants TRW data par fit — apne org par calibrate karo.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Basic COCOMO: Effort E = a × (KLOC)^b person-months; Tdev = c × (E)^d months; People ≈ E / Tdev. Constants (a,b,c,d) depend on mode. Basic uses only size — no cost drivers — so it is a rough order-of-magnitude estimate.",
        "Basic COCOMO: Effort E = a × (KLOC)^b person-months; Tdev = c × (E)^d महीने; People ≈ E / Tdev। स्थिरांक (a,b,c,d) मोड पर निर्भर। Basic केवल आकार उपयोग करता है — कोई cost drivers नहीं — अतः मोटा order-of-magnitude अनुमान है।",
        "Basic: E = a (KLOC)^b PM; Tdev = c (E)^d months; People ≈ E/Tdev. Constants mode par. Sirf size — cost drivers nahi — rough estimate.",
      ],
      [
        "Organic mode: small teams, familiar in-house application, flexible process, little innovation (e.g. a simple payroll). a=2.4, b=1.05, c=2.5, d=0.38.",
        "Organic मोड: छोटी टीमें, परिचित in-house अनुप्रयोग, लचीली प्रक्रिया, कम नवाचार (जैसे सरल payroll)। a=2.4, b=1.05, c=2.5, d=0.38।",
        "Organic: chhoti teams, familiar in-house app, flexible, kam innovation (simple payroll). a=2.4, b=1.05, c=2.5, d=0.38.",
      ],
      [
        "Semidetached mode: mix of experienced and new people, mix of rigid and flexible requirements, medium size (e.g. a college ERP with some novel modules). a=3.0, b=1.12, c=2.5, d=0.35.",
        "Semidetached मोड: अनुभवी व नए लोगों का मिश्रण, कठोर व लचीली आवश्यकताओं का मिश्रण, मध्यम आकार (जैसे कुछ नई मॉड्यूल वाला कॉलेज ERP)। a=3.0, b=1.12, c=2.5, d=0.35।",
        "Semidetached: experienced+new mix, rigid+flexible mix, medium (college ERP). a=3.0, b=1.12, c=2.5, d=0.35.",
      ],
      [
        "Embedded mode: tight hardware / regulations / timing constraints, little room for negotiation (avionics, medical device, real-time process control). a=3.6, b=1.20, c=2.5, d=0.32.",
        "Embedded मोड: कठोर हार्डवेयर / विनियम / timing बाधाएँ, negotiation की कम गुंजाइश (avionics, चिकित्सा उपकरण, real-time प्रक्रिया नियंत्रण)। a=3.6, b=1.20, c=2.5, d=0.32।",
        "Embedded: tight hardware/regulations/timing, kam negotiation (avionics, medical, real-time). a=3.6, b=1.20, c=2.5, d=0.32.",
      ],
      [
        "Intermediate COCOMO: E = a × (KLOC)^b × EAF. EAF is the product of 15 cost-driver multipliers, each rated Very Low to Extra High. Drivers grouped as Product (RELY, DATA, CPLX), Hardware/computer (TIME, STOR, VIRT, TURN), Personnel (ACAP, AEXP, PCAP, VEXP, LEXP), Project (MODP, TOOL, SCED). This is the version most numerical exam problems use.",
        "Intermediate COCOMO: E = a × (KLOC)^b × EAF। EAF 15 cost-driver गुणकों का गुणनफल, प्रत्येक Very Low से Extra High। समूह: Product (RELY, DATA, CPLX), Hardware/computer (TIME, STOR, VIRT, TURN), Personnel (ACAP, AEXP, PCAP, VEXP, LEXP), Project (MODP, TOOL, SCED)। संख्यात्मक परीक्षा प्रश्नों में यही संस्करण।",
        "Intermediate: E = a (KLOC)^b × EAF. EAF = 15 cost-driver multipliers (VL to EH). Groups: Product (RELY DATA CPLX), Hardware (TIME STOR VIRT TURN), Personnel (ACAP AEXP PCAP VEXP LEXP), Project (MODP TOOL SCED).",
      ],
      [
        "Detailed COCOMO: applies Intermediate-like multipliers at the subsystem / module level and uses different driver values in different phases (plan/requirements, design, code, test, integration). More work, better for large systems with uneven difficulty.",
        "Detailed COCOMO: Intermediate-जैसे गुणक subsystem / मॉड्यूल स्तर पर लगाता है और विभिन्न चरणों (plan/requirements, design, code, test, integration) में भिन्न driver मान उपयोग करता है। अधिक काम, असमान कठिनाई वाले बड़े सिस्टम के लिए बेहतर।",
        "Detailed: Intermediate-like multipliers subsystem/module level par, alag phases mein alag driver values. Bade uneven systems ke liye better.",
      ],
      [
        "COCOMO II (awareness level): three-stage — Application Composition (object points, prototyping), Early Design (unadjusted FP, 7 drivers), Post-Architecture (SLOC or converted FP, 17 drivers, 5 scale factors that replace the three discrete modes). Scale factors include precedentedness, flexibility, architecture/risk resolution, team cohesion, process maturity.",
        "COCOMO II (जागरूकता स्तर): तीन-चरण — Application Composition (object points, prototyping), Early Design (unadjusted FP, 7 drivers), Post-Architecture (SLOC या converted FP, 17 drivers, 5 scale factors जो तीन discrete मोड की जगह)। Scale factors में precedentedness, flexibility, architecture/risk resolution, team cohesion, process maturity।",
        "COCOMO II: Application Composition (object points), Early Design (FP, 7 drivers), Post-Architecture (SLOC/FP, 17 drivers, 5 scale factors teen modes ki jagah). Scale: precedentedness, flexibility, risk resolution, cohesion, maturity.",
      ],
    ]),
    D(
      "cocomo",
      "COCOMO 81: three modes (organic, semidetached, embedded) and three model levels (basic, intermediate, detailed) feeding effort and schedule equations.",
      "COCOMO 81: तीन मोड (organic, semidetached, embedded) और तीन स्तर (basic, intermediate, detailed) जो प्रयास व अनुसूची समीकरणों को खिलाते हैं।",
      "COCOMO 81: teen modes (organic, semidetached, embedded) aur teen levels (basic, intermediate, detailed) jo effort aur schedule equations ko feed karte hain.",
    ),
    C(
      "text",
      "Basic COCOMO 81\n                a     b     c     d\nOrganic        2.4  1.05   2.5  0.38\nSemidetached   3.0  1.12   2.5  0.35\nEmbedded       3.6  1.20   2.5  0.32\n\nE    = a * (KLOC)^b     person-months\nTdev = c * (E)^d        months\n\nIntermediate: E = a * (KLOC)^b * EAF\nEAF = product of 15 cost-driver multipliers",
      [
        "Constants and equations expected in numerical problems.",
        "संख्यात्मक प्रश्नों में अपेक्षित स्थिरांक और समीकरण।",
        "Numericals mein expected constants aur equations.",
      ],
    ),
    EXAM(
      "Write Basic COCOMO equations and the (a,b,c,d) table for three modes. Explain organic vs semidetached vs embedded with examples. Intermediate: EAF and 15 cost drivers in four groups. One line on Detailed and on COCOMO II. A numerical (given KLOC and mode, find E and Tdev) is very common.",
      "Basic COCOMO समीकरण और तीन मोड की (a,b,c,d) तालिका लिखें। Organic बनाम semidetached बनाम embedded उदाहरण सहित। Intermediate: EAF और चार समूहों में 15 cost drivers। Detailed और COCOMO II पर एक पंक्ति। संख्यात्मक (दिया KLOC व मोड, E और Tdev) बहुत सामान्य है।",
      "Basic equations + (a,b,c,d) table. Teen modes examples. Intermediate EAF + 15 drivers. Detailed aur COCOMO II ek line. Numerical (KLOC, mode → E, Tdev) bahut common.",
    ),
  ]),

  "se-testing-strategies": topic("se-testing-strategies", [
    P(
      "A testing strategy is the plan of what to test, in what order, by whom, with what exit criteria — not a random pile of test cases. Myers’ classic statement: testing is the process of executing a program with the intent of finding errors. A good strategy is staged: unit testing of modules, integration testing of the assembled architecture, validation/acceptance against requirements, and system testing in a production-like environment (including non-functional tests). Strategy also decides the mix of black-box and white-box, the use of reviews before execution, regression policy, and when to stop (coverage targets, defect-discovery rate, risk). Testing cannot prove absence of defects; it can only increase confidence. Dijkstra: testing shows the presence of bugs, not their absence.",
      "Testing strategy वह योजना है कि क्या टेस्ट, किस क्रम में, किसके द्वारा, किन exit मानदंडों से — टेस्ट केसों का यादृच्छिक ढेर नहीं। Myers का क्लासिक कथन: testing प्रोग्राम को त्रुटियाँ ढूँढ़ने के आशय से चलाने की प्रक्रिया है। अच्छी रणनीति चरणबद्ध: मॉड्यूल की unit testing, जोड़ी architecture की integration testing, आवश्यकताओं के विरुद्ध validation/acceptance, और उत्पादन-सदृश वातावरण में system testing (NFR सहित)। रणनीति black-box व white-box का मिश्रण, निष्पादन से पहले reviews, regression नीति, और कब रुकें (coverage लक्ष्य, दोष-खोज दर, जोखिम) भी तय करती है। Testing दोषों की अनुपस्थिति सिद्ध नहीं कर सकती; केवल विश्वास बढ़ा सकती है। Dijkstra: testing bugs की उपस्थिति दिखाती है, अनुपस्थिति नहीं।",
      "Testing strategy: kya test, kis order, kaun, kaunse exit criteria — random test cases nahi. Myers: testing program ko errors dhoondhne ke irade se chalana. Staged: unit → integration → validation/acceptance → system (NFR included). Mix of black/white box, reviews, regression, stopping criteria. Testing absence prove nahi karti. Dijkstra: presence dikhati hai, absence nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Strategic steps (Pressman): (1) testing begins at the module level and works “outward”; (2) different testing techniques at different points; (3) conducted by the developer and an independent test group; (4) testing and debugging are different activities; (5) must be planned in the SPMP/SQA plan.",
        "रणनीतिक चरण (Pressman): (1) testing मॉड्यूल स्तर से शुरू “बाहर” जाती है; (2) विभिन्न बिंदुओं पर विभिन्न तकनीकें; (3) डेवलपर और स्वतंत्र टेस्ट समूह द्वारा; (4) testing और debugging भिन्न गतिविधियाँ; (5) SPMP/SQA plan में नियोजित।",
        "Pressman: (1) module se bahar ki ore; (2) alag points par alag techniques; (3) developer + independent test group; (4) testing ≠ debugging; (5) SPMP/SQA plan mein.",
      ],
      [
        "Unit → Integration → Validation → System is the usual cascade (matches V-model). Agile runs the same levels continuously: TDD at unit, CI at integration, automated acceptance tests, and exploratory system tests each sprint.",
        "Unit → Integration → Validation → System सामान्य cascade है (V-model से मेल)। Agile वही स्तर निरंतर चलाता है: unit पर TDD, integration पर CI, स्वचालित acceptance, प्रत्येक sprint exploratory system tests।",
        "Unit → Integration → Validation → System usual cascade (V-model). Agile yahi levels continuously: TDD, CI, automated acceptance, exploratory system tests.",
      ],
      [
        "Verification vs validation inside strategy: reviews and static analysis are verification (we test the artefact against its spec); execution against user needs is validation. A strategy that only executes code misses cheaper static defects.",
        "रणनीति के भीतर verification बनाम validation: reviews और static analysis verification हैं (artefact को उसकी spec से); उपयोगकर्ता जरूरतों के विरुद्ध निष्पादन validation। केवल कोड चलाने वाली रणनीति सस्ते स्थैतिक दोष छोड़ती है।",
        "Strategy ke andar V&V: reviews/static = verification; user needs ke against execution = validation. Sirf code chalana saste static defects miss karta hai.",
      ],
      [
        "Test plan contents: items to test, features in/out of scope, approach, pass/fail criteria, suspension/resumption, deliverables (cases, logs, reports), staffing, schedule, risks, environment. IEEE 829 / ISO/IEC/IEEE 29119 are the document standards.",
        "टेस्ट प्लान विषय: टेस्ट वस्तुएँ, scope में/बाहर features, दृष्टिकोण, pass/fail मानदंड, suspension/resumption, deliverables (cases, logs, reports), स्टाफिंग, अनुसूची, जोखिम, वातावरण। IEEE 829 / ISO/IEC/IEEE 29119 दस्तावेज़ मानक हैं।",
        "Test plan: items, features in/out, approach, pass/fail, suspension, deliverables, staffing, schedule, risks, environment. IEEE 829 / 29119.",
      ],
      [
        "Regression testing: re-running a subset of tests after a change. Strategy chooses a regression pack (smoke, critical path, full). Continuous integration makes cheap regression possible.",
        "Regression testing: परिवर्तन के बाद टेस्टों का उपसमुच्चय फिर चलाना। रणनीति regression pack चुनती है (smoke, critical path, full)। Continuous integration सस्ती regression संभव बनाती है।",
        "Regression: change ke baad subset dubara. Pack: smoke, critical path, full. CI sasti regression possible banati hai.",
      ],
      [
        "When to stop: never “we ran out of time” as the only criterion. Combine: planned coverage achieved, defect-find rate below a threshold, high-severity defects closed, risk remaining acceptable, time-box in Agile with explicit leftover risk.",
        "कब रुकें: केवल “समय खत्म” कभी न हो। मिलाएँ: नियोजित coverage प्राप्त, दोष-खोज दर सीमा से नीचे, उच्च-गंभीरता दोष बंद, बचा जोखिम स्वीकार्य, Agile में time-box स्पष्ट बचे जोखिम के साथ।",
        "Kab ruko: sirf “time khatam” nahi. Coverage, defect-find rate, high-severity closed, residual risk, Agile time-box + leftover risk.",
      ],
      [
        "Independent Test Group (ITG / SQA): developers unit-test their code; an independent group runs integration/system/acceptance to avoid author bias. Psychology: a developer proving the program works will not try as hard to break it as a tester whose job is to break it.",
        "Independent Test Group (ITG / SQA): डेवलपर अपना कोड unit-test करते हैं; स्वतंत्र समूह integration/system/acceptance चलाता है ताकि लेखक पक्षपात न हो। मनोविज्ञान: जो डेवलपर सिद्ध करना चाहता है कि प्रोग्राम चलता है, वह उसे तोड़ने की उतनी कोशिश नहीं करेगा जितनी उस टेस्टर की जिसका काम तोड़ना है।",
        "ITG: developers unit-test; independent group integration/system/acceptance — author bias se bacho. Developer “works” prove karta hai, tester “break” karta hai.",
      ],
    ]),
    OL([
      [
        "Plan: scope, levels, techniques, environment, exit criteria.",
        "योजना: scope, स्तर, तकनीकें, वातावरण, exit मानदंड।",
        "Plan: scope, levels, techniques, environment, exit criteria.",
      ],
      [
        "Unit test each module (developer + white-box heavy).",
        "प्रत्येक मॉड्यूल unit test (डेवलपर + white-box प्रधान)।",
        "Har module unit test (developer + white-box).",
      ],
      [
        "Integrate and test interfaces (chosen integration strategy).",
        "Interfaces एकीकृत व टेस्ट (चुनी integration रणनीति)।",
        "Integrate aur interfaces test (chosen integration strategy).",
      ],
      [
        "Validate against SRS / user stories; run system and NFR tests.",
        "SRS / user stories के विरुद्ध validate; system व NFR टेस्ट चलाएँ।",
        "SRS/user stories ke against validate; system aur NFR tests.",
      ],
      [
        "Regression, acceptance (alpha/beta), ship decision, log leftover risk.",
        "Regression, acceptance (alpha/beta), ship निर्णय, बचा जोखिम लॉग।",
        "Regression, acceptance (alpha/beta), ship decision, leftover risk log.",
      ],
    ]),
    EXAM(
      "Define testing (Myers) and outline a testing strategy from unit to system. Distinguish testing from debugging. List test-plan contents and stopping criteria. Quote Dijkstra’s remark if you want a 1-mark garnish.",
      "Testing (Myers) परिभाषित कर unit से system तक रणनीति रूपरेखा दें। Testing और debugging में अंतर। टेस्ट-प्लान विषय और रुकने के मानदंड। 1 अंक की सजावट के लिए Dijkstra का कथन।",
      "Testing (Myers) define, unit se system tak strategy. Testing vs debugging. Test-plan contents, stopping criteria. Dijkstra 1-mark garnish.",
    ),
  ]),

  "se-black-white": topic("se-black-white", [
    P(
      "Black-box (functional / behavioural) testing treats the software as a closed box: tests are derived from the specification — inputs, outputs, and rules — without using internal structure. White-box (structural / glass-box) testing uses the code: tests are derived to exercise paths, branches, conditions and data flows. They are complementary. Black-box finds missing functions, incorrect functions and interface errors; it cannot see unexecuted dead code. White-box finds logic errors, untested paths and poor error handling; it cannot see that a required function was never implemented. A complete strategy uses both: black-box for “does it meet the SRS?” and white-box for “did we execute what we wrote?”",
      "Black-box (functional / behavioural) testing सॉफ्टवेयर को बंद बॉक्स मानती है: टेस्ट विनिर्देश — इनपुट, आउटपुट, नियम — से निकाले जाते हैं, आंतरिक संरचना बिना। White-box (structural / glass-box) testing कोड उपयोग करती है: टेस्ट paths, branches, conditions और data flows चलाने के लिए बनाए जाते हैं। वे पूरक हैं। Black-box छूटे functions, गलत functions और interface त्रुटियाँ ढूँढ़ती है; बिना चला dead code नहीं देख सकती। White-box तर्क त्रुटियाँ, अपरीक्षित पथ और कमजोर error handling ढूँढ़ती है; यह नहीं देख सकती कि कोई आवश्यक function कभी लागू ही नहीं हुआ। पूर्ण रणनीति दोनों: black-box “क्या SRS पूरा?” और white-box “क्या जो लिखा वह चला?”",
      "Black-box: software closed box — tests spec se (inputs, outputs, rules), andar ki structure nahi. White-box: code se — paths, branches, conditions, data flows. Complementary. Black-box missing/wrong functions, interface errors; dead code nahi dekhti. White-box logic errors, untested paths; missing-never-implemented function nahi dekhti. Dono chahiye.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Equivalence partitioning (black-box): split the input domain into classes that the program is expected to treat the same. One valid and one invalid representative per class. Example: marks 0–100; classes <0, 0–100, >100.",
        "Equivalence partitioning (black-box): इनपुट डोमेन को वर्गों में बाँटें जिन्हें प्रोग्राम समान माने। प्रति वर्ग एक valid व एक invalid प्रतिनिधि। उदाहरण: अंक 0–100; वर्ग <0, 0–100, >100।",
        "Equivalence partitioning: input domain ko classes mein baanto jo program same treat kare. Har class se ek valid, ek invalid. Example: marks 0–100 → <0, 0–100, >100.",
      ],
      [
        "Boundary Value Analysis (BVA): errors hide at edges. For a range [a, b] test a−1, a, a+1, b−1, b, b+1. BVA plus equivalence is the most-asked black-box pair in BCA papers.",
        "Boundary Value Analysis (BVA): त्रुटियाँ किनारों पर छिपती हैं। रेंज [a, b] के लिए a−1, a, a+1, b−1, b, b+1 टेस्ट करें। BVA + equivalence BCA प्रश्नपत्रों में सबसे पूछा black-box जोड़ा है।",
        "BVA: errors edges par. Range [a,b] → a−1, a, a+1, b−1, b, b+1. BVA + equivalence BCA ka sabse poocha black-box pair.",
      ],
      [
        "Other black-box techniques: decision tables (combinations of conditions), cause-effect graphs, state-transition testing, use-case / scenario testing, error guessing, random testing, pairwise (all-pairs) for configuration combinatorics.",
        "अन्य black-box तकनीकें: decision tables (शर्तों के संयोजन), cause-effect graphs, state-transition testing, use-case / scenario testing, error guessing, random testing, configuration संयोजनों के लिए pairwise।",
        "Aur black-box: decision tables, cause-effect graphs, state-transition, use-case/scenario, error guessing, random, pairwise.",
      ],
      [
        "White-box coverage, weakest to stronger (typical exam order): statement (every statement once) → branch/decision (each true/false) → condition (each atomic condition true/false) → multiple-condition / MC/DC → path (every independent path). 100% path coverage is often impossible (loops).",
        "White-box coverage, कमजोर से मजबूत: statement (प्रत्येक कथन एक बार) → branch/decision (प्रत्येक true/false) → condition (प्रत्येक atomic condition true/false) → multiple-condition / MC/DC → path (प्रत्येक स्वतंत्र पथ)। 100% path coverage अक्सर असंभव (loops)।",
        "White-box coverage weak→strong: statement → branch/decision → condition → multiple-condition/MC/DC → path. 100% path aksar impossible (loops).",
      ],
      [
        "Basis-path testing (McCabe): compute cyclomatic complexity V(G) = E − N + 2P (or number of regions, or predicates + 1). V(G) is the number of independent paths and a lower bound on tests for branch coverage. Draw the flow graph, list a basis set, design one test per path.",
        "Basis-path testing (McCabe): cyclomatic complexity V(G) = E − N + 2P (या क्षेत्रों की संख्या, या predicates + 1)। V(G) स्वतंत्र पथों की संख्या और branch coverage के लिए टेस्टों का निम्न Bound है। Flow graph बनाएँ, basis सेट लिखें, प्रति पथ एक टेस्ट।",
        "Basis-path (McCabe): V(G) = E − N + 2P (ya regions, ya predicates+1). V(G) = independent paths = tests ka lower bound. Flow graph, basis set, har path ek test.",
      ],
      [
        "Data-flow testing (white-box): exercise def-use pairs of variables. Loop testing: simple, nested, concatenated, unstructured loops need specialised patterns (Beizer).",
        "Data-flow testing (white-box): चरों के def-use जोड़े चलाएँ। Loop testing: सरल, nested, concatenated, unstructured loops को विशिष्ट पैटर्न चाहिए (Beizer)।",
        "Data-flow: def-use pairs. Loop testing: simple, nested, concatenated, unstructured (Beizer).",
      ],
      [
        "Grey-box: testers know some internals (database schema, architecture) but write tests at the interface — common in integration testing. Mutation testing (white-box research): seed faults; if tests still pass, the suite is weak.",
        "Grey-box: टेस्टर कुछ आंतरिक जानते हैं (database schema, architecture) पर टेस्ट interface पर लिखते हैं — integration में सामान्य। Mutation testing (white-box शोध): दोष बोएँ; यदि टेस्ट अभी पास, सूट कमजोर।",
        "Grey-box: kuch internals pata, tests interface par — integration mein common. Mutation: faults seed karo; tests pass rahe to suite weak.",
      ],
    ]),
    TBL(
      [
        ["", "", ""],
        ["Black-box", "Black-box", "Black-box"],
        ["White-box", "White-box", "White-box"],
      ],
      [
        [
          ["Based on", "आधार", "Based on"],
          ["SRS / spec / requirements", "SRS / spec / आवश्यकताएँ", "SRS / spec / requirements"],
          ["Code structure / logic", "कोड संरचना / तर्क", "Code structure / logic"],
        ],
        [
          ["Finds", "ढूँढ़ता है", "Finds"],
          ["Missing/wrong functions, UI, I/O", "छूटे/गलत functions, UI, I/O", "Missing/wrong functions, UI, I/O"],
          ["Path, logic, dead code, error handling", "Path, तर्क, dead code, error handling", "Path, logic, dead code, error handling"],
        ],
        [
          ["Typical techniques", "विशिष्ट तकनीकें", "Typical techniques"],
          ["EP, BVA, decision table, state", "EP, BVA, decision table, state", "EP, BVA, decision table, state"],
          ["Statement/branch/path, basis path", "Statement/branch/path, basis path", "Statement/branch/path, basis path"],
        ],
        [
          ["Who", "कौन", "Kaun"],
          ["Independent testers, users", "स्वतंत्र टेस्टर, उपयोगकर्ता", "Independent testers, users"],
          ["Developers, unit testers", "डेवलपर, unit टेस्टर", "Developers, unit testers"],
        ],
      ],
    ),
    EXAM(
      "Compare black-box and white-box with techniques of each. Perform BVA + equivalence on a stated input. Compute cyclomatic complexity and list independent paths. Know V(G) = E − N + 2P = predicates + 1 = regions.",
      "Black-box और white-box की तुलना प्रत्येक की तकनीकों सहित। दिए इनपुट पर BVA + equivalence। Cyclomatic complexity निकाल स्वतंत्र पथ लिखें। V(G) = E − N + 2P = predicates + 1 = regions जानें।",
      "Black vs white box techniques. BVA + EP numerical. Cyclomatic V(G) aur independent paths. Formulae yaad karo.",
    ),
  ]),

  "se-vv": topic("se-vv", [
    P(
      "Verification and Validation (V&V) are the two complementary quality questions coined in this form by Barry Boehm. Verification: “Are we building the product right?” — does each artefact (SRS, design, code, tests) correctly implement the specification of the previous stage? Validation: “Are we building the right product?” — does the software satisfy the actual user needs and intended use? Verification is largely internal and can be static (reviews, inspections, static analysis) or dynamic (unit/integration tests against a spec). Validation is external and dynamic (system, acceptance, beta, field trials). The V-model is literally named after this pairing. Confusing the two words is the most common 2-mark trap in BCA papers.",
      "Verification and Validation (V&V) Barry Boehm द्वारा इस रूप में गढ़े गए दो पूरक गुणवत्ता प्रश्न हैं। Verification: “क्या हम उत्पाद सही बना रहे हैं?” — क्या प्रत्येक artefact (SRS, डिज़ाइन, कोड, टेस्ट) पिछले चरण के विनिर्देश को सही लागू करता है? Validation: “क्या हम सही उत्पाद बना रहे हैं?” — क्या सॉफ्टवेयर वास्तविक उपयोगकर्ता जरूरतों और intended use को संतुष्ट करता है? Verification अधिकतर आंतरिक है और स्थैतिक (reviews, inspections, static analysis) या गतिशील (spec के विरुद्ध unit/integration) हो सकती है। Validation बाहरी व गतिशील है (system, acceptance, beta, field trials)। V-model का नाम इसी जोड़ी से है। दोनों शब्दों को मिलाना BCA पत्रों का सबसे आम 2 अंक जाल है।",
      "V&V Boehm ke do complementary questions. Verification: “product right bana rahe hain?” — har artefact pichhli spec ko sahi implement karta hai? Validation: “right product bana rahe hain?” — software actual user needs satisfy karta hai? Verification mostly internal, static ya dynamic. Validation external dynamic (system, acceptance, beta). V-model isi pairing se. Dono words milana BCA ka sabse common 2-mark trap.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Verification techniques: reviews, walkthroughs, inspections (FTR), traceability-matrix checks, static analysers, proof, unit and integration tests written from design/SRS. Question answered: conformance to specification.",
        "Verification तकनीकें: reviews, walkthroughs, inspections (FTR), traceability-matrix जाँच, static analysers, proof, डिज़ाइन/SRS से लिखे unit व integration टेस्ट। उत्तरित प्रश्न: विनिर्देश से अनुरूपता।",
        "Verification: reviews, walkthroughs, inspections, RTM checks, static analysis, proof, unit/integration tests from spec. Question: conformance to specification.",
      ],
      [
        "Validation techniques: system testing against user requirements, UAT, alpha/beta, prototyping shown to users, model validation in requirements engineering, field observation. Question answered: fitness for purpose.",
        "Validation तकनीकें: उपयोगकर्ता आवश्यकताओं के विरुद्ध system testing, UAT, alpha/beta, उपयोगकर्ताओं को दिखाया prototype, requirements engineering में model validation, क्षेत्र अवलोकन। उत्तरित प्रश्न: उद्देश्य-उपयुक्तता।",
        "Validation: system testing vs user reqs, UAT, alpha/beta, prototype to users, model validation, field observation. Question: fitness for purpose.",
      ],
      [
        "You can have a verified system that is invalid: it perfectly implements a wrong SRS (built the product right, built the wrong product). You can have a valid-looking demo that is unverified: it seems to do the right job but is full of untested paths.",
        "Verified पर invalid सिस्टम हो सकता है: वह गलत SRS को पूर्णतः लागू करता है (उत्पाद सही बना, गलत उत्पाद बना)। Valid-दिखता unverified डेमो हो सकता है: सही काम लगता है पर अपरीक्षित पथों से भरा है।",
        "Verified-but-invalid: galat SRS ko perfectly implement (product right, wrong product). Valid-looking unverified demo: sahi kaam lagta hai, untested paths se bhara.",
      ],
      [
        "IV&V (Independent V&V): an organisation separate from the developer performs V&V — common in defence, space, nuclear. Independence of budget and management is the point; otherwise it becomes self-certification.",
        "IV&V (Independent V&V): डेवलपर से अलग संगठन V&V करता है — रक्षा, अंतरिक्ष, परमाणु में सामान्य। बजट व प्रबंधन की स्वतंत्रता बिंदु है; नहीं तो आत्म-प्रमाणन हो जाता है।",
        "IV&V: developer se alag organisation V&V karti hai — defence, space, nuclear. Budget/management independence point hai, warna self-certification.",
      ],
      [
        "Static vs dynamic: static V&V does not execute (reviews, lint, theorem proving); dynamic executes (all testing). Both are needed; static finds whole classes of defects cheaper and earlier.",
        "Static बनाम dynamic: static V&V निष्पादित नहीं करता (reviews, lint, theorem proving); dynamic करता है (सभी testing)। दोनों चाहिए; static दोषों के पूरे वर्ग सस्ते व जल्दी ढूँढ़ता है।",
        "Static vs dynamic: static execute nahi (reviews, lint, proofs); dynamic execute (testing). Dono chahiye; static sasta aur jaldi.",
      ],
      [
        "SQA is the organisational umbrella; V&V are the technical activities inside it. Testing is the dynamic subset of V&V. Do not write “V&V = testing” in an answer.",
        "SQA संगठनात्मक छत्र है; V&V उसके भीतर तकनीकी गतिविधियाँ हैं। Testing V&V का गतिशील उपसमुच्चय है। उत्तर में “V&V = testing” न लिखें।",
        "SQA organisational umbrella; V&V uske andar technical activities. Testing V&V ka dynamic subset hai. “V&V = testing” mat likho.",
      ],
      [
        "Memory hook for exams: Verification ↔ “right product construction” ↔ specs, reviews, white-box, V’s left arm. Validation ↔ “right product” ↔ users, acceptance, black-box at system level, V’s right-top arm.",
        "परीक्षा स्मृति: Verification ↔ “सही उत्पाद निर्माण” ↔ specs, reviews, white-box, V की बाईं भुजा। Validation ↔ “सही उत्पाद” ↔ उपयोगकर्ता, acceptance, सिस्टम स्तर पर black-box, V की ऊपरी-दाईं भुजा।",
        "Memory hook: Verification = right construction = specs/reviews/white-box/left arm. Validation = right product = users/acceptance/system black-box/top-right arm.",
      ],
    ]),
    TBL(
      [
        ["", "", ""],
        ["Verification", "Verification", "Verification"],
        ["Validation", "Validation", "Validation"],
      ],
      [
        [
          ["Boehm question", "Boehm प्रश्न", "Boehm question"],
          ["Are we building the product right?", "क्या उत्पाद सही बन रहा है?", "Product right bana rahe hain?"],
          ["Are we building the right product?", "क्या सही उत्पाद बन रहा है?", "Right product bana rahe hain?"],
        ],
        [
          ["Against", "किसके विरुद्ध", "Against"],
          ["Immediate specification", "निकटतम विनिर्देश", "Immediate specification"],
          ["User needs / intended use", "उपयोगकर्ता जरूरत / intended use", "User needs / intended use"],
        ],
        [
          ["Typical methods", "विशिष्ट विधियाँ", "Typical methods"],
          ["Reviews, inspections, unit/int. tests", "Reviews, inspections, unit/int. टेस्ट", "Reviews, inspections, unit/int. tests"],
          ["System test, UAT, alpha/beta", "System test, UAT, alpha/beta", "System test, UAT, alpha/beta"],
        ],
      ],
    ),
    EXAM(
      "Write Boehm’s two questions verbatim. Give two techniques of each. Give an example of verified-but-invalid software. Relate V&V to the V-model and to SQA. This is almost guaranteed as a 5-mark or 2+2 mark split.",
      "Boehm के दो प्रश्न शब्दशः लिखें। प्रत्येक की दो तकनीकें। Verified-but-invalid सॉफ्टवेयर का उदाहरण। V&V को V-model और SQA से जोड़ें। यह लगभग गारंटीशुदा 5 अंक या 2+2 विभाजन है।",
      "Boehm ke do questions verbatim. Har ki do techniques. Verified-but-invalid example. V-model aur SQA se jodo. Almost guaranteed 5-mark.",
    ),
  ]),

  "se-test-levels": topic("se-test-levels", [
    P(
      "Testing is applied at several levels of assembly, each with a different target and owner. Unit (or module/component) testing examines a single module in isolation, usually by the developer, with heavy white-box coverage. Integration testing examines interfaces and interactions as modules are composed, using a planned assembly order (big-bang, top-down, bottom-up, sandwich). System testing examines the complete product against the SRS, including non-functional attributes, typically by an independent team in a production-like environment. Acceptance testing is the customer’s validation (alpha at the developer’s site, beta at the customer’s). These levels map onto the right arm of the V-model and must all appear in a test strategy.",
      "Testing संयोजन के कई स्तरों पर लागू होती है, प्रत्येक का भिन्न लक्ष्य व स्वामी। Unit (या module/component) testing एक मॉड्यूल को अलग जाँचती है, प्रायः डेवलपर द्वारा, भारी white-box coverage के साथ। Integration testing मॉड्यूल जुड़ने पर interfaces व अंतःक्रियाएँ जाँचती है, नियोजित संयोजन क्रम से (big-bang, top-down, bottom-up, sandwich)। System testing पूर्ण उत्पाद को SRS के विरुद्ध जाँचती है, NFR सहित, प्रायः स्वतंत्र टीम उत्पादन-सदृश वातावरण में। Acceptance testing ग्राहक की validation है (डेवलपर स्थल पर alpha, ग्राहक स्थल पर beta)। ये स्तर V-model की दाहिनी भुजा पर मैप होते हैं और टेस्ट रणनीति में सभी आने चाहिए।",
      "Testing kai assembly levels par. Unit: ek module isolation mein, developer, white-box. Integration: interfaces jab modules judte hain (big-bang, top-down, bottom-up, sandwich). System: poora product vs SRS, NFR included, independent team, production-like. Acceptance: customer ki validation (alpha developer site, beta customer site). V-model right arm; strategy mein saare levels.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Unit testing: drivers (dummy main that calls the module) and stubs (dummy callees) create a harness. Focus: local data structures, independent paths, error handling, boundary conditions. TDD writes these tests first.",
        "Unit testing: drivers (मॉड्यूल बुलाने वाला dummy main) और stubs (dummy callee) harness बनाते हैं। फोकस: स्थानीय data structures, स्वतंत्र पथ, error handling, सीमा शर्तें। TDD ये टेस्ट पहले लिखता है।",
        "Unit: drivers (dummy main) aur stubs (dummy callees) harness. Focus: local data, paths, error handling, boundaries. TDD pehle tests likhta hai.",
      ],
      [
        "Big-bang integration: all modules at once. Simple to schedule, nightmare to debug (fault isolation impossible), nothing works until the end. Acceptable only for tiny systems.",
        "Big-bang integration: सभी मॉड्यूल एक साथ। अनुसूची सरल, डिबग दुःस्वप्न (दोष अलगाव असंभव), अंत तक कुछ नहीं चलता। केवल tiny सिस्टम पर स्वीकार्य।",
        "Big-bang: saare modules ek saath. Schedule simple, debug nightmare, end tak kuch nahi chalta. Sirf tiny systems.",
      ],
      [
        "Top-down integration: start from the main control module, replace stubs by real modules downward. Plus: early working skeleton, early UI demo. Minus: low-level modules (often the hardest) tested late; stub writing cost; test output may be hard to observe at the top.",
        "Top-down integration: मुख्य नियंत्रण मॉड्यूल से शुरू, stubs को नीचे की ओर वास्तविक मॉड्यूल से बदलें। प्लस: जल्दी कंकाल, जल्दी UI डेमो। माइनस: निम्न-स्तरीय मॉड्यूल (अक्सर कठिन) देर से टेस्ट; stub लिखने की लागत; शीर्ष पर आउटपुट देखना कठिन।",
        "Top-down: main se start, stubs ko neeche real se badlo. Plus: early skeleton, early UI. Minus: low-level late test, stub cost, top se output dekhna mushkil.",
      ],
      [
        "Bottom-up integration: start from leaf modules, write drivers, move upward. Plus: easy test observation, no stubs, low-level logic proven early. Minus: no working system until late; driver cost; major control/UI defects found last.",
        "Bottom-up integration: पत्ती मॉड्यूल से शुरू, drivers लिखें, ऊपर जाएँ। प्लस: आसान अवलोकन, stubs नहीं, निम्न-स्तरीय तर्क जल्दी सिद्ध। माइनस: देर तक कार्यशील सिस्टम नहीं; driver लागत; मुख्य नियंत्रण/UI दोष अंत में।",
        "Bottom-up: leaves se, drivers likho, upar. Plus: observe asaan, stubs nahi, low-level jaldi proven. Minus: late working system, driver cost, UI defects last.",
      ],
      [
        "Sandwich / mixed: top-down for the upper layers plus bottom-up for the infrastructure, meeting in the middle. Combines early skeleton with early proof of critical leaves. Most industrial projects actually do some mixed form (plus continuous integration).",
        "Sandwich / mixed: ऊपरी परतों पर top-down तथा आधारभूत संरचना पर bottom-up, बीच में मिलना। जल्दी कंकाल और महत्वपूर्ण पत्तियों का जल्दी प्रमाण दोनों। अधिकांश औद्योगिक परियोजनाएँ वास्तव में मिश्रित रूप (+ CI) करती हैं।",
        "Sandwich/mixed: upar top-down, neeche bottom-up, beech mein milte hain. Early skeleton + critical leaves jaldi prove. Industry mostly mixed + CI.",
      ],
      [
        "System testing types: functional (against SRS), performance/load/stress/volume, security, recovery, compatibility, reliability, usability, configuration, documentation. These are still testing the product, not the customer’s happiness — that is acceptance.",
        "System testing प्रकार: functional (SRS के विरुद्ध), performance/load/stress/volume, security, recovery, compatibility, reliability, usability, configuration, documentation। ये अभी भी उत्पाद टेस्ट हैं, ग्राहक खुशी नहीं — वह acceptance है।",
        "System testing: functional, performance/load/stress/volume, security, recovery, compatibility, reliability, usability, configuration, docs. Yeh product tests hain; customer khushi acceptance hai.",
      ],
      [
        "Acceptance: Alpha — selected users at the developer’s site, developers watching. Beta — a larger set at customer sites, developer not hovering. Contract / regulatory acceptance may add audits and formal UAT scripts. Passing acceptance is a business decision, not only a technical one.",
        "Acceptance: Alpha — डेवलपर स्थल पर चयनित उपयोगकर्ता, डेवलपर देखते हुए। Beta — ग्राहक स्थलों पर बड़ा समूह, डेवलपर मंडराता नहीं। अनुबंध / नियामक acceptance ऑडिट व औपचारिक UAT स्क्रिप्ट जोड़ सकती है। Acceptance पास करना व्यावसायिक निर्णय भी है, केवल तकनीकी नहीं।",
        "Acceptance: Alpha — developer site, selected users, developers watching. Beta — customer sites, larger set. Contract/regulatory extra audits. Pass karna business decision bhi hai.",
      ],
    ]),
    D(
      "test-levels",
      "Test levels: unit (module + stubs/drivers) → integration (big-bang / top-down / bottom-up / sandwich) → system → acceptance (alpha / beta).",
      "टेस्ट स्तर: unit (मॉड्यूल + stubs/drivers) → integration (big-bang / top-down / bottom-up / sandwich) → system → acceptance (alpha / beta)।",
      "Test levels: unit (module + stubs/drivers) → integration (big-bang / top-down / bottom-up / sandwich) → system → acceptance (alpha / beta).",
    ),
    EXAM(
      "Explain unit, integration and system testing. Compare big-bang, top-down, bottom-up and sandwich (stubs vs drivers, when a working system appears, fault isolation). Define alpha vs beta. A diagram of levels mapped to the V-model scores extra.",
      "Unit, integration और system testing समझाएँ। Big-bang, top-down, bottom-up, sandwich तुलना (stubs बनाम drivers, कार्यशील सिस्टम कब, दोष अलगाव)। Alpha बनाम beta। V-model पर स्तरों का चित्र अतिरिक्त अंक दिलाता है।",
      "Unit, integration, system. Big-bang vs top-down vs bottom-up vs sandwich (stubs/drivers, kab working system, fault isolation). Alpha vs beta. V-model mapping extra.",
    ),
  ]),

  "se-debugging": topic("se-debugging", [
    P(
      "Debugging is the process of diagnosing the root cause of a known failure and correcting it. Testing finds a symptom (the program failed test TC-12); debugging locates the fault (an off-by-one in ComputeFine) and applies a fix, then retests to confirm the fix and to check that no new fault was introduced (regression). Debugging is an art constrained by the scientific method: form a hypothesis about the cause, design a minimal experiment (breakpoint, log, failing unit test), accept or reject the hypothesis, repeat. It is not “insert a print statement everywhere and hope”. Time spent on systematic debugging is cheaper than time spent on random patches that mask the defect.",
      "Debugging ज्ञात विफलता के मूल कारण का निदान कर उसे सुधारने की प्रक्रिया है। Testing लक्षण ढूँढ़ती है (प्रोग्राम TC-12 फेल); debugging दोष स्थित करता है (ComputeFine में off-by-one) और सुधार लागू कर फिर टेस्ट करता है कि सुधार हुआ और नया दोष नहीं आया (regression)। Debugging वैज्ञानिक विधि से बँधी कला है: कारण की परिकल्पना, न्यूनतम प्रयोग (breakpoint, लॉग, फेल unit test), परिकल्पना स्वीकार/अस्वीकार, दोहराएँ। यह “हर जगह print डालो और आशा करो” नहीं। व्यवस्थित debugging पर समय यादृच्छिक पैच से सस्ता है जो दोष छुपाते हैं।",
      "Debugging known failure ka root cause dhoondh kar theek karna hai. Testing symptom (TC-12 fail); debugging fault locate (ComputeFine mein off-by-one) aur fix, phir retest + regression. Scientific method: hypothesis, minimal experiment (breakpoint, log, failing unit test), accept/reject, repeat. “Har jagah print daalo” nahi. Systematic debugging random patches se sasta.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Brute force: dump memory, sprinkle print/log statements, run with a debugger watching everything. Sometimes the only start when you have no clue; usually the least efficient. Turn it into data: logs with timestamps and input IDs.",
        "Brute force: memory dump, print/log छिड़कना, debugger से सब देखना। जब कोई सुराग न हो कभी एकमात्र शुरुआत; प्रायः सबसे कम कुशल। इसे डेटा बनाएँ: timestamps व इनपुट ID वाले लॉग।",
        "Brute force: memory dump, prints, debugger se sab dekhna. Jab clue nahi tab start; usually inefficient. Logs with timestamps/IDs banao.",
      ],
      [
        "Backtracking: start from the symptom (wrong output, exception) and walk backward through the source along the execution path until the first unexpected state. Works on small modules; explodes on large systems with many paths.",
        "Backtracking: लक्षण (गलत आउटपुट, exception) से शुरू कर निष्पादन पथ पर स्रोत में पीछे चलें जब तक पहली अप्रत्याशित अवस्था। छोटे मॉड्यूल पर काम; अनेक पथों वाले बड़े सिस्टम पर फूटता है।",
        "Backtracking: symptom se peeche execution path par chalo jab tak pehli unexpected state. Chhote modules par theek; bade systems par explode.",
      ],
      [
        "Cause elimination / induction: list possible causes, design tests or probes that kill as many as possible, narrow the remaining set (like medical differential diagnosis). Deduction goes the other way: from a theory of how the module should work, predict values, and compare with observed.",
        "Cause elimination / induction: संभावित कारण लिखें, ऐसे टेस्ट/probe डिज़ाइन करें जो अधिक से अधिक मारें, शेष सेट संकीर्ण करें (चिकित्सा differential diagnosis जैसा)। Deduction उल्टी दिशा: मॉड्यूल कैसे चलना चाहिए उसके सिद्धांत से मान पूर्वानुमान, प्रेक्षित से तुलना।",
        "Cause elimination/induction: possible causes list, tests se zyada se zyada hatao, remaining narrow (medical diagnosis). Deduction: theory se values predict, observed se compare.",
      ],
      [
        "Binary search on the input or on the history (git bisect): if a bug is recent, find the commit that introduced it. If a bug depends on a data size, find the smallest failing input. Smaller scenes debug faster.",
        "इनपुट या इतिहास पर binary search (git bisect): यदि बग हाल का है, वह commit खोजें जिसने डाला। यदि बग डेटा आकार पर निर्भर, सबसे छोटा फेल इनपुट। छोटे दृश्य तेज डिबग होते हैं।",
        "Binary search on input ya history (git bisect): recent bug ho to introducing commit; data-size bug ho to smallest failing input. Chhota scene tez debug.",
      ],
      [
        "Debugging principles (Myers/Pressman): think, don’t panic; change one thing at a time; don’t repair a symptom; check the fix in all places the code was cloned; add a regression test that would have caught it.",
        "Debugging सिद्धांत (Myers/Pressman): सोचें, घबराएँ नहीं; एक समय एक चीज़ बदलें; लक्षण की मरम्मत न करें; जहाँ कोड क्लोन था सब जगह जाँचें; एक regression टेस्ट जोड़ें जो इसे पकड़ता।",
        "Principles: socho, panic nahi; ek time ek change; symptom repair nahi; cloned code sab jagah check; regression test jodo jo ise pakadta.",
      ],
      [
        "Tools: interactive debuggers (breakpoints, watch, step), logging frameworks, assertions, sanitizers (memory, thread), profilers (for performance “bugs”), and reproducing the failure under a unit test (the best gift to the future).",
        "उपकरण: interactive debuggers (breakpoints, watch, step), logging frameworks, assertions, sanitizers (memory, thread), profilers (performance “bugs”), तथा unit test के तहत विफलता पुनः उत्पन्न करना (भविष्य के लिए सर्वोत्तम उपहार)।",
        "Tools: debuggers (breakpoints, watch, step), logs, assertions, sanitizers, profilers, failing unit test mein reproduce — future ke liye best gift.",
      ],
      [
        "Psychological note: the hardest bugs are the ones that match the programmer’s false mental model. Rubber-duck debugging and pair debugging work because they force the model to be spoken and therefore checked.",
        "मनोवैज्ञानिक नोट: सबसे कठिन बग वे हैं जो प्रोग्रामर के गलत मानसिक मॉडल से मेल खाते हैं। Rubber-duck और pair debugging इसलिए काम करते हैं क्योंकि मॉडल बोलना पड़ता है और अतः जाँचा जाता है।",
        "Sabse kathin bugs woh jo programmer ke galat mental model se match karte hain. Rubber-duck/pair debugging isliye chalte hain kyunki model bolna padta hai.",
      ],
    ]),
    TBL(
      [
        ["Approach", "दृष्टिकोण", "Approach"],
        ["Idea", "विचार", "Idea"],
        ["Best when", "कब श्रेष्ठ", "Best when"],
      ],
      [
        [
          ["Brute force", "Brute force", "Brute force"],
          ["Dump / log / watch everything", "Dump / लॉग / सब देखो", "Dump / log / sab dekho"],
          ["No hypothesis yet", "अभी परिकल्पना नहीं", "Abhi hypothesis nahi"],
        ],
        [
          ["Backtracking", "Backtracking", "Backtracking"],
          ["Walk backward from symptom", "लक्षण से पीछे चलो", "Symptom se peeche chalo"],
          ["Small, linear code", "छोटा, रैखिक कोड", "Chhota, linear code"],
        ],
        [
          ["Cause elimination", "Cause elimination", "Cause elimination"],
          ["Kill hypotheses with probes", "Probe से परिकल्पना मारो", "Probe se hypothesis maro"],
          ["Several plausible causes", "कई संभावित कारण", "Kai plausible causes"],
        ],
        [
          ["Deduction / induction", "Deduction / induction", "Deduction / induction"],
          ["Theory ↔ data", "सिद्धांत ↔ डेटा", "Theory ↔ data"],
          ["Well-understood module", "अच्छी समझ वाला मॉड्यूल", "Well-understood module"],
        ],
      ],
    ),
    EXAM(
      "Define debugging vs testing. Explain brute-force, backtracking, cause-elimination (induction) and deduction. State debugging principles (one change at a time, fix the cause, add a regression test). A short note of 5 marks is the usual form.",
      "Debugging बनाम testing परिभाषित करें। Brute-force, backtracking, cause-elimination (induction) और deduction समझाएँ। सिद्धांत (एक समय एक परिवर्तन, कारण ठीक करें, regression टेस्ट जोड़ें)। सामान्य रूप 5 अंक की संक्षिप्त टिप्पणी है।",
      "Debugging vs testing. Brute-force, backtracking, cause-elimination, deduction. Principles: ek change, cause fix, regression test. Usual 5-mark short note.",
    ),
  ]),

  "se-reliability": topic("se-reliability", [
    P(
      "Software reliability is the probability that the software will not cause the failure of a system for a specified time under specified conditions (IEEE). Hardware reliability is about physical wear; software reliability is about residual defects being hit by a particular input trajectory. A program that has run for years can still fail tomorrow on a rare path. Reliability is a user-visible quality attribute and a common NFR (“availability ≥ 99.9%”). It is estimated from failure data using reliability-growth models (Musa, Jelinski–Moranda, Goel–Okumoto) and is improved by removing defects, by fault-tolerance architecture, and by operational-profile-driven testing — not by “more comments”.",
      "सॉफ्टवेयर विश्वसनीयता वह प्रायिकता है कि निर्दिष्ट शर्तों में निर्दिष्ट समय तक सॉफ्टवेयर सिस्टम की विफलता नहीं करेगा (IEEE)। हार्डवेयर विश्वसनीयता भौतिक घिसाव के बारे में है; सॉफ्टवेयर विश्वसनीयता अवशिष्ट दोषों के किसी इनपुट प्रक्षेप पथ पर लगने के बारे में है। वर्षों चला प्रोग्राम कल दुर्लभ पथ पर फेल हो सकता है। विश्वसनीयता उपयोगकर्ता-दृश्य quality attribute और सामान्य NFR है (“उपलब्धता ≥ 99.9%”)। इसका अनुमान विफलता डेटा से reliability-growth मॉडल (Musa, Jelinski–Moranda, Goel–Okumoto) से होता है, और सुधार दोष हटाकर, fault-tolerance architecture से, तथा operational-profile-driven testing से होता है — “अधिक comments” से नहीं।",
      "Software reliability: probability ki specified time/conditions mein software system fail nahi karega (IEEE). Hardware wear; software residual defects kisi input path par hit. Saal chala program kal rare path par fail ho sakta hai. User-visible NFR (availability ≥ 99.9%). Estimate failure data se (Musa etc.). Improve: defects hatao, fault-tolerance, operational-profile testing — “zyada comments” se nahi.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Failure vs fault vs error: error is a human mistake; fault (defect/bug) is the incorrect code/artefact; failure is the incorrect external behaviour. Reliability talks about failures in operation, not about how many bugs remain hidden.",
        "Failure बनाम fault बनाम error: error मानवीय गलती; fault (defect/bug) गलत कोड/artefact; failure गलत बाहरी व्यवहार। विश्वसनीयता संचालन में failures की बात करती है, छुपे बग कितने हैं इसकी नहीं।",
        "Error = human mistake; fault/defect = galat code; failure = galat external behaviour. Reliability operation ki failures, hidden bugs ki ginti nahi.",
      ],
      [
        "MTTF (Mean Time To Failure), MTTR (Mean Time To Repair), MTBF ≈ MTTF + MTTR for repairable systems. Availability A = MTTF / (MTTF + MTTR) = uptime / (uptime + downtime). High availability needs both rare failures and fast recovery.",
        "MTTF (Mean Time To Failure), MTTR (Mean Time To Repair), मरम्मत योग्य सिस्टम पर MTBF ≈ MTTF + MTTR। उपलब्धता A = MTTF / (MTTF + MTTR) = uptime / (uptime + downtime)। उच्च उपलब्धता को दुर्लभ विफलताएँ और तेज recovery दोनों चाहिए।",
        "MTTF, MTTR, MTBF ≈ MTTF+MTTR. Availability A = MTTF/(MTTF+MTTR). High availability = rare failures + fast recovery.",
      ],
      [
        "ROCOF (rate of occurrence of failures) and probability of failure on demand (POFD) are used for continuously running vs on-demand systems (a nuclear trip function is on-demand).",
        "ROCOF (विफलताओं की घटना दर) और probability of failure on demand (POFD) निरंतर चलने वाले बनाम on-demand सिस्टम के लिए (nuclear trip function on-demand है)।",
        "ROCOF continuously running ke liye; POFD on-demand (nuclear trip) ke liye.",
      ],
      [
        "Reliability growth: as faults are found in test/operation and removed, failure intensity λ(t) should fall. Musa’s basic model and logarithmic model relate execution time to remaining failures. Do not confuse calendar time with execution time.",
        "Reliability growth: टेस्ट/संचालन में दोष मिलकर हटने पर failure intensity λ(t) गिरनी चाहिए। Musa का basic और logarithmic मॉडल निष्पादन समय को शेष विफलताओं से जोड़ते हैं। कैलेंडर समय को निष्पादन समय से न मिलाएँ।",
        "Reliability growth: faults nikalne par λ(t) girna chahiye. Musa models execution time ko remaining failures se jodte hain. Calendar ≠ execution time.",
      ],
      [
        "Operational profile (Musa): the probability distribution of how users actually exercise functions. Testing (and reliability claims) must follow this profile, otherwise you polish rare paths and leave the busy ones dirty.",
        "Operational profile (Musa): उपयोगकर्ता वास्तव में functions कैसे चलाते हैं उसका प्रायिकता वितरण। Testing (और विश्वसनीयता दावे) को इस प्रोफ़ाइल का पालन करना चाहिए, नहीं तो दुर्लभ पथ चमकते हैं और व्यस्त गंदे रह जाते हैं।",
        "Operational profile (Musa): users functions kaise chalate hain uski probability. Testing isi profile par; warna rare paths chamakte hain, busy dirty rehte hain.",
      ],
      [
        "Improving reliability: defect prevention (reviews, simpler design), defect removal (testing, V&V), fault tolerance (N-version programming, recovery blocks, graceful degradation, watchdog, redundancy), and conservative operational constraints (limit input domain).",
        "विश्वसनीयता सुधार: दोष रोकथाम (reviews, सरल डिज़ाइन), दोष हटाना (testing, V&V), fault tolerance (N-version, recovery blocks, graceful degradation, watchdog, redundancy), तथा रूढ़िवादी परिचालन बाधाएँ (इनपुट डोमेन सीमित)।",
        "Improve: prevention (reviews, simple design), removal (testing), fault tolerance (N-version, recovery blocks, watchdog, redundancy), input domain limit.",
      ],
      [
        "Reliability ≠ safety ≠ security. A system can be reliable (rarely fails) yet unsafe (the failure mode kills) or insecure (reliably leaks data). Safety and security need extra analysis (hazards, threat models).",
        "विश्वसनीयता ≠ सुरक्षा(safety) ≠ security। सिस्टम विश्वसनीय (कम फेल) पर असुरक्षित (failure mode मारक) या insecure (विश्वसनीय रूप से डेटा लीक) हो सकता है। Safety व security को अतिरिक्त विश्लेषण चाहिए (hazards, threat models)।",
        "Reliability ≠ safety ≠ security. Reliable-but-unsafe (failure maarta hai) ya reliable-but-insecure (reliably leak) ho sakta hai. Extra analysis chahiye.",
      ],
    ]),
    C(
      "text",
      "Availability A = MTTF / (MTTF + MTTR)\nExample: MTTF = 999 hours, MTTR = 1 hour\n        A = 999/1000 = 99.9%",
      [
        "Availability identity used in 2–5 mark numericals.",
        "2–5 अंक संख्यात्मक में प्रयुक्त उपलब्धता सूत्र।",
        "2–5 mark numerical mein availability formula.",
      ],
    ),
    EXAM(
      "Define software reliability (IEEE). Distinguish error/fault/failure. Write MTTF, MTTR, MTBF, availability formula with a numerical. Mention Musa / operational profile / reliability growth in a 5-mark “short note on software reliability”.",
      "सॉफ्टवेयर विश्वसनीयता (IEEE) परिभाषित करें। Error/fault/failure अंतर। MTTF, MTTR, MTBF, उपलब्धता सूत्र संख्यात्मक सहित। 5 अंक “सॉफ्टवेयर विश्वसनीयता पर संक्षिप्त टिप्पणी” में Musa / operational profile / reliability growth उल्लेख करें।",
      "Reliability define (IEEE). Error/fault/failure. MTTF/MTTR/MTBF/A formula + numerical. 5-mark short note mein Musa, operational profile, growth.",
    ),
  ]),

  "se-sqa": topic("se-sqa", [
    P(
      "Software Quality Assurance (SQA) is the organised umbrella of standards, processes, reviews, tests and metrics that gives management confidence the product will meet quality goals. Quality itself, for McCall and ISO, is not one number: it is a set of factors (correctness, reliability, efficiency, integrity, usability, maintainability, flexibility, testability, portability, reusability, interoperability). SQA is process-oriented and organisation-wide; it includes but is not equal to testing. Crosby’s slogan “quality is free” (prevention costs less than rework) and Deming’s idea that quality is built in, not inspected in, are the philosophy. An SQA plan (IEEE 730) names the standards, reviews, tests, tools, problem-reporting flow and the people responsible.",
      "Software Quality Assurance (SQA) मानकों, प्रक्रियाओं, reviews, टेस्टों और मेट्रिक्स का संगठित छत्र है जो प्रबंधन को विश्वास देता है कि उत्पाद गुणवत्ता लक्ष्य पूरे करेगा। McCall और ISO के लिए गुणवत्ता एक संख्या नहीं: कारकों का सेट है (correctness, reliability, efficiency, integrity, usability, maintainability, flexibility, testability, portability, reusability, interoperability)। SQA प्रक्रिया-उन्मुख व संगठन-व्यापी है; testing इसमें शामिल है पर इसके बराबर नहीं। Crosby का नारा “quality is free” (रोकथाम rework से सस्ती) और Deming का विचार कि गुणवत्ता बनाई जाती है, inspect नहीं, दर्शन हैं। SQA plan (IEEE 730) मानक, reviews, टेस्ट, उपकरण, समस्या-रिपोर्ट प्रवाह और जिम्मेदार लोगों का नाम लेता है।",
      "SQA standards, processes, reviews, tests, metrics ka organised umbrella hai jo management ko confidence deta hai. Quality ek number nahi (McCall/ISO factors: correctness, reliability, efficiency, integrity, usability, maintainability, flexibility, testability, portability, reusability, interoperability). SQA process-oriented, org-wide; testing subset hai, barabar nahi. Crosby: quality is free. Deming: built in, not inspected in. SQA plan (IEEE 730) standards, reviews, tests, tools, reporting, roles.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "McCall’s three factor groups: Product operation (correctness, reliability, efficiency, integrity, usability); Product revision (maintainability, flexibility, testability); Product transition (portability, reusability, interoperability). Each factor has criteria and metrics.",
        "McCall के तीन कारक समूह: Product operation (correctness, reliability, efficiency, integrity, usability); Product revision (maintainability, flexibility, testability); Product transition (portability, reusability, interoperability)। प्रत्येक के मानदंड व मेट्रिक्स हैं।",
        "McCall teen groups: Operation (correctness, reliability, efficiency, integrity, usability); Revision (maintainability, flexibility, testability); Transition (portability, reusability, interoperability).",
      ],
      [
        "SQA activities: prepare SQA plan; review of requirements, design, code; participate in test planning; audits of process vs stated procedures; collect and analyse metrics; manage non-conformance (defect reports, corrective action); vendor/subcontractor quality; training.",
        "SQA गतिविधियाँ: SQA plan तैयार; requirements, डिज़ाइन, कोड की समीक्षा; टेस्ट योजना में भाग; कथित प्रक्रियाओं बनाम process के ऑडिट; मेट्रिक्स संग्रह व विश्लेषण; non-conformance प्रबंधन (दोष रिपोर्ट, सुधारात्मक क्रिया); विक्रेता गुणवत्ता; प्रशिक्षण।",
        "SQA activities: SQA plan; reviews; test planning; process audits; metrics; non-conformance (defect reports, CAPA); vendor quality; training.",
      ],
      [
        "Quality vs SQA vs V&V vs testing: quality is the goal (factors); SQA is the organisational system that aims at that goal; V&V are technical evaluations of artefacts/products; testing is dynamic V&V. Keep this ladder straight in answers.",
        "Quality बनाम SQA बनाम V&V बनाम testing: quality लक्ष्य (कारक); SQA वह संगठनात्मक प्रणाली जो लक्ष्य साधती है; V&V artefact/उत्पाद के तकनीकी मूल्यांकन; testing गतिशील V&V। उत्तर में यह सीढ़ी सीधी रखें।",
        "Quality = goal (factors); SQA = organisational system; V&V = technical evaluation; testing = dynamic V&V. Yeh ladder seedhi rakho.",
      ],
      [
        "Cost of quality: prevention (training, process, reviews) + appraisal (testing, inspection) + internal failure (rework before ship) + external failure (field defects, warranty, reputation). SQA shifts money from failure to prevention.",
        "गुणवत्ता लागत: prevention (प्रशिक्षण, process, reviews) + appraisal (testing, inspection) + internal failure (शिप से पहले rework) + external failure (क्षेत्र दोष, warranty, प्रतिष्ठा)। SQA धन failure से prevention की ओर सरकाती है।",
        "Cost of quality: prevention + appraisal + internal failure + external failure. SQA paise failure se prevention ki ore sarkati hai.",
      ],
      [
        "Metrics examples: defect density (defects/KLOC or /FP), review yield, test coverage, escaped defects, MTTF, customer complaints, cyclomatic complexity, coupling/cohesion counts. Metrics without a baseline and a goal are vanity.",
        "मेट्रिक्स उदाहरण: defect density (दोष/KLOC या /FP), review yield, test coverage, escaped defects, MTTF, ग्राहक शिकायतें, cyclomatic complexity, coupling/cohesion गिनती। बिना baseline व लक्ष्य के मेट्रिक्स vanity हैं।",
        "Metrics: defect density, review yield, coverage, escaped defects, MTTF, complaints, cyclomatic, coupling. Bina baseline/goal vanity hain.",
      ],
      [
        "Quality standards that SQA implements: organisational coding standards, IEEE document standards, ISO 9001 quality-management system, CMM/CMMI process maturity. SQA is how those standards actually bite on a project.",
        "SQA जो गुणवत्ता मानक लागू करती है: संगठनात्मक coding standards, IEEE दस्तावेज़ मानक, ISO 9001 quality-management सिस्टम, CMM/CMMI process maturity। SQA वह तरीका है जिससे वे मानक परियोजना पर वास्तव में लागू होते हैं।",
        "SQA jin standards ko implement karti hai: coding standards, IEEE docs, ISO 9001, CMM/CMMI. SQA woh tarika hai jisse standards project par actually lagu hote hain.",
      ],
      [
        "Independence: SQA should have a reporting line that can raise a “do not ship” flag without being overruled by the project manager’s delivery bonus. Otherwise SQA becomes a rubber stamp.",
        "स्वतंत्रता: SQA की रिपोर्टिंग रेखा ऐसी हो कि “शिप न करें” झंडा परियोजना प्रबंधक के delivery बोनस से बिना कुचले उठ सके। नहीं तो SQA रबर स्टांप बन जाता है।",
        "Independence: SQA “do not ship” flag utha sake bina PM ke delivery bonus se kuchle. Warna SQA rubber stamp.",
      ],
    ]),
    EXAM(
      "Define quality and SQA. List McCall’s 11 factors in three groups. List SQA activities and cost-of-quality categories. Distinguish SQA, V&V and testing. IEEE 730 SQA plan headings may be asked.",
      "Quality और SQA परिभाषित करें। McCall के 11 कारक तीन समूहों में। SQA गतिविधियाँ और cost-of-quality श्रेणियाँ। SQA, V&V, testing अंतर। IEEE 730 SQA plan शीर्षक पूछे जा सकते हैं।",
      "Quality aur SQA define. McCall 11 factors teen groups. SQA activities, cost of quality. SQA vs V&V vs testing. IEEE 730 headings.",
    ),
  ]),

  "se-reviews": topic("se-reviews", [
    P(
      "A software review is a human examination of an artefact (SRS, design, code, test plan) against standards and against the author’s claims, with the intent of finding defects as early as possible. Reviews are static SQA: they do not execute the product. Formal Technical Review (FTR) is the umbrella Pressman uses for structured reviews with a process, roles, entry/exit criteria and a written report. Walkthroughs and inspections (Fagan, 1976) sit on this spectrum from informal to highly formal. Empirical data from IBM and others showed inspections removing a large fraction of defects before test, which is why “quality is free”: one hour of review can save many hours of debugging. For BCA, know FTR process, Fagan inspection roles, and the difference from testing.",
      "सॉफ्टवेयर रिव्यू किसी artefact (SRS, डिज़ाइन, कोड, टेस्ट प्लान) की मानकों और लेखक के दावों के विरुद्ध मानवीय जाँच है, दोष यथाशीघ्र ढूँढ़ने के आशय से। Reviews स्थैतिक SQA हैं: उत्पाद नहीं चलाते। Formal Technical Review (FTR) Pressman का छत्र है संरचित reviews के लिए जिनकी प्रक्रिया, भूमिकाएँ, entry/exit मानदंड और लिखित रिपोर्ट होती है। Walkthroughs और inspections (Fagan, 1976) अनौपचारिक से अत्यधिक औपचारिक स्पेक्ट्रम पर बैठते हैं। IBM आदि के अनुभवों ने दिखाया inspections टेस्ट से पहले दोषों का बड़ा अंश हटाती हैं, इसीलिए “quality is free”: रिव्यू का एक घंटा debugging के कई घंटे बचाता है। BCA में FTR प्रक्रिया, Fagan inspection भूमिकाएँ, और testing से अंतर जानें।",
      "Software review artefact ki human examination hai standards aur author ke claims ke against, defects jaldi dhoondhne ke liye. Static SQA — execute nahi. FTR Pressman ka umbrella: process, roles, entry/exit, written report. Walkthroughs aur Fagan inspections informal se formal. IBM data: inspections test se pehle bahut defects hataati hain. BCA: FTR process, Fagan roles, testing se farq.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "FTR objectives: uncover errors in function, logic or implementation; verify the artefact meets requirements; ensure it follows standards; make the project more manageable (progress visible); train juniors; raise status of quality work.",
        "FTR उद्देश्य: function, तर्क या implementation में त्रुटियाँ उजागर; artefact आवश्यकताओं को पूरा करता है सत्यापित; मानकों का पालन; परियोजना अधिक प्रबंधनीय (प्रगति दृश्य); juniors प्रशिक्षण; गुणवत्ता कार्य की प्रतिष्ठा।",
        "FTR objectives: errors uncover; reqs meet; standards; project manageable; juniors train; quality work ki izzat.",
      ],
      [
        "FTR process (typical): plan (select reviewers, schedule, distribute artefact + checklist) → prepare (reviewers work privately, record issues) → meeting (usually ≤ 2 hours, walk the artefact, log defects, no redesign in the room) → report (summary, accept / accept-with-rework / do-not-accept) → rework and follow-up by the producer, verified by the review leader.",
        "FTR प्रक्रिया: योजना (समीक्षक चुनें, अनुसूची, artefact + checklist बाँटें) → तैयारी (समीक्षक निजी काम, मुद्दे दर्ज) → बैठक (प्रायः ≤ 2 घंटे, artefact चलें, दोष लॉग, कमरे में redesign नहीं) → रिपोर्ट (सार, accept / accept-with-rework / do-not-accept) → उत्पादक द्वारा rework व follow-up, रिव्यू नेता सत्यापित।",
        "FTR process: plan → prepare (private, issues) → meeting (≤2 h, log defects, no redesign) → report (accept / rework / reject) → rework + follow-up.",
      ],
      [
        "Roles: producer/author (the creator; answers questions, does not defend ego); review leader / moderator (runs the process, not a boss of the content); recorder/scribe; reviewers (peers, 3–5 typically). Manager may receive the report but often does not sit in, to keep the meeting technical not political.",
        "भूमिकाएँ: producer/author (रचनाकार; प्रश्न उत्तर, अहं रक्षा नहीं); review leader / moderator (प्रक्रिया चलाता, सामग्री का बॉस नहीं); recorder/scribe; reviewers (साथियों, प्रायः 3–5)। प्रबंधक रिपोर्ट पा सकता है पर अक्सर बैठता नहीं, ताकि बैठक तकनीकी रहे राजनीतिक नहीं।",
        "Roles: producer (ego defend nahi), moderator (process, content ka boss nahi), recorder, reviewers (3–5 peers). Manager aksar baithhta nahi — meeting technical rahe.",
      ],
      [
        "Walkthrough: author presents the artefact to peers; less formal, good for training and early feedback; defect detection depends on the author’s honesty and the audience’s alertness. Inspection (Fagan): highly formal, checklists, specified coverage, metrics (defects/page, preparation rate), and a focus on defect finding not solution. Inspections have the strongest published yield.",
        "Walkthrough: लेखक artefact साथियों को प्रस्तुत करता है; कम औपचारिक, प्रशिक्षण व जल्दी फीडबैक के लिए अच्छा; दोष-खोज लेखक की ईमानदारी व श्रोताओं की सतर्कता पर। Inspection (Fagan): अत्यधिक औपचारिक, checklists, निर्दिष्ट coverage, मेट्रिक्स (दोष/पृष्ठ, तैयारी दर), बल समाधान नहीं दोष खोज पर। Inspections की प्रकाशित उपज सबसे मजबूत है।",
        "Walkthrough: author present karta hai; kam formal, training/early feedback. Inspection (Fagan): highly formal, checklists, metrics, defect finding not solution. Inspections ki yield sabse strong.",
      ],
      [
        "Guidelines: review the product not the producer; set an agenda and stay on it; limit debate; record issues in writing; time-box; don’t try to fix in the meeting; take notes on process improvement too. Ego is the main failure mode of reviews.",
        "दिशा-निर्देश: उत्पाद की समीक्षा, उत्पादक की नहीं; एजेंडा तय व टिके; बहस सीमित; मुद्दे लिखें; time-box; बैठक में ठीक करने की कोशिश न करें; प्रक्रिया सुधार के नोट भी। अहं reviews का मुख्य विफलता मोड है।",
        "Guidelines: product review, producer nahi; agenda; limit debate; likh kar record; time-box; meeting mein fix mat karo. Ego main failure mode hai.",
      ],
      [
        "What is reviewed: SRS, architecture, detailed design, code (sometimes sampled), test plans and test cases, user manuals. Code review / pull-request review is the lightweight descendant used in Agile teams.",
        "क्या समीक्षित: SRS, architecture, detailed design, कोड (कभी नमूना), टेस्ट प्लान व टेस्ट केस, उपयोगकर्ता मैनुअल। Code review / pull-request review Agile टीमों में प्रयुक्त हल्का वंशज है।",
        "Kya review: SRS, architecture, detailed design, code, test plans/cases, manuals. PR review Agile ka lightweight descendant.",
      ],
      [
        "Metrics: preparation time per page, meeting rate, defects found per hour, defect density by artefact type, percentage of defects later found in test that escaped review (escape rate). These feed SQA dashboards and CMM evidence.",
        "मेट्रिक्स: प्रति पृष्ठ तैयारी समय, बैठक दर, प्रति घंटा मिले दोष, artefact प्रकार से defect density, टेस्ट में बाद में मिले जो रिव्यू से निकले (escape rate)। ये SQA dashboards और CMM साक्ष्य को खिलाते हैं।",
        "Metrics: prep time/page, meeting rate, defects/hour, density, escape rate. SQA dashboards aur CMM evidence ko feed.",
      ],
    ]),
    EXAM(
      "Define FTR and list its steps and roles. Contrast walkthrough vs inspection (Fagan). Give 4 guidelines (“review the product, not the producer”). Explain why reviews are cheaper than testing for many defects. A 5–8 mark staple.",
      "FTR परिभाषित कर चरण व भूमिकाएँ लिखें। Walkthrough बनाम inspection (Fagan)। 4 दिशा-निर्देश (“उत्पाद की समीक्षा, उत्पादक की नहीं”)। कई दोषों के लिए reviews testing से सस्ते क्यों। 5–8 अंक का स्थायी प्रश्न।",
      "FTR define, steps, roles. Walkthrough vs Fagan inspection. 4 guidelines. Reviews testing se saste kyun. 5–8 mark staple.",
    ),
  ]),

  "se-scm": topic("se-scm", [
    P(
      "Software Configuration Management (SCM) is the discipline of identifying the configuration of a system at distinct points in time, controlling changes to that configuration, and maintaining integrity and traceability throughout the life cycle. A configuration is a consistent set of software items (code, SRS, design, test cases, compilers, make files, user manuals) that belong together. Without SCM you cannot answer “what exactly did we ship on 12 March?”, two programmers overwrite each other, and a bug fixed in one copy reappears from another. SCM is not just Git: Git is a version-control tool; SCM is the process of identification, control, status accounting and audit, with baselines and a Change Control Board.",
      "Software Configuration Management (SCM) सिस्टम की configuration को विभिन्न समय बिंदुओं पर पहचानने, उसमें परिवर्तन नियंत्रित करने, और जीवनचक्र भर अखंडता व traceability बनाए रखने का अनुशासन है। Configuration सॉफ्टवेयर वस्तुओं (कोड, SRS, डिज़ाइन, टेस्ट केस, compilers, make files, उपयोगकर्ता मैनुअल) का संगत सेट है जो साथ हैं। SCM के बिना “12 मार्च को हमने ठीक-ठीक क्या भेजा?” का उत्तर नहीं, दो प्रोग्रामर एक-दूसरे पर लिख देते हैं, और एक प्रति में ठीक बग दूसरी से लौट आता है। SCM केवल Git नहीं: Git version-control उपकरण है; SCM पहचान, नियंत्रण, status accounting और ऑडिट की प्रक्रिया है, baselines व Change Control Board के साथ।",
      "SCM: configuration ko time points par identify, changes control, integrity/traceability life cycle bhar. Configuration = consistent set (code, SRS, design, tests, compilers, manuals). Bina SCM: kya ship hua 12 March? do programmers overwrite, bug wapas. SCM sirf Git nahi — Git tool hai; SCM process hai: identification, control, status accounting, audit, baselines, CCB.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Software Configuration Item (SCI / CI): any artefact placed under SCM — a module, a document, a tool version. Identification gives each CI a unique name and version (e.g. SRS-LIB-1.2). The configuration is a named set of CI versions.",
        "Software Configuration Item (SCI / CI): SCM के अधीन कोई भी artefact — मॉड्यूल, दस्तावेज़, उपकरण संस्करण। Identification प्रत्येक CI को अद्वितीय नाम व संस्करण (जैसे SRS-LIB-1.2)। Configuration CI संस्करणों का नामांकित सेट है।",
        "SCI/CI: SCM ke neeche koi bhi artefact. Identification: unique name+version (SRS-LIB-1.2). Configuration = named set of CI versions.",
      ],
      [
        "Baseline (IEEE): a specification or product that has been formally reviewed and agreed upon, that thereafter serves as the basis for further development, and that can be changed only through formal change control. Typical baselines: functional (SRS), allocated (design), product (code + tests ready to ship).",
        "Baseline (IEEE): एक विनिर्देश या उत्पाद जो औपचारिक रूप से समीक्षित व सहमत है, आगे के विकास का आधार बनता है, और केवल औपचारिक change control से बदल सकता है। विशिष्ट baselines: functional (SRS), allocated (design), product (कोड + टेस्ट शिप-तैयार)।",
        "Baseline (IEEE): formally reviewed+agreed spec/product, further development ka basis, sirf formal change control se badle. Typical: functional (SRS), allocated (design), product (code+tests).",
      ],
      [
        "Four SCM activities (classic): (1) Identification; (2) Version / change control; (3) Configuration status accounting (who changed what, when, why — the ledger); (4) Configuration audit (does the CI match its spec, and do we have the right set to build the product?).",
        "चार SCM गतिविधियाँ: (1) Identification; (2) Version / change control; (3) Configuration status accounting (किसने क्या, कब, क्यों बदला — खाता); (4) Configuration audit (क्या CI अपनी spec से मेल खाता है, और क्या उत्पाद बनाने का सही सेट है?)।",
        "Chaar activities: identification; version/change control; status accounting (kaun, kya, kab, kyun); configuration audit (CI spec se match? sahi set hai build ke liye?).",
      ],
      [
        "Change control flow: change request → impact analysis → CCB (approve / reject / defer) → check-out CI → modify → review / test → check-in new version → update baseline if required → notify. Uncontrolled “hot fixes” on production are how configurations rot.",
        "Change control प्रवाह: change request → प्रभाव विश्लेषण → CCB (approve / reject / defer) → CI check-out → संशोधन → review / test → नया संस्करण check-in → जरूरत हो तो baseline अद्यतन → सूचित। उत्पादन पर अनियंत्रित “hot fixes” से configuration सड़ती है।",
        "Change flow: request → impact → CCB → check-out → modify → review/test → check-in → baseline update → notify. Uncontrolled hot fixes se configuration sadti hai.",
      ],
      [
        "Version vs revision vs variant: versions along time (1.0, 1.1, 2.0); variants for different environments (Windows vs Linux build of the same version). Branches and tags in Git implement this. Release is a baseline delivered to customers.",
        "Version बनाम revision बनाम variant: समय के साथ versions (1.0, 1.1, 2.0); विभिन्न वातावरणों के लिए variants (उसी version की Windows बनाम Linux बिल्ड)। Git में branches व tags इसे लागू करते हैं। Release ग्राहकों को दिया baseline है।",
        "Versions time ke saath (1.0, 1.1); variants environments ke liye (Windows vs Linux). Git branches/tags. Release = customer ko diya baseline.",
      ],
      [
        "Tools: version control (Git, SVN), issue trackers linked to commits, CI servers that build a known configuration, artefact repositories (Nexus, packages). The tool does not replace the CCB for significant changes.",
        "उपकरण: version control (Git, SVN), commits से जुड़े issue trackers, ज्ञात configuration बनाने वाले CI सर्वर, artefact repositories। महत्वपूर्ण परिवर्तनों के लिए उपकरण CCB की जगह नहीं लेता।",
        "Tools: Git/SVN, issue trackers, CI servers, artefact repos. Tool significant changes ke liye CCB ki jagah nahi leta.",
      ],
      [
        "Audits: functional configuration audit (FCA) — does the product do what the SRS says? Physical configuration audit (PCA) — is every listed CI present at the right version in the release package (including the compiler version)? Shipping the wrong DLL is an SCM failure, not a coding failure.",
        "ऑडिट: functional configuration audit (FCA) — क्या उत्पाद SRS जो कहता है करता है? Physical configuration audit (PCA) — क्या रिलीज़ पैकेज में हर सूचीबद्ध CI सही संस्करण पर है (compiler संस्करण सहित)? गलत DLL भेजना SCM विफलता है, कोडिंग की नहीं।",
        "FCA: product SRS ke hisaab se karta hai? PCA: release package mein har CI sahi version (compiler bhi)? Galat DLL bhejna SCM failure hai, coding ki nahi.",
      ],
    ]),
    EXAM(
      "Define SCM, SCI and baseline. List four SCM activities. Draw or describe change control through a CCB. Distinguish version/variant/release and FCA vs PCA. “What is a baseline?” is a very common 2-mark question.",
      "SCM, SCI और baseline परिभाषित करें। चार SCM गतिविधियाँ। CCB से change control वर्णन। Version/variant/release तथा FCA बनाम PCA अंतर। “Baseline क्या है?” अत्यंत सामान्य 2 अंक प्रश्न है।",
      "SCM, SCI, baseline define. Chaar activities. CCB change control. Version/variant/release, FCA vs PCA. “Baseline kya hai?” bahut common 2-mark.",
    ),
  ]),

  "se-iso-cmm": topic("se-iso-cmm", [
    P(
      "ISO 9000 (for software, typically ISO 9001 applied via ISO 9000-3 / later ISO/IEC 90003 guidance) is a generic quality-management-system standard: document what you do, do what you document, and prove it with records. The Capability Maturity Model (CMM), developed at the Software Engineering Institute (SEI, Carnegie Mellon) under Watts Humphrey and colleagues, is a five-level model of how mature an organisation’s software process is. CMM (and its successor CMMI) is software-specific and staged; ISO 9001 is a certification you pass/fail. Indian examiners want the five CMM levels with key process areas, the idea of ISO 9001 clauses, and a comparison table (ISO vs CMM). Neither certificate by itself ships quality software — they constrain the process that produces it.",
      "ISO 9000 (सॉफ्टवेयर के लिए प्रायः ISO 9001, ISO 9000-3 / बाद में ISO/IEC 90003 मार्गदर्शन से लागू) सामान्य quality-management-system मानक है: जो करते हो लिखो, जो लिखा है करो, अभिलेखों से सिद्ध करो। Capability Maturity Model (CMM), Software Engineering Institute (SEI, Carnegie Mellon) में Watts Humphrey व सहयोगियों द्वारा, संगठन की सॉफ्टवेयर प्रक्रिया कितनी परिपक्व है इसके पाँच स्तरों का मॉडल है। CMM (और उत्तराधिकारी CMMI) सॉफ्टवेयर-विशिष्ट व चरणबद्ध है; ISO 9001 pass/fail प्रमाणन है। भारतीय परीक्षक पाँच CMM स्तर key process areas सहित, ISO 9001 clauses का विचार, और तुलना तालिका (ISO बनाम CMM) चाहते हैं। कोई भी प्रमाणपत्र अकेले गुणवत्ता सॉफ्टवेयर नहीं भेजता — वे उसे बनाने वाली प्रक्रिया बाधित करते हैं।",
      "ISO 9000/9001 generic QMS: jo karte ho likho, jo likha hai karo, records se prove. CMM SEI (Carnegie Mellon, Watts Humphrey) ka 5-level model — organisation ki software process kitni mature. CMM/CMMI software-specific staged; ISO 9001 pass/fail certificate. Exam: 5 CMM levels + KPAs, ISO idea, ISO vs CMM table. Certificate khud quality software nahi bhejta — process constrain karta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "CMM Level 1 Initial: ad-hoc, heroic, success depends on individuals. Process is unpredictable. (Also called chaotic.)",
        "CMM Level 1 Initial: ad-hoc, वीर, सफलता व्यक्तियों पर। प्रक्रिया अप्रत्याशित। (Chaotic भी कहा जाता है।)",
        "Level 1 Initial: ad-hoc, heroic, individuals par success. Process unpredictable (chaotic).",
      ],
      [
        "Level 2 Repeatable: basic project management in place — requirements management, project planning, tracking, subcontract management, SQA, SCM. Similar projects can repeat earlier successes. Process discipline at the project level.",
        "Level 2 Repeatable: मूल परियोजना प्रबंधन — requirements management, परियोजना योजना, ट्रैकिंग, subcontract management, SQA, SCM। समान परियोजनाएँ पहले की सफलता दोहरा सकती हैं। परियोजना स्तर पर प्रक्रिया अनुशासन।",
        "Level 2 Repeatable: basic PM — RM, planning, tracking, subcontract, SQA, SCM. Similar projects success repeat. Project-level discipline.",
      ],
      [
        "Level 3 Defined: the organisation has a standard process (OSSP) that projects tailor. Training programme, integrated software management, software product engineering, intergroup coordination, peer reviews. Process is documented, standardised and integrated.",
        "Level 3 Defined: संगठन की मानक प्रक्रिया (OSSP) जिसे परियोजनाएँ tailor करती हैं। प्रशिक्षण कार्यक्रम, एकीकृत सॉफ्टवेयर प्रबंधन, software product engineering, अंतरसमूह समन्वय, peer reviews। प्रक्रिया दस्तावेजी, मानकीकृत, एकीकृत।",
        "Level 3 Defined: organisational standard process (OSSP) jo projects tailor karte hain. Training, integrated SM, product engineering, intergroup, peer reviews. Documented, standardised, integrated.",
      ],
      [
        "Level 4 Managed (Quantitatively Managed in CMMI): quantitative quality and process goals; software quality management; quantitative process management. Measurements are used to control the process statistically.",
        "Level 4 Managed (CMMI में Quantitatively Managed): मात्रात्मक गुणवत्ता व प्रक्रिया लक्ष्य; software quality management; quantitative process management। माप प्रक्रिया को सांख्यिकीय नियंत्रण में रखते हैं।",
        "Level 4 Managed/Quantitatively Managed: quantitative quality/process goals, SQM, QPM. Measurements se statistical control.",
      ],
      [
        "Level 5 Optimizing: continuous process improvement from quantitative feedback and from piloting innovative ideas. Defect prevention, technology change management, process change management. The organisation learns as a system.",
        "Level 5 Optimizing: मात्रात्मक फीडबैक और नवाचारी विचारों के पायलट से निरंतर प्रक्रिया सुधार। दोष रोकथाम, technology change management, process change management। संगठन एक प्रणाली के रूप में सीखता है।",
        "Level 5 Optimizing: continuous improvement, quantitative feedback, pilots. Defect prevention, technology/process change management. Organisation system ki tarah seekhti hai.",
      ],
      [
        "ISO 9001 essence for software: quality policy and objectives, documented procedures, management review, contract review, design control, document/data control, product identification (this is SCM), inspection/test, corrective/preventive action, internal audit, training, statistical techniques. Certification is by an external body; it is binary at a moment in time.",
        "सॉफ्टवेयर के लिए ISO 9001 सार: गुणवत्ता नीति व उद्देश्य, दस्तावेजी प्रक्रियाएँ, प्रबंधन समीक्षा, अनुबंध समीक्षा, डिज़ाइन नियंत्रण, दस्तावेज़/डेटा नियंत्रण, उत्पाद पहचान (यह SCM है), inspection/test, सुधारात्मक/निवारक क्रिया, आंतरिक ऑडिट, प्रशिक्षण, सांख्यिकीय तकनीकें। प्रमाणन बाहरी निकाय से; किसी समय बिंदु पर द्विआधारी।",
        "ISO 9001: quality policy, documented procedures, management review, contract review, design control, document control, product ID (SCM), inspection/test, CAPA, internal audit, training, statistics. External certification, binary.",
      ],
      [
        "ISO vs CMM: ISO is generic (any industry) and pass/fail; CMM is software (or systems, in CMMI) and staged 1–5. ISO maps roughly onto CMM Level 2–3 practices; you can be ISO certified and still CMM Level 1 if the documented process is not actually used, or CMM Level 3 without ISO if you never hired a certifying body. CMMI adds continuous representation (capability levels 0–5 per process area) besides the staged 1–5.",
        "ISO बनाम CMM: ISO सामान्य (किसी भी उद्योग) और pass/fail; CMM सॉफ्टवेयर (CMMI में सिस्टम) और चरणबद्ध 1–5। ISO मोटे तौर पर CMM Level 2–3 प्रथाओं पर मैप; ISO certified होकर भी CMM 1 हो सकते हैं यदि दस्तावेजी प्रक्रिया वास्तव में न चले, या बिना ISO के CMM 3 यदि प्रमाणक न रखा। CMMI staged 1–5 के अलावा continuous representation (प्रत्येक process area पर capability 0–5) जोड़ता है।",
        "ISO vs CMM: ISO generic pass/fail; CMM software staged 1–5. ISO ~ Level 2–3. ISO certified + CMM 1 possible agar docs use na hon. CMMI staged ke saath continuous capability levels bhi.",
      ],
    ]),
    TBL(
      [
        ["CMM level", "CMM स्तर", "CMM level"],
        ["Name", "नाम", "Name"],
        ["Focus", "फोकस", "Focus"],
      ],
      [
        [
          ["1", "1", "1"],
          ["Initial", "Initial", "Initial"],
          ["Heroics, ad-hoc", "वीरता, ad-hoc", "Heroics, ad-hoc"],
        ],
        [
          ["2", "2", "2"],
          ["Repeatable", "Repeatable", "Repeatable"],
          ["Project management, SCM, SQA", "परियोजना प्रबंधन, SCM, SQA", "Project management, SCM, SQA"],
        ],
        [
          ["3", "3", "3"],
          ["Defined", "Defined", "Defined"],
          ["Organisational standard process", "संगठनात्मक मानक प्रक्रिया", "Organisational standard process"],
        ],
        [
          ["4", "4", "4"],
          ["Managed", "Managed", "Managed"],
          ["Quantitative control", "मात्रात्मक नियंत्रण", "Quantitative control"],
        ],
        [
          ["5", "5", "5"],
          ["Optimizing", "Optimizing", "Optimizing"],
          ["Continuous improvement", "निरंतर सुधार", "Continuous improvement"],
        ],
      ],
    ),
    EXAM(
      "List five CMM levels with one-line focus and 2–3 KPAs for levels 2 and 3. Explain ISO 9001 in software (document–do–prove). Compare ISO 9000 and CMM (generic vs specific, pass/fail vs staged, mapping to levels). Mention SEI, Humphrey, CMMI as bonus.",
      "पाँच CMM स्तर एक पंक्ति फोकस सहित तथा स्तर 2 व 3 के 2–3 KPA। सॉफ्टवेयर में ISO 9001 (document–do–prove)। ISO 9000 और CMM तुलना। बोनस के रूप में SEI, Humphrey, CMMI।",
      "Paanch CMM levels + KPAs (2 aur 3). ISO 9001 document-do-prove. ISO vs CMM. SEI, Humphrey, CMMI bonus.",
    ),
  ]),

  "se-risk": topic("se-risk", [
    P(
      "Risk is a potential problem — something that may happen and if it does, will cause loss (schedule, cost, quality, market, safety). Risk management is the systematic process of identifying those potential problems, analysing their probability and impact, ranking them, planning mitigation or contingency, and monitoring residual risk. Boehm made risk the driver of the Spiral model; Pressman treats risk management as a project-management activity with a risk table (or register). Unmanaged risk is how “surprise” project failures are manufactured. The formula examiners love is Risk Exposure RE = Probability × Impact (or P × C, cost). A cheap mitigation that cuts a high RE is almost always a good buy.",
      "जोखिम एक संभावित समस्या है — कुछ जो हो सकता है और यदि हुआ तो हानि करेगा (अनुसूची, लागत, गुणवत्ता, बाजार, सुरक्षा)। जोखिम प्रबंधन उन संभावित समस्याओं को पहचानने, उनकी प्रायिकता व प्रभाव का विश्लेषण, रैंकिंग, mitigation या contingency की योजना, और अवशिष्ट जोखिम की निगरानी की व्यवस्थित प्रक्रिया है। Boehm ने जोखिम को Spiral मॉडल का चालक बनाया; Pressman जोखिम प्रबंधन को risk table (या register) वाली परियोजना-प्रबंधन गतिविधि मानते हैं। अप्रबंधित जोखिम से “आकस्मिक” परियोजना असफलताएँ बनती हैं। परीक्षकों का प्रिय सूत्र Risk Exposure RE = Probability × Impact (या P × C)। उच्च RE काटने वाला सस्ता mitigation प्रायः अच्छी खरीद है।",
      "Risk potential problem hai — ho sakta hai, hua to loss (schedule, cost, quality, market, safety). Risk management: identify, analyse probability+impact, rank, mitigate/contingency plan, residual monitor. Boehm ne Spiral ka driver banaya; Pressman risk table. Unmanaged risk se “surprise” failures. Formula: RE = P × Impact. High RE kaatne wala sasta mitigation almost always acchi kharid.",
    ),
    H("Key points", "मुख्य बिंदु", "Mukhya points"),
    UL([
      [
        "Risk categories (Pressman / Boehm): project risks (budget, schedule, staffing), technical risks (technology, quality, design), business risks (market, management, budget cut, building the wrong product), and sometimes known vs unknown vs unknowable. Safety-critical work adds hazard risks.",
        "जोखिम श्रेणियाँ (Pressman / Boehm): परियोजना जोखिम (बजट, अनुसूची, स्टाफिंग), तकनीकी जोखिम (तकनीक, गुणवत्ता, डिज़ाइन), व्यवसाय जोखिम (बाजार, प्रबंधन, बजट कट, गलत उत्पाद बनाना), कभी ज्ञात बनाम अज्ञात बनाम अज्ञेय। सुरक्षा-महत्वपूर्ण कार्य hazard जोखिम जोड़ता है।",
        "Categories: project (budget, schedule, staffing), technical (tech, quality, design), business (market, management, wrong product). Safety-critical par hazards.",
      ],
      [
        "Identification techniques: checklists (Boehm’s top-10: personnel shortfalls, unrealistic schedules, developing the wrong functions, gold-plating, …), brainstorming, assumption analysis, Delphi, lessons-learned from past projects, risk taxonomies (SEI).",
        "पहचान तकनीकें: checklists (Boehm के top-10: personnel कमी, अवास्तविक अनुसूचियाँ, गलत functions, gold-plating, …), brainstorming, assumption analysis, Delphi, पिछली परियोजनाओं के पाठ, risk taxonomies (SEI)।",
        "Identification: checklists (Boehm top-10: personnel shortfalls, unrealistic schedules, wrong functions, gold-plating), brainstorming, assumptions, Delphi, past lessons, SEI taxonomy.",
      ],
      [
        "Analysis: qualitative (high/medium/low probability and impact, risk matrix) and quantitative (RE = P × C, decision trees, sometimes Monte Carlo on the schedule). Prioritise by RE or by a combined exposure/urgency ranking.",
        "विश्लेषण: गुणात्मक (उच्च/मध्यम/निम्न प्रायिकता व प्रभाव, risk matrix) और मात्रात्मक (RE = P × C, decision trees, कभी अनुसूची पर Monte Carlo)। RE या संयुक्त रैंकिंग से प्राथमिकता।",
        "Analysis: qualitative (H/M/L matrix) aur quantitative (RE = P×C, decision trees, Monte Carlo). Prioritise by RE.",
      ],
      [
        "Mitigation (risk avoidance / reduction): change the plan so the risk is less likely or less painful — extra staff, prototype the risky technology, buy a component instead of building, simplify scope, train, add reviews. This is proactive.",
        "Mitigation (जोखिम परिहार / कमी): योजना बदलें ताकि जोखिम कम संभावित या कम दर्दनाक हो — अतिरिक्त स्टाफ, जोखिमपूर्ण तकनीक का prototype, बनाने की जगह घटक खरीद, scope सरल, प्रशिक्षण, reviews। यह सक्रिय है।",
        "Mitigation: plan badlo taaki risk kam likely ya kam painful — extra staff, prototype, kharid vs banao, scope simple, train, reviews. Proactive.",
      ],
      [
        "Contingency (risk transfer / acceptance with a plan): if it happens, here is the fallback — backup vendor, extra buffer, insurance, rollback procedure. A contingency plan without a trigger (“we will know it when we see it”) is theatre.",
        "Contingency (हस्तांतरण / योजना सहित स्वीकृति): यदि हुआ तो यह fallback — बैकअप विक्रेता, अतिरिक्त बफर, बीमा, rollback प्रक्रिया। बिना trigger के contingency plan (“देख कर पता चलेगा”) नाटक है।",
        "Contingency: agar ho to fallback — backup vendor, buffer, insurance, rollback. Bina trigger ke plan natak hai.",
      ],
      [
        "Monitoring: a risk register with owner, next review date, indicators (risk drivers) that warn the risk is materialising, and status (open / mitigated / occurred / retired). Spiral revisits this every cycle; Agile teams inspect risks in retrospectives and sprint planning.",
        "निगरानी: स्वामी, अगली समीक्षा तिथि, संकेतक (risk drivers) जो चेताएँ कि जोखिम साकार हो रहा, और स्थिति (open / mitigated / occurred / retired) वाला risk register। Spiral प्रत्येक चक्र इसे दोहराता है; Agile टीमें retrospectives व sprint planning में जोखिम देखती हैं।",
        "Monitoring: risk register with owner, next review, indicators, status. Spiral har cycle; Agile retro aur sprint planning mein.",
      ],
      [
        "RMMM (Pressman): Risk Mitigation, Monitoring and Management plan — a document that records the above for the top N risks. Keep N small (10–20); a 200-row register nobody reads is not management.",
        "RMMM (Pressman): Risk Mitigation, Monitoring and Management plan — शीर्ष N जोखिमों के लिए उपरोक्त दर्ज दस्तावेज़। N छोटा रखें (10–20); 200-पंक्ति का register जिसे कोई न पढ़े प्रबंधन नहीं।",
        "RMMM: Risk Mitigation, Monitoring, Management plan — top N risks. N chhota (10–20); 200-row register jo koi na padhe management nahi.",
      ],
    ]),
    C(
      "text",
      "Risk Exposure RE = P * C\nExample: P(key person quits) = 0.3\n         C = 8 extra person-weeks to ramp a replacement\n         RE = 0.3 * 8 = 2.4 person-weeks\nMitigation (cross-train) costs 1 person-week and halves P → new RE = 0.15*8 = 1.2; net saving 1.2 − 1 = 0.2 plus reduced schedule risk.",
      [
        "RE numerical pattern used in 2–5 mark questions.",
        "2–5 अंक प्रश्नों में प्रयुक्त RE संख्यात्मक पैटर्न।",
        "2–5 mark questions mein RE numerical pattern.",
      ],
    ),
    EXAM(
      "Define risk and RE = P × C with a numerical. List identification, analysis, mitigation, contingency, monitoring. Name Boehm’s top risks and RMMM. Relate to the Spiral model. A 8–10 mark question may ask you to fill a risk table for a stated project.",
      "जोखिम और RE = P × C संख्यात्मक सहित परिभाषित करें। Identification, analysis, mitigation, contingency, monitoring लिखें। Boehm के शीर्ष जोखिम और RMMM। Spiral मॉडल से जोड़ें। 8–10 अंक में दिए प्रोजेक्ट की risk table भरने को कहा जा सकता है।",
      "Risk define, RE = P×C numerical. Identification, analysis, mitigation, contingency, monitoring. Boehm top risks, RMMM, Spiral. 8–10 mark mein risk table.",
    ),
  ]),
};

export const seQuestions: QuizQuestion[] = [
  Q(
    "se-q-evolving-role",
    "se-evolving-role",
    [
      "Pressman describes a dual role of software. Software is a product that transforms information, and also a:",
      "Pressman सॉफ्टवेयर की द्वैत भूमिका बताते हैं। सॉफ्टवेयर सूचना रूपांतरित करने वाला उत्पाद है, और साथ ही एक:",
      "Pressman dual role of software batate hain. Software information transform karne wala product hai, aur saath hi ek:",
    ],
    [
      [
        "Vehicle for delivering the product (OS, networks, tools)",
        "उत्पाद पहुँचाने का वाहन (OS, networks, tools)",
        "Product deliver karne ka vehicle (OS, networks, tools)",
      ],
      [
        "Replacement for all hardware devices",
        "सभी हार्डवेयर उपकरणों का प्रतिस्थापन",
        "Saare hardware devices ka replacement",
      ],
      [
        "Marketing campaign for CASE vendors",
        "CASE विक्रेताओं का विपणन अभियान",
        "CASE vendors ka marketing campaign",
      ],
      [
        "Legal contract that never changes",
        "कानूनी अनुबंध जो कभी नहीं बदलता",
        "Legal contract jo kabhi nahi badalta",
      ],
    ],
    0,
    [
      "The dual role is: (1) product — an information transformer; (2) vehicle — the basis for controlling computers, communicating and creating other programs. Hardware replacement is not a role; software runs on hardware.",
      "द्वैत भूमिका: (1) उत्पाद — सूचना रूपांतरक; (2) वाहन — कंप्यूटर नियंत्रण, संचार और अन्य प्रोग्राम बनाने का आधार। हार्डवेयर प्रतिस्थापन भूमिका नहीं; सॉफ्टवेयर हार्डवेयर पर चलता है।",
      "Dual role: product (information transformer) aur vehicle (OS/networks/tools). Hardware replacement role nahi.",
    ],
  ),
  Q(
    "se-q-changing-nature",
    "se-changing-nature",
    [
      "Which category of software typically has hard real-time constraints, limited memory and safety standards such as ISO 26262?",
      "सॉफ्टवेयर की कौन-सी श्रेणी में कठोर real-time बाधाएँ, सीमित memory और ISO 26262 जैसे सुरक्षा मानक होते हैं?",
      "Kaunsi category mein hard real-time constraints, limited memory aur ISO 26262 jaise safety standards hote hain?",
    ],
    [
      [
        "Web/mobile applications",
        "Web/mobile अनुप्रयोग",
        "Web/mobile applications",
      ],
      [
        "Embedded software",
        "Embedded software",
        "Embedded software",
      ],
      [
        "Legacy COBOL information systems",
        "Legacy COBOL सूचना सिस्टम",
        "Legacy COBOL information systems",
      ],
      [
        "Engineering/scientific batch simulations",
        "Engineering/scientific बैच simulations",
        "Engineering/scientific batch simulations",
      ],
    ],
    1,
    [
      "Embedded software lives in devices (ABS, pacemakers, appliances). Real-time, memory and safety dominate. Web apps emphasise security/UX; legacy emphasises maintainability; scientific software emphasises numerical accuracy.",
      "Embedded software उपकरणों में रहता है (ABS, पेसमेकर)। Real-time, memory और सुरक्षा प्रधान। Web सुरक्षा/UX; legacy maintainability; वैज्ञानिक संख्यात्मक सटीकता पर बल देते हैं।",
      "Embedded devices mein rehta hai — real-time, memory, safety. Web = UX/security; legacy = maintainability; scientific = numerical accuracy.",
    ],
  ),
  Q(
    "se-q-evolution",
    "se-evolution",
    [
      "The term Software Engineering and the documentation of the software crisis are associated with which events?",
      "Software Engineering शब्द और software crisis का दस्तावेजीकरण किन घटनाओं से जुड़ा है?",
      "Software Engineering term aur software crisis ka documentation kin events se juda hai?",
    ],
    [
      [
        "Agile Manifesto meeting, Snowbird 2001",
        "Agile Manifesto बैठक, Snowbird 2001",
        "Agile Manifesto meeting, Snowbird 2001",
      ],
      [
        "NATO conferences at Garmisch (1968) and Rome (1969)",
        "Garmisch (1968) और Rome (1969) के NATO सम्मेलन",
        "NATO conferences Garmisch 1968 aur Rome 1969",
      ],
      [
        "Release of UML 1.0 by OMG in 1997",
        "1997 में OMG द्वारा UML 1.0 रिलीज़",
        "OMG ne 1997 mein UML 1.0 release kiya",
      ],
      [
        "Publication of COCOMO II in 1981",
        "1981 में COCOMO II का प्रकाशन",
        "1981 mein COCOMO II publication",
      ],
    ],
    1,
    [
      "NATO Science Committee conferences (Garmisch 1968, Rome 1969) coined Software Engineering and recorded late, over-budget, unreliable projects. Agile is 2001; UML 1997; COCOMO 81 is 1981 (COCOMO II is late 1990s).",
      "NATO सम्मेलनों (Garmisch 1968, Rome 1969) ने Software Engineering शब्द गढ़ा। Agile 2001; UML 1997; COCOMO 81 वर्ष 1981 (COCOMO II 1990 के अंत) है।",
      "NATO 1968–69. Agile 2001, UML 1997, COCOMO 81 = 1981 (COCOMO II late 1990s).",
    ],
  ),
  Q(
    "se-q-characteristics",
    "se-characteristics",
    [
      "Unlike hardware, software does not wear out. Software failure-rate tends to rise again mainly because:",
      "हार्डवेयर के विपरीत सॉफ्टवेयर घिसता नहीं। सॉफ्टवेयर failure-rate फिर उठती है मुख्यतः क्योंकि:",
      "Hardware ke ulta software wear nahi hota. Failure-rate phir uthti hai mukhya taur par kyunki:",
    ],
    [
      [
        "Bits oxidise in RAM after a few years",
        "कुछ वर्षों बाद RAM में bits ऑक्सीकृत होते हैं",
        "Kuch saal baad RAM mein bits oxidise ho jaate hain",
      ],
      [
        "Changes and patches inject new defects (saw-tooth / inverted-bathtub curve)",
        "परिवर्तन और पैच नए दोष डालते हैं (saw-tooth / inverted-bathtub वक्र)",
        "Changes aur patches naye defects daalte hain (saw-tooth / inverted-bathtub)",
      ],
      [
        "The CPU clock slows as the program ages",
        "प्रोग्राम के बूढ़े होने पर CPU घड़ी धीमी होती है",
        "Program budha hone par CPU clock slow ho jaati hai",
      ],
      [
        "Spare-part warehouses run out of identical modules",
        "Spare-part गोदामों में समान मॉड्यूल खत्म हो जाते हैं",
        "Spare-part warehouses mein identical modules khatam ho jaate hain",
      ],
    ],
    1,
    [
      "Software does not corrode; residual defects plus modifications that inject new faults cause the failure-rate curve to spike. Hardware has a bathtub curve due to wear-out. There are no spare modules to swap.",
      "सॉफ्टवेयर क्षरित नहीं होता; अवशिष्ट दोष और संशोधन जो नए दोष डालते हैं failure-rate उछालते हैं। हार्डवेयर घिसाव से bathtub वक्र दिखाता है। बदलने को spare मॉड्यूल नहीं।",
      "Software corrode nahi karta; residual defects + modifications naye faults daalte hain. Hardware wear-out se bathtub. Spare modules nahi hote.",
    ],
  ),
  Q(
    "se-q-sdlc",
    "se-sdlc",
    [
      "In a generic SDLC, which statement is correct?",
      "सामान्य SDLC में कौन-सा कथन सही है?",
      "Generic SDLC mein kaunsa statement sahi hai?",
    ],
    [
      [
        "SDLC is one named model, identical to Waterfall",
        "SDLC एक नामित मॉडल है, Waterfall के समान",
        "SDLC ek named model hai, Waterfall ke barabar",
      ],
      [
        "SDLC is the set of life-cycle activities; a process model (Waterfall, Spiral, Agile) is a strategy for arranging them",
        "SDLC जीवनचक्र गतिविधियों का सेट है; process model (Waterfall, Spiral, Agile) उन्हें सजाने की रणनीति है",
        "SDLC activities ka set hai; process model unhe sajane ki strategy hai",
      ],
      [
        "Maintenance is optional because software does not wear out",
        "Maintenance वैकल्पिक है क्योंकि सॉफ्टवेयर घिसता नहीं",
        "Maintenance optional hai kyunki software wear nahi hota",
      ],
      [
        "Construction must invent new requirements not in the SRS",
        "Construction को SRS में न आई नई आवश्यकताएँ गढ़नी चाहिए",
        "Construction ko SRS mein nahi mili nayi requirements ghadni chahiye",
      ],
    ],
    1,
    [
      "SDLC names the activities (communication, planning, modelling, construction, deployment/maintenance). Waterfall/Spiral/Agile are process models that sequence those activities. Maintenance often consumes 50–80% of cost even though software does not wear.",
      "SDLC गतिविधियाँ नाम देती है। Waterfall/Spiral/Agile process models उन्हें क्रम देते हैं। सॉफ्टवेयर न घिसने पर भी maintenance प्रायः लागत का 50–80% खाती है।",
      "SDLC = activities; Waterfall/Spiral/Agile = models. Maintenance 50–80% cost khaati hai chahe wear na ho.",
    ],
  ),
  Q(
    "se-q-waterfall",
    "se-waterfall",
    [
      "A pure Waterfall model is most appropriate when:",
      "शुद्ध Waterfall मॉडल सबसे उपयुक्त है जब:",
      "Pure Waterfall model sabse suitable hai jab:",
    ],
    [
      [
        "Requirements are well understood, technology is stable, and the specification can be frozen",
        "आवश्यकताएँ सुस्पष्ट हैं, तकनीक स्थिर है, और विनिर्देश फ्रीज हो सकता है",
        "Requirements clear hain, technology stable hai, spec freeze ho sakta hai",
      ],
      [
        "The customer will know the UI only after seeing several running versions",
        "ग्राहक UI तभी जानेगा जब कई चलते संस्करण देखे",
        "Customer UI tab jaanega jab kai running versions dekhe",
      ],
      [
        "Technical risk is high and must be resolved with prototypes each cycle",
        "तकनीकी जोखिम अधिक है और प्रत्येक चक्र प्रोटोटाइप से हल करना है",
        "Technical risk high hai aur har cycle prototype se resolve karna hai",
      ],
      [
        "The team wants to deliver a usable core product in increment 1",
        "टीम increment 1 में उपयोगी core product देना चाहती है",
        "Team increment 1 mein usable core product dena chahti hai",
      ],
    ],
    0,
    [
      "Waterfall is linear and document-driven; it fits stable, well-specified work (compilers, fixed-spec embedded). Unclear UI → prototype; high risk → spiral; usable chunks → incremental.",
      "Waterfall रैखिक व document-driven; स्थिर, सुविनिर्दिष्ट कार्य पर ठीक। अस्पष्ट UI → prototype; उच्च जोखिम → spiral; उपयोगी टुकड़े → incremental।",
      "Waterfall stable spec par. Unclear UI → prototype; high risk → spiral; usable chunks → incremental.",
    ],
  ),
  Q(
    "se-q-vmodel",
    "se-vmodel",
    [
      "In the V-model, high-level (architectural) design maps to which test level?",
      "V-model में high-level (architectural) design किस टेस्ट स्तर से मैप होता है?",
      "V-model mein high-level (architectural) design kis test level se map hota hai?",
    ],
    [
      ["Unit testing", "Unit testing", "Unit testing"],
      ["Integration testing", "Integration testing", "Integration testing"],
      ["Acceptance testing", "Acceptance testing", "Acceptance testing"],
      ["Mutation testing", "Mutation testing", "Mutation testing"],
    ],
    1,
    [
      "Mapping: detailed/module design ↔ unit; high-level/architecture ↔ integration; system requirements ↔ system testing; user requirements ↔ acceptance. Mutation testing is a white-box technique, not a V-model level.",
      "मैपिंग: detailed/module design ↔ unit; high-level/architecture ↔ integration; system requirements ↔ system; user requirements ↔ acceptance। Mutation white-box तकनीक है, V-model स्तर नहीं।",
      "HLD/architecture ↔ integration; detailed design ↔ unit; SRS ↔ system; user req ↔ acceptance.",
    ],
  ),
  Q(
    "se-q-prototype",
    "se-prototype",
    [
      "A throwaway (rapid) prototype should be discarded after evaluation mainly because:",
      "मूल्यांकन के बाद throwaway (rapid) prototype त्याग देना चाहिए मुख्यतः क्योंकि:",
      "Evaluation ke baad throwaway prototype phenk dena chahiye mukhya taur par kyunki:",
    ],
    [
      [
        "Customers are never allowed to see unfinished software",
        "ग्राहकों को अधूरा सॉफ्टवेयर देखने की अनुमति नहीं",
        "Customers ko adhoora software dekhne nahi milta",
      ],
      [
        "It usually ignores NFRs such as performance, security and maintainability that the real product must have",
        "यह प्रायः performance, security, maintainability जैसे NFR अनदेखा करता है जो वास्तविक उत्पाद में होने चाहिए",
        "Yeh aksar performance, security, maintainability jaise NFR ignore karta hai jo real product mein hone chahiye",
      ],
      [
        "IEEE 830 forbids any executable model before the SRS is signed",
        "IEEE 830 SRS हस्ताक्षर से पहले किसी executable मॉडल को मना करता है",
        "IEEE 830 SRS sign se pehle executable model mana karta hai",
      ],
      [
        "Evolutionary prototypes are illegal in India",
        "भारत में evolutionary prototypes अवैध हैं",
        "India mein evolutionary prototypes illegal hain",
      ],
    ],
    1,
    [
      "Rapid prototypes are learning vehicles built with dummy data/4GLs. Reusing that code as the product ships a system whose quality attributes were never designed. Evolutionary prototypes, by contrast, are grown into the product on a solid architecture.",
      "Rapid prototypes dummy डेटा/4GL से सीखने के वाहन हैं। उस कोड को उत्पाद बना देना उन quality attributes को छोड़ देता है जो डिज़ाइन नहीं हुए। Evolutionary prototypes ठोस architecture पर उत्पाद बनते हैं।",
      "Throwaway seekhne ke liye hota hai, NFR ignore. Usko ship mat karo. Evolutionary solid architecture par product ban jaata hai.",
    ],
  ),
  Q(
    "se-q-rad",
    "se-rad",
    [
      "RAD is a poor choice when:",
      "RAD खराब चुनाव है जब:",
      "RAD bura choice hai jab:",
    ],
    [
      [
        "Reusable GUI and database components exist and the system can be modularised",
        "Reusable GUI व database components हैं और सिस्टम मॉड्यूलर हो सकता है",
        "Reusable GUI aur DB components hain aur system modular ho sakta hai",
      ],
      [
        "The application is a 60–90 day information-system time box with a committed customer team",
        "अनुप्रयोग 60–90 दिन के information-system time box में प्रतिबद्ध ग्राहक टीम के साथ है",
        "Application 60–90 day information-system time box hai committed customer team ke saath",
      ],
      [
        "Technical risk is high, the system cannot be modularised, or performance needs careful hand-tuning",
        "तकनीकी जोखिम अधिक है, सिस्टम मॉड्यूलर नहीं हो सकता, या performance को सावधानीपूर्ण hand-tuning चाहिए",
        "Technical risk high hai, system modular nahi ho sakta, ya performance ko hand-tuning chahiye",
      ],
      [
        "Business, data and process modelling have already been done",
        "Business, data और process modelling पहले हो चुके हैं",
        "Business, data aur process modelling pehle ho chuke hain",
      ],
    ],
    2,
    [
      "James Martin’s RAD needs modularisable systems, reusable components, and a committed customer in a short time box. High technical risk, novel technology, safety-critical kernels and non-modular systems are listed constraints against RAD.",
      "James Martin के RAD को मॉड्यूलर सिस्टम, reusable components, और छोटे time box में प्रतिबद्ध ग्राहक चाहिए। उच्च तकनीकी जोखिम, नई तकनीक, सुरक्षा-महत्वपूर्ण कर्नेल और गैर-मॉड्यूलर सिस्टम RAD के विरुद्ध बाधाएँ हैं।",
      "RAD: modular, reusable, short time box. High technical risk, novel tech, non-modular, performance-critical — RAD mat use karo.",
    ],
  ),
  Q(
    "se-q-incremental",
    "se-incremental",
    [
      "In the incremental model, the first delivery is typically:",
      "Incremental मॉडल में पहली delivery प्रायः होती है:",
      "Incremental model mein pehli delivery typically hoti hai:",
    ],
    [
      [
        "A throwaway UI mock-up with no working functions",
        "बिना कार्यशील functions का throwaway UI mock-up",
        "Bina working functions ka throwaway UI mock-up",
      ],
      [
        "A core product that implements basic operational requirements, with later increments adding features",
        "एक core product जो मूल परिचालन आवश्यकताएँ लागू करता है, बाद के increments features जोड़ते हैं",
        "Ek core product jo basic operational requirements implement karta hai, later increments features jodte hain",
      ],
      [
        "The complete system after a single Waterfall pass",
        "एक Waterfall पास के बाद पूरा सिस्टम",
        "Ek Waterfall pass ke baad poora system",
      ],
      [
        "Only the risk-analysis report of Spiral quadrant 2",
        "केवल Spiral quadrant 2 की risk-analysis रिपोर्ट",
        "Sirf Spiral quadrant 2 ki risk-analysis report",
      ],
    ],
    1,
    [
      "Increment 1 is a usable core (e.g. library issue/return). Later increments add catalogues, alerts, analytics. Internally each increment is Waterfall-like; across increments you get iterative delivery. That is not a throwaway prototype and not a single Big-Bang Waterfall.",
      "Increment 1 उपयोगी core है (जैसे issue/return)। बाद में catalogues, alerts। आंतरिक रूप से प्रत्येक increment Waterfall-जैसा; आर-पार iterative delivery। Throwaway prototype या एक Big-Bang Waterfall नहीं।",
      "Inc 1 usable core. Baad mein features. Andar Waterfall-like; bahar iterative. Throwaway ya ek Waterfall nahi.",
    ],
  ),
  Q(
    "se-q-spiral",
    "se-spiral",
    [
      "Barry Boehm’s Spiral model is best described as:",
      "Barry Boehm का Spiral मॉडल श्रेष्ठतः वर्णित है:",
      "Barry Boehm ka Spiral model best describe hota hai:",
    ],
    [
      [
        "A purely linear sequence with no risk activity",
        "बिना जोखिम गतिविधि का शुद्ध रैखिक क्रम",
        "Bina risk activity ka purely linear sequence",
      ],
      [
        "A risk-driven evolutionary model whose each loop has four quadrants: objectives, risk analysis, engineering, next-cycle planning",
        "जोखिम-चालित evolutionary मॉडल जिसके प्रत्येक लूप में चार quadrant: objectives, risk analysis, engineering, next-cycle planning",
        "Risk-driven evolutionary model jiske har loop mein chaar quadrants: objectives, risk analysis, engineering, next-cycle planning",
      ],
      [
        "A 60-day RAD time box using only 4GLs",
        "केवल 4GL वाला 60-दिन RAD time box",
        "Sirf 4GL wala 60-day RAD time box",
      ],
      [
        "Kruchten’s 4+1 view of UML architecture",
        "UML architecture का Kruchten 4+1 view",
        "UML architecture ka Kruchten 4+1 view",
      ],
    ],
    1,
    [
      "Spiral (Boehm 1986/88): angular progress through a cycle, radial growth of cost/product, four quadrants per loop, risk first-class (often resolved by prototypes). Waterfall is linear; RAD is a short component-based time box; 4+1 is a UML view model.",
      "Spiral (Boehm 1986/88): चक्र में कोणीय प्रगति, लागत/उत्पाद की त्रिज्यीय वृद्धि, प्रति लूप चार quadrant, जोखिम प्रथम श्रेणी। Waterfall रैखिक; RAD छोटा component time box; 4+1 UML view है।",
      "Spiral = risk-driven, 4 quadrants, angular vs radial. Waterfall linear; RAD time box; 4+1 UML views.",
    ],
  ),
  Q(
    "se-q-evolutionary",
    "se-evolutionary",
    [
      "Incremental, spiral and evolutionary prototyping all belong to the evolutionary family. They differ mainly in:",
      "Incremental, spiral और evolutionary prototyping सभी evolutionary परिवार में हैं। वे मुख्यतः इसमें भिन्न हैं:",
      "Incremental, spiral aur evolutionary prototyping sab evolutionary family mein hain. Weh mukhya taur par isme alag hain:",
    ],
    [
      [
        "Whether they produce executable software",
        "क्या वे executable सॉफ्टवेयर बनाते हैं",
        "Kya weh executable software banate hain",
      ],
      [
        "The control mechanism: pre-planned feature slices vs risk-chosen next step vs customer-driven growth of the running system",
        "नियंत्रण तंत्र: पूर्व-नियोजित feature स्लाइस बनाम जोखिम-चुना अगला कदम बनाम चलते सिस्टम की ग्राहक-चालित वृद्धि",
        "Control: pre-planned feature slices vs risk-chosen next step vs customer-driven growth of running system",
      ],
      [
        "Whether IEEE 830 can be used",
        "क्या IEEE 830 उपयोग हो सकता है",
        "Kya IEEE 830 use ho sakta hai",
      ],
      [
        "The programming language they require",
        "वे जिस प्रोग्रामिंग भाषा की माँग करते हैं",
        "Weh jo programming language maangte hain",
      ],
    ],
    1,
    [
      "All evolutionary models deliver something executable and learn from it. Incremental partitions a planned requirement set; spiral picks the next work to kill the current highest risk; evolutionary prototyping grows the running system from user feedback. Language and SRS templates are independent.",
      "सभी evolutionary कुछ executable देकर सीखते हैं। Incremental नियोजित requirement सेट बाँटता है; spiral वर्तमान सबसे बड़े जोखिम को मारने वाला काम चुनता है; evolutionary prototyping उपयोगकर्ता फीडबैक से चलता सिस्टम बढ़ाता है।",
      "Sab executable dete hain. Incremental = planned slices; spiral = highest risk; evolutionary prototype = customer feedback se grow. Language/SRS independent.",
    ],
  ),
  Q(
    "se-q-agile",
    "se-agile",
    [
      "Which is one of the four values of the Agile Manifesto (2001)?",
      "Agile Manifesto (2001) के चार मूल्यों में से एक कौन-सा है?",
      "Agile Manifesto (2001) ki chaar values mein se ek kaunsi hai?",
    ],
    [
      [
        "Comprehensive documentation over working software",
        "कार्यशील सॉफ्टवेयर पर व्यापक documentation",
        "Working software par comprehensive documentation",
      ],
      [
        "Following a plan over responding to change",
        "परिवर्तन की प्रतिक्रिया पर योजना का पालन",
        "Responding to change par following a plan",
      ],
      [
        "Customer collaboration over contract negotiation",
        "अनुबंध negotiation पर customer collaboration",
        "Contract negotiation par customer collaboration",
      ],
      [
        "Processes and tools over individuals and interactions",
        "व्यक्तियों और अंतःक्रियाओं पर processes and tools",
        "Individuals and interactions par processes and tools",
      ],
    ],
    2,
    [
      "The four values prefer the left items: individuals and interactions; working software; customer collaboration; responding to change — over processes/tools, comprehensive docs, contract negotiation, and following a plan. The right-hand items still have value.",
      "चार मूल्य बाईं वस्तुओं को प्राथमिकता: individuals and interactions; working software; customer collaboration; responding to change — processes/tools, व्यापक docs, अनुबंध negotiation, और योजना पालन पर। दाईं वस्तुओं का भी मूल्य है।",
      "Values LEFT ko prefer: individuals, working software, customer collaboration, responding to change. Right side ki bhi value hai, left zyada.",
    ],
  ),
  Q(
    "se-q-req-gathering",
    "se-req-gathering",
    [
      "FAST (Facilitated Application Specification Technique) is primarily:",
      "FAST (Facilitated Application Specification Technique) मुख्यतः है:",
      "FAST (Facilitated Application Specification Technique) mukhya taur par hai:",
    ],
    [
      [
        "A COCOMO cost-driver rating table",
        "एक COCOMO cost-driver रेटिंग तालिका",
        "Ek COCOMO cost-driver rating table",
      ],
      [
        "A controlled workshop of customers and developers with a facilitator to elicit requirements",
        "आवश्यकताएँ निकालने के लिए facilitator वाली ग्राहकों व डेवलपर्स की नियंत्रित कार्यशाला",
        "Requirements nikalne ke liye facilitator wali customers aur developers ki controlled workshop",
      ],
      [
        "A white-box path-coverage criterion",
        "एक white-box path-coverage मानदंड",
        "Ek white-box path-coverage criterion",
      ],
      [
        "The fourth quadrant of the Spiral model",
        "Spiral मॉडल का चौथा quadrant",
        "Spiral model ka chautha quadrant",
      ],
    ],
    1,
    [
      "FAST/JAD are elicitation workshops: a facilitator, agenda and rules bring customers and developers together to specify the application. Not a COCOMO table, not a coverage metric, not a spiral quadrant.",
      "FAST/JAD elicitation कार्यशालाएँ हैं: facilitator, एजेंडा, नियम ग्राहकों व डेवलपर्स को अनुप्रयोग निर्दिष्ट करने लाते हैं। COCOMO तालिका, coverage मेट्रिक या spiral quadrant नहीं।",
      "FAST/JAD elicitation workshops hain. COCOMO, coverage, spiral quadrant nahi.",
    ],
  ),
  Q(
    "se-q-feasibility",
    "se-feasibility",
    [
      "NPV, ROI and payback period are tools mainly used to judge:",
      "NPV, ROI और payback period मुख्यतः किसे आंकने के उपकरण हैं?",
      "NPV, ROI aur payback period mukhya taur par kise judge karne ke tools hain?",
    ],
    [
      ["Technical feasibility", "Technical feasibility", "Technical feasibility"],
      ["Economic feasibility", "Economic feasibility", "Economic feasibility"],
      ["Schedule feasibility only", "केवल Schedule feasibility", "Sirf schedule feasibility"],
      ["Cyclomatic complexity", "Cyclomatic complexity", "Cyclomatic complexity"],
    ],
    1,
    [
      "Economic (cost–benefit) feasibility uses Payback, NPV, ROI, break-even. Technical feasibility uses spikes/prototypes/skill inventories. Schedule compares a rough estimate to a hard date. Cyclomatic complexity is a white-box metric.",
      "Economic (लागत–लाभ) feasibility Payback, NPV, ROI, break-even उपयोग करती है। Technical spikes/prototypes; schedule मोटे अनुमान बनाम कठोर तिथि। Cyclomatic white-box मेट्रिक है।",
      "Economic feasibility = NPV, ROI, payback. Technical = spikes; schedule = estimate vs date; cyclomatic = white-box metric.",
    ],
  ),
  Q(
    "se-q-req-validation",
    "se-req-validation",
    [
      "A requirement that cannot have a test written for it fails which validation check?",
      "जिस requirement के लिए टेस्ट नहीं लिखा जा सकता, वह कौन-सी validation जाँच फेल करती है?",
      "Jis requirement ke liye test nahi likha ja sakta, woh kaunsi validation check fail karti hai?",
    ],
    [
      ["Verifiability", "Verifiability", "Verifiability"],
      ["Fan-in", "Fan-in", "Fan-in"],
      ["Organic mode", "Organic mode", "Organic mode"],
      ["Physical configuration audit", "Physical configuration audit", "Physical configuration audit"],
    ],
    0,
    [
      "Classic validation checks: validity, consistency, completeness, realism, verifiability (testability). If you cannot invent a pass/fail test, rewrite the requirement (especially vague NFRs). Fan-in is a design metric; organic is a COCOMO mode; PCA is an SCM audit.",
      "क्लासिक validation जाँच: validity, consistency, completeness, realism, verifiability (testability)। Pass/fail टेस्ट न बने तो requirement फिर लिखें। Fan-in डिज़ाइन मेट्रिक; organic COCOMO मोड; PCA SCM ऑडिट है।",
      "Verifiability = testable. Validity/consistency/completeness/realism bhi checks hain. Fan-in design, organic COCOMO, PCA SCM.",
    ],
  ),
  Q(
    "se-q-req-management",
    "se-req-management",
    [
      "Requirements creep is best defined as:",
      "Requirements creep श्रेष्ठतः परिभाषित है:",
      "Requirements creep best define hota hai:",
    ],
    [
      [
        "Uncontrolled growth of customer scope without approved change control",
        "स्वीकृत change control के बिना ग्राहक scope की अनियंत्रित वृद्धि",
        "Approved change control ke bina customer scope ki uncontrolled growth",
      ],
      [
        "The developer adding unrequested “nice” features (gold-plating)",
        "डेवलपर द्वारा न माँगी “अच्छी” features जोड़ना (gold-plating)",
        "Developer bina maange “nice” features jodna (gold-plating)",
      ],
      [
        "The VAF formula in Function Point counting",
        "Function Point गिनती का VAF सूत्र",
        "Function Point counting ka VAF formula",
      ],
      [
        "A CMM Level-5 optimizing KPA",
        "CMM Level-5 optimizing KPA",
        "CMM Level-5 optimizing KPA",
      ],
    ],
    0,
    [
      "Creep = unplanned growth of customer scope. Gold-plating = developers adding extras nobody asked for. Both destroy estimates; both need change control and a CCB. They are related but not the same.",
      "Creep = ग्राहक scope की अनियोजित वृद्धि। Gold-plating = डेवलपर बिना माँगे extras। दोनों अनुमान तोड़ते हैं; दोनों को change control/CCB चाहिए। संबंधित पर एक नहीं।",
      "Creep = customer scope unplanned growth. Gold-plating = developer extras. Dono alag; dono ko CCB chahiye.",
    ],
  ),
  Q(
    "se-q-func-nfr",
    "se-func-nfr",
    [
      "“95th-percentile search response ≤ 1.5 s for a catalogue of 10 lakh titles” is:",
      "“10 लाख शीर्षकों की catalogue पर 95th-percentile खोज प्रतिक्रिया ≤ 1.5 s” है:",
      "“10 lakh titles ki catalogue par 95th-percentile search ≤ 1.5 s” hai:",
    ],
    [
      [
        "A functional requirement (what the system does)",
        "एक functional requirement (सिस्टम क्या करता है)",
        "Ek functional requirement (system kya karta hai)",
      ],
      [
        "A measurable product NFR (performance)",
        "एक मापने योग्य product NFR (performance)",
        "Ek measurable product NFR (performance)",
      ],
      [
        "An organisational NFR about the Java version",
        "Java संस्करण के बारे में organisational NFR",
        "Java version ke baare mein organisational NFR",
      ],
      [
        "A domain requirement from double-entry bookkeeping",
        "Double-entry bookkeeping से domain requirement",
        "Double-entry bookkeeping se domain requirement",
      ],
    ],
    1,
    [
      "It states how well a function must perform, with a number and a load — a product NFR (performance/“ility”). An FR would be “the system shall search the catalogue”. Organisational NFRs are process/implementation constraints; domain requirements come from the application field’s rules.",
      "यह बताता है function कितनी अच्छी तरह चले, संख्या व भार सहित — product NFR (performance)। FR होता “सिस्टम catalogue खोजे”। Organisational NFR प्रक्रिया/implementation बाधाएँ; domain field के नियम।",
      "Yeh HOW WELL hai, number ke saath — product NFR. FR hota “search catalogue”. Organisational = process; domain = field rules.",
    ],
  ),
  Q(
    "se-q-user-system",
    "se-user-system",
    [
      "User requirements are written primarily for customers/end-users in natural language. System requirements are:",
      "User requirements मुख्यतः ग्राहकों/अंत-उपयोगकर्ताओं के लिए प्राकृतिक भाषा में लिखी जाती हैं। System requirements हैं:",
      "User requirements customers/end-users ke liye natural language mein. System requirements hain:",
    ],
    [
      [
        "The same text with the word “user” replaced by “system”",
        "वही पाठ जिसमें “user” की जगह “system” हो",
        "Wahi text jisme “user” ki jagah “system” ho",
      ],
      [
        "Detailed, structured specifications (still WHAT, not HOW) that designers and testers contract against",
        "विस्तृत, संरचित विनिर्देश (अभी भी WHAT, HOW नहीं) जिनके विरुद्ध डिज़ाइनर व टेस्टर अनुबंध करते हैं",
        "Detailed, structured specs (ab bhi WHAT, HOW nahi) jinke against designers aur testers contract karte hain",
      ],
      [
        "Java class diagrams dumped into the SRS introduction",
        "SRS परिचय में डाले Java class diagrams",
        "SRS introduction mein daale Java class diagrams",
      ],
      [
        "Only non-functional requirements",
        "केवल non-functional requirements",
        "Sirf non-functional requirements",
      ],
    ],
    1,
    [
      "Two levels of the same story: user reqs for non-specialists (services and constraints); system reqs for developers (detailed functions, interfaces, quantified NFRs) — still WHAT, not algorithms. Mixing levels is a standard SRS fault.",
      "एक कहानी के दो स्तर: गैर-विशेषज्ञों के लिए user reqs; डेवलपर्स के लिए system reqs (विस्तृत functions, interfaces, मात्राबद्ध NFR) — अभी WHAT, एल्गोरिद्म नहीं। स्तर मिलाना SRS दोष है।",
      "User = customer language; system = detailed WHAT for developers. Design/SQL dump mat karo. Sirf NFR nahi.",
    ],
  ),
  Q(
    "se-q-srs",
    "se-srs",
    [
      "Which is NOT a characteristic of a good SRS as per IEEE 830?",
      "IEEE 830 के अनुसार अच्छे SRS की विशेषता कौन-सी नहीं है?",
      "IEEE 830 ke anusaar acche SRS ki characteristic kaunsi NAHI hai?",
    ],
    [
      ["Unambiguous and verifiable", "Unambiguous और verifiable", "Unambiguous aur verifiable"],
      ["Complete, consistent and traceable", "Complete, consistent और traceable", "Complete, consistent aur traceable"],
      ["Ranked for importance and stability", "महत्व व स्थिरता में क्रमित", "Importance aur stability mein ranked"],
      [
        "Includes a full detailed design and the project budget",
        "पूर्ण विस्तृत डिज़ाइन और परियोजना बजट शामिल करता है",
        "Poora detailed design aur project budget include karta hai",
      ],
    ],
    3,
    [
      "IEEE characteristics: correct, unambiguous, complete, consistent, ranked, verifiable, modifiable, traceable. SRS should NOT contain project plans, cost, or detailed design (those belong in SPMP/SDS).",
      "IEEE विशेषताएँ: correct, unambiguous, complete, consistent, ranked, verifiable, modifiable, traceable। SRS में परियोजना योजना, लागत, विस्तृत डिज़ाइन नहीं (वे SPMP/SDS में)।",
      "Good SRS: unambiguous, complete, consistent, ranked, verifiable, traceable. Design aur budget SRS mein nahi — SPMP/SDS mein.",
    ],
  ),
  Q(
    "se-q-design-concepts",
    "se-design-concepts",
    [
      "Information hiding, as stated by Parnas (1972), means a module should:",
      "Parnas (1972) के अनुसार information hiding का अर्थ है मॉड्यूल को:",
      "Parnas (1972) ke anusaar information hiding ka matlab module ko:",
    ],
    [
      [
        "Hide a design secret (data structure, hardware interface, policy) behind a stable interface",
        "डिज़ाइन रहस्य (data structure, हार्डवेयर interface, नीति) को स्थिर interface के पीछे छुपाना",
        "Design secret (data structure, hardware interface, policy) ko stable interface ke peeche chhupana",
      ],
      [
        "Encrypt the source so reviewers cannot read it",
        "स्रोत एन्क्रिप्ट करना ताकि समीक्षक पढ़ न सकें",
        "Source encrypt karna taaki reviewers padh na saken",
      ],
      [
        "Use as many global variables as possible",
        "जितने हो सकें global variables उपयोग करना",
        "Jitne ho saken global variables use karna",
      ],
      [
        "Maximise content coupling with its neighbours",
        "पड़ोसियों से content coupling अधिकतम करना",
        "Padosiyon se content coupling maximum karna",
      ],
    ],
    0,
    [
      "Parnas: each module hides a secret; change of the secret stays inside. That is the root of encapsulation and of high cohesion / low coupling. Encryption of source, globals and content coupling are the opposite of hiding.",
      "Parnas: प्रत्येक मॉड्यूल एक रहस्य छुपाए; रहस्य का परिवर्तन भीतर रहे। यही encapsulation और high cohesion / low coupling की जड़। स्रोत एन्क्रिप्शन, globals और content coupling विपरीत हैं।",
      "Parnas: module ek secret chhupaye, change andar rahe. Encryption/globals/content coupling ulta hai.",
    ],
  ),
  Q(
    "se-q-design-process",
    "se-design-process",
    [
      "Which design output is decided earliest because it realises NFRs and is expensive to change later?",
      "कौन-सा डिज़ाइन आउटपुट सबसे पहले तय होता है क्योंकि वह NFR साकार करता है और बाद में बदलना महंगा है?",
      "Kaunsa design output sabse pehle decide hota hai kyunki woh NFR realise karta hai aur baad mein badalna mehnga hai?",
    ],
    [
      ["Architectural design", "Architectural design", "Architectural design"],
      ["A single module’s PDL only", "केवल एक मॉड्यूल का PDL", "Sirf ek module ka PDL"],
      ["Javadoc comments", "Javadoc comments", "Javadoc comments"],
      ["The gold-plating list", "Gold-plating सूची", "Gold-plating list"],
    ],
    0,
    [
      "Architectural design (major subsystems, styles such as layered/MVC/client–server, deployment) comes first. Data, interface and component-level design follow. PDL is detailed design of one module — late and local.",
      "Architectural design (प्रमुख subsystems, layered/MVC/client–server, deployment) पहले आता है। Data, interface, component-level बाद में। PDL एक मॉड्यूल का detailed design — देर व स्थानीय।",
      "Architecture pehle: subsystems, styles, deployment. Data/interface/component baad mein. PDL late/local hai.",
    ],
  ),
  Q(
    "se-q-fo-design",
    "se-fo-design",
    [
      "Transform analysis in structured design is used when the DFD has:",
      "Structured design में transform analysis तब उपयोग होती है जब DFD में हो:",
      "Structured design mein transform analysis tab use hoti hai jab DFD mein ho:",
    ],
    [
      [
        "A clear input stream, a central transform (the essence), and an output stream",
        "स्पष्ट इनपुट धारा, central transform (सार), और आउटपुट धारा",
        "Clear input stream, central transform (essence), aur output stream",
      ],
      [
        "A single transaction centre that dispatches deposit/withdraw/enquiry paths",
        "एक transaction centre जो deposit/withdraw/enquiry पथ dispatch करे",
        "Ek transaction centre jo deposit/withdraw/enquiry paths dispatch kare",
      ],
      [
        "Only UML sequence diagrams and no DFD",
        "केवल UML sequence diagrams, कोई DFD नहीं",
        "Sirf UML sequence diagrams, koi DFD nahi",
      ],
      [
        "Content coupling as the design goal",
        "डिज़ाइन लक्ष्य के रूप में content coupling",
        "Design goal ke roop mein content coupling",
      ],
    ],
    0,
    [
      "Transform analysis: afferent (input) / central transform / efferent (output) → a boss module calling in-control, transform, out-control. Transaction analysis is the dispatcher case (many action types). Both produce a structure chart from a DFD.",
      "Transform analysis: afferent / central transform / efferent → boss मॉड्यूल in-control, transform, out-control बुलाता है। Transaction analysis dispatcher मामला (कई क्रिया प्रकार)। दोनों DFD से structure chart बनाते हैं।",
      "Transform = input–essence–output pipeline. Transaction = dispatcher (kai action types). Dono DFD se structure chart.",
    ],
  ),
  Q(
    "se-q-dfd",
    "se-dfd",
    [
      "A DFD differs from a flowchart because a DFD:",
      "DFD flowchart से भिन्न है क्योंकि DFD:",
      "DFD flowchart se alag hai kyunki DFD:",
    ],
    [
      [
        "Shows data movement among processes, stores and entities, with no control loops or decision diamonds",
        "Processes, stores और entities के बीच डेटा गति दिखाता है, नियंत्रण loops या decision diamonds के बिना",
        "Processes, stores, entities ke beech data movement dikhata hai, control loops ya decision diamonds ke bina",
      ],
      [
        "Is identical to a Gantt chart of the project schedule",
        "परियोजना अनुसूची के Gantt chart के समान है",
        "Project schedule ke Gantt chart ke barabar hai",
      ],
      [
        "Must include the programming language of each process",
        "प्रत्येक process की प्रोग्रामिंग भाषा शामिल करनी चाहिए",
        "Har process ki programming language include karni chahiye",
      ],
      [
        "Allows a source to connect directly to a sink without a process",
        "बिना process के source को सीधे sink से जोड़ने देता है",
        "Bina process ke source ko seedha sink se jodne deta hai",
      ],
    ],
    0,
    [
      "DFD = data flow, not control sequence. Balancing: parent boundary flows appear on the child. Illegal: unnamed flows, source-to-sink without a process, flowchart diamonds. Gantt is scheduling; language is a design/implementation choice.",
      "DFD = डेटा प्रवाह, नियंत्रण क्रम नहीं। Balancing: parent सीमा के flows बच्चे पर। अवैध: बिना नाम flows, बिना process source-to-sink, flowchart हीरे। Gantt अनुसूची है।",
      "DFD data movement, control nahi. Balancing rule. Source-to-sink bina process illegal. Gantt scheduling hai.",
    ],
  ),
  Q(
    "se-q-modularity",
    "se-modularity",
    [
      "The best (most desirable) forms of cohesion and coupling are:",
      "Cohesion और coupling के सर्वोत्तम (सबसे वांछनीय) रूप हैं:",
      "Cohesion aur coupling ke best (sabse desirable) forms hain:",
    ],
    [
      [
        "Coincidental cohesion and content coupling",
        "Coincidental cohesion और content coupling",
        "Coincidental cohesion aur content coupling",
      ],
      [
        "Functional cohesion and data (or message) coupling",
        "Functional cohesion और data (या message) coupling",
        "Functional cohesion aur data (ya message) coupling",
      ],
      [
        "Logical cohesion and common (global) coupling",
        "Logical cohesion और common (global) coupling",
        "Logical cohesion aur common (global) coupling",
      ],
      [
        "Temporal cohesion and stamp coupling",
        "Temporal cohesion और stamp coupling",
        "Temporal cohesion aur stamp coupling",
      ],
    ],
    1,
    [
      "Goal: HIGH cohesion, LOW coupling. Cohesion best → worst: functional > sequential > communicational > procedural > temporal > logical > coincidental. Coupling best → worst: data/message > stamp > control > common > content. Content coupling (poking another module’s internals) is the worst.",
      "लक्ष्य: HIGH cohesion, LOW coupling। Cohesion सर्वोत्तम functional; सबसे खराब coincidental। Coupling सर्वोत्तम data/message; सबसे खराब content।",
      "High cohesion, low coupling. Best: functional + data/message. Worst: coincidental + content.",
    ],
  ),
  Q(
    "se-q-ooad",
    "se-ooad",
    [
      "Composition differs from aggregation because composition:",
      "Composition aggregation से भिन्न है क्योंकि composition:",
      "Composition aggregation se alag hai kyunki composition:",
    ],
    [
      [
        "Is an is-a relation drawn with a triangle",
        "त्रिभुज से खींचा is-a संबंध है",
        "Triangle se khincha is-a relation hai",
      ],
      [
        "Implies exclusive ownership and coincident lifetime of the part with the whole (filled diamond)",
        "अनन्य स्वामित्व और भाग का पूरे के साथ संपाती जीवनकाल दर्शाता है (भरा हीरा)",
        "Exclusive ownership aur part ka whole ke saath coincident lifetime (filled diamond)",
      ],
      [
        "Is always implemented with global variables",
        "हमेशा global variables से लागू होता है",
        "Hamesha global variables se implement hota hai",
      ],
      [
        "Forbids multiplicity on association ends",
        "Association सिरों पर multiplicity मना करता है",
        "Association ends par multiplicity mana karta hai",
      ],
    ],
    1,
    [
      "Both aggregation (hollow diamond) and composition (filled) are has-a. Composition: exclusive ownership, parts die with the whole (Book–Chapter). Aggregation is weaker/shared (Department–Professor). Inheritance/generalisation is is-a (triangle).",
      "Aggregation (खोखला हीरा) और composition (भरा) दोनों has-a। Composition: अनन्य स्वामित्व, भाग पूरे के साथ मरते (Book–Chapter)। Aggregation कमजोर/साझा। Inheritance is-a (त्रिभुज)।",
      "Dono has-a. Composition = filled diamond, exclusive, same lifetime. Aggregation = hollow, weaker. Inheritance = is-a triangle.",
    ],
  ),
  Q(
    "se-q-uml-views",
    "se-uml-views",
    [
      "In Kruchten’s 4+1 view model, the “+1” that ties the other views together is the:",
      "Kruchten के 4+1 view मॉडल में अन्य views को बाँधने वाला “+1” है:",
      "Kruchten ke 4+1 view model mein doosre views ko baandhne wala “+1” hai:",
    ],
    [
      ["Use-case view", "Use-case view", "Use-case view"],
      ["Physical / deployment view only", "केवल Physical / deployment view", "Sirf physical / deployment view"],
      ["COCOMO organic mode", "COCOMO organic मोड", "COCOMO organic mode"],
      ["ISO 9001 clause 7", "ISO 9001 खंड 7", "ISO 9001 clause 7"],
    ],
    0,
    [
      "4+1: logical, process, development (implementation), physical (deployment), plus use-case view. Use cases capture what the system does for actors and drive the other four views. UML is a language, not a process (Three Amigos; OMG 1997).",
      "4+1: logical, process, development, physical, plus use-case view। Use cases सिस्टम actors के लिए क्या करता है पकड़ते हैं और शेष चार views चलाते हैं। UML भाषा है, प्रक्रिया नहीं।",
      "4+1 = logical, process, development, physical + use-case. Use-case doosron ko drive karta hai. UML language hai, process nahi.",
    ],
  ),
  Q(
    "se-q-class-object",
    "se-class-object",
    [
      "An object diagram differs from a class diagram because an object diagram:",
      "Object diagram class diagram से भिन्न है क्योंकि object diagram:",
      "Object diagram class diagram se alag hai kyunki object diagram:",
    ],
    [
      [
        "Shows instances at a moment in time (asha : Member, current links and values), not the types themselves",
        "किसी क्षण के instances दिखाता है (asha : Member, वर्तमान links व मान), प्रकार स्वयं नहीं",
        "Kisi pal ke instances dikhata hai (asha : Member, current links aur values), types khud nahi",
      ],
      [
        "Replaces UML with DFDs",
        "UML को DFD से बदल देता है",
        "UML ko DFD se badal deta hai",
      ],
      [
        "Is valid for the entire life of the system like a class diagram",
        "Class diagram की तरह सिस्टम के पूरे जीवन मान्य है",
        "Class diagram ki tarah system ke poore life valid hai",
      ],
      [
        "Cannot show links between objects",
        "Objects के बीच links नहीं दिखा सकता",
        "Objects ke beech links nahi dikha sakta",
      ],
    ],
    0,
    [
      "Class diagram = types and possible relations (the town plan). Object diagram = a snapshot (Tuesday 10 a.m. photo): underlined names, attribute values, current links. One class diagram corresponds to many possible object diagrams as multiplicity plays out.",
      "Class diagram = प्रकार व संभावित संबंध (नगर योजना)। Object diagram = स्नैपशॉट (मंगलवार 10 बजे फोटो): रेखांकित नाम, attribute मान, वर्तमान links। एक class diagram कई object diagrams निरूपित करता है।",
      "Class = town plan (types). Object = snapshot (instances, values, current links). Ek class diagram = infinitely many object diagrams.",
    ],
  ),
  Q(
    "se-q-uml-behavior",
    "se-uml-behavior",
    [
      "UML 2 renamed the collaboration diagram to:",
      "UML 2 ने collaboration diagram का नाम बदला:",
      "UML 2 ne collaboration diagram ka naam badla:",
    ],
    [
      ["Communication diagram", "Communication diagram", "Communication diagram"],
      ["Gantt chart", "Gantt chart", "Gantt chart"],
      ["Structure chart", "Structure chart", "Structure chart"],
      ["Ishikawa diagram", "Ishikawa diagram", "Ishikawa diagram"],
    ],
    0,
    [
      "UML 2: collaboration diagram → communication diagram (numbered messages on links; emphasises who is connected). Sequence emphasises time; activity emphasises workflow/parallelism; state chart emphasises one object’s life (event [guard] / action). Gantt is scheduling; structure chart is SA/SD; Ishikawa is a cause-effect fishbone.",
      "UML 2: collaboration → communication (links पर क्रमांकित संदेश)। Sequence समय; activity workflow; state chart एक object का जीवन (event [guard] / action)। Gantt अनुसूची; structure chart SA/SD; Ishikawa मछली की हड्डी।",
      "Collaboration → communication. Sequence = time; activity = workflow; state = one object life. Gantt/structure chart/Ishikawa alag cheezein.",
    ],
  ),
  Q(
    "se-q-spm-need",
    "se-spm-need",
    [
      "Brooks’ Law states that:",
      "Brooks का नियम कहता है कि:",
      "Brooks’ Law kehta hai ki:",
    ],
    [
      [
        "Adding manpower to a late software project makes it later",
        "देर सॉफ्टवेयर परियोजना में जनशक्ति जोड़ने से वह और देर होती है",
        "Late software project mein manpower jodne se woh aur late hota hai",
      ],
      [
        "Software wears out following a hardware bathtub curve",
        "सॉफ्टवेयर हार्डवेयर bathtub वक्र पर घिसता है",
        "Software hardware bathtub curve par ghis-ta hai",
      ],
      [
        "Every module must have coincidental cohesion",
        "प्रत्येक मॉड्यूल में coincidental cohesion होनी चाहिए",
        "Har module mein coincidental cohesion honi chahiye",
      ],
      [
        "ISO 9001 certification guarantees CMM Level 5",
        "ISO 9001 प्रमाणन CMM Level 5 गारंटी करता है",
        "ISO 9001 certification CMM Level 5 guarantee karta hai",
      ],
    ],
    0,
    [
      "The Mythical Man-Month: new people need ramp-up and communication paths grow as n(n−1)/2, so adding staff to a late project delays it further. Software does not wear out; coincidental cohesion is worst; ISO ≠ CMM Level 5.",
      "Mythical Man-Month: नए लोगों को ramp-up चाहिए, संचार पथ n(n−1)/2 बढ़ते हैं, अतः देर परियोजना में स्टाफ और देर करता है। सॉफ्टवेयर घिसता नहीं; coincidental cohesion सबसे खराब; ISO ≠ CMM 5।",
      "Late project + log = aur late (ramp-up + n(n−1)/2 paths). Software wear nahi; coincidental worst; ISO ≠ CMM 5.",
    ],
  ),
  Q(
    "se-q-spm-types",
    "se-spm-types",
    [
      "A single approved change request typically touches several SPM types because it can change:",
      "एक स्वीकृत change request प्रायः कई SPM प्रकार छूता है क्योंकि वह बदल सकता है:",
      "Ek approved change request aksar kai SPM types chhoota hai kyunki woh badal sakta hai:",
    ],
    [
      [
        "Only the company logo colour",
        "केवल कंपनी लोगो का रंग",
        "Sirf company logo ka colour",
      ],
      [
        "Scope, and therefore also cost, schedule, risk and the SCM baseline",
        "Scope, और अतः लागत, अनुसूची, जोखिम और SCM baseline भी",
        "Scope, aur isliye cost, schedule, risk aur SCM baseline bhi",
      ],
      [
        "Cyclomatic complexity of hardware gates only",
        "केवल हार्डवेयर गेट्स की cyclomatic complexity",
        "Sirf hardware gates ki cyclomatic complexity",
      ],
      [
        "The definition of MTTF in IEEE",
        "IEEE में MTTF की परिभाषा",
        "IEEE mein MTTF ki definition",
      ],
    ],
    1,
    [
      "Scope, time, cost, quality, risk, people, communication and configuration interact. A scope change is also a cost, schedule, risk and configuration event — that is why a CCB does impact analysis, not a rubber stamp.",
      "Scope, समय, लागत, गुणवत्ता, जोखिम, लोग, संचार, configuration अंतःक्रिया करते हैं। Scope परिवर्तन लागत, अनुसूची, जोखिम, configuration घटना भी है — इसीलिए CCB प्रभाव विश्लेषण करता है।",
      "Scope change = cost + schedule + risk + SCM event. CCB impact analysis karta hai, rubber stamp nahi.",
    ],
  ),
  Q(
    "se-q-planning",
    "se-planning",
    [
      "The 100% rule of a WBS means:",
      "WBS के 100% नियम का अर्थ है:",
      "WBS ke 100% rule ka matlab hai:",
    ],
    [
      [
        "The WBS must cover 100% of the agreed scope and nothing outside it",
        "WBS को सहमत scope का 100% कवर करना चाहिए और उसके बाहर कुछ नहीं",
        "WBS ko agreed scope ka 100% cover karna chahiye aur uske bahar kuch nahi",
      ],
      [
        "Every module must have 100% path coverage before design",
        "डिज़ाइन से पहले प्रत्येक मॉड्यूल में 100% path coverage",
        "Design se pehle har module mein 100% path coverage",
      ],
      [
        "Staff utilisation must be 100% every hour (no slack)",
        "प्रत्येक घंटे स्टाफ उपयोग 100% (कोई slack नहीं)",
        "Har ghante staff utilisation 100% (koi slack nahi)",
      ],
      [
        "CMM Level 5 is 100% of ISO 9001",
        "CMM Level 5 ISO 9001 का 100% है",
        "CMM Level 5 ISO 9001 ka 100% hai",
      ],
    ],
    0,
    [
      "A Work Breakdown Structure decomposes product/work into estimable work packages. The 100% rule: child packages together equal the parent, covering all agreed scope and excluding gold-plating. Path coverage is a testing metric; 100% utilisation is a scheduling myth.",
      "WBS उत्पाद/कार्य को अनुमान योग्य work packages में तोड़ता है। 100% नियम: बच्चे मिलकर parent के बराबर, पूरा सहमत scope, gold-plating नहीं। Path coverage टेस्टिंग मेट्रिक है।",
      "WBS 100% rule = poora agreed scope, bahar kuch nahi. Path coverage testing metric hai; 100% utilisation myth hai.",
    ],
  ),
  Q(
    "se-q-scheduling",
    "se-scheduling",
    [
      "In CPM, the critical path is:",
      "CPM में critical path है:",
      "CPM mein critical path hai:",
    ],
    [
      [
        "The shortest path, because short tasks cannot slip",
        "सबसे छोटा पथ, क्योंकि छोटे कार्य फिसल नहीं सकते",
        "Sabse chhota path, kyunki chhote tasks slip nahi kar sakte",
      ],
      [
        "The longest path (all activities with slack = 0); any delay on it delays the project",
        "सबसे लंबा पथ (slack = 0 वाली सभी गतिविधियाँ); इस पर कोई देरी परियोजना देरी है",
        "Sabse lamba path (slack = 0); is par koi delay project delay hai",
      ],
      [
        "Always identical to the Gantt chart’s first bar",
        "हमेशा Gantt की पहली पट्टी के समान",
        "Hamesha Gantt ki pehli bar ke barabar",
      ],
      [
        "Computed only in PERT as te = (O+P)/2",
        "केवल PERT में te = (O+P)/2 से गणना",
        "Sirf PERT mein te = (O+P)/2 se calculate",
      ],
    ],
    1,
    [
      "CPM: slack = LS − ES = LF − EF. Critical path = longest path, slack 0. PERT uses te = (O+4M+P)/6 and variance ((P−O)/6)^2; it is probabilistic CPM, not a different definition of critical path. Gantt visualises the calendar; the network finds the path.",
      "CPM: slack = LS − ES। Critical path = सबसे लंबा, slack 0। PERT te = (O+4M+P)/6; यह संभाव्य CPM है। Gantt कैलेंडर दिखाता है; नेटवर्क पथ निकालता है।",
      "Critical path = longest, slack 0. PERT te=(O+4M+P)/6. Gantt calendar dikhata hai, network path nikalta hai.",
    ],
  ),
  Q(
    "se-q-loc-fp",
    "se-loc-fp",
    [
      "Albrecht’s Function Point method weights which five components?",
      "Albrecht की Function Point विधि किन पाँच घटकों को भार देती है?",
      "Albrecht ki Function Point method kin paanch components ko weight deti hai?",
    ],
    [
      [
        "EI, EO, EQ, ILF, EIF",
        "EI, EO, EQ, ILF, EIF",
        "EI, EO, EQ, ILF, EIF",
      ],
      [
        "RELY, DATA, CPLX, TIME, STOR",
        "RELY, DATA, CPLX, TIME, STOR",
        "RELY, DATA, CPLX, TIME, STOR",
      ],
      [
        "Statement, branch, condition, path, mutation",
        "Statement, branch, condition, path, mutation",
        "Statement, branch, condition, path, mutation",
      ],
      [
        "Organic, semidetached, embedded, basic, detailed",
        "Organic, semidetached, embedded, basic, detailed",
        "Organic, semidetached, embedded, basic, detailed",
      ],
    ],
    0,
    [
      "FP (Albrecht/IFPUG): External Inputs, Outputs, Inquiries, Internal Logical Files, External Interface Files → UFP, then AFP = UFP × VAF with VAF = 0.65 + 0.01ΣFi (14 GSCs). RELY/DATA/CPLX are COCOMO cost drivers; statement/branch are coverage; organic/… are COCOMO modes/levels.",
      "FP (Albrecht/IFPUG): EI, EO, EQ, ILF, EIF → UFP, AFP = UFP × VAF, VAF = 0.65 + 0.01ΣFi। RELY/DATA COCOMO drivers; statement/branch coverage; organic/… COCOMO मोड/स्तर।",
      "FP = EI, EO, EQ, ILF, EIF. VAF = 0.65+0.01ΣFi. RELY = COCOMO; statement = coverage; organic = COCOMO mode.",
    ],
  ),
  Q(
    "se-q-estimation",
    "se-estimation",
    [
      "Wideband Delphi is classified as which kind of estimation technique?",
      "Wideband Delphi किस प्रकार की अनुमान तकनीक में वर्गीकृत है?",
      "Wideband Delphi kis prakar ki estimation technique mein classify hoti hai?",
    ],
    [
      [
        "Empirical (structured expert judgement)",
        "Empirical (संरचित expert judgement)",
        "Empirical (structured expert judgement)",
      ],
      [
        "Heuristic / algorithmic (COCOMO-style formula)",
        "Heuristic / algorithmic (COCOMO-शैली सूत्र)",
        "Heuristic / algorithmic (COCOMO-style formula)",
      ],
      [
        "Analytical (Halstead operators/operands)",
        "Analytical (Halstead operators/operands)",
        "Analytical (Halstead operators/operands)",
      ],
      [
        "A CMM Level-1 chaotic metric",
        "CMM Level-1 chaotic मेट्रिक",
        "CMM Level-1 chaotic metric",
      ],
    ],
    0,
    [
      "Empirical: expert judgement, analogy, Wideband Delphi (anonymous rounds, moderator shows spread, iterate). Heuristic: Effort = a Size^b × EAF (COCOMO, SLIM). Analytical: Halstead E = D×V/18. Use two methods and triangulate; present a range (cone of uncertainty).",
      "Empirical: expert, analogy, Wideband Delphi। Heuristic: Effort = a Size^b × EAF। Analytical: Halstead। दो विधियाँ मिलाएँ; रेंज दें (cone of uncertainty)।",
      "Delphi = empirical. COCOMO = heuristic. Halstead = analytical. Do methods + range (cone of uncertainty).",
    ],
  ),
  Q(
    "se-q-cocomo",
    "se-cocomo",
    [
      "In Basic COCOMO 81, the constants a=3.6, b=1.20 apply to which mode?",
      "Basic COCOMO 81 में स्थिरांक a=3.6, b=1.20 किस मोड पर लागू होते हैं?",
      "Basic COCOMO 81 mein constants a=3.6, b=1.20 kis mode par apply hote hain?",
    ],
    [
      ["Organic (small, familiar, flexible)", "Organic (छोटा, परिचित, लचीला)", "Organic (chhota, familiar, flexible)"],
      ["Semidetached (mixed team and constraints)", "Semidetached (मिश्रित टीम व बाधाएँ)", "Semidetached (mixed team aur constraints)"],
      [
        "Embedded (tight hardware/regulations/timing; little negotiation)",
        "Embedded (कठोर हार्डवेयर/विनियम/timing; कम negotiation)",
        "Embedded (tight hardware/regulations/timing; kam negotiation)",
      ],
      ["Application Composition stage of COCOMO II only", "केवल COCOMO II का Application Composition चरण", "Sirf COCOMO II ka Application Composition stage"],
    ],
    2,
    [
      "Organic a=2.4 b=1.05; Semidetached a=3.0 b=1.12; Embedded a=3.6 b=1.20. E = a(KLOC)^b; Tdev = c(E)^d with c=2.5. Intermediate multiplies by EAF (15 drivers). Detailed applies drivers per module/phase. COCOMO II replaces modes with scale factors.",
      "Organic 2.4/1.05; Semidetached 3.0/1.12; Embedded 3.6/1.20। E = a(KLOC)^b; Tdev = c(E)^d। Intermediate × EAF (15 drivers)। Detailed प्रति मॉड्यूल/चरण। COCOMO II मोड की जगह scale factors।",
      "Organic 2.4/1.05, Semidetached 3.0/1.12, Embedded 3.6/1.20. Intermediate × EAF. COCOMO II scale factors modes ki jagah.",
    ],
  ),
  Q(
    "se-q-testing-strategies",
    "se-testing-strategies",
    [
      "Dijkstra’s remark that testers should remember is:",
      "Dijkstra का कथन जो टेस्टरों को याद रखना चाहिए:",
      "Dijkstra ka statement jo testers ko yaad rakhna chahiye:",
    ],
    [
      [
        "Testing can prove the complete absence of bugs",
        "Testing बगों की पूर्ण अनुपस्थिति सिद्ध कर सकती है",
        "Testing bugs ki poori absence prove kar sakti hai",
      ],
      [
        "Testing shows the presence of bugs, not their absence",
        "Testing बगों की उपस्थिति दिखाती है, अनुपस्थिति नहीं",
        "Testing bugs ki presence dikhati hai, absence nahi",
      ],
      [
        "Debugging and testing are the same activity",
        "Debugging और testing एक ही गतिविधि हैं",
        "Debugging aur testing ek hi activity hain",
      ],
      [
        "Reviews are illegal once coding starts",
        "कोडिंग शुरू होने पर reviews अवैध हैं",
        "Coding start hone par reviews illegal hain",
      ],
    ],
    1,
    [
      "Myers: testing executes with intent to find errors. Dijkstra: presence not absence. Strategy is staged (unit→integration→validation→system), planned, with stopping criteria other than “we ran out of time”. Testing ≠ debugging; reviews remain valuable after coding.",
      "Myers: त्रुटियाँ ढूँढ़ने के आशय से चलाना। Dijkstra: उपस्थिति, अनुपस्थिति नहीं। रणनीति चरणबद्ध, नियोजित, “समय खत्म” के अलावा stopping criteria। Testing ≠ debugging।",
      "Testing presence dikhati hai, absence prove nahi. Staged strategy. Testing ≠ debugging. Reviews baad mein bhi kaam ke.",
    ],
  ),
  Q(
    "se-q-black-white",
    "se-black-white",
    [
      "Cyclomatic complexity V(G) = E − N + 2P equals the number of:",
      "Cyclomatic complexity V(G) = E − N + 2P बराबर है संख्या के:",
      "Cyclomatic complexity V(G) = E − N + 2P barabar hai kis number ke:",
    ],
    [
      [
        "Independent paths (also = predicates + 1 = number of regions) and a lower bound on tests for branch coverage",
        "स्वतंत्र पथों (साथ ही = predicates + 1 = क्षेत्रों की संख्या) और branch coverage के लिए टेस्टों का निम्न Bound",
        "Independent paths (saath hi = predicates + 1 = regions) aur branch coverage ke tests ka lower bound",
      ],
      [
        "Function points in the SRS",
        "SRS में function points",
        "SRS mein function points",
      ],
      [
        "CMM levels an organisation has crossed",
        "संगठन ने जितने CMM स्तर पार किए",
        "Organisation ne jitne CMM levels paar kiye",
      ],
      [
        "Spiral loops required by Boehm",
        "Boehm द्वारा आवश्यक Spiral लूप",
        "Boehm dwara required Spiral loops",
      ],
    ],
    0,
    [
      "McCabe basis-path testing: draw the flow graph, V(G) = E−N+2P = decision predicates+1 = regions. Design one test per independent path. Equivalence partitioning and BVA are black-box; this is white-box. 100% path coverage is often impossible with loops.",
      "McCabe basis-path: flow graph, V(G) = E−N+2P = predicates+1 = regions। प्रति स्वतंत्र पथ एक टेस्ट। EP/BVA black-box हैं; यह white-box। Loops पर 100% path अक्सर असंभव।",
      "V(G) = independent paths = predicates+1 = regions. White-box. EP/BVA black-box hain.",
    ],
  ),
  Q(
    "se-q-vv",
    "se-vv",
    [
      "Boehm’s definitions: verification asks “Are we building the product right?” and validation asks:",
      "Boehm की परिभाषाएँ: verification पूछती है “क्या हम उत्पाद सही बना रहे हैं?” और validation पूछती है:",
      "Boehm: verification poochhti hai “product right bana rahe hain?” aur validation poochhti hai:",
    ],
    [
      [
        "Are we building the right product?",
        "क्या हम सही उत्पाद बना रहे हैं?",
        "Kya hum right product bana rahe hain?",
      ],
      [
        "Have we maximised content coupling?",
        "क्या हमने content coupling अधिकतम की?",
        "Kya humne content coupling maximum ki?",
      ],
      [
        "Is the project organic in COCOMO?",
        "क्या परियोजना COCOMO में organic है?",
        "Kya project COCOMO mein organic hai?",
      ],
      [
        "Did we skip the CCB?",
        "क्या हमने CCB छोड़ दिया?",
        "Kya humne CCB chhod diya?",
      ],
    ],
    0,
    [
      "Verification = conformance to the immediate spec (reviews, inspections, unit/integration tests) — product right. Validation = fitness for actual user needs (system test, UAT, alpha/beta) — right product. A system can be verified against a wrong SRS and thus invalid. V&V ≠ testing only; testing is dynamic V&V.",
      "Verification = निकटतम spec से अनुरूपता — उत्पाद सही। Validation = वास्तविक उपयोगकर्ता जरूरतों के लिए उपयुक्तता — सही उत्पाद। गलत SRS पर verified सिस्टम invalid हो सकता है। V&V ≠ केवल testing।",
      "Verification = product right (spec). Validation = right product (user needs). Verified-but-invalid possible. V&V sirf testing nahi.",
    ],
  ),
  Q(
    "se-q-test-levels",
    "se-test-levels",
    [
      "Top-down integration testing typically requires:",
      "Top-down integration testing को प्रायः चाहिए:",
      "Top-down integration testing ko typically chahiye:",
    ],
    [
      [
        "Stubs for missing lower-level modules, and yields an early working skeleton",
        "छूटे निम्न-स्तरीय मॉड्यूल के stubs, और जल्दी कार्यशील कंकाल देती है",
        "Missing lower-level modules ke stubs, aur early working skeleton deti hai",
      ],
      [
        "Drivers only, never stubs, because leaves are integrated first",
        "केवल drivers, stubs कभी नहीं, क्योंकि पत्तियाँ पहले जुड़ती हैं",
        "Sirf drivers, stubs kabhi nahi, kyunki leaves pehle judti hain",
      ],
      [
        "That all modules be linked on day one (big-bang)",
        "पहले दिन सभी मॉड्यूल लिंक (big-bang)",
        "Pehle din saare modules link (big-bang)",
      ],
      [
        "Beta testers at the customer site before unit tests",
        "Unit टेस्ट से पहले ग्राहक स्थल पर beta टेस्टर",
        "Unit tests se pehle customer site par beta testers",
      ],
    ],
    0,
    [
      "Top-down: start at main, replace stubs downward — early skeleton/UI, but low-level logic tested late. Bottom-up: start at leaves, write drivers — low-level proven early, no skeleton until late. Sandwich mixes both. Big-bang is all-at-once. Alpha/beta are acceptance, after system test.",
      "Top-down: main से, stubs नीचे बदलें — जल्दी कंकाल, निम्न स्तर देर से। Bottom-up: पत्तियों से, drivers — निम्न स्तर जल्दी, कंकाल देर से। Sandwich मिश्रण। Big-bang सब एक साथ। Alpha/beta acceptance है।",
      "Top-down = stubs, early skeleton. Bottom-up = drivers, leaves pehle. Sandwich mix. Big-bang sab ek saath. Alpha/beta acceptance.",
    ],
  ),
  Q(
    "se-q-debugging",
    "se-debugging",
    [
      "Testing versus debugging: testing finds a symptom (TC-12 failed). Debugging:",
      "Testing बनाम debugging: testing लक्षण ढूँढ़ती है (TC-12 फेल)। Debugging:",
      "Testing vs debugging: testing symptom dhoondhti hai (TC-12 fail). Debugging:",
    ],
    [
      [
        "Locates the fault, applies a fix, and retests including regression",
        "दोष स्थित कर सुधार लागू करती है, regression सहित फिर टेस्ट करती है",
        "Fault locate karke fix lagati hai, regression including retest karti hai",
      ],
      [
        "Is identical to black-box BVA",
        "Black-box BVA के समान है",
        "Black-box BVA ke barabar hai",
      ],
      [
        "Must never use a hypothesis or a debugger",
        "परिकल्पना या debugger कभी उपयोग न करे",
        "Hypothesis ya debugger kabhi use na kare",
      ],
      [
        "Replaces the need for unit tests after the fix",
        "सुधार के बाद unit टेस्ट की जरूरत हटा देती है",
        "Fix ke baad unit tests ki zaroorat hata deti hai",
      ],
    ],
    0,
    [
      "Approaches: brute force (dumps/logs), backtracking from the symptom, cause elimination/induction, deduction from a theory. Principles: one change at a time, fix the cause not the symptom, add a regression test. Debugging is not a test-design technique like BVA.",
      "दृष्टिकोण: brute force, लक्षण से backtracking, cause elimination, deduction। सिद्धांत: एक समय एक परिवर्तन, कारण ठीक करें, regression टेस्ट जोड़ें। Debugging BVA जैसी टेस्ट-डिज़ाइन तकनीक नहीं।",
      "Debug = root cause + fix + retest. Brute force, backtracking, cause elimination. Ek change, regression test jodo. BVA alag cheez.",
    ],
  ),
  Q(
    "se-q-reliability",
    "se-reliability",
    [
      "Availability A = MTTF / (MTTF + MTTR). If MTTF = 999 h and MTTR = 1 h, availability is:",
      "उपलब्धता A = MTTF / (MTTF + MTTR)। यदि MTTF = 999 घंटे और MTTR = 1 घंटा, उपलब्धता है:",
      "Availability A = MTTF / (MTTF + MTTR). Agar MTTF = 999 h aur MTTR = 1 h, availability hai:",
    ],
    [
      ["90.0%", "90.0%", "90.0%"],
      ["99.0%", "99.0%", "99.0%"],
      ["99.9%", "99.9%", "99.9%"],
      ["9.99%", "9.99%", "9.99%"],
    ],
    2,
    [
      "A = 999/(999+1) = 999/1000 = 0.999 = 99.9%. High availability needs rare failures (high MTTF) and fast recovery (low MTTR). Reliability ≠ safety ≠ security. Musa operational profile says test how users actually exercise the system.",
      "A = 999/1000 = 99.9%। उच्च उपलब्धता को दुर्लभ विफलताएँ (उच्च MTTF) और तेज recovery (निम्न MTTR) चाहिए। विश्वसनीयता ≠ safety ≠ security। Musa: जैसा उपयोगकर्ता चलाते हैं वैसा टेस्ट।",
      "999/1000 = 99.9%. High A = high MTTF + low MTTR. Reliability ≠ safety ≠ security. Musa operational profile.",
    ],
  ),
  Q(
    "se-q-sqa",
    "se-sqa",
    [
      "McCall groups quality factors as product operation, product revision and product transition. Maintainability belongs to:",
      "McCall गुणवत्ता कारकों को product operation, product revision और product transition में बाँटते हैं। Maintainability किसमें है?",
      "McCall quality factors ko operation, revision, transition mein baantte hain. Maintainability kisme hai?",
    ],
    [
      ["Product operation (with reliability and usability)", "Product operation (reliability व usability के साथ)", "Product operation (reliability aur usability ke saath)"],
      ["Product revision (with flexibility and testability)", "Product revision (flexibility व testability के साथ)", "Product revision (flexibility aur testability ke saath)"],
      ["Product transition (with portability and reusability)", "Product transition (portability व reusability के साथ)", "Product transition (portability aur reusability ke saath)"],
      ["None — McCall listed only performance", "कोई नहीं — McCall ने केवल performance सूचीबद्ध की", "Koi nahi — McCall ne sirf performance list ki"],
    ],
    1,
    [
      "Operation: correctness, reliability, efficiency, integrity, usability. Revision: maintainability, flexibility, testability. Transition: portability, reusability, interoperability. SQA is the organisational umbrella; testing is only dynamic V&V inside it.",
      "Operation: correctness, reliability, efficiency, integrity, usability। Revision: maintainability, flexibility, testability। Transition: portability, reusability, interoperability। SQA संगठनात्मक छत्र; testing केवल गतिशील V&V।",
      "Revision = maintainability, flexibility, testability. Operation = correctness/reliability/usability… Transition = portability/reuse. SQA ≠ sirf testing.",
    ],
  ),
  Q(
    "se-q-reviews",
    "se-reviews",
    [
      "A Formal Technical Review (FTR) meeting should primarily:",
      "Formal Technical Review (FTR) बैठक को मुख्यतः चाहिए:",
      "FTR meeting ko mukhya taur par chahiye:",
    ],
    [
      [
        "Review the product not the producer, log defects, and avoid redesigning in the room",
        "उत्पादक नहीं उत्पाद की समीक्षा, दोष लॉग, कमरे में redesign से बचें",
        "Producer nahi product ki review, defects log, room mein redesign se bacho",
      ],
      [
        "Fix every defect immediately with the author’s manager present as judge",
        "लेखक के प्रबंधक को न्यायाधीश बना हर दोष तुरंत ठीक करें",
        "Author ke manager ko judge bana har defect turant theek karo",
      ],
      [
        "Replace all testing, because reviews prove absence of bugs",
        "सभी testing हटा दें, क्योंकि reviews बग अनुपस्थिति सिद्ध करते हैं",
        "Saari testing hata do, kyunki reviews bugs ki absence prove karte hain",
      ],
      [
        "Last at least one full working day with no agenda",
        "बिना एजेंडा कम से कम एक पूरा कार्य दिवस चले",
        "Bina agenda kam se kam ek poora working day chale",
      ],
    ],
    0,
    [
      "FTR: plan → prepare → time-boxed meeting (often ≤2 h) → report (accept / rework / reject) → follow-up. Roles: producer, moderator, recorder, 3–5 peer reviewers. Walkthrough is less formal; Fagan inspection is highly formal with checklists and metrics. Reviews find many defects cheaper than test; they do not replace test.",
      "FTR: plan → prepare → time-boxed बैठक → रिपोर्ट → follow-up। भूमिकाएँ: producer, moderator, recorder, 3–5 साथी। Walkthrough कम औपचारिक; Fagan inspection checklist/मेट्रिक्स से अधिक औपचारिक। Reviews कई दोष सस्ते ढूँढ़ती हैं, testing की जगह नहीं।",
      "Product review, not producer. Log, don’t redesign. Fagan more formal than walkthrough. Reviews testing ki jagah nahi lete.",
    ],
  ),
  Q(
    "se-q-scm",
    "se-scm",
    [
      "A baseline in SCM (IEEE) is:",
      "SCM में baseline (IEEE) है:",
      "SCM mein baseline (IEEE) hai:",
    ],
    [
      [
        "A formally reviewed and agreed specification or product that thereafter changes only through formal change control",
        "औपचारिक रूप से समीक्षित व सहमत विनिर्देश या उत्पाद जो आगे केवल औपचारिक change control से बदलता है",
        "Formally reviewed aur agreed spec/product jo aage sirf formal change control se badalta hai",
      ],
      [
        "Any Git commit, including unreviewed work-in-progress",
        "कोई भी Git commit, असमिक्षित WIP सहित",
        "Koi bhi Git commit, unreviewed WIP including",
      ],
      [
        "The cyclomatic complexity of the main module",
        "मुख्य मॉड्यूल की cyclomatic complexity",
        "Main module ki cyclomatic complexity",
      ],
      [
        "CMM Level 1 by definition",
        "परिभाषा से CMM Level 1",
        "Definition se CMM Level 1",
      ],
    ],
    0,
    [
      "SCI = item under SCM. Four activities: identification, change/version control, status accounting, audit (FCA vs PCA). Git is a tool; SCM is the process with CCB and baselines (functional/SRS, allocated/design, product/code). Unreviewed commits are not baselines.",
      "SCI = SCM की वस्तु। चार गतिविधियाँ: identification, change/version control, status accounting, audit (FCA बनाम PCA)। Git उपकरण; SCM प्रक्रिया CCB व baselines सहित। असमिक्षित commits baseline नहीं।",
      "Baseline = reviewed+agreed, phir sirf CCB se change. Git tool hai, SCM process. FCA vs PCA yaad rakho.",
    ],
  ),
  Q(
    "se-q-iso-cmm",
    "se-iso-cmm",
    [
      "CMM Level 2 (Repeatable) is characterised by:",
      "CMM Level 2 (Repeatable) की विशेषता है:",
      "CMM Level 2 (Repeatable) ki characteristic hai:",
    ],
    [
      [
        "Ad-hoc heroics; success depends on individuals (Initial)",
        "Ad-hoc वीरता; सफलता व्यक्तियों पर (Initial)",
        "Ad-hoc heroics; success individuals par (Initial)",
      ],
      [
        "Basic project management: requirements management, planning, tracking, SQA, SCM — similar projects can repeat success",
        "मूल परियोजना प्रबंधन: requirements management, योजना, ट्रैकिंग, SQA, SCM — समान परियोजनाएँ सफलता दोहरा सकती हैं",
        "Basic PM: RM, planning, tracking, SQA, SCM — similar projects success repeat kar sakti hain",
      ],
      [
        "Quantitative statistical process control only (Level 4)",
        "केवल मात्रात्मक सांख्यिकीय प्रक्रिया नियंत्रण (Level 4)",
        "Sirf quantitative statistical process control (Level 4)",
      ],
      [
        "Continuous improvement via defect prevention (Level 5)",
        "दोष रोकथाम से निरंतर सुधार (Level 5)",
        "Defect prevention se continuous improvement (Level 5)",
      ],
    ],
    1,
    [
      "1 Initial (chaotic); 2 Repeatable (project PM, SQA, SCM); 3 Defined (organisational standard process, peer reviews); 4 Managed/quantitative; 5 Optimizing. ISO 9001 is generic pass/fail QMS (document–do–prove) mapping roughly to CMM 2–3; you can be ISO certified and still Level 1 if the process is not used. SEI / Watts Humphrey; successor CMMI.",
      "1 Initial; 2 Repeatable (PM, SQA, SCM); 3 Defined (OSSP, peer reviews); 4 मात्रात्मक; 5 Optimizing। ISO 9001 सामान्य pass/fail, मोटे तौर पर CMM 2–3; documented process न चले तो ISO के बावजूद Level 1। SEI / Humphrey; CMMI उत्तराधिकारी।",
      "L2 = project discipline (RM, planning, SQA, SCM). L1 chaotic, L3 org standard, L4 quantitative, L5 optimizing. ISO ≠ automatic L3.",
    ],
  ),
  Q(
    "se-q-risk",
    "se-risk",
    [
      "Risk Exposure used to rank risks is:",
      "जोखिमों की रैंकिंग में प्रयुक्त Risk Exposure है:",
      "Risks ki ranking mein use hone wala Risk Exposure hai:",
    ],
    [
      [
        "RE = Probability × Impact (P × C)",
        "RE = Probability × Impact (P × C)",
        "RE = Probability × Impact (P × C)",
      ],
      [
        "RE = Fan-in × Fan-out of the main module",
        "RE = मुख्य मॉड्यूल का Fan-in × Fan-out",
        "RE = main module ka Fan-in × Fan-out",
      ],
      [
        "RE = VAF in Function Point counting",
        "RE = Function Point गिनती का VAF",
        "RE = Function Point counting ka VAF",
      ],
      [
        "RE = MTTF − MTTR",
        "RE = MTTF − MTTR",
        "RE = MTTF − MTTR",
      ],
    ],
    0,
    [
      "Identify (checklists, Boehm top-10: personnel shortfalls, unrealistic schedules, wrong functions, gold-plating…), analyse (matrix or RE = P×C), mitigate (proactive), plan contingency with a trigger, monitor via a risk register / RMMM. Spiral is risk-driven. Fan-in is design; VAF is FP; MTTF/MTTR are reliability.",
      "पहचान (checklists, Boehm top-10), विश्लेषण (matrix या RE = P×C), mitigation (सक्रिय), trigger वाली contingency, risk register / RMMM से निगरानी। Spiral जोखिम-चालित। Fan-in डिज़ाइन; VAF FP; MTTF विश्वसनीयता।",
      "RE = P×C. Identify, analyse, mitigate, contingency, monitor (RMMM). Spiral risk-driven. Fan-in/VAF/MTTF alag metrics.",
    ],
  ),
];
