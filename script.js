/* =========================
   KIRUTO
   إنشاء اختبارات ومشاركتها
========================= */

const questionBank = [

["ما أكثر شيء يخاف منه هذا الشخص؟",
["الفشل","فقدان شخص عزيز","الوحدة","المستقبل المجهول"]],

["عندما يكون حزينًا، ماذا يفعل غالبًا؟",
["يختفي عن الجميع","يتحدث مع شخص يثق به","يتظاهر بأنه بخير","ينشغل بأي شيء"]],

["ما الشيء الذي يزعجه بسرعة؟",
["التجاهل","الكذب","الانتقاد","التأخر"]],

["ما أكثر صفة يحاول إخفاءها؟",
["حساسيته","غيرته","خوفه","حاجته للاهتمام"]],

["ما الشيء الذي لا يحب أن يعرفه الآخرون عنه؟",
["مخاوفه","أخطاؤه السابقة","مشاعره الحقيقية","خططه المستقبلية"]],

["ما أكثر شيء يمكن أن يجعله يقطع علاقته بشخص؟",
["الخيانة","الكذب المتكرر","قلة الاحترام","التلاعب"]],

["هل يسامح بسهولة؟",
["نعم دائمًا","غالبًا","فقط إذا كان الاعتذار صادقًا","لا، يحتاج وقتًا"]],

["عندما يغضب، ماذا يفعل؟",
["يصمت","يواجه مباشرة","يبتعد","يتحدث بانفعال"]],

["ما أكثر شيء يجعله يشعر بالأمان؟",
["وجود شخص يحبه","الاستقرار","الخصوصية","الشعور بأنه مفهوم"]],

["أي نوع من الاهتمام يفضله؟",
["الكلمات","الأفعال","الهدايا","الوقت معًا"]],

["ما أسوأ عادة لديه في رأيك؟",
["التفكير الزائد","التسويف","العناد","إخفاء مشاعره"]],

["ما الشيء الذي يصعب عليه الاعتراف به؟",
["أنه أخطأ","أنه يحتاج مساعدة","أنه يشعر بالغيرة","أنه متعلق بشخص"]],

["إذا أحب شخصًا، كيف يظهر ذلك غالبًا؟",
["يهتم بتفاصيله","يتحدث معه كثيرًا","يحاول حمايته","لا يظهر مشاعره بسهولة"]],

["ما أكثر شيء يمكن أن يجعله يغار؟",
["اهتمام شخص آخر بمن يحبه","تجاهله","مقارنته بغيره","رؤية شخص يحبه قريبًا من شخص آخر"]],

["ما الشيء الذي يقدّره أكثر في الصداقة؟",
["الصدق","الوفاء","الاهتمام","المرح"]],

["إذا اكتشف أن شخصًا يثق به كذب عليه، ماذا يفعل؟",
["يسامحه","يواجهه","يبتعد عنه","يتظاهر أن شيئًا لم يحدث"]],

["ما أكثر شيء يندم عليه عادة؟",
["كلمة قالها","ثقة منحها لشخص","فرصة ضيعها","قرار اتخذه بسرعة"]],

["ما الذي يحتاجه عندما يمر بيوم سيئ؟",
["أن يُترك وحده","شخص يسمعه","كلمة تشجيع","شيء يغير مزاجه"]],

["ما الشيء الذي يمكن أن يجعله يشعر بأنه محبوب؟",
["الاهتمام","الوقت","الكلمات الجميلة","الأفعال"]],

["ما الجملة التي يصعب عليه قولها؟",
["أنا أحبك","أنا خائف","أحتاجك","أنا آسف"]],

["لو استطاع تغيير شيء واحد في ماضيه، ماذا سيغير؟",
["قرارًا اتخذه","علاقة قديمة","فرصة ضاعت","لا يغير شيئًا"]],

["عندما يشعر بالغيرة، ماذا يفعل غالبًا؟",
["يخفيها","يصبح هادئًا جدًا","يسأل مباشرة","يتصرف بشكل مختلف"]],

["ما أكثر شيء يجعله يفقد ثقته بشخص؟",
["الكذب","الخيانة","إفشاء الأسرار","التلاعب"]],

["ما الشيء الذي يتمنى أن يفهمه الآخرون عنه؟",
["أنه حساس","أنه يفكر كثيرًا","أنه لا يثق بسهولة","أنه يخفي مشاعره"]],

["هل يفضل الحب الهادئ أم العلاقة المليئة بالمشاعر؟",
["الهادئ","المليء بالمشاعر","حسب الشخص","لا يعرف"]],

["ما أكثر شيء يجذب انتباهه في شخص آخر؟",
["الشخصية","الثقة","الاهتمام","الغموض"]],

["إذا اضطر للاختيار، ماذا يفضل؟",
["الحب","المال","النجاح","الراحة النفسية"]],

["ما الشيء الذي لا يستطيع تحمله في العلاقة؟",
["الإهمال","الغيرة الزائدة","الكذب","قلة الاحترام"]],

["ما أكثر شيء يجعله يثق بشخص بسرعة؟",
["الصراحة","الاهتمام","الوفاء","تشابه الشخصية"]],

["ما الشيء الذي يخفيه عندما يكون متألمًا؟",
["حزنه","غضبه","خوفه","حاجته لشخص بجانبه"]]

];


