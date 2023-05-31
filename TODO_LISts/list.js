const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

function addTask() {
  const task = taskInput.value;
  if (task.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}

taskList.addEventListener('click', function (event) {
  const element = event.target;
  if (element.classList.contains('deleteButton')) {
    const listItem = element.parentElement;
    listItem.remove();
  } else {
    element.classList.toggle('completed');
  }
});
