import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';

const TASKS_STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksStorageService {

  constructor() { }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    const tasksFromStorage = localStorage.getItem(TASKS_STORAGE_KEY);
    if (tasksFromStorage === null) {
      return this.getMockTasks();
    } else {
      return JSON.parse(tasksFromStorage);
    }
  }

  getTaskById(id: string): Task {
    return this.getTasks().filter(task => task.id === id)[0];
  }

  updateTasks(tasks: Task[]): void {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }

  updateTask(task: Task): void {
    const tasks = this.getTasks();
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === task.id) {
        tasks[i] = task;
      }
    }
    this.updateTasks(tasks);
  }

  removeTaskById(id: string): void {
    const tasks = this.getTasks();
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1);
      }
    }
    this.updateTasks(tasks);
  }

  private getMockTasks(): Task[] {
    return [
      new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false,
      ),
      new TaskModel(
        '2',
        'task 2',
        new Date().toDateString(),
        Colors.CYAN,
        false,
        false,
      ),
      new TaskModel(
        '3',
        'task 3',
        new Date().toDateString(),
        Colors.GREEN,
        false,
        false,
      ),
      new TaskModel(
        '4',
        'task 4',
        new Date().toDateString(),
        Colors.RED,
        true,
        false,
      ),
      new TaskModel(
        '5',
        'task 5',
        new Date().toDateString(),
        Colors.CYAN,
        true,
        false,
      ),
      new TaskModel(
        '6',
        'task 6',
        new Date().toDateString(),
        Colors.GREEN,
        false,
        true,
      ),
    ];
  }
}
