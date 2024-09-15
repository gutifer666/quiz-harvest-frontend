import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {XMLHttpRequestTestRepositoryService} from "./test/infrastructure/rest/XMLHttpRequest-test-repository.service";
import {provideHttpClient} from "@angular/common/http";
import {LocalFileTestRepository} from "./test/infrastructure/local/localFileTestRepository";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      {provide: 'TestRepository', useClass: LocalFileTestRepository},
      provideHttpClient(),
      provideAnimationsAsync()
  ],
};
