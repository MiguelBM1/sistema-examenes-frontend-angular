import { Component, inject } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import {  MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCardModule,MatListModule, MatIconModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 

  private readonly __loginService = inject(LoginService);

 logout(){
  this.__loginService.logout();
  window.location.reload();
  }
}
