import { Injectable, signal, computed, effect } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private storageKey = 'tasks';

  private tasks = signal<Task[]>(this.loadFromStorage());
  //Signal of type list: we create an Angular signal to hold the list of tasks

  //from that list of tasks, we filter only the todo ones
  todoTasks = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  //from that list of tasks, we filter only the todo ones
  doneTasks = computed(() =>
    this.tasks().filter(task => task.completed)
  );

  constructor() {
    // Persist automatically whenever tasks change
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks()));
    });
  }

  addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    this.tasks.update(tasks => [...tasks, newTask]);
  }

  toggleTask(id: string) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  removeTask(id: string) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }

  private loadFromStorage(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}