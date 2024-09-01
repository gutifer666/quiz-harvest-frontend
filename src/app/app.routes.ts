import { Routes } from '@angular/router';
import {TestMakerViewComponent} from "./section/test-maker-view/test-maker-view.component";
import {TestViewComponent} from "./section/test-view/test-view.component";

export const routes: Routes = [
  { path: '', component: TestMakerViewComponent },
  { path: 'test', component: TestViewComponent }
];
