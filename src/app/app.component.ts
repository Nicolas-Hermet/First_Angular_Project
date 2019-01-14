import { Component, OnInit } from '@angular/core';
import { AppareilsService } from './services/appareils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];


  constructor(private appareilService: AppareilsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
      );
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Il va faire tout noir ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
