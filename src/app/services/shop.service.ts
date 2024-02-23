import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this.http.get<any>('localhost:8080/shop/products?page=0&size=10');
  }
}
