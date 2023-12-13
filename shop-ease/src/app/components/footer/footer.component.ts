import { Component } from '@angular/core';
import { shopEaseConstants } from '../../constants/se-constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerConstant = shopEaseConstants;
  constructor() {}

}
