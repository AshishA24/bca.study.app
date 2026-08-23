import { C, D, EXAM, H, NOTE, OL, P, Q, TBL, topic, UL } from "./blocks";
import type { QuizQuestion, TopicNotes } from "../types";

export const javaNotes: Record<string, TopicNotes> = {
  "java-genesis": topic("java-genesis", [
    H(
      "Birth of the Java language",
      "जावा भाषा का जन्म",
      "Java language ka janm",
    ),
    P(
      "Java was designed by James Gosling at Sun Microsystems (later acquired by Oracle). Work began in 1991 as Project Green for consumer electronics. The language was first named Oak, after an oak tree outside Gosling's office, then renamed Java in 1995 because Oak was already trademarked.",
      "जावा को सन माइक्रोसिस्टम्स (बाद में Oracle ने अधिग्रहित किया) के जेम्स गॉसलिंग ने डिज़ाइन किया। 1991 में उपभोक्ता इलेक्ट्रॉनिक्स के लिए प्रोजेक्ट ग्रीन शुरू हुआ। भाषा का पहला नाम Oak था — गॉसलिंग के कार्यालय के बाहर एक ओक वृक्ष पर — और ट्रेडमार्क टकराव के कारण 1995 में इसे Java नाम दिया गया।",
      "Java ko Sun Microsystems ke James Gosling ne design kiya. 1991 mein Project Green consumer electronics ke liye start hua. Pehla naam Oak tha, Gosling ke office ke bahar oak tree par; trademark ki wajah se 1995 mein Java naam pada.",
    ),
    UL([
      [
        "Team: James Gosling (language), Bill Joy, Mike Sheridan, Patrick Naughton.",
        "टीम: जेम्स गॉसलिंग (भाषा), बिल जॉय, माइक शेरिडन, पैट्रिक नॉटन।",
        "Team: James Gosling (language), Bill Joy, Mike Sheridan, Patrick Naughton.",
      ],
      [
        "Oak targeted set-top boxes and handheld devices; the Web boom shifted Java toward applets in browsers.",
        "Oak सेट-टॉप बॉक्स और हैंडहेल्ड डिवाइस के लिए था; वेब बूम ने जावा को ब्राउज़र एप्लेट की ओर मोड़ दिया।",
        "Oak set-top boxes aur handhelds ke liye tha; Web boom ne Java ko browser applets ki taraf mod diya.",
      ],
      [
        "Java 1.0 was announced in 1995; JDK 1.0 shipped in January 1996. HotJava demonstrated applets.",
        "जावा 1.0 की घोषणा 1995 में हुई; JDK 1.0 जनवरी 1996 में आया। HotJava ने एप्लेट दिखाए।",
        "Java 1.0 1995 mein announce hua; JDK 1.0 January 1996 mein aaya. HotJava ne applets dikhaye.",
      ],
      [
        "Slogan: Write Once, Run Anywhere (WORA) — compile to bytecode, run on any JVM.",
        "नारा: Write Once, Run Anywhere (WORA) — बाइटकोड में कंपाइल करो, किसी भी JVM पर चलाओ।",
        "Slogan: Write Once, Run Anywhere (WORA) — bytecode mein compile karo, kisi bhi JVM par chalao.",
      ],
    ]),
    H(
      "Buzzword features (exam list)",
      "बज़वर्ड विशेषताएँ (परीक्षा सूची)",
      "Buzzword features (exam list)",
    ),
    TBL(
      [
        ["Feature", "विशेषता", "Feature"],
        ["Meaning", "अर्थ", "Matlab"],
      ],
      [
        [
          ["Simple", "सरल", "Simple"],
          [
            "C/C++-like syntax without pointers, multiple inheritance of classes, or operator overloading.",
            "C/C++ जैसी सिंटैक्स, पर पॉइंटर, क्लास की मल्टीपल इनहेरिटेंस और ऑपरेटर ओवरलोडिंग नहीं।",
            "C/C++ jaisi syntax, lekin pointers, class ki multiple inheritance aur operator overloading nahi.",
          ],
        ],
        [
          ["Object-oriented", "ऑब्जेक्ट-ओरिएंटेड", "Object-oriented"],
          [
            "Almost everything is an object; primitive types are the main exception.",
            "लगभग सब कुछ ऑब्जेक्ट है; प्रिमिटिव टाइप मुख्य अपवाद हैं।",
            "Almost sab kuch object hai; primitive types main exception hain.",
          ],
        ],
        [
          ["Robust and secure", "मजबूत और सुरक्षित", "Robust aur secure"],
          [
            "Strong typing, no pointer arithmetic, bytecode verifier, sandbox for untrusted code.",
            "स्ट्रॉन्ग टाइपिंग, पॉइंटर अरिथमेटिक नहीं, बाइटकोड वेरिफायर, अनट्रस्टेड कोड के लिए सैंडबॉक्स।",
            "Strong typing, pointer arithmetic nahi, bytecode verifier, untrusted code ke liye sandbox.",
          ],
        ],
        [
          ["Architecture-neutral / portable", "आर्किटेक्चर-न्यूट्रल / पोर्टेबल", "Architecture-neutral / portable"],
          [
            "Bytecode + JVM; sizes of primitives are fixed (int is always 32-bit).",
            "बाइटकोड + JVM; प्रिमिटिव के आकार निश्चित हैं (int हमेशा 32-बिट)।",
            "Bytecode + JVM; primitive sizes fixed hain (int hamesha 32-bit).",
          ],
        ],
        [
          ["Multithreaded and dynamic", "मल्टीथ्रेडेड और डायनामिक", "Multithreaded aur dynamic"],
          [
            "Built-in threads; classes load at runtime; late binding supports extensibility.",
            "बिल्ट-इन थ्रेड; क्लास रनटाइम पर लोड; लेट बाइंडिंग से विस्तार आसान।",
            "Built-in threads; classes runtime par load; late binding se extend karna asaan.",
          ],
        ],
      ],
    ),
    EXAM(
      "2-mark: Who invented Java? James Gosling. Original name? Oak. Year of public release? 1995. Company? Sun Microsystems. Do not write Oracle as the inventor.",
      "2-अंक: जावा का आविष्कारक? जेम्स गॉसलिंग। मूल नाम? Oak। सार्वजनिक रिलीज़? 1995। कंपनी? सन माइक्रोसिस्टम्स। आविष्कारक के रूप में Oracle न लिखें।",
      "2-mark: Java kisne banaya? James Gosling. Original naam? Oak. Public release? 1995. Company? Sun Microsystems. Inventor ke taur par Oracle mat likhna.",
    ),
  ]),

  "java-jvm-jdk": topic("java-jvm-jdk", [
    H(
      "JDK, JRE, and JVM",
      "JDK, JRE और JVM",
      "JDK, JRE aur JVM",
    ),
    P(
      "These three names are not interchangeable. JDK is the development kit, JRE is the runtime, and JVM is the engine that actually executes bytecode. Exam papers love the difference table.",
      "ये तीन नाम एक-दूसरे के स्थान पर नहीं आते। JDK डेवलपमेंट किट है, JRE रनटाइम है, और JVM वह इंजन है जो बाइटकोड चलाता है। परीक्षा में अंतर तालिका अक्सर आती है।",
      "Ye teen naam ek dusre ki jagah nahi aate. JDK development kit hai, JRE runtime hai, aur JVM woh engine hai jo bytecode chalta hai. Exam mein difference table aksar aata hai.",
    ),
    TBL(
      [
        ["Layer", "परत", "Layer"],
        ["Contains / role", "समावेश / भूमिका", "Contains / role"],
      ],
      [
        [
          ["JDK (Java Development Kit)", "JDK (Java Development Kit)", "JDK (Java Development Kit)"],
          [
            "javac, jar, javadoc, jdb, plus a full JRE. Needed to write and compile programs.",
            "javac, jar, javadoc, jdb, और पूरा JRE। प्रोग्राम लिखने और कंपाइल करने के लिए आवश्यक।",
            "javac, jar, javadoc, jdb, plus poora JRE. Program likhne aur compile karne ke liye chahiye.",
          ],
        ],
        [
          ["JRE (Java Runtime Environment)", "JRE (Java Runtime Environment)", "JRE (Java Runtime Environment)"],
          [
            "JVM + Java class libraries (rt.jar / modules). Enough to run already-compiled programs.",
            "JVM + जावा क्लास लाइब्रेरी। पहले से कंपाइल प्रोग्राम चलाने के लिए पर्याप्त।",
            "JVM + Java class libraries. Pehle se compile programs chalane ke liye kaafi.",
          ],
        ],
        [
          ["JVM (Java Virtual Machine)", "JVM (Java Virtual Machine)", "JVM (Java Virtual Machine)"],
          [
            "Specification + implementation that loads, verifies, and executes bytecode. Platform-specific native binary.",
            "स्पेसिफिकेशन + इम्प्लीमेंटेशन जो बाइटकोड लोड, वेरिफाई और एक्सीक्यूट करता है। प्लेटफ़ॉर्म-विशिष्ट नेटिव बाइनरी।",
            "Specification + implementation jo bytecode load, verify aur execute karta hai. Platform-specific native binary.",
          ],
        ],
      ],
    ),
    D(
      "jvm",
      "Java compilation and runtime: .java source → javac → .class bytecode → class loader → bytecode verifier → JVM execution engine (interpreter + JIT) + garbage collector, sitting on a native OS.",
      "जावा कंपाइलेशन और रनटाइम: .java स्रोत → javac → .class बाइटकोड → क्लास लोडर → बाइटकोड वेरिफायर → JVM एक्सीक्यूशन इंजन (इंटरप्रेटर + JIT) + गार्बेज कलेक्टर, नेटिव OS पर।",
      "Java compilation aur runtime: .java source → javac → .class bytecode → class loader → bytecode verifier → JVM execution engine (interpreter + JIT) + garbage collector, native OS par.",
    ),
    H(
      "Bytecode and WORA",
      "बाइटकोड और WORA",
      "Bytecode aur WORA",
    ),
    UL([
      [
        "javac does not emit Intel/ARM machine code. It emits architecture-neutral bytecode in .class files.",
        "javac Intel/ARM मशीन कोड नहीं बनाता। वह .class फ़ाइलों में आर्किटेक्चर-न्यूट्रल बाइटकोड बनाता है।",
        "javac Intel/ARM machine code nahi banata. Woh .class files mein architecture-neutral bytecode banata hai.",
      ],
      [
        "The same .class file runs on Windows, Linux, or macOS because each platform ships its own JVM.",
        "एक ही .class फ़ाइल Windows, Linux या macOS पर चलती है क्योंकि हर प्लेटफ़ॉर्म का अपना JVM होता है।",
        "Wahi .class file Windows, Linux ya macOS par chalti hai kyunki har platform ka apna JVM hota hai.",
      ],
      [
        "Class loader loads classes; bytecode verifier checks type safety and stack usage; execution engine interprets and JIT-compiles hot methods to native code.",
        "क्लास लोडर क्लास लोड करता है; बाइटकोड वेरिफायर टाइप सेफ्टी जाँचता है; एक्सीक्यूशन इंजन इंटरप्रेट करता है और हॉट मेथड को JIT से नेटिव कोड करता है।",
        "Class loader classes load karta hai; bytecode verifier type safety check karta hai; execution engine interpret karta hai aur hot methods ko JIT se native code karta hai.",
      ],
      [
        "Garbage collector reclaims unreachable objects — programmers do not call free() or delete.",
        "गार्बेज कलेक्टर अप्राप्य ऑब्जेक्ट वापस लेता है — प्रोग्रामर free() या delete नहीं चलाते।",
        "Garbage collector unreachable objects wapas leta hai — programmer free() ya delete nahi chalate.",
      ],
    ]),
    NOTE(
      "JDK ⊃ JRE ⊃ JVM. If you can compile, you have a JDK. If you can only run java (not javac), you have a JRE. The JVM never sees .java source.",
      "JDK ⊃ JRE ⊃ JVM। अगर कंपाइल कर सकते हो तो JDK है। अगर केवल java चलता है (javac नहीं) तो JRE है। JVM .java स्रोत नहीं देखता।",
      "JDK ⊃ JRE ⊃ JVM. Compile kar sakte ho to JDK hai. Sirf java chalta hai (javac nahi) to JRE hai. JVM .java source nahi dekhta.",
    ),
    EXAM(
      "Define bytecode. Explain how Java achieves platform independence. Draw JDK/JRE/JVM nesting. Mention JIT and class loader for 5-mark answers.",
      "बाइटकोड परिभाषित करें। जावा प्लेटफ़ॉर्म स्वतंत्रता कैसे पाता है? JDK/JRE/JVM नेस्टिंग बनाएँ। 5-अंक उत्तर में JIT और क्लास लोडर लिखें।",
      "Bytecode define karo. Java platform independence kaise pata hai? JDK/JRE/JVM nesting banao. 5-mark answer mein JIT aur class loader likho.",
    ),
  ]),

  "java-files": topic("java-files", [
    H(
      "Source files and the public-class rule",
      "सोर्स फ़ाइलें और public-class नियम",
      "Source files aur public-class rule",
    ),
    P(
      "A Java compilation unit is a .java file. At most one public class (or public interface) is allowed per file, and the file name must match that public type exactly, including case: HelloWorld.java for public class HelloWorld.",
      "जावा कंपाइलेशन यूनिट एक .java फ़ाइल है। प्रति फ़ाइल अधिकतम एक public क्लास (या public इंटरफ़ेस) हो सकती है, और फ़ाइल नाम उस public टाइप से हूबहू मिलना चाहिए: public class HelloWorld के लिए HelloWorld.java।",
      "Java compilation unit ek .java file hai. File mein maximum ek public class (ya public interface) ho sakti hai, aur file name us public type se exactly match kare: public class HelloWorld ke liye HelloWorld.java.",
    ),
    OL([
      [
        "Optional package declaration must be the first statement (after comments/annotations).",
        "वैकल्पिक package घोषणा पहली स्टेटमेंट होनी चाहिए (कमेंट/एनोटेशन के बाद)।",
        "Optional package declaration pehli statement honi chahiye (comments/annotations ke baad).",
      ],
      [
        "Then import statements (zero or more).",
        "फिर import स्टेटमेंट (शून्य या अधिक)।",
        "Phir import statements (zero ya zyada).",
      ],
      [
        "Then type declarations: classes, interfaces, enums.",
        "फिर टाइप घोषणाएँ: क्लास, इंटरफ़ेस, एनम।",
        "Phir type declarations: classes, interfaces, enums.",
      ],
      [
        "Compile with javac Hello.java — produces Hello.class bytecode.",
        "javac Hello.java से कंपाइल — Hello.class बाइटकोड बनता है।",
        "javac Hello.java se compile — Hello.class bytecode banta hai.",
      ],
      [
        "Run with java Hello — never write java Hello.class or java Hello.java.",
        "java Hello से चलाएँ — java Hello.class या java Hello.java न लिखें।",
        "java Hello se chalao — java Hello.class ya java Hello.java mat likho.",
      ],
    ]),
    H(
      "JAR files",
      "JAR फ़ाइलें",
      "JAR files",
    ),
    P(
      "JAR (Java Archive) is a ZIP-format bundle of .class files, resources, and an optional META-INF/MANIFEST.MF. Executable JARs list Main-Class in the manifest. Commands: jar cvf app.jar *.class to create, jar tf app.jar to list, java -jar app.jar to run.",
      "JAR (Java Archive) .class फ़ाइलों, रिसोर्स और वैकल्पिक META-INF/MANIFEST.MF का ZIP-फ़ॉर्मेट बंडल है। एक्ज़ीक्यूटेबल JAR के मैनिफेस्ट में Main-Class होता है। कमांड: बनाने के लिए jar cvf app.jar *.class, सूची के लिए jar tf app.jar, चलाने के लिए java -jar app.jar।",
      "JAR (Java Archive) .class files, resources aur optional META-INF/MANIFEST.MF ka ZIP-format bundle hai. Executable JAR ke manifest mein Main-Class hota hai. Commands: banana — jar cvf app.jar *.class, list — jar tf app.jar, chalana — java -jar app.jar.",
    ),
    UL([
      [
        "c = create, v = verbose, f = file name, t = table of contents, x = extract, u = update.",
        "c = बनाएँ, v = विस्तृत, f = फ़ाइल नाम, t = विषय सूची, x = निकालें, u = अपडेट।",
        "c = create, v = verbose, f = file name, t = table of contents, x = extract, u = update.",
      ],
      [
        "CLASSPATH (or -cp) tells the JVM where to find .class files and JARs. Current directory (.) is often required.",
        "CLASSPATH (या -cp) JVM को बताता है .class और JAR कहाँ हैं। अक्सर वर्तमान डायरेक्टरी (.) चाहिए।",
        "CLASSPATH (ya -cp) JVM ko batata hai .class aur JAR kahan hain. Aksar current directory (.) chahiye.",
      ],
      [
        "A non-public class may share a file with a public class; extra public classes must live in their own files.",
        "गैर-public क्लास किसी public क्लास वाली फ़ाइल में रह सकती है; अतिरिक्त public क्लास अपनी फ़ाइल में होनी चाहिए।",
        "Non-public class kisi public class wali file mein reh sakti hai; extra public class apni file mein honi chahiye.",
      ],
    ]),
    EXAM(
      "State the file-naming rule. Write javac/java commands. What is a JAR and how do you run an executable JAR?",
      "फ़ाइल-नाम नियम लिखें। javac/java कमांड लिखें। JAR क्या है और एक्ज़ीक्यूटेबल JAR कैसे चलाते हैं?",
      "File-naming rule likho. javac/java commands likho. JAR kya hai aur executable JAR kaise chalate hain?",
    ),
  ]),

  "java-types": topic("java-types", [
    H(
      "Primitive versus reference types",
      "प्रिमिटिव बनाम रेफ़रेंस टाइप",
      "Primitive versus reference types",
    ),
    P(
      "Java has eight primitive types stored by value, and reference types (classes, arrays, interfaces, enums) stored as pointers to objects on the heap. There is no pointer type for the programmer, and no unsigned integer type in classic Java (byte/short/int/long are signed).",
      "जावा में आठ प्रिमिटिव टाइप मान द्वारा संग्रहीत होते हैं, और रेफ़रेंस टाइप (क्लास, एरे, इंटरफ़ेस, एनम) हीप पर ऑब्जेक्ट के पॉइंटर के रूप में। प्रोग्रामर के लिए पॉइंटर टाइप नहीं है, और क्लासिक जावा में unsigned पूर्णांक नहीं (byte/short/int/long साइनड हैं)।",
      "Java mein aath primitive types value se store hote hain, aur reference types (classes, arrays, interfaces, enums) heap par object ke pointer ke roop mein. Programmer ke liye pointer type nahi, classic Java mein unsigned int nahi (byte/short/int/long signed hain).",
    ),
    TBL(
      [
        ["Type", "टाइप", "Type"],
        ["Size / range (exam)", "आकार / सीमा (परीक्षा)", "Size / range (exam)"],
      ],
      [
        [
          ["byte", "byte", "byte"],
          ["8-bit signed, −128 to 127", "8-बिट साइनड, −128 से 127", "8-bit signed, −128 se 127"],
        ],
        [
          ["short", "short", "short"],
          ["16-bit signed, −32768 to 32767", "16-बिट साइनड, −32768 से 32767", "16-bit signed, −32768 se 32767"],
        ],
        [
          ["int (default integer)", "int (डिफ़ॉल्ट पूर्णांक)", "int (default integer)"],
          ["32-bit signed", "32-बिट साइनड", "32-bit signed"],
        ],
        [
          ["long", "long", "long"],
          ["64-bit; literal suffix L (10L)", "64-बिट; लिटरल प्रत्यय L (10L)", "64-bit; literal suffix L (10L)"],
        ],
        [
          ["float", "float", "float"],
          ["32-bit IEEE 754; suffix F (1.5F)", "32-बिट IEEE 754; प्रत्यय F (1.5F)", "32-bit IEEE 754; suffix F (1.5F)"],
        ],
        [
          ["double (default floating)", "double (डिफ़ॉल्ट फ्लोटिंग)", "double (default floating)"],
          ["64-bit IEEE 754", "64-बिट IEEE 754", "64-bit IEEE 754"],
        ],
        [
          ["char", "char", "char"],
          ["16-bit unsigned Unicode, 0 to 65535", "16-बिट अनसाइनड Unicode, 0 से 65535", "16-bit unsigned Unicode, 0 se 65535"],
        ],
        [
          ["boolean", "boolean", "boolean"],
          ["true or false only; size is JVM-dependent, not 1 bit in practice", "केवल true या false; आकार JVM पर निर्भर", "sirf true ya false; size JVM-dependent"],
        ],
      ],
    ),
    UL([
      [
        "Literals: 10 (int), 10L (long), 1.5 (double), 1.5F (float), 'A' (char), \"hi\" (String), true/false, null (references only).",
        "लिटरल: 10 (int), 10L (long), 1.5 (double), 1.5F (float), 'A' (char), \"hi\" (String), true/false, null (केवल रेफ़रेंस)।",
        "Literals: 10 (int), 10L (long), 1.5 (double), 1.5F (float), 'A' (char), \"hi\" (String), true/false, null (sirf references).",
      ],
      [
        "final marks a constant. Convention: public static final double PI = 3.14;",
        "final कॉन्स्टेंट बनाता है। प्रथा: public static final double PI = 3.14;",
        "final constant banata hai. Riwaaj: public static final double PI = 3.14;",
      ],
      [
        "Widening conversions (int → long → float → double) are implicit. Narrowing needs a cast: int n = (int) 3.9; truncates toward zero.",
        "वाइडनिंग (int → long → float → double) अंतर्निहित है। नैरोइंग को कास्ट चाहिए: int n = (int) 3.9; शून्य की ओर काटता है।",
        "Widening (int → long → float → double) implicit hai. Narrowing ko cast chahiye: int n = (int) 3.9; zero ki taraf truncate hota hai.",
      ],
      [
        "Default field values: 0, 0.0, '\\u0000', false, null. Local variables have no default — they must be assigned before use.",
        "फ़ील्ड डिफ़ॉल्ट: 0, 0.0, '\\u0000', false, null। लोकल वेरिएबल का डिफ़ॉल्ट नहीं — उपयोग से पहले असाइन करें।",
        "Field defaults: 0, 0.0, '\\u0000', false, null. Local variable ka default nahi — use se pehle assign karo.",
      ],
    ]),
    C(
      "java",
      [
        "class TypesDemo {",
        "  static final int MAX = 100; // constant",
        "  int count;                  // field defaults to 0",
        "  public static void main(String[] args) {",
        "    byte b = 120;",
        "    int i = b;                 // widening",
        "    long big = 10L;",
        "    float f = 2.5F;",
        "    double d = f;              // widening",
        "    char ch = 'J';",
        "    boolean ok = true;",
        "    String name = \"BCA\";     // reference type",
        "    int truncated = (int) 9.8; // 9, narrowing cast",
        "    System.out.println(i + \" \" + truncated + \" \" + name);",
        "  }",
        "}",
      ].join("\n"),
      [
        "Primitives, a String reference, final, widening, and a narrowing cast.",
        "प्रिमिटिव, String रेफ़रेंस, final, वाइडनिंग और नैरोइंग कास्ट।",
        "Primitives, ek String reference, final, widening aur narrowing cast.",
      ],
    ),
    EXAM(
      "List eight primitives with sizes. Contrast primitive vs reference. Why is String not a primitive? What is the default value of a local int? Trick: there is none — compile error if unassigned.",
      "आठ प्रिमिटिव आकार सहित लिखें। प्रिमिटिव बनाम रेफ़रेंस। String प्रिमिटिव क्यों नहीं? लोकल int का डिफ़ॉल्ट? चाल: कोई नहीं — बिना असाइन कंपाइल त्रुटि।",
      "Aath primitives sizes ke sath likho. Primitive vs reference. String primitive kyun nahi? Local int ka default? Trick: koi nahi — bina assign compile error.",
    ),
  ]),

  "java-arrays": topic("java-arrays", [
    H(
      "Arrays are objects",
      "एरे ऑब्जेक्ट हैं",
      "Arrays objects hain",
    ),
    P(
      "An array is a fixed-length, ordered collection of elements of one type. Arrays are reference types: the variable holds a reference; the elements live on the heap. length is a field, not a method — write a.length, never a.length(). Indexing is 0-based; out-of-range access throws ArrayIndexOutOfBoundsException.",
      "एरे एक प्रकार के तत्वों का निश्चित-लंबाई, क्रमित संग्रह है। एरे रेफ़रेंस टाइप हैं: वेरिएबल रेफ़रेंस रखता है; तत्व हीप पर रहते हैं। length एक फ़ील्ड है, मेथड नहीं — a.length लिखें, a.length() नहीं। इंडेक्स 0 से शुरू; सीमा से बाहर ArrayIndexOutOfBoundsException।",
      "Array ek type ke elements ka fixed-length, ordered collection hai. Arrays reference types hain: variable reference rakhta hai; elements heap par rehte hain. length ek field hai, method nahi — a.length likho, a.length() nahi. Index 0 se; range se bahar ArrayIndexOutOfBoundsException.",
    ),
    UL([
      [
        "Declare: int[] a; or int a[]; Create: a = new int[5]; elements default to 0/false/null.",
        "घोषणा: int[] a; या int a[]; बनाना: a = new int[5]; तत्व 0/false/null।",
        "Declare: int[] a; ya int a[]; Create: a = new int[5]; elements 0/false/null.",
      ],
      [
        "Initialise: int[] a = {10, 20, 30}; or new int[] {10, 20, 30}.",
        "आरंभ: int[] a = {10, 20, 30}; या new int[] {10, 20, 30}।",
        "Initialise: int[] a = {10, 20, 30}; ya new int[] {10, 20, 30}.",
      ],
      [
        "Anonymous array: print(new int[] {1, 2, 3}); useful as a method argument.",
        "अनाम एरे: print(new int[] {1, 2, 3}); मेथड आर्ग्यूमेंट के रूप में उपयोगी।",
        "Anonymous array: print(new int[] {1, 2, 3}); method argument ke roop mein useful.",
      ],
      [
        "Multidimensional: int[][] m = new int[3][4]; Java stores arrays of arrays (jagged allowed: new int[3][] then each row sized separately).",
        "बहुआयामी: int[][] m = new int[3][4]; जावा एरे-ऑफ-एरे रखता है (जग्गेड: new int[3][] फिर हर पंक्ति अलग आकार)।",
        "Multidimensional: int[][] m = new int[3][4]; Java arrays-of-arrays rakhta hai (jagged: new int[3][] phir har row alag size).",
      ],
      [
        "Enhanced for: for (int x : a) { ... } reads elements; it cannot easily update by index.",
        "एन्हांस्ड for: for (int x : a) { ... } तत्व पढ़ता है; इंडेक्स से अपडेट आसान नहीं।",
        "Enhanced for: for (int x : a) { ... } elements padhta hai; index se update aasan nahi.",
      ],
    ]),
    C(
      "java",
      [
        "class ArrayDemo {",
        "  public static void main(String[] args) {",
        "    int[] marks = {80, 90, 75};",
        "    System.out.println(\"length = \" + marks.length);",
        "    marks[1] = 95;",
        "    int sum = 0;",
        "    for (int m : marks) {",
        "      sum += m;",
        "    }",
        "    int[][] jag = new int[2][];",
        "    jag[0] = new int[] {1, 2};",
        "    jag[1] = new int[] {3, 4, 5};",
        "    System.out.println(sum + \" row1len=\" + jag[1].length);",
        "  }",
        "}",
      ].join("\n"),
      [
        "One-dimensional array, length field, for-each, and a jagged two-dimensional array.",
        "एक-आयामी एरे, length फ़ील्ड, for-each, और जग्गेड द्वि-आयामी एरे।",
        "1D array, length field, for-each, aur jagged 2D array.",
      ],
    ),
    NOTE(
      "int[] a = new int[0]; is legal (empty array). int[] a = new int[-1]; throws NegativeArraySizeException. ArrayStoreException occurs if you put a wrong runtime type into an Object[].",
      "int[] a = new int[0]; वैध है (खाली एरे)। int[] a = new int[-1]; NegativeArraySizeException। गलत रनटाइम टाइप Object[] में डालने पर ArrayStoreException।",
      "int[] a = new int[0]; legal hai (empty array). int[] a = new int[-1]; NegativeArraySizeException. Galat runtime type Object[] mein dalne par ArrayStoreException.",
    ),
  ]),

  "java-operators": topic("java-operators", [
    H(
      "Operator families",
      "ऑपरेटर परिवार",
      "Operator families",
    ),
    TBL(
      [
        ["Family", "परिवार", "Family"],
        ["Operators / notes", "ऑपरेटर / नोट्स", "Operators / notes"],
      ],
      [
        [
          ["Arithmetic", "अरिथमेटिक", "Arithmetic"],
          ["+ - * / %  (integer / truncates; % is remainder)", "+ - * / %  (पूर्णांक / काटता है; % शेषफल)", "+ - * / %  (integer / truncate; % remainder)"],
        ],
        [
          ["Unary", "यूनरी", "Unary"],
          ["+ - ++ -- ! ~", "+ - ++ -- ! ~", "+ - ++ -- ! ~"],
        ],
        [
          ["Relational", "रिलेशनल", "Relational"],
          ["== != < > <= >=   (use equals() for objects)", "== != < > <= >=   (ऑब्जेक्ट के लिए equals())", "== != < > <= >=   (objects ke liye equals())"],
        ],
        [
          ["Logical (short-circuit)", "लॉजिकल (शॉर्ट-सर्किट)", "Logical (short-circuit)"],
          ["&& ||  — right side skipped if result is already known", "&& ||  — परिणाम पहले से पता हो तो दायाँ भाग छूटता है", "&& ||  — result pehle pata ho to right side skip"],
        ],
        [
          ["Bitwise / boolean non-short-circuit", "बिटवाइज़ / नॉन-शॉर्ट-सर्किट", "Bitwise / non-short-circuit"],
          ["& | ^ ~ << >> >>>", "& | ^ ~ << >> >>>", "& | ^ ~ << >> >>>"],
        ],
        [
          ["Assignment", "असाइनमेंट", "Assignment"],
          ["= += -= *= /= %= &= |= ^= <<= >>= >>>=", "= += -= *= /= %= &= |= ^= <<= >>= >>>=", "= += -= *= /= %= &= |= ^= <<= >>= >>>="],
        ],
        [
          ["Ternary / instanceof", "टर्नरी / instanceof", "Ternary / instanceof"],
          ["cond ? a : b     obj instanceof Type", "cond ? a : b     obj instanceof Type", "cond ? a : b     obj instanceof Type"],
        ],
      ],
    ),
    P(
      "Prefix ++x increments then uses the new value. Postfix x++ uses the old value then increments. Integer division 5/2 is 2, not 2.5. >>> is unsigned right shift (fills with zeros); >> is signed (fills with the sign bit). Java has no operator overloading and no comma operator like C (except in for-loop headers).",
      "प्रीफ़िक्स ++x पहले बढ़ाता है फिर नया मान उपयोग करता है। पोस्टफ़िक्स x++ पुराना मान उपयोग कर फिर बढ़ाता है। पूर्णांक भाग 5/2 = 2, 2.5 नहीं। >>> अनसाइनड राइट शिफ्ट (शून्य भरता है); >> साइनड (साइन बिट भरता है)। जावा में ऑपरेटर ओवरलोडिंग नहीं, C जैसा कॉमा ऑपरेटर नहीं (for हेडर को छोड़कर)।",
      "Prefix ++x pehle increment phir naya value. Postfix x++ purana value use karke phir increment. Integer division 5/2 = 2, 2.5 nahi. >>> unsigned right shift (zeros); >> signed (sign bit). Java mein operator overloading nahi, C jaisa comma operator nahi (for header chhodkar).",
    ),
    C(
      "java",
      [
        "class OpDemo {",
        "  public static void main(String[] args) {",
        "    int x = 5, y = 2;",
        "    System.out.println(x / y);      // 2",
        "    System.out.println(x % y);      // 1",
        "    int a = 10;",
        "    System.out.println(a++);        // 10, then a becomes 11",
        "    System.out.println(++a);        // 12",
        "    int max = (x > y) ? x : y;",
        "    boolean both = (x > 0) && (y > 0); // y > 0 skipped if x <= 0",
        "    int bits = 8 << 1;              // 16",
        "    Object s = \"Java\";",
        "    System.out.println(s instanceof String); // true",
        "    System.out.println(max + \" \" + both + \" \" + bits);",
        "  }",
        "}",
      ].join("\n"),
      [
        "Integer division, remainder, ++, ternary, short-circuit &&, left shift, and instanceof.",
        "पूर्णांक भाग, शेष, ++, टर्नरी, शॉर्ट-सर्किट &&, लेफ्ट शिफ्ट और instanceof।",
        "Integer division, remainder, ++, ternary, short-circuit &&, left shift aur instanceof.",
      ],
    ),
    EXAM(
      "Predict output of i = 5; System.out.println(i++ + ++i); Classic answer: 5 + 7 = 12. Explain && vs &. State that == on objects compares references, not content.",
      "i = 5; System.out.println(i++ + ++i); का आउटपुट? क्लासिक उत्तर: 5 + 7 = 12। && बनाम &। ऑब्जेक्ट पर == रेफ़रेंस तुलना करता है, सामग्री नहीं।",
      "i = 5; System.out.println(i++ + ++i); ka output? Classic answer: 5 + 7 = 12. && vs &. Objects par == references compare karta hai, content nahi.",
    ),
  ]),

  "java-control": topic("java-control", [
    H(
      "Selection statements",
      "चयन स्टेटमेंट",
      "Selection statements",
    ),
    P(
      "if, if-else, and nested if use a boolean condition — unlike C, you cannot write if (x) with an int. switch (classic syllabus) accepts byte, short, char, int, their wrappers, enum, and (Java 7+) String. case labels must be compile-time constants. Missing break causes fall-through.",
      "if, if-else और नेस्टेड if बूलियन शर्त लेते हैं — C की तरह if (x) int के साथ नहीं चलता। क्लासिक switch byte, short, char, int, उनके रैपर, enum और (Java 7+) String लेता है। case कंपाइल-टाइम कॉन्स्टेंट होने चाहिए। break न हो तो fall-through।",
      "if, if-else aur nested if boolean condition lete hain — C ki tarah if (x) int ke sath nahi. Classic switch byte, short, char, int, unke wrappers, enum aur (Java 7+) String leta hai. case compile-time constants. break na ho to fall-through.",
    ),
    H(
      "Loops and jump statements",
      "लूप और जंप स्टेटमेंट",
      "Loops aur jump statements",
    ),
    UL([
      [
        "for (init; cond; upd) — all three parts optional; for(;;) is an infinite loop.",
        "for (init; cond; upd) — तीनों भाग वैकल्पिक; for(;;) अनंत लूप।",
        "for (init; cond; upd) — teeno optional; for(;;) infinite loop.",
      ],
      [
        "while tests first (may run zero times). do-while tests after the body (runs at least once).",
        "while पहले जाँचता है (शून्य बार चल सकता है)। do-while बॉडी के बाद जाँचता है (कम से कम एक बार)।",
        "while pehle check (zero baar chal sakta hai). do-while body ke baad check (kam se kam ek baar).",
      ],
      [
        "break leaves the innermost loop/switch. continue skips to the next iteration.",
        "break सबसे भीतरी लूप/switch छोड़ता है। continue अगली पुनरावृत्ति पर जाता है।",
        "break sabse andar wala loop/switch chhodta hai. continue agle iteration par jata hai.",
      ],
      [
        "Labeled break/continue: outer: for (...) { inner: for (...) { break outer; } } exits both loops — Java's replacement for goto (goto is a reserved word but unused).",
        "लेबल वाला break/continue: outer: for (...) { inner: for (...) { break outer; } } दोनों लूप छोड़ता है — जावा में goto के स्थान पर (goto रिज़र्व्ड है पर अप्रयुक्त)।",
        "Labeled break/continue: outer: for (...) { inner: for (...) { break outer; } } dono loop chhodta hai — Java mein goto ki jagah (goto reserved hai par unused).",
      ],
    ]),
    C(
      "java",
      [
        "class ControlDemo {",
        "  public static void main(String[] args) {",
        "    int n = 3;",
        "    if (n > 0) {",
        "      System.out.println(\"positive\");",
        "    } else if (n == 0) {",
        "      System.out.println(\"zero\");",
        "    } else {",
        "      System.out.println(\"negative\");",
        "    }",
        "    switch (n) {",
        "      case 1: System.out.println(\"one\"); break;",
        "      case 2:",
        "      case 3: System.out.println(\"two or three\"); break;",
        "      default: System.out.println(\"other\");",
        "    }",
        "    int i = 0;",
        "    do {",
        "      i++;",
        "    } while (i < 3);",
        "    outer:",
        "    for (int r = 0; r < 2; r++) {",
        "      for (int c = 0; c < 2; c++) {",
        "        if (r == 1) break outer;",
        "        System.out.print(r + \",\" + c + \" \");",
        "      }",
        "    }",
        "  }",
        "}",
      ].join("\n"),
      [
        "if-else, switch with fall-through case 2, do-while, and a labeled break.",
        "if-else, fall-through वाले switch का case 2, do-while, और लेबल वाला break।",
        "if-else, switch with fall-through case 2, do-while, aur labeled break.",
      ],
    ),
    EXAM(
      "When does do-while execute if the condition is false from the start? Once. Write a program using switch on a char grade. Explain labeled break with a nested-loop example.",
      "शुरुआत से शर्त false हो तो do-while कितनी बार? एक बार। char ग्रेड पर switch लिखें। नेस्टेड लूप से लेबल break समझाएँ।",
      "Shuruaat se condition false ho to do-while kitni baar? Ek baar. char grade par switch likho. Nested loop se labeled break samjhao.",
    ),
  ]),

  "java-oop": topic("java-oop", [
    H(
      "Class, object, and method",
      "क्लास, ऑब्जेक्ट और मेथड",
      "Class, object aur method",
    ),
    P(
      "A class is a blueprint. An object (instance) is created with new, which allocates heap memory and calls a constructor. Members are fields (state) and methods (behaviour). Encapsulation hides fields with private and exposes getters/setters. this refers to the current object; it is required when a parameter shadows a field.",
      "क्लास एक ब्लूप्रिंट है। ऑब्जेक्ट (इंस्टेंस) new से बनता है, जो हीप मेमोरी देता है और कंस्ट्रक्टर चलाता है। सदस्य फ़ील्ड (स्थिति) और मेथड (व्यवहार) हैं। एनकैप्सुलेशन फ़ील्ड को private रखकर getter/setter देता है। this वर्तमान ऑब्जेक्ट है; पैरामीटर फ़ील्ड को ढके तो आवश्यक।",
      "Class ek blueprint hai. Object (instance) new se banta hai, jo heap memory deta hai aur constructor chalta hai. Members: fields (state) aur methods (behaviour). Encapsulation fields ko private rakhkar getters/setters deta hai. this current object hai; parameter field ko shadow kare to zaroori.",
    ),
    UL([
      [
        "Instance methods need an object: s.area(). static methods belong to the class: Math.max(a, b); they cannot use this or instance fields directly.",
        "इंस्टेंस मेथड को ऑब्जेक्ट चाहिए: s.area()। static मेथड क्लास के हैं: Math.max(a, b); वे this या इंस्टेंस फ़ील्ड सीधे नहीं उपयोग करते।",
        "Instance methods ko object chahiye: s.area(). static methods class ke hain: Math.max(a, b); woh this ya instance fields seedha use nahi karte.",
      ],
      [
        "Method signature = name + parameter types. Return type is not part of the signature for overloading.",
        "मेथड सिग्नेचर = नाम + पैरामीटर टाइप। ओवरलोडिंग में रिटर्न टाइप सिग्नेचर का भाग नहीं।",
        "Method signature = name + parameter types. Overloading mein return type signature ka hissa nahi.",
      ],
      [
        "Pass-by-value: primitives copy the bits; references copy the reference, so the callee can mutate the same object but cannot rebind the caller's variable.",
        "पास-बाय-वैल्यू: प्रिमिटिव बिट कॉपी; रेफ़रेंस रेफ़रेंस कॉपी, इसलिए कैली उसी ऑब्जेक्ट को बदल सकता है पर कॉलर के वेरिएबल को रीबाइंड नहीं।",
        "Pass-by-value: primitives bits copy; references reference copy, isliye callee usi object ko change kar sakta hai par caller ke variable ko rebind nahi.",
      ],
      [
        "main must be public static void main(String[] args) to be a program entry point.",
        "प्रोग्राम एंट्री के लिए main: public static void main(String[] args)।",
        "Program entry ke liye main: public static void main(String[] args).",
      ],
    ]),
    C(
      "java",
      [
        "class Student {",
        "  private String name;",
        "  private int marks;",
        "  public void setName(String name) { this.name = name; }",
        "  public String getName() { return name; }",
        "  public void setMarks(int marks) { this.marks = marks; }",
        "  public int getMarks() { return marks; }",
        "  public void show() {",
        "    System.out.println(name + \" : \" + marks);",
        "  }",
        "  public static int max(int a, int b) {",
        "    return (a > b) ? a : b;",
        "  }",
        "}",
        "class OopDemo {",
        "  public static void main(String[] args) {",
        "    Student s = new Student();",
        "    s.setName(\"Riya\");",
        "    s.setMarks(88);",
        "    s.show();",
        "    System.out.println(Student.max(88, 90));",
        "  }",
        "}",
      ].join("\n"),
      [
        "Encapsulation with this, instance method show(), and a static helper max().",
        "this के साथ एनकैप्सुलेशन, इंस्टेंस मेथड show(), और static सहायक max()।",
        "Encapsulation with this, instance method show(), aur static helper max().",
      ],
    ),
    EXAM(
      "Define class vs object. Why is main static? Explain this. Four OOP pillars: encapsulation, inheritance, polymorphism, abstraction.",
      "क्लास बनाम ऑब्जेक्ट। main static क्यों? this समझाएँ। OOP के चार स्तंभ: एनकैप्सुलेशन, इनहेरिटेंस, पॉलीमॉर्फिज़्म, एब्सट्रैक्शन।",
      "Class vs object. main static kyun? this samjhao. OOP ke char stambh: encapsulation, inheritance, polymorphism, abstraction.",
    ),
  ]),

  "java-packages-intro": topic("java-packages-intro", [
    H(
      "What a package is",
      "पैकेज क्या है",
      "Package kya hai",
    ),
    P(
      "A package is a named namespace that groups related classes and interfaces, prevents name clashes, and participates in access control (default / package-private). The first statement of a file may declare package college.bca; the directory path must match college/bca/.",
      "पैकेज एक नामित नेमस्पेस है जो संबंधित क्लास और इंटरफ़ेस समूहित करता है, नाम टकराव रोकता है, और एक्सेस कंट्रोल में भाग लेता है (default / package-private)। फ़ाइल की पहली स्टेटमेंट package college.bca; हो सकती है; डायरेक्टरी college/bca/ से मेल खानी चाहिए।",
      "Package ek named namespace hai jo related classes aur interfaces group karta hai, name clash rokta hai, aur access control mein hissa leta hai (default / package-private). File ki pehli statement package college.bca; ho sakti hai; directory college/bca/ se match kare.",
    ),
    TBL(
      [
        ["Package", "पैकेज", "Package"],
        ["Typical contents (syllabus)", "सामान्य सामग्री (पाठ्यक्रम)", "Typical contents (syllabus)"],
      ],
      [
        [
          ["java.lang", "java.lang", "java.lang"],
          [
            "Automatically imported: Object, String, Math, Thread, System, wrappers, Throwable.",
            "स्वतः इम्पोर्ट: Object, String, Math, Thread, System, रैपर, Throwable।",
            "Automatically imported: Object, String, Math, Thread, System, wrappers, Throwable.",
          ],
        ],
        [
          ["java.util", "java.util", "java.util"],
          [
            "Collections, Date, Calendar, Random, Scanner, StringTokenizer, Vector.",
            "कलेक्शन्स, Date, Calendar, Random, Scanner, StringTokenizer, Vector।",
            "Collections, Date, Calendar, Random, Scanner, StringTokenizer, Vector.",
          ],
        ],
        [
          ["java.io", "java.io", "java.io"],
          ["Byte and character streams, File, RandomAccessFile.", "बाइट और कैरेक्टर स्ट्रीम, File, RandomAccessFile।", "Byte aur character streams, File, RandomAccessFile."],
        ],
        [
          ["java.awt / java.applet", "java.awt / java.applet", "java.awt / java.applet"],
          [
            "GUI components, graphics, events; applet API (legacy, still in BCA papers).",
            "GUI कंपोनेंट, ग्राफ़िक्स, इवेंट; एप्लेट API (लेगेसी, BCA पेपर में अभी भी)।",
            "GUI components, graphics, events; applet API (legacy, BCA papers mein abhi bhi).",
          ],
        ],
        [
          ["java.net", "java.net", "java.net"],
          ["Sockets, URL, networking basics.", "सॉकेट, URL, नेटवर्किंग मूल बातें।", "Sockets, URL, networking basics."],
        ],
      ],
    ),
    UL([
      [
        "import java.util.ArrayList; imports one type. import java.util.*; imports the package's top-level types, not subpackages.",
        "import java.util.ArrayList; एक टाइप। import java.util.*; पैकेज के टॉप-लेवल टाइप, सबपैकेज नहीं।",
        "import java.util.ArrayList; ek type. import java.util.*; package ke top-level types, subpackages nahi.",
      ],
      [
        "Fully qualified name java.util.Date d = new java.util.Date(); needs no import and resolves clashes (util.Date vs sql.Date).",
        "पूर्ण योग्य नाम java.util.Date d = new java.util.Date(); को import नहीं चाहिए और टकराव सुलझाता है (util.Date बनाम sql.Date)।",
        "Fully qualified name java.util.Date d = new java.util.Date(); ko import nahi chahiye aur clash suljhata hai (util.Date vs sql.Date).",
      ],
      [
        "java.lang is imported implicitly — writing import java.lang.String; is legal but unnecessary.",
        "java.lang अंतर्निहित इम्पोर्ट है — import java.lang.String; वैध पर अनावश्यक।",
        "java.lang implicit import hai — import java.lang.String; legal par unnecessary.",
      ],
    ]),
    NOTE(
      "User-defined packages are created in a later topic (classpath, -d, reverse-domain names). Here remember the standard library map and that packages are both organisation and access control.",
      "यूज़र-डिफ़ाइंड पैकेज बाद के विषय में (classpath, -d, रिवर्स-डोमेन)। यहाँ स्टैंडर्ड लाइब्रेरी मानचित्र और यह याद रखें कि पैकेज संगठन और एक्सेस कंट्रोल दोनों हैं।",
      "User-defined packages baad ke topic mein (classpath, -d, reverse-domain). Yahan standard library map yaad rakho, packages organisation aur access control dono hain.",
    ),
  ]),

  "java-nested": topic("java-nested", [
    H(
      "Four kinds of nested class",
      "नेस्टेड क्लास के चार प्रकार",
      "Nested class ke char prakar",
    ),
    P(
      "A nested class is a class declared inside another class. It groups types that exist only to serve an enclosing type and can access the outer class's members, including private ones (for inner classes).",
      "नेस्टेड क्लास दूसरी क्लास के अंदर घोषित क्लास है। यह उन टाइप को समूहित करती है जो केवल बाहरी टाइप की सेवा के लिए हैं, और बाहरी क्लास के सदस्यों तक पहुँच सकती है, private सहित (इनर क्लास के लिए)।",
      "Nested class doosri class ke andar declare hoti hai. Woh un types ko group karti hai jo sirf outer type ki seva ke liye hain, aur outer class ke members tak pahunch sakti hai, private shamil (inner classes ke liye).",
    ),
    TBL(
      [
        ["Kind", "प्रकार", "Kind"],
        ["Binding / access", "बंधन / एक्सेस", "Binding / access"],
      ],
      [
        [
          ["static nested class", "static नेस्टेड क्लास", "static nested class"],
          [
            "No implicit outer instance. Accesses only static members of the outer class. Created as Outer.Nested n = new Outer.Nested();",
            "अंतर्निहित बाहरी इंस्टेंस नहीं। केवल static सदस्य। Outer.Nested n = new Outer.Nested();",
            "Implicit outer instance nahi. Sirf static members. Outer.Nested n = new Outer.Nested();",
          ],
        ],
        [
          ["inner class (non-static)", "इनर क्लास (non-static)", "inner class (non-static)"],
          [
            "Holds a hidden reference to Outer.this. Can use all instance members. Created as Outer.Inner i = outer.new Inner();",
            "Outer.this का छिपा रेफ़रेंस। सभी इंस्टेंस सदस्य। Outer.Inner i = outer.new Inner();",
            "Outer.this ka hidden reference. Sab instance members. Outer.Inner i = outer.new Inner();",
          ],
        ],
        [
          ["local class", "लोकल क्लास", "local class"],
          [
            "Declared inside a method/block. Can use final (or effectively final) local variables of that method.",
            "मेथड/ब्लॉक के अंदर। उस मेथड के final (या effectively final) लोकल वेरिएबल।",
            "Method/block ke andar. Us method ke final (ya effectively final) local variables.",
          ],
        ],
        [
          ["anonymous class", "अनाम क्लास", "anonymous class"],
          [
            "new SuperType() { ... } — one-shot subclass or interface implementation, common in AWT listeners.",
            "new SuperType() { ... } — एक बार का सबक्लास या इंटरफ़ेस इम्प्लीमेंटेशन, AWT लिसनर में आम।",
            "new SuperType() { ... } — one-shot subclass ya interface implementation, AWT listeners mein common.",
          ],
        ],
      ],
    ),
    C(
      "java",
      [
        "class Outer {",
        "  private int n = 7;",
        "  static class Nested {",
        "    void hello() { System.out.println(\"static nested\"); }",
        "  }",
        "  class Inner {",
        "    void show() {",
        "      System.out.println(\"n = \" + n); // private of Outer",
        "      System.out.println(Outer.this.n);",
        "    }",
        "  }",
        "  void localDemo() {",
        "    final int k = 3;",
        "    class Local {",
        "      void print() { System.out.println(n + k); }",
        "    }",
        "    new Local().print();",
        "  }",
        "}",
        "class NestedDemo {",
        "  public static void main(String[] args) {",
        "    Outer.Nested n = new Outer.Nested();",
        "    n.hello();",
        "    Outer o = new Outer();",
        "    Outer.Inner i = o.new Inner();",
        "    i.show();",
        "    o.localDemo();",
        "    Runnable r = new Runnable() {",
        "      public void run() { System.out.println(\"anonymous\"); }",
        "    };",
        "    r.run();",
        "  }",
        "}",
      ].join("\n"),
      [
        "Static nested, inner (outer.new Inner()), local class, and an anonymous Runnable.",
        "static नेस्टेड, इनर (outer.new Inner()), लोकल क्लास, और अनाम Runnable।",
        "Static nested, inner (outer.new Inner()), local class, aur anonymous Runnable.",
      ],
    ),
    EXAM(
      "Difference between static nested and inner class. How do you instantiate an inner class? Inner classes can access private members of the outer class — a favourite true/false.",
      "static नेस्टेड और इनर क्लास में अंतर। इनर क्लास कैसे इंस्टैंसिएट करें? इनर क्लास बाहरी के private सदस्य देख सकती है — पसंदीदा true/false।",
      "static nested aur inner class mein antar. Inner class kaise instantiate karein? Inner class outer ke private members dekh sakti hai — favourite true/false.",
    ),
  ]),

  "java-strings": topic("java-strings", [
    H(
      "String is immutable",
      "String अपरिवर्तनीय है",
      "String immutable hai",
    ),
    P(
      "java.lang.String implements CharSequence and is a final class. Once created, a String's character sequence never changes. Concatenation and methods like toUpperCase() return a new object. The string pool (intern pool) stores literals so that \"Java\" == \"Java\" can be true for interned literals, but you must use equals() for content comparison.",
      "java.lang.String CharSequence लागू करती है और final क्लास है। बनने के बाद String का वर्ण अनुक्रम नहीं बदलता। Concatenation और toUpperCase() नया ऑब्जेक्ट लौटाते हैं। स्ट्रिंग पूल लिटरल रखता है इसलिए \"Java\" == \"Java\" इंटरन्ड लिटरल के लिए true हो सकता है, पर सामग्री तुलना के लिए equals() उपयोग करें।",
      "java.lang.String CharSequence implement karti hai aur final class hai. Banne ke baad String ka character sequence nahi badalta. Concatenation aur toUpperCase() naya object return karte hain. String pool literals rakhta hai isliye \"Java\" == \"Java\" interned literals ke liye true ho sakta hai, lekin content ke liye equals() use karo.",
    ),
    TBL(
      [
        ["Type", "टाइप", "Type"],
        ["Mutability / threads / use", "परिवर्तन / थ्रेड / उपयोग", "Mutability / threads / use"],
      ],
      [
        [
          ["String", "String", "String"],
          [
            "Immutable, thread-safe by design, intern pool, best for constants and keys.",
            "अपरिवर्तनीय, डिज़ाइन से थ्रेड-सेफ, इंटरन पूल, कॉन्स्टेंट और की के लिए उत्तम।",
            "Immutable, design se thread-safe, intern pool, constants aur keys ke liye best.",
          ],
        ],
        [
          ["StringBuffer", "StringBuffer", "StringBuffer"],
          [
            "Mutable, all public methods synchronized, thread-safe, slightly slower, available since Java 1.0.",
            "परिवर्तनीय, public मेथड synchronized, थ्रेड-सेफ, थोड़ा धीमा, Java 1.0 से।",
            "Mutable, public methods synchronized, thread-safe, thoda slow, Java 1.0 se.",
          ],
        ],
        [
          ["StringBuilder", "StringBuilder", "StringBuilder"],
          [
            "Mutable, not synchronized, faster, Java 5+. Prefer in single-threaded code (including most exam programs).",
            "परिवर्तनीय, synchronized नहीं, तेज़, Java 5+। सिंगल-थ्रेड (अधिकांश परीक्षा प्रोग्राम) में प्राथमिकता।",
            "Mutable, synchronized nahi, tez, Java 5+. Single-thread (zyadatar exam programs) mein prefer karo.",
          ],
        ],
      ],
    ),
    UL([
      [
        "Important String methods: length(), charAt(i), substring(i,j), indexOf, lastIndexOf, equals, equalsIgnoreCase, compareTo, toUpperCase, toLowerCase, trim, replace, split, startsWith, concat, intern.",
        "महत्त्वपूर्ण String मेथड: length(), charAt(i), substring(i,j), indexOf, lastIndexOf, equals, equalsIgnoreCase, compareTo, toUpperCase, toLowerCase, trim, replace, split, startsWith, concat, intern।",
        "Important String methods: length(), charAt(i), substring(i,j), indexOf, lastIndexOf, equals, equalsIgnoreCase, compareTo, toUpperCase, toLowerCase, trim, replace, split, startsWith, concat, intern.",
      ],
      [
        "StringBuffer/Builder: append, insert, delete, reverse, capacity(), ensureCapacity, setCharAt, toString. Default capacity 16.",
        "StringBuffer/Builder: append, insert, delete, reverse, capacity(), ensureCapacity, setCharAt, toString। डिफ़ॉल्ट क्षमता 16।",
        "StringBuffer/Builder: append, insert, delete, reverse, capacity(), ensureCapacity, setCharAt, toString. Default capacity 16.",
      ],
      [
        "s.length() is a method; array length is a field. charAt(s.length()) throws StringIndexOutOfBoundsException.",
        "s.length() मेथड है; एरे length फ़ील्ड है। charAt(s.length()) StringIndexOutOfBoundsException।",
        "s.length() method hai; array length field hai. charAt(s.length()) StringIndexOutOfBoundsException.",
      ],
    ]),
    C(
      "java",
      [
        "class StringDemo {",
        "  public static void main(String[] args) {",
        "    String a = \"Java\";",
        "    String b = \"Java\";",
        "    String c = new String(\"Java\");",
        "    System.out.println(a == b);        // true (pool)",
        "    System.out.println(a == c);        // false (new object)",
        "    System.out.println(a.equals(c));   // true (content)",
        "    a.concat(\" SE\");                  // discarded; a still \"Java\"",
        "    a = a.concat(\" SE\");              // a now \"Java SE\"",
        "    StringBuffer sb = new StringBuffer(\"BCA\");",
        "    sb.append(\" 3\").append(\"rd\");",
        "    sb.reverse();",
        "    StringBuilder fast = new StringBuilder();",
        "    fast.append(\"ok\").append(123);",
        "    System.out.println(a + \" \" + sb + \" \" + fast);",
        "  }",
        "}",
      ].join("\n"),
      [
        "== versus equals, immutability of concat, StringBuffer reverse, StringBuilder append.",
        "== बनाम equals, concat की अपरिवर्तनीयता, StringBuffer reverse, StringBuilder append।",
        "== versus equals, concat ki immutability, StringBuffer reverse, StringBuilder append.",
      ],
    ),
    EXAM(
      "Why is String immutable (security, pooling, hashCode cache, thread-safety)? Difference table String / StringBuffer / StringBuilder. Never use == to compare input strings.",
      "String immutable क्यों (सुरक्षा, पूलिंग, hashCode कैश, थ्रेड-सेफ्टी)? String / StringBuffer / StringBuilder अंतर तालिका। इनपुट स्ट्रिंग की तुलना == से न करें।",
      "String immutable kyun (security, pooling, hashCode cache, thread-safety)? String / StringBuffer / StringBuilder difference table. Input strings ko == se compare mat karo.",
    ),
  ]),

  "java-constructors": topic("java-constructors", [
    H(
      "Constructor rules",
      "कंस्ट्रक्टर नियम",
      "Constructor rules",
    ),
    P(
      "A constructor has the same name as the class and no return type — not even void. It runs when new is used. If you write no constructor, the compiler inserts a public no-arg default constructor. If you write any constructor, the default is not generated. Constructors are not inherited and cannot be abstract, static, final, or synchronized.",
      "कंस्ट्रक्टर का नाम क्लास जैसा होता है और कोई रिटर्न टाइप नहीं — void भी नहीं। new पर चलता है। कोई कंस्ट्रक्टर न लिखें तो कंपाइलर public नो-आर्ग डिफ़ॉल्ट डालता है। कोई कंस्ट्रक्टर लिखने पर डिफ़ॉल्ट नहीं बनता। कंस्ट्रक्टर इनहेरिट नहीं होते; abstract, static, final, synchronized नहीं हो सकते।",
      "Constructor ka naam class jaisa hota hai aur koi return type nahi — void bhi nahi. new par chalta hai. Koi constructor na likho to compiler public no-arg default daalta hai. Koi constructor likhne par default nahi banta. Constructors inherit nahi hote; abstract, static, final, synchronized nahi ho sakte.",
    ),
    UL([
      [
        "Default constructor: no parameters; initialises fields to defaults or empty body.",
        "डिफ़ॉल्ट कंस्ट्रक्टर: बिना पैरामीटर; फ़ील्ड डिफ़ॉल्ट पर या खाली बॉडी।",
        "Default constructor: no parameters; fields defaults par ya empty body.",
      ],
      [
        "Parameterized constructor: receives values and assigns fields (often via this.x = x).",
        "पैरामीटरयुक्त: मान लेकर फ़ील्ड असाइन (अक्सर this.x = x)।",
        "Parameterized: values lekar fields assign (aksar this.x = x).",
      ],
      [
        "Copy constructor (user-defined): Box(Box other) { this.w = other.w; } — Java has no built-in copy constructor like C++.",
        "कॉपी कंस्ट्रक्टर (यूज़र-डिफ़ाइंड): Box(Box other) { this.w = other.w; } — C++ जैसा बिल्ट-इन नहीं।",
        "Copy constructor (user-defined): Box(Box other) { this.w = other.w; } — C++ jaisa built-in nahi.",
      ],
      [
        "Constructor overloading: several constructors with different parameter lists.",
        "कंस्ट्रक्टर ओवरलोडिंग: अलग पैरामीटर सूचियों वाले कई कंस्ट्रक्टर।",
        "Constructor overloading: alag parameter lists wale kai constructors.",
      ],
      [
        "this() calls another constructor of the same class and must be the first statement.",
        "this() उसी क्लास का दूसरा कंस्ट्रक्टर चलाता है और पहली स्टेटमेंट होना चाहिए।",
        "this() usi class ka doosra constructor chalta hai aur pehli statement honi chahiye.",
      ],
    ]),
    C(
      "java",
      [
        "class Box {",
        "  int w, h;",
        "  Box() { this(1, 1); }                 // chains to parameterized",
        "  Box(int w, int h) {",
        "    this.w = w;",
        "    this.h = h;",
        "  }",
        "  Box(Box other) {                      // copy constructor",
        "    this.w = other.w;",
        "    this.h = other.h;",
        "  }",
        "  int area() { return w * h; }",
        "}",
        "class CtorDemo {",
        "  public static void main(String[] args) {",
        "    Box a = new Box();",
        "    Box b = new Box(4, 5);",
        "    Box c = new Box(b);",
        "    System.out.println(a.area() + \" \" + b.area() + \" \" + c.area());",
        "  }",
        "}",
      ].join("\n"),
      [
        "Default chaining via this(), parameterized constructor, and a copy constructor.",
        "this() से डिफ़ॉल्ट चेनिंग, पैरामीटरयुक्त कंस्ट्रक्टर, और कॉपी कंस्ट्रक्टर।",
        "Default chaining via this(), parameterized constructor, aur copy constructor.",
      ],
    ),
    NOTE(
      "A method void Box() is a constructor look-alike, not a constructor — it has a return type. This is a common exam trap.",
      "मेथड void Box() कंस्ट्रक्टर जैसा दिखता है, कंस्ट्रक्टर नहीं — इसमें रिटर्न टाइप है। आम परीक्षा जाल।",
      "Method void Box() constructor jaisa dikhta hai, constructor nahi — isme return type hai. Common exam trap.",
    ),
  ]),

  "java-inheritance": topic("java-inheritance", [
    H(
      "Superclass, subclass, and IS-A",
      "सुपरक्लास, सबक्लास और IS-A",
      "Superclass, subclass aur IS-A",
    ),
    P(
      "Inheritance with extends reuses fields and methods of a superclass in a subclass. Java supports single inheritance of classes: a class may extend exactly one class (besides the implicit Object). Multiple inheritance of classes is illegal to avoid the diamond problem; multiple inheritance of type is done with interfaces.",
      "extends से इनहेरिटेंस सुपरक्लास के फ़ील्ड और मेथड सबक्लास में पुनः उपयोग करता है। जावा क्लास की सिंगल इनहेरिटेंस देता है: एक क्लास ठीक एक क्लास extend करती है (अंतर्निहित Object के अलावा)। क्लास की मल्टीपल इनहेरिटेंस डायमंड समस्या से बचने के लिए अवैध है; टाइप की मल्टीपल इनहेरिटेंस इंटरफ़ेस से होती है।",
      "extends se inheritance superclass ke fields aur methods subclass mein reuse karta hai. Java classes ki single inheritance deta hai: ek class exactly ek class extend karti hai (implicit Object ke alawa). Classes ki multiple inheritance diamond problem se bachne ke liye illegal hai; type ki multiple inheritance interfaces se hoti hai.",
    ),
    D(
      "inheritance",
      "Class inheritance tree: Object at the root; single-inheritance chains and hierarchical branches; no class diamond. Interfaces may form multiple-inheritance of type beside this tree.",
      "क्लास इनहेरिटेंस वृक्ष: जड़ पर Object; सिंगल-इनहेरिटेंस श्रृंखलाएँ और पदानुक्रम शाखाएँ; कोई क्लास डायमंड नहीं। इंटरफ़ेस इस वृक्ष के साथ टाइप की मल्टीपल इनहेरिटेंस बना सकते हैं।",
      "Class inheritance tree: Object root par; single-inheritance chains aur hierarchical branches; koi class diamond nahi. Interfaces is tree ke sath type ki multiple inheritance bana sakte hain.",
    ),
    TBL(
      [
        ["Type", "प्रकार", "Type"],
        ["Shape in Java", "जावा में आकृति", "Java mein shape"],
      ],
      [
        [
          ["Single", "सिंगल", "Single"],
          ["class B extends A", "class B extends A", "class B extends A"],
        ],
        [
          ["Multilevel", "मल्टीलेवल", "Multilevel"],
          ["class C extends B; class B extends A", "class C extends B; class B extends A", "class C extends B; class B extends A"],
        ],
        [
          ["Hierarchical", "पदानुक्रमिक", "Hierarchical"],
          ["class B extends A; class C extends A", "class B extends A; class C extends A", "class B extends A; class C extends A"],
        ],
        [
          ["Multiple (classes)", "मल्टीपल (क्लास)", "Multiple (classes)"],
          ["Not supported: class C extends A, B is a compile error.", "समर्थित नहीं: class C extends A, B कंपाइल त्रुटि।", "Supported nahi: class C extends A, B compile error."],
        ],
        [
          ["Hybrid / multiple via interfaces", "हाइब्रिड / इंटरफ़ेस से मल्टीपल", "Hybrid / multiple via interfaces"],
          ["class C extends A implements I1, I2", "class C extends A implements I1, I2", "class C extends A implements I1, I2"],
        ],
      ],
    ),
    UL([
      [
        "super.field / super.method() reach the immediate superclass member when hidden or overridden.",
        "super.field / super.method() छिपे या ओवरराइड सदस्य पर तत्काल सुपरक्लास तक पहुँचते हैं।",
        "super.field / super.method() hidden ya overridden member par immediate superclass tak pahuchte hain.",
      ],
      [
        "super() invokes the superclass constructor; it must be the first statement (see constructors in multilevel inheritance).",
        "super() सुपरक्लास कंस्ट्रक्टर चलाता है; यह पहली स्टेटमेंट होनी चाहिए (मल्टीलेवल इनहेरिटेंस में कंस्ट्रक्टर देखें)।",
        "super() superclass constructor chalta hai; yeh pehli statement honi chahiye (multilevel inheritance mein constructors dekho).",
      ],
      [
        "private members are not inherited (not visible). Default members are inherited only inside the same package.",
        "private सदस्य इनहेरिट नहीं (दिखाई नहीं)। Default सदस्य केवल उसी पैकेज में इनहेरिट।",
        "private members inherit nahi (visible nahi). Default members sirf usi package mein inherit.",
      ],
      [
        "Every class extends Object if no other superclass is named — toString, equals, hashCode, getClass come from there.",
        "कोई अन्य सुपरक्लास न हो तो हर क्लास Object extend करती है — toString, equals, hashCode, getClass वहीं से आते हैं।",
        "Koi aur superclass na ho to har class Object extend karti hai — toString, equals, hashCode, getClass wahan se aate hain.",
      ],
    ]),
    C(
      "java",
      [
        "class Animal {",
        "  String name;",
        "  Animal(String name) { this.name = name; }",
        "  void speak() { System.out.println(name + \" makes a sound\"); }",
        "}",
        "class Dog extends Animal {",
        "  Dog(String name) { super(name); }",
        "  void speak() {",
        "    super.speak();",
        "    System.out.println(name + \" barks\");",
        "  }",
        "}",
        "class InheritDemo {",
        "  public static void main(String[] args) {",
        "    Dog d = new Dog(\"Tommy\");",
        "    d.speak();",
        "    Animal a = d; // upcast, IS-A",
        "    a.speak();    // runtime: Dog.speak",
        "  }",
        "}",
      ].join("\n"),
      [
        "Single inheritance, super() and super.method(), upcasting to the superclass type.",
        "सिंगल इनहेरिटेंस, super() और super.method(), सुपरक्लास टाइप पर अपकास्ट।",
        "Single inheritance, super() aur super.method(), superclass type par upcast.",
      ],
    ),
    EXAM(
      "Why no multiple inheritance of classes? Draw single, multilevel, hierarchical. Role of super. Remember: Object is the ultimate superclass.",
      "क्लास की मल्टीपल इनहेरिटेंस क्यों नहीं? सिंगल, मल्टीलेवल, पदानुक्रमिक बनाएँ। super की भूमिका। याद रखें: Object अंतिम सुपरक्लास है।",
      "Classes ki multiple inheritance kyun nahi? Single, multilevel, hierarchical banao. super ki bhumika. Yaad rakho: Object ultimate superclass hai.",
    ),
  ]),

  "java-poly": topic("java-poly", [
    H(
      "Two faces of polymorphism",
      "पॉलीमॉर्फिज़्म के दो रूप",
      "Polymorphism ke do roop",
    ),
    P(
      "Compile-time (static) polymorphism is method overloading: same name, different parameter list, resolved by the compiler. Runtime (dynamic) polymorphism is method overriding: same signature in a subclass, resolved by the JVM using the actual object type (dynamic method dispatch).",
      "कंपाइल-टाइम (स्टैटिक) पॉलीमॉर्फिज़्म मेथड ओवरलोडिंग है: वही नाम, अलग पैरामीटर सूची, कंपाइलर तय करता है। रनटाइम (डायनामिक) पॉलीमॉर्फिज़्म मेथड ओवरराइडिंग है: सबक्लास में वही सिग्नेचर, JVM वास्तविक ऑब्जेक्ट टाइप से तय करता है (डायनामिक मेथड डिस्पैच)।",
      "Compile-time (static) polymorphism method overloading hai: wahi naam, alag parameter list, compiler decide karta hai. Runtime (dynamic) polymorphism method overriding hai: subclass mein wahi signature, JVM actual object type se decide karta hai (dynamic method dispatch).",
    ),
    TBL(
      [
        ["Rule", "नियम", "Rule"],
        ["Overloading vs overriding", "ओवरलोडिंग बनाम ओवरराइडिंग", "Overloading vs overriding"],
      ],
      [
        [
          ["Where", "कहाँ", "Kahan"],
          [
            "Overload: same class (or subclass adding extra overloads). Override: subclass only.",
            "ओवरलोड: वही क्लास (या सबक्लास अतिरिक्त ओवरलोड)। ओवरराइड: केवल सबक्लास।",
            "Overload: same class (ya subclass extra overloads). Override: sirf subclass.",
          ],
        ],
        [
          ["Signature", "सिग्नेचर", "Signature"],
          [
            "Overload: different params (type/count/order). Override: identical params; covariant return allowed.",
            "ओवरलोड: अलग पैरामीटर (टाइप/गिनती/क्रम)। ओवरराइड: समान पैरामीटर; कोवेरिएंट रिटर्न मान्य।",
            "Overload: alag params (type/count/order). Override: identical params; covariant return allowed.",
          ],
        ],
        [
          ["Return / access / exceptions", "रिटर्न / एक्सेस / एक्सेप्शन", "Return / access / exceptions"],
          [
            "Overload: return type may differ but cannot be the only difference. Override: cannot narrow access; cannot throw new checked exceptions.",
            "ओवरलोड: रिटर्न अलग हो सकता है पर केवल रिटर्न से ओवरलोड नहीं। ओवरराइड: एक्सेस संकीर्ण नहीं; नए checked एक्सेप्शन नहीं।",
            "Overload: return alag ho sakta hai par sirf return se overload nahi. Override: access narrow nahi; naye checked exceptions nahi.",
          ],
        ],
        [
          ["static / final / private", "static / final / private", "static / final / private"],
          [
            "static methods hide, they do not override. final and private cannot be overridden.",
            "static मेथड hide करते हैं, override नहीं। final और private override नहीं हो सकते।",
            "static methods hide karte hain, override nahi. final aur private override nahi ho sakte.",
          ],
        ],
      ],
    ),
    C(
      "java",
      [
        "class Printer {",
        "  void print(int n) { System.out.println(\"int \" + n); }",
        "  void print(String s) { System.out.println(\"str \" + s); } // overload",
        "  void show() { System.out.println(\"Printer\"); }",
        "}",
        "class ColorPrinter extends Printer {",
        "  void show() { System.out.println(\"ColorPrinter\"); } // override",
        "}",
        "class PolyDemo {",
        "  public static void main(String[] args) {",
        "    Printer p = new ColorPrinter();",
        "    p.print(10);     // overload: compile-time, Printer.print(int)",
        "    p.print(\"hi\");  // overload: Printer.print(String)",
        "    p.show();        // override: runtime, ColorPrinter.show",
        "  }",
        "}",
      ].join("\n"),
      [
        "Overloading resolved at compile time; overriding uses the runtime type of p.",
        "ओवरलोडिंग कंपाइल-टाइम; ओवरराइडिंग p के रनटाइम टाइप का उपयोग करती है।",
        "Overloading compile-time resolve; overriding p ke runtime type ka use karti hai.",
      ],
    ),
    EXAM(
      "Write rules of overriding in bullet form. Give one program that prints the subclass method through a superclass reference. Overloading vs overriding is a guaranteed 5-mark comparison.",
      "ओवरराइडिंग नियम बुलेट में लिखें। सुपरक्लास रेफ़रेंस से सबक्लास मेथड प्रिंट करने वाला प्रोग्राम। ओवरलोडिंग बनाम ओवरराइडिंग गारंटीड 5-अंक तुलना।",
      "Overriding rules bullets mein likho. Superclass reference se subclass method print karne wala program. Overloading vs overriding guaranteed 5-mark comparison.",
    ),
  ]),

  "java-abstract-final": topic("java-abstract-final", [
    H(
      "abstract class and method",
      "abstract क्लास और मेथड",
      "abstract class aur method",
    ),
    P(
      "An abstract class is declared abstract and cannot be instantiated. It may mix abstract methods (no body) with concrete methods, fields, and constructors. A subclass must implement every abstract method or itself be abstract. Abstract methods are implicitly meant to be overridden; they cannot be private, static, or final.",
      "abstract क्लास abstract घोषित होती है और इंस्टैंसिएट नहीं हो सकती। इसमें बिना बॉडी के abstract मेथड, कंक्रीट मेथड, फ़ील्ड और कंस्ट्रक्टर मिल सकते हैं। सबक्लास हर abstract मेथड लागू करे या स्वयं abstract हो। abstract मेथड ओवरराइड के लिए हैं; वे private, static या final नहीं हो सकते।",
      "abstract class abstract declare hoti hai aur instantiate nahi ho sakti. Isme bina body ke abstract methods, concrete methods, fields aur constructors mil sakte hain. Subclass har abstract method implement kare ya khud abstract ho. abstract methods override ke liye hain; woh private, static ya final nahi ho sakte.",
    ),
    H(
      "final with inheritance",
      "इनहेरिटेंस में final",
      "Inheritance mein final",
    ),
    UL([
      [
        "final class String, Math, System — cannot be extended (prevents breaking invariants).",
        "final क्लास String, Math, System — extend नहीं (इनवेरिएंट टूटने से बचाव)।",
        "final class String, Math, System — extend nahi (invariants tootne se bachav).",
      ],
      [
        "final method cannot be overridden (can still be overloaded). Template-method cores are often final.",
        "final मेथड ओवरराइड नहीं (ओवरलोड हो सकता है)। टेम्प्लेट-मेथड कोर अक्सर final होते हैं।",
        "final method override nahi (overload ho sakta hai). Template-method cores aksar final hote hain.",
      ],
      [
        "final variable is a constant (blank final must be assigned in constructor). final reference cannot be rebound, but the object can still mutate unless immutable.",
        "final वेरिएबल कॉन्स्टेंट है (ब्लैंक final कंस्ट्रक्टर में असाइन)। final रेफ़रेंस रीबाइंड नहीं, पर ऑब्जेक्ट बदल सकता है जब तक immutable न हो।",
        "final variable constant hai (blank final constructor mein assign). final reference rebind nahi, par object change ho sakta hai jab tak immutable na ho.",
      ],
    ]),
    TBL(
      [
        ["Point", "बिंदु", "Point"],
        ["abstract class vs interface (classic + brief Java 8)", "abstract क्लास बनाम इंटरफ़ेस (क्लासिक + संक्षिप्त Java 8)", "abstract class vs interface (classic + brief Java 8)"],
      ],
      [
        [
          ["Methods", "मेथड", "Methods"],
          [
            "Abstract class: abstract + concrete. Classic interface: all public abstract. Java 8+ interfaces may add default and static methods (mention only; AWT syllabus still treats interfaces as pure contracts).",
            "Abstract क्लास: abstract + कंक्रीट। क्लासिक इंटरफ़ेस: सभी public abstract। Java 8+ में default और static मेथड (केवल उल्लेख; AWT पाठ्यक्रम इंटरफ़ेस को शुद्ध अनुबंध मानता है)।",
            "Abstract class: abstract + concrete. Classic interface: sab public abstract. Java 8+ mein default aur static methods (sirf mention; AWT syllabus interfaces ko pure contract manta hai).",
          ],
        ],
        [
          ["Fields / constructor", "फ़ील्ड / कंस्ट्रक्टर", "Fields / constructor"],
          [
            "Abstract class: instance fields + constructor. Interface: public static final constants only; no instance constructor.",
            "Abstract क्लास: इंस्टेंस फ़ील्ड + कंस्ट्रक्टर। इंटरफ़ेस: केवल public static final कॉन्स्टेंट; इंस्टेंस कंस्ट्रक्टर नहीं।",
            "Abstract class: instance fields + constructor. Interface: sirf public static final constants; instance constructor nahi.",
          ],
        ],
        [
          ["Inheritance", "इनहेरिटेंस", "Inheritance"],
          [
            "A class extends one abstract class, implements many interfaces.",
            "क्लास एक abstract क्लास extend करती है, कई इंटरफ़ेस implements करती है।",
            "Class ek abstract class extend karti hai, kai interfaces implements karti hai.",
          ],
        ],
      ],
    ),
    C(
      "java",
      [
        "abstract class Shape {",
        "  final String unit = \"px\";",
        "  abstract double area();",
        "  void info() { System.out.println(\"unit=\" + unit); }",
        "}",
        "class Circle extends Shape {",
        "  double r;",
        "  Circle(double r) { this.r = r; }",
        "  double area() { return 3.14 * r * r; }",
        "}",
        "final class Stamp {",
        "  final void mark() { System.out.println(\"stamped\"); }",
        "}",
        "class AbsDemo {",
        "  public static void main(String[] args) {",
        "    Shape s = new Circle(2);",
        "    s.info();",
        "    System.out.println(s.area());",
        "    new Stamp().mark();",
        "    // Shape x = new Shape(); // illegal",
        "  }",
        "}",
      ].join("\n"),
      [
        "Abstract class with a concrete method, abstract area(), final field, and a final class.",
        "कंक्रीट मेथड वाली abstract क्लास, abstract area(), final फ़ील्ड, और final क्लास।",
        "Abstract class with concrete method, abstract area(), final field, aur final class.",
      ],
    ),
    EXAM(
      "Can an abstract class have a constructor? Yes — for subclass super() chaining. Can it be final? No, abstract + final is illegal. Interface vs abstract class comparison is high-yield.",
      "क्या abstract क्लास का कंस्ट्रक्टर हो सकता है? हाँ — सबक्लास super() चेनिंग के लिए। क्या वह final हो सकती है? नहीं, abstract + final अवैध। इंटरफ़ेस बनाम abstract क्लास उच्च-अंक।",
      "Kya abstract class ka constructor ho sakta hai? Haan — subclass super() chaining ke liye. Kya woh final ho sakti hai? Nahi, abstract + final illegal. Interface vs abstract class high-yield.",
    ),
  ]),

  "java-ctor-multi": topic("java-ctor-multi", [
    H(
      "Constructor chaining up the ladder",
      "सीढ़ी पर कंस्ट्रक्टर चेनिंग",
      "Constructor chaining up the ladder",
    ),
    P(
      "In multilevel inheritance A ← B ← C, creating new C() first constructs Object, then A, then B, then C. Each constructor's first action is an implicit or explicit super() (or this() which eventually reaches super()). If the superclass has no no-arg constructor, the subclass must call super(args) explicitly as its first statement.",
      "मल्टीलेवल इनहेरिटेंस A ← B ← C में new C() पहले Object, फिर A, फिर B, फिर C बनाता है। हर कंस्ट्रक्टर की पहली क्रिया अंतर्निहित या स्पष्ट super() है (या this() जो अंततः super() तक पहुँचता है)। सुपरक्लास में नो-आर्ग कंस्ट्रक्टर न हो तो सबक्लास को पहली स्टेटमेंट के रूप में super(args) स्पष्टतः चलाना होगा।",
      "Multilevel inheritance A ← B ← C mein new C() pehle Object, phir A, phir B, phir C banata hai. Har constructor ki pehli kriya implicit ya explicit super() hai (ya this() jo aakhir mein super() tak pahuchta hai). Superclass mein no-arg constructor na ho to subclass ko pehli statement ke roop mein super(args) explicitly chalana hoga.",
    ),
    OL([
      [
        "new C() allocates C and starts C's constructor.",
        "new C() C को आवंटित कर C का कंस्ट्रक्टर शुरू करता है।",
        "new C() C ko allocate karke C ka constructor start karta hai.",
      ],
      [
        "C() calls super(...) → B's constructor.",
        "C() super(...) चलाता है → B का कंस्ट्रक्टर।",
        "C() super(...) chalta hai → B ka constructor.",
      ],
      [
        "B() calls super(...) → A's constructor.",
        "B() super(...) चलाता है → A का कंस्ट्रक्टर।",
        "B() super(...) chalta hai → A ka constructor.",
      ],
      [
        "A() calls super() → Object's constructor, then A's body, then B's body, then C's body.",
        "A() super() चलाता है → Object का कंस्ट्रक्टर, फिर A की बॉडी, फिर B, फिर C।",
        "A() super() chalta hai → Object ka constructor, phir A ki body, phir B, phir C.",
      ],
    ]),
    C(
      "java",
      [
        "class A {",
        "  A() { System.out.println(\"A()\"); }",
        "  A(int x) { System.out.println(\"A(\" + x + \")\"); }",
        "}",
        "class B extends A {",
        "  B() {",
        "    super(10); // must be first; otherwise implicit super()",
        "    System.out.println(\"B()\");",
        "  }",
        "}",
        "class C extends B {",
        "  C() {",
        "    // implicit super();  // calls B()",
        "    System.out.println(\"C()\");",
        "  }",
        "}",
        "class MultiCtor {",
        "  public static void main(String[] args) {",
        "    new C(); // prints A(10) then B() then C()",
        "  }",
        "}",
      ].join("\n"),
      [
        "Multilevel construction order: A(10), B(), C(). super(10) is the first statement of B().",
        "मल्टीलेवल निर्माण क्रम: A(10), B(), C()। B() की पहली स्टेटमेंट super(10) है।",
        "Multilevel construction order: A(10), B(), C(). B() ki pehli statement super(10) hai.",
      ],
    ),
    NOTE(
      "this() and super() cannot both appear in the same constructor because each must be first. Instance initialisers and field initialisers of a class run after super() returns and before the rest of the constructor body.",
      "this() और super() एक ही कंस्ट्रक्टर में दोनों नहीं आ सकते क्योंकि दोनों पहली स्टेटमेंट होने चाहिए। इंस्टेंस इनिशियलाइज़र और फ़ील्ड इनिशियलाइज़र super() लौटने के बाद, शेष कंस्ट्रक्टर बॉडी से पहले चलते हैं।",
      "this() aur super() ek hi constructor mein dono nahi aa sakte kyunki dono pehli statement honi chahiye. Instance initialisers aur field initialisers super() return ke baad, baaki constructor body se pehle chalte hain.",
    ),
    EXAM(
      "Predict the print order of constructors in a three-level hierarchy. Show a program where the middle class calls super(int). This is a standard 5-mark coding question.",
      "तीन-स्तर पदानुक्रम में कंस्ट्रक्टर प्रिंट क्रम बताएँ। मध्य क्लास super(int) चलाए। यह मानक 5-अंक कोडिंग प्रश्न है।",
      "Teen-level hierarchy mein constructor print order batao. Middle class super(int) chalaaye. Yeh standard 5-mark coding question hai.",
    ),
  ]),

  "java-interfaces": topic("java-interfaces", [
    H(
      "Defining and implementing an interface",
      "इंटरफ़ेस परिभाषित करना और लागू करना",
      "Interface define aur implement karna",
    ),
    P(
      "An interface is a reference type that declares a contract. In classic Java (the AWT/applet syllabus era), every method is implicitly public abstract, and every field is public static final. A class uses implements and must provide bodies for all abstract methods or be declared abstract. A class may implement many interfaces, which is how Java models multiple inheritance of type.",
      "इंटरफ़ेस एक रेफ़रेंस टाइप है जो अनुबंध घोषित करता है। क्लासिक जावा (AWT/एप्लेट पाठ्यक्रम युग) में हर मेथड अंतर्निहित public abstract है, और हर फ़ील्ड public static final। क्लास implements उपयोग कर सभी abstract मेथड की बॉडी दे या abstract हो। क्लास कई इंटरफ़ेस लागू कर सकती है — टाइप की मल्टीपल इनहेरिटेंस।",
      "Interface ek reference type hai jo contract declare karta hai. Classic Java (AWT/applet syllabus era) mein har method implicit public abstract hai, aur har field public static final. Class implements use karke sab abstract methods ki body de ya abstract ho. Class kai interfaces implement kar sakti hai — type ki multiple inheritance.",
    ),
    UL([
      [
        "interface Drawable { void draw(); int SIZE = 10; } — SIZE is public static final.",
        "interface Drawable { void draw(); int SIZE = 10; } — SIZE public static final है।",
        "interface Drawable { void draw(); int SIZE = 10; } — SIZE public static final hai.",
      ],
      [
        "class Circle implements Drawable { public void draw() { ... } } — implemented methods must be public.",
        "class Circle implements Drawable { public void draw() { ... } } — लागू मेथड public होने चाहिए।",
        "class Circle implements Drawable { public void draw() { ... } } — implemented methods public hone chahiye.",
      ],
      [
        "Interfaces may extend one or more interfaces: interface C extends A, B. A class then implements C (and thus A and B).",
        "इंटरफ़ेस एक या अधिक इंटरफ़ेस extend कर सकते हैं: interface C extends A, B। क्लास फिर C लागू करती है (अतः A और B)।",
        "Interfaces ek ya zyada interfaces extend kar sakte hain: interface C extends A, B. Class phir C implement karti hai (atah A aur B).",
      ],
      [
        "A variable of interface type can refer to any implementing object: Drawable d = new Circle(); d.draw(); — runtime polymorphism.",
        "इंटरफ़ेस टाइप का वेरिएबल किसी भी लागू ऑब्जेक्ट को देख सकता है: Drawable d = new Circle(); d.draw(); — रनटाइम पॉलीमॉर्फिज़्म।",
        "Interface type ka variable kisi bhi implementing object ko dekh sakta hai: Drawable d = new Circle(); d.draw(); — runtime polymorphism.",
      ],
      [
        "Java 8 added default and static methods in interfaces so libraries could evolve without breaking implementers. Know the names; exam programs still use classic abstract-only interfaces.",
        "Java 8 ने इंटरफ़ेस में default और static मेथड जोड़े ताकि लाइब्रेरी तोड़े बिना बढ़ सकें। नाम जानें; परीक्षा प्रोग्राम अभी भी क्लासिक केवल-abstract इंटरफ़ेस उपयोग करते हैं।",
        "Java 8 ne interfaces mein default aur static methods jode taaki library tode bina evolve ho. Naam jaano; exam programs abhi bhi classic abstract-only interfaces use karte hain.",
      ],
    ]),
    C(
      "java",
      [
        "interface Printable {",
        "  int COPIES = 2;          // public static final",
        "  void print();            // public abstract",
        "}",
        "interface Showable {",
        "  void show();",
        "}",
        "interface Output extends Printable, Showable {",
        "  void done();",
        "}",
        "class Report implements Output {",
        "  public void print() { System.out.println(\"print x\" + COPIES); }",
        "  public void show() { System.out.println(\"show\"); }",
        "  public void done() { System.out.println(\"done\"); }",
        "}",
        "class IfaceDemo {",
        "  public static void main(String[] args) {",
        "    Output o = new Report();",
        "    o.print();",
        "    o.show();",
        "    o.done();",
        "  }",
        "}",
      ].join("\n"),
      [
        "Interface constants, multiple interface inheritance via extends, and a class implementing the combined contract.",
        "इंटरफ़ेस कॉन्स्टेंट, extends से मल्टीपल इंटरफ़ेस इनहेरिटेंस, और संयुक्त अनुबंध लागू करती क्लास।",
        "Interface constants, extends se multiple interface inheritance, aur combined contract implement karti class.",
      ],
    ),
    EXAM(
      "A class can extend one class and implement many interfaces. Interface methods are public; implementing with package-private visibility is a compile error. Compare interface vs abstract class.",
      "क्लास एक क्लास extend कर कई इंटरफ़ेस implements कर सकती है। इंटरफ़ेस मेथड public हैं; package-private से लागू करना कंपाइल त्रुटि। इंटरफ़ेस बनाम abstract क्लास तुलना करें।",
      "Class ek class extend karke kai interfaces implement kar sakti hai. Interface methods public hain; package-private se implement karna compile error. Interface vs abstract class compare karo.",
    ),
  ]),

  "java-nested-iface": topic("java-nested-iface", [
    H(
      "Interfaces inside classes or interfaces",
      "क्लास या इंटरफ़ेस के अंदर इंटरफ़ेस",
      "Interfaces class ya interface ke andar",
    ),
    P(
      "A nested interface is declared inside a class or another interface. It namespaces a contract that only makes sense in the context of the outer type. The classic library example is Map.Entry inside java.util.Map — an entry does not exist without a map.",
      "नेस्टेड इंटरफ़ेस किसी क्लास या दूसरे इंटरफ़ेस के अंदर घोषित होता है। यह उस अनुबंध को नेमस्पेस देता है जो केवल बाहरी टाइप के संदर्भ में अर्थ रखता है। क्लासिक लाइब्रेरी उदाहरण java.util.Map के अंदर Map.Entry है — एंट्री मैप के बिना नहीं।",
      "Nested interface kisi class ya doosre interface ke andar declare hota hai. Yeh us contract ko namespace deta hai jo sirf outer type ke context mein matlab rakhta hai. Classic library example java.util.Map ke andar Map.Entry hai — entry map ke bina nahi.",
    ),
    UL([
      [
        "Interface nested in an interface is implicitly public static.",
        "इंटरफ़ेस के अंदर इंटरफ़ेस अंतर्निहित public static है।",
        "Interface ke andar interface implicit public static hai.",
      ],
      [
        "Interface nested in a class may be public, protected, package-private, or private, and is static by nature (no outer instance required to name it).",
        "क्लास के अंदर इंटरफ़ेस public, protected, package-private या private हो सकता है, और प्रकृति से static है (नाम के लिए बाहरी इंस्टेंस नहीं)।",
        "Class ke andar interface public, protected, package-private ya private ho sakta hai, aur nature se static hai (naam ke liye outer instance nahi).",
      ],
      [
        "Implement as class E implements Outer.InnerIface { ... } or Outer.InnerIface obj = ...",
        "लागू करें: class E implements Outer.InnerIface { ... } या Outer.InnerIface obj = ...",
        "Implement: class E implements Outer.InnerIface { ... } ya Outer.InnerIface obj = ...",
      ],
      [
        "Importance: tighter encapsulation, avoids polluting the top-level namespace, documents that the inner contract belongs to the outer API (Map and Entry, OuterClass and its Listener).",
        "महत्त्व: सख्त एनकैप्सुलेशन, टॉप-लेवल नेमस्पेस साफ, दस्तावेज़ कि आंतरिक अनुबंध बाहरी API का है (Map और Entry, OuterClass और उसका Listener)।",
        "Mahatva: tighter encapsulation, top-level namespace saaf, document karta hai ki inner contract outer API ka hai (Map aur Entry, OuterClass aur uska Listener).",
      ],
    ]),
    NOTE(
      "You may declare a class inside an interface (implicitly public static). Exam questions often ask: can an interface be private? Yes, if nested in a class. A top-level interface cannot be private.",
      "इंटरफ़ेस के अंदर क्लास घोषित हो सकती है (अंतर्निहित public static)। परीक्षा: क्या इंटरफ़ेस private हो सकता है? हाँ, यदि क्लास में नेस्टेड हो। टॉप-लेवल इंटरफ़ेस private नहीं।",
      "Interface ke andar class declare ho sakti hai (implicit public static). Exam: kya interface private ho sakta hai? Haan, agar class mein nested ho. Top-level interface private nahi.",
    ),
    EXAM(
      "Give Map.Entry as the standard example. Write a small class containing a public nested interface Listener and a class that implements Outer.Listener.",
      "मानक उदाहरण Map.Entry दें। public नेस्टेड इंटरफ़ेस Listener वाली छोटी क्लास लिखें और Outer.Listener लागू करने वाली क्लास लिखें।",
      "Standard example Map.Entry do. public nested interface Listener wali chhoti class likho aur Outer.Listener implement karti class likho.",
    ),
  ]),

  "java-pkg-create": topic("java-pkg-create", [
    H(
      "Creating a package",
      "पैकेज बनाना",
      "Package banana",
    ),
    P(
      "Put package college.bca; as the first non-comment statement. Save the file in directory college/bca matching the package name (dot → folder). Compile with javac -d . Student.java so the compiler writes college/bca/Student.class. Reverse-domain names (in.ac.college.bca) avoid clashes with libraries.",
      "package college.bca; पहली गैर-कमेंट स्टेटमेंट हो। फ़ाइल college/bca डायरेक्टरी में सहेजें (डॉट → फ़ोल्डर)। javac -d . Student.java से कंपाइल ताकि कंपाइलर college/bca/Student.class लिखे। रिवर्स-डोमेन नाम (in.ac.college.bca) लाइब्रेरी से टकराव बचाते हैं।",
      "package college.bca; pehli non-comment statement ho. File college/bca directory mein save karo (dot → folder). javac -d . Student.java se compile taaki compiler college/bca/Student.class likhe. Reverse-domain names (in.ac.college.bca) library se clash bachate hain.",
    ),
    OL([
      [
        "Create folders college/bca.",
        "फ़ोल्डर college/bca बनाएँ।",
        "Folders college/bca banao.",
      ],
      [
        "Write package college.bca; then the class in Student.java.",
        "package college.bca; लिखें, फिर Student.java में क्लास।",
        "package college.bca; likho, phir Student.java mein class.",
      ],
      [
        "javac -d . college/bca/Student.java (or javac -d dest path).",
        "javac -d . college/bca/Student.java (या javac -d dest path)।",
        "javac -d . college/bca/Student.java (ya javac -d dest path).",
      ],
      [
        "Run java college.bca.Student — fully qualified name; the JVM looks on CLASSPATH.",
        "java college.bca.Student चलाएँ — पूर्ण योग्य नाम; JVM CLASSPATH पर देखता है।",
        "java college.bca.Student chalao — fully qualified name; JVM CLASSPATH par dekhta hai.",
      ],
    ]),
    UL([
      [
        "CLASSPATH is an environment variable or -cp / -classpath argument listing directories and JAR files separated by : (Linux/macOS) or ; (Windows).",
        "CLASSPATH एनवायरनमेंट वेरिएबल या -cp / -classpath तर्क है जो डायरेक्टरी और JAR सूचीबद्ध करता है, विभाजक : (Linux/macOS) या ; (Windows)।",
        "CLASSPATH environment variable ya -cp / -classpath argument hai jo directories aur JARs list karta hai, separator : (Linux/macOS) ya ; (Windows).",
      ],
      [
        "The unnamed (default) package is the folder with no package statement. Types in the default package cannot be imported by packaged classes — never mix them in real projects.",
        "अनाम (डिफ़ॉल्ट) पैकेज बिना package स्टेटमेंट वाला फ़ोल्डर है। डिफ़ॉल्ट पैकेज के टाइप पैकेज्ड क्लास इम्पोर्ट नहीं कर सकतीं — वास्तविक प्रोजेक्ट में मिलाएँ नहीं।",
        "Unnamed (default) package bina package statement wala folder hai. Default package ke types packaged classes import nahi kar sakti — real projects mein mix mat karo.",
      ],
      [
        "-d directory tells javac where to write .class files while creating the package tree automatically.",
        "-d डायरेक्टरी javac को बताती है .class कहाँ लिखें और पैकेज वृक्ष स्वतः बनाएँ।",
        "-d directory javac ko batati hai .class kahan likhein aur package tree automatically banao.",
      ],
    ]),
    EXAM(
      "Write steps to create package mypack with class A, compile with -d, and run. Explain CLASSPATH. State that package must be the first statement.",
      "पैकेज mypack में क्लास A बनाने, -d से कंपाइल और चलाने के चरण लिखें। CLASSPATH समझाएँ। package पहली स्टेटमेंट होनी चाहिए।",
      "Package mypack mein class A banana, -d se compile aur run karne ke steps likho. CLASSPATH samjhao. package pehli statement honi chahiye.",
    ),
  ]),

  "java-access": topic("java-access", [
    H(
      "Four access levels",
      "चार एक्सेस स्तर",
      "Chaar access levels",
    ),
    P(
      "Access modifiers control who may use a class member (and, for classes, who may see the type). From most open to most closed: public, protected, default (no modifier, package-private), private. There is no keyword default for this — absence of a modifier is the package-private level (do not confuse with interface default methods).",
      "एक्सेस मॉडिफ़ायर तय करते हैं कौन सदस्य उपयोग करे (और क्लास के लिए कौन टाइप देखे)। सबसे खुला से बंद: public, protected, default (कोई मॉडिफ़ायर नहीं, package-private), private। इसके लिए default कीवर्ड नहीं — मॉडिफ़ायर की अनुपस्थिति package-private है (इंटरफ़ेस default मेथड से भ्रमित न हों)।",
      "Access modifiers decide kaun member use kare (aur class ke liye kaun type dekhe). Sabse khula se band: public, protected, default (koi modifier nahi, package-private), private. Iske liye default keyword nahi — modifier ki anupasthiti package-private hai (interface default methods se confuse mat hona).",
    ),
    TBL(
      [
        ["Visible to", "किसको दिखे", "Visible to"],
        ["private / default / protected / public", "private / default / protected / public", "private / default / protected / public"],
      ],
      [
        [
          ["Same class", "वही क्लास", "Same class"],
          ["Y / Y / Y / Y", "Y / Y / Y / Y", "Y / Y / Y / Y"],
        ],
        [
          ["Same package, other class", "वही पैकेज, दूसरी क्लास", "Same package, other class"],
          ["N / Y / Y / Y", "N / Y / Y / Y", "N / Y / Y / Y"],
        ],
        [
          ["Subclass in another package", "अन्य पैकेज में सबक्लास", "Subclass in another package"],
          ["N / N / Y / Y", "N / N / Y / Y", "N / N / Y / Y"],
        ],
        [
          ["Non-subclass, other package", "गैर-सबक्लास, अन्य पैकेज", "Non-subclass, other package"],
          ["N / N / N / Y", "N / N / N / Y", "N / N / N / Y"],
        ],
      ],
    ),
    UL([
      [
        "private: hide representation (fields). Nested classes can still access the outer class's private members.",
        "private: प्रतिनिधित्व छिपाएँ (फ़ील्ड)। नेस्टेड क्लास फिर भी बाहरी के private सदस्य देख सकती हैं।",
        "private: representation chhupao (fields). Nested classes phir bhi outer ke private members dekh sakti hain.",
      ],
      [
        "protected: designed for inheritance; subclasses outside the package may use the member through inheritance (not via an unrelated object's reference in some cases — exam usually treats it as 'subclass yes').",
        "protected: इनहेरिटेंस के लिए; पैकेज के बाहर सबक्लास इनहेरिटेंस से उपयोग कर सकती है।",
        "protected: inheritance ke liye; package ke bahar subclass inheritance se use kar sakti hai.",
      ],
      [
        "import college.bca.Student; or import college.bca.*; Import does not bypass access — it only lets you drop the prefix. import static java.lang.Math.PI; imports a static member.",
        "import college.bca.Student; या import college.bca.*; Import एक्सेस नहीं तोड़ता — केवल उपसर्ग हटाता है। import static java.lang.Math.PI; static सदस्य इम्पोर्ट करता है।",
        "import college.bca.Student; ya import college.bca.*; Import access nahi todta — sirf prefix hatata hai. import static java.lang.Math.PI; static member import karta hai.",
      ],
      [
        "A top-level class may be public or package-private only, never private or protected. public class name must match the file name.",
        "टॉप-लेवल क्लास केवल public या package-private, कभी private या protected नहीं। public क्लास नाम फ़ाइल से मिलना चाहिए।",
        "Top-level class sirf public ya package-private, kabhi private ya protected nahi. public class name file se match kare.",
      ],
    ]),
    EXAM(
      "Draw the 4×4 visibility table. Difference between default and protected is the most common MCQ. Import vs fully qualified name; import static for Math.PI / Math.sqrt.",
      "4×4 विज़िबिलिटी तालिका बनाएँ। default और protected का अंतर सबसे आम MCQ। Import बनाम पूर्ण योग्य नाम; Math.PI / Math.sqrt के लिए import static।",
      "4×4 visibility table banao. default aur protected ka antar sabse common MCQ. Import vs fully qualified name; Math.PI / Math.sqrt ke liye import static.",
    ),
  ]),

  "java-try-catch": topic("java-try-catch", [
    H(
      "try and catch",
      "try और catch",
      "try aur catch",
    ),
    P(
      "An exception is an object representing an abnormal condition. try wraps risky statements. If an exception is thrown, the JVM looks for a matching catch. A try must be followed by catch, finally, or both. After a matching catch runs, execution continues after the whole try-catch-finally, unless the exception is rethrown.",
      "एक्सेप्शन असामान्य स्थिति का ऑब्जेक्ट है। try जोखिम भरे स्टेटमेंट लपेटता है। एक्सेप्शन फेंके जाने पर JVM मेल खाता catch ढूँढता है। try के बाद catch, finally, या दोनों आवश्यक। मेल खाता catch चलने के बाद पूरा try-catch-finally के बाद निष्पादन जारी, जब तक एक्सेप्शन फिर से न फेंका जाए।",
      "Exception abnormal condition ka object hai. try risky statements wrap karta hai. Exception throw hone par JVM matching catch dhoondhta hai. try ke baad catch, finally, ya dono zaroori. Matching catch chalne ke baad poore try-catch-finally ke baad execution continue, jab tak exception dubara throw na ho.",
    ),
    UL([
      [
        "Multiple catch: list from most specific to most general. catch (ArithmeticException e) before catch (Exception e). Reverse order will not compile (unreachable catch).",
        "मल्टीपल catch: सबसे विशिष्ट से सामान्य। catch (ArithmeticException e) पहले, catch (Exception e) बाद में। उलटा क्रम कंपाइल नहीं (अनरीचेबल catch)।",
        "Multiple catch: sabse specific se general. catch (ArithmeticException e) pehle, catch (Exception e) baad mein. Ulta order compile nahi (unreachable catch).",
      ],
      [
        "Java 7 multi-catch: catch (IOException | SQLException e) — e is effectively final.",
        "Java 7 मल्टी-कैच: catch (IOException | SQLException e) — e effectively final है।",
        "Java 7 multi-catch: catch (IOException | SQLException e) — e effectively final hai.",
      ],
      [
        "Nested try: an inner try-catch handles local failures; if not caught, the outer catch may handle them.",
        "नेस्टेड try: आंतरिक try-catch स्थानीय विफलताएँ सँभालता है; न पकड़े तो बाहरी catch सँभाल सकता है।",
        "Nested try: inner try-catch local failures sambhalta hai; na pakde to outer catch sambhal sakta hai.",
      ],
      [
        "Useful methods: getMessage(), toString(), printStackTrace(). Parameter type must be Throwable or a subclass.",
        "उपयोगी मेथड: getMessage(), toString(), printStackTrace()। पैरामीटर टाइप Throwable या सबक्लास।",
        "Useful methods: getMessage(), toString(), printStackTrace(). Parameter type Throwable ya subclass.",
      ],
    ]),
    C(
      "java",
      [
        "class TryCatchDemo {",
        "  public static void main(String[] args) {",
        "    try {",
        "      int[] a = {1, 2};",
        "      try {",
        "        int x = 10 / 0; // ArithmeticException",
        "        System.out.println(x);",
        "      } catch (ArithmeticException e) {",
        "        System.out.println(\"inner: \" + e.getMessage());",
        "      }",
        "      System.out.println(a[5]); // ArrayIndexOutOfBoundsException",
        "    } catch (ArrayIndexOutOfBoundsException e) {",
        "      System.out.println(\"outer index\");",
        "    } catch (Exception e) {",
        "      System.out.println(\"outer general \" + e);",
        "    }",
        "    System.out.println(\"continues\");",
        "  }",
        "}",
      ].join("\n"),
      [
        "Nested try with a specific inner catch, then multiple outer catch blocks from specific to general.",
        "विशिष्ट आंतरिक catch वाला नेस्टेड try, फिर विशिष्ट से सामान्य बाहरी मल्टीपल catch।",
        "Nested try with specific inner catch, phir specific se general outer multiple catch.",
      ],
    ),
    EXAM(
      "Why must catch (Exception) come last? Draw nested try. Uncaught exceptions terminate the thread and print a stack trace. try without catch/finally is illegal.",
      "catch (Exception) अंतिम क्यों? नेस्टेड try बनाएँ। न पकड़े गए एक्सेप्शन थ्रेड समाप्त कर स्टैक ट्रेस छापते हैं। बिना catch/finally try अवैध।",
      "catch (Exception) last kyun? Nested try banao. Uncaught exceptions thread terminate karke stack trace print karte hain. Bina catch/finally try illegal.",
    ),
  ]),

  "java-throw-finally": topic("java-throw-finally", [
    H(
      "throw versus throws",
      "throw बनाम throws",
      "throw versus throws",
    ),
    TBL(
      [
        ["Keyword", "कीवर्ड", "Keyword"],
        ["Role", "भूमिका", "Role"],
      ],
      [
        [
          ["throw", "throw", "throw"],
          [
            "Inside a method: throw new ArithmeticException(\"/0\"); actually throws one object. Argument must be Throwable.",
            "मेथड के अंदर: throw new ArithmeticException(\"/0\"); वास्तव में एक ऑब्जेक्ट फेंकता है। तर्क Throwable हो।",
            "Method ke andar: throw new ArithmeticException(\"/0\"); actually ek object fekta hai. Argument Throwable ho.",
          ],
        ],
        [
          ["throws", "throws", "throws"],
          [
            "In the method signature: void f() throws IOException; declares that the method may pass checked exceptions to the caller.",
            "मेथड सिग्नेचर में: void f() throws IOException; घोषित करता है कि मेथड checked एक्सेप्शन कॉलर को दे सकता है।",
            "Method signature mein: void f() throws IOException; declare karta hai ki method checked exceptions caller ko de sakta hai.",
          ],
        ],
        [
          ["finally", "finally", "finally"],
          [
            "Block that always runs after try/catch — even if return, break, or continue — except JVM death (System.exit, power off, infinite hang).",
            "ब्लॉक जो try/catch के बाद हमेशा चलता है — return, break, continue पर भी — सिवाय JVM मृत्यु (System.exit, पावर बंद, अनंत हैंग)।",
            "Block jo try/catch ke baad hamesha chalta hai — return, break, continue par bhi — siwaye JVM death (System.exit, power off, infinite hang).",
          ],
        ],
      ],
    ),
    P(
      "Checked exceptions not caught inside a method must be listed in throws, or the code will not compile. Unchecked exceptions (RuntimeException and Error) may be omitted from throws. Use finally for cleanup: close files, unlock, release sockets. Prefer try-with-resources in modern Java; syllabus still expects an explicit finally.",
      "मेथड के अंदर न पकड़े गए checked एक्सेप्शन throws में सूचीबद्ध हों, वरना कंपाइल नहीं। Unchecked (RuntimeException और Error) throws से छूट सकते हैं। सफाई के लिए finally: फ़ाइल बंद, अनलॉक, सॉकेट मुक्त। आधुनिक जावा में try-with-resources; पाठ्यक्रम अभी भी स्पष्ट finally चाहता है।",
      "Method ke andar na pakde checked exceptions throws mein list hon, warna compile nahi. Unchecked (RuntimeException aur Error) throws se chhoot sakte hain. Cleanup ke liye finally: file band, unlock, socket free. Modern Java mein try-with-resources; syllabus abhi bhi explicit finally maangta hai.",
    ),
    C(
      "java",
      [
        "class ThrowFinallyDemo {",
        "  static void check(int age) throws Exception {",
        "    if (age < 18) {",
        "      throw new Exception(\"underage\");",
        "    }",
        "    System.out.println(\"ok\");",
        "  }",
        "  public static void main(String[] args) {",
        "    try {",
        "      check(15);",
        "      return; // finally still runs",
        "    } catch (Exception e) {",
        "      System.out.println(\"caught: \" + e.getMessage());",
        "    } finally {",
        "      System.out.println(\"finally always\");",
        "    }",
        "  }",
        "}",
      ].join("\n"),
      [
        "throw creates the exception, throws advertises it, finally runs even when catch handles the error.",
        "throw एक्सेप्शन बनाता है, throws उसका विज्ञापन करता है, catch सँभाले तब भी finally चलता है।",
        "throw exception banata hai, throws uska advertisement karta hai, catch sambhale tab bhi finally chalta hai.",
      ],
    ),
    EXAM(
      "Difference table throw vs throws vs finally. Does finally run after return in try? Yes. After System.exit(0)? No. Write a method that throws a checked exception.",
      "throw बनाम throws बनाम finally अंतर तालिका। try में return के बाद finally? हाँ। System.exit(0) के बाद? नहीं। checked एक्सेप्शन फेंकती मेथड लिखें।",
      "throw vs throws vs finally difference table. try mein return ke baad finally? Haan. System.exit(0) ke baad? Nahi. Checked exception fekti method likho.",
    ),
  ]),

  "java-ex-types": topic("java-ex-types", [
    H(
      "The Throwable hierarchy",
      "Throwable पदानुक्रम",
      "Throwable hierarchy",
    ),
    D(
      "exception-hierarchy",
      "Throwable splits into Error (JVM disasters: OutOfMemoryError, StackOverflowError — do not catch in application code) and Exception. Exception splits into RuntimeException (unchecked) and other Exception subclasses (checked: IOException, SQLException, ClassNotFoundException).",
      "Throwable Error (JVM आपदा: OutOfMemoryError, StackOverflowError — एप्लिकेशन कोड में न पकड़ें) और Exception में बँटता है। Exception RuntimeException (unchecked) और अन्य Exception सबक्लास (checked: IOException, SQLException, ClassNotFoundException) में बँटता है।",
      "Throwable Error (JVM disasters: OutOfMemoryError, StackOverflowError — application code mein mat pakdo) aur Exception mein bantta hai. Exception RuntimeException (unchecked) aur anya Exception subclasses (checked: IOException, SQLException, ClassNotFoundException) mein bantta hai.",
    ),
    TBL(
      [
        ["Kind", "प्रकार", "Kind"],
        ["Rule / examples", "नियम / उदाहरण", "Rule / examples"],
      ],
      [
        [
          ["Checked", "Checked", "Checked"],
          [
            "Subclass of Exception excluding RuntimeException. Compiler forces catch or throws. IOException, InterruptedException, ClassNotFoundException.",
            "RuntimeException को छोड़ Exception का सबक्लास। कंपाइलर catch या throws बाध्य करता है। IOException, InterruptedException, ClassNotFoundException।",
            "Exception ka subclass minus RuntimeException. Compiler catch ya throws force karta hai. IOException, InterruptedException, ClassNotFoundException.",
          ],
        ],
        [
          ["Unchecked", "Unchecked", "Unchecked"],
          [
            "RuntimeException and Error. ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException, ClassCastException.",
            "RuntimeException और Error। ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException, ClassCastException।",
            "RuntimeException aur Error. ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException, ClassCastException.",
          ],
        ],
      ],
    ),
    H(
      "Custom exceptions",
      "कस्टम एक्सेप्शन",
      "Custom exceptions",
    ),
    P(
      "Extend Exception (checked) or RuntimeException (unchecked). Provide constructors that call super(message) and optionally super(message, cause). Throw with throw new InvalidAgeException(\"age < 18\"). Catch by the custom type so handlers stay specific.",
      "Exception (checked) या RuntimeException (unchecked) extend करें। super(message) और वैकल्पिक super(message, cause) वाले कंस्ट्रक्टर दें। throw new InvalidAgeException(\"age < 18\") से फेंकें। कस्टम टाइप से पकड़ें ताकि हैंडलर विशिष्ट रहें।",
      "Exception (checked) ya RuntimeException (unchecked) extend karo. super(message) aur optional super(message, cause) wale constructors do. throw new InvalidAgeException(\"age < 18\") se feko. Custom type se pakdo taaki handlers specific rahein.",
    ),
    C(
      "java",
      [
        "class InvalidAgeException extends Exception {",
        "  InvalidAgeException(String msg) { super(msg); }",
        "}",
        "class CustomExDemo {",
        "  static void vote(int age) throws InvalidAgeException {",
        "    if (age < 18) throw new InvalidAgeException(\"not eligible\");",
        "    System.out.println(\"welcome voter\");",
        "  }",
        "  public static void main(String[] args) {",
        "    try {",
        "      vote(16);",
        "    } catch (InvalidAgeException e) {",
        "      System.out.println(e.getMessage());",
        "    }",
        "  }",
        "}",
      ].join("\n"),
      [
        "A checked custom exception extending Exception, thrown and caught by type.",
        "Exception extend करता checked कस्टम एक्सेप्शन, टाइप से फेंका और पकड़ा गया।",
        "Exception extend karta checked custom exception, type se throw aur catch.",
      ],
    ),
    EXAM(
      "Draw Throwable → Error / Exception → RuntimeException. Classify five named exceptions as checked or unchecked. Write a custom exception class and a method that throws it.",
      "Throwable → Error / Exception → RuntimeException बनाएँ। पाँच नामित एक्सेप्शन checked या unchecked वर्गीकृत करें। कस्टम एक्सेप्शन क्लास और उसे फेंकती मेथड लिखें।",
      "Throwable → Error / Exception → RuntimeException banao. Paanch named exceptions checked ya unchecked classify karo. Custom exception class aur use fekti method likho.",
    ),
  ]),

  "java-threads": topic("java-threads", [
    H(
      "Thread model",
      "थ्रेड मॉडल",
      "Thread model",
    ),
    P(
      "A process has its own memory; threads of the same process share the heap and class variables but have separate stacks (local variables, call frames). Java represents a thread as java.lang.Thread. Two creation styles: extend Thread and override run(), or implement Runnable and pass it to a Thread. Always call start() — it registers the thread with the scheduler and then invokes run(). Calling run() directly does not start a new thread.",
      "प्रोसेस की अपनी मेमोरी होती है; एक ही प्रोसेस के थ्रेड हीप और क्लास वेरिएबल साझा करते हैं पर अलग स्टैक रखते हैं। जावा थ्रेड को java.lang.Thread से दर्शाता है। दो शैलियाँ: Thread extend कर run() ओवरराइड, या Runnable लागू कर Thread को दें। हमेशा start() चलाएँ — यह शेड्यूलर में पंजीकृत कर फिर run() चलाता है। सीधे run() नया थ्रेड नहीं शुरू करता।",
      "Process ki apni memory hoti hai; same process ke threads heap aur class variables share karte hain par alag stacks rakhte hain. Java thread ko java.lang.Thread se darshata hai. Do styles: Thread extend karke run() override, ya Runnable implement karke Thread ko do. Hamesha start() chalao — yeh scheduler mein register karke phir run() chalta hai. Seedha run() naya thread start nahi karta.",
    ),
    D(
      "thread-lifecycle",
      "Thread states: NEW (created, start not called) → RUNNABLE (ready or running) → BLOCKED (waiting for a monitor lock) → WAITING (wait(), join() without timeout) → TIMED_WAITING (sleep, wait(t), join(t)) → TERMINATED (run() finished). BLOCKED/WAITING/TIMED_WAITING return to RUNNABLE, never skip to TERMINATED except by completion or uncaught exception.",
      "थ्रेड अवस्थाएँ: NEW (बना, start नहीं) → RUNNABLE (तैयार या चल रहा) → BLOCKED (मॉनिटर लॉक की प्रतीक्षा) → WAITING (wait(), बिना टाइमआउट join()) → TIMED_WAITING (sleep, wait(t), join(t)) → TERMINATED (run() समाप्त)। BLOCKED/WAITING/TIMED_WAITING RUNNABLE पर लौटते हैं।",
      "Thread states: NEW (bana, start nahi) → RUNNABLE (ready ya running) → BLOCKED (monitor lock ka wait) → WAITING (wait(), bina timeout join()) → TIMED_WAITING (sleep, wait(t), join(t)) → TERMINATED (run() khatam). BLOCKED/WAITING/TIMED_WAITING RUNNABLE par lautte hain.",
    ),
    UL([
      [
        "sleep(ms) — static, timed waiting, does not release the monitor lock.",
        "sleep(ms) — static, timed waiting, मॉनिटर लॉक नहीं छोड़ता।",
        "sleep(ms) — static, timed waiting, monitor lock nahi chhodta.",
      ],
      [
        "join() — caller waits until the target thread terminates.",
        "join() — कॉलर तब तक प्रतीक्षा जब तक लक्ष्य थ्रेड समाप्त न हो।",
        "join() — caller tab tak wait jab tak target thread terminate na ho.",
      ],
      [
        "isAlive(), getName(), setName(), currentThread(), yield() (hint to scheduler).",
        "isAlive(), getName(), setName(), currentThread(), yield() (शेड्यूलर को संकेत)।",
        "isAlive(), getName(), setName(), currentThread(), yield() (scheduler ko hint).",
      ],
      [
        "Prefer Runnable when the class already extends something else (Java's single inheritance).",
        "क्लास पहले से कुछ extend करती हो तो Runnable बेहतर (जावा की सिंगल इनहेरिटेंस)।",
        "Class pehle se kuch extend karti ho to Runnable better (Java ki single inheritance).",
      ],
    ]),
    C(
      "java",
      [
        "class MyTask implements Runnable {",
        "  public void run() {",
        "    System.out.println(Thread.currentThread().getName() + \" running\");",
        "  }",
        "}",
        "class MyThread extends Thread {",
        "  public void run() {",
        "    for (int i = 0; i < 3; i++) {",
        "      System.out.println(\"ext \" + i);",
        "    }",
        "  }",
        "}",
        "class ThreadDemo {",
        "  public static void main(String[] args) {",
        "    Thread t1 = new Thread(new MyTask(), \"worker\");",
        "    t1.start(); // NEW → RUNNABLE",
        "    new MyThread().start();",
        "    // t1.run();  // would NOT start a separate thread",
        "  }",
        "}",
      ].join("\n"),
      [
        "Creating threads with Runnable and by extending Thread; start() not run().",
        "Runnable और Thread extend कर थ्रेड बनाना; start() न कि run()।",
        "Runnable aur Thread extend karke threads banana; start() na ki run().",
      ],
    ),
    EXAM(
      "List six states: new, runnable, blocked, waiting, timed waiting, terminated. start vs run is the classic MCQ. Write both creation methods. sleep vs wait (wait is Object, releases lock — next topic).",
      "छह अवस्थाएँ: new, runnable, blocked, waiting, timed waiting, terminated। start बनाम run क्लासिक MCQ। दोनों निर्माण विधियाँ लिखें। sleep बनाम wait (wait Object पर, लॉक छोड़ता है — अगला विषय)।",
      "Chhah states: new, runnable, blocked, waiting, timed waiting, terminated. start vs run classic MCQ. Dono creation methods likho. sleep vs wait (wait Object par, lock chhodta hai — agla topic).",
    ),
  ]),

  "java-sync": topic("java-sync", [
    H(
      "Priorities",
      "प्राथमिकताएँ",
      "Priorities",
    ),
    P(
      "Thread priorities are integers from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY); NORM_PRIORITY is 5. setPriority(int) / getPriority(). Priority is a hint to the scheduler, not a guarantee of order — never write programs that depend on priority for correctness. Use synchronization for correctness.",
      "थ्रेड प्राथमिकताएँ 1 (MIN_PRIORITY) से 10 (MAX_PRIORITY) तक पूर्णांक; NORM_PRIORITY 5 है। setPriority(int) / getPriority()। प्राथमिकता शेड्यूलर के लिए संकेत है, क्रम की गारंटी नहीं — शुद्धता के लिए प्राथमिकता पर निर्भर प्रोग्राम न लिखें। शुद्धता के लिए सिंक्रोनाइज़ेशन उपयोग करें।",
      "Thread priorities 1 (MIN_PRIORITY) se 10 (MAX_PRIORITY) tak integers; NORM_PRIORITY 5 hai. setPriority(int) / getPriority(). Priority scheduler ke liye hint hai, order ki guarantee nahi — correctness ke liye priority par depend mat karo. Correctness ke liye synchronization use karo.",
    ),
    H(
      "synchronized and monitors",
      "synchronized और मॉनिटर",
      "synchronized aur monitors",
    ),
    P(
      "A race condition happens when two threads read-modify-write shared data without coordination (lost updates on a counter). Every Java object has a monitor (intrinsic lock). synchronized(obj) { ... } or a synchronized instance method acquires that object's lock; a synchronized static method acquires the Class object lock. Only one thread holds a given monitor at a time; others BLOCKED until it is released (including on exceptions — the lock is released when the block exits).",
      "रेस कंडीशन तब जब दो थ्रेड बिना समन्वय साझा डेटा पढ़-बदल-लिखें (काउंटर पर खोया अपडेट)। हर जावा ऑब्जेक्ट का मॉनिटर (इंट्रिन्सिक लॉक) होता है। synchronized(obj) { ... } या synchronized इंस्टेंस मेथड उस ऑब्जेक्ट का लॉक लेता है; synchronized static मेथड Class ऑब्जेक्ट का लॉक। एक समय में एक थ्रेड; अन्य BLOCKED जब तक मुक्त (एक्सेप्शन पर भी ब्लॉक छूटने पर लॉक छूटता है)।",
      "Race condition tab jab do threads bina coordination shared data read-modify-write karein (counter par lost update). Har Java object ka monitor (intrinsic lock) hota hai. synchronized(obj) { ... } ya synchronized instance method us object ka lock leta hai; synchronized static method Class object ka lock. Ek time par ek thread; doosre BLOCKED jab tak free (exception par bhi block chhootne par lock chhootta hai).",
    ),
    C(
      "java",
      [
        "class Counter {",
        "  private int n = 0;",
        "  synchronized void inc() { n++; }          // lock = this",
        "  synchronized int get() { return n; }",
        "  void incBlock() {",
        "    synchronized (this) { n++; }            // equivalent block",
        "  }",
        "}",
        "class Worker extends Thread {",
        "  Counter c;",
        "  Worker(Counter c) { this.c = c; }",
        "  public void run() {",
        "    for (int i = 0; i < 1000; i++) c.inc();",
        "  }",
        "}",
        "class SyncDemo {",
        "  public static void main(String[] args) throws Exception {",
        "    Counter c = new Counter();",
        "    Thread t1 = new Worker(c);",
        "    Thread t2 = new Worker(c);",
        "    t1.setPriority(Thread.NORM_PRIORITY);",
        "    t1.start(); t2.start();",
        "    t1.join(); t2.join();",
        "    System.out.println(c.get()); // 2000 if synchronized",
        "  }",
        "}",
      ].join("\n"),
      [
        "synchronized method and equivalent synchronized block protecting a shared counter; join waits for both workers.",
        "shared काउंटर की रक्षा करते synchronized मेथड और समतुल्य synchronized ब्लॉक; join दोनों वर्कर की प्रतीक्षा करता है।",
        "synchronized method aur equivalent synchronized block shared counter ki raksha; join dono workers ka wait karta hai.",
      ],
    ),
    NOTE(
      "Synchronizing on this can surprise you if external code also locks the same object. A private final Object lock = new Object(); as the monitor is safer. Two threads locking different objects do not exclude each other.",
      "this पर synchronize करना आश्चर्य दे सकता है यदि बाहरी कोड भी उसी ऑब्जेक्ट को लॉक करे। मॉनिटर के रूप में private final Object lock = new Object(); सुरक्षित। अलग ऑब्जेक्ट लॉक करते दो थ्रेड एक-दूसरे को नहीं रोकते।",
      "this par synchronize karna surprise de sakta hai agar bahar ka code bhi usi object ko lock kare. Monitor ke roop mein private final Object lock = new Object(); safer. Alag objects lock karte do threads ek doosre ko nahi rokte.",
    ),
    EXAM(
      "MIN/NORM/MAX values. Define race condition and monitor. Write synchronized increment. Difference between synchronized method and block (block can lock a chosen object and shrink the critical section).",
      "MIN/NORM/MAX मान। रेस कंडीशन और मॉनिटर परिभाषित करें। synchronized इंक्रीमेंट लिखें। synchronized मेथड बनाम ब्लॉक (ब्लॉक चुना ऑब्जेक्ट लॉक कर क्रिटिकल सेक्शन छोटा करता है)।",
      "MIN/NORM/MAX values. Race condition aur monitor define karo. synchronized increment likho. synchronized method vs block (block chosen object lock karke critical section chhota karta hai).",
    ),
  ]),

  "java-itc": topic("java-itc", [
    H(
      "wait, notify, notifyAll",
      "wait, notify, notifyAll",
      "wait, notify, notifyAll",
    ),
    P(
      "Inter-thread communication uses Object methods, not Thread methods. wait() releases the monitor and parks the thread in WAITING. notify() wakes one waiter; notifyAll() wakes all. All three must be called from a synchronized context on the same object, or IllegalMonitorStateException is thrown. Always wait() in a loop that re-checks the condition (spurious wakeups and notifyAll).",
      "इंटर-थ्रेड कम्युनिकेशन Object के मेथड उपयोग करता है, Thread के नहीं। wait() मॉनिटर छोड़ थ्रेड को WAITING में पार्क करता है। notify() एक वेटर जगाता है; notifyAll() सभी को। तीनों उसी ऑब्जेक्ट पर synchronized संदर्भ से चलें, वरना IllegalMonitorStateException। wait() हमेशा शर्त पुनः जाँचते लूप में (स्प्यूरियस वेकअप और notifyAll)।",
      "Inter-thread communication Object ke methods use karta hai, Thread ke nahi. wait() monitor chhod thread ko WAITING mein park karta hai. notify() ek waiter jagata hai; notifyAll() sabko. Teeno usi object par synchronized context se chalein, warna IllegalMonitorStateException. wait() hamesha condition dubara check karte loop mein (spurious wakeups aur notifyAll).",
    ),
    C(
      "java",
      [
        "class Q {",
        "  int n;",
        "  boolean ready = false;",
        "  synchronized void put(int n) {",
        "    while (ready) {",
        "      try { wait(); } catch (InterruptedException e) {}",
        "    }",
        "    this.n = n;",
        "    ready = true;",
        "    System.out.println(\"put \" + n);",
        "    notify();",
        "  }",
        "  synchronized int get() {",
        "    while (!ready) {",
        "      try { wait(); } catch (InterruptedException e) {}",
        "    }",
        "    ready = false;",
        "    notify();",
        "    System.out.println(\"got \" + n);",
        "    return n;",
        "  }",
        "}",
        "class Producer extends Thread {",
        "  Q q; Producer(Q q) { this.q = q; }",
        "  public void run() { for (int i = 1; i <= 5; i++) q.put(i); }",
        "}",
        "class Consumer extends Thread {",
        "  Q q; Consumer(Q q) { this.q = q; }",
        "  public void run() { for (int i = 1; i <= 5; i++) q.get(); }",
        "}",
        "class ITCDemo {",
        "  public static void main(String[] args) {",
        "    Q q = new Q();",
        "    new Producer(q).start();",
        "    new Consumer(q).start();",
        "  }",
        "}",
      ].join("\n"),
      [
        "Producer-consumer with wait/notify on a shared queue object; wait is looped on the ready flag.",
        "साझा क्यू ऑब्जेक्ट पर wait/notify वाला प्रोड्यूसर-कंज्यूमर; wait ready फ़्लैग के लूप में है।",
        "Producer-consumer with wait/notify on shared queue object; wait ready flag ke loop mein hai.",
      ],
    ),
    H(
      "suspend, resume, and stop — deprecated",
      "suspend, resume और stop — डिप्रिकेटेड",
      "suspend, resume aur stop — deprecated",
    ),
    UL([
      [
        "Thread.suspend() / resume() are deprecated: a suspended thread may still hold a lock, causing deadlock.",
        "Thread.suspend() / resume() डिप्रिकेटेड: सस्पेंडेड थ्रेड लॉक पकड़े रह सकता है, डेडलॉक।",
        "Thread.suspend() / resume() deprecated: suspended thread lock pakde reh sakta hai, deadlock.",
      ],
      [
        "Thread.stop() is deprecated: it unlocks all monitors as it dies, leaving objects half-updated (unsafe).",
        "Thread.stop() डिप्रिकेटेड: मरते समय सभी मॉनिटर खोलता है, ऑब्जेक्ट अधूरे अपडेट (असुरक्षित)।",
        "Thread.stop() deprecated: marte time sab monitors kholta hai, objects adhure update (unsafe).",
      ],
      [
        "Modern replacement: a volatile boolean running flag (or interrupt()) that run() checks; cooperative cancellation.",
        "आधुनिक विकल्प: volatile boolean running फ़्लैग (या interrupt()) जिसे run() जाँचता है; सहकारी रद्दीकरण।",
        "Modern replacement: volatile boolean running flag (ya interrupt()) jise run() check karta hai; cooperative cancellation.",
      ],
    ]),
    EXAM(
      "Producer-consumer program is a 10-mark favourite. wait vs sleep: wait releases lock, must be in synchronized, belongs to Object; sleep does not release lock, belongs to Thread. Why stop/suspend/resume are deprecated.",
      "प्रोड्यूसर-कंज्यूमर 10-अंक पसंदीदा। wait बनाम sleep: wait लॉक छोड़ता है, synchronized में, Object पर; sleep लॉक नहीं छोड़ता, Thread पर। stop/suspend/resume डिप्रिकेटेड क्यों।",
      "Producer-consumer 10-mark favourite. wait vs sleep: wait lock chhodta hai, synchronized mein, Object par; sleep lock nahi chhodta, Thread par. stop/suspend/resume deprecated kyun.",
    ),
  ]),

  "java-io": topic("java-io", [
    H(
      "Two stream families in java.io",
      "java.io में दो स्ट्रीम परिवार",
      "java.io mein do stream families",
    ),
    P(
      "A stream is a sequence of data. Byte streams handle raw 8-bit bytes (binary files, images, network). Character streams handle 16-bit Unicode text and apply charset conversion. Always close streams (finally or try-with-resources) to flush buffers and release file handles.",
      "स्ट्रीम डेटा का अनुक्रम है। बाइट स्ट्रीम कच्चे 8-बिट बाइट (बाइनरी फ़ाइल, छवि, नेटवर्क) सँभालती हैं। कैरेक्टर स्ट्रीम 16-बिट Unicode टेक्स्ट सँभाल कर चारसेट रूपांतरण करती हैं। बफ़र फ्लश और फ़ाइल हैंडल मुक्त करने के लिए स्ट्रीम हमेशा बंद करें (finally या try-with-resources)।",
      "Stream data ka sequence hai. Byte streams kachche 8-bit bytes (binary files, images, network) sambhalti hain. Character streams 16-bit Unicode text sambhal kar charset conversion karti hain. Buffer flush aur file handles free karne ke liye streams hamesha band karo (finally ya try-with-resources).",
    ),
    TBL(
      [
        ["Byte (java.io)", "बाइट (java.io)", "Byte (java.io)"],
        ["Character (java.io)", "कैरेक्टर (java.io)", "Character (java.io)"],
      ],
      [
        [
          ["InputStream / OutputStream (abstract)", "InputStream / OutputStream (abstract)", "InputStream / OutputStream (abstract)"],
          ["Reader / Writer (abstract)", "Reader / Writer (abstract)", "Reader / Writer (abstract)"],
        ],
        [
          ["FileInputStream, FileOutputStream", "FileInputStream, FileOutputStream", "FileInputStream, FileOutputStream"],
          ["FileReader, FileWriter", "FileReader, FileWriter", "FileReader, FileWriter"],
        ],
        [
          ["BufferedInputStream, BufferedOutputStream", "BufferedInputStream, BufferedOutputStream", "BufferedInputStream, BufferedOutputStream"],
          ["BufferedReader (readLine()), BufferedWriter", "BufferedReader (readLine()), BufferedWriter", "BufferedReader (readLine()), BufferedWriter"],
        ],
        [
          ["DataInputStream, DataOutputStream (primitives)", "DataInputStream, DataOutputStream (प्रिमिटिव)", "DataInputStream, DataOutputStream (primitives)"],
          ["InputStreamReader, OutputStreamWriter (bridge)", "InputStreamReader, OutputStreamWriter (ब्रिज)", "InputStreamReader, OutputStreamWriter (bridge)"],
        ],
        [
          ["ObjectInputStream / ObjectOutputStream (serialization)", "ObjectInputStream / ObjectOutputStream (सीरियलाइज़ेशन)", "ObjectInputStream / ObjectOutputStream (serialization)"],
          ["PrintWriter (println, autoFlush)", "PrintWriter (println, autoFlush)", "PrintWriter (println, autoFlush)"],
        ],
      ],
    ),
    C(
      "java",
      [
        "import java.io.*;",
        "class IoDemo {",
        "  public static void main(String[] args) throws Exception {",
        "    FileOutputStream fos = new FileOutputStream(\"b.dat\");",
        "    fos.write(65); // byte 'A'",
        "    fos.close();",
        "    FileInputStream fis = new FileInputStream(\"b.dat\");",
        "    System.out.println(fis.read());",
        "    fis.close();",
        "    FileWriter fw = new FileWriter(\"t.txt\");",
        "    fw.write(\"BCA Java\");",
        "    fw.close();",
        "    BufferedReader br = new BufferedReader(new FileReader(\"t.txt\"));",
        "    System.out.println(br.readLine());",
        "    br.close();",
        "  }",
        "}",
      ].join("\n"),
      [
        "FileOutputStream/FileInputStream for a single byte; FileWriter and BufferedReader for a text line.",
        "एक बाइट के लिए FileOutputStream/FileInputStream; टेक्स्ट पंक्ति के लिए FileWriter और BufferedReader।",
        "Ek byte ke liye FileOutputStream/FileInputStream; text line ke liye FileWriter aur BufferedReader.",
      ],
    ),
    NOTE(
      "read() returns int: 0–255 for a byte, or −1 for end-of-stream. FileReader uses the default charset — prefer InputStreamReader with an explicit charset in real apps. RandomAccessFile allows seek for both reading and writing.",
      "read() int लौटाता है: बाइट के लिए 0–255, या एंड-ऑफ-स्ट्रीम के लिए −1। FileReader डिफ़ॉल्ट चारसेट — वास्तविक ऐप में स्पष्ट चारसेट के साथ InputStreamReader। RandomAccessFile पढ़ने-लिखने के लिए seek देता है।",
      "read() int return karta hai: byte ke liye 0–255, ya end-of-stream ke liye −1. FileReader default charset — real apps mein explicit charset ke sath InputStreamReader. RandomAccessFile read-write ke liye seek deta hai.",
    ),
    EXAM(
      "Byte vs character stream table with four class pairs. Why BufferedReader is preferred for line input. Mention the bridge classes InputStreamReader / OutputStreamWriter.",
      "चार क्लास युग्मों के साथ बाइट बनाम कैरेक्टर स्ट्रीम तालिका। लाइन इनपुट के लिए BufferedReader क्यों। ब्रिज क्लास InputStreamReader / OutputStreamWriter का उल्लेख।",
      "Char class pairs ke sath byte vs character stream table. Line input ke liye BufferedReader kyun. Bridge classes InputStreamReader / OutputStreamWriter ka ullekh.",
    ),
  ]),

  "java-console": topic("java-console", [
    H(
      "Predefined streams",
      "पूर्वपरिभाषित स्ट्रीम",
      "Predefined streams",
    ),
    P(
      "System.in is an InputStream connected to the keyboard. System.out and System.err are PrintStream objects (byte-based, historically) for normal output and errors. You can redirect them with System.setIn/setOut/setErr. PrintStream provides print, println, and printf.",
      "System.in कीबोर्ड से जुड़ी InputStream है। System.out और System.err सामान्य आउटपुट और त्रुटि के लिए PrintStream हैं (ऐतिहासिक रूप से बाइट-आधारित)। System.setIn/setOut/setErr से रीडायरेक्ट। PrintStream print, println और printf देता है।",
      "System.in keyboard se judi InputStream hai. System.out aur System.err normal output aur errors ke liye PrintStream hain (historically byte-based). System.setIn/setOut/setErr se redirect. PrintStream print, println aur printf deta hai.",
    ),
    UL([
      [
        "Classic keyboard input: BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String line = br.readLine(); — readLine throws IOException (checked).",
        "क्लासिक कीबोर्ड इनपुट: BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String line = br.readLine(); — readLine IOException (checked) फेंकता है।",
        "Classic keyboard input: BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String line = br.readLine(); — readLine IOException (checked) fekta hai.",
      ],
      [
        "System.in.read() reads one byte as int — clumsy for numbers and strings.",
        "System.in.read() एक बाइट int के रूप में पढ़ता है — संख्याओं और स्ट्रिंग के लिए असुविधाजनक।",
        "System.in.read() ek byte int ke roop mein padhta hai — numbers aur strings ke liye clumsy.",
      ],
      [
        "Console class (System.console()) can read passwords without echoing; may be null inside IDEs.",
        "Console क्लास (System.console()) बिना इको पासवर्ड पढ़ सकती है; IDE में null हो सकती है।",
        "Console class (System.console()) bina echo password padh sakti hai; IDE mein null ho sakti hai.",
      ],
    ]),
    H(
      "Scanner (java.util)",
      "Scanner (java.util)",
      "Scanner (java.util)",
    ),
    P(
      "Scanner tokenizes input using a delimiter (default whitespace). Construct Scanner sc = new Scanner(System.in); Methods: next(), nextLine(), nextInt(), nextDouble(), nextBoolean(), hasNextInt(), useDelimiter. After nextInt(), a leftover newline can poison the next nextLine() — consume it with an extra nextLine() or always read lines and parse.",
      "Scanner डिफ़ॉल्ट व्हाइटस्पेस डिलिमिटर से इनपुट टोकनाइज़ करता है। Scanner sc = new Scanner(System.in); मेथड: next(), nextLine(), nextInt(), nextDouble(), nextBoolean(), hasNextInt(), useDelimiter। nextInt() के बाद बचा न्यूलाइन अगले nextLine() को बिगाड़ सकता है — अतिरिक्त nextLine() से खाएँ या हमेशा लाइन पढ़ कर पार्स करें।",
      "Scanner default whitespace delimiter se input tokenize karta hai. Scanner sc = new Scanner(System.in); methods: next(), nextLine(), nextInt(), nextDouble(), nextBoolean(), hasNextInt(), useDelimiter. nextInt() ke baad bachi newline agle nextLine() ko bigaad sakti hai — extra nextLine() se consume karo ya hamesha lines padhkar parse karo.",
    ),
    C(
      "java",
      [
        "import java.util.Scanner;",
        "import java.io.*;",
        "class ConsoleDemo {",
        "  public static void main(String[] args) throws Exception {",
        "    Scanner sc = new Scanner(System.in);",
        "    System.out.print(\"Roll: \");",
        "    int roll = sc.nextInt();",
        "    sc.nextLine(); // eat leftover newline",
        "    System.out.print(\"Name: \");",
        "    String name = sc.nextLine();",
        "    System.out.println(roll + \" \" + name);",
        "    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));",
        "    System.out.print(\"City: \");",
        "    String city = br.readLine();",
        "    System.out.println(city);",
        "    sc.close();",
        "  }",
        "}",
      ].join("\n"),
      [
        "Scanner nextInt/nextLine trap fix, plus classic BufferedReader+InputStreamReader line input.",
        "Scanner nextInt/nextLine जाल का समाधान, तथा क्लासिक BufferedReader+InputStreamReader लाइन इनपुट।",
        "Scanner nextInt/nextLine trap ka solution, plus classic BufferedReader+InputStreamReader line input.",
      ],
    ),
    EXAM(
      "Name the three predefined streams and their types. Write a Scanner program reading int + String. Why wrap System.in in InputStreamReader then BufferedReader?",
      "तीन पूर्वपरिभाषित स्ट्रीम और उनके टाइप नाम दें। int + String पढ़ता Scanner प्रोग्राम लिखें। System.in को InputStreamReader फिर BufferedReader में क्यों लपेटें?",
      "Teen predefined streams aur unke types naam do. int + String padhta Scanner program likho. System.in ko InputStreamReader phir BufferedReader mein kyun wrap karein?",
    ),
  ]),

  "java-lang": topic("java-lang", [
    H(
      "java.lang is always imported",
      "java.lang हमेशा इम्पोर्ट है",
      "java.lang hamesha imported hai",
    ),
    P(
      "Every compilation unit implicitly imports java.lang.*. You never need import java.lang.String. The package holds the types the language itself depends on: Object, Class, String, wrappers, Math, System, Thread, Throwable, Runtime, Process, ClassLoader.",
      "हर कंपाइलेशन यूनिट अंतर्निहित java.lang.* इम्पोर्ट करती है। import java.lang.String की आवश्यकता नहीं। पैकेज में वे टाइप हैं जिन पर भाषा निर्भर है: Object, Class, String, रैपर, Math, System, Thread, Throwable, Runtime, Process, ClassLoader।",
      "Har compilation unit implicit java.lang.* import karti hai. import java.lang.String ki zaroorat nahi. Package mein woh types hain jin par language depend karti hai: Object, Class, String, wrappers, Math, System, Thread, Throwable, Runtime, Process, ClassLoader.",
    ),
    TBL(
      [
        ["Class", "क्लास", "Class"],
        ["Must-know members", "अवश्य-ज्ञात सदस्य", "Must-know members"],
      ],
      [
        [
          ["Object", "Object", "Object"],
          [
            "equals, hashCode, toString, getClass, clone (protected), wait/notify/notifyAll, finalize (deprecated).",
            "equals, hashCode, toString, getClass, clone (protected), wait/notify/notifyAll, finalize (डिप्रिकेटेड)।",
            "equals, hashCode, toString, getClass, clone (protected), wait/notify/notifyAll, finalize (deprecated).",
          ],
        ],
        [
          ["System", "System", "System"],
          [
            "in/out/err, currentTimeMillis, arraycopy, exit, getProperty, gc (suggests GC).",
            "in/out/err, currentTimeMillis, arraycopy, exit, getProperty, gc (GC सुझाव)।",
            "in/out/err, currentTimeMillis, arraycopy, exit, getProperty, gc (GC suggest).",
          ],
        ],
        [
          ["Math", "Math", "Math"],
          [
            "final class, private constructor; sqrt, pow, abs, min, max, random, ceil, floor, round, PI, E — all static.",
            "final क्लास, private कंस्ट्रक्टर; sqrt, pow, abs, min, max, random, ceil, floor, round, PI, E — सभी static।",
            "final class, private constructor; sqrt, pow, abs, min, max, random, ceil, floor, round, PI, E — sab static.",
          ],
        ],
        [
          ["Wrappers", "रैपर", "Wrappers"],
          [
            "Integer, Double, Character, Boolean, ...; parseInt, valueOf, autoboxing/unboxing; used when primitives must be objects (collections).",
            "Integer, Double, Character, Boolean, ...; parseInt, valueOf, ऑटोबॉक्सिंग/अनबॉक्सिंग; जब प्रिमिटिव को ऑब्जेक्ट चाहिए (कलेक्शन्स)।",
            "Integer, Double, Character, Boolean, ...; parseInt, valueOf, autoboxing/unboxing; jab primitives ko objects chahiye (collections).",
          ],
        ],
        [
          ["String / StringBuffer / Thread / Throwable", "String / StringBuffer / Thread / Throwable", "String / StringBuffer / Thread / Throwable"],
          [
            "Covered in their own topics; they live in java.lang, not java.util.",
            "अपने विषयों में कवर; ये java.lang में हैं, java.util में नहीं।",
            "Apne topics mein cover; yeh java.lang mein hain, java.util mein nahi.",
          ],
        ],
        [
          ["Runtime / Class", "Runtime / Class", "Runtime / Class"],
          [
            "Runtime.getRuntime().exec, totalMemory, freeMemory; Class.forName, getName, newInstance (legacy).",
            "Runtime.getRuntime().exec, totalMemory, freeMemory; Class.forName, getName, newInstance (लेगेसी)।",
            "Runtime.getRuntime().exec, totalMemory, freeMemory; Class.forName, getName, newInstance (legacy).",
          ],
        ],
      ],
    ),
    NOTE(
      "equals contract: reflexive, symmetric, transitive, consistent; if equals is overridden, override hashCode too. Default equals is == (reference). Integer.parseInt(\"12a\") throws NumberFormatException.",
      "equals अनुबंध: रिफ़्लेक्सिव, सिमेट्रिक, ट्रांज़िटिव, कंसिस्टेंट; equals ओवरराइड हो तो hashCode भी। डिफ़ॉल्ट equals == (रेफ़रेंस) है। Integer.parseInt(\"12a\") NumberFormatException।",
      "equals contract: reflexive, symmetric, transitive, consistent; equals override ho to hashCode bhi. Default equals == (reference) hai. Integer.parseInt(\"12a\") NumberFormatException.",
    ),
    EXAM(
      "List ten java.lang classes. Object methods. Why Math has only static methods. Wrapper vs primitive. java.lang is not java.util — ArrayList is util, String is lang.",
      "दस java.lang क्लास सूचीबद्ध करें। Object मेथड। Math केवल static क्यों। रैपर बनाम प्रिमिटिव। java.lang, java.util नहीं — ArrayList util है, String lang है।",
      "Das java.lang classes list karo. Object methods. Math sirf static kyun. Wrapper vs primitive. java.lang, java.util nahi — ArrayList util hai, String lang hai.",
    ),
  ]),

  "java-util": topic("java-util", [
    H(
      "java.util at a glance",
      "java.util एक दृष्टि में",
      "java.util ek nazar mein",
    ),
    P(
      "java.util holds the Collections Framework, date/time legacy types, random numbers, Scanner, StringTokenizer, and utility classes such as Objects and Arrays. Collections store objects (wrappers for primitives). Legacy Vector and Hashtable are synchronized; modern ArrayList and HashMap are not (unless wrapped with Collections.synchronizedList/Map).",
      "java.util में कलेक्शन्स फ़्रेमवर्क, लेगेसी date/time, रैंडम, Scanner, StringTokenizer, और Objects, Arrays जैसी यूटिलिटी क्लास हैं। कलेक्शन्स ऑब्जेक्ट रखते हैं (प्रिमिटिव के लिए रैपर)। लेगेसी Vector और Hashtable synchronized हैं; आधुनिक ArrayList और HashMap नहीं (जब तक Collections.synchronizedList/Map से लपेटे न जाएँ)।",
      "java.util mein Collections Framework, legacy date/time, random, Scanner, StringTokenizer, aur Objects, Arrays jaise utility classes hain. Collections objects rakhte hain (primitives ke liye wrappers). Legacy Vector aur Hashtable synchronized hain; modern ArrayList aur HashMap nahi (jab tak Collections.synchronizedList/Map se wrap na hon).",
    ),
    TBL(
      [
        ["Interface / class", "इंटरफ़ेस / क्लास", "Interface / class"],
        ["Idea", "विचार", "Idea"],
      ],
      [
        [
          ["List — ArrayList, LinkedList, Vector, Stack", "List — ArrayList, LinkedList, Vector, Stack", "List — ArrayList, LinkedList, Vector, Stack"],
          [
            "Ordered, duplicates allowed, index access. ArrayList: resizable array. LinkedList: deque. Vector: synchronized ArrayList ancestor. Stack: LIFO on Vector.",
            "क्रमित, डुप्लिकेट मान्य, इंडेक्स एक्सेस। ArrayList: बदलते आकार का एरे। LinkedList: deque। Vector: synchronized पूर्वज। Stack: Vector पर LIFO।",
            "Ordered, duplicates allowed, index access. ArrayList: resizable array. LinkedList: deque. Vector: synchronized ancestor. Stack: Vector par LIFO.",
          ],
        ],
        [
          ["Set — HashSet, TreeSet, LinkedHashSet", "Set — HashSet, TreeSet, LinkedHashSet", "Set — HashSet, TreeSet, LinkedHashSet"],
          [
            "No duplicates. HashSet unordered; TreeSet sorted; LinkedHashSet insertion order.",
            "डुप्लिकेट नहीं। HashSet बिना क्रम; TreeSet सॉर्टेड; LinkedHashSet इनसर्शन क्रम।",
            "Duplicates nahi. HashSet unordered; TreeSet sorted; LinkedHashSet insertion order.",
          ],
        ],
        [
          ["Map — HashMap, Hashtable, TreeMap, LinkedHashMap", "Map — HashMap, Hashtable, TreeMap, LinkedHashMap", "Map — HashMap, Hashtable, TreeMap, LinkedHashMap"],
          [
            "Key-value. HashMap allows one null key; Hashtable is synchronized and forbids nulls.",
            "की-वैल्यू। HashMap एक null की; Hashtable synchronized और null मना।",
            "Key-value. HashMap ek null key; Hashtable synchronized aur nulls mana.",
          ],
        ],
        [
          ["Iterator / Enumeration", "Iterator / Enumeration", "Iterator / Enumeration"],
          [
            "Iterator: hasNext, next, remove (fail-fast on most collections). Enumeration: legacy hasMoreElements, nextElement on Vector/Hashtable.",
            "Iterator: hasNext, next, remove (अधिकांश पर fail-fast)। Enumeration: लेगेसी hasMoreElements, nextElement Vector/Hashtable पर।",
            "Iterator: hasNext, next, remove (zyadatar par fail-fast). Enumeration: legacy hasMoreElements, nextElement Vector/Hashtable par.",
          ],
        ],
        [
          ["Date, Calendar, Random, StringTokenizer", "Date, Calendar, Random, StringTokenizer", "Date, Calendar, Random, StringTokenizer"],
          [
            "Date is mutable legacy; Calendar.getInstance() for fields; Random.nextInt(n); StringTokenizer splits on delimiters (legacy vs split()).",
            "Date परिवर्तनीय लेगेसी; फ़ील्ड के लिए Calendar.getInstance(); Random.nextInt(n); StringTokenizer डिलिमिटर से विभाजन (लेगेसी बनाम split())।",
            "Date mutable legacy; fields ke liye Calendar.getInstance(); Random.nextInt(n); StringTokenizer delimiters se split (legacy vs split()).",
          ],
        ],
      ],
    ),
    UL([
      [
        "ArrayList vs array: ArrayList grows, holds objects, has add/get/size; array is fixed, can hold primitives, uses .length.",
        "ArrayList बनाम एरे: ArrayList बढ़ती है, ऑब्जेक्ट रखती है, add/get/size; एरे निश्चित, प्रिमिटिव रख सकता है, .length।",
        "ArrayList vs array: ArrayList badhti hai, objects rakhti hai, add/get/size; array fixed, primitives rakh sakta hai, .length.",
      ],
      [
        "Generics (Java 5): List<String> names = new ArrayList<String>(); avoid raw types in new code.",
        "जेनेरिक्स (Java 5): List<String> names = new ArrayList<String>(); नए कोड में raw टाइप से बचें।",
        "Generics (Java 5): List<String> names = new ArrayList<String>(); naye code mein raw types se bacho.",
      ],
    ]),
    EXAM(
      "Collections hierarchy sketch: Collection → List/Set/Queue; Map is separate. ArrayList vs Vector vs LinkedList. HashMap vs Hashtable. Iterator methods. Scanner lives in java.util, not java.io.",
      "कलेक्शन्स पदानुक्रम: Collection → List/Set/Queue; Map अलग। ArrayList बनाम Vector बनाम LinkedList। HashMap बनाम Hashtable। Iterator मेथड। Scanner java.util में है, java.io में नहीं।",
      "Collections hierarchy: Collection → List/Set/Queue; Map alag. ArrayList vs Vector vs LinkedList. HashMap vs Hashtable. Iterator methods. Scanner java.util mein hai, java.io mein nahi.",
    ),
  ]),

  "java-event-models": topic("java-event-models", [
    H(
      "Two event models in Java GUI history",
      "जावा GUI इतिहास में दो इवेंट मॉडल",
      "Java GUI itihas mein do event models",
    ),
    P(
      "An event is an object describing a user or system action (click, key, window close). Java 1.0 used the inheritance (semantic / bubbling) event model. Java 1.1 introduced the delegation event model, which AWT and Swing still use. BCA papers expect both names and a comparison.",
      "इवेंट उपयोगकर्ता या सिस्टम क्रिया (क्लिक, कुंजी, विंडो बंद) का वर्णन करने वाला ऑब्जेक्ट है। जावा 1.0 ने इनहेरिटेंस (सिमेंटिक / बबलिंग) इवेंट मॉडल उपयोग किया। जावा 1.1 ने डेलीगेशन इवेंट मॉडल दिया, जिसे AWT और Swing अभी भी उपयोग करते हैं। BCA पेपर दोनों नाम और तुलना चाहते हैं।",
      "Event user ya system action (click, key, window close) describe karta object hai. Java 1.0 ne inheritance (semantic / bubbling) event model use kiya. Java 1.1 ne delegation event model diya, jise AWT aur Swing abhi bhi use karte hain. BCA papers dono naam aur comparison chahte hain.",
    ),
    TBL(
      [
        ["Point", "बिंदु", "Point"],
        ["Inheritance model (Java 1.0)", "इनहेरिटेंस मॉडल (Java 1.0)", "Inheritance model (Java 1.0)"],
        ["Delegation model (Java 1.1+)", "डेलीगेशन मॉडल (Java 1.1+)", "Delegation model (Java 1.1+)"],
      ],
      [
        [
          ["How events travel", "इवेंट कैसे चलते हैं", "Events kaise chalte hain"],
          [
            "handleEvent(Event e) on the component; unused events bubble to the parent container.",
            "कंपोनेंट पर handleEvent(Event e); अनुपयोगी इवेंट पैरेंट कंटेनर तक बबल होते हैं।",
            "Component par handleEvent(Event e); unused events parent container tak bubble hote hain.",
          ],
          [
            "Source object fires; only registered listeners are notified. No bubbling.",
            "सोर्स ऑब्जेक्ट फायर करता है; केवल पंजीकृत लिसनर सूचित। कोई बबलिंग नहीं।",
            "Source object fire karta hai; sirf registered listeners notify. Koi bubbling nahi.",
          ],
        ],
        [
          ["Coupling", "कपलिंग", "Coupling"],
          [
            "You subclass Button just to catch its click — poor reuse.",
            "क्लिक पकड़ने के लिए Button सबक्लास — खराब पुनःउपयोग।",
            "Click pakadne ke liye Button subclass — kharab reuse.",
          ],
          [
            "Any class can implement ActionListener and be added with addActionListener.",
            "कोई भी क्लास ActionListener लागू कर addActionListener से जुड़ सकती है।",
            "Koi bhi class ActionListener implement karke addActionListener se jud sakti hai.",
          ],
        ],
        [
          ["Performance / design", "प्रदर्शन / डिज़ाइन", "Performance / design"],
          [
            "Every event walks the container chain; single Event class with id constants.",
            "हर इवेंट कंटेनर श्रृंखला चलता है; id कॉन्स्टेंट वाली एक Event क्लास।",
            "Har event container chain chalta hai; id constants wali ek Event class.",
          ],
          [
            "Typed event objects (ActionEvent, MouseEvent) and listener interfaces; efficient and OO.",
            "टाइप्ड इवेंट ऑब्जेक्ट (ActionEvent, MouseEvent) और लिसनर इंटरफ़ेस; कुशल और OO।",
            "Typed event objects (ActionEvent, MouseEvent) aur listener interfaces; efficient aur OO.",
          ],
        ],
      ],
    ),
    NOTE(
      "Applets and AWT in the syllabus use the delegation model. handleEvent is historical — mention it only when asked to contrast models. Swing uses the same delegation model on lightweight components.",
      "पाठ्यक्रम के एप्लेट और AWT डेलीगेशन मॉडल उपयोग करते हैं। handleEvent ऐतिहासिक है — केवल मॉडल तुलना पर उल्लेख। Swing हल्के कंपोनेंट पर वही डेलीगेशन मॉडल उपयोग करता है।",
      "Syllabus ke applets aur AWT delegation model use karte hain. handleEvent historical hai — sirf model comparison par mention. Swing lightweight components par wahi delegation model use karta hai.",
    ),
    EXAM(
      "Define event, event source, event listener, event object. Contrast inheritance vs delegation in a table. State that Java 1.1+ GUI is delegation-based.",
      "इवेंट, इवेंट सोर्स, इवेंट लिसनर, इवेंट ऑब्जेक्ट परिभाषित करें। इनहेरिटेंस बनाम डेलीगेशन तालिका। जावा 1.1+ GUI डेलीगेशन-आधारित है।",
      "Event, event source, event listener, event object define karo. Inheritance vs delegation table. Java 1.1+ GUI delegation-based hai.",
    ),
  ]),

  "java-applets": topic("java-applets", [
    H(
      "What an applet is (legacy, still in the syllabus)",
      "एप्लेट क्या है (लेगेसी, पाठ्यक्रम में अभी भी)",
      "Applet kya hai (legacy, syllabus mein abhi bhi)",
    ),
    P(
      "An applet is a small Java program that runs inside a browser or applet viewer under a security sandbox, not from a command-line main(). java.applet.Applet extends Panel (AWT). Applets were deprecated in Java 9 and removed from the JDK in Java 11, and browsers dropped the plugin — but BCA papers still ask lifecycle, HTML tag, graphics, images, and sound. Be historically accurate: they are obsolete in industry, examinable in this course.",
      "एप्लेट छोटा जावा प्रोग्राम है जो ब्राउज़र या applet viewer में सुरक्षा सैंडबॉक्स के तहत चलता है, कमांड-लाइन main() से नहीं। java.applet.Applet Panel (AWT) extend करता है। एप्लेट Java 9 में डिप्रिकेटेड, Java 11 में JDK से हटाए गए, ब्राउज़र प्लगइन गए — पर BCA पेपर अभी भी जीवनचक्र, HTML टैग, ग्राफ़िक्स, इमेज और साउंड पूछते हैं। ऐतिहासिक रूप से सटीक रहें: उद्योग में अप्रचलित, इस पाठ्यक्रम में परीक्षा योग्य।",
      "Applet chhota Java program hai jo browser ya applet viewer mein security sandbox ke under chalta hai, command-line main() se nahi. java.applet.Applet Panel (AWT) extend karta hai. Applets Java 9 mein deprecated, Java 11 mein JDK se hataye, browsers plugin chhod chuke — par BCA papers abhi bhi lifecycle, HTML tag, graphics, images aur sound poochhte hain. Historically accurate raho: industry mein obsolete, is course mein examinable.",
    ),
    OL([
      [
        "init() — once, after construction: allocate, load images, read parameters via getParameter.",
        "init() — एक बार, निर्माण के बाद: आवंटन, इमेज लोड, getParameter से पैरामीटर।",
        "init() — ek baar, construction ke baad: allocate, images load, getParameter se parameters.",
      ],
      [
        "start() — every time the applet becomes visible (page shown, tab restored). Start threads here.",
        "start() — जब भी एप्लेट दिखाई दे (पेज, टैब)। थ्रेड यहाँ शुरू करें।",
        "start() — jab bhi applet visible ho (page, tab). Threads yahan start karo.",
      ],
      [
        "paint(Graphics g) — called by the AWT thread on expose/resize/repaint(); draw with g.drawString, drawLine, drawImage.",
        "paint(Graphics g) — expose/resize/repaint() पर AWT थ्रेड चलाता है; g.drawString, drawLine, drawImage से चित्र।",
        "paint(Graphics g) — expose/resize/repaint() par AWT thread chalta hai; g.drawString, drawLine, drawImage se draw.",
      ],
      [
        "stop() — applet hidden; pause threads/animation so they do not burn CPU in the background.",
        "stop() — एप्लेट छिपा; थ्रेड/एनिमेशन रोकें ताकि पृष्ठभूमि में CPU न जले।",
        "stop() — applet chhupa; threads/animation roko taaki background mein CPU na jale.",
      ],
      [
        "destroy() — once, unloading: release resources. destroy is not a substitute for stop.",
        "destroy() — एक बार, अनलोड: रिसोर्स मुक्त। destroy, stop का विकल्प नहीं।",
        "destroy() — ek baar, unload: resources free. destroy, stop ka substitute nahi.",
      ],
    ]),
    UL([
      [
        "HTML (legacy): <applet code=\"Hi.class\" width=\"300\" height=\"150\"></applet> or later <object>. PARAM tags feed getParameter(\"key\").",
        "HTML (लेगेसी): <applet code=\"Hi.class\" width=\"300\" height=\"150\"></applet> या बाद में <object>। PARAM टैग getParameter(\"key\") को देते हैं।",
        "HTML (legacy): <applet code=\"Hi.class\" width=\"300\" height=\"150\"></applet> ya baad mein <object>. PARAM tags getParameter(\"key\") ko dete hain.",
      ],
      [
        "Images: Image img = getImage(getDocumentBase(), \"a.gif\"); g.drawImage(img, x, y, this); MediaTracker to wait for load.",
        "इमेज: Image img = getImage(getDocumentBase(), \"a.gif\"); g.drawImage(img, x, y, this); लोड प्रतीक्षा के लिए MediaTracker।",
        "Images: Image img = getImage(getDocumentBase(), \"a.gif\"); g.drawImage(img, x, y, this); load wait ke liye MediaTracker.",
      ],
      [
        "Sound: play(getDocumentBase(), \"beep.au\") or AudioClip clip = getAudioClip(...); clip.loop(); clip.stop();",
        "साउंड: play(getDocumentBase(), \"beep.au\") या AudioClip clip = getAudioClip(...); clip.loop(); clip.stop();",
        "Sound: play(getDocumentBase(), \"beep.au\") ya AudioClip clip = getAudioClip(...); clip.loop(); clip.stop();",
      ],
      [
        "No main() as the entry; do not rely on a constructor for initialisation — use init(). Applets cannot read local files freely (sandbox).",
        "एंट्री के रूप में main() नहीं; आरंभ के लिए कंस्ट्रक्टर पर निर्भर न हों — init() उपयोग करें। एप्लेट स्थानीय फ़ाइलें स्वतंत्रता से नहीं पढ़ सकते (सैंडबॉक्स)।",
        "Entry ke roop mein main() nahi; init ke liye constructor par depend mat karo — init() use karo. Applets local files freely nahi padh sakte (sandbox).",
      ],
    ]),
    NOTE(
      "update(Graphics) clears the background then calls paint; override update to reduce flicker in animation, or use double buffering. repaint() requests paint asynchronously; never call paint() directly from application code.",
      "update(Graphics) पृष्ठभूमि साफ कर paint चलाता है; एनिमेशन फ्लिकर घटाने के लिए update ओवरराइड करें, या डबल बफ़रिंग। repaint() असिंक्रोनस paint माँगता है; एप्लिकेशन कोड से paint() सीधे न चलाएँ।",
      "update(Graphics) background saaf karke paint chalta hai; animation flicker kam karne ke liye update override karo, ya double buffering. repaint() asynchronous paint maangta hai; application code se paint() seedha mat chalao.",
    ),
    EXAM(
      "Write the five lifecycle methods in order with one line each. Sketch an applet that drawString a message. Mention getImage/getAudioClip. State that applets are removed from modern JDK but required here.",
      "पाँच जीवनचक्र मेथड क्रम से एक पंक्ति में लिखें। drawString संदेश वाला एप्लेट स्केच करें। getImage/getAudioClip उल्लेख। आधुनिक JDK से हटे पर यहाँ आवश्यक।",
      "Paanch lifecycle methods order se ek line mein likho. drawString message wala applet sketch karo. getImage/getAudioClip mention. Modern JDK se hate par yahan zaroori.",
    ),
  ]),

  "java-awt": topic("java-awt", [
    H(
      "Abstract Window Toolkit",
      "Abstract Window Toolkit",
      "Abstract Window Toolkit",
    ),
    P(
      "java.awt is Java's original GUI toolkit. Components are heavyweight: each is tied to a native peer (OS widget), so look-and-feel follows the host. Swing (javax.swing, names starting with J) is lightweight, drawn by Java, pluggable look-and-feel — one-liner contrast for exams: AWT uses native peers; Swing paints in Java and sits on a few AWT top-level windows.",
      "java.awt जावा का मूल GUI टूलकिट है। कंपोनेंट हेवीवेट हैं: प्रत्येक नेटिव पीयर (OS विजेट) से बंधा, लुक-एंड-फ़ील होस्ट जैसा। Swing (javax.swing, J से नाम) लाइटवेट है, जावा से पेंट, प्लगेबल लुक-एंड-फ़ील — परीक्षा एक-पंक्ति: AWT नेटिव पीयर; Swing जावा में पेंट करता है और कुछ AWT टॉप-लेवल विंडो पर बैठता है।",
      "java.awt Java ka original GUI toolkit hai. Components heavyweight hain: har ek native peer (OS widget) se bandha, look-and-feel host jaisa. Swing (javax.swing, J se naam) lightweight hai, Java se paint, pluggable look-and-feel — exam one-liner: AWT native peers; Swing Java mein paint karta hai aur kuch AWT top-level windows par baithta hai.",
    ),
    TBL(
      [
        ["Kind", "प्रकार", "Kind"],
        ["AWT types (memorise)", "AWT टाइप (याद करें)", "AWT types (yaad karo)"],
      ],
      [
        [
          ["Controls", "कंट्रोल", "Controls"],
          [
            "Label, Button, Checkbox, CheckboxGroup (radio), Choice, List, Scrollbar, TextField, TextArea.",
            "Label, Button, Checkbox, CheckboxGroup (रेडियो), Choice, List, Scrollbar, TextField, TextArea।",
            "Label, Button, Checkbox, CheckboxGroup (radio), Choice, List, Scrollbar, TextField, TextArea.",
          ],
        ],
        [
          ["Containers", "कंटेनर", "Containers"],
          [
            "Component → Container → Panel, Window → Frame, Dialog. Applet extends Panel. Frame is a top-level window with title and border.",
            "Component → Container → Panel, Window → Frame, Dialog। Applet Panel extend करता है। Frame शीर्षक और बॉर्डर वाली टॉप-लेवल विंडो।",
            "Component → Container → Panel, Window → Frame, Dialog. Applet Panel extend karta hai. Frame title aur border wali top-level window.",
          ],
        ],
        [
          ["Layout managers", "लेआउट मैनेजर", "Layout managers"],
          [
            "FlowLayout (default Panel/applet), BorderLayout (default Frame: N/S/E/W/Center), GridLayout, CardLayout, GridBagLayout, null (absolute).",
            "FlowLayout (डिफ़ॉल्ट Panel/एप्लेट), BorderLayout (डिफ़ॉल्ट Frame: N/S/E/W/Center), GridLayout, CardLayout, GridBagLayout, null (निरपेक्ष)।",
            "FlowLayout (default Panel/applet), BorderLayout (default Frame: N/S/E/W/Center), GridLayout, CardLayout, GridBagLayout, null (absolute).",
          ],
        ],
        [
          ["Graphics", "ग्राफ़िक्स", "Graphics"],
          [
            "paint(Graphics g): drawString, drawLine, drawRect, fillOval, setColor, setFont. Color, Font, FontMetrics, Image.",
            "paint(Graphics g): drawString, drawLine, drawRect, fillOval, setColor, setFont। Color, Font, FontMetrics, Image।",
            "paint(Graphics g): drawString, drawLine, drawRect, fillOval, setColor, setFont. Color, Font, FontMetrics, Image.",
          ],
        ],
      ],
    ),
    UL([
      [
        "Frame f = new Frame(\"Title\"); f.setSize(300,200); f.setLayout(new FlowLayout()); f.add(new Button(\"OK\")); f.setVisible(true); — closing a Frame needs a WindowListener; otherwise the window hides but the JVM may keep running.",
        "Frame f = new Frame(\"Title\"); f.setSize(300,200); f.setLayout(new FlowLayout()); f.add(new Button(\"OK\")); f.setVisible(true); — Frame बंद करने के लिए WindowListener; वरना विंडो छिपे पर JVM चलता रह सकता है।",
        "Frame f = new Frame(\"Title\"); f.setSize(300,200); f.setLayout(new FlowLayout()); f.add(new Button(\"OK\")); f.setVisible(true); — Frame band karne ke liye WindowListener; warna window chhipe par JVM chalta reh sakta hai.",
      ],
      [
        "add(comp) / add(comp, BorderLayout.NORTH). setLayout, setEnabled, setFont, setBackground.",
        "add(comp) / add(comp, BorderLayout.NORTH)। setLayout, setEnabled, setFont, setBackground।",
        "add(comp) / add(comp, BorderLayout.NORTH). setLayout, setEnabled, setFont, setBackground.",
      ],
    ]),
    EXAM(
      "Hierarchy Component–Container–Panel/Window/Frame. Default layouts of Panel vs Frame. AWT vs Swing one-liner. List eight AWT controls. Write a Frame with BorderLayout adding a Button in the South.",
      "पदानुक्रम Component–Container–Panel/Window/Frame। Panel बनाम Frame के डिफ़ॉल्ट लेआउट। AWT बनाम Swing एक-पंक्ति। आठ AWT कंट्रोल। South में Button वाला BorderLayout Frame लिखें।",
      "Hierarchy Component–Container–Panel/Window/Frame. Panel vs Frame ke default layouts. AWT vs Swing one-liner. Aath AWT controls. South mein Button wala BorderLayout Frame likho.",
    ),
  ]),

  "java-delegation": topic("java-delegation", [
    H(
      "Delegation event model pieces",
      "डेलीगेशन इवेंट मॉडल के भाग",
      "Delegation event model ke hissa",
    ),
    P(
      "Three players: (1) Event source — the component that originates the event (Button, TextField, Frame). (2) Event object — a java.awt.event.* instance carrying details (getSource(), getActionCommand(), coordinates). (3) Event listener — an object whose class implements a listener interface; registered with addXxxListener. The source delegates handling to the listener instead of forcing you to subclass the widget.",
      "तीन खिलाड़ी: (1) इवेंट सोर्स — इवेंट उत्पन्न करने वाला कंपोनेंट (Button, TextField, Frame)। (2) इवेंट ऑब्जेक्ट — विवरण लेकर java.awt.event.* इंस्टेंस (getSource(), getActionCommand(), निर्देशांक)। (3) इवेंट लिसनर — लिसनर इंटरफ़ेस लागू क्लास का ऑब्जेक्ट; addXxxListener से पंजीकृत। सोर्स हैंडलिंग लिसनर को सौंपता है, विजेट सबक्लास करने को मजबूर नहीं।",
      "Teen players: (1) Event source — event paida karne wala component (Button, TextField, Frame). (2) Event object — details lekar java.awt.event.* instance (getSource(), getActionCommand(), coordinates). (3) Event listener — listener interface implement karti class ka object; addXxxListener se register. Source handling listener ko saunpta hai, widget subclass karne ko majboor nahi.",
    ),
    TBL(
      [
        ["Source (examples)", "सोर्स (उदाहरण)", "Source (udaharan)"],
        ["Event class", "इवेंट क्लास", "Event class"],
        ["Listener / registration", "लिसनर / पंजीकरण", "Listener / registration"],
      ],
      [
        [
          ["Button, MenuItem, TextField (Enter)", "Button, MenuItem, TextField (Enter)", "Button, MenuItem, TextField (Enter)"],
          ["ActionEvent", "ActionEvent", "ActionEvent"],
          ["ActionListener / addActionListener", "ActionListener / addActionListener", "ActionListener / addActionListener"],
        ],
        [
          ["Frame, Dialog, Window", "Frame, Dialog, Window", "Frame, Dialog, Window"],
          ["WindowEvent", "WindowEvent", "WindowEvent"],
          ["WindowListener / addWindowListener", "WindowListener / addWindowListener", "WindowListener / addWindowListener"],
        ],
        [
          ["Checkbox, Choice, List, CheckboxMenuItem", "Checkbox, Choice, List, CheckboxMenuItem", "Checkbox, Choice, List, CheckboxMenuItem"],
          ["ItemEvent", "ItemEvent", "ItemEvent"],
          ["ItemListener / addItemListener", "ItemListener / addItemListener", "ItemListener / addItemListener"],
        ],
        [
          ["Scrollbar, ScrollPane Adjustable", "Scrollbar, ScrollPane Adjustable", "Scrollbar, ScrollPane Adjustable"],
          ["AdjustmentEvent", "AdjustmentEvent", "AdjustmentEvent"],
          ["AdjustmentListener / addAdjustmentListener", "AdjustmentListener / addAdjustmentListener", "AdjustmentListener / addAdjustmentListener"],
        ],
        [
          ["TextField, TextArea", "TextField, TextArea", "TextField, TextArea"],
          ["TextEvent", "TextEvent", "TextEvent"],
          ["TextListener / addTextListener", "TextListener / addTextListener", "TextListener / addTextListener"],
        ],
        [
          ["Component (focus)", "Component (फ़ोकस)", "Component (focus)"],
          ["FocusEvent", "FocusEvent", "FocusEvent"],
          ["FocusListener / addFocusListener", "FocusListener / addFocusListener", "FocusListener / addFocusListener"],
        ],
      ],
    ),
    C(
      "java",
      [
        "import java.awt.*;",
        "import java.awt.event.*;",
        "class ActDemo extends Frame implements ActionListener {",
        "  Button b;",
        "  Label lab;",
        "  ActDemo() {",
        "    super(\"delegation\");",
        "    setLayout(new FlowLayout());",
        "    b = new Button(\"Click\");",
        "    lab = new Label(\"waiting\");",
        "    b.addActionListener(this); // register",
        "    add(b); add(lab);",
        "    setSize(280, 120);",
        "    setVisible(true);",
        "  }",
        "  public void actionPerformed(ActionEvent e) {",
        "    lab.setText(\"src=\" + e.getActionCommand());",
        "  }",
        "  public static void main(String[] args) {",
        "    new ActDemo();",
        "  }",
        "}",
      ].join("\n"),
      [
        "A Frame that is its own ActionListener: source Button, event ActionEvent, method actionPerformed.",
        "Frame स्वयं ActionListener: सोर्स Button, इवेंट ActionEvent, मेथड actionPerformed।",
        "Frame khud ActionListener: source Button, event ActionEvent, method actionPerformed.",
      ],
    ),
    EXAM(
      "Explain source, listener, event object. Table of at least five event/listener pairs. Write a Button + ActionListener program. Registration method names follow addXxxListener.",
      "सोर्स, लिसनर, इवेंट ऑब्जेक्ट समझाएँ। कम से कम पाँच इवेंट/लिसनर युग्म तालिका। Button + ActionListener प्रोग्राम लिखें। पंजीकरण नाम addXxxListener।",
      "Source, listener, event object samjhao. Kam se kam paanch event/listener pairs table. Button + ActionListener program likho. Registration names addXxxListener.",
    ),
  ]),

  "java-mouse-key": topic("java-mouse-key", [
    H(
      "Mouse and keyboard listener methods",
      "माउस और कीबोर्ड लिसनर मेथड",
      "Mouse aur keyboard listener methods",
    ),
    TBL(
      [
        ["Interface", "इंटरफ़ेस", "Interface"],
        ["Methods you must implement", "मेथड जो लागू करने होंगे", "Methods jo implement karne honge"],
      ],
      [
        [
          ["MouseListener", "MouseListener", "MouseListener"],
          [
            "mouseClicked, mousePressed, mouseReleased, mouseEntered, mouseExited",
            "mouseClicked, mousePressed, mouseReleased, mouseEntered, mouseExited",
            "mouseClicked, mousePressed, mouseReleased, mouseEntered, mouseExited",
          ],
        ],
        [
          ["MouseMotionListener", "MouseMotionListener", "MouseMotionListener"],
          [
            "mouseMoved, mouseDragged",
            "mouseMoved, mouseDragged",
            "mouseMoved, mouseDragged",
          ],
        ],
        [
          ["KeyListener", "KeyListener", "KeyListener"],
          [
            "keyPressed, keyReleased, keyTyped (character keys; use getKeyChar / getKeyCode)",
            "keyPressed, keyReleased, keyTyped (वर्ण कुंजी; getKeyChar / getKeyCode)",
            "keyPressed, keyReleased, keyTyped (character keys; getKeyChar / getKeyCode)",
          ],
        ],
        [
          ["WindowListener (7 methods)", "WindowListener (7 मेथड)", "WindowListener (7 methods)"],
          [
            "windowOpened, windowClosing, windowClosed, windowIconified, windowDeiconified, windowActivated, windowDeactivated",
            "windowOpened, windowClosing, windowClosed, windowIconified, windowDeiconified, windowActivated, windowDeactivated",
            "windowOpened, windowClosing, windowClosed, windowIconified, windowDeiconified, windowActivated, windowDeactivated",
          ],
        ],
      ],
    ),
    H(
      "Adapter classes",
      "एडॉप्टर क्लास",
      "Adapter classes",
    ),
    P(
      "Listener interfaces often declare many methods. If a class implements WindowListener just to handle windowClosing, it must still stub the other six. An adapter (MouseAdapter, MouseMotionAdapter, KeyAdapter, WindowAdapter, FocusAdapter, ComponentAdapter, ContainerAdapter) is a class with empty bodies for every method of the matching listener. You extend the adapter and override only what you need. Adapters cannot help when you already extend Frame — use an inner/anonymous adapter instead, or a separate listener class.",
      "लिसनर इंटरफ़ेस अक्सर कई मेथड घोषित करते हैं। यदि क्लास केवल windowClosing के लिए WindowListener लागू करे, तो अन्य छह खाली लिखने पड़ते हैं। एडॉप्टर (MouseAdapter, MouseMotionAdapter, KeyAdapter, WindowAdapter, FocusAdapter, ComponentAdapter, ContainerAdapter) मेल खाते लिसनर के हर मेथड की खाली बॉडी वाली क्लास है। एडॉप्टर extend कर केवल आवश्यक ओवरराइड करें। जब आप पहले से Frame extend करते हैं तो एडॉप्टर मदद नहीं — आंतरिक/अनाम एडॉप्टर या अलग लिसनर क्लास उपयोग करें।",
      "Listener interfaces aksar kai methods declare karte hain. Agar class sirf windowClosing ke liye WindowListener implement kare, to baaki chhah stub likhne padte hain. Adapter (MouseAdapter, MouseMotionAdapter, KeyAdapter, WindowAdapter, FocusAdapter, ComponentAdapter, ContainerAdapter) matching listener ke har method ki empty body wali class hai. Adapter extend karke sirf zaroori override karo. Jab aap pehle se Frame extend karte ho to adapter madad nahi — inner/anonymous adapter ya alag listener class use karo.",
    ),
    C(
      "java",
      [
        "import java.awt.*;",
        "import java.awt.event.*;",
        "class MKDemo extends Frame {",
        "  MKDemo() {",
        "    super(\"mouse-key\");",
        "    setSize(300, 200);",
        "    addMouseListener(new MouseAdapter() {",
        "      public void mouseClicked(MouseEvent e) {",
        "        setTitle(\"click \" + e.getX() + \",\" + e.getY());",
        "      }",
        "    });",
        "    addKeyListener(new KeyAdapter() {",
        "      public void keyTyped(KeyEvent e) {",
        "        setTitle(\"char \" + e.getKeyChar());",
        "      }",
        "    });",
        "    addWindowListener(new WindowAdapter() {",
        "      public void windowClosing(WindowEvent e) {",
        "        dispose();",
        "        System.exit(0);",
        "      }",
        "    });",
        "    setVisible(true);",
        "  }",
        "  public static void main(String[] args) {",
        "    new MKDemo();",
        "  }",
        "}",
      ].join("\n"),
      [
        "Anonymous MouseAdapter, KeyAdapter, and WindowAdapter on a Frame — override only the methods you need.",
        "Frame पर अनाम MouseAdapter, KeyAdapter और WindowAdapter — केवल आवश्यक मेथड ओवरराइड।",
        "Frame par anonymous MouseAdapter, KeyAdapter aur WindowAdapter — sirf zaroori methods override.",
      ],
    ),
    EXAM(
      "List MouseListener vs MouseMotionListener methods. Why adapters exist. Write windowClosing via WindowAdapter so the Frame actually exits. MouseEvent: getX, getY, getClickCount, getButton.",
      "MouseListener बनाम MouseMotionListener मेथड सूची। एडॉप्टर क्यों। WindowAdapter से windowClosing लिखें ताकि Frame वास्तव में निकले। MouseEvent: getX, getY, getClickCount, getButton।",
      "MouseListener vs MouseMotionListener methods list. Adapter kyun. WindowAdapter se windowClosing likho taaki Frame actually exit ho. MouseEvent: getX, getY, getClickCount, getButton.",
    ),
  ]),
};

