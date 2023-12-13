import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { produts } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
// To return product list mock data as an observable stream of output for asynchronous execution
  getStaticData() {
    return of(produts);
  }
}
