import { Routes } from '@angular/router';
import {TestMakerComponent} from "./section/test-maker/test-maker.component";
import {DeskComponent} from "./section/desk/desk.component";

export const routes: Routes = [
  { path: '', component: TestMakerComponent },
  { path: 'test', component: DeskComponent }
];
