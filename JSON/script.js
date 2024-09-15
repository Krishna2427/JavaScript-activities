document.addEventListener('DOMContentLoaded', function(){
    const tasksrow = document.querySelector('#tasksrow'); //div to add
    const form = document.querySelector('#taskForm');
    const togglebutton = document.querySelector('.togglebutton');
    let tasks = [];

    // Dialog boxes
    const editTaskForm = document.querySelector('#editTaskForm');
    const addsubtaskform = document.querySelector('#addsubtaskform');
    const editSubtaskForm = document.querySelector('#editSubtaskForm');

    // Priority
    const prioritysortbutton = document.querySelector('.prioritysortbutton');
    const datesortbutton = document.querySelector('.datesortbutton');

    // Export and import
    const importbutton = document.querySelector('.importbutton');
    const exportbutton = document.querySelector('.exportbutton');

    // Searching
    const searchbutton = document.querySelector('.searchbutton');
    const searchinput = document.querySelector('.searchinput');

    // Indexes
    let currenttaskindex = null;
    let currentsubtaskindex = null;

    function addingtasks(filteredTasks = tasks) {
        tasksrow.innerHTML = '';  
        filteredTasks.forEach((task, taskIndex) => {  
            const taskdiv = document.createElement('div');
            taskdiv.setAttribute('class', 'col-md-12 mb-3 divdrag');
            taskdiv.setAttribute('draggable', 'true');
            taskdiv.dataset.type = 'task'; 
            taskdiv.dataset.index = taskIndex;
    
            taskdiv.innerHTML = `
                <div class='card' draggable='true'>
                    <div class='card-body'>
                        <h5 class='card-title'>${task.task}</h5>
                        <p class="card-text">Priority: ${task.priority}</p>
                        <p class="card-text">Date: ${new Date(task.dateTime).toLocaleString()}</p>
                        <button class="btn btn-primary me-2 edittaskbutton" data-index="${taskIndex}" data-bs-toggle="modal" data-bs-target="#edittaskmodal">Edit</button>
                        <button class="btn btn-secondary me-2 addsubtaskbutton" data-index="${taskIndex}" data-bs-toggle="modal" data-bs-target="#addsubtaskmodal">Add Subtask</button>
                        <button class="btn btn-danger deletetaskbutton" data-index="${taskIndex}">Delete</button>
                        <div class="subtasksdiv mt-3">
                            <h6>SubTasks</h6>
                            <ul class="list-group">
                                ${task.subtasks.map((subtask, subtaskIndex) => `
                                    <li class="list-group-item" draggable="true" data-task-index="${taskIndex}" data-subtask-index="${subtaskIndex}">
                                        ${subtask.subtask}
                                        <span class="badge bg-primary ms-2">${subtask.priority}</span>
                                        <span class="badge bg-info ms-2">${new Date(subtask.dateTime).toLocaleString()}</span>
                                        <button class="btn btn-link btn-sm editsubtaskbutton" data-task-index="${taskIndex}" data-subtask-index="${subtaskIndex}" data-bs-toggle="modal" data-bs-target="#editsubtasksmodal">Edit</button>
                                        <button class="btn btn-link btn-sm deletesubtaskbutton" data-task-index="${taskIndex}" data-subtask-index="${subtaskIndex}">Delete</button>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>`;
    
            tasksrow.appendChild(taskdiv);
        });
    }

    function addtaskfunction(task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Store to local storage
        addingtasks();
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.querySelector('#taskInput');
        const priorityInput = document.querySelector('#priorityInput');
        const dateInput = document.querySelector('#dateInput');
        if(taskInput.value.trim() !== '' && priorityInput.value && dateInput.value) {
            const task = {
                task: taskInput.value.trim(),
                priority: priorityInput.value,
                dateTime: new Date(dateInput.value).getTime(),
                subtasks: []
            };
            addtaskfunction(task);
            form.reset();
        }
    });

    tasksrow.addEventListener('click', function(event) {
        if (event.target.classList.contains('deletetaskbutton')) {
            const taskIndex = event.target.getAttribute('data-index');
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                addingtasks();
            }
        }
        // Handle subtask deletion
        if (event.target.classList.contains('deletesubtaskbutton')) {
            const taskIndex = event.target.getAttribute('data-task-index');
            const subtaskIndex = event.target.getAttribute('data-subtask-index');
            if (confirm('Are you sure you want to delete this subtask?')) {
                tasks[taskIndex].subtasks.splice(subtaskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                addingtasks();
            }
        }
        // Handle editing of task
        if (event.target.classList.contains('edittaskbutton')) {
            currenttaskindex = event.target.getAttribute('data-index');
            const task = tasks[currenttaskindex];
            document.querySelector('#edittaskinput').value = task.task;
            document.querySelector('#editpriorityinput').value = task.priority;
            document.querySelector('#editdateinput').value = new Date(task.dateTime).toISOString().slice(0, -1);
        }
        // Handle adding of subtasks
        if (event.target.classList.contains('addsubtaskbutton')) {
            currenttaskindex = event.target.getAttribute('data-index');
        }
        // Handle editing of subtasks
        if (event.target.classList.contains('editsubtaskbutton')) {
            currenttaskindex = event.target.getAttribute('data-task-index');
            currentsubtaskindex = event.target.getAttribute('data-subtask-index');
            const subtask = tasks[currenttaskindex].subtasks[currentsubtaskindex];
            document.querySelector('#editSubtaskInput').value = subtask.subtask;
            document.querySelector('#editSubtaskPriorityInput').value = subtask.priority;
            document.querySelector('#editSubtaskDateTimeInput').value = new Date(subtask.dateTime).toISOString().slice(0, -1);
        }
    });

    editTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const edittaskinput = document.querySelector('#edittaskinput').value;
        const editpriorityinput = document.querySelector('#editpriorityinput').value;
        const editdateinput = document.querySelector('#editdateinput').value;
        if(currenttaskindex !== null) {
            tasks[currenttaskindex].task = edittaskinput;
            tasks[currenttaskindex].priority = editpriorityinput;
            tasks[currenttaskindex].dateTime = new Date(editdateinput).getTime();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            addingtasks();
            currenttaskindex = null;
        }
    });

    addsubtaskform.addEventListener('submit', function(event) {
        event.preventDefault();
        const subtaskInput = document.querySelector('#subtaskinput').value;
        const subtaskPriorityInput = document.querySelector('#subtaskpriorityinput').value;
        const subtaskDateTimeInput = document.querySelector('#subtaskdatetimeinput').value;
        if(currenttaskindex !== null) {
            const subtask = {
                subtask: subtaskInput,
                priority: subtaskPriorityInput,
                dateTime: new Date(subtaskDateTimeInput).getTime()
            };
            tasks[currenttaskindex].subtasks.push(subtask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            addingtasks();
            currenttaskindex = null;
        }
    });

    editSubtaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const editSubtaskInput = document.querySelector('#editSubtaskInput').value;
        const editSubtaskPriorityInput = document.querySelector('#editSubtaskPriorityInput').value;
        const editSubtaskDateTimeInput = document.querySelector('#editSubtaskDateTimeInput').value;
        if (currenttaskindex !== null && currentsubtaskindex !== null) {
            tasks[currenttaskindex].subtasks[currentsubtaskindex].subtask = editSubtaskInput;
            tasks[currenttaskindex].subtasks[currentsubtaskindex].priority = editSubtaskPriorityInput;
            tasks[currenttaskindex].subtasks[currentsubtaskindex].dateTime = new Date(editSubtaskDateTimeInput).getTime();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            addingtasks();
            currenttaskindex = null;
            currentsubtaskindex = null;
        }
    });

    // Sorting
    prioritysortbutton.addEventListener('click', function() {
        tasks.sort((a, b) => {
            const priorities = { 'High': 1, 'Medium': 2, 'Low': 3 };
            return priorities[a.priority] - priorities[b.priority];
        });
        addingtasks();
    });

    datesortbutton.addEventListener('click', function() {
        try {
            tasks.sort((a, b) => a.dateTime - b.dateTime);
            addingtasks();
        } catch (error) {
            alert(`Error sorting tasks by date: ${error.message}`);
        }
    });

    // Search Functionality
    searchbutton.addEventListener('click', function() {
        const searchTerm = searchinput.value.toLowerCase();
        const filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchTerm));
        addingtasks(filteredTasks);
    });

    // Theme Toggle
    togglebutton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Loading Tasks from Local Storage
    function loadtasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            tasks = storedTasks;
            addingtasks();
        }
    }

    // Initialize
    loadtasks();
});