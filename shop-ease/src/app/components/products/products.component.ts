import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { IProducts } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  productList: IProducts[] = [];
  subscription!: Subscription; 
  constructor(
    private sharedService: SharedService,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.subscription = this.sharedService.getStaticData().subscribe((data: IProducts[]) => {
      this.productList = data;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
