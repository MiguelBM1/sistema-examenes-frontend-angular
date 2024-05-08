import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamenService } from '../../../services/examen.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css'],
  standalone: true,
  imports: [ MatCardModule, MatFormFieldModule,MatInputModule, FormsModule, MatOptionModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatSelectModule]
})
export class AddExamenComponent implements OnInit {
  categoriaService= inject(CategoriaService);
  snack = inject(MatSnackBar);
  examenService = inject(ExamenService);
  router = inject(Router);

  categorias:any = [];

  examenData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  ngOnInit() {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarCuestionario(){
    console.log(this.examenData);
    if(this.examenData.titulo.trim() == '' || this.examenData.titulo == null){
      this.snack.open('El título es requerido','',{
        duration:3000
      });
      return ;
    }

    
  }


}
