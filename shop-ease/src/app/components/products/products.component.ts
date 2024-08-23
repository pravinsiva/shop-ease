import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ICategories, IProducts } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { shopEaseConstants } from '../../constants/se-constants';
import { category } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AddItemActions from '../../store/action'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  productList: IProducts[] = [];
  categories: ICategories[] = category;
  subscriptionArray: Subscription[] = [];
  productConstant = shopEaseConstants;
  filteredProductList: IProducts[] = [];
  searchText: any = '';
  selectedCategory: any = this.categories[0];
  @ViewChild("searchFilter", { static: true }) searchFilter: any;
  private inputEvent = new Subject<any>();
  constructor(
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef,
    private store: Store<any>
  ) {
    // Observable function call for search text input
    this.filterBySearchText();
  }

  // Observable function: optimized search using debounceTime & distinctUntilChanged
  private filterBySearchText() {
    this.inputEvent
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(res => {
        const copyProductListOnCategory: any = this.productList?.filter((prod: IProducts) => {
          return this.returnItemsOnCategoryChange(prod, this.selectedCategory);
        });
        this.filteredProductList = copyProductListOnCategory?.filter((item: IProducts) => {
          return item?.name?.trim()?.toUpperCase()?.includes(res?.trim()?.toUpperCase());
        })
      });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  // To get product as async data
  private getProduct() {
    this.subscriptionArray.push(this.sharedService.getStaticData().subscribe((data: IProducts[]) => {
      data.map((item: IProducts) => {
        return item.displayedImage = item?.imgPathArray[0];
      })
      this.filteredProductList = this.productList = data;
      this.cdr.markForCheck();
    }));
  }

  // TODO
  onAddToCart(product: IProducts) {
    this.store.dispatch(new AddItemActions.AddItem(1));

  }

  // To set animation css on hovering product
  onImgFocusIn(product: IProducts) {
    const imageElement = document?.getElementById("prodImg-" + product?.id);
    const prodOffer = document?.getElementById("prodOffer-" + product?.id);
    setTimeout(() => {
      imageElement?.classList?.add('animate-img');
      prodOffer?.classList?.add('glow');
    })
    product.displayedImage = product?.imgPathArray[1];

  }

  // To remove animation css on hovering product
  onImgFocusOut(product: IProducts) {
    const imageElement = document?.getElementById("prodImg-" + product?.id);
    const prodOffer = document?.getElementById("prodOffer-" + product?.id);
    setTimeout(() => {
      imageElement?.classList?.remove('animate-img')
      prodOffer?.classList?.remove('glow');
    })
    product.displayedImage = product?.imgPathArray[0];
  }

  // To Filter out data based on selected category
  onCategroyClick(category: ICategories) {
    this.searchText = '';
    this.selectedCategory = this.categories?.find((item: ICategories) => {
      return item?.categoryID === category?.categoryID
    })
    this.filteredProductList = this.productList?.filter((prod: IProducts) => {
      return this.returnItemsOnCategoryChange(prod, category)
    })
  }

  // Condition check for returning result on category
  private returnItemsOnCategoryChange(prod: IProducts, category: ICategories): unknown {
    return prod?.categoryID === category?.categoryID || category?.categoryID === this.productConstant.SHOW_ALL;
  }

  // To fire async event, setting out observer
  onSearchInput(val: any) {
    this.inputEvent.next(val);
  }

  // Destroyed all subscriptions, to avoid memory leaks
  ngOnDestroy(): void {
    if (this.subscriptionArray?.length > 0) {
      this.subscriptionArray?.forEach((subscription: Subscription) => {
        subscription?.unsubscribe();
      })
    }
  }
}
