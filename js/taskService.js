import { loadTasks } from './storage.js';

let tasks = [];

export const createTask = (name , description , priority , progress)=>{
    return {
        name,
        description,
        priority,
        progress,
    }
};


export function addTask(task){
    tasks.push(task);
};

export function getTasks(){
    return tasks;
}


export const isDuplicate = (taskName)=>{
    return tasks.some((task)=>task.name === taskName);
}

export function deleteTask(taskName){
   return  tasks = tasks.filter((task) => taskName !== task.name);
}


export function completeTask(taskName) {
  const task = tasks.find(task => task.name === taskName);

  if (task) {
    task.progress = "completed";
  }
}

export function setTasks(newTasks) {
    tasks = newTasks;
}