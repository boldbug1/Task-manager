import { loadTasks } from "./storage.js";

const form = document.getElementById("task-inpt");
const taskContainer = document.getElementById("tasks-container");
const errContainer = document.getElementById("err-container");
const toastContainer = document.querySelector(".toast-container");


export function clearTasks(){
    taskContainer.innerHTML = "";
}


export const renderTasks = (tasks) =>{
    clearTasks();
    
    tasks.forEach((task)=>{
        const isCompleted = task.progress === "completed";
        const completeBtnText = isCompleted ? "Completed":"Mark complete";
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
        <button type = "button"
        class= "complete-btn"
        ${isCompleted ? "disabled" : ""}
        style = "${isCompleted? "background-color : green": ""}" >${completeBtnText}</button>
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

export function showToast(message){
    const html = `
    <div class="toast-msg">${message}</div>
    `;
    toastContainer.insertAdjacentHTML("beforeend",html);
}

export function clearToast(){
    const toast = document.querySelector(".toast-msg");
        if (toast) {
                toast.classList.add('end');
                setTimeout(()=>{
                    toast.remove();
                },1000)
                 // Remove after animation duration (2s)
            } else {
                console.error('Toast element not found');
            }
       
}


export const removeElement = (element)=>{
    element.remove();
}
