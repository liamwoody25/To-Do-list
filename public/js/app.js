const addTask = document.querySelector('.add-btn');
const removeTask = document.querySelector('.delete-btn');



addTask.addEventListener('click', function(){
  const input = document.querySelector('.task-input')
  const list = document.querySelector('ul');
  const task = document.createElement('li')

  task.textContent = input.value;
  input.value = ''
  list.append(task)
})

removeTask.addEventListener('click', function(){
  const lastTask = document.querySelector('li:last-child');
  lastTask.remove()
})

