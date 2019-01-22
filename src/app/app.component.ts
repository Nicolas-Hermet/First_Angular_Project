import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs/';
// import { data_json } from './env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  myUrl = require('../../env.json')['myUrl'];
  // myUrl: string = data_json.myUrl;
  secondes: number;
  counterSubscritpion: Subscription;


  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscritpion = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Il y a une erreur');
      },
      () => {
        console.log('L\'observable est allé au bout de son action');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscritpion.unsubscribe();
  }

}
