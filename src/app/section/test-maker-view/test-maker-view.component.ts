import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-maker-view',
  standalone: true,
  imports: [],
  templateUrl: './test-maker-view.component.html',
  styleUrl: './test-maker-view.component.scss'
})
export class TestMakerViewComponent {
  subject: string="DATABASES";
  evaluation: string="FIRST";
  percentageOfQuestions: number=100;
  constructor(private router: Router) {
  }
  navigateToTestView() {
    this.router.navigate(['/test', {subject: this.subject,
                                             evaluation: this.evaluation,
                                             percentageOfQuestions: this.percentageOfQuestions}])
                                             .then(r => console.log(r));
  }
}
