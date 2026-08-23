import { C, D, EXAM, H, NOTE, OL, P, TBL, topic, UL } from "./blocks";
import type { TopicNotes } from "../types";

export const rdmsNotes: Record<string, TopicNotes> = {
  "rdms-intro": topic("rdms-intro", [
    P(
      "Data processing is the mechanical conversion of raw facts into a usable form — sorting, calculating, printing a payroll, or generating a marksheet. Data management is broader: it organises, stores, protects, and shares data so that many applications can retrieve a single consistent copy over years. A Relational Database Management System (RDBMS) is the standard tool that turns ad-hoc processing into disciplined management.",
      "डेटा प्रोसेसिंग कच्चे तथ्यों को उपयोगी रूप में बदलने की यांत्रिक प्रक्रिया है — सॉर्टिंग, गणना, पेरोल छापना या मार्कशीट बनाना। डेटा प्रबंधन व्यापक है: यह डेटा को संगठित, संग्रहित, सुरक्षित और साझा करता है ताकि कई अनुप्रयोग वर्षों तक एक ही सुसंगत प्रति प्राप्त कर सकें। Relational Database Management System (RDBMS) वह मानक उपकरण है जो तदर्थ प्रोसेसिंग को अनुशासित प्रबंधन में बदलता है।",
      "Data processing raw facts ko usable form mein badalne wali mechanical process hai — sorting, calculation, payroll print karna ya marksheet banana. Data management zyada bada idea hai: data ko organise, store, protect aur share karna taaki kai applications saalon tak ek hi consistent copy use kar saken. RDBMS wahi standard tool hai jo ad-hoc processing ko disciplined management bana deta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Data are raw recorded facts (roll number, salary); information is data placed in context so a decision can be made.",
        "डेटा कच्चे दर्ज तथ्य हैं (रोल नंबर, वेतन); सूचना वह डेटा है जिसे संदर्भ में रखकर निर्णय लिया जा सकता है।",
        "Data raw recorded facts hote hain (roll number, salary); information woh data hai jo context mein rakhkar decision lene layak ho.",
      ],
      [
        "Traditional data processing programs owned their own files. Changing a field meant rewriting every program that touched that file.",
        "पारंपरिक डेटा प्रोसेसिंग प्रोग्राम अपनी फ़ाइलें स्वयं रखते थे। एक फ़ील्ड बदलने पर हर प्रोग्राम फिर से लिखना पड़ता था।",
        "Traditional data processing programs apni files khud rakhte the. Ek field badalne par har program dubara likhna padta tha.",
      ],
      [
        "Data management separates the description of data (schema) from the programs that use it, so many users share one database.",
        "डेटा प्रबंधन डेटा के विवरण (schema) को उन प्रोग्रामों से अलग करता है जो उसे उपयोग करते हैं, जिससे कई उपयोगकर्ता एक डेटाबेस साझा करते हैं।",
        "Data management data ke description (schema) ko programs se alag karta hai, isliye kai users ek database share karte hain.",
      ],
      [
        "An RDBMS stores data as tables (relations), enforces integrity, and answers queries written in SQL.",
        "RDBMS डेटा को टेबल (relations) के रूप में रखता है, अखंडता लागू करता है, और SQL में लिखी क्वेरी का उत्तर देता है।",
        "RDBMS data ko tables (relations) ke roop mein rakhta hai, integrity enforce karta hai, aur SQL queries ka jawab deta hai.",
      ],
      [
        "Core DBMS services: persistent storage, concurrent access, recovery after crash, security, and a query language.",
        "मुख्य DBMS सेवाएँ: स्थायी संग्रहण, समवर्ती पहुँच, क्रैश के बाद रिकवरी, सुरक्षा और एक क्वेरी भाषा।",
        "Core DBMS services: persistent storage, concurrent access, crash ke baad recovery, security, aur ek query language.",
      ],
      [
        "BCA exams often ask you to contrast processing (program-centric, one-shot jobs) with management (data-centric, long-lived shared store).",
        "BCA परीक्षा में अक्सर प्रोसेसिंग (प्रोग्राम-केंद्रित, एकबारगी जॉब) और प्रबंधन (डेटा-केंद्रित, दीर्घकालिक साझा स्टोर) का अंतर पूछा जाता है।",
        "BCA exam mein aksar processing (program-centric, one-shot jobs) aur management (data-centric, long-lived shared store) ka farak poochha jaata hai.",
      ],
    ]),
    TBL(
      [
        ["Aspect", "पहलू", "Aspect"],
        ["Data processing", "डेटा प्रोसेसिंग", "Data processing"],
        ["Data management", "डेटा प्रबंधन", "Data management"],
      ],
      [
        [
          ["Focus", "फोकस", "Focus"],
          ["Transform input files into reports", "इनपुट फ़ाइलों को रिपोर्ट में बदलना", "Input files ko reports mein badalna"],
          ["Keep a consistent shared store of facts", "तथ्यों का सुसंगत साझा भंडार रखना", "Facts ka consistent shared store rakhna"],
        ],
        [
          ["Owner of structure", "संरचना का मालिक", "Structure ka owner"],
          ["Each application program", "प्रत्येक एप्लिकेशन प्रोग्राम", "Har application program"],
          ["The DBMS catalog / schema", "DBMS कैटलॉग / schema", "DBMS catalog / schema"],
        ],
        [
          ["Lifetime", "अवधि", "Lifetime"],
          ["A batch job or a single run", "एक बैच जॉब या एक रन", "Ek batch job ya ek run"],
          ["Years; many transactions daily", "वर्षों; प्रतिदिन कई ट्रांज़ैक्शन", "Saalon; roz kai transactions"],
        ],
      ],
    ),
    EXAM(
      "Define data, information, and database. Then write two differences between data processing and data management with an example (payroll file versus a university DBMS).",
      "डेटा, सूचना और डेटाबेस परिभाषित कीजिए। फिर डेटा प्रोसेसिंग और डेटा प्रबंधन के दो अंतर उदाहरण सहित लिखिए (पेरोल फ़ाइल बनाम विश्वविद्यालय DBMS)।",
      "Data, information aur database define karo. Phir data processing aur data management ke do farak example ke saath likho (payroll file versus university DBMS).",
    ),
  ]),

  "rdms-file-vs-db": topic("rdms-file-vs-db", [
    P(
      "In the file-oriented approach each department writes programs that open its own sequential or indexed files. In the database-oriented approach a DBMS owns one integrated collection of data and all programs go through that DBMS. The file approach is simple for a single application; it collapses when many applications must share related facts.",
      "फ़ाइल-ओरिएंटेड दृष्टिकोण में प्रत्येक विभाग ऐसे प्रोग्राम लिखता है जो उसकी अपनी सीक्वेंशियल या इंडेक्स्ड फ़ाइलें खोलते हैं। डेटाबेस-ओरिएंटेड दृष्टिकोण में DBMS एक एकीकृत संग्रह का मालिक होता है और सभी प्रोग्राम उसी DBMS से होकर जाते हैं। फ़ाइल दृष्टिकोण एक अकेले अनुप्रयोग के लिए सरल है; जब कई अनुप्रयोग संबंधित तथ्य साझा करते हैं तो यह टूट जाता है।",
      "File-oriented approach mein har department aise programs likhta hai jo uski apni sequential ya indexed files kholte hain. Database-oriented approach mein DBMS ek integrated collection ka malik hota hai aur saare programs usi DBMS se hokar jaate hain. File approach ek akeli application ke liye simple hai; jab kai applications related facts share karti hain to yeh toot jaati hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Data redundancy: the same student address is stored in the exam file, hostel file and library file, wasting space and inviting inconsistency.",
        "डेटा रिडंडेंसी: वही छात्र पता परीक्षा फ़ाइल, हॉस्टल फ़ाइल और लाइब्रेरी फ़ाइल में रहता है — जगह बर्बाद और असंगति।",
        "Data redundancy: wahi student address exam file, hostel file aur library file mein rehta hai — jagah barbaad aur inconsistency.",
      ],
      [
        "Data inconsistency: one copy is updated (new phone number) while another copy still shows the old value.",
        "डेटा इनकन्सिस्टेंसी: एक प्रति अपडेट हो जाती है (नया फ़ोन नंबर) जबकि दूसरी प्रति पुराना मान दिखाती है।",
        "Data inconsistency: ek copy update ho jaati hai (naya phone number) jabki doosri copy purana value dikhati hai.",
      ],
      [
        "Integrity is coded inside programs; a file system will happily accept a negative marks field.",
        "अखंडता प्रोग्रामों के अंदर लिखी जाती है; फ़ाइल सिस्टम नकारात्मक अंक भी स्वीकार कर लेगा।",
        "Integrity programs ke andar likhi jaati hai; file system negative marks bhi accept kar lega.",
      ],
      [
        "Concurrency and crash recovery are do-it-yourself; two clerks can overwrite each other's fees record.",
        "कंकरेंसी और क्रैश रिकवरी स्वयं करनी पड़ती है; दो क्लर्क एक-दूसरे का शुल्क रिकॉर्ड ओवरराइट कर सकते हैं।",
        "Concurrency aur crash recovery khud karni padti hai; do clerks ek-doosre ka fees record overwrite kar sakte hain.",
      ],
      [
        "A DBMS provides a catalog, query language, transaction manager, lock manager, and backup/restore — none of which a raw file offers.",
        "DBMS कैटलॉग, क्वेरी भाषा, ट्रांज़ैक्शन मैनेजर, लॉक मैनेजर और बैकअप/रिस्टोर देता है — कच्ची फ़ाइल इनमें से कुछ नहीं देती।",
        "DBMS catalog, query language, transaction manager, lock manager aur backup/restore deta hai — raw file inme se kuch nahi deti.",
      ],
      [
        "Cost of a DBMS (licence, DBA, hardware) is the usual argument for keeping a tiny personal file; beyond that the database approach wins.",
        "DBMS की लागत (लाइसेंस, DBA, हार्डवेयर) छोटे निजी फ़ाइल रखने का सामान्य तर्क है; उसके बाद डेटाबेस दृष्टिकोण जीतता है।",
        "DBMS ki cost (licence, DBA, hardware) chhoti personal file rakhne ka usual argument hai; uske baad database approach jeetti hai.",
      ],
      [
        "Security in files is at file-open level; an RDBMS can grant SELECT on one column of one view to one role.",
        "फ़ाइलों में सुरक्षा फ़ाइल-खोलने के स्तर पर होती है; RDBMS एक व्यू के एक कॉलम पर एक रोल को SELECT दे सकता है।",
        "Files mein security file-open level par hoti hai; RDBMS ek view ke ek column par ek role ko SELECT de sakta hai.",
      ],
    ]),
    TBL(
      [
        ["Problem", "समस्या", "Problem"],
        ["File-oriented", "फ़ाइल-ओरिएंटेड", "File-oriented"],
        ["Database-oriented", "डेटाबेस-ओरिएंटेड", "Database-oriented"],
      ],
      [
        [
          ["Redundancy", "रिडंडेंसी", "Redundancy"],
          ["Same fact in many files", "एक तथ्य कई फ़ाइलों में", "Ek fact kai files mein"],
          ["Stored once, referenced by keys", "एक बार भंडार; keys से संदर्भ", "Ek baar store; keys se reference"],
        ],
        [
          ["Access", "पहुँच", "Access"],
          ["Program must know record layout", "प्रोग्राम को रिकॉर्ड लेआउट जानना होता है", "Program ko record layout pata hona chahiye"],
          ["SQL / views hide physical layout", "SQL / views भौतिक लेआउट छिपाते हैं", "SQL / views physical layout chhupate hain"],
        ],
        [
          ["Integrity", "अखंडता", "Integrity"],
          ["Checks scattered in code", "जाँच कोड में बिखरी", "Checks code mein bikhri"],
          ["Constraints in the catalog", "कंस्ट्रेंट कैटलॉग में", "Constraints catalog mein"],
        ],
      ],
    ),
    EXAM(
      "List four disadvantages of the file-oriented approach and state how a DBMS removes each one. Mention data isolation (files in incompatible formats) as a fifth point if the paper asks for five.",
      "फ़ाइल-ओरिएंटेड दृष्टिकोण की चार हानियाँ लिखिए और बताइए DBMS प्रत्येक को कैसे हटाता है। यदि पाँच पूछे जाएँ तो डेटा आइसोलेशन (असंगत फ़ॉर्मेट की फ़ाइलें) पाँचवाँ बिंदु है।",
      "File-oriented approach ki chaar haniyan likho aur batao DBMS har ek ko kaise hataata hai. Agar paanch maange to data isolation (incompatible format ki files) paanchwaan point hai.",
    ),
  ]),
  "rdms-schema": topic("rdms-schema", [
    P(
      "A schema is the design of the database — names of relations, attributes, types, keys and constraints — and it changes rarely. An instance (or database state) is the data sitting in those relations at one moment; it changes with every insert, update or delete. A view is a virtual relation defined by a query on the stored (base) tables; it usually stores no extra rows of its own.",
      "स्कीमा डेटाबेस की डिज़ाइन है — रिलेशन, एट्रिब्यूट, प्रकार, की और कंस्ट्रेंट के नाम — और यह कम बदलती है। इंस्टेंस (या डेटाबेस स्टेट) उन रिलेशन में एक क्षण का डेटा है; हर insert, update या delete से बदलता है। व्यू एक आभासी रिलेशन है जो संग्रहित (बेस) टेबल पर क्वेरी से परिभाषित होता है; आमतौर पर इसकी अपनी अतिरिक्त पंक्तियाँ नहीं होतीं।",
      "Schema database ki design hai — relations, attributes, types, keys aur constraints ke naam — aur yeh kam badalti hai. Instance (ya database state) un relations mein ek pal ka data hai; har insert, update ya delete se badalta hai. View ek virtual relation hai jo stored (base) tables par query se define hota hai; aksar uski apni extra rows nahi hoti.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Three-schema architecture names three layers of schema: internal (files, indexes), conceptual (logical tables), and external (user views).",
        "थ्री-स्कीमा आर्किटेक्चर तीन परतों के नाम देता है: इंटरनल (फ़ाइलें, इंडेक्स), कॉन्सेप्चुअल (लॉजिकल टेबल) और एक्सटर्नल (उपयोगकर्ता व्यू)।",
        "Three-schema architecture teen layers ke naam deta hai: internal (files, indexes), conceptual (logical tables), aur external (user views).",
      ],
      [
        "The conceptual schema is the community view: one Student table, one Course table, one Enrolment table, with keys and foreign keys.",
        "कॉन्सेप्चुअल स्कीमा सामुदायिक दृश्य है: एक Student टेबल, एक Course टेबल, एक Enrolment टेबल, की और फ़ॉरेन की के साथ।",
        "Conceptual schema community view hai: ek Student table, ek Course table, ek Enrolment table, keys aur foreign keys ke saath.",
      ],
      [
        "An external schema (view) can hide salary from clerks or show only CSE students to a department head.",
        "एक्सटर्नल स्कीमा (व्यू) क्लर्कों से वेतन छिपा सकती है या विभाग प्रमुख को केवल CSE छात्र दिखा सकती है।",
        "External schema (view) clerks se salary chhupa sakti hai ya department head ko sirf CSE students dikha sakti hai.",
      ],
      [
        "Intension of a relation is its schema; extension is the current set of tuples.",
        "रिलेशन की इंटेंशन उसका स्कीमा है; एक्सटेंशन वर्तमान टपल-समूह है।",
        "Relation ki intension uska schema hai; extension current tuple-set hai.",
      ],
      [
        "Valid states obey all constraints in the schema (domain, key, referential, check). An update that would violate a constraint is rejected.",
        "मान्य स्टेट स्कीमा के सभी कंस्ट्रेंट मानते हैं (डोमेन, की, रेफ़रेंशियल, चेक)। कंस्ट्रेंट तोड़ने वाला अपडेट अस्वीकृत होता है।",
        "Valid states schema ke saare constraints maante hain (domain, key, referential, check). Constraint todne wala update reject hota hai.",
      ],
      [
        "Views are used for security, simplicity, and logical data independence: programs query the view even if base tables are later split or merged.",
        "व्यू सुरक्षा, सरलता और लॉजिकल डेटा इंडिपेंडेंस के लिए हैं: प्रोग्राम व्यू पर क्वेरी करते हैं भले बाद में बेस टेबल टूटें या जुड़ें।",
        "Views security, simplicity aur logical data independence ke liye hain: programs view par query karte hain chahe baad mein base tables toot jayein ya jud jayein.",
      ],
    ]),
    C(
      "sql",
      `CREATE TABLE Student (
  roll_no   INT PRIMARY KEY,
  name      VARCHAR(60) NOT NULL,
  dept      VARCHAR(20),
  cgpa      NUMERIC(3,2)
);

CREATE VIEW cse_dean AS
SELECT roll_no, name, cgpa
FROM   Student
WHERE  dept = 'CSE';`,
      [
        "Base-table schema and an external view over it",
        "बेस-टेबल स्कीमा और उसके ऊपर एक एक्सटर्नल व्यू",
        "Base-table schema aur uske upar ek external view",
      ],
    ),
    NOTE(
      "A view is not the same as a snapshot table. Unless it is a materialised view, the DBMS recomputes the view query each time it is used.",
      "व्यू स्नैपशॉट टेबल नहीं है। जब तक यह मटेरियलाइज़्ड व्यू न हो, DBMS हर उपयोग पर व्यू क्वेरी फिर से चलाता है।",
      "View snapshot table nahi hai. Jab tak yeh materialised view na ho, DBMS har use par view query dubara chalaata hai.",
    ),
    EXAM(
      "Distinguish schema, instance and view. Draw the three-schema architecture and mark which level a CREATE VIEW statement belongs to.",
      "स्कीमा, इंस्टेंस और व्यू में अंतर कीजिए। थ्री-स्कीमा आर्किटेक्चर बनाइए और बताइए CREATE VIEW किस स्तर का है।",
      "Schema, instance aur view mein farak batao. Three-schema architecture banao aur mark karo CREATE VIEW kis level ka hai.",
    ),
  ]),

  "rdms-independence": topic("rdms-independence", [
    P(
      "Data independence is the capacity to change the schema at one level of the three-schema architecture without rewriting programs that use a higher level. Physical data independence shields the conceptual schema from storage changes. Logical data independence shields external schemas (and application programs) from conceptual-schema changes. Logical independence is harder and is only partly achieved in real products.",
      "डेटा इंडिपेंडेंस थ्री-स्कीमा आर्किटेक्चर के एक स्तर की स्कीमा बदलने की क्षमता है बिना ऊपरी स्तर के प्रोग्रामों को फिर लिखे। फिजिकल डेटा इंडिपेंडेंस कॉन्सेप्चुअल स्कीमा को स्टोरेज बदलाव से बचाती है। लॉजिकल डेटा इंडिपेंडेंस एक्सटर्नल स्कीमा (और एप्लिकेशन) को कॉन्सेप्चुअल बदलाव से बचाती है। लॉजिकल इंडिपेंडेंस कठिन है और वास्तविक उत्पादों में आंशिक ही मिलती है।",
      "Data independence three-schema architecture ke ek level ki schema badalne ki capacity hai bina upper-level programs ko dubara likhe. Physical data independence conceptual schema ko storage changes se bachati hai. Logical data independence external schemas (aur applications) ko conceptual changes se bachati hai. Logical independence mushkil hai aur real products mein partial hi milti hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Physical data independence: add an index, split a file across disks, change a B+ tree to a hash, compress pages — SQL queries stay the same.",
        "फिजिकल डेटा इंडिपेंडेंस: इंडेक्स जोड़ना, फ़ाइल को डिस्क पर बाँटना, B+ ट्री को हैश में बदलना, पेज कंप्रेस करना — SQL क्वेरी वही रहती हैं।",
        "Physical data independence: index jodna, file ko disks par baantna, B+ tree ko hash mein badalna, pages compress karna — SQL queries wahi rehti hain.",
      ],
      [
        "Logical data independence: add an attribute, split Student into Student and Guardian, or merge two 1:1 tables — existing views can be rewritten so old programs still compile.",
        "लॉजिकल डेटा इंडिपेंडेंस: एट्रिब्यूट जोड़ना, Student को Student और Guardian में बाँटना, या दो 1:1 टेबल जोड़ना — पुराने व्यू फिर लिखे जा सकते हैं ताकि पुराने प्रोग्राम चलें।",
        "Logical data independence: attribute jodna, Student ko Student aur Guardian mein baantna, ya do 1:1 tables jodna — purane views rewrite ho sakte hain taaki purane programs chalen.",
      ],
      [
        "Physical independence is provided by the internal/conceptual mapping; logical independence by the conceptual/external mapping.",
        "फिजिकल इंडिपेंडेंस इंटरनल/कॉन्सेप्चुअल मैपिंग से मिलती है; लॉजिकल इंडिपेंडेंस कॉन्सेप्चुअल/एक्सटर्नल मैपिंग से।",
        "Physical independence internal/conceptual mapping se milti hai; logical independence conceptual/external mapping se.",
      ],
      [
        "Dropping an attribute that a view still projects cannot be hidden — that is why logical independence is incomplete.",
        "जो एट्रिब्यूट कोई व्यू अभी प्रोजेक्ट करता है उसे हटाना छिपाया नहीं जा सकता — इसलिए लॉजिकल इंडिपेंडेंस अधूरी है।",
        "Jo attribute koi view abhi project karta hai use hatana chhupaya nahi ja sakta — isliye logical independence adhoori hai.",
      ],
      [
        "File systems have almost no data independence: a COBOL program embeds the record layout, so a new field forces a recompile.",
        "फ़ाइल सिस्टम में लगभग कोई डेटा इंडिपेंडेंस नहीं: COBOL प्रोग्राम रिकॉर्ड लेआउट एम्बेड करता है, नया फ़ील्ड रीकंपाइल मांगता है।",
        "File systems mein almost koi data independence nahi: COBOL program record layout embed karta hai, naya field recompile maangta hai.",
      ],
      [
        "Codd's Rule 8 is physical data independence; Rule 9 is logical data independence — both are required of a true RDBMS.",
        "कॉड का नियम 8 फिजिकल डेटा इंडिपेंडेंस है; नियम 9 लॉजिकल डेटा इंडिपेंडेंस — दोनों सच्चे RDBMS के लिए आवश्यक हैं।",
        "Codd ka Rule 8 physical data independence hai; Rule 9 logical data independence — dono true RDBMS ke liye zaroori hain.",
      ],
    ]),
    TBL(
      [
        ["Kind", "प्रकार", "Kind"],
        ["What may change", "क्या बदल सकता है", "Kya badal sakta hai"],
        ["What must not break", "क्या नहीं टूटना चाहिए", "Kya nahi tootna chahiye"],
      ],
      [
        [
          ["Physical", "फिजिकल", "Physical"],
          ["Indexes, file organisation, devices, compression", "इंडेक्स, फ़ाइल संगठन, डिवाइस, कंप्रेशन", "Indexes, file organisation, devices, compression"],
          ["Conceptual schema and all applications", "कॉन्सेप्चुअल स्कीमा और सभी एप्लिकेशन", "Conceptual schema aur saari applications"],
        ],
        [
          ["Logical", "लॉजिकल", "Logical"],
          ["Tables, attributes, constraints (conceptual schema)", "टेबल, एट्रिब्यूट, कंस्ट्रेंट (कॉन्सेप्चुअल स्कीमा)", "Tables, attributes, constraints (conceptual schema)"],
          ["External views and application programs", "एक्सटर्नल व्यू और एप्लिकेशन प्रोग्राम", "External views aur application programs"],
        ],
      ],
    ),
    EXAM(
      "Define physical and logical data independence. Give one example of each. State which is harder to achieve and why.",
      "फिजिकल और लॉजिकल डेटा इंडिपेंडेंस परिभाषित कीजिए। प्रत्येक का एक उदाहरण दीजिए। कौन अधिक कठिन है और क्यों?",
      "Physical aur logical data independence define karo. Har ek ka ek example do. Kaun zyada mushkil hai aur kyun?",
    ),
  ]),

  "rdms-arch": topic("rdms-arch", [
    P(
      "ANSI/SPARC described a three-schema (three-level) architecture that almost every textbook DBMS diagram follows. Users and application programs see external schemas. The DBA maintains one conceptual schema. The storage engine implements an internal schema of files, pages and indexes. Two mappings — conceptual/internal and external/conceptual — are what actually deliver data independence.",
      "ANSI/SPARC ने थ्री-स्कीमा (तीन-स्तरीय) आर्किटेक्चर बताया जिसका लगभग हर पाठ्यपुस्तक DBMS डायग्राम अनुसरण करता है। उपयोगकर्ता और एप्लिकेशन एक्सटर्नल स्कीमा देखते हैं। DBA एक कॉन्सेप्चुअल स्कीमा रखता है। स्टोरेज इंजन फ़ाइल, पेज और इंडेक्स की इंटरनल स्कीमा लागू करता है। दो मैपिंग — कॉन्सेप्चुअल/इंटरनल और एक्सटर्नल/कॉन्सेप्चुअल — वास्तव में डेटा इंडिपेंडेंस देती हैं।",
      "ANSI/SPARC ne three-schema (teen-level) architecture bataya jiska almost har textbook DBMS diagram follow karta hai. Users aur applications external schemas dekhte hain. DBA ek conceptual schema rakhta hai. Storage engine files, pages aur indexes ki internal schema implement karta hai. Do mappings — conceptual/internal aur external/conceptual — asal mein data independence deti hain.",
    ),
    D(
      "dbms-3tier",
      "Three-schema DBMS architecture: external views, conceptual schema, internal schema",
      "थ्री-स्कीमा DBMS आर्किटेक्चर: एक्सटर्नल व्यू, कॉन्सेप्चुअल स्कीमा, इंटरनल स्कीमा",
      "Three-schema DBMS architecture: external views, conceptual schema, internal schema",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "External level: many views. A payroll clerk sees Employee(emp_id, name, basic); HR sees extra columns; a student sees none of this.",
        "एक्सटर्नल स्तर: कई व्यू। पेरोल क्लर्क Employee(emp_id, name, basic) देखता है; HR अतिरिक्त कॉलम देखता है; छात्र इसे नहीं देखते।",
        "External level: kai views. Payroll clerk Employee(emp_id, name, basic) dekhta hai; HR extra columns dekhta hai; student yeh nahi dekhte.",
      ],
      [
        "Conceptual (logical) level: the whole enterprise described as relations, domains, keys, FDs and constraints — independent of how bytes sit on disk.",
        "कॉन्सेप्चुअल (लॉजिकल) स्तर: पूरा उद्यम relations, domains, keys, FDs और constraints के रूप में — डिस्क पर बाइट्स से स्वतंत्र।",
        "Conceptual (logical) level: poora enterprise relations, domains, keys, FDs aur constraints ke roop mein — disk par bytes se independent.",
      ],
      [
        "Internal (physical) level: heap files, clustered indexes, partitions, buffer manager, fill factor. This is the storage engine's world.",
        "इंटरनल (फिजिकल) स्तर: हीप फ़ाइलें, क्लस्टर्ड इंडेक्स, पार्टीशन, बफर मैनेजर, फिल फ़ैक्टर। यह स्टोरेज इंजन की दुनिया है।",
        "Internal (physical) level: heap files, clustered indexes, partitions, buffer manager, fill factor. Yeh storage engine ki duniya hai.",
      ],
      [
        "Do not confuse the three-schema architecture with client-server or three-tier web architecture (presentation / application / data). Exam papers mix the two; name ANSI/SPARC if you mean schemas.",
        "थ्री-स्कीमा आर्किटेक्चर को क्लाइंट-सर्वर या थ्री-टियर वेब आर्किटेक्चर (प्रस्तुति / एप्लिकेशन / डेटा) से न मिलाएँ। पेपर दोनों मिला देते हैं; स्कीमा के लिए ANSI/SPARC लिखें।",
        "Three-schema architecture ko client-server ya three-tier web architecture (presentation / application / data) se mat milao. Paper dono mila dete hain; schema ke liye ANSI/SPARC likho.",
      ],
      [
        "A typical RDBMS process also has a query parser, optimiser, executor, transaction manager, lock manager, log manager and buffer pool.",
        "एक सामान्य RDBMS प्रक्रिया में क्वेरी पार्सर, ऑप्टिमाइज़र, एक्ज़ीक्यूटर, ट्रांज़ैक्शन मैनेजर, लॉक मैनेजर, लॉग मैनेजर और बफर पूल भी होते हैं।",
        "Typical RDBMS process mein query parser, optimiser, executor, transaction manager, lock manager, log manager aur buffer pool bhi hote hain.",
      ],
      [
        "Centralised, 2-tier (client SQL + server DBMS) and 3-tier (browser + app server + DBMS) are deployment styles sitting on top of the same three schemas.",
        "केंद्रीकृत, 2-टियर (क्लाइंट SQL + सर्वर DBMS) और 3-टियर (ब्राउज़र + ऐप सर्वर + DBMS) डिप्लॉयमेंट शैलियाँ हैं जो उन्हीं तीन स्कीमा के ऊपर बैठती हैं।",
        "Centralised, 2-tier (client SQL + server DBMS) aur 3-tier (browser + app server + DBMS) deployment styles hain jo unhi teen schemas ke upar baithti hain.",
      ],
    ]),
    EXAM(
      "Draw and label the ANSI/SPARC three-schema architecture. Mark the two mappings and write one sentence each on how they give physical and logical data independence.",
      "ANSI/SPARC थ्री-स्कीमा आर्किटेक्चर बनाकर लेबल कीजिए। दोनों मैपिंग चिह्नित कीजिए और एक-एक वाक्य में बताइए वे फिजिकल व लॉजिकल इंडिपेंडेंस कैसे देती हैं।",
      "ANSI/SPARC three-schema architecture draw karke label karo. Dono mappings mark karo aur ek-ek sentence mein batao ve physical aur logical independence kaise deti hain.",
    ),
  ]),
  "rdms-dba": topic("rdms-dba", [
    P(
      "The Database Administrator (DBA) is the person (or team) accountable for the database as a shared organisational resource. Programmers write SQL against the schema the DBA publishes; end users never touch storage files. In a college lab one teacher may play DBA; in a bank the role is split among system DBA, application DBA and security DBA.",
      "Database Administrator (DBA) वह व्यक्ति (या टीम) है जो डेटाबेस को साझा संगठनात्मक संसाधन के रूप में जवाबदेह होता है। प्रोग्रामर उसी स्कीमा पर SQL लिखते हैं जो DBA प्रकाशित करता है; अंत उपयोगकर्ता स्टोरेज फ़ाइलों को नहीं छूते। कॉलेज लैब में एक शिक्षक DBA हो सकता है; बैंक में भूमिका सिस्टम DBA, एप्लिकेशन DBA और सुरक्षा DBA में बँटती है।",
      "Database Administrator (DBA) woh person (ya team) hai jo database ko shared organisational resource ki tarah accountable hota hai. Programmers usi schema par SQL likhte hain jo DBA publish karta hai; end users storage files nahi chhoote. College lab mein ek teacher DBA ho sakta hai; bank mein role system DBA, application DBA aur security DBA mein bant ta hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Schema definition: decide entities, keys, FDs, normalisation, and issue CREATE TABLE / CREATE VIEW / CREATE INDEX.",
        "स्कीमा परिभाषा: एंटिटी, की, FD, नॉर्मलाइज़ेशन तय करना और CREATE TABLE / CREATE VIEW / CREATE INDEX चलाना।",
        "Schema definition: entities, keys, FDs, normalisation decide karna aur CREATE TABLE / CREATE VIEW / CREATE INDEX chalana.",
      ],
      [
        "Security and authorisation: CREATE USER, GRANT/REVOKE, roles, auditing failed logins, encrypting backups.",
        "सुरक्षा और प्राधिकरण: CREATE USER, GRANT/REVOKE, रोल, असफल लॉगिन का ऑडिट, बैकअप एन्क्रिप्ट करना।",
        "Security aur authorisation: CREATE USER, GRANT/REVOKE, roles, failed logins ka audit, backups encrypt karna.",
      ],
      [
        "Storage and performance: tablespaces, indexes, statistics, query plans, partitioning, vacuum/rebuild.",
        "स्टोरेज और प्रदर्शन: टेबलस्पेस, इंडेक्स, आँकड़े, क्वेरी प्लान, पार्टीशनिंग, वैक्यूम/रीबिल्ड।",
        "Storage aur performance: tablespaces, indexes, statistics, query plans, partitioning, vacuum/rebuild.",
      ],
      [
        "Backup, restore and recovery: full/incremental dumps, WAL/redo logs, RPO/RTO targets, disaster-recovery drills.",
        "बैकअप, रिस्टोर और रिकवरी: फुल/इंक्रीमेंटल डंप, WAL/redo लॉग, RPO/RTO लक्ष्य, डिज़ास्टर-रिकवरी ड्रिल।",
        "Backup, restore aur recovery: full/incremental dumps, WAL/redo logs, RPO/RTO targets, disaster-recovery drills.",
      ],
      [
        "Concurrency and integrity policy: isolation level, lock timeouts, constraint strategy, change-management for DDL.",
        "कंकरेंसी और अखंडता नीति: आइसोलेशन स्तर, लॉक टाइमआउट, कंस्ट्रेंट रणनीति, DDL का चेंज-मैनेजमेंट।",
        "Concurrency aur integrity policy: isolation level, lock timeouts, constraint strategy, DDL ka change-management.",
      ],
      [
        "Liaison: train users, document the data dictionary, negotiate requirements with application teams.",
        "समन्वय: उपयोगकर्ताओं को प्रशिक्षित करना, डेटा डिक्शनरी दस्तावेज़ित करना, एप्लिकेशन टीमों से आवश्यकताएँ तय करना।",
        "Liaison: users ko train karna, data dictionary document karna, application teams se requirements negotiate karna.",
      ],
      [
        "A Data Administrator (DA) owns business meaning of data; the DBA owns the technical DBMS. Small shops combine both hats.",
        "Data Administrator (DA) डेटा का व्यावसायिक अर्थ रखता है; DBA तकनीकी DBMS रखता है। छोटी जगहों पर दोनों एक ही व्यक्ति होते हैं।",
        "Data Administrator (DA) data ka business meaning rakhta hai; DBA technical DBMS rakhta hai. Chhoti shops mein dono ek hi person hote hain.",
      ],
    ]),
    EXAM(
      "Write any six functions of a DBA. Distinguish DBA from a naive user and from an application programmer in one line each.",
      "DBA के कोई छह कार्य लिखिए। DBA को naive user और application programmer से एक-एक पंक्ति में अलग कीजिए।",
      "DBA ke koi chhe functions likho. DBA ko naive user aur application programmer se ek-ek line mein alag karo.",
    ),
  ]),

  "rdms-models": topic("rdms-models", [
    P(
      "A data model is a collection of tools for describing data, relationships, constraints and operations. Pre-relational products used the hierarchical model (tree of parent-child records) and the network model (graph of owner-member set types). The relational model, proposed by E. F. Codd in 1970, stores data in tables and is the model every BCA paper expects you to master. Object and NoSQL models exist, but they are outside this syllabus's core.",
      "डेटा मॉडल डेटा, संबंध, कंस्ट्रेंट और ऑपरेशन वर्णित करने के उपकरणों का संग्रह है। प्री-रिलेशनल उत्पादों ने हायरार्किकल मॉडल (पैरेंट-चाइल्ड रिकॉर्ड का वृक्ष) और नेटवर्क मॉडल (owner-member सेट प्रकारों का ग्राफ) उपयोग किया। E. F. Codd ने 1970 में प्रस्तावित रिलेशनल मॉडल डेटा को टेबल में रखता है और यही वह मॉडल है जिसकी हर BCA पेपर अपेक्षा करता है। ऑब्जेक्ट और NoSQL मॉडल हैं, पर वे इस पाठ्यक्रम के केंद्र से बाहर हैं।",
      "Data model data, relationships, constraints aur operations describe karne ke tools ka collection hai. Pre-relational products hierarchical model (parent-child records ka tree) aur network model (owner-member set types ka graph) use karte the. E. F. Codd ne 1970 mein proposed relational model data ko tables mein rakhta hai aur yahi woh model hai jiski har BCA paper ummeed karti hai. Object aur NoSQL models hain, lekin ve is syllabus ke core se bahar hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Hierarchical (IMS-style): one parent, many children; a child has at most one parent. Fast for the designed path (Department to Employee) and painful for many-to-many or reverse queries.",
        "हायरार्किकल (IMS-शैली): एक पैरेंट, कई चाइल्ड; चाइल्ड का अधिकतम एक पैरेंट। डिज़ाइन किए पथ (Department से Employee) पर तेज़, many-to-many या उलटी क्वेरी पर कष्टदायक।",
        "Hierarchical (IMS-style): ek parent, kai children; child ka at most ek parent. Designed path (Department to Employee) par tez, many-to-many ya reverse queries par dardnak.",
      ],
      [
        "Network (CODASYL): records plus named set types; a record can belong to several sets, so M:N is possible via a link record. Navigation is pointer-chasing, not a set language.",
        "नेटवर्क (CODASYL): रिकॉर्ड प्लस नामित सेट प्रकार; एक रिकॉर्ड कई सेट का सदस्य हो सकता है, इसलिए लिंक रिकॉर्ड से M:N संभव। नेविगेशन पॉइंटर-चेसिंग है, सेट भाषा नहीं।",
        "Network (CODASYL): records plus named set types; ek record kai sets ka member ho sakta hai, isliye link record se M:N possible. Navigation pointer-chasing hai, set language nahi.",
      ],
      [
        "Relational: all data in relations (tables); links are values of keys, not pointers. Operations are closed: the result of a query is again a relation.",
        "रिलेशनल: सारा डेटा relations (टेबल) में; लिंक की के मान हैं, पॉइंटर नहीं। ऑपरेशन बंद हैं: क्वेरी का परिणाम फिर एक रिलेशन है।",
        "Relational: saara data relations (tables) mein; links keys ke values hain, pointers nahi. Operations closed hain: query ka result phir ek relation hai.",
      ],
      [
        "Relational integrity (entity integrity, referential integrity, domain) is declared, not buried in application navigation code.",
        "रिलेशनल अखंडता (एंटिटी, रेफ़रेंशियल, डोमेन) घोषित होती है, एप्लिकेशन नेविगेशन कोड में दबी नहीं।",
        "Relational integrity (entity, referential, domain) declare hoti hai, application navigation code mein dabi nahi.",
      ],
      [
        "Physical pointers in hierarchical/network schemas destroy data independence; Codd's model uses only logical names.",
        "हायरार्किकल/नेटवर्क स्कीमा के भौतिक पॉइंटर डेटा इंडिपेंडेंस तोड़ते हैं; कॉड का मॉडल केवल लॉजिकल नाम उपयोग करता है।",
        "Hierarchical/network schemas ke physical pointers data independence todte hain; Codd ka model sirf logical names use karta hai.",
      ],
      [
        "Today's SQL engines are relational at the conceptual level even if they store B-trees internally — the internal schema is hidden.",
        "आज के SQL इंजन कॉन्सेप्चुअल स्तर पर रिलेशनल हैं भले अंदर B-tree हों — इंटरनल स्कीमा छिपी रहती है।",
        "Aaj ke SQL engines conceptual level par relational hain chahe andar B-tree hon — internal schema chhupi rehti hai.",
      ],
    ]),
    TBL(
      [
        ["Feature", "विशेषता", "Feature"],
        ["Hierarchical", "हायरार्किकल", "Hierarchical"],
        ["Network", "नेटवर्क", "Network"],
        ["Relational", "रिलेशनल", "Relational"],
      ],
      [
        [
          ["Shape", "आकार", "Shape"],
          ["Tree", "वृक्ष", "Tree"],
          ["Graph (sets)", "ग्राफ (सेट)", "Graph (sets)"],
          ["Tables", "टेबल", "Tables"],
        ],
        [
          ["M:N", "M:N", "M:N"],
          ["Awkward (virtual parents)", "कठिन (वर्चुअल पैरेंट)", "Mushkil (virtual parents)"],
          ["Via link records", "लिंक रिकॉर्ड से", "Link records se"],
          ["Junction (associative) table", "जंक्शन (एसोसिएटिव) टेबल", "Junction (associative) table"],
        ],
        [
          ["Language", "भाषा", "Language"],
          ["DL/I style calls", "DL/I शैली कॉल", "DL/I style calls"],
          ["CODASYL DML", "CODASYL DML", "CODASYL DML"],
          ["SQL / relational algebra", "SQL / रिलेशनल अलजेब्रा", "SQL / relational algebra"],
        ],
      ],
    ),
    EXAM(
      "Compare hierarchical, network and relational models on structure, handling of M:N, and data independence. State one commercial example of each if asked (IMS, IDMS, Oracle/MySQL).",
      "हायरार्किकल, नेटवर्क और रिलेशनल मॉडल की तुलना संरचना, M:N हैंडलिंग और डेटा इंडिपेंडेंस पर कीजिए। उदाहरण: IMS, IDMS, Oracle/MySQL।",
      "Hierarchical, network aur relational models ki tulna structure, M:N handling aur data independence par karo. Examples: IMS, IDMS, Oracle/MySQL.",
    ),
  ]),

  "rdms-languages": topic("rdms-languages", [
    P(
      "SQL is not one language but four sublanguages that share a grammar. DDL (Data Definition Language) describes schemas. DML (Data Manipulation Language) reads and changes rows. DCL (Data Control Language) grants privileges. TCL (Transaction Control Language) marks transaction boundaries. A fifth informal group, DQL, is sometimes used for SELECT alone.",
      "SQL एक भाषा नहीं बल्कि साझा व्याकरण वाली चार उपभाषाएँ हैं। DDL (Data Definition Language) स्कीमा वर्णित करती है। DML (Data Manipulation Language) पंक्तियाँ पढ़ती और बदलती है। DCL (Data Control Language) विशेषाधिकार देती है। TCL (Transaction Control Language) ट्रांज़ैक्शन सीमाएँ चिह्नित करती है। पाँचवाँ अनौपचारिक समूह DQL कभी-कभी अकेले SELECT के लिए कहा जाता है।",
      "SQL ek language nahi balki shared grammar wali chaar sublanguages hain. DDL (Data Definition Language) schema describe karti hai. DML (Data Manipulation Language) rows padhti aur badalti hai. DCL (Data Control Language) privileges deti hai. TCL (Transaction Control Language) transaction boundaries mark karti hai. Paanchwaan informal group DQL kabhi-kabhi akele SELECT ke liye kaha jaata hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "DDL: CREATE, ALTER, DROP, TRUNCATE (schema objects: table, view, index, schema, sequence). These statements are auto-committed in many engines.",
        "DDL: CREATE, ALTER, DROP, TRUNCATE (स्कीमा ऑब्जेक्ट: टेबल, व्यू, इंडेक्स, स्कीमा, सीक्वेंस)। कई इंजनों में ये ऑटो-कमिट होते हैं।",
        "DDL: CREATE, ALTER, DROP, TRUNCATE (schema objects: table, view, index, schema, sequence). Kai engines mein yeh auto-commit hote hain.",
      ],
      [
        "DML: SELECT, INSERT, UPDATE, DELETE, MERGE. Some authors keep SELECT in DQL and call the rest DML; say so if the options split them.",
        "DML: SELECT, INSERT, UPDATE, DELETE, MERGE। कुछ लेखक SELECT को DQL में रखते हैं; यदि विकल्प बाँटें तो वैसा लिखें।",
        "DML: SELECT, INSERT, UPDATE, DELETE, MERGE. Kuch authors SELECT ko DQL mein rakhte hain; agar options baanthein to waisa likho.",
      ],
      [
        "DCL: GRANT, REVOKE (and DENY in some dialects). Privileges include SELECT, INSERT, UPDATE, DELETE, REFERENCES, EXECUTE.",
        "DCL: GRANT, REVOKE (कुछ डायलेक्ट में DENY)। विशेषाधिकार: SELECT, INSERT, UPDATE, DELETE, REFERENCES, EXECUTE।",
        "DCL: GRANT, REVOKE (kuch dialects mein DENY). Privileges: SELECT, INSERT, UPDATE, DELETE, REFERENCES, EXECUTE.",
      ],
      [
        "TCL: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT, RELEASE SAVEPOINT. These implement ACID atomicity.",
        "TCL: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT, RELEASE SAVEPOINT। ये ACID एटॉमिसिटी लागू करते हैं।",
        "TCL: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, SAVEPOINT, RELEASE SAVEPOINT. Yeh ACID atomicity implement karte hain.",
      ],
      [
        "SQL is set-oriented and declarative: you say what you want, the optimiser decides how (index scan vs seq scan).",
        "SQL सेट-ओरिएंटेड और डिक्लेरेटिव है: आप बताते हैं क्या चाहिए, ऑप्टिमाइज़र तय करता है कैसे (इंडेक्स स्कैन बनाम सीक्वेंशियल)।",
        "SQL set-oriented aur declarative hai: aap bataate ho kya chahiye, optimiser decide karta hai kaise (index scan vs seq scan).",
      ],
      [
        "Embedded SQL (C/Java) and dynamic SQL (PREPARE/EXECUTE) exist, but paper questions almost always use interactive SQL.",
        "एम्बेडेड SQL (C/Java) और डायनामिक SQL (PREPARE/EXECUTE) हैं, पर पेपर लगभग हमेशा इंटरैक्टिव SQL पूछता है।",
        "Embedded SQL (C/Java) aur dynamic SQL (PREPARE/EXECUTE) hain, lekin paper almost hamesha interactive SQL poochhta hai.",
      ],
    ]),
    C(
      "sql",
      `-- DDL
CREATE TABLE Course (
  course_id  CHAR(6) PRIMARY KEY,
  title      VARCHAR(80) NOT NULL,
  credits    INT CHECK (credits BETWEEN 1 AND 6)
);
ALTER TABLE Course ADD COLUMN dept VARCHAR(20);

-- DML
INSERT INTO Course VALUES ('CS3001', 'RDBMS', 4, 'CSE');
UPDATE Course SET credits = 5 WHERE course_id = 'CS3001';
SELECT title FROM Course WHERE credits >= 4;
DELETE FROM Course WHERE course_id = 'CS3001';

-- DCL
GRANT SELECT, INSERT ON Course TO faculty_role;
REVOKE INSERT ON Course FROM faculty_role;

-- TCL
BEGIN;
UPDATE Account SET bal = bal - 500 WHERE acc_id = 101;
UPDATE Account SET bal = bal + 500 WHERE acc_id = 202;
COMMIT;   -- or ROLLBACK;`,
      [
        "DDL, DML, DCL and TCL in one sitting — learn which verb belongs where",
        "एक जगह DDL, DML, DCL और TCL — कौन सा क्रियापद कहाँ है याद करें",
        "Ek jagah DDL, DML, DCL aur TCL — kaun sa verb kahan hai yaad karo",
      ],
    ),
    EXAM(
      "Classify CREATE INDEX, GRANT, ROLLBACK, MERGE, TRUNCATE, SELECT as DDL/DML/DCL/TCL. Mention that TRUNCATE is DDL (it resets storage and is typically auto-commit) whereas DELETE is DML.",
      "CREATE INDEX, GRANT, ROLLBACK, MERGE, TRUNCATE, SELECT को DDL/DML/DCL/TCL में वर्गीकृत कीजिए। TRUNCATE DDL है (स्टोरेज रीसेट, प्रायः ऑटो-कमिट), DELETE DML है।",
      "CREATE INDEX, GRANT, ROLLBACK, MERGE, TRUNCATE, SELECT ko DDL/DML/DCL/TCL mein classify karo. TRUNCATE DDL hai (storage reset, typically auto-commit), DELETE DML hai.",
    ),
  ]),

  "rdms-users-dict": topic("rdms-users-dict", [
    P(
      "Not everyone who touches a DBMS is a DBA. Textbooks classify users by how they interact with the system, and they classify metadata as the data dictionary (system catalog). The catalog is itself a set of tables — Codd's Rule 4 — so you can query it with SQL.",
      "DBMS को छूने वाला हर व्यक्ति DBA नहीं होता। पाठ्यपुस्तकें उपयोगकर्ताओं को इंटरैक्शन के आधार पर वर्गीकृत करती हैं, और मेटाडेटा को डेटा डिक्शनरी (सिस्टम कैटलॉग) कहती हैं। कैटलॉग स्वयं टेबलों का समूह है — कॉड का नियम 4 — इसलिए उस पर SQL चला सकते हैं।",
      "DBMS ko chhoone wala har person DBA nahi hota. Textbooks users ko interaction ke hisaab se classify karti hain, aur metadata ko data dictionary (system catalog) kehti hain. Catalog khud tables ka set hai — Codd ka Rule 4 — isliye us par SQL chala sakte ho.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Naive / end users: bank clerks, students on a portal; they run canned transactions (forms) and never write SQL.",
        "Naive / एंड यूज़र: बैंक क्लर्क, पोर्टल पर छात्र; वे तैयार ट्रांज़ैक्शन (फ़ॉर्म) चलाते हैं, SQL नहीं लिखते।",
        "Naive / end users: bank clerks, portal par students; ve canned transactions (forms) chalate hain, SQL nahi likhte.",
      ],
      [
        "Casual users: managers who type occasional ad-hoc queries, often through a GUI or report tool.",
        "Casual यूज़र: प्रबंधक जो कभी-कभी तदर्थ क्वेरी लिखते हैं, अक्सर GUI या रिपोर्ट टूल से।",
        "Casual users: managers jo kabhi-kabhi ad-hoc queries likhte hain, aksar GUI ya report tool se.",
      ],
      [
        "Application programmers: write embedded SQL, JDBC/ODBC, stored procedures; they know the external schema, not the internal files.",
        "एप्लिकेशन प्रोग्रामर: एम्बेडेड SQL, JDBC/ODBC, स्टोर्ड प्रोसीजर लिखते हैं; वे एक्सटर्नल स्कीमा जानते हैं, इंटरनल फ़ाइलें नहीं।",
        "Application programmers: embedded SQL, JDBC/ODBC, stored procedures likhte hain; ve external schema jaante hain, internal files nahi.",
      ],
      [
        "Sophisticated users / analysts: write complex SQL, create views, maybe user-defined functions.",
        "परिष्कृत उपयोगकर्ता / विश्लेषक: जटिल SQL लिखते हैं, व्यू बनाते हैं, शायद यूज़र-डिफ़ाइंड फ़ंक्शन।",
        "Sophisticated users / analysts: complex SQL likhte hain, views banate hain, shayad user-defined functions.",
      ],
      [
        "DBA / system users: schema, security, backup, performance — already covered in the DBA topic.",
        "DBA / सिस्टम यूज़र: स्कीमा, सुरक्षा, बैकअप, प्रदर्शन — DBA विषय में कवर।",
        "DBA / system users: schema, security, backup, performance — DBA topic mein cover.",
      ],
      [
        "Data dictionary (catalog): tables such as INFORMATION_SCHEMA.TABLES, COLUMNS, KEY_COLUMN_USAGE, or Oracle's USER_TABLES. It stores names, types, constraints, privileges and statistics.",
        "डेटा डिक्शनरी (कैटलॉग): INFORMATION_SCHEMA.TABLES, COLUMNS, KEY_COLUMN_USAGE या Oracle की USER_TABLES। इसमें नाम, प्रकार, कंस्ट्रेंट, विशेषाधिकार और आँकड़े रहते हैं।",
        "Data dictionary (catalog): INFORMATION_SCHEMA.TABLES, COLUMNS, KEY_COLUMN_USAGE ya Oracle ki USER_TABLES. Isme names, types, constraints, privileges aur statistics rehte hain.",
      ],
      [
        "Active dictionary: the DBMS consults and updates the catalog on every DDL; a passive dictionary is a separate document that can go stale.",
        "सक्रिय डिक्शनरी: DBMS हर DDL पर कैटलॉग देखता और अपडेट करता है; निष्क्रिय डिक्शनरी अलग दस्तावेज़ है जो पुराना पड़ सकता है।",
        "Active dictionary: DBMS har DDL par catalog dekhta aur update karta hai; passive dictionary alag document hai jo stale ho sakta hai.",
      ],
    ]),
    C(
      "sql",
      `SELECT table_name, column_name, data_type, is_nullable
FROM   information_schema.columns
WHERE  table_name = 'student'
ORDER  BY ordinal_position;`,
      [
        "Querying the data dictionary for the Student table",
        "Student टेबल के लिए डेटा डिक्शनरी क्वेरी",
        "Student table ke liye data dictionary query",
      ],
    ),
    EXAM(
      "Name four categories of DBMS users with one example each. Define data dictionary and distinguish active from passive.",
      "DBMS उपयोगकर्ताओं की चार श्रेणियाँ उदाहरण सहित लिखिए। डेटा डिक्शनरी परिभाषित कीजिए तथा सक्रिय व निष्क्रिय में अंतर कीजिए।",
      "DBMS users ki chaar categories example ke saath likho. Data dictionary define karo aur active vs passive ka farak batao.",
    ),
  ]),
  "rdms-er-intro": topic("rdms-er-intro", [
    P(
      "The Entity-Relationship (ER) model, introduced by Peter Chen (1976), is the standard conceptual design tool before we write CREATE TABLE. An entity is a distinguishable real-world object (a student, a course). A relationship is an association among entities (enrols). Attributes describe them (name, credits). Cardinality says how many entities on one side associate with how many on the other: 1:1, 1:N or M:N.",
      "Entity-Relationship (ER) मॉडल, जिसे Peter Chen (1976) ने दिया, CREATE TABLE लिखने से पहले का मानक कॉन्सेप्चुअल डिज़ाइन उपकरण है। एंटिटी एक विभेद्य वास्तविक वस्तु है (छात्र, कोर्स)। रिलेशनशिप एंटिटियों का संबंध है (enrols)। एट्रिब्यूट उन्हें वर्णित करते हैं (name, credits)। कार्डिनैलिटी बताती है एक ओर कितनी एंटिटी दूसरी ओर कितनी से जुड़ती हैं: 1:1, 1:N या M:N।",
      "Entity-Relationship (ER) model, Peter Chen (1976) ne diya, CREATE TABLE likhne se pehle ka standard conceptual design tool hai. Entity ek distinguishable real-world object hai (student, course). Relationship entities ka association hai (enrols). Attributes unhe describe karte hain (name, credits). Cardinality batati hai ek side kitni entities doosri side kitni se judti hain: 1:1, 1:N ya M:N.",
    ),
    D(
      "er",
      "ER sketch: Student and Course as entities, Enrols as an M:N relationship with attribute grade",
      "ER रेखाचित्र: Student और Course एंटिटी, Enrols एक M:N रिलेशनशिप, एट्रिब्यूट grade",
      "ER sketch: Student aur Course entities, Enrols ek M:N relationship, attribute grade",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Entity type versus entity instance: Student is the type; (101, Anita) is an instance (entity set is the current collection of instances).",
        "एंटिटी टाइप बनाम इंस्टेंस: Student टाइप है; (101, Anita) इंस्टेंस है (एंटिटी सेट वर्तमान इंस्टेंस-समूह है)।",
        "Entity type versus instance: Student type hai; (101, Anita) instance hai (entity set current instances ka collection hai).",
      ],
      [
        "Strong entity has its own key. Weak entity has no key of its own; it is identified by an owner plus a partial key (Discriminator), e.g. Dependent of Employee.",
        "स्ट्रॉन्ग एंटिटी की अपनी की होती है। वीक एंटिटी की अपनी की नहीं; वह ओनर प्लस partial key (Discriminator) से पहचानी जाती है, जैसे Employee का Dependent।",
        "Strong entity ki apni key hoti hai. Weak entity ki apni key nahi; woh owner plus partial key (Discriminator) se pehchani jaati hai, jaise Employee ka Dependent.",
      ],
      [
        "Attributes: simple vs composite (Name = FName + LName), single-valued vs multi-valued (phone numbers), stored vs derived (age from dob), key vs descriptive, null-able vs mandatory.",
        "एट्रिब्यूट: सरल बनाम कम्पोजिट (Name = FName + LName), सिंगल-वैल्यूड बनाम मल्टी-वैल्यूड (फ़ोन), स्टोर्ड बनाम derived (dob से age), की बनाम वर्णनात्मक, null-able बनाम अनिवार्य।",
        "Attributes: simple vs composite (Name = FName + LName), single-valued vs multi-valued (phones), stored vs derived (dob se age), key vs descriptive, null-able vs mandatory.",
      ],
      [
        "Relationship degree: unary (recursive, Employee supervises Employee), binary (Student enrols Course), ternary (Student, Project, Teacher).",
        "रिलेशनशिप डिग्री: यूनरी (recursive, Employee supervises Employee), बाइनरी (Student enrols Course), टर्नरी (Student, Project, Teacher)।",
        "Relationship degree: unary (recursive, Employee supervises Employee), binary (Student enrols Course), ternary (Student, Project, Teacher).",
      ],
      [
        "Cardinality 1:1 — each department has one chair and each chair heads one department. 1:N — one department has many employees. M:N — students and courses.",
        "कार्डिनैलिटी 1:1 — प्रत्येक विभाग का एक अध्यक्ष, प्रत्येक अध्यक्ष एक विभाग। 1:N — एक विभाग के कई कर्मचारी। M:N — छात्र और कोर्स।",
        "Cardinality 1:1 — har department ka ek chair, har chair ek department. 1:N — ek department ke kai employees. M:N — students aur courses.",
      ],
      [
        "A relationship can have its own attributes (Enrols.grade, WorksOn.hours). Those attributes belong to the association, not to either entity alone.",
        "रिलेशनशिप के अपने एट्रिब्यूट हो सकते हैं (Enrols.grade, WorksOn.hours)। वे एसोसिएशन के हैं, किसी एक एंटिटी के नहीं।",
        "Relationship ke apne attributes ho sakte hain (Enrols.grade, WorksOn.hours). Woh association ke hain, kisi ek entity ke nahi.",
      ],
      [
        "Role names label the two ends of a recursive relationship: supervisor and supervisee.",
        "रोल नाम recursive रिलेशनशिप के दो सिरों को लेबल करते हैं: supervisor और supervisee।",
        "Role names recursive relationship ke do ends ko label karte hain: supervisor aur supervisee.",
      ],
    ]),
    EXAM(
      "Define entity, relationship and attribute. Draw an ER diagram for Student-Course-Enrols showing M:N cardinality and a relationship attribute grade. Distinguish strong and weak entity with a diagram.",
      "एंटिटी, रिलेशनशिप और एट्रिब्यूट परिभाषित कीजिए। Student-Course-Enrols का ER डायग्राम बनाइए जिसमें M:N और रिलेशनशिप एट्रिब्यूट grade हो। स्ट्रॉन्ग व वीक एंटिटी का अंतर डायग्राम सहित दीजिए।",
      "Entity, relationship aur attribute define karo. Student-Course-Enrols ka ER diagram banao jisme M:N aur relationship attribute grade ho. Strong vs weak entity ka farak diagram ke saath do.",
    ),
  ]),

  "rdms-er-diagrams": topic("rdms-er-diagrams", [
    P(
      "An ER diagram is the picture of an ER model. Chen notation uses rectangles for entity types, diamonds for relationship types, ovals for attributes, double rectangles for weak entities, double diamonds for identifying relationships, and underlines for keys. Crow's-foot (IE) notation is common in tools; BCA papers almost always expect Chen.",
      "ER डायग्राम ER मॉडल का चित्र है। Chen नोटेशन में एंटिटी टाइप आयत, रिलेशनशिप टाइप समचतुर्भुज, एट्रिब्यूट अंडाकार, वीक एंटिटी दोहरी आयत, identifying रिलेशनशिप दोहरा समचतुर्भुज, और की के लिए अंडरलाइन। Crow's-foot (IE) टूल्स में आम है; BCA पेपर लगभग हमेशा Chen चाहते हैं।",
      "ER diagram ER model ki picture hai. Chen notation mein entity types rectangles, relationship types diamonds, attributes ovals, weak entities double rectangles, identifying relationships double diamonds, keys ke liye underline. Crow's-foot (IE) tools mein common hai; BCA papers almost hamesha Chen chahte hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Key attribute: underlined oval. Partial key of a weak entity: dashed underline.",
        "की एट्रिब्यूट: रेखांकित अंडाकार। वीक एंटिटी की partial key: डैश्ड अंडरलाइन।",
        "Key attribute: underlined oval. Weak entity ki partial key: dashed underline.",
      ],
      [
        "Multi-valued attribute: double oval (Phone). Derived attribute: dashed oval (Age). Composite: oval linked to sub-ovals (Address to Street, City).",
        "मल्टी-वैल्यूड एट्रिब्यूट: दोहरा अंडाकार (Phone)। Derived: डैश्ड अंडाकार (Age)। कम्पोजिट: उप-अंडाकार से जुड़ा (Address से Street, City)।",
        "Multi-valued attribute: double oval (Phone). Derived: dashed oval (Age). Composite: sub-ovals se juda (Address to Street, City).",
      ],
      [
        "Cardinality is written as 1 or N (or M) on the edges, or as (min, max) pairs — Chen vs min-max (look-across) notation. State which you are using.",
        "कार्डिनैलिटी किनारों पर 1 या N (या M), या (min, max) जोड़े — Chen बनाम min-max। बताएँ आप कौन सी उपयोग कर रहे हैं।",
        "Cardinality edges par 1 ya N (ya M), ya (min, max) pairs — Chen vs min-max. Batao aap kaun si use kar rahe ho.",
      ],
      [
        "Total participation: double line from entity to relationship (every employee must work for a department). Partial: single line.",
        "टोटल पार्टिसिपेशन: एंटिटी से रिलेशनशिप तक दोहरी रेखा (हर कर्मचारी किसी विभाग में हो)। पार्शियल: एकल रेखा।",
        "Total participation: entity se relationship tak double line (har employee kisi department mein ho). Partial: single line.",
      ],
      [
        "Identifying relationship (double diamond) connects a weak entity to its owner; the weak entity's primary key will include the owner's key.",
        "Identifying रिलेशनशिप (दोहरा समचतुर्भुज) वीक एंटिटी को उसके ओनर से जोड़ती है; वीक एंटिटी की प्राइमरी की में ओनर की की शामिल होगी।",
        "Identifying relationship (double diamond) weak entity ko uske owner se jodti hai; weak entity ki primary key mein owner ki key shamil hogi.",
      ],
      [
        "Constraints on diagrams: key constraints, participation, cardinality ratio, and (in EER) disjoint/overlapping and complete/partial specialisation.",
        "डायग्राम पर कंस्ट्रेंट: की, पार्टिसिपेशन, कार्डिनैलिटी अनुपात, और (EER में) disjoint/overlapping तथा complete/partial स्पेशलाइज़ेशन।",
        "Diagram par constraints: key, participation, cardinality ratio, aur (EER mein) disjoint/overlapping tatha complete/partial specialisation.",
      ],
      [
        "A ternary relationship is one diamond with three entities; do not fake it as two binaries unless the meaning is truly two independent associations.",
        "टर्नरी रिलेशनशिप एक समचतुर्भुज तीन एंटिटी से; इसे दो बाइनरी मत बनाएँ जब तक अर्थ सच में दो स्वतंत्र संबंध न हो।",
        "Ternary relationship ek diamond teen entities se; ise do binaries mat banao jab tak matlab sach mein do independent associations na ho.",
      ],
    ]),
    TBL(
      [
        ["Symbol (Chen)", "प्रतीक (Chen)", "Symbol (Chen)"],
        ["Meaning", "अर्थ", "Meaning"],
      ],
      [
        [
          ["Rectangle", "आयत", "Rectangle"],
          ["Strong entity type", "स्ट्रॉन्ग एंटिटी टाइप", "Strong entity type"],
        ],
        [
          ["Double rectangle", "दोहरी आयत", "Double rectangle"],
          ["Weak entity type", "वीक एंटिटी टाइप", "Weak entity type"],
        ],
        [
          ["Diamond / double diamond", "समचतुर्भुज / दोहरा", "Diamond / double diamond"],
          ["Relationship / identifying relationship", "रिलेशनशिप / identifying रिलेशनशिप", "Relationship / identifying relationship"],
        ],
        [
          ["Oval / double / dashed", "अंडाकार / दोहरा / डैश्ड", "Oval / double / dashed"],
          ["Attribute / multi-valued / derived", "एट्रिब्यूट / मल्टी-वैल्यूड / derived", "Attribute / multi-valued / derived"],
        ],
        [
          ["Double line", "दोहरी रेखा", "Double line"],
          ["Total participation", "टोटल पार्टिसिपेशन", "Total participation"],
        ],
      ],
    ),
    EXAM(
      "Draw Chen symbols for strong entity, weak entity, identifying relationship, key, multi-valued, derived and total participation. Convert a short case (library: Book, Member, Issue) into a labelled ER diagram with cardinality.",
      "स्ट्रॉन्ग एंटिटी, वीक एंटिटी, identifying रिलेशनशिप, की, मल्टी-वैल्यूड, derived और टोटल पार्टिसिपेशन के Chen प्रतीक बनाइए। लाइब्रेरी केस (Book, Member, Issue) को कार्डिनैलिटी सहित ER में बदलिए।",
      "Strong entity, weak entity, identifying relationship, key, multi-valued, derived aur total participation ke Chen symbols banao. Library case (Book, Member, Issue) ko cardinality ke saath ER mein badalo.",
    ),
  ]),

  "rdms-keys": topic("rdms-keys", [
    P(
      "A key is a set of attributes that uniquely identifies a tuple. Superkey, candidate key, primary key, alternate key and foreign key are not five unrelated ideas — they form a chain. Every candidate key is a superkey; the primary key is one chosen candidate; alternate keys are the unused candidates; a foreign key is a set of attributes that refers to a candidate key of (usually) another relation.",
      "की एट्रिब्यूटों का वह समूह है जो टपल को अद्वितीय पहचानता है। सुपर की, कैंडिडेट की, प्राइमरी की, अल्टरनेट की और फ़ॉरेन की पाँच अलग विचार नहीं — एक श्रृंखला हैं। हर कैंडिडेट की एक सुपर की है; प्राइमरी की चुनी गई कैंडिडेट है; अल्टरनेट अप्रयुक्त कैंडिडेट हैं; फ़ॉरेन की वह समूह है जो (प्रायः) दूसरे रिलेशन की कैंडिडेट की का संदर्भ करता है।",
      "Key attributes ka woh set hai jo tuple ko uniquely identify karta hai. Super key, candidate key, primary key, alternate key aur foreign key paanch alag ideas nahi — ek chain hain. Har candidate key ek superkey hai; primary key chosen candidate hai; alternate unused candidates hain; foreign key woh set hai jo (usually) doosre relation ki candidate key ko refer karta hai.",
    ),
    D(
      "keys",
      "Key hierarchy: superkey contains candidate key, one candidate becomes primary, others are alternate; foreign key references a candidate",
      "की पदानुक्रम: superkey में candidate key, एक candidate primary बनती है, शेष alternate; foreign key एक candidate का संदर्भ करती है",
      "Key hierarchy: superkey contains candidate key, ek candidate primary banti hai, baaki alternate; foreign key ek candidate ko refer karti hai",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Superkey: any set that uniquely identifies a row. {roll_no}, {roll_no, name} and even the whole schema are superkeys if roll_no is unique.",
        "सुपर की: कोई भी सेट जो पंक्ति को अद्वितीय बनाए। {roll_no}, {roll_no, name} और पूरा स्कीमा भी सुपर की हैं यदि roll_no अद्वितीय है।",
        "Superkey: koi bhi set jo row ko unique banaye. {roll_no}, {roll_no, name} aur poora schema bhi superkeys hain agar roll_no unique hai.",
      ],
      [
        "Candidate key: a minimal superkey — drop any attribute and uniqueness is lost. A relation may have several (roll_no and email).",
        "कैंडिडेट की: न्यूनतम सुपर की — कोई एट्रिब्यूट हटाएँ तो विशिष्टता जाती रहती है। एक रिलेशन में कई हो सकती हैं (roll_no और email)।",
        "Candidate key: minimal superkey — koi attribute hatao to uniqueness chali jaati hai. Ek relation mein kai ho sakti hain (roll_no aur email).",
      ],
      [
        "Primary key: the candidate the designer chooses to identify rows. Entity integrity: no part of a primary key may be NULL.",
        "प्राइमरी की: वह कैंडिडेट जिसे डिज़ाइनर पंक्ति पहचान के लिए चुनता है। एंटिटी अखंडता: प्राइमरी की का कोई भाग NULL नहीं।",
        "Primary key: woh candidate jo designer rows identify karne ke liye chunta hai. Entity integrity: primary key ka koi hissa NULL nahi.",
      ],
      [
        "Alternate key: a candidate not chosen as primary. UNIQUE NOT NULL in SQL.",
        "अल्टरनेट की: जो कैंडिडेट प्राइमरी नहीं बनी। SQL में UNIQUE NOT NULL।",
        "Alternate key: jo candidate primary nahi bani. SQL mein UNIQUE NOT NULL.",
      ],
      [
        "Foreign key: attributes in R whose values must match a candidate key of S (S may be R itself — recursive). Referential integrity; ON DELETE/UPDATE CASCADE, RESTRICT, SET NULL, SET DEFAULT.",
        "फ़ॉरेन की: R के एट्रिब्यूट जिनके मान S की कैंडिडेट की से मिलने चाहिए (S स्वयं R हो सकता है)। रेफ़रेंशियल अखंडता; ON DELETE/UPDATE CASCADE, RESTRICT, SET NULL, SET DEFAULT।",
        "Foreign key: R ke attributes jinke values S ki candidate key se milne chahiye (S khud R ho sakta hai). Referential integrity; ON DELETE/UPDATE CASCADE, RESTRICT, SET NULL, SET DEFAULT.",
      ],
      [
        "Composite key: a key with more than one attribute (Enrolment(roll_no, course_id)). Surrogate key: a synthetic integer (id) with no business meaning.",
        "कम्पोजिट की: एक से अधिक एट्रिब्यूट वाली की (Enrolment(roll_no, course_id))। सरोगेट की: व्यावसायिक अर्थहीन कृत्रिम पूर्णांक (id)।",
        "Composite key: ek se zyada attributes wali key (Enrolment(roll_no, course_id)). Surrogate key: business-meaning-heen synthetic integer (id).",
      ],
      [
        "Secondary / search key: an attribute used for lookup (index on city) that need not be unique — not a uniqueness key.",
        "सेकेंडरी / सर्च की: लुकअप के लिए एट्रिब्यूट (city पर इंडेक्स) जो अद्वितीय होना ज़रूरी नहीं — uniqueness की नहीं।",
        "Secondary / search key: lookup ke liye attribute (city par index) jo unique hona zaroori nahi — uniqueness key nahi.",
      ],
    ]),
    C(
      "sql",
      `CREATE TABLE Department (
  dept_id   INT PRIMARY KEY,
  name      VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE Employee (
  emp_id    INT PRIMARY KEY,
  email     VARCHAR(80) NOT NULL UNIQUE,
  dept_id   INT,
  mgr_id    INT,
  CONSTRAINT fk_dept FOREIGN KEY (dept_id)
    REFERENCES Department(dept_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_mgr FOREIGN KEY (mgr_id)
    REFERENCES Employee(emp_id)
);`,
      [
        "Primary, alternate, foreign and recursive foreign keys in SQL",
        "SQL में प्राइमरी, अल्टरनेट, फ़ॉरेन और recursive फ़ॉरेन की",
        "SQL mein primary, alternate, foreign aur recursive foreign keys",
      ],
    ),
    EXAM(
      "For Student(roll_no, aadhaar, email, name, dept_id) list one superkey that is not a candidate, all candidate keys, a sensible primary key, the alternate keys, and a foreign key. State entity integrity and referential integrity.",
      "Student(roll_no, aadhaar, email, name, dept_id) के लिए एक गैर-कैंडिडेट सुपर की, सभी कैंडिडेट की, उचित प्राइमरी की, अल्टरनेट की और फ़ॉरेन की लिखिए। एंटिटी व रेफ़रेंशियल अखंडता बताइए।",
      "Student(roll_no, aadhaar, email, name, dept_id) ke liye ek non-candidate superkey, saari candidate keys, sensible primary key, alternate keys aur foreign key likho. Entity aur referential integrity batao.",
    ),
  ]),
  "rdms-codd": topic("rdms-codd", [
    P(
      "E. F. Codd published twelve rules (numbered 0 to 12, so thirteen statements) as a test of whether a product is a true RDBMS rather than a marketing label. No commercial system scores a perfect 12, but the rules still define the spirit of the relational model: information as values in tables, a catalog you can query, a comprehensive language, data independence, and integrity that programs cannot subvert.",
      "E. F. Codd ने बारह नियम (0 से 12, अतः तेरह कथन) यह जाँचने के लिए प्रकाशित किए कि कोई उत्पाद सच में RDBMS है या केवल विपणन। कोई व्यावसायिक सिस्टम पूर्ण 12 नहीं पाता, पर नियम रिलेशनल मॉडल की आत्मा तय करते हैं: टेबल में मान के रूप में सूचना, क्वेरीयोग्य कैटलॉग, व्यापक भाषा, डेटा इंडिपेंडेंस, और अखंडता जिसे प्रोग्राम तोड़ न सकें।",
      "E. F. Codd ne barah rules (0 se 12, yani terah statements) is test ke liye publish kiye ki koi product sach mein RDBMS hai ya sirf marketing. Koi commercial system perfect 12 nahi paata, lekin rules relational model ki spirit define karte hain: tables mein values ke roop mein information, queryable catalog, comprehensive language, data independence, aur integrity jise programs subvert na kar saken.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Rule 0 Foundation: the system must manage the database entirely through its relational capabilities — not a half-relational layer on a network engine.",
        "नियम 0 Foundation: सिस्टम डेटाबेस को पूरी तरह अपनी रिलेशनल क्षमताओं से प्रबंधित करे — नेटवर्क इंजन पर आधा-रिलेशनल परत नहीं।",
        "Rule 0 Foundation: system database ko poori tarah apni relational capabilities se manage kare — network engine par half-relational layer nahi.",
      ],
      [
        "Rule 1 Information: all information (including metadata) is represented as values in tables, never as a hidden pointer the user must chase.",
        "नियम 1 Information: सारी सूचना (मेटाडेटा सहित) टेबल के मानों में हो, छिपे पॉइंटर के रूप में नहीं।",
        "Rule 1 Information: saari information (metadata sahit) tables ke values mein ho, hidden pointer ke roop mein nahi.",
      ],
      [
        "Rule 2 Guaranteed access: every atomic value is reachable by table name + column name + primary-key value. No need for a scan if you know the key.",
        "नियम 2 Guaranteed access: हर परमाणु मान टेबल नाम + कॉलम नाम + प्राइमरी-की मान से पहुँच योग्य। की पता हो तो स्कैन की ज़रूरत नहीं।",
        "Rule 2 Guaranteed access: har atomic value table name + column name + primary-key value se reachable. Key pata ho to scan ki zaroorat nahi.",
      ],
      [
        "Rule 3 Systematic nulls: NULL means missing/inapplicable and is treated uniformly, distinct from the empty string or zero.",
        "नियम 3 Systematic nulls: NULL का अर्थ अनुपस्थित/अप्रयोज्य, एकसमान व्यवहार, खाली स्ट्रिंग या शून्य से भिन्न।",
        "Rule 3 Systematic nulls: NULL ka matlab missing/inapplicable, uniform treatment, empty string ya zero se alag.",
      ],
      [
        "Rule 4 Dynamic online catalog: the dictionary is itself relational and queried in the same language as ordinary data.",
        "नियम 4 Dynamic online catalog: डिक्शनरी स्वयं रिलेशनल है और साधारण डेटा जैसी भाषा से क्वेरी होती है।",
        "Rule 4 Dynamic online catalog: dictionary khud relational hai aur ordinary data jaisi language se query hoti hai.",
      ],
      [
        "Rule 5 Comprehensive data sublanguage: at least one language (SQL) must support DDL, view definition, DML, integrity, authorisation and transactions.",
        "नियम 5 Comprehensive data sublanguage: कम से कम एक भाषा (SQL) DDL, व्यू, DML, अखंडता, प्राधिकरण और ट्रांज़ैक्शन सब करे।",
        "Rule 5 Comprehensive data sublanguage: kam se kam ek language (SQL) DDL, views, DML, integrity, authorisation aur transactions sab kare.",
      ],
      [
        "Rules 8 and 9 are physical and logical data independence. Rule 10 Integrity independence: constraints live in the catalog, not in application code. Rule 12 Non-subversion: a low-level interface cannot bypass those constraints.",
        "नियम 8 व 9 फिजिकल और लॉजिकल डेटा इंडिपेंडेंस। नियम 10 Integrity independence: कंस्ट्रेंट कैटलॉग में हों, एप्लिकेशन कोड में नहीं। नियम 12 Non-subversion: निम्न-स्तरीय इंटरफ़ेस उन कंस्ट्रेंट को बायपास न करे।",
        "Rules 8 aur 9 physical aur logical data independence. Rule 10 Integrity independence: constraints catalog mein hon, application code mein nahi. Rule 12 Non-subversion: low-level interface un constraints ko bypass na kare.",
      ],
    ]),
    OL([
      [
        "Rule 6 View updating: the system must update any view that is theoretically updatable (real products still fail this).",
        "नियम 6 View updating: सैद्धांतिक रूप से अपडेट योग्य हर व्यू सिस्टम अपडेट करे (वास्तविक उत्पाद अभी भी चूकते हैं)।",
        "Rule 6 View updating: theoretically updatable har view system update kare (real products abhi bhi fail karte hain).",
      ],
      [
        "Rule 7 High-level insert/update/delete: set-at-a-time operations, not only tuple-at-a-time cursors.",
        "नियम 7 High-level insert/update/delete: सेट-एट-ए-टाइम ऑपरेशन, केवल टपल-एट-ए-टाइम कर्सर नहीं।",
        "Rule 7 High-level insert/update/delete: set-at-a-time operations, sirf tuple-at-a-time cursors nahi.",
      ],
      [
        "Rule 11 Distribution independence: a user must not need to know whether data is partitioned across sites.",
        "नियम 11 Distribution independence: उपयोगकर्ता को यह जानने की ज़रूरत न हो कि डेटा साइटों पर बँटा है।",
        "Rule 11 Distribution independence: user ko yeh jaanne ki zaroorat na ho ki data sites par banta hai.",
      ],
    ]),
    NOTE(
      "Memorise names, not a fake numbered list. Examiners love Rule 0, Information, Guaranteed access, Catalog, Sublanguage, Physical/Logical independence, Integrity independence and Non-subversion.",
      "नाम याद करें, नकली क्रमांकित सूची नहीं। परीक्षक नियम 0, Information, Guaranteed access, Catalog, Sublanguage, Physical/Logical independence, Integrity independence और Non-subversion पसंद करते हैं।",
      "Names yaad karo, fake numbered list nahi. Examiners Rule 0, Information, Guaranteed access, Catalog, Sublanguage, Physical/Logical independence, Integrity independence aur Non-subversion pasand karte hain.",
    ),
    EXAM(
      "State Codd's foundation rule and any six named rules with one sentence each. Explain why integrity independence (Rule 10) plus non-subversion (Rule 12) matter for application programs.",
      "कॉड का foundation नियम और किन्हीं छह नामित नियमों को एक-एक वाक्य में लिखिए। Integrity independence (नियम 10) और non-subversion (नियम 12) एप्लिकेशन के लिए क्यों महत्त्वपूर्ण हैं?",
      "Codd ka foundation rule aur kinhi chhe named rules ko ek-ek sentence mein likho. Integrity independence (Rule 10) aur non-subversion (Rule 12) applications ke liye kyun important hain?",
    ),
  ]),

  "rdms-eer": topic("rdms-eer", [
    P(
      "The Enhanced ER (EER) model adds superclass/subclass, specialisation, generalisation, categorisation (union types) and aggregation. These capture IS-A and IS-PART-OF that a flat ER diagram cannot say cleanly — Employee is a Person; a Manager is an Employee; a Bicycle is a Vehicle; a WorksOn relationship itself can participate in another relationship (aggregation).",
      "Enhanced ER (EER) मॉडल सुपरक्लास/सबक्लास, स्पेशलाइज़ेशन, जनरलाइज़ेशन, कैटेगरीकरण (यूनियन टाइप) और एग्रीगेशन जोड़ता है। ये IS-A और IS-PART-OF पकड़ते हैं जो सपाट ER साफ़ नहीं कह सकता — Employee एक Person है; Manager एक Employee है; Bicycle एक Vehicle है; WorksOn रिलेशनशिप स्वयं दूसरे रिलेशनशिप में भाग ले सकती है (एग्रीगेशन)।",
      "Enhanced ER (EER) model superclass/subclass, specialisation, generalisation, categorisation (union types) aur aggregation jodta hai. Yeh IS-A aur IS-PART-OF pakadte hain jo flat ER saaf nahi keh sakta — Employee ek Person hai; Manager ek Employee hai; Bicycle ek Vehicle hai; WorksOn relationship khud doosre relationship mein participate kar sakti hai (aggregation).",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Specialisation: top-down. Start with Employee; specialise into Faculty and Staff. Subclasses inherit attributes and relationships of the superclass and add their own (Faculty.rank).",
        "स्पेशलाइज़ेशन: टॉप-डाउन। Employee से शुरू; Faculty और Staff में विशेषीकृत। सबक्लास सुपरक्लास के एट्रिब्यूट व रिलेशनशिप विरासत में लेते हैं और अपने जोड़ते हैं (Faculty.rank)।",
        "Specialisation: top-down. Employee se start; Faculty aur Staff mein specialised. Subclasses superclass ke attributes aur relationships inherit karte hain aur apne jodte hain (Faculty.rank).",
      ],
      [
        "Generalisation: bottom-up. Notice Car and Truck share reg_no, make; generalise to Vehicle. Same ISA diagram, opposite design direction.",
        "जनरलाइज़ेशन: बॉटम-अप। Car और Truck में reg_no, make साझा; Vehicle में सामान्यीकृत। वही ISA डायग्राम, उल्टी डिज़ाइन दिशा।",
        "Generalisation: bottom-up. Car aur Truck mein reg_no, make share; Vehicle mein generalised. Wahi ISA diagram, ulti design direction.",
      ],
      [
        "Disjoint vs overlapping specialisation: a person cannot be both Faculty and Staff (disjoint, 'd' in circle) versus a person can be both Student and Employee (overlapping, 'o').",
        "Disjoint बनाम overlapping स्पेशलाइज़ेशन: व्यक्ति Faculty और Staff दोनों नहीं (disjoint, वृत्त में d) बनाम व्यक्ति Student और Employee दोनों (overlapping, o)।",
        "Disjoint vs overlapping specialisation: person Faculty aur Staff dono nahi (disjoint, circle mein d) versus person Student aur Employee dono (overlapping, o).",
      ],
      [
        "Complete (total) vs partial specialisation: every Employee is Faculty or Staff (double line) versus some Employees are just Employees (partial, single line).",
        "Complete (टोटल) बनाम पार्शियल स्पेशलाइज़ेशन: हर Employee Faculty या Staff है (दोहरी रेखा) बनाम कुछ Employee केवल Employee हैं (पार्शियल)।",
        "Complete (total) vs partial specialisation: har Employee Faculty ya Staff hai (double line) versus kuch Employees sirf Employee hain (partial).",
      ],
      [
        "Aggregation: treat a relationship as an entity so it can participate in another relationship. Example: (Employee WorksOn Project) is Monitored by a Manager.",
        "एग्रीगेशन: रिलेशनशिप को एंटिटी मानें ताकि वह दूसरे रिलेशनशिप में भाग ले। उदाहरण: (Employee WorksOn Project) को Manager Monitor करता है।",
        "Aggregation: relationship ko entity maano taaki woh doosre relationship mein part le. Example: (Employee WorksOn Project) ko Manager Monitor karta hai.",
      ],
      [
        "Union type / category: a vehicle owner may be a Person or a Bank — a subclass with more than one distinct superclass.",
        "यूनियन टाइप / कैटेगरी: वाहन मालिक Person या Bank हो सकता है — एक से अधिक भिन्न सुपरक्लास वाला सबक्लास।",
        "Union type / category: vehicle owner Person ya Bank ho sakta hai — ek se zyada distinct superclasses wala subclass.",
      ],
    ]),
    NOTE(
      "ISA is not the same as aggregation. ISA is shared identity (a faculty member is an employee). Aggregation is a relationship participating in a relationship.",
      "ISA एग्रीगेशन नहीं है। ISA साझा पहचान है (faculty सदस्य एक employee है)। एग्रीगेशन एक रिलेशनशिप का दूसरे में भाग लेना है।",
      "ISA aggregation nahi hai. ISA shared identity hai (faculty member ek employee hai). Aggregation ek relationship ka doosre mein participate karna hai.",
    ),
    EXAM(
      "With a diagram distinguish generalisation, specialisation and aggregation. Mark disjoint/overlapping and total/partial on an Employee-Faculty-Staff specialisation.",
      "डायग्राम सहित जनरलाइज़ेशन, स्पेशलाइज़ेशन और एग्रीगेशन का अंतर कीजिए। Employee-Faculty-Staff पर disjoint/overlapping और total/partial चिह्नित कीजिए।",
      "Diagram ke saath generalisation, specialisation aur aggregation ka farak batao. Employee-Faculty-Staff par disjoint/overlapping aur total/partial mark karo.",
    ),
  ]),

  "rdms-participation": topic("rdms-participation", [
    P(
      "Participation constraints say whether every entity in an entity set must take part in a relationship set. Total (mandatory) participation means every entity is related to at least one entity of the other type. Partial (optional) participation means some entities may exist without the relationship. Together with cardinality ratios they give the (min, max) characterisation of a binary relationship.",
      "पार्टिसिपेशन कंस्ट्रेंट बताते हैं कि एंटिटी सेट की हर एंटिटी को रिलेशनशिप सेट में भाग लेना है या नहीं। टोटल (अनिवार्य) पार्टिसिपेशन का अर्थ है हर एंटिटी कम से कम एक दूसरी एंटिटी से जुड़ी है। पार्शियल (वैकल्पिक) का अर्थ है कुछ एंटिटी बिना रिलेशनशिप के रह सकती हैं। कार्डिनैलिटी अनुपात के साथ ये बाइनरी रिलेशनशिप का (min, max) चित्र देते हैं।",
      "Participation constraints batate hain ki entity set ki har entity ko relationship set mein part lena hai ya nahi. Total (mandatory) participation ka matlab hai har entity kam se kam ek doosri entity se judi hai. Partial (optional) ka matlab hai kuch entities bina relationship ke reh sakti hain. Cardinality ratios ke saath yeh binary relationship ka (min, max) picture dete hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Chen: total participation is a double line; partial is a single line. Min-max notation writes (1, N) for total 1:N on the many side and (0, 1) for optional 1 on the one side.",
        "Chen: टोटल पार्टिसिपेशन दोहरी रेखा; पार्शियल एकल। Min-max में many पक्ष पर टोटल 1:N के लिए (1, N) और वैकल्पिक एक पक्ष पर (0, 1)।",
        "Chen: total participation double line; partial single. Min-max mein many side par total 1:N ke liye (1, N) aur optional one side par (0, 1).",
      ],
      [
        "Example of total: every employee must belong to a department (Employee double-line WorksIn Department). A new employee row is rejected unless a dept_id is supplied.",
        "टोटल का उदाहरण: हर कर्मचारी किसी विभाग में हो (Employee दोहरी-रेखा WorksIn Department)। dept_id के बिना नई पंक्ति अस्वीकृत।",
        "Total ka example: har employee kisi department mein ho (Employee double-line WorksIn Department). dept_id ke bina nayi row reject.",
      ],
      [
        "Example of partial: a department may currently have no employee; or a person may own zero cars. The entity can be inserted without the relationship.",
        "पार्शियल का उदाहरण: विभाग में अभी कोई कर्मचारी न हो; या व्यक्ति के शून्य कार हों। एंटिटी बिना रिलेशनशिप के डाली जा सकती है।",
        "Partial ka example: department mein abhi koi employee na ho; ya person ki zero cars hon. Entity bina relationship ke daali ja sakti hai.",
      ],
      [
        "Both sides total is possible (1:1 marriage in a registry that stores only married people) but is rare and forces careful insert order or deferred constraints.",
        "दोनों ओर टोटल संभव है (केवल विवाहित लोगों के रजिस्ट्री में 1:1 विवाह) पर दुर्लभ है और insert क्रम या deferred कंस्ट्रेंट माँगता है।",
        "Dono sides total possible hai (sirf married people ki registry mein 1:1 marriage) lekin rare hai aur insert order ya deferred constraints maangta hai.",
      ],
      [
        "Existence dependency: a weak entity always has total participation in its identifying relationship — a Dependent cannot exist without an Employee.",
        "अस्तित्व निर्भरता: वीक एंटिटी की identifying रिलेशनशिप में हमेशा टोटल पार्टिसिपेशन — Dependent बिना Employee के नहीं।",
        "Existence dependency: weak entity ki identifying relationship mein hamesha total participation — Dependent bina Employee ke nahi.",
      ],
      [
        "Mapping hint: total participation on the N side of 1:N becomes a NOT NULL foreign key. Partial participation allows a NULL foreign key.",
        "मैपिंग संकेत: 1:N के N पक्ष पर टोटल पार्टिसिपेशन NOT NULL फ़ॉरेन की बनती है। पार्शियल NULL फ़ॉरेन की अनुमति देता है।",
        "Mapping hint: 1:N ke N side par total participation NOT NULL foreign key banti hai. Partial NULL foreign key allow karta hai.",
      ],
    ]),
    TBL(
      [
        ["Employee side", "Employee पक्ष", "Employee side"],
        ["Department side", "Department पक्ष", "Department side"],
        ["Meaning", "अर्थ", "Meaning"],
      ],
      [
        [
          ["Total (1,1) or (1,N)", "टोटल (1,1) या (1,N)", "Total (1,1) ya (1,N)"],
          ["Partial (0,N)", "पार्शियल (0,N)", "Partial (0,N)"],
          ["Every employee has a dept; a dept may be empty", "हर कर्मचारी का विभाग; विभाग खाली हो सकता है", "Har employee ka dept; dept khaali ho sakta hai"],
        ],
        [
          ["Partial (0,1)", "पार्शियल (0,1)", "Partial (0,1)"],
          ["Total (1,N)", "टोटल (1,N)", "Total (1,N)"],
          ["Some people have no dept; every dept has at least one employee", "कुछ लोगों का विभाग नहीं; हर विभाग में कम से कम एक", "Kuch logon ka dept nahi; har dept mein kam se kam ek"],
        ],
      ],
    ),
    EXAM(
      "Define total and partial participation with Chen symbols. For WorksIn(Employee, Department) write (min, max) on both sides for the usual company rule (every employee in exactly one dept, a dept may have many or zero employees).",
      "Chen प्रतीकों सहित टोटल व पार्शियल पार्टिसिपेशन परिभाषित कीजिए। WorksIn(Employee, Department) पर सामान्य कंपनी नियम के (min, max) दोनों ओर लिखिए।",
      "Chen symbols ke saath total aur partial participation define karo. WorksIn(Employee, Department) par usual company rule ke (min, max) dono sides par likho.",
    ),
  ]),

  "rdms-er-map": topic("rdms-er-map", [
    P(
      "ER-to-relational mapping is a mechanical set of rules that turn a conceptual ER/EER diagram into CREATE TABLE statements. Getting the foreign-key placement wrong is the most common design error in BCA practicals: 1:N puts the FK on the N side; M:N never puts an FK on either entity — it creates a third table.",
      "ER-से-रिलेशनल मैपिंग यांत्रिक नियमों का समूह है जो कॉन्सेप्चुअल ER/EER डायग्राम को CREATE TABLE में बदलता है। फ़ॉरेन की गलत जगह रखना BCA प्रैक्टिकल की सबसे आम गलती है: 1:N में FK N पक्ष पर; M:N किसी एंटिटी पर FK नहीं — तीसरी टेबल बनती है।",
      "ER-to-relational mapping mechanical rules ka set hai jo conceptual ER/EER diagram ko CREATE TABLE mein badalta hai. Foreign key galat jagah rakhna BCA practicals ki sabse common galti hai: 1:N mein FK N side par; M:N kisi entity par FK nahi — teesri table banti hai.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Strong entity: one relation; simple attributes become columns; composite attributes flatten (street, city); derived attributes are usually omitted or computed; the key becomes PRIMARY KEY.",
        "स्ट्रॉन्ग एंटिटी: एक रिलेशन; सरल एट्रिब्यूट कॉलम; कम्पोजिट चपटा (street, city); derived प्रायः छोड़ या गणना; की PRIMARY KEY।",
        "Strong entity: ek relation; simple attributes columns; composite flatten (street, city); derived usually omit ya compute; key PRIMARY KEY.",
      ],
      [
        "Weak entity: one relation whose PRIMARY KEY is (owner_pk, partial_key) and owner_pk is also a FOREIGN KEY to the owner.",
        "वीक एंटिटी: एक रिलेशन जिसकी PRIMARY KEY (owner_pk, partial_key) है और owner_pk ओनर पर FOREIGN KEY भी है।",
        "Weak entity: ek relation jiski PRIMARY KEY (owner_pk, partial_key) hai aur owner_pk owner par FOREIGN KEY bhi hai.",
      ],
      [
        "1:1 binary: put the FK on the side with total participation (or either side if both partial). UNIQUE on that FK enforces 1:1. Optionally merge the two entities if both participations are total.",
        "1:1 बाइनरी: FK उस पक्ष पर रखें जहाँ टोटल पार्टिसिपेशन हो (या दोनों पार्शियल हों तो किसी एक पर)। उस FK पर UNIQUE 1:1 लागू करता है। दोनों टोटल हों तो वैकल्पिक विलय।",
        "1:1 binary: FK us side par rakho jahan total participation ho (ya dono partial hon to kisi ek par). Us FK par UNIQUE 1:1 enforce karta hai. Dono total hon to optional merge.",
      ],
      [
        "1:N binary: FK on the N (many) side. NOT NULL if that side's participation is total.",
        "1:N बाइनरी: FK N (many) पक्ष पर। यदि उस पक्ष की पार्टिसिपेशन टोटल है तो NOT NULL।",
        "1:N binary: FK N (many) side par. Agar us side ki participation total hai to NOT NULL.",
      ],
      [
        "M:N binary: a new relation whose PRIMARY KEY is the pair of both entity keys (plus relationship attributes such as grade or hours). Both columns are FKs.",
        "M:N बाइनरी: नया रिलेशन जिसकी PRIMARY KEY दोनों एंटिटी की की का जोड़ा (प्लस grade या hours जैसे रिलेशनशिप एट्रिब्यूट)। दोनों कॉलम FK।",
        "M:N binary: naya relation jiski PRIMARY KEY dono entity keys ka pair (plus grade ya hours jaise relationship attributes). Dono columns FKs.",
      ],
      [
        "Multi-valued attribute: a new relation (roll_no, phone) with PRIMARY KEY the whole pair (or a surrogate plus UNIQUE).",
        "मल्टी-वैल्यूड एट्रिब्यूट: नया रिलेशन (roll_no, phone) जिसकी PRIMARY KEY पूरा जोड़ा।",
        "Multi-valued attribute: naya relation (roll_no, phone) jiski PRIMARY KEY poora pair.",
      ],
      [
        "Specialisation mapping options: (a) one table per superclass and subclass with shared PK; (b) only subclass tables, each copying superclass attributes (disjoint, total); (c) one single table with a type column and nullable subclass columns. Trade-off: nulls vs joins vs redundancy.",
        "स्पेशलाइज़ेशन मैपिंग विकल्प: (a) सुपरक्लास व सबक्लास प्रत्येक की टेबल साझा PK से; (b) केवल सबक्लास टेबल, सुपरक्लास एट्रिब्यूट कॉपी (disjoint, total); (c) एक टेबल, type कॉलम व nullable सबक्लास कॉलम। ट्रेड-ऑफ़: null बनाम जॉइन बनाम रिडंडेंसी।",
        "Specialisation mapping options: (a) superclass aur subclass har ek ki table shared PK se; (b) sirf subclass tables, superclass attributes copy (disjoint, total); (c) ek table, type column aur nullable subclass columns. Trade-off: nulls vs joins vs redundancy.",
      ],
    ]),
    C(
      "sql",
      `-- Strong entities
CREATE TABLE Student (roll_no INT PRIMARY KEY, name VARCHAR(60));
CREATE TABLE Course  (course_id CHAR(6) PRIMARY KEY, title VARCHAR(80));

-- M:N relationship Enrols with attribute grade
CREATE TABLE Enrols (
  roll_no   INT,
  course_id CHAR(6),
  grade     CHAR(2),
  PRIMARY KEY (roll_no, course_id),
  FOREIGN KEY (roll_no)   REFERENCES Student(roll_no),
  FOREIGN KEY (course_id) REFERENCES Course(course_id)
);

-- Multi-valued attribute Phone of Student
CREATE TABLE StudentPhone (
  roll_no INT,
  phone   VARCHAR(15),
  PRIMARY KEY (roll_no, phone),
  FOREIGN KEY (roll_no) REFERENCES Student(roll_no)
);

-- Weak entity Dependent of Employee
CREATE TABLE Dependent (
  emp_id INT,
  dep_name VARCHAR(40),
  relation VARCHAR(20),
  PRIMARY KEY (emp_id, dep_name),
  FOREIGN KEY (emp_id) REFERENCES Employee(emp_id) ON DELETE CASCADE
);`,
      [
        "ER mapping: M:N table, multi-valued attribute table, weak-entity table",
        "ER मैपिंग: M:N टेबल, मल्टी-वैल्यूड एट्रिब्यूट टेबल, वीक-एंटिटी टेबल",
        "ER mapping: M:N table, multi-valued attribute table, weak-entity table",
      ],
    ),
    EXAM(
      "State the mapping rules for strong entity, weak entity, 1:1, 1:N, M:N and multi-valued attributes. Apply them to a library ER (Book, Member, Issue as M:N with issue_date).",
      "स्ट्रॉन्ग एंटिटी, वीक एंटिटी, 1:1, 1:N, M:N और मल्टी-वैल्यूड एट्रिब्यूट के मैपिंग नियम लिखिए। लाइब्रेरी ER (Book, Member, Issue M:N issue_date सहित) पर लागू कीजिए।",
      "Strong entity, weak entity, 1:1, 1:N, M:N aur multi-valued attributes ke mapping rules likho. Library ER (Book, Member, Issue M:N issue_date sahit) par apply karo.",
    ),
  ]),
  "rdms-fd": topic("rdms-fd", [
    P(
      "A functional dependency (FD) X → Y on relation R means that whenever two tuples agree on the attributes in X they must also agree on Y. X is the determinant; Y is the dependent. FDs are integrity constraints that come from the meaning of data (roll_no determines name), not from a particular instance. Armstrong's axioms let you infer every FD that follows from a given set.",
      "फ़ंक्शनल डिपेंडेंसी (FD) X → Y का अर्थ है कि जब दो टपल X के एट्रिब्यूट पर सहमत हों तो Y पर भी सहमत हों। X निर्धारक है; Y आश्रित। FD डेटा के अर्थ से आने वाले अखंडता कंस्ट्रेंट हैं (roll_no name निर्धारित करता है), किसी विशेष इंस्टेंस से नहीं। Armstrong के अभिगृहीत दिए सेट से निकलने वाली हर FD निकालने देते हैं।",
      "Functional dependency (FD) X → Y ka matlab hai ki jab do tuples X ke attributes par agree karein to Y par bhi agree karein. X determinant hai; Y dependent. FDs data ke meaning se aane wale integrity constraints hain (roll_no name determine karta hai), kisi particular instance se nahi. Armstrong ke axioms diye set se nikalne wali har FD nikalne dete hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Trivial FD: Y is a subset of X, for example {roll_no, name} → {name}. Always true; they do not constrain the world.",
        "तुच्छ FD: Y, X का उपसमुच्चय, जैसे {roll_no, name} → {name}। हमेशा सत्य; संसार को बाधित नहीं करते।",
        "Trivial FD: Y, X ka subset, jaise {roll_no, name} → {name}. Hamesha true; duniya ko constrain nahi karte.",
      ],
      [
        "Armstrong's axioms (sound and complete): Reflexivity (if Y subset of X then X → Y); Augmentation (if X → Y then XZ → YZ); Transitivity (if X → Y and Y → Z then X → Z).",
        "Armstrong के अभिगृहीत (sound व complete): Reflexivity (यदि Y, X का उपसमुच्चय तो X → Y); Augmentation (यदि X → Y तो XZ → YZ); Transitivity (यदि X → Y और Y → Z तो X → Z)।",
        "Armstrong ke axioms (sound aur complete): Reflexivity (agar Y subset of X to X → Y); Augmentation (agar X → Y to XZ → YZ); Transitivity (agar X → Y aur Y → Z to X → Z).",
      ],
      [
        "Derived rules: Union (X → Y and X → Z implies X → YZ); Decomposition (X → YZ implies X → Y and X → Z); Pseudotransitivity (X → Y and YZ → W implies XZ → W).",
        "व्युत्पन्न नियम: Union (X → Y और X → Z से X → YZ); Decomposition (X → YZ से X → Y और X → Z); Pseudotransitivity (X → Y और YZ → W से XZ → W)।",
        "Derived rules: Union (X → Y aur X → Z se X → YZ); Decomposition (X → YZ se X → Y aur X → Z); Pseudotransitivity (X → Y aur YZ → W se XZ → W).",
      ],
      [
        "Attribute closure X+: the set of attributes functionally determined by X, computed by starting with X and adding attributes using given FDs until nothing new appears. X is a superkey iff X+ equals all attributes of R.",
        "एट्रिब्यूट क्लोज़र X+: X द्वारा निर्धारित एट्रिब्यूटों का सेट, X से शुरू कर FD लगाते हुए जब तक नया न जुड़े। X सुपर की है iff X+ = R के सभी एट्रिब्यूट।",
        "Attribute closure X+: X dwara determined attributes ka set, X se start karke FDs lagaate hue jab tak naya na jude. X superkey hai iff X+ = R ke saare attributes.",
      ],
      [
        "A set F of FDs is a cover of G if they imply the same closures. A canonical/minimal cover has singleton right-hand sides, no redundant FD, and no redundant attribute on any left-hand side.",
        "FD का सेट F, G का कवर है यदि वे वही क्लोज़र दें। कैनोनिकल/मिनिमल कवर में दायाँ पक्ष एक एट्रिब्यूट, कोई redundant FD नहीं, बाएँ पक्ष पर कोई redundant एट्रिब्यूट नहीं।",
        "FDs ka set F, G ka cover hai agar ve wahi closures dein. Canonical/minimal cover mein right-hand side ek attribute, koi redundant FD nahi, left-hand side par koi redundant attribute nahi.",
      ],
      [
        "Full vs partial vs transitive: Y fully depends on X if it depends on X but not on any proper subset of X. Partial: depends on part of a composite key. Transitive: X → Y → Z with Y not a superkey.",
        "पूर्ण बनाम आंशिक बनाम ट्रांज़िटिव: Y पूर्णतः X पर निर्भर यदि X पर निर्भर हो पर X के उचित उपसमुच्चय पर नहीं। आंशिक: कम्पोजिट की के भाग पर। ट्रांज़िटिव: X → Y → Z जहाँ Y सुपर की नहीं।",
        "Full vs partial vs transitive: Y fully X par depend karta hai agar X par depend kare lekin X ke proper subset par nahi. Partial: composite key ke hisse par. Transitive: X → Y → Z jahan Y superkey nahi.",
      ],
    ]),
    C(
      "sql",
      `-- FDs are declared as constraints, not as comments:
-- roll_no → name, email     (roll_no is a key)
-- email   → roll_no         (email is also a key)
-- dept_id → dept_name       (transitive if stored in Student)
CREATE TABLE Student (
  roll_no   INT PRIMARY KEY,
  email     VARCHAR(80) NOT NULL UNIQUE,
  name      VARCHAR(60) NOT NULL,
  dept_id   INT REFERENCES Department(dept_id)
);`,
      [
        "Keys are the FDs the DBMS can cheaply enforce; other FDs need normalisation or CHECK/triggers",
        "की वे FD हैं जिन्हें DBMS सस्ते में लागू करता है; अन्य FD को नॉर्मलाइज़ेशन या CHECK/ट्रिगर चाहिए",
        "Keys woh FDs hain jinhe DBMS saste mein enforce karta hai; doosri FDs ko normalisation ya CHECK/triggers chahiye",
      ],
    ),
    EXAM(
      "State Armstrong's three axioms and the three derived rules. Compute X+ for X = {A} given F = {A → B, B → C, DE → A} on R(A,B,C,D,E) and decide whether A is a key.",
      "Armstrong के तीन अभिगृहीत व तीन व्युत्पन्न नियम लिखिए। R(A,B,C,D,E) पर F = {A → B, B → C, DE → A} से X = {A} का X+ निकालकर बताइए A की है या नहीं।",
      "Armstrong ke teen axioms aur teen derived rules likho. R(A,B,C,D,E) par F = {A → B, B → C, DE → A} se X = {A} ka X+ nikaal kar batao A key hai ya nahi.",
    ),
  ]),

  "rdms-mvd": topic("rdms-mvd", [
    P(
      "A multivalued dependency (MVD) X multi-determines Y on R means that the set of Y-values associated with a given X is independent of the rest of the attributes. If a course has textbooks {T1, T2} and lecturers {L1, L2}, every combination (T1,L1), (T1,L2), (T2,L1), (T2,L2) must appear — that is Course multi-determines Textbook and Course multi-determines Lecturer. A join dependency (JD) *{R1,...,Rk} says that R is always equal to the join of its projections on R1,...,Rk. MVDs and JDs are the theory behind 4NF and 5NF.",
      "मल्टीवैल्यूड डिपेंडेंसी (MVD) X ↠ Y का अर्थ है कि दिए X से जुड़े Y-मानों का सेट शेष एट्रिब्यूट से स्वतंत्र है। यदि कोर्स की पाठ्यपुस्तकें {T1, T2} और व्याख्याता {L1, L2} हैं तो हर संयोजन दिखना चाहिए — Course ↠ Textbook और Course ↠ Lecturer। जॉइन डिपेंडेंसी (JD) *{R1,...,Rk} कहती है R हमेशा अपने प्रोजेक्शन के जॉइन के बराबर है। MVD और JD, 4NF व 5NF के पीछे का सिद्धांत हैं।",
      "Multivalued dependency (MVD) X ↠ Y ka matlab hai ki diye X se jude Y-values ka set baaki attributes se independent hai. Agar course ki textbooks {T1, T2} aur lecturers {L1, L2} hain to har combination dikhna chahiye — Course ↠ Textbook aur Course ↠ Lecturer. Join dependency (JD) *{R1,...,Rk} kehti hai R hamesha apne projections ke join ke barabar hai. MVDs aur JDs, 4NF aur 5NF ke peeche ka theory hain.",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "MVD is a constraint on tuples in pairs: if (x, y1, z1) and (x, y2, z2) exist then (x, y1, z2) and (x, y2, z1) must also exist.",
        "MVD जोड़े में टपलों पर कंस्ट्रेंट है: यदि (x, y1, z1) और (x, y2, z2) हों तो (x, y1, z2) और (x, y2, z1) भी हों।",
        "MVD tuples ke pairs par constraint hai: agar (x, y1, z1) aur (x, y2, z2) hon to (x, y1, z2) aur (x, y2, z1) bhi hon.",
      ],
      [
        "Every FD is an MVD (X → Y implies X ↠ Y) but not conversely. An MVD that is not also an FD is non-trivial in the 4NF sense when Y is not empty, not all of R, and X does not determine the rest.",
        "हर FD एक MVD है (X → Y से X ↠ Y) पर उल्टा नहीं। जो MVD FD नहीं, 4NF अर्थ में गैर-तुच्छ जब Y खाली नहीं, पूरा R नहीं, और X शेष निर्धारित नहीं करता।",
        "Har FD ek MVD hai (X → Y se X ↠ Y) lekin ulta nahi. Jo MVD FD nahi, 4NF sense mein non-trivial jab Y khaali nahi, poora R nahi, aur X baaki determine nahi karta.",
      ],
      [
        "4NF: every non-trivial MVD X ↠ Y has X as a superkey. Independent multi-valued facts must not share a table with a composite key that is not a determinant of either fact.",
        "4NF: हर गैर-तुच्छ MVD X ↠ Y में X सुपर की हो। स्वतंत्र मल्टी-वैल्यूड तथ्य ऐसे कम्पोजिट की वाली टेबल में न हों जो किसी तथ्य का निर्धारक नहीं।",
        "4NF: har non-trivial MVD X ↠ Y mein X superkey ho. Independent multi-valued facts aisi composite key wali table mein na hon jo kisi fact ki determinant nahi.",
      ],
      [
        "Join dependency *{R1,...,Rk} is trivial if some Ri is the whole of R. 5NF (PJNF, project-join NF) requires every non-trivial JD to be implied by the candidate keys.",
        "जॉइन डिपेंडेंसी *{R1,...,Rk} तुच्छ यदि कोई Ri पूरा R हो। 5NF (PJNF) माँगती है हर गैर-तुच्छ JD कैंडिडेट की से निहित हो।",
        "Join dependency *{R1,...,Rk} trivial agar koi Ri poora R ho. 5NF (PJNF) maangti hai har non-trivial JD candidate keys se implied ho.",
      ],
      [
        "A binary JD is exactly an MVD; 5NF is strictly stronger than 4NF only when a ternary (or higher) join constraint is not implied by MVDs.",
        "बाइनरी JD ठीक एक MVD है; 5NF, 4NF से सख्त तभी जब टर्नरी (या उच्च) जॉइन कंस्ट्रेंट MVD से न निकले।",
        "Binary JD exactly ek MVD hai; 5NF, 4NF se strict tabhi jab ternary (ya higher) join constraint MVD se na nikle.",
      ],
      [
        "Practical design: if textbooks and lecturers are independent facts about a course, make CourseTextbook and CourseLecturer — two binary tables — instead of one ternary table that must store the Cartesian product.",
        "व्यावहारिक डिज़ाइन: यदि पाठ्यपुस्तक और व्याख्याता कोर्स के स्वतंत्र तथ्य हैं तो CourseTextbook और CourseLecturer — दो बाइनरी टेबल — बनाएँ, एक टर्नरी टेबल नहीं जो कार्टेशियन गुणनफल रखे।",
        "Practical design: agar textbooks aur lecturers course ke independent facts hain to CourseTextbook aur CourseLecturer — do binary tables — banao, ek ternary table nahi jo Cartesian product rakhe.",
      ],
    ]),
    TBL(
      [
        ["Constraint", "कंस्ट्रेंट", "Constraint"],
        ["Reads as", "पढ़ा जाता है", "Padha jaata hai"],
        ["Normal form", "नॉर्मल फ़ॉर्म", "Normal form"],
      ],
      [
        [
          ["FD  X → Y", "FD  X → Y", "FD  X → Y"],
          ["X determines Y", "X, Y निर्धारित करता है", "X, Y determine karta hai"],
          ["2NF / 3NF / BCNF", "2NF / 3NF / BCNF", "2NF / 3NF / BCNF"],
        ],
        [
          ["MVD X ↠ Y", "MVD X ↠ Y", "MVD X ↠ Y"],
          ["X multi-determines Y", "X, Y को मल्टी-निर्धारित करता है", "X, Y ko multi-determine karta hai"],
          ["4NF", "4NF", "4NF"],
        ],
        [
          ["JD  *{R1,..,Rk}", "JD  *{R1,..,Rk}", "JD  *{R1,..,Rk}"],
          ["R equals the join of its projections", "R अपने प्रोजेक्शन के जॉइन के बराबर", "R apne projections ke join ke barabar"],
          ["5NF / PJNF", "5NF / PJNF", "5NF / PJNF"],
        ],
      ],
    ),
    EXAM(
      "Define MVD and JD. Give the textbook/lecturer example of a non-trivial MVD and show the lossless decomposition into 4NF. State the 5NF condition in one sentence.",
      "MVD और JD परिभाषित कीजिए। पाठ्यपुस्तक/व्याख्याता उदाहरण से गैर-तुच्छ MVD दिखाकर 4NF डिकंपोज़िशन दीजिए। 5NF शर्त एक वाक्य में लिखिए।",
      "MVD aur JD define karo. Textbook/lecturer example se non-trivial MVD dikhakar 4NF decomposition do. 5NF condition ek sentence mein likho.",
    ),
  ]),

  "rdms-anomalies": topic("rdms-anomalies", [
    P(
      "When one table mixes two or more independent facts, inserts, deletes and updates misbehave. These are insertion, deletion and update anomalies. Normalisation is the disciplined decomposition of a schema so that each fact is stored once. A good decomposition must be lossless-join (the natural join of the pieces recreates the original) and preferably dependency-preserving (each original FD can still be checked inside some piece).",
      "जब एक टेबल दो या अधिक स्वतंत्र तथ्यों को मिलाती है, insert, delete और update गड़बड़ाते हैं। ये insertion, deletion और update एनोमली हैं। नॉर्मलाइज़ेशन स्कीमा का अनुशासित विघटन है ताकि प्रत्येक तथ्य एक बार संग्रहित हो। अच्छा डिकंपोज़िशन lossless-join होना चाहिए (टुकड़ों का नेचुरल जॉइन मूल बनाए) और अधिमानतः dependency-preserving (हर मूल FD किसी टुकड़े में जाँची जा सके)।",
      "Jab ek table do ya zyada independent facts milati hai, inserts, deletes aur updates gadbad karte hain. Yeh insertion, deletion aur update anomalies hain. Normalisation schema ka disciplined decomposition hai taaki har fact ek baar store ho. Achha decomposition lossless-join hona chahiye (pieces ka natural join original banaye) aur preferably dependency-preserving (har original FD kisi piece mein check ho sake).",
    ),
    H("Key points", "मुख्य बिंदु", "Key points"),
    UL([
      [
        "Insertion anomaly: you cannot record a new department until at least one employee exists, because dept_name lives only in the Employee table.",
        "Insertion एनोमली: नया विभाग तब तक दर्ज नहीं जब तक कम से कम एक कर्मचारी न हो, क्योंकि dept_name केवल Employee टेबल में है।",
        "Insertion anomaly: naya department tab tak record nahi jab tak kam se kam ek employee na ho, kyunki dept_name sirf Employee table mein hai.",
      ],
      [
        "Deletion anomaly: firing the last employee of a department accidentally deletes the only copy of the department's name and budget.",
        "Deletion एनोमली: विभाग के अंतिम कर्मचारी को हटाना विभाग के नाम और बजट की एकमात्र प्रति भी मिटा देता है।",
        "Deletion anomaly: department ke aakhri employee ko hatana department ke naam aur budget ki akeli copy bhi mita deta hai.",
      ],
      [
        "Update anomaly: renaming a department requires editing every employee row; miss one row and the database is inconsistent.",
        "Update एनोमली: विभाग का नाम बदलने पर हर कर्मचारी पंक्ति संपादित करनी पड़ती है; एक छूटी तो डेटाबेस असंगत।",
        "Update anomaly: department ka naam badalne par har employee row edit karni padti hai; ek chhoot gayi to database inconsistent.",
      ],
      [
        "Lossless-join test (binary): decomposing R into R1 and R2 is lossless iff the common attributes form a superkey of at least one piece (R1 ∩ R2 → R1 or R1 ∩ R2 → R2).",
        "Lossless-join परीक्षण (बाइनरी): R को R1 व R2 में बाँटना lossless iff साझा एट्रिब्यूट कम से कम एक टुकड़े की सुपर की हों।",
        "Lossless-join test (binary): R ko R1 aur R2 mein baantna lossless iff shared attributes kam se kam ek piece ki superkey hon.",
      ],
      [
        "A lossy join invents spurious tuples — combinations that never existed. That is worse than redundancy.",
        "Lossy जॉइन नकली टपल गढ़ता है — वे संयोजन जो कभी थे ही नहीं। यह रिडंडेंसी से भी खराब है।",
        "Lossy join spurious tuples gadh ta hai — woh combinations jo kabhi the hi nahi. Yeh redundancy se bhi kharab hai.",
      ],
      [
        "Dependency preservation: if F+ cannot be checked without joining the pieces (classic 3NF vs BCNF tension), the design is not dependency-preserving. 3NF synthesis always preserves FDs; BCNF decomposition does not always.",
        "डिपेंडेंसी प्रिज़र्वेशन: यदि F+ बिना टुकड़े जोड़े जाँचा न जा सके (क्लासिक 3NF बनाम BCNF तनाव), डिज़ाइन dependency-preserving नहीं। 3NF सिंथेसिस हमेशा FD सुरक्षित रखती है; BCNF डिकंपोज़िशन हमेशा नहीं।",
        "Dependency preservation: agar F+ bina pieces join kiye check na ho (classic 3NF vs BCNF tension), design dependency-preserving nahi. 3NF synthesis hamesha FDs preserve karti hai; BCNF decomposition hamesha nahi.",
      ],
    ]),
    TBL(
      [
        ["Anomaly", "एनोमली", "Anomaly"],
        ["Symptom on Student-Dept mixed table", "मिश्रित Student-Dept टेबल पर लक्षण", "Mixed Student-Dept table par symptom"],
      ],
      [
        [
          ["Insertion", "Insertion", "Insertion"],
          ["Cannot add a dept with zero students", "शून्य छात्रों वाला विभाग नहीं जोड़ सकते", "Zero students wala dept nahi jod sakte"],
        ],
        [
          ["Deletion", "Deletion", "Deletion"],
          ["Deleting last student drops the dept fact", "अंतिम छात्र हटाने से विभाग तथ्य चला जाता है", "Aakhri student hatane se dept fact chala jaata hai"],
        ],
        [
          ["Update", "Update", "Update"],
          ["Dept rename must touch every student row", "विभाग नाम हर छात्र पंक्ति पर बदलना", "Dept naam har student row par badalna"],
        ],
      ],
    ),
    EXAM(
      "With a concrete unnormalised table (Employee-id, name, dept-id, dept-name, project-id, hours) identify one insertion, one deletion and one update anomaly. State the lossless-join test for a binary decomposition.",
      "एक अन्नॉर्मलाइज़्ड टेबल (Employee-id, name, dept-id, dept-name, project-id, hours) पर एक insertion, एक deletion और एक update एनोमली पहचानिए। बाइनरी डिकंपोज़िशन का lossless-join परीक्षण लिखिए।",
      "Ek unnormalised table (Employee-id, name, dept-id, dept-name, project-id, hours) par ek insertion, ek deletion aur ek update anomaly pehchano. Binary decomposition ka lossless-join test likho.",
    ),
  ]),

};
