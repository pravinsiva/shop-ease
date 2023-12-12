import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ICategories, IProducts } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { shopEaseConstants } from '../../constants/se-constants';
import { category } from '../../models/model';
import { FormsModule } from '@angular/forms';

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
  animateImage: boolean = false;
  constructor(
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef,
  ) {
    this.filterBySearchText();
  }

  private filterBySearchText() {
    // optimized search using debounceTime & distinctUntilChanged
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
  private getProduct() {
    this.subscriptionArray.push(this.sharedService.getStaticData().subscribe((data: IProducts[]) => {
      data.map((item: IProducts) => {
        return item.displayedImage = item?.imgPathArray[0];
      })
      this.filteredProductList = this.productList = data;
      this.cdr.markForCheck();
    }));
  }

  onAddToCart(product: IProducts) {

  }
  onImgFocusIn(product: IProducts) {
    const imageElement = document?.getElementById("prodImg-" + product?.id);
    setTimeout(()=>{
      imageElement?.classList?.add('animate-img')
    })
    this.animateImage = true;
    product.displayedImage = product?.imgPathArray[1];
    
  }

  onImgFocusOut(product: IProducts) {
    const imageElement = document?.getElementById("prodImg-" + product?.id);
    setTimeout(()=>{
      imageElement?.classList?.remove('animate-img')
    })
    product.displayedImage = product?.imgPathArray[0];
    this.animateImage = false
  }
  onCategroyClick(category: ICategories) {
    this.searchText = '';
    this.selectedCategory = this.categories?.find((item: ICategories) => {
      return item?.categoryID === category?.categoryID
    })
    this.filteredProductList = this.productList?.filter((prod: IProducts) => {
      return this.returnItemsOnCategoryChange(prod, category)
    })
  }

  private returnItemsOnCategoryChange(prod: IProducts, category: ICategories): unknown {
    return prod?.categoryID === category?.categoryID || category?.categoryID === this.productConstant.SHOW_ALL;
  }

  onSearchInput(val: any) {
    this.inputEvent.next(val);
  }

  ngOnDestroy(): void {
    if (this.subscriptionArray?.length > 0) {
      this.subscriptionArray?.forEach((subscription: Subscription) => {
        subscription?.unsubscribe();
      })
    }
  }
}
