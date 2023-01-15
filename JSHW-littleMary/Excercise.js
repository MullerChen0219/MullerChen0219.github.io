//宣告
let exerciseData = [
    {
        id: '1',
        color: '#ccc',
        icon: 'fa-solid fa-person-running',
        description: '跑步30分鐘',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '2',
        color: '#ccc',
        icon: 'fa-solid fa-person-biking',
        description: '從北投騎YouBike到大稻埕',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '3',
        color: '#ccc',
        icon: 'fa-solid fa-dumbbell',
        description: 'TABATA高強度間歇運動8組動作3循環',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '4',
        color: '#ccc',
        icon: 'fa-solid fa-person-running',
        description: '跑步30分鐘',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '5',
        color: '#ccc',
        icon: 'fa-solid fa-person-biking',
        description: '從北投騎YouBike到大稻埕',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '6',
        color: '#ccc',
        icon: 'fa-solid fa-dumbbell',
        description: 'TABATA高強度間歇運動8組動作3循環',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '7',
        color: '#ccc',
        icon: 'fa-solid fa-person-running',
        description: '跑步30分鐘',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '8',
        color: '#ccc',
        icon: 'fa-solid fa-person-biking',
        description: '從北投騎YouBike到大稻埕',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    },
    {
        id: '9',
        color: '#ccc',
        icon: 'fa-solid fa-dumbbell',
        description: 'TABATA高強度間歇運動8組動作3循環',
        openModal: function () {
            bootstrap.Modal.getOrCreateInstance(_resultModal).show()
        }
    }
]

let activityData = [
    {
        id: '10',
        color: '#999',
        icon: 'fa-solid fa-code-branch',
        description: '恭喜!  重做行事曆!'
    },
    {
        id: '11',
        color: '#999',
        icon: 'fa-brands fa-playstation',
        description: '打個電動，休息一下'
    },
    {
        id: '12',
        color: '#999',
        icon: 'fa-solid fa-tv',
        description: '追劇追起來'
    },
    {
        id: '13',
        color: '#999',
        icon: 'fa-solid fa-code-branch',
        description: '恭喜!  重做行事曆!'
    },
    {
        id: '14',
        color: '#999',
        icon: 'fa-brands fa-playstation',
        description: '打個電動，休息一下'
    },
    {
        id: '15',
        color: '#999',
        icon: 'fa-solid fa-tv',
        description: '追劇追起來'
    },
    {
        id: '16',
        color: '#999',
        icon: 'fa-solid fa-code-branch',
        description: '恭喜!  重做行事曆!'
    },
    {
        id: '17',
        color: '#999',
        icon: 'fa-brands fa-playstation',
        description: '打個電動，休息一下'
    },
    {
        id: '18',
        color: '#999',
        icon: 'fa-solid fa-tv',
        description: '追劇追起來'
    },
]

let allExercises
let exerciseSteps = 0
let allExerciseSteps = 0
let currentExercise = 0
let exerciseSpeed

let allActivities
let activitySteps = 0
let allActivitiesSteps = 0
let currentActivity = 0
let activitySpeed
//DOM
const _startBtn = document.querySelector('#startBtn')
const _resultModal = document.querySelector('#resultModal')
const _msgBoxForExercise = document.querySelector('#msgBoxForExercise')
const _msgBoxForActivity = document.querySelector('#msgBoxForActivity')
//function
function renderExercises() {
    allExercises = document.querySelectorAll('[exercise-id]')
    allExercises = Array.from(allExercises).sort((a, b) => {
        return a.getAttributeNode('exercise-id').value - b.getAttributeNode('exercise-id').value
    })

    allExercises.forEach(exercises => {
        let id = exercises.getAttributeNode('exercise-id').value
        let edata = exerciseData.find(exercises => exercises.id == id)

        let icon = document.createElement('i')
        icon.setAttribute('class', edata.icon)
        icon.style.color = edata.color
        exercises.appendChild(icon)
    })
}

function renderActivities() {
    allActivities = document.querySelectorAll('[activity-id]')
    allActivities = Array.from(allActivities).sort((a, b) => {
        return a.getAttributeNode('activity-id').value - b.getAttributeNode('activity-id').value
    })

    allActivities.forEach(activities => {
        let id = activities.getAttributeNode('activity-id').value
        let adata = activityData.find(activities => activities.id == id)

        let icon = document.createElement('i')
        icon.setAttribute('class', adata.icon)
        icon.style.color = adata.color
        activities.appendChild(icon)
    })
}

function chooseExercise() {
    exerciseSpeed = 75

    let random = Math.floor(Math.random() * exerciseData.length) + 1
    exerciseSteps = random + (5 * allExercises.length)
    allExerciseSteps = exerciseSteps
    exerciseTurnAround()
}

function exerciseTurnAround() {
    allExercises[currentExercise].classList.remove('active')
    currentExercise++

    if (currentExercise >= allExercises.length) currentExercise = 0

    allExercises[currentExercise].classList.add('active')
    exerciseSteps--

    if (exerciseSteps > 0) {
        setTimeout(exerciseTurnAround, exerciseSpeed)


        if (exerciseSteps < Math.floor((allExerciseSteps / 4))) exerciseSpeed += 8
    } else {
        exerciseData[currentExercise].openModal()
        _msgBoxForExercise.innerHTML = ''
        _msgBoxForExercise.innerHTML = `<h2>${exerciseData[currentExercise]['description']}</h2>`

    }
}
function chooseActivity() {
    activitySpeed = 75

    let random = Math.floor(Math.random() * activityData.length) + 1
    activitySteps = random + (5 * allActivities.length)
    allActivitiesSteps = activitySteps
    activityTurnAround()
}

function activityTurnAround() {
    allActivities[currentActivity].classList.remove('active')
    currentActivity++

    if (currentActivity >= allActivities.length) currentActivity = 0

    allActivities[currentActivity].classList.add('active')
    activitySteps--

    if (activitySteps > 0) {
        setTimeout(activityTurnAround, activitySpeed)


        if (activitySteps < Math.floor((allActivitiesSteps / 4))) activitySpeed += 8
    } else {
        _msgBoxForActivity.innerHTML = ''
        _msgBoxForActivity.innerHTML = `
                            <h2>之後</h2>
                            <h2>${activityData[currentActivity]['description']}</h2>`

    }
}
//window.onload

window.onload = function () {
    renderExercises()
    renderActivities()

    _startBtn.addEventListener('click', function () {
        chooseExercise();
        chooseActivity();
    })
}