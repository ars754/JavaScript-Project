// Task array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DOM elements
const taskInput = document.getElementById("task");
const list = document.getElementById("list");

// Display tasks
function displayTasks() {
    list.innerHTML = tasks
        .map(
            (task, index) => `
            <li>
                ${task}
                <button onclick="removeTask(${index})">x</button>
            </li>`
        )
        .join("");
    }

// Add task
function addTask() {
    const text = taskInput.value.trim();

    if (!text) {
        alert("Please enter a task");
        return;
    }

    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

// Remove task
function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks() {
    tasks = [];
    saveTasks();
    displayTasks();
}

// Add task on Enter key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Initial render
displayTasks();
