import {Component, OnInit} from '@angular/core';
import {LocalFileTestRepository} from "../../module/test/infrastructure/localFileTestRepository";
import { CardModule } from 'primeng/card';
import {QuestionViewComponent} from "../question-view/question-view.component";
import {Test} from "../../module/test/domain/Test";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-test-view',
  standalone: true,
  imports: [CardModule, QuestionViewComponent, NgIf],
  templateUrl: './test-view.component.html',
  styleUrl: './test-view.component.scss'
})
export class TestViewComponent implements OnInit {
  test: Test | undefined;
  subject: string | undefined;
  evaluation: string | undefined;
  constructor(private route: ActivatedRoute,private testService: LocalFileTestRepository) {
  }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('subject')!;
    this.evaluation = this.route.snapshot.paramMap.get('evaluation')!;
    this.test = this.testService.createTest(this.subject, this.evaluation);
    console.log(this.test.questions[0].textQuestion);
  }
}
