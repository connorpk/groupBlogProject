import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { AngularFireAuth } from '@angular/fire/auth';
import { UserComponent } from './user/user.component';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToUser = () => redirectLoggedInTo(['blogs']);

const routes: Routes = [
  {path: 'login', component: LandingComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToUser}},
  {path: 'blogs', component: BlogDisplayComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLanding}},
  {path: 'user', component: UserComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLanding}},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
