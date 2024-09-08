import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {XMLHttpRequestTestRepositoryService} from "./module/test/infrastructure/XMLHttpRequest-test-repository.service";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      {provide: 'TestRepository', useClass: XMLHttpRequestTestRepositoryService},
      provideHttpClient(),
  ],
};
