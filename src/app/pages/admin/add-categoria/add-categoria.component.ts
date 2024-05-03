import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css'],
  standalone: true,
  imports: [MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule]

})
export class AddCategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public formSubmit(){
    
  }

}
