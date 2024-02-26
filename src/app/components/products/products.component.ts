import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Pagination } from '../../models/pagination-mode';
import { Product } from '../../models/product-model';
import { PaginationComponent } from '../pagination/pagination.component';
import { ShopService } from './../../services/shop.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, PaginationComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  pagination: Pagination = new Pagination(1, 10);
  displayedColumns: string[] = ['id', 'nombre', 'precio'];
  constructor(private shopservice: ShopService) {}

  ngOnInit(): void {
    this.obtenerProductosConHeadersEnResponse();
  }

  obtenerProductosConQueryString() {
    this.shopservice
      .obtenerProductosConQueryString(this.pagination)
      .subscribe((res) => {
        this.products = res;
      });
  }

  obtenerProductosConHeaders() {
    this.shopservice
      .obtenerProductosConHeaders(this.pagination)
      .subscribe((res) => {
        this.products = res;
      });
  }

  obtenerProductosConHeadersEnResponse() {
    this.shopservice
      .obtenerProductosConHeadersEnResponse(this.pagination)
      .subscribe((res) => {
        this.products = res.body ? res.body : [];
        this.pagination = this.getPagination(res);
      });
  }

  private getPagination(res: any) {
    return {
      page: parseInt(res.headers.get('x-current-page')),
      size: parseInt(res.headers.get('x-items-per-page')),
      totalResult: parseInt(res.headers.get('x-total-results')),
    };
  }
}
