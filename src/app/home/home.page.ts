import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName: 'Coding',
    itemDueDate: '13-02-2022',
    itemPriority: 'hight',
    itemCategory: 'work'
  },{
    itemName: 'Reading Book',
    itemDueDate: '11-02-2022',
    itemPriority: 'medium',
    itemCategory: 'week'
  },{
    itemName: 'Sport',
    itemDueDate: '17-02-2022',
    itemPriority: 'low',
    itemCategory: 'week'
  },{
    itemName: 'Fishing',
    itemDueDate: '16-02-2022',
    itemPriority: 'low',
    itemCategory: 'week'
  },]

  itemToday : number = Date.now();
  constructor() {}

}
