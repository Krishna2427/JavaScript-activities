document.addEventListener('DOMContentLoaded', ()=>{
     const todoForm = document.getElementById('todoForm');
     const todoList = document.getElementById('todoList');
     const clearTasks = document.getElementById('clearTasks');

     displayTasks
     todoForm.addEventListener('submit',(e)=>{
           e.preventDefault();
           const task = document.getElementById('todoInput').value;
           addTask(task);
           displayTasks()
           todoForm.reset();
     })
    function addTask(task){
          const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
     }

    function displayTasks(){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        todoList.innerHTML ='';
        if(tasks.length == 0){
            todoList.textContent = `No tasks added yet`;
            return;
        }
        tasks.forEach((task, index)=>{
            const listItem = document.createElement('li');
            listItem.textContent = task;
            todoList.appendChild(listItem);
        })

    }
    clearTasks.addEventListener('click',() =>{
        localStorage.removeItem('tasks');
        displayTasks();
    });
});