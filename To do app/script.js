// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    // Append the button to the list item and the list item to the task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Add event listener to the button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
