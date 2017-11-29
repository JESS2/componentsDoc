import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'datetime.html'
})

export class DatetimePage {

    constructor(public navCtrl: NavController) {
    
    }

    public event = {
        date: '2017-11-29',
        timeStarts: '18:30',
    }


}
