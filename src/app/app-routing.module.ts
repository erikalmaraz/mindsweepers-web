import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { WelcomeComponent } from './views/welcome/welcome.component';
import { HomeComponent } from './views/home/home.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { LoginComponent } from './views/login/login.component';
import { InteriorComponent } from './views/interior/interior.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product',
    component: InteriorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
