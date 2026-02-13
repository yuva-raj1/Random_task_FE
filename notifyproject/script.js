function addTask() {
  let task = document.getElementById("task").value;
  let category = document.getElementById("category").value;

  if (task === "") {
    alert("Enter task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task + " (" + category + ")";
  document.getElementById("taskList").appendChild(li);

  alert("Reminder set for: " + task);
}
