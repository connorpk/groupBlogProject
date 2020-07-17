import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { BlogService } from '../services/blog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  blogPosts: any;

  constructor(private userService: UserService, private blogService: BlogService, private firestore: AngularFirestore ) {
    
   }

  ngOnInit(): void {
      this.userService.isLoggedIn().then(res => this.blogService.blogPostByUser().subscribe(val => this.blogPosts = val))
  }
}
