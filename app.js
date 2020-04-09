// Initialize the variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// load all eventlistener
loadEventListener();
function loadEventListener() {
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
  taskInput.value = '';
  e.preventDefault();
}
// Remove tasks function
function removeTask(e) {
  // Check if clicked target contains the required class
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Remove All tasks function
function clearTasks(e) {
  if (confirm('Are you sure to clear tasks?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
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
