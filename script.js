document.addEventListener('DOMContentLoaded', function() {
     //selecting DOM elements
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

          //creating Add-task function
function  addTask() {
    //retrieving & trimming
    const taskText = taskInput.value.trim();

    //checking if task is empty
        if (!taskText) {
            alert('please enter a task!');
            return;
        }

        //  Task creation and removal
const taskItem = document.getElementById('li');
  taskItem.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
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
