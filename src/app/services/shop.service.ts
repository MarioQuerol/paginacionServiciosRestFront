import { Pagination } from './../models/pagination-mode';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  obtenerProductosConQueryString(
    pagination: Pagination
  ): Observable<Product[]> {
    return this.http.get<Product[]>('shop/products-con-querystring', {
      params: {
        page: pagination.page.toString(),
        size: pagination.size.toString(),
      },
    });
  }

  obtenerProductosConHeaders(pagination: Pagination): Observable<Product[]> {
    return this.http.get<Product[]>('shop/products-con-headers', {
      headers: {
        'x-pagination-page': pagination.page.toString(),
        'x-pagination-size': pagination.size.toString(),
      },
    });
  }

  /** Manda y recibe la paginación en los headers */
  obtenerProductosConHeadersEnResponse(
    pagination: Pagination
  ): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>('shop/products-con-headers-en-response', {
      headers: {
        'x-pagination-page': pagination.page.toString(),
        'x-pagination-size': pagination.size.toString(),
      },
      observe: 'response',
    });
  }
}
