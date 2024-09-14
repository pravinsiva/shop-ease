import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ICategories, ISorting } from '../../../interfaces/product-interface';
import { shopEaseConstants } from '../../../constants/se-constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { category, sorting } from '../../../models/model';

@Component({
  selector: 'app-filtersorting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sorting.component.html',
  styleUrl: './filter-sorting.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSortingComponent {
  productConstant = shopEaseConstants;
  categories: ICategories[] = category;
  sortingArray: ISorting[] = sorting;
  appliedSorting: string = '';
  @Input() selectedCategory: any = {};
  searchText: string = '';
  @Output() onFilterSelect: EventEmitter<ICategories> = new EventEmitter();
  @Output() onFilterInput: EventEmitter<string> = new EventEmitter();
  @Output() onSortingByPrice: EventEmitter<ISorting> = new EventEmitter();
  constructor() {}
  onCategroyClick(category: ICategories) {
    this.searchText = '';
    this.onFilterSelect.emit(category);
  }
  onSearchInput(val: any) {
    this.onFilterInput.emit(val);
  }
  onSorting(sortItem: ISorting) {
    this.appliedSorting = sortItem.key;
    this.onSortingByPrice.emit(sortItem);
  }
}
