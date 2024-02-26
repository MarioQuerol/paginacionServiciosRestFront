import { Pagination } from '../../models/pagination-mode';
import { Product } from '../../models/product-model';
import { PaginationComponent } from '../pagination/pagination.component';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

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
    this.pagination.totalResult = 20;
    this.shopservice
      .obtenerProductosConHeaders(this.pagination)
      .subscribe((res) => {
        this.products = res;
      });
  }
}
