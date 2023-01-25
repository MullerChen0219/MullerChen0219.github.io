//宣告

let todos = JSON.parse(localStorage.getItem("todo-list"));  //localStorage只能存放字串，因此需要先用parse方法將key值為todo-list的字串轉為陣列包物件形式才能繼續推入新的物件

let editId;
let isEditedTask = false;
//DOM
const taskInput = document.querySelector('.task-input input');
const taskBox = document.querySelector(".task-box");
const addBtn = document.querySelector('#addBtn');
const clearAll = document.querySelector('.clear-btn');
const clearCompleted = document.querySelector(".clear-completedBtn");
const clearNotCompleted = document.querySelector(".clear-notCompletedBtn");
let filters = document.querySelectorAll('.filters span');

addBtn.addEventListener('click', (e) => {
    let userTask = taskInput.value.trim();
    if (userTask != '') {
        if (!isEditedTask) {
          //若isEditedTask為false時，input輸入的文字將成為"新的待辦事項"
          //取得localStorage key值為todo-list的項目
            if (!todos) {
            //若 todos 不存在，傳入空陣列給變數todos
            todos = [];
            }
            let taskInfo = { name: userTask, status: "notCompleted" };
            todos.push(taskInfo); //將待辦事項"taskInfo物件"推入 todos陣列
        } else {
          //點擊Edit鈕後 editTask()會把isEditedTask的值改為true，這時就能編輯當下點選的待辦事項，同時要把isEditedTask的值再指派成false，以便新增新待辦事項
            isEditedTask = false;
            todos[editId].name = userTask;
            addBtn.classList.remove("btn-warning");
            addBtn.classList.add("btn-primary");
            addBtn.innerText = "Add";
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo("all");
    } else {
        emptyTaskAlert();
    }
    
    
})

taskInput.addEventListener('keyup', (e) => {
    let userTask = taskInput.value.trim();
    if (e.key == 'Enter' && userTask) {
        if(!isEditedTask) {     //若isEditedTask為false時，input輸入的文字將成為"新的待辦事項"
            //取得localStorage key值為todo-list的項目
            if(!todos) {    //若 todos 不存在，傳入空陣列給變數todos
                todos = [];
            }
            let taskInfo = { name: userTask, status: 'notCompleted'};
            todos.push(taskInfo); //將待辦事項"taskInfo物件"推入 todos陣列

        } else {
          //點擊Edit鈕後 editTask()會把isEditedTask的值改為true，這時就能編輯當下點選的待辦事項，同時要把isEditedTask的值再指派成false，以便新增新待辦事項
            isEditedTask = false;
            todos[editId].name = userTask;
            addBtn.classList.remove("btn-warning");
            addBtn.classList.add("btn-primary");
            addBtn.innerText = "Add";
        }
        taskInput.value = '';
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo('all');
    }
})

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('span.active').classList.remove('active');
        btn.classList.add('active');
        showTodo(btn.id);
    });
});

//function
function showTodo(filter) {
    let li = '';
    if (todos) {
            todos.forEach((todo,index) => {
            //若待辦事項為'已完成'狀態,將'checked'指派為 isCompleted 的值
            let isCompleted = todo.status == 'completed' ? 'checked' : '';
            if (filter == todo.status || filter == 'all') {
                li += `<li class="task">
                            <label for="${index}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${index}" ${isCompleted} >
                                <p class="${isCompleted}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                <ul class="task-menu">
                                    <li onclick="editTask(${index}, '${todo.name}')"><i class="fa-solid fa-pencil"></i>Edit</li>
                                    <li onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i>Delete</li>
                                </ul>
                            </div>
                        </li>`;
            }
        });
    }
    taskBox.innerHTML = li || `<span class="ms-4 fs-4">You don't have any task here</span>`;
}

function showMenu(selectedTask) {
    //取得taskMenu節點(div)
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add('show');
    document.addEventListener('click', (e) => {
      // 如果滑鼠點擊到不是<i>標籤或是現在正在點選的taskMenu節點，移除taskMenu上名為'show'的class
        if (e.target.tagName != "I" || e.target != selectedTask) {
            taskMenu.classList.remove("show");
        }
    });
}

function showDeleteBtns(selectedBtn) {
    let btnMenu = selectedBtn.parentElement.lastElementChild;
    btnMenu.classList.add('show');
    document.addEventListener('click', (e) => {
        if(e.target.tagName != 'I' || e.target != selectedBtn) {
            btnMenu.classList.remove('show');
        }
    });
}

function editTask(taskId, taskName) {
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;
    addBtn.classList.remove("btn-primary");
    addBtn.classList.add("btn-warning");
    addBtn.innerText = 'Edit';

}


function deleteTask(deleteId) {
    //從todos中刪除所點選到的待辦事項
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    taskInput.value = '';
    showTodo('all');
}

clearAll.addEventListener('click', () => {
    if (todos.length != 0) {
        deleteTaskAlert();
        document.querySelector(".swal2-confirm").addEventListener("click", () => {
        todos.splice(0, todos.length);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo("all");
        });
    }
})

clearCompleted.addEventListener('click', () => {
        if (todos.length != 0 && todos.filter(x => x.status == 'completed').length != 0) {
            deleteTaskAlert();
            document.querySelector(".swal2-confirm").addEventListener("click", () => {
            todos.forEach((task, index, arr) => {
                if (task.status == 'completed') {
                    arr.splice(index,1);
                }
            });
            while (todos.length != 0 && todos.filter(x => x.status == 'completed').length != 0) {
                deleteLoop('completed');
            }
            localStorage.setItem("todo-list", JSON.stringify(todos));
            showTodo("all");
        });
    }
})

clearNotCompleted.addEventListener('click', () => {
        if (todos.length != 0 && todos.filter(x => x.status == 'notCompleted').length != 0) {
            deleteTaskAlert();
            document.querySelector(".swal2-confirm").addEventListener("click", () => {
            todos.forEach((task, index, arr) => {
                if (task.status == "notCompleted") {
                    arr.splice(index, 1);
                }
            });
            while (todos.length != 0 && todos.filter(x => x.status == 'notCompleted').length != 0) {
                deleteLoop('notCompleted');
            }
            localStorage.setItem("todo-list", JSON.stringify(todos));
            showTodo("all");
        });
    }
})

function deleteLoop(status) {
    todos.forEach((task, index, arr) => {
    if (task.status == `${status}`) {
        arr.splice(index, 1);
    }
    });
}

function updateStatus(selectedTask) {
    //為點選到的<p>標籤內容添加名為'checked'的class
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        // 當<p>標籤被點選時同步更新該待辦事項的status(由notCompleted變completed/反之亦然)
        todos[selectedTask.id].status = 'completed';
    } else {
        taskName.classList.remove('checked');
        todos[selectedTask.id].status = "notCompleted";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("all");
}

function emptyTaskAlert() {
    Swal.fire({
    title: "是不是點太快?",
    text: "待辦事項不得為空值~",
    icon: "error",
    showCancelButton: true,
    });
}
function deleteTaskAlert() {
    Swal.fire({
    title: "確定要刪除目前選取的待辦事項嗎?",
    icon: "info",
    showCancelButton: true,
    });
}
//window.onload

window.onload = function() {
    showTodo('all');
}