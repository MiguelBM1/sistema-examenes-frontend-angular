import { Component, OnInit, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../pages/login/services/login.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css'],
  imports: [MatToolbarModule, RouterLink, MatIconModule]
})
export class NavbarComponent implements OnInit{
  
  isLoggedIn = false;
  user:any = null;

  loginService = inject(LoginService);
  router = inject(Router);

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
      }
    )
  }
  
  public logout(){
    this.loginService.logout();
    window.location.reload();
  }
  
}
