import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './question-view.component.html',
  styleUrl: './question-view.component.scss'
})
export class QuestionViewComponent {

}
