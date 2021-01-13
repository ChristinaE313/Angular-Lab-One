import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

interface Todo {
  task: string; 
  completed: boolean; 
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filter: string =""; 
  
  tasks: Todo[] = [
    {
        task: "Fold laundry", 
        completed: true
    }, 
    {
        task: "Vacuum",
        completed: false
    }, 
    {
        task: "Pay bills", 
        completed: true
    }, 
    {
        task: "Prep meals", 
        completed: false
    }
]; 

//  isCompleted = function(completed: boolean): void {
//   completed = true;
//   console.log(isCompleted); 
// }

// addTask(newTask: Todo[]): void{
//   let item = newTask.push({task, complete});
//   return item;  
// }
// addTask("Dishes", false); 


getFilteredResults(): Todo[] {
  return this.tasks.filter((todo) => {
  const taskLower = todo.task.toLowerCase(); 
  const filterLower = this.filter.toLocaleLowerCase();   
  return taskLower.includes(filterLower);  
  }); 
}

constructor() { }

  ngOnInit(): void {
  }

}
