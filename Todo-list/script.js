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
  const category = document.getElementById("category").value;
  const taskType = document.querySelector(
    'input[name="taskType"]:checked'
  ).value;

  if (text !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add(category.toLowerCase(), taskType.toLowerCase());

    const taskDetails = document.createElement("div");
    taskDetails.innerHTML = `<strong>${text}</strong> <em> ${taskType}</em>`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");

    checkbox.addEventListener("change", function () {
      taskDetails.classList.toggle("completed", checkbox.checked);
    });

    removeButton.addEventListener("click", function () {
      list.removeChild(taskItem);
      checkEmptyList();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskDetails);
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
