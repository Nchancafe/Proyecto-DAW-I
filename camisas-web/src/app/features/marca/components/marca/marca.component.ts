import { Component, OnInit } from '@angular/core';
import { MarcaService, PaginaResult } from '../../services/marca.service';
import { Marca } from '../../models/marca.model';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-marca',
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './marca.component.html'
})
export class MarcaComponent implements OnInit {
  marcas: Marca[] = [];
  loading = false;

  paginacion = {
    actual: 0,
    tamanio: 10,
    totalElementos: 0,
    totalPaginas: 0
  };

  constructor(private marcaService: MarcaService) {}

  ngOnInit() {
    this.cargarMarcas();
  }

  cargarMarcas(pagina = 0) {
    this.loading = true;
    this.marcaService.getMarcas(pagina, this.paginacion.tamanio).subscribe({
      next: result => {
        this.marcas = result.contenido;
        this.paginacion.actual = result.paginaActual;
        this.paginacion.tamanio = result.tamanio;
        this.paginacion.totalElementos = result.totalElementos;
        this.paginacion.totalPaginas = result.totalPaginas;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 0 && pagina < this.paginacion.totalPaginas && !this.loading) {
      this.cargarMarcas(pagina);
    }
  }

  paginasVisibles(): number[] {
    const total = this.paginacion.totalPaginas;
    const actual = this.paginacion.actual;
    const delta = 2;
    const paginas: number[] = [];
    const start = Math.max(0, actual - delta);
    const end = Math.min(total, actual + delta + 1);
    for (let i = start; i < end; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  trackByMarcaId(index: number, marca: Marca) {
    return marca.id;
  }

  trackByPagina(index: number, pagina: number) {
    return pagina;
  }

  protected readonly Math = Math;
}
