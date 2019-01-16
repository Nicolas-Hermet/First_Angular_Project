import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
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
}
