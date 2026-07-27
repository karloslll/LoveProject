const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");

const hugBtn = document.getElementById("hugBtn");
const kissBtn = document.getElementById("kissBtn");

const result = document.getElementById("result");
const resultText = document.getElementById("resultText");

let yesSize = 22;

// مكان أولي لزر "لا"
noBtn.style.left = "260px";
noBtn.style.top = "0px";

// زر "لا" يهرب
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    yesSize += 5;

    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding =
        (15 + yesSize/2) + "px " +
        (40 + yesSize/2) + "px";
}

// إذا ضغط على "إيه"
yesBtn.addEventListener("click", ()=>{

    question1.classList.add("hidden");
    question2.classList.remove("hidden");

});

// اختيار التعنيقة
hugBtn.addEventListener("click", ()=>{

    question2.classList.add("hidden");
    result.classList.remove("hidden");

    resultText.innerHTML =
    "🤗 ممتاز 😍<br><br>" +
    "نبداو بجوج تعنيقات ❤️❤️<br><br>" +
    "ومن بعد جوج بوسات 😘😘";

});

// اختيار البوسة
kissBtn.addEventListener("click", ()=>{

    question2.classList.add("hidden");
    result.classList.remove("hidden");

    resultText.innerHTML =
    "😘 رائع 😍<br><br>" +
    "نبداو بجوج بوسات ❤️❤️<br><br>" +
    "ومن بعد جوج تعنيقات 🤗🤗";

});
