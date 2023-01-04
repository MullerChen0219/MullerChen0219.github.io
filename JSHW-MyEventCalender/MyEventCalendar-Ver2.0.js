//變數nav 代表當前月份(0)
//變數clicked 預設為null 用來判別點選的日期
//變數events 利用三元表達式，檢查是否能從localStorage.getItem('events')中抓到行程資料，
//若能抓到，使用JSON.parse()方法將JSON轉回物件型態存入陣列，
//若抓不到則回傳空陣列
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

//Dom節點
const _calendar = document.querySelector('#calendar'); 
const _calendarList = document.querySelector('#calendarList');
const _newEventModal = document.querySelector('#newEventModal');
const _deleteEventModal = document.querySelector('#deleteEventModal');
const _backDrop = document.querySelector('#modalBackDrop');
const eventTitleInput = document.querySelector('#eventTitleInput');
const eventTitleInputEdit = document.querySelector('#eventTitleInputEdit');
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//載入月曆
//------------------------------變數說明
//dt    代表當下日期的Date物件
//day   利用dt.getDate()取得"日"
//month 利用dt.getMonth()取得"月"  這裡取得的是月份"索引值"0~11 (分別代表 一到十二月)
//year  利用dt.getFullYear()取得"年"
//firstDayOfMonth   
//daysInMonth   
//dateString    
//paddingDays   
//daySquare 
//dayString 
//-----------------------------補充說明


function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);       //A
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {        //B
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);        //C
    
    document.getElementById('monthDisplay').innerText = 
        `${dt.toLocaleDateString('en-us', { month: 'long'})} ${year}`;      //D
    
    _calendarList.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {      //E
        const daySquare = document.createElement('li');
        daySquare.classList.add('day');


        const dayString = `${month + 1}/${i - paddingDays}/${year}`


        if (i > paddingDays) {      //F
            daySquare.innerText = i - paddingDays;
            
            let dataDate = daySquare.dataset.Date;
            daySquare.id = dataDate;

            let eventForDay = events.find(e => e.date === dayString);     //G
            
            if (i - paddingDays === day && nav === 0) {     //H
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {      //I
                events.filter(e => e.date === dayString).forEach(events => {
                    let eventDiv = document.createElement('div');
                    eventDiv.classList.add('event');
                    eventDiv.innerText = events.title;
                    daySquare.appendChild(eventDiv);
                });
                
            }
            daySquare.addEventListener('click', () => openModal(dayString));  //J
        } else {
            daySquare.classList.add('padding');     //K
        }

        _calendarList.appendChild(daySquare);
        _calendar.appendChild(_calendarList);
    }
}
//開啟新增行程Modal
//
//
//
//
//
function openModal(date) {
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        document.getElementById('eventTitleInputEdit').value = eventForDay.title;
        _deleteEventModal.style.display = 'block';
    } else {
        _newEventModal.style.display = 'block';
        let inputEdit = document.createElement('input');
        _newEventModal.prepend
        
        
        
        (inputEdit);
    }
    

    _backDrop.style.display = 'block';
}
//關閉新增行程Modal
//
//
//
//
//
function closeModal() {
    eventTitleInput.classList.remove('error');
    _newEventModal.style.display = 'none';
    _deleteEventModal.style.display = 'none';
    _backDrop.style.display = 'none';
    eventTitleInput.value = '';
    eventTitleInputEdit.value = '';
    clicked = null;
    load();
}
//儲存行程
//
//
//
//
//
function saveEvent() {
    if (eventTitleInput.value) {
        eventTitleInput.classList.remove('error');

        events.push({
            date: clicked,
            title: eventTitleInput.value,
        });

        localStorage.setItem('events', JSON.stringify(events));
        closeModal();
    } else {
        eventTitleInput.classList.add('error');
    }
}
//儲存編輯行程
//先忽略這段
function saveEditedEvent() {
    if (eventTitleInputEdit.value) {
        eventTitleInputEdit.classList.remove('error');

        events.push({
            date: clicked,
            title: eventTitleInputEdit.value,
        });

        localStorage.setItem('events', JSON.stringify(events));
        closeModal();
    } else {
        eventTitleInputEdit.classList.add('error');
    }
}
//刪除行程
function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}
//初始化所有按鈕
function initButtons() {
    document.getElementById('nextBtn').addEventListener('click', () => {
        nav++;
        load();
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        nav--;
        load();
    });

    document.getElementById('saveBtn').addEventListener('click', saveEvent);
    
    document.getElementById('saveEditBtn').addEventListener('click', saveEditedEvent);

    document.getElementById('cancelBtn').addEventListener('click', closeModal);

    document.getElementById('deleteBtn').addEventListener('click', deleteEvent);

    document.getElementById('closeBtn').addEventListener('click', closeModal);
}
//程式進入點
window.onload = function() {
    initButtons();
    load();
}


