export class Pagination {
  page: Number;
  size: Number;
  totalResult?: Number;
  //sort: Sort;

  constructor(page: Number, size: Number) {
    this.page = page;
    this.size = size;
  }

  getPageString() {
    return this.page.toString();
  }

  getSizeString() {
    return this.size.toString();
  }
}
