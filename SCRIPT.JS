const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }


    const task = document.createElement("div");
    task.classList.add("task");


    const text = document.createElement("p");
    text.innerText = taskText;


    const nextButton = document.createElement("button");
    nextButton.innerText = "Move →";
    nextButton.classList.add("next-btn");


    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");


    task.appendChild(text);
    task.appendChild(nextButton);
    task.appendChild(deleteButton);


    todo.appendChild(task);


    
    nextButton.addEventListener("click", function() {

        if (task.parentElement === todo) {

            progress.appendChild(task);
            nextButton.innerText = "Move →";

        } 
        else if (task.parentElement === progress) {

            done.appendChild(task);
            nextButton.remove();

        }

    });


    
    deleteButton.addEventListener("click", function() {

        task.remove();

    });

    taskInput.value = "";
    taskInput.focus();
}