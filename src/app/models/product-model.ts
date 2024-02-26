export class Product {
  id: number;
  nombre: string;
  precio: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.nombre = name;
    this.precio = price;
  }
}