export const javaQuestions: QuizQuestion[] = [
  Q(
    "q-java-genesis",
    "java-genesis",
    [
      "Who designed the Java language, and what was its original name before 1995?",
      "जावा भाषा किसने डिज़ाइन की, और 1995 से पहले इसका मूल नाम क्या था?",
      "Java language kisne design ki, aur 1995 se pehle uska original naam kya tha?",
    ],
    [
      [
        "James Gosling; the language was first named Oak.",
        "जेम्स गॉसलिंग; भाषा का पहला नाम Oak था।",
        "James Gosling; language ka pehla naam Oak tha.",
      ],
      [
        "Bill Gates; the language was first named C#.",
        "बिल गेट्स; भाषा का पहला नाम C# था।",
        "Bill Gates; language ka pehla naam C# tha.",
      ],
      [
        "Bjarne Stroustrup; the language was first named Green.",
        "ब्यार्न स्ट्रॉस्ट्रप; भाषा का पहला नाम Green था।",
        "Bjarne Stroustrup; language ka pehla naam Green tha.",
      ],
      [
        "Oracle Corporation; the language was first named HotJava.",
        "Oracle Corporation; भाषा का पहला नाम HotJava था।",
        "Oracle Corporation; language ka pehla naam HotJava tha.",
      ],
    ],
    0,
    [
      "James Gosling at Sun Microsystems led the language design. Project Green produced Oak (1991); the public name Java appeared in 1995. HotJava was a browser, not the language.",
      "सन माइक्रोसिस्टम्स में जेम्स गॉसलिंग ने भाषा डिज़ाइन का नेतृत्व किया। प्रोजेक्ट ग्रीन ने Oak (1991) दिया; सार्वजनिक नाम Java 1995 में आया। HotJava ब्राउज़र था, भाषा नहीं।",
      "Sun Microsystems mein James Gosling ne language design lead kiya. Project Green ne Oak (1991) diya; public naam Java 1995 mein aaya. HotJava browser tha, language nahi.",
    ],
  ),
  Q(
    "q-java-jvm-jdk",
    "java-jvm-jdk",
    [
      "Which statement correctly nests JDK, JRE, and JVM?",
      "कौन सा कथन JDK, JRE और JVM को सही नेस्ट करता है?",
      "Kaun sa statement JDK, JRE aur JVM ko sahi nest karta hai?",
    ],
    [
      [
        "JDK contains JRE; JRE contains the JVM plus class libraries.",
        "JDK में JRE है; JRE में JVM और क्लास लाइब्रेरी हैं।",
        "JDK mein JRE hai; JRE mein JVM plus class libraries hain.",
      ],
      [
        "JVM contains the JDK; the JDK contains only javac.",
        "JVM में JDK है; JDK में केवल javac है।",
        "JVM mein JDK hai; JDK mein sirf javac hai.",
      ],
      [
        "JRE contains the JDK; the JVM is a synonym for javac.",
        "JRE में JDK है; JVM, javac का पर्याय है।",
        "JRE mein JDK hai; JVM, javac ka paryay hai.",
      ],
      [
        "Bytecode runs directly on the CPU; the JVM is optional if you have a JRE.",
        "बाइटकोड सीधे CPU पर चलता है; JRE हो तो JVM वैकल्पिक है।",
        "Bytecode seedha CPU par chalta hai; JRE ho to JVM optional hai.",
      ],
    ],
    0,
    [
      "JDK ⊃ JRE ⊃ JVM. javac lives in the JDK. Bytecode is executed by the JVM, never directly by the CPU. The JRE is the JVM plus libraries.",
      "JDK ⊃ JRE ⊃ JVM। javac JDK में है। बाइटकोड JVM चलाता है, CPU सीधे नहीं। JRE = JVM + लाइब्रेरी।",
      "JDK ⊃ JRE ⊃ JVM. javac JDK mein hai. Bytecode JVM chalta hai, CPU seedha nahi. JRE = JVM + libraries.",
    ],
  ),
  Q(
    "q-java-files",
    "java-files",
    [
      "If a file contains public class HelloWorld, which compile-and-run pair is correct?",
      "यदि फ़ाइल में public class HelloWorld है, तो कौन सा कंपाइल-और-रन युग्म सही है?",
      "Agar file mein public class HelloWorld hai, to kaun sa compile-and-run pair sahi hai?",
    ],
    [
      [
        "File HelloWorld.java; javac HelloWorld.java; java HelloWorld",
        "फ़ाइल HelloWorld.java; javac HelloWorld.java; java HelloWorld",
        "File HelloWorld.java; javac HelloWorld.java; java HelloWorld",
      ],
      [
        "File helloworld.java; javac helloworld.java; java HelloWorld.class",
        "फ़ाइल helloworld.java; javac helloworld.java; java HelloWorld.class",
        "File helloworld.java; javac helloworld.java; java HelloWorld.class",
      ],
      [
        "File HelloWorld.java; java HelloWorld.java; javac HelloWorld",
        "फ़ाइल HelloWorld.java; java HelloWorld.java; javac HelloWorld",
        "File HelloWorld.java; java HelloWorld.java; javac HelloWorld",
      ],
      [
        "File HelloWorld.class; javac HelloWorld; java HelloWorld.java",
        "फ़ाइल HelloWorld.class; javac HelloWorld; java HelloWorld.java",
        "File HelloWorld.class; javac HelloWorld; java HelloWorld.java",
      ],
    ],
    0,
    [
      "The public class name must match the .java file (case-sensitive). javac produces .class; java takes the class name without .class or .java.",
      "public क्लास नाम .java फ़ाइल से मिलना चाहिए (केस-संवेदी)। javac .class बनाता है; java बिना .class या .java क्लास नाम लेता है।",
      "public class name .java file se match kare (case-sensitive). javac .class banata hai; java bina .class ya .java class name leta hai.",
    ],
  ),
  Q(
    "q-java-types",
    "java-types",
    [
      "Which of the following is a primitive type in Java?",
      "निम्न में से कौन जावा में प्रिमिटिव टाइप है?",
      "Nimn mein se kaun Java mein primitive type hai?",
    ],
    [
      ["String", "String", "String"],
      ["int", "int", "int"],
      ["Integer", "Integer", "Integer"],
      ["int[]", "int[]", "int[]"],
    ],
    1,
    [
      "int is one of the eight primitives. String and Integer are classes (reference types). Arrays are objects, so int[] is a reference type.",
      "int आठ प्रिमिटिव में से एक है। String और Integer क्लास (रेफ़रेंस) हैं। एरे ऑब्जेक्ट हैं, इसलिए int[] रेफ़रेंस टाइप है।",
      "int aath primitives mein se ek hai. String aur Integer classes (reference) hain. Arrays objects hain, isliye int[] reference type hai.",
    ],
  ),
  Q(
    "q-java-arrays",
    "java-arrays",
    [
      "How do you correctly read the number of elements in int[] a?",
      "int[] a में तत्वों की संख्या सही कैसे पढ़ें?",
      "int[] a mein elements ki sankhya sahi kaise padhein?",
    ],
    [
      ["a.length()", "a.length()", "a.length()"],
      ["a.size()", "a.size()", "a.size()"],
      ["a.length", "a.length", "a.length"],
      ["len(a)", "len(a)", "len(a)"],
    ],
    2,
    [
      "Array length is a public final field, not a method. length() belongs to String. size() belongs to collections. len() is Python.",
      "एरे length एक public final फ़ील्ड है, मेथड नहीं। length() String पर है। size() कलेक्शन्स पर। len() पाइथन है।",
      "Array length ek public final field hai, method nahi. length() String par hai. size() collections par. len() Python hai.",
    ],
  ),
  Q(
    "q-java-operators",
    "java-operators",
    [
      "After int i = 5; what does System.out.println(i++ + ++i); print?",
      "int i = 5; के बाद System.out.println(i++ + ++i); क्या छापता है?",
      "int i = 5; ke baad System.out.println(i++ + ++i); kya print karta hai?",
    ],
    [
      ["10", "10", "10"],
      ["11", "11", "11"],
      ["12", "12", "12"],
      ["13", "13", "13"],
    ],
    2,
    [
      "i++ yields 5 then i becomes 6; ++i then increments i to 7 and yields 7. 5 + 7 = 12. (Left operand is fully evaluated before the right.)",
      "i++ 5 देता है फिर i = 6; ++i फिर i को 7 कर 7 देता है। 5 + 7 = 12। (बायाँ ऑपरेंड दाएँ से पहले पूर्ण मूल्यांकित।)",
      "i++ 5 deta hai phir i = 6; ++i phir i ko 7 karke 7 deta hai. 5 + 7 = 12. (Left operand right se pehle fully evaluate hota hai.)",
    ],
  ),
  Q(
    "q-java-control",
    "java-control",
    [
      "A do-while loop whose condition is false on the first test executes the body how many times?",
      "do-while लूप जिसकी शर्त पहली जाँच पर false है, बॉडी कितनी बार चलाता है?",
      "do-while loop jiski condition pehli test par false hai, body kitni baar chalta hai?",
    ],
    [
      ["Zero times", "शून्य बार", "Zero baar"],
      ["Exactly once", "ठीक एक बार", "Theek ek baar"],
      ["Twice", "दो बार", "Do baar"],
      ["Until the JVM exits", "जब तक JVM न रुके", "Jab tak JVM na ruke"],
    ],
    1,
    [
      "do-while is post-test: the body runs, then the condition is checked. Even a false condition still yields one execution. while would run zero times.",
      "do-while पोस्ट-टेस्ट है: पहले बॉडी, फिर शर्त। false शर्त पर भी एक निष्पादन। while शून्य बार चलता।",
      "do-while post-test hai: pehle body, phir condition. False condition par bhi ek execution. while zero baar chalta.",
    ],
  ),
  Q(
    "q-java-oop",
    "java-oop",
    [
      "Why must a standalone application's entry point be declared public static void main(String[] args)?",
      "स्टैंडअलोन एप्लिकेशन का एंट्री पॉइंट public static void main(String[] args) क्यों होना चाहिए?",
      "Standalone application ka entry point public static void main(String[] args) kyun hona chahiye?",
    ],
    [
      [
        "static lets the JVM call main without an object; public makes it visible to the JVM; String[] receives command-line arguments.",
        "static JVM को बिना ऑब्जेक्ट main चलाने देता है; public JVM को दिखाई देता है; String[] कमांड-लाइन आर्ग्यूमेंट लेता है।",
        "static JVM ko bina object main chalane deta hai; public JVM ko visible hai; String[] command-line arguments leta hai.",
      ],
      [
        "main must be static because Java forbids instance methods in the main class.",
        "main static होना चाहिए क्योंकि जावा मेन क्लास में इंस्टेंस मेथड मना करता है।",
        "main static hona chahiye kyunki Java main class mein instance methods mana karta hai.",
      ],
      [
        "void is required so main can return the process exit code to the operating system.",
        "void इसलिए है ताकि main OS को प्रोसेस एग्जिट कोड लौटाए।",
        "void isliye hai taaki main OS ko process exit code lautaye.",
      ],
      [
        "The JVM only looks for main inside java.lang.Object.",
        "JVM केवल java.lang.Object के अंदर main ढूँढता है।",
        "JVM sirf java.lang.Object ke andar main dhoondhta hai.",
      ],
    ],
    0,
    [
      "The JVM invokes ClassName.main without constructing an instance, so main is static and public. Exit codes use System.exit, not main's return type. Instance methods are allowed in the same class.",
      "JVM बिना इंस्टेंस ClassName.main चलाता है, इसलिए main static और public है। एग्जिट कोड System.exit से, main के रिटर्न से नहीं। उसी क्लास में इंस्टेंस मेथड मान्य हैं।",
      "JVM bina instance ClassName.main chalta hai, isliye main static aur public hai. Exit codes System.exit se, main ke return se nahi. Usi class mein instance methods allowed hain.",
    ],
  ),
  Q(
    "q-java-packages-intro",
    "java-packages-intro",
    [
      "Which package is imported automatically into every Java source file?",
      "हर जावा सोर्स फ़ाइल में कौन सा पैकेज स्वतः इम्पोर्ट होता है?",
      "Har Java source file mein kaun sa package automatically import hota hai?",
    ],
    [
      ["java.util", "java.util", "java.util"],
      ["java.lang", "java.lang", "java.lang"],
      ["java.io", "java.io", "java.io"],
      ["java.awt", "java.awt", "java.awt"],
    ],
    1,
    [
      "java.lang (Object, String, Math, System, Thread, wrappers) is implicitly imported. util, io, and awt need explicit import or fully qualified names.",
      "java.lang (Object, String, Math, System, Thread, रैपर) अंतर्निहित इम्पोर्ट है। util, io और awt को स्पष्ट import या पूर्ण योग्य नाम चाहिए।",
      "java.lang (Object, String, Math, System, Thread, wrappers) implicit import hai. util, io aur awt ko explicit import ya fully qualified names chahiye.",
    ],
  ),
  Q(
    "q-java-nested",
    "java-nested",
    [
      "How do you create an instance of a non-static inner class Inner declared inside Outer?",
      "Outer के अंदर घोषित non-static इनर क्लास Inner का इंस्टेंस कैसे बनाएँ?",
      "Outer ke andar declare non-static inner class Inner ka instance kaise banayein?",
    ],
    [
      ["Inner i = new Inner();", "Inner i = new Inner();", "Inner i = new Inner();"],
      ["Outer.Inner i = new Outer.Inner();", "Outer.Inner i = new Outer.Inner();", "Outer.Inner i = new Outer.Inner();"],
      [
        "Outer o = new Outer(); Outer.Inner i = o.new Inner();",
        "Outer o = new Outer(); Outer.Inner i = o.new Inner();",
        "Outer o = new Outer(); Outer.Inner i = o.new Inner();",
      ],
      ["Inner i = Outer.new Inner();", "Inner i = Outer.new Inner();", "Inner i = Outer.new Inner();"],
    ],
    2,
    [
      "A non-static inner class needs an enclosing instance: outer.new Inner(). new Outer.Inner() is the form for a static nested class.",
      "non-static इनर क्लास को बाहरी इंस्टेंस चाहिए: outer.new Inner()। new Outer.Inner() static नेस्टेड क्लास का रूप है।",
      "non-static inner class ko enclosing instance chahiye: outer.new Inner(). new Outer.Inner() static nested class ka form hai.",
    ],
  ),
  Q(
    "q-java-strings",
    "java-strings",
    [
      "Which class is mutable and thread-safe for building strings?",
      "स्ट्रिंग बनाने के लिए कौन सी क्लास परिवर्तनीय और थ्रेड-सेफ है?",
      "Strings banane ke liye kaun si class mutable aur thread-safe hai?",
    ],
    [
      ["String", "String", "String"],
      ["StringBuilder", "StringBuilder", "StringBuilder"],
      ["StringBuffer", "StringBuffer", "StringBuffer"],
      ["StringTokenizer", "StringTokenizer", "StringTokenizer"],
    ],
    2,
    [
      "String is immutable. StringBuilder is mutable but not synchronized. StringBuffer is mutable and synchronized (thread-safe), slightly slower. StringTokenizer splits tokens; it is not a string builder.",
      "String immutable है। StringBuilder mutable पर synchronized नहीं। StringBuffer mutable और synchronized (थ्रेड-सेफ), थोड़ा धीमा। StringTokenizer टोकन बाँटता है, बिल्डर नहीं।",
      "String immutable hai. StringBuilder mutable par synchronized nahi. StringBuffer mutable aur synchronized (thread-safe), thoda slow. StringTokenizer tokens baantta hai, builder nahi.",
    ],
  ),
  Q(
    "q-java-constructors",
    "java-constructors",
    [
      "Which declaration is a legal constructor for class Box?",
      "क्लास Box के लिए कौन सी घोषणा वैध कंस्ट्रक्टर है?",
      "Class Box ke liye kaun si declaration valid constructor hai?",
    ],
    [
      ["void Box(int w) { }", "void Box(int w) { }", "void Box(int w) { }"],
      ["Box(int w) { this.w = w; }", "Box(int w) { this.w = w; }", "Box(int w) { this.w = w; }"],
      ["int Box() { return 0; }", "int Box() { return 0; }", "int Box() { return 0; }"],
      ["static Box() { }", "static Box() { }", "static Box() { }"],
    ],
    1,
    [
      "Constructors take the class name and have no return type (not even void). A return type makes an ordinary method. Constructors cannot be static.",
      "कंस्ट्रक्टर क्लास नाम लेते हैं और रिटर्न टाइप नहीं (void भी नहीं)। रिटर्न टाइप साधारण मेथड बनाता है। कंस्ट्रक्टर static नहीं।",
      "Constructors class name lete hain aur return type nahi (void bhi nahi). Return type ordinary method banata hai. Constructors static nahi.",
    ],
  ),
  Q(
    "q-java-inheritance",
    "java-inheritance",
    [
      "Why does Java forbid a class from extending two classes?",
      "जावा किसी क्लास को दो क्लास extend करने से क्यों रोकता है?",
      "Java kisi class ko do classes extend karne se kyun rokta hai?",
    ],
    [
      [
        "To avoid the diamond problem of ambiguous inherited members; multiple inheritance of type is provided via interfaces instead.",
        "अस्पष्ट इनहेरिटेड सदस्यों की डायमंड समस्या से बचने के लिए; टाइप की मल्टीपल इनहेरिटेंस इंटरफ़ेस से मिलती है।",
        "Ambiguous inherited members ki diamond problem se bachne ke liye; type ki multiple inheritance interfaces se milti hai.",
      ],
      [
        "Because the JVM can load only one .class superclass file.",
        "क्योंकि JVM केवल एक .class सुपरक्लास फ़ाइल लोड कर सकता है।",
        "Kyunki JVM sirf ek .class superclass file load kar sakta hai.",
      ],
      [
        "Because Object already uses both superclass slots.",
        "क्योंकि Object ने दोनों सुपरक्लास स्लॉट उपयोग कर लिए।",
        "Kyunki Object ne dono superclass slots use kar liye.",
      ],
      [
        "It does not forbid it; class C extends A, B is legal Java.",
        "यह मना नहीं करता; class C extends A, B वैध जावा है।",
        "Yeh mana nahi karta; class C extends A, B legal Java hai.",
      ],
    ],
    0,
    [
      "Single inheritance of classes avoids diamond ambiguity. A class may still implement many interfaces. class C extends A, B is a compile error.",
      "क्लास की सिंगल इनहेरिटेंस डायमंड अस्पष्टता बचाती है। क्लास फिर भी कई इंटरफ़ेस लागू कर सकती है। class C extends A, B कंपाइल त्रुटि है।",
      "Classes ki single inheritance diamond ambiguity bachati hai. Class phir bhi kai interfaces implement kar sakti hai. class C extends A, B compile error hai.",
    ],
  ),
  Q(
    "q-java-poly",
    "java-poly",
    [
      "Printer p = new ColorPrinter(); p.show(); calls ColorPrinter.show(). This is an example of:",
      "Printer p = new ColorPrinter(); p.show(); ColorPrinter.show() चलाता है। यह उदाहरण है:",
      "Printer p = new ColorPrinter(); p.show(); ColorPrinter.show() chalta hai. Yeh example hai:",
    ],
    [
      ["Method overloading (compile-time polymorphism)", "मेथड ओवरलोडिंग (कंपाइल-टाइम पॉलीमॉर्फिज़्म)", "Method overloading (compile-time polymorphism)"],
      ["Method overriding (runtime polymorphism / dynamic dispatch)", "मेथड ओवरराइडिंग (रनटाइम पॉलीमॉर्फिज़्म / डायनामिक डिस्पैच)", "Method overriding (runtime polymorphism / dynamic dispatch)"],
      ["Constructor chaining", "कंस्ट्रक्टर चेनिंग", "Constructor chaining"],
      ["Operator overloading", "ऑपरेटर ओवरलोडिंग", "Operator overloading"],
    ],
    1,
    [
      "The compile-time type is Printer but the JVM dispatches show() using the runtime type ColorPrinter — classic overriding. Overloading is chosen at compile time from the parameter list. Java has no operator overloading.",
      "कंपाइल-टाइम टाइप Printer है पर JVM रनटाइम टाइप ColorPrinter से show() डिस्पैच करता है — क्लासिक ओवरराइडिंग। ओवरलोडिंग पैरामीटर सूची से कंपाइल-टाइम चुनी जाती है। जावा में ऑपरेटर ओवरलोडिंग नहीं।",
      "Compile-time type Printer hai par JVM runtime type ColorPrinter se show() dispatch karta hai — classic overriding. Overloading parameter list se compile-time choose hoti hai. Java mein operator overloading nahi.",
    ],
  ),
  Q(
    "q-java-abstract-final",
    "java-abstract-final",
    [
      "Which combination is illegal in Java?",
      "जावा में कौन सा संयोजन अवैध है?",
      "Java mein kaun sa combination illegal hai?",
    ],
    [
      ["abstract class with a constructor", "कंस्ट्रक्टर वाली abstract क्लास", "constructor wali abstract class"],
      ["abstract class that also has a concrete method", "कंक्रीट मेथड वाली abstract क्लास", "concrete method wali abstract class"],
      ["final abstract class", "final abstract क्लास", "final abstract class"],
      ["final method inside a non-final class", "non-final क्लास के अंदर final मेथड", "non-final class ke andar final method"],
    ],
    2,
    [
      "abstract requires a subclass to complete the type; final forbids subclasses — the two modifiers contradict. Abstract classes may have constructors and concrete methods. final methods are legal in extensible classes.",
      "abstract को टाइप पूरा करने सबक्लास चाहिए; final सबक्लास मना करता है — दोनों मॉडिफ़ायर विरोधी। Abstract क्लास में कंस्ट्रक्टर और कंक्रीट मेथड हो सकते हैं। extensible क्लास में final मेथड वैध हैं।",
      "abstract ko type poora karne subclass chahiye; final subclasses mana karta hai — dono modifiers virodhi. Abstract class mein constructors aur concrete methods ho sakte hain. extensible class mein final methods legal hain.",
    ],
  ),
  Q(
    "q-java-ctor-multi",
    "java-ctor-multi",
    [
      "In class B extends A, if A defines only A(int x) and no A(), what must B's constructor do?",
      "class B extends A में, यदि A केवल A(int x) परिभाषित करे और A() न हो, तो B के कंस्ट्रक्टर को क्या करना चाहिए?",
      "class B extends A mein, agar A sirf A(int x) define kare aur A() na ho, to B ke constructor ko kya karna chahiye?",
    ],
    [
      [
        "Call super(int) as its first statement, because there is no implicit no-arg super().",
        "पहली स्टेटमेंट के रूप में super(int) चलाएँ, क्योंकि अंतर्निहित नो-आर्ग super() नहीं है।",
        "Pehli statement ke roop mein super(int) chalao, kyunki implicit no-arg super() nahi hai.",
      ],
      [
        "Nothing; Java always inserts super() even if A() does not exist.",
        "कुछ नहीं; A() न हो तब भी जावा हमेशा super() डालता है।",
        "Kuch nahi; A() na ho tab bhi Java hamesha super() daalta hai.",
      ],
      [
        "Call this() after printing a message, then the default A() runs.",
        "संदेश छापने के बाद this() चलाएँ, फिर डिफ़ॉल्ट A() चलता है।",
        "Message print ke baad this() chalao, phir default A() chalta hai.",
      ],
      [
        "Declare B as abstract; constructors cannot chain across levels.",
        "B को abstract घोषित करें; कंस्ट्रक्टर स्तरों के पार चेन नहीं कर सकते।",
        "B ko abstract declare karo; constructors levels ke paar chain nahi kar sakte.",
      ],
    ],
    0,
    [
      "The compiler inserts super() only when a no-arg superclass constructor exists. Otherwise the subclass must write super(args) first (or this() that eventually reaches such a super call).",
      "कंपाइलर super() तभी डालता है जब नो-आर्ग सुपरक्लास कंस्ट्रक्टर हो। वरना सबक्लास को पहले super(args) लिखना होगा (या this() जो अंततः ऐसे super तक पहुँचे)।",
      "Compiler super() tabhi daalta hai jab no-arg superclass constructor ho. Warna subclass ko pehle super(args) likhna hoga (ya this() jo aakhir mein aise super tak pahuche).",
    ],
  ),
  Q(
    "q-java-interfaces",
    "java-interfaces",
    [
      "In classic Java (pre-default methods), a field declared in an interface is implicitly:",
      "क्लासिक जावा (default मेथड से पहले) में इंटरफ़ेस में घोषित फ़ील्ड अंतर्निहित रूप से है:",
      "Classic Java (default methods se pehle) mein interface mein declare field implicit roop se hai:",
    ],
    [
      ["public static final", "public static final", "public static final"],
      ["protected instance", "protected इंस्टेंस", "protected instance"],
      ["private static", "private static", "private static"],
      ["package-private mutable", "package-private परिवर्तनीय", "package-private mutable"],
    ],
    0,
    [
      "Interface fields are constants: public static final, even if you write only int SIZE = 10. Classic methods are public abstract. Java 8 default/static methods are a later addition.",
      "इंटरफ़ेस फ़ील्ड कॉन्स्टेंट हैं: public static final, भले केवल int SIZE = 10 लिखें। क्लासिक मेथड public abstract। Java 8 default/static बाद का जोड़ है।",
      "Interface fields constants hain: public static final, chahe sirf int SIZE = 10 likho. Classic methods public abstract. Java 8 default/static baad ka addition hai.",
    ],
  ),
  Q(
    "q-java-nested-iface",
    "java-nested-iface",
    [
      "Which standard library type is the usual example of a nested interface?",
      "नेस्टेड इंटरफ़ेस का सामान्य स्टैंडर्ड लाइब्रेरी उदाहरण कौन सा टाइप है?",
      "Nested interface ka usual standard library example kaun sa type hai?",
    ],
    [
      ["java.lang.String.Case", "java.lang.String.Case", "java.lang.String.Case"],
      ["java.util.Map.Entry", "java.util.Map.Entry", "java.util.Map.Entry"],
      ["java.io.File.Path", "java.io.File.Path", "java.io.File.Path"],
      ["java.awt.Button.Click", "java.awt.Button.Click", "java.awt.Button.Click"],
    ],
    1,
    [
      "Map.Entry is nested in Map because an entry only exists in the context of a map. The other names are not real nested interfaces in the classic API.",
      "Map.Entry, Map में नेस्टेड है क्योंकि एंट्री केवल मैप के संदर्भ में है। अन्य नाम क्लासिक API में वास्तविक नेस्टेड इंटरफ़ेस नहीं।",
      "Map.Entry, Map mein nested hai kyunki entry sirf map ke context mein hai. Anya naam classic API mein asal nested interfaces nahi.",
    ],
  ),
  Q(
    "q-java-pkg-create",
    "java-pkg-create",
    [
      "Where must the package statement appear in a .java file?",
      ".java फ़ाइल में package स्टेटमेंट कहाँ होनी चाहिए?",
      ".java file mein package statement kahan honi chahiye?",
    ],
    [
      [
        "As the first statement (only comments and annotations may precede it).",
        "पहली स्टेटमेंट के रूप में (केवल कमेंट और एनोटेशन पहले आ सकते हैं)।",
        "Pehli statement ke roop mein (sirf comments aur annotations pehle aa sakte hain).",
      ],
      [
        "Immediately after the import statements.",
        "import स्टेटमेंट के ठीक बाद।",
        "import statements ke turant baad.",
      ],
      [
        "Inside the public class, as the first line of the body.",
        "public क्लास के अंदर, बॉडी की पहली पंक्ति।",
        "public class ke andar, body ki pehli line.",
      ],
      [
        "Anywhere, as long as it appears once.",
        "कहीं भी, बशर्ते एक बार आए।",
        "Kahin bhi, bas ek baar aaye.",
      ],
    ],
    0,
    [
      "package is the first non-comment, non-annotation statement. imports come after it. A package declaration inside a class is illegal.",
      "package पहली गैर-कमेंट, गैर-एनोटेशन स्टेटमेंट है। import उसके बाद। क्लास के अंदर package अवैध है।",
      "package pehli non-comment, non-annotation statement hai. import uske baad. Class ke andar package illegal hai.",
    ],
  ),
  Q(
    "q-java-access",
    "java-access",
    [
      "A protected method is visible to which extra group that a default (package-private) method is not?",
      "protected मेथड उस अतिरिक्त समूह को दिखाई देता है जिसे default (package-private) मेथड नहीं?",
      "protected method us extra group ko visible hai jise default (package-private) method nahi?",
    ],
    [
      [
        "Subclasses declared in a different package",
        "भिन्न पैकेज में घोषित सबक्लास",
        "Different package mein declare subclasses",
      ],
      [
        "Every class in the JVM, including other packages' unrelated classes",
        "JVM की हर क्लास, अन्य पैकेज की असंबंधित क्लास सहित",
        "JVM ki har class, anya packages ki unrelated classes shamil",
      ],
      [
        "Only the same class — protected is stricter than private",
        "केवल वही क्लास — protected, private से सख्त है",
        "Sirf same class — protected, private se sakht hai",
      ],
      [
        "No extra group; protected and default are synonyms",
        "कोई अतिरिक्त समूह नहीं; protected और default पर्याय हैं",
        "Koi extra group nahi; protected aur default paryay hain",
      ],
    ],
    0,
    [
      "Default = same package only. protected = same package plus subclasses (even in other packages). public is everyone; private is same class only.",
      "Default = केवल वही पैकेज। protected = वही पैकेज प्लस सबक्लास (अन्य पैकेज में भी)। public सब; private केवल वही क्लास।",
      "Default = sirf same package. protected = same package plus subclasses (doosre packages mein bhi). public sab; private sirf same class.",
    ],
  ),
  Q(
    "q-java-try-catch",
    "java-try-catch",
    [
      "Why must catch (ArithmeticException e) appear before catch (Exception e)?",
      "catch (ArithmeticException e) को catch (Exception e) से पहले क्यों आना चाहिए?",
      "catch (ArithmeticException e) ko catch (Exception e) se pehle kyun aana chahiye?",
    ],
    [
      [
        "The more specific catch must come first; otherwise the general catch makes the specific one unreachable and javac rejects it.",
        "अधिक विशिष्ट catch पहले आए; वरना सामान्य catch विशिष्ट को अनरीचेबल बना javac अस्वीकार करता है।",
        "Zyada specific catch pehle aaye; warna general catch specific ko unreachable bana javac reject karta hai.",
      ],
      [
        "ArithmeticException is checked, so it has to be listed first by language law.",
        "ArithmeticException checked है, इसलिए भाषा नियम से पहले सूचीबद्ध।",
        "ArithmeticException checked hai, isliye language rule se pehle list.",
      ],
      [
        "The JVM only looks at the first catch block and ignores the rest.",
        "JVM केवल पहला catch देखता है बाकी अनदेखा।",
        "JVM sirf pehla catch dekhta hai baaki ignore.",
      ],
      [
        "There is no such rule; order of catch blocks never matters.",
        "ऐसा कोई नियम नहीं; catch क्रम मायने नहीं रखता।",
        "Aisa koi rule nahi; catch order matter nahi karta.",
      ],
    ],
    0,
    [
      "Java matches catch clauses top-down. A superclass catch would swallow ArithmeticException before a later subclass catch could run, so that later catch is unreachable — a compile error.",
      "जावा catch को ऊपर से नीचे मिलाता है। सुपरक्लास catch ArithmeticException निगल लेगा इससे पहले कि बाद का सबक्लास catch चले, इसलिए बाद वाला अनरीचेबल — कंपाइल त्रुटि।",
      "Java catch clauses top-down match karta hai. Superclass catch ArithmeticException nigal lega usse pehle ki baad wala subclass catch chale, isliye baad wala unreachable — compile error.",
    ],
  ),
  Q(
    "q-java-throw-finally",
    "java-throw-finally",
    [
      "When does a finally block not execute after its try?",
      "try के बाद finally ब्लॉक कब नहीं चलता?",
      "try ke baad finally block kab nahi chalta?",
    ],
    [
      ["When try contains a return statement", "जब try में return हो", "Jab try mein return ho"],
      ["When a catch block handles the exception", "जब catch एक्सेप्शन सँभाले", "Jab catch exception sambhale"],
      [
        "When the JVM exits inside try (for example System.exit) or the machine is powered off",
        "जब try के अंदर JVM निकल जाए (उदाहरण System.exit) या मशीन बंद हो",
        "Jab try ke andar JVM nikal jaye (udaharana System.exit) ya machine band ho",
      ],
      ["When try throws a checked exception", "जब try checked एक्सेप्शन फेंके", "Jab try checked exception feke"],
    ],
    2,
    [
      "finally runs on return, break, continue, and after handled or unhandled exceptions — cleanup is the point. System.exit or killing the JVM skips it. Checked vs unchecked does not matter.",
      "finally return, break, continue, सँभाले या न सँभाले एक्सेप्शन पर चलता है — सफाई यही है। System.exit या JVM मारना इसे छोड़ता है। checked बनाम unchecked मायने नहीं।",
      "finally return, break, continue, handled ya unhandled exceptions par chalta hai — cleanup yahi hai. System.exit ya JVM maarna ise chhodta hai. checked vs unchecked matter nahi.",
    ],
  ),
  Q(
    "q-java-ex-types",
    "java-ex-types",
    [
      "Which exception is checked (the compiler requires catch or throws)?",
      "कौन सा एक्सेप्शन checked है (कंपाइलर catch या throws माँगता है)?",
      "Kaun sa exception checked hai (compiler catch ya throws maangta hai)?",
    ],
    [
      ["NullPointerException", "NullPointerException", "NullPointerException"],
      ["ArithmeticException", "ArithmeticException", "ArithmeticException"],
      ["IOException", "IOException", "IOException"],
      ["ArrayIndexOutOfBoundsException", "ArrayIndexOutOfBoundsException", "ArrayIndexOutOfBoundsException"],
    ],
    2,
    [
      "IOException extends Exception but not RuntimeException, so it is checked. The other three are RuntimeException subclasses (unchecked). Custom checked exceptions extend Exception directly.",
      "IOException, Exception extend करता है RuntimeException नहीं, इसलिए checked। अन्य तीन RuntimeException सबक्लास (unchecked)। कस्टम checked Exception को सीधे extend करते हैं।",
      "IOException Exception extend karta hai RuntimeException nahi, isliye checked. Anya teen RuntimeException subclasses (unchecked). Custom checked Exception ko seedha extend karte hain.",
    ],
  ),
  Q(
    "q-java-threads",
    "java-threads",
    [
      "What is the difference between calling start() and calling run() on a Thread?",
      "Thread पर start() और run() चलाने में क्या अंतर है?",
      "Thread par start() aur run() chalane mein kya antar hai?",
    ],
    [
      [
        "start() registers a new thread and later invokes run(); calling run() directly executes run() in the current thread.",
        "start() नया थ्रेड पंजीकृत कर बाद में run() चलाता है; सीधे run() वर्तमान थ्रेड में run() निष्पादित करता है।",
        "start() naya thread register karke baad mein run() chalta hai; seedha run() current thread mein run() execute karta hai.",
      ],
      [
        "run() starts the thread; start() only sets the name.",
        "run() थ्रेड शुरू करता है; start() केवल नाम सेट करता है।",
        "run() thread start karta hai; start() sirf naam set karta hai.",
      ],
      [
        "They are synonyms; both create a new call stack.",
        "वे पर्याय हैं; दोनों नया कॉल स्टैक बनाते हैं।",
        "Ve paryay hain; dono naya call stack banate hain.",
      ],
      [
        "start() is for extending Thread; run() is for Runnable only.",
        "start() Thread extend करने के लिए; run() केवल Runnable के लिए।",
        "start() Thread extend karne ke liye; run() sirf Runnable ke liye.",
      ],
    ],
    0,
    [
      "Only start() causes NEW → RUNNABLE and a separate stack. run() is an ordinary method. Both Thread subclasses and Runnable workers are launched with start() on a Thread object.",
      "केवल start() NEW → RUNNABLE और अलग स्टैक करता है। run() साधारण मेथड है। Thread सबक्लास और Runnable दोनों Thread ऑब्जेक्ट पर start() से शुरू होते हैं।",
      "Sirf start() NEW → RUNNABLE aur alag stack karta hai. run() ordinary method hai. Thread subclasses aur Runnable dono Thread object par start() se start hote hain.",
    ],
  ),
  Q(
    "q-java-sync",
    "java-sync",
    [
      "Thread.NORM_PRIORITY has which integer value?",
      "Thread.NORM_PRIORITY का पूर्णांक मान क्या है?",
      "Thread.NORM_PRIORITY ka integer value kya hai?",
    ],
    [
      ["0", "0", "0"],
      ["1", "1", "1"],
      ["5", "5", "5"],
      ["10", "10", "10"],
    ],
    2,
    [
      "Priorities run from MIN_PRIORITY 1 to MAX_PRIORITY 10. The default NORM_PRIORITY is 5. 0 is not a valid priority.",
      "प्राथमिकता MIN_PRIORITY 1 से MAX_PRIORITY 10। डिफ़ॉल्ट NORM_PRIORITY 5 है। 0 वैध प्राथमिकता नहीं।",
      "Priorities MIN_PRIORITY 1 se MAX_PRIORITY 10. Default NORM_PRIORITY 5 hai. 0 valid priority nahi.",
    ],
  ),
  Q(
    "q-java-itc",
    "java-itc",
    [
      "Which statement about wait() is correct?",
      "wait() के बारे में कौन सा कथन सही है?",
      "wait() ke baare mein kaun sa statement sahi hai?",
    ],
    [
      [
        "wait() is defined on Object, must be called in a synchronized context, and releases the monitor.",
        "wait() Object पर परिभाषित है, synchronized संदर्भ में चलना चाहिए, और मॉनिटर छोड़ता है।",
        "wait() Object par defined hai, synchronized context mein chalna chahiye, aur monitor chhodta hai.",
      ],
      [
        "wait() is a static method of Thread and keeps the lock like sleep().",
        "wait() Thread का static मेथड है और sleep() की तरह लॉक रखता है।",
        "wait() Thread ka static method hai aur sleep() ki tarah lock rakhta hai.",
      ],
      [
        "notify() belongs to Thread; wait() belongs to Runnable.",
        "notify() Thread पर है; wait() Runnable पर।",
        "notify() Thread par hai; wait() Runnable par.",
      ],
      [
        "Calling wait() without synchronized compiles but always deadlocks.",
        "बिना synchronized wait() कंपाइल होता है पर हमेशा डेडलॉक।",
        "Bina synchronized wait() compile hota hai par hamesha deadlock.",
      ],
    ],
    0,
    [
      "wait/notify/notifyAll are Object methods used for ITC. They throw IllegalMonitorStateException if the caller does not own the monitor. sleep() is Thread.sleep and does not release the lock.",
      "wait/notify/notifyAll ITC के लिए Object मेथड हैं। मॉनिटर न हो तो IllegalMonitorStateException। sleep() Thread.sleep है और लॉक नहीं छोड़ता।",
      "wait/notify/notifyAll ITC ke liye Object methods hain. Monitor na ho to IllegalMonitorStateException. sleep() Thread.sleep hai aur lock nahi chhodta.",
    ],
  ),
  Q(
    "q-java-io",
    "java-io",
    [
      "Which pair is a character stream (not a byte stream)?",
      "कौन सा युग्म कैरेक्टर स्ट्रीम है (बाइट स्ट्रीम नहीं)?",
      "Kaun sa pair character stream hai (byte stream nahi)?",
    ],
    [
      ["FileInputStream and FileOutputStream", "FileInputStream और FileOutputStream", "FileInputStream aur FileOutputStream"],
      ["FileReader and FileWriter", "FileReader और FileWriter", "FileReader aur FileWriter"],
      ["DataInputStream and DataOutputStream", "DataInputStream और DataOutputStream", "DataInputStream aur DataOutputStream"],
      ["ObjectInputStream and ObjectOutputStream", "ObjectInputStream और ObjectOutputStream", "ObjectInputStream aur ObjectOutputStream"],
    ],
    1,
    [
      "Reader/Writer families are 16-bit character streams. *InputStream/*OutputStream are 8-bit byte streams, including File, Data, and Object streams.",
      "Reader/Writer परिवार 16-बिट कैरेक्टर स्ट्रीम हैं। *InputStream/*OutputStream 8-बिट बाइट स्ट्रीम हैं, File, Data और Object सहित।",
      "Reader/Writer families 16-bit character streams hain. *InputStream/*OutputStream 8-bit byte streams hain, File, Data aur Object shamil.",
    ],
  ),
  Q(
    "q-java-console",
    "java-console",
    [
      "Scanner sc belongs to which package, and which method reads a full line including spaces?",
      "Scanner sc किस पैकेज का है, और कौन सा मेथड स्पेस सहित पूरी पंक्ति पढ़ता है?",
      "Scanner sc kis package ka hai, aur kaun sa method spaces sahit poori line padhta hai?",
    ],
    [
      ["java.io; next()", "java.io; next()", "java.io; next()"],
      ["java.lang; nextInt()", "java.lang; nextInt()", "java.lang; nextInt()"],
      ["java.util; nextLine()", "java.util; nextLine()", "java.util; nextLine()"],
      ["java.awt; readLine()", "java.awt; readLine()", "java.awt; readLine()"],
    ],
    2,
    [
      "Scanner is in java.util. nextLine() reads up to newline (spaces included). next() reads one whitespace-delimited token. readLine() is BufferedReader, in java.io.",
      "Scanner java.util में है। nextLine() न्यूलाइन तक (स्पेस सहित)। next() एक व्हाइटस्पेस-सीमित टोकन। readLine() BufferedReader है, java.io में।",
      "Scanner java.util mein hai. nextLine() newline tak (spaces sahit). next() ek whitespace-delimited token. readLine() BufferedReader hai, java.io mein.",
    ],
  ),
  Q(
    "q-java-lang",
    "java-lang",
    [
      "Which class is in java.lang (not java.util) and is the root of the class hierarchy?",
      "कौन सी क्लास java.lang में है (java.util में नहीं) और क्लास पदानुक्रम की जड़ है?",
      "Kaun si class java.lang mein hai (java.util mein nahi) aur class hierarchy ki root hai?",
    ],
    [
      ["ArrayList", "ArrayList", "ArrayList"],
      ["Object", "Object", "Object"],
      ["Scanner", "Scanner", "Scanner"],
      ["HashMap", "HashMap", "HashMap"],
    ],
    1,
    [
      "Object lives in java.lang and is the ultimate superclass. ArrayList, HashMap, and Scanner are java.util.",
      "Object java.lang में है और अंतिम सुपरक्लास है। ArrayList, HashMap और Scanner java.util हैं।",
      "Object java.lang mein hai aur ultimate superclass hai. ArrayList, HashMap aur Scanner java.util hain.",
    ],
  ),
  Q(
    "q-java-util",
    "java-util",
    [
      "Which collection allows duplicate elements and index-based access, and is not synchronized by default?",
      "कौन सा कलेक्शन डुप्लिकेट तत्व और इंडेक्स-आधारित एक्सेस देता है, और डिफ़ॉल्ट रूप से synchronized नहीं है?",
      "Kaun sa collection duplicate elements aur index-based access deta hai, aur default se synchronized nahi hai?",
    ],
    [
      ["HashSet", "HashSet", "HashSet"],
      ["ArrayList", "ArrayList", "ArrayList"],
      ["Hashtable", "Hashtable", "Hashtable"],
      ["TreeSet", "TreeSet", "TreeSet"],
    ],
    1,
    [
      "ArrayList is a List: ordered, duplicates allowed, get(i), unsynchronized. Vector/Hashtable are synchronized legacy. HashSet/TreeSet forbid duplicates and have no index get.",
      "ArrayList एक List है: क्रमित, डुप्लिकेट मान्य, get(i), unsynchronized। Vector/Hashtable synchronized लेगेसी। HashSet/TreeSet डुप्लिकेट मना, इंडेक्स get नहीं।",
      "ArrayList ek List hai: ordered, duplicates allowed, get(i), unsynchronized. Vector/Hashtable synchronized legacy. HashSet/TreeSet duplicates mana, index get nahi.",
    ],
  ),
  Q(
    "q-java-event-models",
    "java-event-models",
    [
      "The delegation event model (Java 1.1+) differs from the old inheritance model because:",
      "डेलीगेशन इवेंट मॉडल (Java 1.1+) पुराने इनहेरिटेंस मॉडल से भिन्न है क्योंकि:",
      "Delegation event model (Java 1.1+) purane inheritance model se bhinna hai kyunki:",
    ],
    [
      [
        "Events are sent only to registered listeners; unused events do not bubble through the container chain.",
        "इवेंट केवल पंजीकृत लिसनर को भेजे जाते हैं; अनुपयोगी इवेंट कंटेनर श्रृंखला में बबल नहीं होते।",
        "Events sirf registered listeners ko bheje jate hain; unused events container chain mein bubble nahi hote.",
      ],
      [
        "You must subclass Button to receive its ActionEvent.",
        "ActionEvent पाने के लिए Button सबक्लास करना आवश्यक है।",
        "ActionEvent pane ke liye Button subclass karna zaroori hai.",
      ],
      [
        "There is a single Event class with integer ids and handleEvent().",
        "integer id और handleEvent() वाली एक ही Event क्लास है।",
        "integer ids aur handleEvent() wali ek hi Event class hai.",
      ],
      [
        "The model works only for Swing, never for AWT.",
        "मॉडल केवल Swing के लिए, AWT के लिए कभी नहीं।",
        "Model sirf Swing ke liye, AWT ke liye kabhi nahi.",
      ],
    ],
    0,
    [
      "Delegation: source + typed event + listener list, no bubbling. Inheritance/1.0 used handleEvent and bubbling. AWT and Swing both use delegation. You need not subclass the widget.",
      "डेलीगेशन: सोर्स + टाइप्ड इवेंट + लिसनर सूची, बबलिंग नहीं। इनहेरिटेंस/1.0 ने handleEvent और बबलिंग उपयोग किए। AWT और Swing दोनों डेलीगेशन। विजेट सबक्लास आवश्यक नहीं।",
      "Delegation: source + typed event + listener list, bubbling nahi. Inheritance/1.0 ne handleEvent aur bubbling use kiye. AWT aur Swing dono delegation. Widget subclass zaroori nahi.",
    ],
  ),
  Q(
    "q-java-applets",
    "java-applets",
    [
      "Which is the correct applet lifecycle order?",
      "सही एप्लेट जीवनचक्र क्रम कौन सा है?",
      "Sahi applet lifecycle order kaun sa hai?",
    ],
    [
      ["start → init → paint → destroy → stop", "start → init → paint → destroy → stop", "start → init → paint → destroy → stop"],
      ["init → start → paint → stop → destroy", "init → start → paint → stop → destroy", "init → start → paint → stop → destroy"],
      ["main → init → run → stop", "main → init → run → stop", "main → init → run → stop"],
      ["paint → init → start → destroy", "paint → init → start → destroy", "paint → init → start → destroy"],
    ],
    1,
    [
      "init once, then start (and paint as needed), stop when hidden, start again if shown, destroy once at unload. Applets do not use main() as the browser entry. They are legacy (removed JDK 11) but still on this syllabus.",
      "init एक बार, फिर start (और आवश्यकता पर paint), छिपने पर stop, दिखने पर फिर start, अनलोड पर destroy एक बार। एप्लेट ब्राउज़र एंट्री के रूप में main() नहीं। लेगेसी (JDK 11 से हटे) पर इस पाठ्यक्रम में हैं।",
      "init ek baar, phir start (aur zaroorat par paint), chhipne par stop, dikhne par phir start, unload par destroy ek baar. Applets browser entry ke roop mein main() nahi. Legacy (JDK 11 se hate) par is syllabus mein hain.",
    ],
  ),
  Q(
    "q-java-awt",
    "java-awt",
    [
      "What is the default layout manager of an AWT Frame, and the one-line AWT vs Swing contrast?",
      "AWT Frame का डिफ़ॉल्ट लेआउट मैनेजर क्या है, और AWT बनाम Swing की एक-पंक्ति तुलना?",
      "AWT Frame ka default layout manager kya hai, aur AWT vs Swing ki one-line comparison?",
    ],
    [
      [
        "BorderLayout; AWT components use native peers, Swing components are lightweight (painted by Java).",
        "BorderLayout; AWT कंपोनेंट नेटिव पीयर उपयोग करते हैं, Swing कंपोनेंट लाइटवेट हैं (जावा से पेंट)।",
        "BorderLayout; AWT components native peers use karte hain, Swing components lightweight hain (Java se paint).",
      ],
      [
        "FlowLayout; Swing is native and AWT is lightweight.",
        "FlowLayout; Swing नेटिव है और AWT लाइटवेट।",
        "FlowLayout; Swing native hai aur AWT lightweight.",
      ],
      [
        "GridLayout; both AWT and Swing are identical toolkits.",
        "GridLayout; AWT और Swing समान टूलकिट हैं।",
        "GridLayout; AWT aur Swing identical toolkits hain.",
      ],
      [
        "null layout; Swing cannot display buttons.",
        "null लेआउट; Swing बटन नहीं दिखा सकता।",
        "null layout; Swing buttons nahi dikha sakta.",
      ],
    ],
    0,
    [
      "Frame/Dialog default to BorderLayout; Panel and Applet default to FlowLayout. AWT = heavyweight native peers; Swing (javax.swing, JButton...) = lightweight on an AWT backbone.",
      "Frame/Dialog का डिफ़ॉल्ट BorderLayout; Panel और Applet का FlowLayout। AWT = हेवीवेट नेटिव पीयर; Swing (javax.swing, JButton...) = AWT रीढ़ पर लाइटवेट।",
      "Frame/Dialog default BorderLayout; Panel aur Applet default FlowLayout. AWT = heavyweight native peers; Swing (javax.swing, JButton...) = AWT backbone par lightweight.",
    ],
  ),
  Q(
    "q-java-delegation",
    "java-delegation",
    [
      "Which listener / event pair handles a Button click in the delegation model?",
      "डेलीगेशन मॉडल में Button क्लिक कौन सा लिसनर / इवेंट युग्म सँभालता है?",
      "Delegation model mein Button click kaun sa listener / event pair sambhalta hai?",
    ],
    [
      ["MouseMotionListener and AdjustmentEvent", "MouseMotionListener और AdjustmentEvent", "MouseMotionListener aur AdjustmentEvent"],
      ["ActionListener and ActionEvent", "ActionListener और ActionEvent", "ActionListener aur ActionEvent"],
      ["TextListener and WindowEvent", "TextListener और WindowEvent", "TextListener aur WindowEvent"],
      ["AdjustmentListener and ItemEvent", "AdjustmentListener और ItemEvent", "AdjustmentListener aur ItemEvent"],
    ],
    1,
    [
      "Button.addActionListener; actionPerformed(ActionEvent e). ItemEvent is for checkbox/choice, AdjustmentEvent for scrollbar, WindowEvent for Frame, MouseMotion for moves/drags.",
      "Button.addActionListener; actionPerformed(ActionEvent e)। ItemEvent चेकबॉक्स/चॉइस, AdjustmentEvent स्क्रॉलबार, WindowEvent Frame, MouseMotion मूव/ड्रैग।",
      "Button.addActionListener; actionPerformed(ActionEvent e). ItemEvent checkbox/choice, AdjustmentEvent scrollbar, WindowEvent Frame, MouseMotion moves/drags.",
    ],
  ),
  Q(
    "q-java-mouse-key",
    "java-mouse-key",
    [
      "Why does Java provide adapter classes such as MouseAdapter and WindowAdapter?",
      "जावा MouseAdapter और WindowAdapter जैसी एडॉप्टर क्लास क्यों देता है?",
      "Java MouseAdapter aur WindowAdapter jaise adapter classes kyun deta hai?",
    ],
    [
      [
        "They supply empty implementations of every listener method so you override only the methods you need.",
        "वे हर लिसनर मेथड की खाली इम्प्लीमेंटेशन देते हैं ताकि आप केवल आवश्यक मेथड ओवरराइड करें।",
        "Ve har listener method ki empty implementation dete hain taaki aap sirf zaroori methods override karo.",
      ],
      [
        "They convert AWT events into Swing events automatically.",
        "वे AWT इवेंट को स्वतः Swing इवेंट में बदलते हैं।",
        "Ve AWT events ko automatically Swing events mein badalte hain.",
      ],
      [
        "They are required because listener interfaces cannot be implemented by inner classes.",
        "वे आवश्यक हैं क्योंकि इनर क्लास लिसनर इंटरफ़ेस लागू नहीं कर सकतीं।",
        "Ve zaroori hain kyunki inner classes listener interfaces implement nahi kar sakti.",
      ],
      [
        "They replace the delegation model with the inheritance model.",
        "वे डेलीगेशन मॉडल को इनहेरिटेंस मॉडल से बदलते हैं।",
        "Ve delegation model ko inheritance model se badalte hain.",
      ],
    ],
    0,
    [
      "WindowListener has seven methods; MouseListener five. Adapters are abstract (or concrete empty) helper classes in java.awt.event. Anonymous inner adapters are the usual Frame-closing pattern.",
      "WindowListener के सात मेथड; MouseListener पाँच। एडॉप्टर java.awt.event में abstract (या खाली कंक्रीट) सहायक क्लास हैं। अनाम इनर एडॉप्टर सामान्य Frame-बंद पैटर्न है।",
      "WindowListener ke saat methods; MouseListener paanch. Adapters java.awt.event mein abstract (ya empty concrete) helper classes hain. Anonymous inner adapters usual Frame-closing pattern hai.",
    ],
  ),
];
