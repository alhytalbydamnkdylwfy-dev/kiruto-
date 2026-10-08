const questions=[
["ما أكثر شيء يخاف منه هذا الشخص؟",["الفشل","فقدان شخص عزيز","الوحدة","المستقبل المجهول"]],
["عندما يكون حزينًا، ماذا يفعل غالبًا؟",["يختفي عن الجميع","يتحدث مع شخص يثق به","يتظاهر بأنه بخير","ينشغل بأي شيء"]],
["ما الشيء الذي يزعجه بسرعة؟",["التجاهل","الكذب","الانتقاد","التأخر"]],
["ما أكبر حلم تتوقع أنه يسعى إليه؟",["النجاح المهني","السفر واكتشاف العالم","الاستقرار","صنع شيء يفتخر به"]],
["من أكثر شخص يثق به؟",["أحد أفراد العائلة","صديق مقرّب","شخص واحد فقط","يصعب عليه الوثوق بأحد"]],
["ما أكثر صفة يحاول إخفاءها؟",["حساسيته","غيرته","خوفه","حاجته للاهتمام"]],
["إذا حصل على مبلغ كبير فجأة، ماذا سيفعل؟",["يدخره","يسافر","يشتري شيئًا يحبه","يساعد شخصًا قريبًا"]],
["ما نوع الاعتذار الذي يقدّره أكثر؟",["كلمات صادقة","تصرف يثبت الندم","رسالة طويلة","مجرد قول آسف"]],
["هل يسامح بسهولة؟",["نعم دائمًا","غالبًا","فقط إذا كان الاعتذار صادقًا","لا، يحتاج وقتًا"]],
["ما أكثر شيء يفتخر به؟",["إنجاز حققه","شخص ساعده","قوته في تجاوز الصعوبات","علاقاته"]],
["عندما يغضب، ما رد فعله الأقرب؟",["يصمت","يواجه مباشرة","يبتعد","يتحدث بانفعال"]],
["ما الشيء الذي لا يحب أن يعرفه الآخرون عنه؟",["مخاوفه","أخطاؤه السابقة","مشاعره الحقيقية","خططه المستقبلية"]],
["أي نوع من الاهتمام يفضله؟",["الكلمات","الأفعال","الهدايا","الوقت معًا"]],
["ما أكثر شيء يمكن أن يجعله يقطع علاقته بشخص؟",["الخيانة","الكذب المتكرر","قلة الاحترام","التلاعب"]],
["عندما يحتاج نصيحة، من يلجأ إليه؟",["العائلة","صديق","لا يسأل أحدًا","الشخص الذي يثق به أكثر"]],
["ما أسوأ عادة لديه في رأيك؟",["التفكير الزائد","التسويف","العناد","إخفاء مشاعره"]],
["ما الذي يجعله يشعر بالأمان؟",["وجود شخص يحبه","الاستقرار","الخصوصية","الشعور بأنه مفهوم"]],
["لو عاد بالزمن، ماذا قد يغير؟",["قرارًا اتخذه","علاقة قديمة","فرصة ضاعت","لا يغير شيئًا"]],
["ما الذي يحتاجه عندما يمر بيوم سيئ؟",["أن يترك وحده","شخص يسمعه","كلمة تشجيع","شيء يخرجه من مزاجه"]],
["ما الشيء الذي تتوقع أنه لا يقوله بسهولة؟",["أحبك","أنا خائف","أحتاج مساعدتك","أنا آسف"]]
];
let idx=0, answers=[], name="";
const $=id=>document.getElementById(id);
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"})}
function goHome(){show("home")}
function start(){idx=0;answers=[];show("name");$("person").focus()}
function beginQuestions(){name=$("person").value.trim()||"هذا الشخص";idx=0;answers=new Array(20);show("quiz");render()}
function render(){
 const [q,opts]=questions[idx]; $("counter").textContent=`السؤال ${idx+1} من 20`; $("percent").textContent=`${Math.round((idx+1)/20*100)}%`;
 $("bar").style.width=`${(idx+1)/20*100}%`; $("qnum").textContent=String(idx+1).padStart(2,"0");$("question").textContent=q;
 $("answers").innerHTML=opts.map((o,i)=>`<button class="answer ${answers[idx]===i?"selected":""}" onclick="pick(${i})">${o}<span> ${answers[idx]===i?"●":"○"}</span></button>`).join("");
 $("prev").style.visibility=idx===0?"hidden":"visible";$("next").innerHTML=idx===19?"عرض النتيجة ✦":"التالي <span>←</span>";
}
function pick(i){answers[idx]=i;render()}
function nextQuestion(){if(answers[idx]===undefined){alert("اختر إجابة أولًا.");return} if(idx<19){idx++;render()}else result()}
function prevQuestion(){if(idx>0){idx--;render()}}
function result(){
 const score=Math.max(0,Math.min(100,Math.round(55+answers.reduce((a,v)=>a+(v===undefined?0:(v%2?3:2)),0)+Math.random()*13-6)));
 $("resultName").textContent=name;$("score").textContent=score+"%";document.querySelector(".score-ring").style.setProperty("--score",score+"%");
 let title,text;
 if(score>=90){title="أنت تعرفه بشكل مذهل!";text="تبدو ملاحظًا جدًا لتفاصيل شخصيته ومشاعره. واضح أنك تهتم بما وراء الكلمات."}
 else if(score>=75){title="معرفة قوية جدًا";text="أنت قريب منه فعلًا، وتلتقط الكثير من التفاصيل التي قد لا ينتبه لها الآخرون."}
 else if(score>=60){title="تعرفه بشكل جيد";text="لديك معرفة جيدة به، لكن يبدو أن هناك بعض الجوانب التي ما زالت تخبئ لك مفاجآت."}
 else {title="هناك الكثير لتكتشفه";text="قد تكون قريبًا منه، لكن بعض التفاصيل العميقة ما زالت مجهولة. ربما حان وقت حديث صريح."}
 $("resultTitle").textContent=title;$("resultText").textContent=text;show("result")
}
async function shareResult(){
 const txt=`نتيجتي في KIRUTO: ${$("score").textContent} في معرفة ${name}! هل تستطيع تحطيم نتيجتي؟`;
 if(navigator.share){try{await navigator.share({title:"KIRUTO",text:txt})}catch(e){}}
 else{await navigator.clipboard?.writeText(txt);alert("تم نسخ النتيجة للمشاركة!")}
}
function toggleTheme(){document.body.classList.toggle("light");document.querySelector(".theme").textContent=document.body.classList.contains("light")?"☀":"☾"}
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&$("quiz").classList.contains("active"))nextQuestion()});
