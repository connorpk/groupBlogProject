import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BlogPost } from '../interfaces/blogpost.interface';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth, private userService: UserService) {
    
   }

   get blogPosts(){
    return this.firestore.collection('blog').valueChanges()
   }

   addBlogPost(title: string, content: string){
    this.firestore.collection('blog').add({
      title: title,
      content: content,
      author: this.userService.currentUser.uid,
      date: Date.now()
    })
   }


   blogPostByUser(){
     return this.firestore.collection('blog', ref => ref.where('author', '==', this.userService.currentUser.uid)).valueChanges()
   }

}
