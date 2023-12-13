import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { shopEaseConstants } from './constants/se-constants';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), shopEaseConstants,
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy }]
};
