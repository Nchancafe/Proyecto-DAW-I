import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisaService } from '../../services/camisa.service';
import {Camisa} from '../../models/camisa.model';

@Component({
  selector: 'app-camisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camisa.component.html',
  styleUrl: './camisa.component.scss'
})
export class CamisaComponent implements OnInit {
  Math = Math;

  readonly service = inject(CamisaService);

  camisas = signal<Camisa[]>([]);
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
    this.cargarCamisas();
  }

  cargarCamisas() {
    this.loading.set(true);
    const { actual, tamanio } = this.paginacion();

    this.service.loadCamisas(actual, tamanio).subscribe({
      next: ({ data }) => {
        this.camisas.set(data.contenido);
        this.paginacion.set({
          actual: data.paginaActual,
          tamanio: data.tamanio,
          totalElementos: data.totalElementos,
          totalPaginas: data.totalPaginas
        });
      },
      error: (error) => console.error('Error al cargar camisas:', error),
      complete: () => this.loading.set(false)
    });
  }

  cambiarPagina(nuevaPagina: number) {
    const { totalPaginas } = this.paginacion();
    if (nuevaPagina >= 0 && nuevaPagina < totalPaginas && !this.loading()) {
      this.paginacion.update(p => ({ ...p, actual: nuevaPagina }));
      this.cargarCamisas();
    }
  }

  // TrackBy
  trackByCamisaId = (_: number, camisa: Camisa) => camisa.id;
  trackByPagina = (_: number, pagina: number) => pagina;
}

