const addTask = document.querySelector('.add-btn'); 
const removeTask = document.querySelector('.delete-btn'); 

// this code operates the task button when pressed
addTask.addEventListener('click', function(){
  const input = document.querySelector('.task-input')
  const list = document.querySelector('ul');
  const task = document.createElement('li')

  task.textContent = input.value;
  input.value = ''
  list.append(task)
})


// this code operates the delete button when pres
removeTask.addEventListener('click', function(){
  const lastTask = document.querySelector('li');
  lastTask.remove()
})

