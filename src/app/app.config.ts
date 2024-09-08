import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {FetchTestRepositoryService} from "./module/test/infrastructure/fetch-test-repository.service";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      {provide: 'TestRepository', useClass: FetchTestRepositoryService},
      provideHttpClient(),
  ],
};
