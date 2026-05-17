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
    clearError
} from './ui.js'

loadTasks();

const form = document.getElementById("task-inpt");
const taskContainer = document.getElementById("tasks-container");



taskContainer.addEventListener('click',(event)=>{
        if(!event.target.matches(".delete-btn")){
            return;
        }

        const taskCard = event.target.closest(".task-card");

        const taskName = taskCard.querySelector(".task-title").textContent;

        deleteTask(taskName);

        saveTasks();
        
        renderTasks(getTasks());

    });


taskContainer.addEventListener('click',(event)=>{
        if(!event.target.matches(".complete-btn")){
            return;
        }

        const taskCard = event.target.closest(".task-card");

        const taskName = taskCard.querySelector(".task-title").textContent;

        console.log(`Complete requested for : ${taskName}`);

        completeTask(taskName);

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
    try{
    const task = createTask(taskName.value , taskDes.value , priority.value , progress.value);

    addTask(task);
    
    taskName.value = "";
    taskDes.value = "";
    priority.value = "";
    progress.value = "";

    console.log(task);
    console.log(getTasks);

    saveTasks();

    renderTasks(getTasks());
    }catch(err){
        console.log(`Error`,err);
    }
   
});