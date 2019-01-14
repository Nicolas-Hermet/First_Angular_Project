import { Component } from '@angular/core';
import { AppareilsService } from './services/appareils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareil: AppareilsService;


  constructor(private appareilService: AppareilsService) {
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
