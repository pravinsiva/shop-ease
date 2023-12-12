import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ICategories, IProducts } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { shopEaseConstants } from '../../constants/product-constants';
import { category } from '../../models/model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  productList: IProducts[] = [];
  categories: ICategories[] = category;
  subscription!: Subscription;
  productConstant = shopEaseConstants;
  filteredProductList: IProducts[] = [];
  constructor(
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.subscription = this.sharedService.getStaticData().subscribe((data: IProducts[]) => {
      this.filteredProductList = this.productList = data;
      this.cdr.markForCheck();
    });
  }

  onAddToCart(product: IProducts) {

  }
  onCategroyClick(category: ICategories) {
    this.filteredProductList = this.productList?.filter((prod: IProducts) => {
      return prod?.categoryID === category?.categoryID || category?.categoryID === this.productConstant.SHOW_ALL
    })
  }

  onSearchInput(event: any){
    console.log("ip ev", event)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
