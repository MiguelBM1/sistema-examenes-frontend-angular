import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  styleUrls: ['./signup.component.css'],
  imports: [MatFormFieldModule, MatInputModule]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
