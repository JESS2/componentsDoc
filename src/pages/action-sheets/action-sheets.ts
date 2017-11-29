import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'page-action-sheets',
    templateUrl: 'action-sheets.html'
})

export class ActionSheetPage {
  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '작업 선택',
      buttons: [
        {
          text: '수정',
          handler: () => {
            console.log('수정 clicked');
          }
        },{
          text: '삭제',
          role: 'destructive',
          handler: () => {
            console.log('삭제 clicked');
          }
        },{
          text: '취소',
          role: 'cancel',
          handler: () => {
            console.log('취소 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}