const clear = document.querySelector('.clear-btn')
const newGame = document.querySelector('.newGame-btn')
const numGuess = document.querySelector('.numGuess')
const guessBtn = document.querySelector('.guess-btn')
const checkAnswer = document.querySelector('.checkAnswer')
const display = document.querySelector('.display')
const warning = document.querySelector('.warning')

const STANDARD_RADIX = 10



//產生亂數
let min = 0;
let max = 100;
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);
}
let ANSWER = getRandomIntInclusive(min, max);

//為每個數字鍵掛上事件監聽
let allNumBtn = document.querySelectorAll('.number-btn')
allNumBtn.forEach(element => {
    element.addEventListener('click', function(){
        numGuess.value += element.innerHTML
    })
});

//新遊戲鍵事件監聽
newGame.addEventListener('click', function(){
    numGuess.value = ''
    warning.innerText = '請輸入Range內數字'
    display.innerText = '0~100'
    min = 0;
    max = 100;
    ANSWER = getRandomIntInclusive(min, max);

})

//猜數字邏輯
guessBtn.addEventListener("click", function(){

let numInput = numGuess.value;
let judgeInput = parseInt(numInput, STANDARD_RADIX);


if (isNaN(judgeInput)) {
warning.innerText = "請輸入數字";
} else {
if (judgeInput == ANSWER) {
    warning.innerText = "答對了!!!";
    } else if (judgeInput < ANSWER && judgeInput > min) {
    min = judgeInput;
    warning.innerText = ''
    display.innerText = `${min}~${max}`;
    } else if (judgeInput > ANSWER && judgeInput < max) {
    max = judgeInput;
    warning.innerText = ''
    display.innerText = `${min}~${max}`;
    } else if (judgeInput < min || judgeInput > max) {
    warning.innerText = `請輸入${min}~${max}的數字`;
    }
}

numGuess.value = ''
});

checkAnswer.addEventListener('click', function(){
    alert(ANSWER)
})

clear.addEventListener('click', function(){
    numGuess.value = ''
})
