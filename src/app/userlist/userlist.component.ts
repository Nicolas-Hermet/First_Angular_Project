import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscritpion: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscritpion = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUser();
  }

  ngOnDestroy() {
    this.userSubscritpion.unsubscribe();
  }

}
