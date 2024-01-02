import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthenticationService } from '../../service/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  constructor(private auth: AuthenticationService){}

  user$ = this.auth.userData


}
