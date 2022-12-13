const clear = document.querySelector('.clear-btn')
const newGame = document.querySelector('.newGame-btn')
const numGuess = document.querySelector('.numGuess')
const guessBtn = document.querySelector('.guess-btn')
const checkAnswer = document.querySelector('.checkAnswer')
const display = document.querySelector('.display')
const warning = document.querySelector('.warning')
let hpZone = document.getElementById('hpZone');
let oldHeart = document.querySelectorAll('.heart'); 

const STANDARD_RADIX = 10
let min = 0;
let max = 100;

function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);
}
let ANSWER = getRandomIntInclusive(min, max);


newGame.addEventListener('click', function(){
    numGuess.value = ''
    warning.innerText = '請輸入Range內數字'
    display.innerText = '0~100'
    min = 0;
    max = 100;
    ANSWER = getRandomIntInclusive(min, max);
    let fragment = document.createDocumentFragment()
    if (hpZone.childElementCount == 0 ){
        for ( let i = 0; i < 5; i++){
            let div = document.createElement("div")
            div.className = "heart"
            fragment.appendChild(div)
        }
        hpZone.appendChild(fragment)}

})


let allNumBtn = document.querySelectorAll('.number-btn')
allNumBtn.forEach(element => {
    element.addEventListener('click', function(){
        numGuess.value += element.innerHTML
    })
});         

checkAnswer.addEventListener('click', function(){
    alert(ANSWER)
})

clear.addEventListener('click', function(){
    numGuess.value = ''
})        

guessBtn.addEventListener("click", function(){

let numInput = numGuess.value;
let judgeInput = parseInt(numInput, STANDARD_RADIX);

if (isNaN(judgeInput)) {
warning.innerText = "請輸入數字";
} else {
if (judgeInput == ANSWER) {
    warning.innerText = "答對了!!!";
    hpZone.removeChild(hpZone.lastElementChild)
        if (hpZone.childElementCount == 0){
        alert('你輸了')
        }
    } else if (judgeInput < ANSWER && judgeInput > min) {
    min = judgeInput;
    display.innerText = `${min}~${max}`;
    warning.innerText = ''
    hpZone.removeChild(hpZone.lastElementChild)
        if (hpZone.childElementCount == 0){
        alert('你輸了')
        }
    } else if (judgeInput > ANSWER && judgeInput < max) {
    max = judgeInput;
    display.innerText = `${min}~${max}`;
    warning.innerText = ''
    hpZone.removeChild(hpZone.lastElementChild)
        if (hpZone.childElementCount == 0){
        alert('你輸了')
        }
    } else if (judgeInput < min || judgeInput > max) {
    warning.innerText = `請輸入${min}~${max}的數字`;
    }
}

numGuess.value = ''
});


