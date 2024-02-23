import { Product } from '../../models/product-model';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private shopservice: ShopService) {}

  ngOnInit(): void {
    this.shopservice.obtenerProductos().subscribe((res) => {
      this.products = res;
    });
  }
}
