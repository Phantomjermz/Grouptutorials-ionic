import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  task: string = '';  // This will hold the value of the input field
  tasks: string[] = [];  // This will hold the list of tasks

  constructor() {}

  addTask() {
    if (this.task.trim().length > 0) {
      this.tasks.push(this.task);
      this.task = '';  // Clear the input field after adding the task
    }
  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}