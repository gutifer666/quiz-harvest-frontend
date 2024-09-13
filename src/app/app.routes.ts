import { Routes } from '@angular/router';
import {TestMakerComponent} from "./presentation/test-maker/test-maker.component";
import {DeskComponent} from "./presentation/desk/desk.component";

export const routes: Routes = [
  { path: '', component: TestMakerComponent },
  { path: 'test', component: DeskComponent }
];
