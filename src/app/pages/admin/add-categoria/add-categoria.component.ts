import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css'],
  standalone: true,
  imports: [MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule]

})
export class AddCategoriaComponent implements OnInit {

  snack = inject(MatSnackBar);
  categoriaService = inject(CategoriaService);
  router = inject(Router);
  categoria = { 
    titulo : '',
    descripcion: ''
  }
  constructor() { }

  ngOnInit() {
  }

  formSubmit(){
  
    if(this.categoria.titulo.trim() == '' || this.categoria.descripcion.trim() == ''){
      this.snack.open('Titulo y descripcion son requeridos', '', {
        duration: 3000
      })
      return;
    }

    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (data: any) => {
      this.categoria.titulo = '';
      this.categoria.descripcion = '';
      Swal.fire('Categoria agregada', 'La categoria ha sido agregada con exito', 'success')
      this.router.navigate(['/admin/categorias'])
      },
      (error) => {
        console.log(error);
        
        Swal.fire('Error', 'Ocurrio un error al agregar la categoria', 'error')
      }
    ) 
  }

}
