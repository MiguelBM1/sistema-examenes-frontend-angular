import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css'],
  imports: [MatToolbarModule, RouterLink, MatIconModule]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
