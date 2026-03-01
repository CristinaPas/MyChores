import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  newTaskTitle = ''; //create and instantiate an empty string to hold the new task title
  constructor(public taskService: TaskService) {} //we inject here the TaskService to use its methods and properties in our component
  showInputField = signal(false);

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    this.taskService.addTask(this.newTaskTitle);
    this.newTaskTitle = '';
    this.showInputField.set(false);
    //every time we add a task, we hide the input field again by setting the signal to false again 
  }

  openInput() {
    this.showInputField.set(true); 
  }

}
