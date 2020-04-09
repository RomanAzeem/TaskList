// Initialize the variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// load all eventlistener
loadEventListener();
function loadEventListener() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter task event
  filter.addEventListener('keyup', filterTask);
}

// addTask function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  //   Create new li element
  const li = document.createElement('li');
  //   Add class
  li.className = 'collection-item';
  //   Create textnode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //   Create new link
  const link = document.createElement('a');
  //   Add class to link
  link.className = 'delete-item secondary-content';
  //   add icon html
  link.innerHTML = '<i class= "fa fa-remove" ></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  // store task in local storage
  storeIntoLocalStorage(taskInput.value);
  // clear the input field
  taskInput.value = '';
  e.preventDefault();
}
// Remove tasks function
function removeTask(e) {
  // Check if clicked target contains the required class
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      const test = e.target.parentElement.parentElement.textContent;
      e.target.parentElement.parentElement.remove();
      removeFromStorage(test);
    }
  }
}
// Remove All tasks function
function clearTasks(e) {
  if (confirm('Are you sure to clear tasks?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    clearStorage();
  }
}
// Filter Task function
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
// Store Tasks into Local Storage
function storeIntoLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Get Task from Local Storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
    //   Create new li element
    const li = document.createElement('li');
    //   Add class
    li.className = 'collection-item';
    //   Create textnode and append to li
    li.appendChild(document.createTextNode(task));
    //   Create new link
    const link = document.createElement('a');
    //   Add class to link
    link.className = 'delete-item secondary-content';
    //   add icon html
    link.innerHTML = '<i class= "fa fa-remove" ></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
// Clear All tasks from Local Storage
function clearStorage() {
  localStorage.clear();
}
// Remove Task from Local Storage
function removeFromStorage(text) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task, index) => {
    if (text === task) tasks.splice(index, 1);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
