import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../../../core/dto/usuario.dto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/api/usuarios`;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene los detalles del perfil del usuario logeado.
   * La llamada a la API utiliza el token de autenticación
   * que se adjunta automáticamente por el interceptor.
   */
  obtenerPerfil(): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.apiUrl}/me`);
  }
}
