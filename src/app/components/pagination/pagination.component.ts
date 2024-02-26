import { Component, Input } from '@angular/core';
import { Pagination } from '../../models/pagination-mode';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  pageSizeOptions = [5, 10, 20, 100];
  nextPage() {
    throw new Error('Method not implemented.');
  }
  previousPage() {
    throw new Error('Method not implemented.');
  }
  changePageSize($event: Event) {
    throw new Error('Method not implemented.');
  }
  @Input() pagination?: Pagination;
}
