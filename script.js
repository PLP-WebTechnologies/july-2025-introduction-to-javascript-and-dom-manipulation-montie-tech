// -----------------------------
// Part 1: Variables & Conditionals
// -----------------------------
let tasks = [];  // array to hold tasks
let maxTasks = 5;

if (tasks.length === 0) {
  console.log("Your task list is empty.");
}
// Part 2: Functions

function addTask(task) {
  if (tasks.length < maxTasks) {
    tasks.push(task);
    updateTaskList();
  } else {
    alert("Task limit reached!");
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
// Part 3: Loops

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // for loop example
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];

    // Add remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => removeTask(i);

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // for...of loop example
  let countText = "Tasks: ";
  for (let task of tasks) {
    countText += task + ", ";
  }
  document.getElementById("taskCount").textContent = countText;
}
// Part 4: DOM Interactions
// 1. Access input field
const input = document.getElementById("taskInput");

// 2. Add event listener to button
document.getElementById("addBtn").addEventListener("click", () => {
  const task = input.value.trim();
  if (task) {
    addTask(task);
    input.value = "";
  }
});

// 3. Update content dynamically
updateTaskList();
