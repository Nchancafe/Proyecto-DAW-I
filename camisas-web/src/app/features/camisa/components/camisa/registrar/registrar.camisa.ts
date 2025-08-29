import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CamisaService } from '../../../services/camisa.service';
import { DEFAULT_MARCAS, DEFAULT_ESTANTES } from '../../../../../core/fallback-data';

@Component({
  selector: 'app-registrar-camisa',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './registrar.camisa.component.html',
})
export class RegistrarCamisaComponent {
  readonly _camisaService = inject(CamisaService);

  camisaForm: FormGroup;
  //se setea en duro para mostrarlo omitiendo la invocacion
  marcas: any[] = DEFAULT_MARCAS;
  estantes: any[] = DEFAULT_ESTANTES;
  mensajeError = signal('');
  mensajeOk = signal('');      
  loading = signal(false);

  constructor(
    readonly fb: FormBuilder,
    readonly router: Router
  ) {
    this.listarMarcas()
    this.listarEstantes();

    this.camisaForm = this.fb.group({
      descripcion: ['', [Validators.required, Validators.maxLength(45)]],
      id_marca: [null, [Validators.required]],
      color: ['', [Validators.required, Validators.maxLength(45)]],
      talla: ['M', [Validators.required]],       // S/M/L/XL
      manga: ['Corta', [Validators.required]],   // Corta/Larga
      stock: [0, [Validators.required, Validators.min(0)]],
      precio_costo: [0, [Validators.required, Validators.min(0)]],
      precio_venta: [0, [Validators.required, Validators.min(0)]],
      id_estante: [null, [Validators.required]],
      estado: [true]
    });
  }

  listarMarcas(): void {
    this._camisaService.getMarcas().subscribe({
      next: (data) => {
        //this.marcas = data
      },
      error: (e) => console.error('Error al cargar marcas:', e)
    });
  }

  listarEstantes(): void {
    this._camisaService.getEstantes().subscribe({
      next: (data) => {
        //this.estantes = data
      },
      error: (e) => console.error('Error al cargar estantes:', e)
    });
  }

onSubmit(): void {
  this.camisaForm.markAllAsTouched();

  if (this.camisaForm.invalid) {
    this.mensajeError.set('Por favor, completa todos los campos requeridos.');
    setTimeout(() => this.mensajeError.set(''), 5000);
    return;
  }

  const v = this.camisaForm.value;
  if ((v.precio_venta ?? 0) < (v.precio_costo ?? 0)) {
    this.mensajeError.set('El precio de venta no puede ser menor al precio de costo.');
    setTimeout(() => this.mensajeError.set(''), 5000);
    return;
  }

  this.mensajeError.set('');
  this.mensajeOk.set('Camisa ingresada satisfactoriamente.');

  setTimeout(() => this.router.navigate(['/camisa']), 2500);
}

  // Usar este submit cuando ya jale de los servicios
  // onSubmit(): void {
  //   if (this.camisaForm.invalid) return;

  //   const v = this.camisaForm.value;
  //   //agregar validacion de pv
  //   if ((v.precio_venta ?? 0) < (v.precio_costo ?? 0)) {
  //     this.mensajeError.set('El precio de venta no puede ser menor al precio de costo.');
  //     setTimeout(() => this.mensajeError.set(''), 8000); // oculta a los 8s
  //     return;
  //   }

  //   this.loading.set(true);
  //   this._camisaService.createCamisa(v as any).subscribe({
  //     next: () => this.router.navigate(['/camisa']),
  //     error: (error) => {
  //       const msg = error?.error?.message || error?.message || 'No se pudo crear la camisa';
  //       this.mensajeError.set(msg);
  //       setTimeout(() => this.mensajeError.set(''), 8000); //oculta a los 8s
  //       this.loading.set(false);
  //     },
  //     complete: () => this.loading.set(false)
  //   });
  // }

  
  onCancel(): void {
    this.router.navigate(['/camisa']);
  }
}
