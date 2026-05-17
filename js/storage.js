import { getTasks, setTasks } from './taskService.js';
import { renderTasks } from './ui.js';

export function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(getTasks()));
}

export function loadTasks(){
    const taskString = localStorage.getItem("tasks");

    const tasks = taskString ? JSON.parse(taskString) : [];

    setTasks(tasks);

    renderTasks(tasks);

}