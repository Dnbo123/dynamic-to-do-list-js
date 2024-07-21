document.addEventListener('DOMContentLoaded', function() {
     //selecting DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


    //Function to load tasks from local storage
function loadTasks() {
const tasksFromStorage = local.storage.getItem('tasks');
let tasks = [];
if (tasksFromStorage) {
tasks = JSON.parse(tasksFromStorage);
}
tasks.forEach(task => createTaskElement(task));
}

//Function to create task element in DOM
function createTaskElement (task) {
const taskItem = document.createElement('li');
taskItem.textContent = task;

const removeBtn = document.createElement('button');
removeBtn.textContent = 'remove';
removeBtn.className = 'remove-btn';
removeBtn.onclick = function () {
taskList.removeChild(taskItem);

//updating task array and local storage on removal
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskIndex = tasks.indexOf(task);
tasks.splice(taskIndex, 1);
localStorage.setItem('tasks', JSON.stringify(tasks));
};
taskItem.appendChild(removeBtn);
taskList.appendChild(taskItem);
}


          //creating Add-task function
function  addTask() {
    //retrieving & trimming
    const taskText = taskInput.value.trim();

    //checking if task is empty
        if (!taskText) {
            alert('please enter a task!');
            return;
        }
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.push(taskText);
localStorage.setItem('tasks', JSON.stringify(tasks));

createTaskElement(taskText);
taskInput.value = '';
}
loadTasks();

        //  Task creation and removal
const taskItem = document.getElementById('li');
  taskItem.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add = ('remove-btn');
  removeBtn.onclick = function() {
taskList.removeChild(taskItem)
  };

taskItem.appendChild(removeBtn);
taskItem.appendChild(taskItem);

//clearing task input fields
taskInput.value = '';
}

//Attaching event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        addTask();
    }
});
});
