import { L } from "./t";
import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "se",
    short: "SE",
    title: L(
      "Software Engineering",
      "सॉफ्टवेयर इंजीनियरिंग",
      "Software Engineering",
    ),
    blurb: L(
      "Process models, requirements, design, UML, project management, and quality.",
      "प्रोसेस मॉडल, आवश्यकताएँ, डिज़ाइन, UML, प्रोजेक्ट प्रबंधन और गुणवत्ता।",
      "Process models, requirements, design, UML, project management aur quality.",
    ),
    units: [
      {
        id: "se-u1",
        index: 1,
        title: L(
          "Software Engineering & Models",
          "सॉफ्टवेयर इंजीनियरिंग और मॉडल",
          "Software Engineering aur Models",
        ),
        summary: L(
          "Software’s role, nature, and the major process models from Waterfall to Agile.",
          "सॉफ्टवेयर की भूमिका, प्रकृति और वॉटरफॉल से एजाइल तक प्रमुख प्रोसेस मॉडल।",
          "Software ki bhumika, nature, aur Waterfall se Agile tak ke process models.",
        ),
        topics: [
          {
            id: "se-evolving-role",
            title: L(
              "The evolving role of software",
              "सॉफ्टवेयर की बदलती भूमिका",
              "Software ki badalti bhumika",
            ),
          },
          {
            id: "se-changing-nature",
            title: L(
              "Changing nature of software",
              "सॉफ्टवेयर की बदलती प्रकृति",
              "Software ki badalti prakriti",
            ),
          },
          {
            id: "se-evolution",
            title: L(
              "Evolution of software engineering",
              "सॉफ्टवेयर इंजीनियरिंग का विकास",
              "Software engineering ka vikas",
            ),
          },
          {
            id: "se-characteristics",
            title: L(
              "Characteristics of software",
              "सॉफ्टवेयर की विशेषताएँ",
              "Software ki visheshataen",
            ),
          },
          {
            id: "se-sdlc",
            title: L(
              "SDLC introduction",
              "SDLC का परिचय",
              "SDLC ka parichay",
            ),
          },
          {
            id: "se-waterfall",
            title: L("Waterfall Model", "वॉटरफॉल मॉडल", "Waterfall Model"),
          },
          {
            id: "se-vmodel",
            title: L("V-Model", "वी-मॉडल", "V-Model"),
          },
          {
            id: "se-prototype",
            title: L("Prototype Model", "प्रोटोटाइप मॉडल", "Prototype Model"),
          },
          {
            id: "se-rad",
            title: L("RAD Model", "RAD मॉडल", "RAD Model"),
          },
          {
            id: "se-incremental",
            title: L(
              "Incremental Development Model",
              "इंक्रीमेंटल डेवलपमेंट मॉडल",
              "Incremental Development Model",
            ),
          },
          {
            id: "se-spiral",
            title: L("Spiral Model", "स्पाइरल मॉडल", "Spiral Model"),
          },
          {
            id: "se-evolutionary",
            title: L(
              "Evolutionary Model",
              "इवोल्यूशनरी मॉडल",
              "Evolutionary Model",
            ),
          },
          {
            id: "se-agile",
            title: L("Agile Model", "एजाइल मॉडल", "Agile Model"),
          },
        ],
      },
      {
        id: "se-u2",
        index: 2,
        title: L(
          "Requirements & Design Engineering",
          "आवश्यकताएँ और डिज़ाइन इंजीनियरिंग",
          "Requirements aur Design Engineering",
        ),
        summary: L(
          "Requirements engineering, SRS, structured design, modularity, OOAD and UML.",
          "आवश्यकता इंजीनियरिंग, SRS, संरचित डिज़ाइन, मॉड्यूलैरिटी, OOAD और UML।",
          "Requirements engineering, SRS, structured design, modularity, OOAD aur UML.",
        ),
        topics: [
          {
            id: "se-req-gathering",
            title: L(
              "Requirement gathering and analysis",
              "आवश्यकता संग्रह और विश्लेषण",
              "Requirement gathering aur analysis",
            ),
          },
          {
            id: "se-feasibility",
            title: L(
              "Feasibility studies",
              "व्यवहार्यता अध्ययन",
              "Feasibility studies",
            ),
          },
          {
            id: "se-req-validation",
            title: L(
              "Requirements validation",
              "आवश्यकताओं का सत्यापन",
              "Requirements validation",
            ),
          },
          {
            id: "se-req-management",
            title: L(
              "Requirements management",
              "आवश्यकता प्रबंधन",
              "Requirements management",
            ),
          },
          {
            id: "se-func-nfr",
            title: L(
              "Functional and non-functional requirements",
              "कार्यात्मक और गैर-कार्यात्मक आवश्यकताएँ",
              "Functional aur non-functional requirements",
            ),
          },
          {
            id: "se-user-system",
            title: L(
              "User and system requirements",
              "उपयोगकर्ता और सिस्टम आवश्यकताएँ",
              "User aur system requirements",
            ),
          },
          {
            id: "se-srs",
            title: L("SRS documents", "SRS दस्तावेज़", "SRS documents"),
          },
          {
            id: "se-design-concepts",
            title: L(
              "Software design concepts",
              "सॉफ्टवेयर डिज़ाइन अवधारणाएँ",
              "Software design concepts",
            ),
          },
          {
            id: "se-design-process",
            title: L(
              "Design process and methodology",
              "डिज़ाइन प्रक्रिया और पद्धति",
              "Design process aur methodology",
            ),
          },
          {
            id: "se-fo-design",
            title: L(
              "Function-oriented software design",
              "फ़ंक्शन-ओरिएंटेड सॉफ्टवेयर डिज़ाइन",
              "Function-oriented software design",
            ),
          },
          {
            id: "se-dfd",
            title: L(
              "Structured analysis, structure chart, DFD",
              "संरचित विश्लेषण, स्ट्रक्चर चार्ट, DFD",
              "Structured analysis, structure chart, DFD",
            ),
          },
          {
            id: "se-modularity",
            title: L(
              "Modularity, cohesion, and coupling",
              "मॉड्यूलैरिटी, कोहीजन और कपलिंग",
              "Modularity, cohesion aur coupling",
            ),
          },
          {
            id: "se-ooad",
            title: L("OOAD concepts", "OOAD अवधारणाएँ", "OOAD concepts"),
          },
          {
            id: "se-uml-views",
            title: L(
              "UML diagrams and views",
              "UML डायग्राम और व्यू",
              "UML diagrams aur views",
            ),
          },
          {
            id: "se-class-object",
            title: L(
              "Class and object diagrams",
              "क्लास और ऑब्जेक्ट डायग्राम",
              "Class aur object diagrams",
            ),
          },
          {
            id: "se-uml-behavior",
            title: L(
              "Activity, interaction, and state chart diagrams",
              "एक्टिविटी, इंटरैक्शन और स्टेट चार्ट डायग्राम",
              "Activity, interaction aur state chart diagrams",
            ),
          },
        ],
      },
      {
        id: "se-u3",
        index: 3,
        title: L(
          "Software Project Management",
          "सॉफ्टवेयर प्रोजेक्ट प्रबंधन",
          "Software Project Management",
        ),
        summary: L(
          "Planning, scheduling, size estimation, and COCOMO.",
          "प्लानिंग, शेड्यूलिंग, आकार अनुमान और COCOMO।",
          "Planning, scheduling, size estimation aur COCOMO.",
        ),
        topics: [
          {
            id: "se-spm-need",
            title: L(
              "Need for software project management",
              "सॉफ्टवेयर प्रोजेक्ट प्रबंधन की आवश्यकता",
              "Software project management ki zaroorat",
            ),
          },
          {
            id: "se-spm-types",
            title: L(
              "Types of management in SPM",
              "SPM में प्रबंधन के प्रकार",
              "SPM mein management ke prakar",
            ),
          },
          {
            id: "se-planning",
            title: L(
              "Project planning",
              "प्रोजेक्ट प्लानिंग",
              "Project planning",
            ),
          },
          {
            id: "se-scheduling",
            title: L(
              "Software project scheduling",
              "सॉफ्टवेयर प्रोजेक्ट शेड्यूलिंग",
              "Software project scheduling",
            ),
          },
          {
            id: "se-loc-fp",
            title: L(
              "Project size estimation — LOC and Function Point",
              "प्रोजेक्ट आकार अनुमान — LOC और फ़ंक्शन पॉइंट",
              "Project size estimation — LOC aur Function Point",
            ),
          },
          {
            id: "se-estimation",
            title: L(
              "Empirical, analytical, and heuristic techniques",
              "एम्पिरिकल, एनालिटिकल और ह्यूरिस्टिक तकनीकें",
              "Empirical, analytical aur heuristic techniques",
            ),
          },
          {
            id: "se-cocomo",
            title: L("COCOMO models", "COCOMO मॉडल", "COCOMO models"),
          },
        ],
      },
      {
        id: "se-u4",
        index: 4,
        title: L(
          "Testing Strategies and Quality Management",
          "टेस्टिंग रणनीतियाँ और गुणवत्ता प्रबंधन",
          "Testing strategies aur quality management",
        ),
        summary: L(
          "Testing, debugging, reliability, SQA, reviews, SCM, ISO, CMM, and risk.",
          "टेस्टिंग, डिबगिंग, विश्वसनीयता, SQA, रिव्यू, SCM, ISO, CMM और जोखिम।",
          "Testing, debugging, reliability, SQA, reviews, SCM, ISO, CMM aur risk.",
        ),
        topics: [
          {
            id: "se-testing-strategies",
            title: L(
              "Testing strategies for software",
              "सॉफ्टवेयर टेस्टिंग रणनीतियाँ",
              "Software testing strategies",
            ),
          },
          {
            id: "se-black-white",
            title: L(
              "Black-box and white-box testing",
              "ब्लैक-बॉक्स और व्हाइट-बॉक्स टेस्टिंग",
              "Black-box aur white-box testing",
            ),
          },
          {
            id: "se-vv",
            title: L(
              "Verification and validation",
              "वेरिफिकेशन और वैलिडेशन",
              "Verification aur validation",
            ),
          },
          {
            id: "se-test-levels",
            title: L(
              "Unit, integration, and system testing",
              "यूनिट, इंटीग्रेशन और सिस्टम टेस्टिंग",
              "Unit, integration aur system testing",
            ),
          },
          {
            id: "se-debugging",
            title: L(
              "Debugging approaches",
              "डिबगिंग दृष्टिकोण",
              "Debugging approaches",
            ),
          },
          {
            id: "se-reliability",
            title: L(
              "Software reliability",
              "सॉफ्टवेयर विश्वसनीयता",
              "Software reliability",
            ),
          },
          {
            id: "se-sqa",
            title: L(
              "Quality concepts and software quality assurance",
              "गुणवत्ता अवधारणाएँ और SQA",
              "Quality concepts aur SQA",
            ),
          },
          {
            id: "se-reviews",
            title: L(
              "Software reviews and formal technical reviews",
              "सॉफ्टवेयर रिव्यू और औपचारिक तकनीकी रिव्यू",
              "Software reviews aur formal technical reviews",
            ),
          },
          {
            id: "se-scm",
            title: L(
              "Software configuration management",
              "सॉफ्टवेयर कॉन्फ़िगरेशन प्रबंधन",
              "Software configuration management",
            ),
          },
          {
            id: "se-iso-cmm",
            title: L(
              "ISO 9000 and Capability Maturity Model",
              "ISO 9000 और CMM",
              "ISO 9000 aur CMM",
            ),
          },
          {
            id: "se-risk",
            title: L("Risk management", "जोखिम प्रबंधन", "Risk management"),
          },
        ],
      },
    ],
  },
  {
    id: "java",
    short: "Java",
    title: L(
      "Programming in Java",
      "जावा में प्रोग्रामिंग",
      "Java mein programming",
    ),
    blurb: L(
      "JVM, OOP, inheritance, interfaces, exceptions, threads, I/O, applets, and AWT.",
      "JVM, OOP, इनहेरिटेंस, इंटरफ़ेस, एक्सेप्शन, थ्रेड, I/O, एप्लेट और AWT।",
      "JVM, OOP, inheritance, interfaces, exceptions, threads, I/O, applets aur AWT.",
    ),
    units: [
      {
        id: "java-u1",
        index: 1,
        title: L("Overview of Java", "जावा का अवलोकन", "Java ka overview"),
        summary: L(
          "History, JVM, JDK, language basics, OOP, strings, and constructors.",
          "इतिहास, JVM, JDK, भाषा की मूल बातें, OOP, स्ट्रिंग और कंस्ट्रक्टर।",
          "History, JVM, JDK, language basics, OOP, strings aur constructors.",
        ),
        topics: [
          {
            id: "java-genesis",
            title: L(
              "Genesis and history of Java",
              "जावा का जन्म और इतिहास",
              "Java ka janm aur itihas",
            ),
          },
          {
            id: "java-jvm-jdk",
            title: L(
              "JVM, JDK, bytecode, and platform independence",
              "JVM, JDK, बाइटकोड और प्लेटफ़ॉर्म स्वतंत्रता",
              "JVM, JDK, bytecode aur platform independence",
            ),
          },
          {
            id: "java-files",
            title: L(
              "Source files, JAR files, compiling and running",
              "सोर्स फ़ाइलें, JAR, कंपाइल और रन करना",
              "Source files, JAR, compile aur run karna",
            ),
          },
          {
            id: "java-types",
            title: L(
              "Data types, literals, variables, and constants",
              "डेटा टाइप, लिटरल, वेरिएबल और कॉन्स्टेंट",
              "Data types, literals, variables aur constants",
            ),
          },
          {
            id: "java-arrays",
            title: L(
              "Arrays and array types",
              "एरे और एरे टाइप",
              "Arrays aur array types",
            ),
          },
          {
            id: "java-operators",
            title: L("Operators", "ऑपरेटर", "Operators"),
          },
          {
            id: "java-control",
            title: L(
              "Conditional and looping statements",
              "कंडीशनल और लूपिंग स्टेटमेंट",
              "Conditional aur looping statements",
            ),
          },
          {
            id: "java-oop",
            title: L(
              "Classes, objects, and methods",
              "क्लास, ऑब्जेक्ट और मेथड",
              "Classes, objects aur methods",
            ),
          },
          {
            id: "java-packages-intro",
            title: L(
              "Java packages overview",
              "जावा पैकेज अवलोकन",
              "Java packages overview",
            ),
          },
          {
            id: "java-nested",
            title: L(
              "Nested and inner classes",
              "नेस्टेड और इनर क्लास",
              "Nested aur inner classes",
            ),
          },
          {
            id: "java-strings",
            title: L("String handling", "स्ट्रिंग हैंडलिंग", "String handling"),
          },
          {
            id: "java-constructors",
            title: L(
              "Constructors and constructor types",
              "कंस्ट्रक्टर और उनके प्रकार",
              "Constructors aur unke prakar",
            ),
          },
        ],
      },
      {
        id: "java-u2",
        index: 2,
        title: L(
          "Inheritance, Interfaces & Packages",
          "इनहेरिटेंस, इंटरफ़ेस और पैकेज",
          "Inheritance, interfaces aur packages",
        ),
        summary: L(
          "Inheritance, polymorphism, abstract classes, interfaces, and packages.",
          "इनहेरिटेंस, पॉलीमॉर्फिज़्म, एब्सट्रैक्ट क्लास, इंटरफ़ेस और पैकेज।",
          "Inheritance, polymorphism, abstract classes, interfaces aur packages.",
        ),
        topics: [
          {
            id: "java-inheritance",
            title: L(
              "Superclass, subclass, and types of inheritance",
              "सुपरक्लास, सबक्लास और इनहेरिटेंस के प्रकार",
              "Superclass, subclass aur inheritance ke prakar",
            ),
          },
          {
            id: "java-poly",
            title: L(
              "Method overloading and overriding",
              "मेथड ओवरलोडिंग और ओवरराइडिंग",
              "Method overloading aur overriding",
            ),
          },
          {
            id: "java-abstract-final",
            title: L(
              "Abstract classes and final with inheritance",
              "एब्सट्रैक्ट क्लास और inheritance में final",
              "Abstract classes aur inheritance mein final",
            ),
          },
          {
            id: "java-ctor-multi",
            title: L(
              "Constructors in multilevel inheritance",
              "मल्टीलेवल इनहेरिटेंस में कंस्ट्रक्टर",
              "Multilevel inheritance mein constructors",
            ),
          },
          {
            id: "java-interfaces",
            title: L(
              "Defining, implementing, and extending interfaces",
              "इंटरफ़ेस परिभाषित करना, लागू करना और विस्तार",
              "Interfaces define, implement aur extend karna",
            ),
          },
          {
            id: "java-nested-iface",
            title: L(
              "Nested interfaces and their importance",
              "नेस्टेड इंटरफ़ेस और उनका महत्व",
              "Nested interfaces aur unki mahatva",
            ),
          },
          {
            id: "java-pkg-create",
            title: L(
              "Defining packages, rules, and classpath",
              "पैकेज बनाना, नियम और classpath",
              "Packages banana, rules aur classpath",
            ),
          },
          {
            id: "java-access",
            title: L(
              "Access protection and importing packages",
              "एक्सेस प्रोटेक्शन और पैकेज इम्पोर्ट",
              "Access protection aur package import",
            ),
          },
        ],
      },
      {
        id: "java-u3",
        index: 3,
        title: L(
          "Exception Handling & Multithreading",
          "एक्सेप्शन हैंडलिंग और मल्टीथ्रेडिंग",
          "Exception handling aur multithreading",
        ),
        summary: L(
          "try/catch, throw, custom exceptions, threads, sync, and communication.",
          "try/catch, throw, कस्टम एक्सेप्शन, थ्रेड, सिंक और कम्युनिकेशन।",
          "try/catch, throw, custom exceptions, threads, sync aur communication.",
        ),
        topics: [
          {
            id: "java-try-catch",
            title: L(
              "try, catch, multiple catch, and nested try",
              "try, catch, मल्टीपल catch और नेस्टेड try",
              "try, catch, multiple catch aur nested try",
            ),
          },
          {
            id: "java-throw-finally",
            title: L(
              "throw, throws, and finally",
              "throw, throws और finally",
              "throw, throws aur finally",
            ),
          },
          {
            id: "java-ex-types",
            title: L(
              "Exception types and custom exceptions",
              "एक्सेप्शन के प्रकार और कस्टम एक्सेप्शन",
              "Exception ke prakar aur custom exceptions",
            ),
          },
          {
            id: "java-threads",
            title: L(
              "Java thread model, creating threads, and lifecycle",
              "जावा थ्रेड मॉडल, थ्रेड बनाना और जीवनचक्र",
              "Java thread model, threads banana aur lifecycle",
            ),
          },
          {
            id: "java-sync",
            title: L(
              "Thread priorities and synchronization",
              "थ्रेड प्राथमिकताएँ और सिंक्रोनाइज़ेशन",
              "Thread priorities aur synchronization",
            ),
          },
          {
            id: "java-itc",
            title: L(
              "Inter-thread communication, suspend, resume, and stop",
              "इंटर-थ्रेड कम्युनिकेशन, suspend, resume और stop",
              "Inter-thread communication, suspend, resume aur stop",
            ),
          },
        ],
      },
      {
        id: "java-u4",
        index: 4,
        title: L(
          "Java Packages, Applets & AWT",
          "जावा पैकेज, एप्लेट और AWT",
          "Java packages, applets aur AWT",
        ),
        summary: L(
          "I/O streams, java.lang, java.util, applets, AWT, and event handling.",
          "I/O स्ट्रीम, java.lang, java.util, एप्लेट, AWT और इवेंट हैंडलिंग।",
          "I/O streams, java.lang, java.util, applets, AWT aur event handling.",
        ),
        topics: [
          {
            id: "java-io",
            title: L(
              "Byte stream and character stream classes",
              "बाइट स्ट्रीम और कैरेक्टर स्ट्रीम क्लास",
              "Byte stream aur character stream classes",
            ),
          },
          {
            id: "java-console",
            title: L(
              "Console I/O, predefined streams, and Scanner",
              "कंसोल I/O, प्रीडिफ़ाइंड स्ट्रीम और Scanner",
              "Console I/O, predefined streams aur Scanner",
            ),
          },
          {
            id: "java-lang",
            title: L(
              "java.lang classes",
              "java.lang क्लास",
              "java.lang classes",
            ),
          },
          {
            id: "java-util",
            title: L(
              "java.util framework",
              "java.util फ़्रेमवर्क",
              "java.util framework",
            ),
          },
          {
            id: "java-event-models",
            title: L("Event models", "इवेंट मॉडल", "Event models"),
          },
          {
            id: "java-applets",
            title: L(
              "Applets — lifecycle, images, and sound",
              "एप्लेट — जीवनचक्र, इमेज और साउंड",
              "Applets — lifecycle, images aur sound",
            ),
          },
          {
            id: "java-awt",
            title: L(
              "Exploring AWT",
              "AWT का परिचय",
              "AWT ka parichay",
            ),
          },
          {
            id: "java-delegation",
            title: L(
              "Delegation event model, classes, sources, and listeners",
              "डेलीगेशन इवेंट मॉडल, क्लास, सोर्स और लिसनर",
              "Delegation event model, classes, sources aur listeners",
            ),
          },
          {
            id: "java-mouse-key",
            title: L(
              "Mouse and keyboard events, adapter classes",
              "माउस और कीबोर्ड इवेंट, एडॉप्टर क्लास",
              "Mouse aur keyboard events, adapter classes",
            ),
          },
        ],
      },
    ],
  },
  {
    id: "rdms",
    short: "RDBMS",
    title: L(
      "Relational Database Management System",
      "रिलेशनल डेटाबेस मैनेजमेंट सिस्टम",
      "Relational Database Management System",
    ),
    blurb: L(
      "DBMS architecture, E-R model, keys, normalization, algebra, and transactions.",
      "DBMS आर्किटेक्चर, E-R मॉडल, कीज़, नॉर्मलाइज़ेशन, अलजेब्रा और ट्रांज़ैक्शन।",
      "DBMS architecture, E-R model, keys, normalization, algebra aur transactions.",
    ),
    units: [
      {
        id: "rdms-u1",
        index: 1,
        title: L(
          "Overview of Database Management",
          "डेटाबेस प्रबंधन का अवलोकन",
          "Database management ka overview",
        ),
        summary: L(
          "File vs database, architecture, data models, languages, and the DBA.",
          "फ़ाइल बनाम डेटाबेस, आर्किटेक्चर, डेटा मॉडल, भाषाएँ और DBA।",
          "File vs database, architecture, data models, languages aur DBA.",
        ),
        topics: [
          {
            id: "rdms-intro",
            title: L(
              "Data processing versus data management",
              "डेटा प्रोसेसिंग बनाम डेटा प्रबंधन",
              "Data processing versus data management",
            ),
          },
          {
            id: "rdms-file-vs-db",
            title: L(
              "File-oriented versus database-oriented approach",
              "फ़ाइल-ओरिएंटेड बनाम डेटाबेस-ओरिएंटेड दृष्टिकोण",
              "File-oriented versus database-oriented approach",
            ),
          },
          {
            id: "rdms-schema",
            title: L(
              "Instances, schemas, and views",
              "इंस्टेंस, स्कीमा और व्यू",
              "Instances, schemas aur views",
            ),
          },
          {
            id: "rdms-independence",
            title: L(
              "Data independence",
              "डेटा स्वतंत्रता",
              "Data independence",
            ),
          },
          {
            id: "rdms-arch",
            title: L(
              "DBMS architecture",
              "DBMS आर्किटेक्चर",
              "DBMS architecture",
            ),
          },
          {
            id: "rdms-dba",
            title: L(
              "Database administration roles",
              "DBA की भूमिकाएँ",
              "DBA ki bhumikaen",
            ),
          },
          {
            id: "rdms-models",
            title: L(
              "Network, relational, and hierarchical models",
              "नेटवर्क, रिलेशनल और हायरार्किकल मॉडल",
              "Network, relational aur hierarchical models",
            ),
          },
          {
            id: "rdms-languages",
            title: L(
              "DDL, DML, DCL, and TCL",
              "DDL, DML, DCL और TCL",
              "DDL, DML, DCL aur TCL",
            ),
          },
          {
            id: "rdms-users-dict",
            title: L(
              "DBMS users and data dictionaries",
              "DBMS उपयोगकर्ता और डेटा डिक्शनरी",
              "DBMS users aur data dictionaries",
            ),
          },
        ],
      },
      {
        id: "rdms-u2",
        index: 2,
        title: L(
          "Database Design and E-R Model",
          "डेटाबेस डिज़ाइन और E-R मॉडल",
          "Database design aur E-R model",
        ),
        summary: L(
          "Entities, relationships, keys, Codd’s rules, EER, and mapping to schemas.",
          "एंटिटी, रिलेशनशिप, कीज़, कॉड के नियम, EER और स्कीमा मैपिंग।",
          "Entities, relationships, keys, Codd ke rules, EER aur schema mapping.",
        ),
        topics: [
          {
            id: "rdms-er-intro",
            title: L(
              "Entities, relationships, cardinality, and attributes",
              "एंटिटी, रिलेशनशिप, कार्डिनैलिटी और एट्रिब्यूट",
              "Entities, relationships, cardinality aur attributes",
            ),
          },
          {
            id: "rdms-er-diagrams",
            title: L(
              "ER diagrams and constraints",
              "ER डायग्राम और कंस्ट्रेंट्स",
              "ER diagrams aur constraints",
            ),
          },
          {
            id: "rdms-keys",
            title: L(
              "Super, candidate, primary, alternate, and foreign keys",
              "सुपर, कैंडिडेट, प्राइमरी, अल्टरनेट और फ़ॉरेन की",
              "Super, candidate, primary, alternate aur foreign keys",
            ),
          },
          {
            id: "rdms-codd",
            title: L("Codd's rules", "कॉड के नियम", "Codd ke rules"),
          },
          {
            id: "rdms-eer",
            title: L(
              "Generalization, specialization, and aggregation",
              "जनरलाइज़ेशन, स्पेशलाइज़ेशन और एग्रीगेशन",
              "Generalization, specialization aur aggregation",
            ),
          },
          {
            id: "rdms-participation",
            title: L(
              "Participation constraints",
              "पार्टिसिपेशन कंस्ट्रेंट्स",
              "Participation constraints",
            ),
          },
          {
            id: "rdms-er-map",
            title: L(
              "Converting an E-R model into relational schemas",
              "E-R मॉडल को रिलेशनल स्कीमा में बदलना",
              "E-R model ko relational schema mein badalna",
            ),
          },
        ],
      },
      {
        id: "rdms-u3",
        index: 3,
        title: L(
          "Relational Database Design and Operations",
          "रिलेशनल डिज़ाइन और ऑपरेशन्स",
          "Relational design aur operations",
        ),
        summary: L(
          "Dependencies, anomalies, normalization, and relational algebra.",
          "डिपेंडेंसी, एनोमली, नॉर्मलाइज़ेशन और रिलेशनल अलजेब्रा।",
          "Dependencies, anomalies, normalization aur relational algebra.",
        ),
        topics: [
          {
            id: "rdms-fd",
            title: L(
              "Functional dependencies",
              "फ़ंक्शनल डिपेंडेंसी",
              "Functional dependencies",
            ),
          },
          {
            id: "rdms-mvd",
            title: L(
              "Multivalued and join dependencies",
              "मल्टीवैल्यूड और जॉइन डिपेंडेंसी",
              "Multivalued aur join dependencies",
            ),
          },
          {
            id: "rdms-anomalies",
            title: L(
              "Database anomalies and decomposition",
              "डेटाबेस एनोमली और डिकंपोज़िशन",
              "Database anomalies aur decomposition",
            ),
          },
          {
            id: "rdms-nf123",
            title: L("1NF, 2NF, and 3NF", "1NF, 2NF और 3NF", "1NF, 2NF aur 3NF"),
          },
          {
            id: "rdms-bcnf",
            title: L(
              "BCNF, 4NF, 5NF, and denormalization",
              "BCNF, 4NF, 5NF और डीनॉर्मलाइज़ेशन",
              "BCNF, 4NF, 5NF aur denormalization",
            ),
          },
          {
            id: "rdms-ra-basic",
            title: L(
              "Select, project, union, Cartesian product, intersection",
              "सेलेक्ट, प्रोजेक्ट, यूनियन, कार्टेशियन प्रोडक्ट, इंटरसेक्शन",
              "Select, project, union, Cartesian product, intersection",
            ),
          },
          {
            id: "rdms-ra-join",
            title: L(
              "Join operations — inner, outer, and self join",
              "जॉइन ऑपरेशन्स — इनर, आउटर और सेल्फ जॉइन",
              "Join operations — inner, outer aur self join",
            ),
          },
        ],
      },
      {
        id: "rdms-u4",
        index: 4,
        title: L("Transactions", "ट्रांज़ैक्शन", "Transactions"),
        summary: L(
          "ACID properties, concurrency control, and serializability.",
          "ACID गुण, कंकरेंसी नियंत्रण और सीरियलाइज़ेबिलिटी।",
          "ACID properties, concurrency control aur serializability.",
        ),
        topics: [
          {
            id: "rdms-acid",
            title: L(
              "Transactions and ACID properties",
              "ट्रांज़ैक्शन और ACID गुण",
              "Transactions aur ACID properties",
            ),
          },
          {
            id: "rdms-concurrency",
            title: L(
              "Concurrency control techniques",
              "कंकरेंसी नियंत्रण तकनीकें",
              "Concurrency control techniques",
            ),
          },
          {
            id: "rdms-serial",
            title: L("Serializability", "सीरियलाइज़ेबिलिटी", "Serializability"),
          },
        ],
      },
    ],
  },
  {
    id: "cyber",
    short: "Cyber",
    title: L(
      "Cyber Security and Cyber Law",
      "साइबर सुरक्षा और साइबर कानून",
      "Cyber security aur cyber law",
    ),
    blurb: L(
      "Cyberspace, threats, authentication, domain security, payments, and Indian cyber law.",
      "साइबरस्पेस, खतरे, प्रमाणीकरण, डोमेन सुरक्षा, भुगतान और भारतीय साइबर कानून।",
      "Cyberspace, threats, authentication, domain security, payments aur Bharatiya cyber law.",
    ),
    units: [
      {
        id: "cyber-u1",
        index: 1,
        title: L(
          "Introduction to Cyberspace and Cyber Security",
          "साइबरस्पेस और साइबर सुरक्षा का परिचय",
          "Cyberspace aur cyber security ka parichay",
        ),
        summary: L(
          "Cyberspace, crimes, threat landscape, modus operandi, and incident handling.",
          "साइबरस्पेस, अपराध, खतरे, कार्यविधि और घटना प्रबंधन।",
          "Cyberspace, crimes, threats, modus operandi aur incident handling.",
        ),
        topics: [
          {
            id: "cyber-space",
            title: L(
              "Defining cyberspace and its architecture",
              "साइबरस्पेस और उसकी वास्तुकला",
              "Cyberspace aur uski architecture",
            ),
          },
          {
            id: "cyber-internet",
            title: L(
              "Internet, WWW, Internet Society, and regulation",
              "इंटरनेट, WWW, इंटरनेट सोसाइटी और विनियमन",
              "Internet, WWW, Internet Society aur regulation",
            ),
          },
          {
            id: "cyber-security",
            title: L(
              "Cybersecurity — concepts, issues, and challenges",
              "साइबर सुरक्षा — अवधारणा, मुद्दे और चुनौतियाँ",
              "Cybersecurity — concepts, issues aur challenges",
            ),
          },
          {
            id: "cyber-cps",
            title: L(
              "Cyber Physical System Security",
              "साइबर फिजिकल सिस्टम सुरक्षा",
              "Cyber Physical System Security",
            ),
          },
          {
            id: "cyber-crime-class",
            title: L(
              "Classification of cybercrimes",
              "साइबर अपराधों का वर्गीकरण",
              "Cybercrimes ka vargikaran",
            ),
          },
          {
            id: "cyber-common",
            title: L(
              "Common cybercrimes and social engineering",
              "सामान्य साइबर अपराध और सोशल इंजीनियरिंग",
              "Common cybercrimes aur social engineering",
            ),
          },
          {
            id: "cyber-malware",
            title: L(
              "Malware, ransomware, zero-day, and zero-click",
              "मैलवेयर, रैंसमवेयर, ज़ीरो-डे और ज़ीरो-क्लिक",
              "Malware, ransomware, zero-day aur zero-click",
            ),
          },
          {
            id: "cyber-modus",
            title: L(
              "Cybercriminals' modus operandi",
              "साइबर अपराधियों की कार्यविधि",
              "Cybercriminals ki modus operandi",
            ),
          },
          {
            id: "cyber-incident",
            title: L(
              "Reporting, remedial and mitigation measures",
              "रिपोर्टिंग, उपचार और शमन उपाय",
              "Reporting, remedial aur mitigation measures",
            ),
          },
        ],
      },
      {
        id: "cyber-u2",
        index: 2,
        title: L(
          "Authentication & Vulnerability Assessment",
          "प्रमाणीकरण और भेद्यता आकलन",
          "Authentication aur vulnerability assessment",
        ),
        summary: L(
          "Vulnerabilities, IDS/IPS, and authentication including biometrics.",
          "भेद्यता, IDS/IPS और बायोमेट्रिक सहित प्रमाणीकरण।",
          "Vulnerability, IDS/IPS aur authentication including biometrics.",
        ),
        topics: [
          {
            id: "cyber-vuln",
            title: L(
              "Vulnerability and vulnerability assessment",
              "भेद्यता और भेद्यता आकलन",
              "Vulnerability aur vulnerability assessment",
            ),
          },
          {
            id: "cyber-ids",
            title: L(
              "Intrusion Detection and Prevention Systems",
              "घुसपैठ पहचान और रोकथाम सिस्टम",
              "Intrusion Detection aur Prevention Systems",
            ),
          },
          {
            id: "cyber-auth",
            title: L(
              "User authentication methods",
              "उपयोगकर्ता प्रमाणीकरण विधियाँ",
              "User authentication methods",
            ),
          },
          {
            id: "cyber-bio",
            title: L(
              "Biometric authentication",
              "बायोमेट्रिक प्रमाणीकरण",
              "Biometric authentication",
            ),
          },
        ],
      },
      {
        id: "cyber-u3",
        index: 3,
        title: L(
          "Domain-Specific Securities & Digital Payments",
          "डोमेन सुरक्षा और डिजिटल भुगतान",
          "Domain security aur digital payments",
        ),
        summary: L(
          "OS, mobile, browser, Wi-Fi, social media, and RBI payment guidelines.",
          "OS, मोबाइल, ब्राउज़र, वाई-फ़ाई, सोशल मीडिया और RBI भुगतान दिशानिर्देश।",
          "OS, mobile, browser, Wi-Fi, social media aur RBI payment guidelines.",
        ),
        topics: [
          {
            id: "cyber-windows-phone",
            title: L(
              "Windows security and smartphone security",
              "विंडोज़ सुरक्षा और स्मार्टफ़ोन सुरक्षा",
              "Windows security aur smartphone security",
            ),
          },
          {
            id: "cyber-browser",
            title: L(
              "Browser, web, and email security",
              "ब्राउज़र, वेब और ईमेल सुरक्षा",
              "Browser, web aur email security",
            ),
          },
          {
            id: "cyber-wifi",
            title: L("Wi-Fi security", "वाई-फ़ाई सुरक्षा", "Wi-Fi security"),
          },
          {
            id: "cyber-social",
            title: L(
              "Social media security and best practices",
              "सोशल मीडिया सुरक्षा और सर्वोत्तम अभ्यास",
              "Social media security aur best practices",
            ),
          },
          {
            id: "cyber-payments",
            title: L(
              "Digital payments — components and stakeholders",
              "डिजिटल भुगतान — घटक और हितधारक",
              "Digital payments — components aur stakeholders",
            ),
          },
          {
            id: "cyber-frauds",
            title: L(
              "Digital payment frauds and preventive measures",
              "डिजिटल भुगतान धोखाधड़ी और रोकथाम",
              "Digital payment frauds aur preventive measures",
            ),
          },
          {
            id: "cyber-rbi",
            title: L(
              "RBI guidelines on digital payments",
              "डिजिटल भुगतान पर RBI दिशानिर्देश",
              "Digital payments par RBI guidelines",
            ),
          },
        ],
      },
      {
        id: "cyber-u4",
        index: 4,
        title: L(
          "Cyber Law Basics",
          "साइबर कानून की मूल बातें",
          "Cyber law ki mool baatein",
        ),
        summary: L(
          "IT Act 2000, PSS Act, IPC, RBI Act, and IPR in India.",
          "IT अधिनियम 2000, PSS अधिनियम, IPC, RBI अधिनियम और भारत में IPR।",
          "IT Act 2000, PSS Act, IPC, RBI Act aur Bharat mein IPR.",
        ),
        topics: [
          {
            id: "cyber-itact",
            title: L(
              "Information Technology Act 2000",
              "सूचना प्रौद्योगिकी अधिनियम 2000",
              "Information Technology Act 2000",
            ),
          },
          {
            id: "cyber-content",
            title: L(
              "Laws on posting inappropriate content",
              "अनुचित सामग्री पोस्ट करने संबंधी कानून",
              "Anuchit content post karne ke kanoon",
            ),
          },
          {
            id: "cyber-pss",
            title: L(
              "Payment and Settlement Systems Act 2007",
              "भुगतान और निपटान प्रणाली अधिनियम 2007",
              "Payment and Settlement Systems Act 2007",
            ),
          },
          {
            id: "cyber-ipc",
            title: L(
              "Cybercrimes under IPC and the RBI Act",
              "IPC और RBI अधिनियम के तहत साइबर अपराध",
              "IPC aur RBI Act ke tahat cybercrimes",
            ),
          },
          {
            id: "cyber-ipr",
            title: L(
              "Intellectual Property Rights in India",
              "भारत में बौद्धिक संपदा अधिकार",
              "Bharat mein Intellectual Property Rights",
            ),
          },
        ],
      },
    ],
  },
  {
    id: "dm",
    short: "DM",
    title: L("Digital Marketing", "डिजिटल मार्केटिंग", "Digital Marketing"),
    blurb: L(
      "Strategy, POEM, SEO, PPC, social, email, display ads, and programmatic.",
      "रणनीति, POEM, SEO, PPC, सोशल, ईमेल, डिस्प्ले विज्ञापन और प्रोग्रामेटिक।",
      "Strategy, POEM, SEO, PPC, social, email, display ads aur programmatic.",
    ),
    units: [
      {
        id: "dm-u1",
        index: 1,
        title: L(
          "Fundamentals of Digital Marketing",
          "डिजिटल मार्केटिंग की मूल बातें",
          "Digital marketing ki mool baatein",
        ),
        summary: L(
          "Significance, traditional vs digital, landscape, and digital consumers.",
          "महत्व, पारंपरिक बनाम डिजिटल, परिदृश्य और डिजिटल उपभोक्ता।",
          "Mahatva, traditional vs digital, landscape aur digital consumers.",
        ),
        topics: [
          {
            id: "dm-fundamentals",
            title: L(
              "Fundamentals and significance of digital marketing",
              "डिजिटल मार्केटिंग की मूल बातें और महत्व",
              "Digital marketing ki mool baatein aur mahatva",
            ),
          },
          {
            id: "dm-vs",
            title: L(
              "Traditional marketing vs digital marketing",
              "पारंपरिक बनाम डिजिटल मार्केटिंग",
              "Traditional vs digital marketing",
            ),
          },
          {
            id: "dm-evolution",
            title: L(
              "Evolution of digital marketing",
              "डिजिटल मार्केटिंग का विकास",
              "Digital marketing ka vikas",
            ),
          },
          {
            id: "dm-landscape",
            title: L(
              "Digital marketing landscape and key drivers",
              "डिजिटल मार्केटिंग परिदृश्य और प्रमुख चालक",
              "Digital marketing landscape aur key drivers",
            ),
          },
          {
            id: "dm-consumers",
            title: L(
              "Digital consumers and communities",
              "डिजिटल उपभोक्ता और समुदाय",
              "Digital consumers aur communities",
            ),
          },
          {
            id: "dm-geny",
            title: L(
              "Gen Y and Netizen expectations",
              "जन वाई और नेटीज़न अपेक्षाएँ",
              "Gen Y aur Netizen expectations",
            ),
          },
        ],
      },
      {
        id: "dm-u2",
        index: 2,
        title: L(
          "Digital Market Strategy & Planning",
          "डिजिटल मार्केट रणनीति और प्लानिंग",
          "Digital market strategy aur planning",
        ),
        summary: L(
          "India’s digital market, strategy, CDJ, POEM, segmentation, and the plan.",
          "भारत का डिजिटल बाज़ार, रणनीति, CDJ, POEM, सेगमेंटेशन और प्लान।",
          "Bharat ka digital market, strategy, CDJ, POEM, segmentation aur plan.",
        ),
        topics: [
          {
            id: "dm-india-users",
            title: L(
              "Digital users in India",
              "भारत में डिजिटल उपयोगकर्ता",
              "Bharat mein digital users",
            ),
          },
          {
            id: "dm-india-ads",
            title: L(
              "Digital advertising market in India",
              "भारत में डिजिटल विज्ञापन बाज़ार",
              "Bharat mein digital advertising market",
            ),
          },
          {
            id: "dm-strategy",
            title: L(
              "Digital marketing strategy",
              "डिजिटल मार्केटिंग रणनीति",
              "Digital marketing strategy",
            ),
          },
          {
            id: "dm-cdj",
            title: L(
              "Consumer Decision Journey",
              "उपभोक्ता निर्णय यात्रा",
              "Consumer Decision Journey",
            ),
          },
          {
            id: "dm-poem",
            title: L("POEM framework", "POEM फ़्रेमवर्क", "POEM framework"),
          },
          {
            id: "dm-segment",
            title: L(
              "Segmenting and customizing messages",
              "सेगमेंटिंग और संदेश अनुकूलन",
              "Segmenting aur messages customize karna",
            ),
          },
          {
            id: "dm-plan",
            title: L(
              "Skills and the digital marketing plan",
              "कौशल और डिजिटल मार्केटिंग प्लान",
              "Skills aur digital marketing plan",
            ),
          },
        ],
      },
      {
        id: "dm-u3",
        index: 3,
        title: L(
          "Digital Marketing Channels & Tools",
          "डिजिटल मार्केटिंग चैनल और टूल",
          "Digital marketing channels aur tools",
        ),
        summary: L(
          "SEO, analytics, PPC, social, affiliate, email, and mobile marketing.",
          "SEO, एनालिटिक्स, PPC, सोशल, अफ़िलिएट, ईमेल और मोबाइल मार्केटिंग।",
          "SEO, analytics, PPC, social, affiliate, email aur mobile marketing.",
        ),
        topics: [
          {
            id: "dm-terms",
            title: L(
              "Terminology used in digital marketing",
              "डिजिटल मार्केटिंग की शब्दावली",
              "Digital marketing ki terminology",
            ),
          },
          {
            id: "dm-seo",
            title: L("SEO techniques", "SEO तकनीकें", "SEO techniques"),
          },
          {
            id: "dm-webmaster",
            title: L(
              "Google Webmaster and analytics overview",
              "गूगल वेबमास्टर और एनालिटिक्स",
              "Google Webmaster aur analytics",
            ),
          },
          {
            id: "dm-ppc",
            title: L(
              "PPC and online marketing through social media",
              "PPC और सोशल मीडिया के माध्यम से ऑनलाइन मार्केटिंग",
              "PPC aur social media ke through online marketing",
            ),
          },
          {
            id: "dm-smm",
            title: L(
              "Social Media Marketing",
              "सोशल मीडिया मार्केटिंग",
              "Social Media Marketing",
            ),
          },
          {
            id: "dm-keyword",
            title: L(
              "Keyword advertising",
              "कीवर्ड विज्ञापन",
              "Keyword advertising",
            ),
          },
          {
            id: "dm-affiliate",
            title: L(
              "Affiliate marketing",
              "अफ़िलिएट मार्केटिंग",
              "Affiliate marketing",
            ),
          },
          {
            id: "dm-email",
            title: L("Email marketing", "ईमेल मार्केटिंग", "Email marketing"),
          },
          {
            id: "dm-mobile",
            title: L(
              "Mobile marketing",
              "मोबाइल मार्केटिंग",
              "Mobile marketing",
            ),
          },
        ],
      },
      {
        id: "dm-u4",
        index: 4,
        title: L(
          "Display Advertising & Buying Models",
          "डिस्प्ले विज्ञापन और खरीद मॉडल",
          "Display advertising aur buying models",
        ),
        summary: L(
          "Display ads, formats, placement, buying models, tools, and programmatic.",
          "डिस्प्ले विज्ञापन, फ़ॉर्मेट, प्लेसमेंट, खरीद मॉडल, टूल और प्रोग्रामेटिक।",
          "Display ads, formats, placement, buying models, tools aur programmatic.",
        ),
        topics: [
          {
            id: "dm-display",
            title: L(
              "Display advertising concepts and terminology",
              "डिस्प्ले विज्ञापन अवधारणाएँ और शब्दावली",
              "Display advertising concepts aur terminology",
            ),
          },
          {
            id: "dm-formats",
            title: L(
              "Types of display ads and ad formats",
              "डिस्प्ले विज्ञापनों के प्रकार और फ़ॉर्मेट",
              "Display ads ke prakar aur formats",
            ),
          },
          {
            id: "dm-placement",
            title: L(
              "Ad placement techniques and terminology",
              "विज्ञापन प्लेसमेंट तकनीकें और शब्दावली",
              "Ad placement techniques aur terminology",
            ),
          },
          {
            id: "dm-buying",
            title: L("Buying models", "खरीद मॉडल", "Buying models"),
          },
          {
            id: "dm-tools",
            title: L(
              "Types of ad tools",
              "विज्ञापन टूल के प्रकार",
              "Ad tools ke prakar",
            ),
          },
          {
            id: "dm-programmatic",
            title: L(
              "Programmatic digital advertising",
              "प्रोग्रामेटिक डिजिटल विज्ञापन",
              "Programmatic digital advertising",
            ),
          },
        ],
      },
    ],
  },
];

const subjectMap = new Map(subjects.map((s) => [s.id, s]));

export function getSubject(id: string) {
  return subjectMap.get(id);
}

export function getUnit(subjectId: string, unitId: string) {
  return getSubject(subjectId)?.units.find((u) => u.id === unitId);
}

export function getTopic(subjectId: string, unitId: string, topicId: string) {
  return getUnit(subjectId, unitId)?.topics.find((t) => t.id === topicId);
}

export function getTopicLocation(topicId: string) {
  for (const subject of subjects) {
    for (const unit of subject.units) {
      const topic = unit.topics.find((t) => t.id === topicId);
      if (topic) return { subject, unit, topic };
    }
  }
  return undefined;
}

export function allTopicIds(): string[] {
  return subjects.flatMap((s) => s.units.flatMap((u) => u.topics.map((t) => t.id)));
}

export function topicCount(subjectId: string) {
  return (
    getSubject(subjectId)?.units.reduce((n, u) => n + u.topics.length, 0) ?? 0
  );
}
