import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

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

  constructor(
    public modalCtrl:ModalController
  ) {}

  async addTask(){
    console.log("Hai")
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })
    return await modal.present();
  }

}
