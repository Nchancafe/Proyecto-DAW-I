import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponseMarca } from '../models/marca.model';

@Injectable({ providedIn: 'root' })
export class MarcaService {

  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  loadMarcas(paginaActual: number, tamanio: number): Observable<ApiResponseMarca> {
    return this._httpClient.get<ApiResponseMarca>(
      `${this.baseUrl}/api/marcas?pagina=${paginaActual}&tamanio=${tamanio}`
    );
  }

}
