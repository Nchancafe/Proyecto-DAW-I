import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponseCamisa, CamisaCreate, Marca, Estante  } from '../models/camisa.model'; // Asegúrate que la ruta coincida

@Injectable({ providedIn: 'root' })
export class CamisaService {

  readonly _httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  loadCamisas(paginaActual: number, tamanio: number): Observable<ApiResponseCamisa> {
    return this._httpClient.get<ApiResponseCamisa>(`${this.baseUrl}/api/camisas?pagina=${paginaActual}&tamanio=${tamanio}`);
  }

  //Crear camisa
  createCamisa(body: CamisaCreate): Observable<any> {
    // Si el back espera 0/1 en vez de boolean: --- validamosss
    const payload = { ...body, estado: body.estado ? 1 : 0 };
    return this._httpClient.post(`${this.baseUrl}/api/camisas`, payload);
  }

  // para los selects  y que soporte [] o {data: []}
  getMarcas(): Observable<Marca[]> {
    return this._httpClient
    .get<Marca[]>(`${this.baseUrl}/api/marcas`)
    .pipe(map((res: any) => res?.data ?? res ?? []));
  }

  getEstantes(): Observable<Estante[]> {
    return this._httpClient
    .get<Estante[]>(`${this.baseUrl}/api/estantes`)
    .pipe(map((res: any) => res?.data ?? res ?? []));
  }

}
