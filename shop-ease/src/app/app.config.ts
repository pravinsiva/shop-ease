import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { shopEaseConstants } from './constants/se-constants';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), shopEaseConstants,
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy },
  importProvidersFrom(
    StoreModule.forRoot({ prodCount : productReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  )
    ]
};
