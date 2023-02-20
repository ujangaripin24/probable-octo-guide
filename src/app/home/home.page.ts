import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '08-22-2022',
    itemPriority: 'hight',
    itemCategory: 'work'
  },{
    itemName: 'Reading Book',
    itemDueDate: '08-23-2022',
    itemPriority: 'medium',
    itemCategory: 'week'
  },{
    itemName: 'Sport',
    itemDueDate: '08-23-2022',
    itemPriority: 'low',
    itemCategory: 'week'
  },{
    itemName: 'Fishing',
    itemDueDate: '08-23-2022',
    itemPriority: 'low',
    itemCategory: 'week'
  },]

  itemToday : number = Date.now();
  constructor() {}

}
