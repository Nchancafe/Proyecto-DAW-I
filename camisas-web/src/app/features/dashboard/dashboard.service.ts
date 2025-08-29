import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DashboardService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCamisasPorMarca(): Observable<{ nombre: string, total: number }[]> {
    return this.http.get<{ nombre: string, total: number }[]>(`${this.baseUrl}/api/dashboard/camisas-por-marca`);
  }

  getStockBajo(): Observable<{ marca: string, stock: number }[]> {
    return this.http.get<{ marca: string, stock: number }[]>(`${this.baseUrl}/api/dashboard/stock-bajo`);
  }
}
