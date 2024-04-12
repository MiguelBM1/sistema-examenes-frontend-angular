import { Component, OnInit } from '@angular/core';
import {MatListModule } from '@angular/material/list';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  standalone: true,
  imports: [MatListModule,SidebarComponent,RouterOutlet]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
