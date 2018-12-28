import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'ordinateur',
      status: 'éteint'
    }
  ];


  constructor() {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 4000
  		);
  }

  onAllumer(isAuth: boolean) {
      // isAuth != isAuth;
      console.log('On allume tout !');
  }

}
