import { saveTasks ,loadTasks } from './storage.js';
import {
    createTask,
    addTask,
    getTasks,
    isDuplicate,
    deleteTask,
    completeTask
} from './taskService.js'

import {
    clearTasks,
    renderTasks,
    showError,
    clearError,
    showToast,
    clearToast
} from './ui.js'

loadTasks();

const form = document.getElementById("task-inpt");
const taskContainer = document.getElementById("tasks-container");


// delete task
taskContainer.addEventListener('click',(event)=>{
        if(!event.target.matches(".delete-btn")){
            return;
        }

        const taskCard = event.target.closest(".task-card");

        const taskName = taskCard.querySelector(".task-title").textContent;

        deleteTask(taskName);

        saveTasks();
        showToast("Task deleted succesfully");

        setTimeout(()=>{
            clearToast();
        },3000);

        renderTasks(getTasks());

    });

//complete task
taskContainer.addEventListener('click',(event)=>{
        if(!event.target.matches(".complete-btn")){
            return;
        }

        const taskCard = event.target.closest(".task-card");

        const taskName = taskCard.querySelector(".task-title").textContent;

        
        completeTask(taskName);

        showToast("Hurray!!Task Completed!!");


        setTimeout(()=>{
            clearToast();
        },3000);

        renderTasks(getTasks());

        saveTasks();
        
    });



form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let taskName = document.getElementById("tsk-name");
    let taskDes = document.getElementById("tsk-description");

    let priority = document.getElementById("slct-priority");
    let progress = document.getElementById("slct-progress");

    

    if(isDuplicate(taskName.value)){
       showError("A task with this name already exists : ");
       return;
    } 
    clearError();
  
    const task = createTask(taskName.value , taskDes.value , priority.value , progress.value);

    addTask(task);
    
    taskName.value = "";
    taskDes.value = "";
    priority.value = "";
    progress.value = "";
    
    showToast("Task added succesfully");

    setTimeout(()=>{
            clearToast();
    },3000);

    console.log(task);
    console.log(getTasks);


    
    saveTasks();

    renderTasks(getTasks());
    


   
});