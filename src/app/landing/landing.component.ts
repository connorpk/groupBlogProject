import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private userService: UserService, public auth: AngularFireAuth) { }

  loggedIn: User;

  login() {
    this.userService.login();
  }
  
  logout() {
    this.userService.logout()
  }

  ngOnInit(): void {
  }

}
