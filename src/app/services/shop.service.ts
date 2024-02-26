import { Pagination } from './../models/pagination-mode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  obtenerProductosConQueryString(pagination: Pagination): Observable<any> {
    return this.http.get<any>('shop/products-con-querystring', {
      params: {
        page: pagination.getPageString(),
        size: pagination.getSizeString(),
      },
    });
  }

  obtenerProductosConHeaders(pagination: Pagination): Observable<any> {
    return this.http.get<any>('shop/products-con-headers', {
      headers: {
        'x-pagination-page': pagination.getPageString(),
        'x-pagination-size': pagination.getSizeString(),
      },
    });
  }
}
