import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { BlogPost } from '../interfaces/blogpost.interface';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.scss']
})
export class BlogDisplayComponent implements OnInit {
  
  constructor(private blogService: BlogService,
      private userService: UserService,) { }

  blogs: any;

  addBlogPost(title: string, content: string){
    console.log(title, content);
    
    this.blogService.addBlogPost(title, content)
  }

  logout() {
    this.userService.logout()
  }

  ngOnInit(): void {
    this.blogService.blogPosts.subscribe(val => {
      this.blogs = val
      console.log(this.blogs)});
    
  }

}
