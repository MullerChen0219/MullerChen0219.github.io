
//取得各功能區DOM節點
const _display = document.querySelector('.display');
const _input = document.querySelector('.form-control');
const _guess = document.querySelector('#guess');
const _start = document.querySelector('#start');
const _giveUp = document.querySelector('#giveUp');
const _checkAnswer = document.querySelector('#checkAnswer');

//正則表達式(判定輸入的每個字元是否為0~9數字)
const regex = /\d/;
//變數宣告區
const min = 0;
const max = 9;
let answerArray = [];
let guessArray = [];
let intersect;
let a;
let b;
let answerString;
let guess;
let getGuessStr0;
let getGuessStr1;
let getGuessStr2;
let getGuessStr3;
let distinct;
let isNotRepeat;
let _history;
let _button;
let _p;

//-----------------------------------------------------以下為方法
//取得0~9隨機數字
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//初始遊戲產生4位不重複0~9數字
//當answerArray長度不為4前，重複產生隨機數字
//只要answerArray不包含前次產生的數字就把該數字推入陣列
function setGame() {
    
    do 
    {
        let number = getRandomInt(min, max).toString();
        if (!answerArray.includes(number))
            {
                answerArray.push(number);
            }
    } 
    while (answerArray.length != 4 );

    return answerArray;
}

//將每次輸入數字推進guessArray方法
function createGuessArray() {
    guess = _input.value;
    getGuessStr0 = guess.charAt(0)
    getGuessStr1 = guess.charAt(1)
    getGuessStr2 = guess.charAt(2)
    getGuessStr3 = guess.charAt(3)
    guessArray.push(getGuessStr0,getGuessStr1,getGuessStr2,getGuessStr3);
}
//取得answerArray與guessArray之交集
function getIntersect() {
    intersect = answerArray.filter(x => guessArray.includes(x));
    a = intersect.filter(y => answerArray.indexOf(y) == guessArray.indexOf(y) );
    b = intersect.length - a.length;
}
//sweetAlert2套件版alert-公布解答
function showAnswerAlert(answerString) {
    Swal.fire({
        title: "公布解答~",
        text: `${answerString}`,
        icon: 'info',
        showCancelButton: true
    })
}
//sweetAlert2套件版alert-開始遊戲才能猜唷
function initialAlert() {
    Swal.fire({
        title: "要先開始遊戲才能猜唷",
        text: "請點遊戲開始",
        icon: 'error',
        showCancelButton: true
    })
}
//sweetAlert2套件版alert-要輸入4位'數字'
function notNumberAlert() {
    Swal.fire({
        title: "要輸入4位'數字'唷",
        text: "請重新輸入",
        icon: 'error',
        showCancelButton: true
    })
}
//sweetAlert2套件版alert-重複數字
function repeatNumberAlert() {
    Swal.fire({
        title: "有重複數字唷",
        text: "請重新輸入",
        icon: 'error',
        showCancelButton: true
    })
}
//sweetAlert2套件版alert-你怎麼這麼棒
function victoryAlert(answerString) {
    Swal.fire({
        title: "你怎麼這麼棒~",
        text: `正確答案是${answerString}`,
        icon: 'success',
        showCancelButton: true
    })
}
//清空input方法
function cleanInput() {
    _input.value = '';
}
//初始guessArray方法
function initializeGuessArray () {
    guessArray = [];
}
//初始化answerArray方法
function initializeAnswerArray () {
    answerArray = [];
}
//顯示猜對樣式方法(綠按鈕標示4A0B)
function setVictoryMessage() {
    _history = document.createElement('div')
    _button = document.createElement('button');
    _p = document.createElement('p');
    _history.setAttribute('class', 'history')
    _button.setAttribute('class','btn btn-success');
}
//顯示猜錯樣式方法(紅按鈕標示幾A幾B)
function setHistoryMessage() {
    _history = document.createElement('div')
    _button = document.createElement('button');
    _p = document.createElement('p');
    _history.setAttribute('class', 'history')
    _button.setAttribute('class','btn btn-danger');
}
//判斷遊戲勝利方法
function checkIsWin() {
    if (a.length == 4){
    setVictoryMessage();
    _button.innerHTML = `${a.length}A${b}B`;
    _p.innerText = _input.value;
    _history.append(_button, _p);
    _display.append(_history);
    victoryAlert(answerString);
    cleanInput();
    _guess.disabled = true;
    _start.disabled = false;
    }
    else{
    setHistoryMessage();
    _button.innerHTML = `${a.length}A${b}B`;
    _p.innerText = _input.value;
    _history.append(_button, _p);
    _display.append(_history);
    cleanInput();
    }
}

// ----------------------------------------------------以下為按鈕事件註冊

//遊戲開始按鈕click事件
_start.addEventListener('click', () => {
    initializeAnswerArray();
    initializeGuessArray();
    setGame();
    _start.disabled = true;
    _guess.disabled = false;
    cleanInput();
})
//看答案按鈕click事件
_checkAnswer.addEventListener('click', () => {
    answerString = '';
    answerArray.forEach(num => {
        answerString += num;
    })
    showAnswerAlert(answerString)
    cleanInput();
})
//放棄重來按鈕click事件
_giveUp.addEventListener('click', () => {
    initializeAnswerArray();
    initializeGuessArray();
    _display.innerHTML = '';
    _start.disabled = false;
    cleanInput();
})
//猜起來按鈕click事件
_guess.addEventListener('click', () => {
    createGuessArray();
    distinct = [...new Set(guessArray)].length;
    isNotNumber = regex.test(guess)
    isNotRepeat = distinct === 4 && guessArray.length === 4;

    if (answerArray.length === 0) {
        initialAlert();
        cleanInput();
        return;
    }
    else if (!isNotNumber) {
        notNumberAlert();
        initializeGuessArray();
        cleanInput();
        return;
    }
    else if (!isNotRepeat) {
        repeatNumberAlert();
        initializeGuessArray();
        cleanInput();
        return;
    }
    else {
        getIntersect();
        initializeGuessArray();
        checkIsWin();
        
    }
})


