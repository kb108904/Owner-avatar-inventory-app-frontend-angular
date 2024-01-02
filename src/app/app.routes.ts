import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'main', component: MainComponent }
];
