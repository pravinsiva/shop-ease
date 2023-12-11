import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { produts } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getStaticData() {
    return of(produts);
  }
}
