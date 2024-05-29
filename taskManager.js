export default class TaskManager {
  constructor(username, tasks = []) {
    this.username = username;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  listTasks() {
    console.log(`Tasks for ${this.username}:`);
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}
