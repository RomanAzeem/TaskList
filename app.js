// Initialize the variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearTask = document.querySelector('#clear-task');

// load all eventlistener
loadEventListener();
function loadEventListener() {
  // Add eventlistener on form
  form.addEventListener('submit', addTask);
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
  link.innerHTML = '<i class= "fa fa remove" ></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
  e.preventDefault();
}
