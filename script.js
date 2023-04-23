// Function to add a new task to the list
function addTask() {
    var input = document.getElementById("input-task");
    var task = input.value;
    input.value = "";
    fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            getTasks();
        })
        .catch(error => console.error(error));
}

// Function to toggle the completion status of a task
function toggleTaskCompletion(id, isCompleted) {
    fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ isCompleted })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            getTasks();
        })
        .catch(error => console.error(error));
}

// Function to delete a task from the list
function deleteTask(id) {
    fetch(`/api/todos/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            getTasks();
        })
        .catch(error => console.error(error));
}

// Function to get the list of tasks from the server and display them on the page
function getTasks() {
    fetch("/api/todos")
        .then(response => response.json())
        .then(tasks => {
            var list = document.getElementById("tasks");
            list.innerHTML = "";
            tasks.forEach(task => {
                var item = document.createElement("li");
                item.innerHTML = `
          <span>${task.task}</span>
          <button onclick="toggleTaskCompletion('${task._id}', ${!task.isCompleted
                    })">${task.isCompleted ? "Undo" : "Complete"}</button>
          <button onclick="deleteTask('${task._id}')">Delete</button>
        `;
                item.classList.add("task");
                if (task.isCompleted) {
                    item.classList.add("completed");
                }
                list.appendChild(item);
            });
        })
        .catch(error => console.error(error));
}

// Call the getTasks function on page load to retrieve the initial list of tasks
getTasks();
