/*Created: February 22, 2017
    Mid Term Shopping List
    Jesse Baril
    200226521
    This is the logic for the Shopping List*/
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listItems = af.database.list('/shoppingList');
  }

  /*addItem
    This method activates a popup for the user 
    to add a new item to the list */
  addItem(){    
    let prompt = this.alertCtrl.create({
    title: 'Add Item',
    message: "Add a new item to the shopping list.",
    inputs: [
      {
        name: 'itemName',
        placeholder: 'ex. Milk'
      },
      {
        name: 'itemQuantity',
        placeholder: 'ex. 1'
      }
    ],
    buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Add',
         handler: data => {
           this.listItems.push({
             itemName: data.itemName,
             itemQuantity: parseInt(data.itemQuantity),
             done: false
           });
         }
       }
     ]
   });
   prompt.present();
   }
  /*removeItem
    This method removes the selected item from the items list */
  removeItem(itemId: string){
    this.listItems.remove(itemId);
  }
  /*updateitem
    This method activates a popup for the user
    to edit the details of a item */
  updateItem(itemId, itemName, itemQuantity, done){
    let prompt = this.alertCtrl.create({
      title: 'Name of Item',
      message: "Alter the name of this Item.",
      inputs: [
        {
          name: 'itemName',
          placeholder: 'Item',
          value: itemName
        },
        {
          name: 'itemQuantity',
          placeholder: 'Quantity',
          value: itemQuantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            this.listItems.update(itemId, {
              itemName: data.itemName,
              itemQuantity: parseInt(data.itemQuantity)
            });
          }
        }
      ]
    });
    prompt.present();
  }
  /*This method switches a item from owned 
    to wanted or vice versa.*/
  switchComplete(itemId, itemOwned){
    if(itemOwned == true){
      this.listItems.update(itemId, {
        done: false
      });
    }
    if(itemOwned == false){
      this.listItems.update(itemId, {
        done: true
      });
    }
  }
}