/* =========================
   المتغيرات
========================= */

let creatorName = "";
let creatorIndex = 0;
let creatorAnswers = [];

let participantName = "";
let participantIndex = 0;
let participantAnswers = [];

let currentTest = null;


/* =========================
   أدوات
========================= */

const $ = id => document.getElementById(id);

function show(id) {

  document
    .querySelectorAll(".screen")
    .forEach(x => x.classList.remove("active"));

  $(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function goHome() {
  show("home");
}


/* =========================
   الرئيسية
========================= */

function createTest() {

  creatorIndex = 0;
  creatorAnswers = [];

  show("creatorName");

  setTimeout(() => {
    $("creator").focus();
  }, 200);
}


function joinTest() {

  show("join");

  setTimeout(() => {
    $("testCode").focus();
  }, 200);
}


/* =========================
   اختيار 20 سؤالًا عشوائيًا
========================= */

function generateQuestions() {

  const copy = [...questionBank];

  copy.sort(() => Math.random() - 0.5);

  return copy.slice(0, 20);
}


/* =========================
   إنشاء الاختبار
========================= */

function startCreator() {

  creatorName = $("creator").value.trim();

  if (!creatorName) {
    alert("اكتب اسمك أولًا.");
    return;
  }

  currentTest = {
    name: creatorName,
    questions: generateQuestions()
  };

  creatorIndex = 0;

  creatorAnswers = new Array(
    currentTest.questions.length
  );

  show("creatorQuiz");

  renderCreator();
}


/* =========================
   عرض أسئلة المنشئ
========================= */

function renderCreator() {

  const total = currentTest.questions.length;

  const q = currentTest.questions[creatorIndex];

  $("creatorCounter").textContent =
    `السؤال ${creatorIndex + 1} من ${total}`;

  $("creatorPercent").textContent =
    `${Math.round((creatorIndex + 1) / total * 100)}%`;

  $("creatorBar").style.width =
    `${(creatorIndex + 1) / total * 100}%`;

  $("creatorQnum").textContent =
    String(creatorIndex + 1).padStart(2, "0");

  $("creatorQuestion").textContent = q[0];

  $("creatorAnswers").innerHTML =
    q[1].map((option, i) => {

      const selected =
        creatorAnswers[creatorIndex] === i;

      return `
        <button
          class="answer ${selected ? "selected" : ""}"
          onclick="creatorPick(${i})"
        >
          ${option}
          <span>${selected ? "●" : "○"}</span>
        </button>
      `;

    }).join("");

  $("creatorPrev").style.visibility =
    creatorIndex === 0 ? "hidden" : "visible";
}


function creatorPick(index) {

  creatorAnswers[creatorIndex] = index;

  renderCreator();
}


function creatorNext() {

  if (creatorAnswers[creatorIndex] === undefined) {

    alert("اختر إجابة أولًا.");

    return;
  }

  if (
    creatorIndex <
    currentTest.questions.length - 1
  ) {

    creatorIndex++;

    renderCreator();

  } else {

    finishCreator();
  }
}


function creatorPrev() {

  if (creatorIndex > 0) {

    creatorIndex--;

    renderCreator();
  }
}


/* =========================
   إنشاء الرمز والرابط
========================= */

function generateCode() {

  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {

    code += chars[
      Math.floor(Math.random() * chars.length)
    ];
  }

  return code;
}


function encodeTest(test) {

  const json = JSON.stringify(test);

  const bytes =
    new TextEncoder().encode(json);

  let binary = "";

  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}


function finishCreator() {

  currentTest.code = generateCode();

  const encoded =
    encodeTest({
      name: currentTest.name,
      questions: currentTest.questions,
      answers: creatorAnswers,
      code: currentTest.code
    });

  const url =
    location.origin +
    location.pathname +
    "?test=" +
    encoded;

  currentTest.url = url;

  $("testLink").value = url;

  show("testCreated");
}


/* =========================
   نسخ الرابط
========================= */

async function copyTestLink() {

  const link = $("testLink").value;

  try {

    await navigator.clipboard.writeText(link);

    $("copyMessage").textContent =
      "✓ تم نسخ الرابط";

  } catch {

    $("testLink").select();

    document.execCommand("copy");

    $("copyMessage").textContent =
      "✓ تم نسخ الرابط";
  }
}


/* =========================
   مشاركة الرابط
========================= */

async function shareTestLink() {

  const link = $("testLink").value;

  if (navigator.share) {

    try {

      await navigator.share({
        title: "اختبار KIRUTO",
        text: "أجب عن هذا الاختبار واكتشف مدى معرفتك بي!",
        url: link
      });

    } catch {}
    
  } else {

    await copyTestLink();
  }
}


/* =========================
   فك الرابط
========================= */

function decodeTest(encoded) {

  try {

    const base64 =
      encoded
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const binary =
      atob(base64);

    const bytes =
      new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    const json =
      new TextDecoder().decode(bytes);

    return JSON.parse(json);

  } catch {

    return null;
  }
}


/* =========================
   الدخول بالرابط
========================= */

function checkSharedTest() {

  const params =
    new URLSearchParams(location.search);

  const encoded =
    params.get("test");

  if (!encoded) return;

  const test =
    decodeTest(encoded);

  if (!test) {

    alert("رابط الاختبار غير صالح.");

    return;
  }

  currentTest = test;

  show("participantName");
}


function openCode() {

  const code =
    $("testCode").value
      .trim()
      .toUpperCase();

  if (!code) {

    alert("أدخل رمز الاختبار.");

    return;
  }

  alert(
    "في هذه النسخة، الدخول بالرمز يحتاج قاعدة بيانات Firebase. استخدم رابط الاختبار الذي أنشأه صاحب الاختبار."
  );
}


/* =========================
   اختبار المشارك
========================= */

function startParticipant() {

  participantName =
    $("participant").value.trim();

  if (!participantName) {

    alert("اكتب اسمك أولًا.");

    return;
  }

  participantIndex = 0;

  participantAnswers =
    new Array(currentTest.questions.length);

  show("participantQuiz");

  renderParticipant();
}


function renderParticipant() {

  const total =
    currentTest.questions.length;

  const q =
    currentTest.questions[participantIndex];

  $("participantCounter").textContent =
    `السؤال ${participantIndex + 1} من ${total}`;

  $("participantPercent").textContent =
    `${Math.round((participantIndex + 1) / total * 100)}%`;

  $("participantBar").style.width =
    `${(participantIndex + 1) / total * 100}%`;

  $("participantQnum").textContent =
    String(participantIndex + 1).padStart(2, "0");

  $("participantQuestion").textContent =
    q[0];

  $("participantAnswers").innerHTML =
    q[1].map((option, i) => {

      const selected =
        participantAnswers[participantIndex] === i;

      return `
        <button
          class="answer ${selected ? "selected" : ""}"
          onclick="participantPick(${i})"
        >
          ${option}
          <span>${selected ? "●" : "○"}</span>
        </button>
      `;

    }).join("");
}


function participantPick(index) {

  participantAnswers[participantIndex] =
    index;

  renderParticipant();
}


function participantNext() {

  if (
    participantAnswers[participantIndex] === undefined
  ) {

    alert("اختر إجابة أولًا.");

    return;
  }

  if (
    participantIndex <
    currentTest.questions.length - 1
  ) {

    participantIndex++;

    renderParticipant();

  } else {

    calculateSharedResult();
  }
}


function participantPrev() {

  if (participantIndex > 0) {

    participantIndex--;

    renderParticipant();
  }
}


/* =========================
   حساب النتيجة
========================= */

function calculateSharedResult() {

  let correct = 0;

  for (
    let i = 0;
    i < currentTest.questions.length;
    i++
  ) {

    if (
      participantAnswers[i] ===
      currentTest.answers[i]
    ) {

      correct++;
    }
  }

  const score =
    Math.round(
      correct /
      currentTest.questions.length *
      100
    );

  $("sharedName").textContent =
    currentTest.name;

  $("sharedScore").textContent =
    score + "%";

  document
    .querySelector(".score-ring")
    .style.setProperty(
      "--score",
      score + "%"
    );

  let title;
  let text;

  if (score >= 90) {

    title = "🔥 أنت تعرفه بشكل مذهل!";

    text =
      "واضح أنك تعرف تفاصيله ومشاعره بشكل رائع.";

  } else if (score >= 75) {

    title = "❤️ معرفة قوية جدًا";

    text =
      "أنت قريب منه وتعرف الكثير من الأشياء التي تخصه.";

  } else if (score >= 50) {

    title = "🙂 تعرفه بشكل جيد";

    text =
      "لديك معرفة جيدة، لكن ما زالت هناك أشياء كثيرة لا تعرفها.";

  } else {

    title = "👀 هناك الكثير لتكتشفه";

    text =
      "يبدو أن هناك بعض الأسرار والأشياء التي لم تكتشفها بعد.";

  }

  $("sharedTitle").textContent =
    title;

  $("sharedText").textContent =
    text;

  show("sharedResult");
}


/* =========================
   مشاركة النتيجة
========================= */

async function shareResult() {

  const text =
    `حصلت على ${$("sharedScore").textContent} في اختبار KIRUTO لمعرفة ${currentTest.name}!`;

  if (navigator.share) {

    try {

      await navigator.share({
        title: "KIRUTO",
        text: text
      });

    } catch {}

  } else {

    await navigator.clipboard?.writeText(text);

    alert("تم نسخ النتيجة!");
  }
}


/* =========================
   الوضع الليلي
========================= */

function toggleTheme() {

  document.body.classList.toggle("light");

  document.querySelector(".theme").textContent =
    document.body.classList.contains("light")
      ? "☀"
      : "☾";
}


/* =========================
   Enter
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key !== "Enter") return;

    if (
      $("creatorQuiz").classList.contains("active")
    ) {

      creatorNext();

    } else if (
      $("participantQuiz").classList.contains("active")
    ) {

      participantNext();
    }

  }
);


/* =========================
   فحص الرابط عند فتح الموقع
========================= */

checkSharedTest();
