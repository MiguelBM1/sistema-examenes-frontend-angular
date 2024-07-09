import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  categorias:any;
 
  private readonly __categoriaService = inject(CategoriaService);
  private readonly __snackbar = inject(MatSnackBar);


  ngOnInit(){
    this.__categoriaService.listarCategorias().subscribe(
      (data: any) => {
        this.categorias = data;
      },
      (error) => {
        
        this.__snackbar.open('Error al cargar las categorias', '', {
          duration: 3000
        });
        console.log(error);
      }
    )
  }
}
