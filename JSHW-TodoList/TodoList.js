//宣告
let deleteTasks,
editTasks,
tasks;
let updateNote = '';
let count;

//DOM

const newTaskInput = document.querySelector('#new-task input');
const tasksDiv = document.querySelector('#tasks');

//function
function displayTasks() {
    if (Object.keys(localStorage).length > 0){
        tasksDiv.style.display = 'inline-block';
    }
    else{
        tasksDiv.style.display = 'none';
    }

    tasksDiv.innerHTML = '';

    let tasks = Object.keys(localStorage);
    tasks = tasks.sort();
    
    for (let key of tasks) {
        let classValue = '';

        //取得todo的值
        let value = localStorage.getItem(key);
        let taskInnerDiv = document.createElement('div');
        taskInnerDiv.classList.add('task');
        taskInnerDiv.setAttribute('id', key);
        taskInnerDiv.innerHTML = `<span id="taskname">
        ${key.split('_')[1]}</span>`

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = `<i class="fa-solid fa-square-pen"></i>`;

        if (!JSON.parse(value)) {
            editButton.style.visibility = 'visible';
        } else {
            editButton.style.visibility = 'hidden';
            taskInnerDiv.classList.add('completed');
        }
        taskInnerDiv.appendChild(editButton);
        taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
        tasksDiv.appendChild(taskInnerDiv);
    }

    tasks = document.querySelectorAll('.task');
    tasks.forEach((el,idx) => {
        el.addEventListener('click', function () {
            if (el.classList.contains('completed')) {
                updateStorage(el.id.split('_')[0],el.innerText, false);
            } else {
                updateStorage(el.id.split("_")[0], el.innerText, true);
            }
        });
    });
    editTasks = document.getElementsByClassName("edit");
    Array.from(editTasks).forEach((el, idx) => {
        el.addEventListener("click", (e) => {
            e.stopPropagation();

            disableButtons(true);

            let parent = el.parentElement;
            newTaskInput.value = parent.querySelector("#taskname").innerText;

            updateNote = parent.id;

            parent.remove();
        });
    });

    deleteTasks = document.getElementsByClassName('delete');
    Array.from(deleteTasks).forEach((el,idx) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();

            let parent = el.parentElement;
            removeTask(parent.id);
            parent.remove();
            count -= 1;
        });
    });
};
    


function disableButtons(bool) {
    let editButtons = document.getElementsByClassName('edit');
    Array.from(editButtons).forEach(btns => {
        btns.disabled = bool;
    });
};

function removeTask(taskValue) {
    localStorage.removeItem(taskValue);
    displayTasks();
}

function updateStorage(index,taskValue,completed) {
    localStorage.setItem(`${index}_${taskValue}`,completed);
    displayTasks();
};

document.querySelector('#push').addEventListener('click', () => {
    disableButtons(false);
    if (newTaskInput.value.length == 0) {
        alert('待辦事項不得為空白');
    } else {
        if (updateNote == '') {
            updateStorage(count, newTaskInput.value,false)
        } else {
            let existingCount = updateNote.split('_')[0];
            removeTask(updateNote);
            updateStorage(existingCount, newTaskInput.value, false);
            updateNote = '';
        }
        count += 1;
        newTaskInput.value = '';
    }
})

//window.onload


window.onload = function () {
    updateNote = '';
    count = Object.keys(localStorage).length;
    displayTasks();
};