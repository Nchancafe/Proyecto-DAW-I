import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponseCamisa } from '../models/camisa.model'; // Asegúrate que la ruta coincida

@Injectable({ providedIn: 'root' })
export class CamisaService {

  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  loadCamisas(paginaActual: number, tamanio: number): Observable<ApiResponseCamisa> {
    return this._httpClient.get<ApiResponseCamisa>(`${this.baseUrl}/api/camisas?pagina=${paginaActual}&tamanio=${tamanio}`);
  }

}
