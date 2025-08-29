import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../models/marca.model';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.scss'
})
export class MarcaComponent implements OnInit {
  Math = Math;

  readonly service = inject(MarcaService);

  marcas = signal<Marca[]>([]);
  loading = signal(false);
  paginacion = signal({
    actual: 0,
    tamanio: 10,
    totalElementos: 0,
    totalPaginas: 0
  });

  paginasVisibles = computed(() => {
    const { actual, totalPaginas } = this.paginacion();
    const maxPaginas = 5;
    const inicio = Math.max(0, actual - Math.floor(maxPaginas / 2));
    const fin = Math.min(totalPaginas - 1, inicio + maxPaginas - 1);
    return Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i);
  });

  ngOnInit() {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.loading.set(true);
    const { actual, tamanio } = this.paginacion();

    this.service.loadMarcas(actual, tamanio).subscribe({
      next: (resp) => {
        this.marcas.set(resp.contenido);
        this.paginacion.set({
          actual: resp.paginaActual,
          tamanio: resp.tamanio,
          totalElementos: resp.totalElementos,
          totalPaginas: resp.totalPaginas
        });
      },
      error: (error) => console.error('Error al cargar marcas:', error),
      complete: () => this.loading.set(false)
    });
  }

  cambiarPagina(nuevaPagina: number) {
    const { totalPaginas } = this.paginacion();
    if (nuevaPagina >= 0 && nuevaPagina < totalPaginas && !this.loading()) {
      this.paginacion.update(p => ({ ...p, actual: nuevaPagina }));
      this.cargarMarcas();
    }
  }

  // TrackBy
  trackByMarcaId = (_: number, marca: Marca) => marca.id;
  trackByPagina = (_: number, pagina: number) => pagina;
}
