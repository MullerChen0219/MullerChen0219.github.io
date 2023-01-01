let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const _calendar = document.querySelector('#calendar'); 
const _calendarList = document.querySelector('#calendarList');
const _newEventModal = document.querySelector('#newEventModal');
const _deleteEventModal = document.querySelector('#deleteEventModal');
const _backDrop = document.querySelector('#modalBackDrop');
const eventTitleInput = document.querySelector('#eventTitleInput');
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function openModal(date) {
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        _deleteEventModal.style.display = 'block';
    } else {
        _newEventModal.style.display = 'block';
    }

    _backDrop.style.display = 'block';
}

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    
    document.getElementById('monthDisplay').innerText = 
        `${dt.toLocaleDateString('en-us', { month: 'long'})} ${year}`;
    
    _calendarList.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('li');
        daySquare.classList.add('day');


        const dayString = `${month + 1}/${i - paddingDays}/${year}`


        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            const eventForDay = events.find(e => e.date === dayString);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = eventForDay.title;
                daySquare.appendChild(eventDiv);
            }
            daySquare.addEventListener('click', () => openModal(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        _calendarList.appendChild(daySquare);
        _calendar.appendChild(_calendarList);
    }
}

function closeModal() {
    eventTitleInput.classList.remove('error');
    _newEventModal.style.display = 'none';
    _deleteEventModal.style.display = 'none';
    _backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

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

function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('event', JSON.stringify(events));
    closeModal();
}

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

    document.getElementById('cancelBtn').addEventListener('click', closeModal);

    document.getElementById('deleteBtn').addEventListener('click', deleteEvent);

    document.getElementById('closeBtn').addEventListener('click', closeModal);
}

window.onload = function() {
    initButtons();
    load();
}


