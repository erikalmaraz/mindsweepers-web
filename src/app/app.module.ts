import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Views & Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
// Services
import { ProductsService } from './core/services/products.service';
import { InteriorComponent } from './interior/interior.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NotificationsComponent,
    WelcomeComponent,
    InteriorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
