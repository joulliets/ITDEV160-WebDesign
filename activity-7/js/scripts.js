// Create an array named tasks to hold tasks
var tasks = [];

// Create a taskStatus ‘enum’ object
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Create a Task constructor function
function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

// Create an addTaskElement function
function addTaskElement(task) {
    // Create the task element
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set the element id attribute equal to the task object id property
    taskEl.setAttribute('id', task.id);

    // Append the text element to the text element
    taskEl.appendChild(textEl);

    // Append the task element to the active task list
    listEl.appendChild(taskEl);
}

// Create an addTask function to create a new task
function addTask(event) {
    // Get the user input text using a DOM method
    var inputEl = document.getElementById("input-task");

    if (inputEl.value != '') {
        // Create a unique id for the task based on the task’s index in the tasks array
        var id = 'item-' + tasks.length;
    
        // Create a new task object
        var task = new Task(id, inputEl.value, taskStatus.active);

        // Add the task object to the tasks array
        tasks.push(task);

        // Create a new task element and add it to the DOM
        addTaskElement(task);

        // Reset input
        inputEl.value = '';
    }
}

// Create a completeTask function to complete a task
function completeTask(event) {
    // Get the task element from the event object parameter
    var taskEl = event.target;
    var id = taskEl.id;

    // Using the task id, find the task in the tasks array and update the task status from active to completed
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    // Remove the task from the active task list and append it to the completed task list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton(event) {
    if(event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

// Create an init function to initialize the app
function init() {
    // Wire the addTask function to the add-task button onclick event
    document.getElementById('add-task').onclick = addTask;

    // Wire the completeTask function to the active list onclick event.
    document.getElementById('input-task').onkeypress = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}

init();