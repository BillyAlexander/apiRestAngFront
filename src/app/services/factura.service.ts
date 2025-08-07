import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'https://localhost:7298/api/Factura';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl);
  }

  getById(id: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/${id}`);
  }

  create(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.apiUrl, factura);
  }

  update(factura: Factura): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${factura.id}`, factura);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
