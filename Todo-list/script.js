const input = document.getElementById("input");
const addTask = document.getElementById("addTask");
const list = document.getElementById("list");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");
const toggleTheme = document.getElementById("toggleTheme");

function checkEmptyList() {
  emptyMessage.style.display = list.children.length === 0 ? "block" : "none";
  taskCount.textContent = `Total tasks: ${list.children.length}`;
}

checkEmptyList();

addTask.addEventListener("click", function () {
  const text = input.value.trim();
  if (text !== "") {
    const taskItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    const taskText = document.createElement("span");
    taskText.textContent = text;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");

    checkbox.addEventListener("change", function () {
      taskText.classList.toggle("completed", checkbox.checked);
    });

    taskText.addEventListener("click", function () {
      const newText = prompt("Edit your task:", taskText.textContent);
      if (newText) {
        taskText.textContent = newText.trim();
      }
    });

    removeButton.addEventListener("click", function () {
      list.removeChild(taskItem);
      checkEmptyList();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(removeButton);
    list.appendChild(taskItem);

    input.value = "";
    checkEmptyList();
  }
});

toggleTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark")
    ? "☀️ "
    : "🌙 ";
});
