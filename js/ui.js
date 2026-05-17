import { loadTasks } from "./storage.js";

const form = document.getElementById("task-inpt");
const taskContainer = document.getElementById("tasks-container");
const errContainer = document.getElementById("err-container");


export function clearTasks(){
    taskContainer.innerHTML = "";
}


export const renderTasks = (tasks) =>{
    clearTasks();
    
    tasks.forEach((task)=>{
        const taskHTML = `
        <div class="task-card">
                <h2 class="task-title">${task.name}</h2>
                    <p class="task-description">${task.description}</p>
            <div class="task-meta">
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Progress:</strong> ${task.progress}</p>
            </div>

            <div id="task-action">
                <button type = "button" class = "delete-btn">Delete</button>
                <button type = "button" class= "complete-btn">Mark complete</button>
            </div>
        </div>

        `
        
        taskContainer.insertAdjacentHTML("beforeend",taskHTML);
    });

    
}


export function showError(message){
    errContainer.innerHTML = message;
}

export function clearError(){
    errContainer.innerHTML = "";
}

