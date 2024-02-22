import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RewardPointsService } from './services/reward-points.service';
import { CustomerService } from './services/customer.service';
import { OrderDetailsService } from './services/order-details.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(HttpClientModule), RewardPointsService, CustomerService, OrderDetailsService]
};
