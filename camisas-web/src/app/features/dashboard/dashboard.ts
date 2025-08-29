import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    NgForOf
  ],
  template: `
    <div class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch">

        <div class="bg-white rounded-lg shadow flex flex-col items-center justify-center h-56">
          <span class="text-6xl font-extrabold text-green-600 mb-2">{{ ventasMes }}</span>
          <span class="text-lg text-gray-500">Ventas este mes</span>
          <span class="text-2xl font-bold text-blue-700 mt-2">S/ {{ montoMes | number:'1.2-2' }}</span>
        </div>

        <div class="bg-white rounded-lg shadow p-6 flex flex-col justify-center h-56">
          <span class="text-lg font-semibold mb-2 block">Total de camisas por marca</span>
          <div class="overflow-y-auto max-h-40 pr-2">
            <div *ngIf="camisasPorMarca.length === 0" class="text-gray-400 text-center py-4">
              No hay datos de marcas.
            </div>
            <div *ngFor="let marca of camisasPorMarca"
                 class="flex justify-between items-center border-b py-1 last:border-b-0">
              <span class="font-medium truncate max-w-[120px]">{{ marca.nombre }}</span>
              <span class="text-blue-600 font-bold">{{ marca.total }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-8 mt-8">

        <div class="bg-white rounded-lg shadow p-8 flex-1">
          <h2 class="text-xl font-semibold mb-6">Ventas por mes (ficticio)</h2>
          <div class="flex items-end space-x-6 h-72">
            <div *ngFor="let v of ventasPorMes" class="flex flex-col items-center w-20">
              <div
                class="bg-gradient-to-t from-blue-400 to-blue-600 w-full rounded-t-lg shadow-md transition-all duration-300 flex items-end justify-center relative"
                [style.height]="v.valor * 2 + 'px'">
                <span class="absolute -top-8 text-sm font-bold text-blue-700">S/ {{ v.monto | number:'1.0-0' }}</span>
              </div>
              <span class="text-sm mt-3 font-semibold text-gray-700">{{ v.mes }}</span>
              <span class="text-xs text-gray-500">{{ v.valor }} ventas</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-8 w-full md:w-80 flex flex-col items-center justify-center">
          <div class="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-lg font-bold text-yellow-700">¡Atención!</span>
          </div>
          <span class="text-gray-700 text-center mb-2">
            Hay <span class="font-bold text-red-600">{{ camisasBajoStock.length }}</span> camisas con stock bajo:
          </span>
          <ul class="w-full">
            <li *ngFor="let alerta of camisasBajoStock" class="flex justify-between py-1 border-b last:border-b-0">
              <span>{{ alerta.marca }}</span>
              <span class="text-red-600 font-bold">{{ alerta.stock }} unidades</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  camisasPorMarca: { nombre: string, total: number }[] = [];
  camisasBajoStock: { marca: string, stock: number }[] = [];


  ventasMes = 45;
  montoMes = 3200;
  ventasPorMes = [
    { mes: 'Ene', valor: 60, monto: 4200 },
    { mes: 'Feb', valor: 80, monto: 5200 },
    { mes: 'Mar', valor: 50, monto: 3100 },
    { mes: 'Abr', valor: 90, monto: 6100 },
    { mes: 'May', valor: 70, monto: 4700 },
    { mes: 'Jun', valor: 100, monto: 7000 }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getCamisasPorMarca().subscribe(data => this.camisasPorMarca = data);
    this.dashboardService.getStockBajo().subscribe(data => this.camisasBajoStock = data);
  }
}
