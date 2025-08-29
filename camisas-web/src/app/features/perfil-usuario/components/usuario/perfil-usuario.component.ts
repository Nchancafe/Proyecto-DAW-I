import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../../../core/dto/usuario.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 p-4">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-100 p-8">
        @if (isLoading()) {
          <div class="flex flex-col items-center justify-center p-8">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-gray-200 border-t-gray-900"></div>
            <p class="mt-4 text-gray-600">Cargando perfil...</p>
          </div>
        } @else if (error()) {
          <div class="text-center p-8 text-red-600">
            <p class="font-semibold text-lg">Error al cargar el perfil</p>
            <p class="text-sm mt-2">{{ error() }}</p>
          </div>
        } @else if (usuario()) {
          <div class="text-center">
            <img [src]="userImageUrl()" alt="Foto de perfil del usuario" class="mx-auto h-24 w-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"/>
            <h1 class="text-3xl font-bold mt-4">{{ usuario()!.nombre }} {{ usuario()!.apellido }}</h1>
            <p class="text-gray-500 mt-2">{{ usuario()!.email }}</p>

            <div class="mt-8 text-left border-t border-gray-200 pt-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-xs font-semibold text-gray-500 uppercase">Nombre de usuario</label>
                  <p class="text-gray-800 text-lg">{{ usuario()!.username }}</p>
                </div>
                <div>
                  <label class="text-xs font-semibold text-gray-500 uppercase">Correo Electrónico</label>
                  <p class="text-gray-800 text-lg">{{ usuario()!.email }}</p>
                </div>
                <div>
                  <label class="text-xs font-semibold text-gray-500 uppercase">Nombre</label>
                  <p class="text-gray-800 text-lg">{{ usuario()!.nombre }}</p>
                </div>
                <div>
                  <label class="text-xs font-semibold text-gray-500 uppercase">Apellido</label>
                  <p class="text-gray-800 text-lg">{{ usuario()!.apellido }}</p>
                </div>
              </div>
            </div>

            <button (click)="goBack()" class="mt-8 w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition">
              Volver al Menú Principal
            </button>
          </div>
        } @else {
          <div class="text-center p-8 text-gray-600">
            <p>No se encontró información del usuario.</p>
            <button (click)="goBack()" class="mt-4 w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition">
              Volver
            </button>
          </div>
        }
      </div>
    </div>
  `
})
export class PerfilUsuarioComponent implements OnInit {
  // Señales para manejar el estado del componente
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  usuario = signal<UsuarioDTO | null>(null);
  userImageUrl = signal<string>('');

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos del perfil
    this.usuarioService.obtenerPerfil().subscribe({
      next: (data) => {
        this.usuario.set(data);
        this.isLoading.set(false);
        this.setProfileImage(data.id);
      },
      error: (err) => {
        console.error('Error al obtener el perfil:', err);
        this.error.set('Hubo un problema al conectar con el servidor.');
        this.isLoading.set(false);
      }
    });
  }

  // Método para generar las iniciales del usuario
  getUserInitials(nombre: string, apellido: string): string {
    const nombreInicial = nombre.charAt(0).toUpperCase();
    const apellidoInicial = apellido.charAt(0).toUpperCase();
    return `${nombreInicial}${apellidoInicial}`;
  }

  /// Método para asignar la imagen según el ID
  setProfileImage(userId: number): void {
    switch (userId) {
      case 1:
        this.userImageUrl.set('images/imagen1.jpg');
        break;
      case 2:
        this.userImageUrl.set('images/imagen2.jpg');
        break;
      case 3:
        this.userImageUrl.set('images/imagen3.jpg');
        break;
      case 4:
        this.userImageUrl.set('images/imagen4.jpg');
        break;
      default:
        // Una imagen por defecto para cualquier otro usuario
        this.userImageUrl.set('images/hombre.png');
        break;
    }
  }


  // Método para volver a la página principal
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}

