import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiResponseCamisa, CamisaCreate, Marca, Estante  } from '../models/camisa.model';
import { DEFAULT_MARCAS, DEFAULT_ESTANTES } from '../../../core/fallback-data';

@Injectable({ providedIn: 'root' })
export class CamisaService {

  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;
  private usaDataFallbackMarcas = false;
  private usaDataFallbackEstantes = false;

  loadCamisas(paginaActual: number, tamanio: number): Observable<ApiResponseCamisa> {
    return this._httpClient.get<ApiResponseCamisa>(`${this.baseUrl}/api/camisas?pagina=${paginaActual}&tamanio=${tamanio}`);
  }

  //crear camisa
  createCamisa(body: CamisaCreate): Observable<any> {
    // si el back espera 0/1 en vez de boolean: --- validamosss
    const payload = { ...body, estado: body.estado ? 1 : 0 };
    return this._httpClient.post(`${this.baseUrl}/api/camisas`, payload);
  }

  // para los selects  y que soporte [] o {data: []}
  getMarcas() {
    return this._httpClient.get<any[]>('/api/marcas').pipe(
      tap(() => this.usaDataFallbackMarcas = false),
      catchError(err => {
        if (err?.status === 403) {
          this.usaDataFallbackMarcas = true;
          console.warn('Marcas con error 403. Usando DEFAULT_MARCAS.');
          return of(DEFAULT_MARCAS);
        }
        return throwError(() => err);
      })
    );
  }

  getEstantes() {
  return this._httpClient.get<any[]>('/api/estantes').pipe(
    tap(() => this.usaDataFallbackEstantes = false),
    catchError(err => {
      if (err?.status === 403) {
        this.usaDataFallbackEstantes = true;
        console.warn('Estantes con error 403. Usando DEFAULT_ESTANTES.');
        return of(DEFAULT_ESTANTES);
      }
      return throwError(() => err);
    })
  );
}

}
