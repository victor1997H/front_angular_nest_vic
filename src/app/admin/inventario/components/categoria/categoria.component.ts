import { Component, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { get } from 'http';

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
}
@Component({

  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  private categoriaServicio= inject(CategoriaService)

  categorias: Categoria[]=[{nombre:"Prueba"}]

  ngOnInit(): void {
    this.getCategorias()
  }
    getCategorias(){
      this.categoriaServicio.funlistar().subscribe(
        (res:any)=>{
          this.categorias=res;
        },
        (error:any)=>{
          console.log(error);
  }
)
}
}
