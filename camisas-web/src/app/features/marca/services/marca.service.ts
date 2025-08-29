import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca.model';

export interface PaginaResult<T> {
  contenido: T[];
  paginaActual: number;
  tamanio: number;
  totalElementos: number;
  totalPaginas: number;
  primera: boolean;
  ultima: boolean;
  vacia: boolean;
}

@Injectable({ providedIn: 'root' })
export class MarcaService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMarcas(pagina = 0, tamanio = 10): Observable<PaginaResult<Marca>> {
    return this.http.get<PaginaResult<Marca>>(
      `${this.baseUrl}/api/marcas?pagina=${pagina}&tamanio=${tamanio}`
    );
  }
}
