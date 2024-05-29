import TaskManager from './taskManager.js';

const taskManager = new TaskManager('Timo');

taskManager.addTask('Finish exercises');
taskManager.addTask('Commit changes');
taskManager.addTask('Study more');

taskManager.listTasks();
