import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatCardActions],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  user:any = null;

  loginService = inject(LoginService);

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }
}
