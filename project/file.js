const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // Toggle completed state
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");

  // Delete task on button click
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent li click event
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
