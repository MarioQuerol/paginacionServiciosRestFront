export class Pagination {
  page: number;
  size: number;
  totalResult?: number;
  //sort: Sort;

  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }
}
