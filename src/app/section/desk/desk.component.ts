import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {QuestionComponent} from "../question/question.component";
import {Test} from "../../module/test/domain/Test";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {TestService} from "../../module/test/application/test-maker/test.service";

@Component({
    selector: 'app-desk',
    standalone: true,
    imports: [CardModule, QuestionComponent, NgIf, Button],
    templateUrl: './desk.component.html',
    styleUrl: './desk.component.scss'
})
export class DeskComponent implements OnInit {
    test: Test | undefined;
    currentQuestionIndex: number = 0;

    constructor(private router: Router, private route: ActivatedRoute, private testService: TestService) {
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        this.testService.create(
            routeParams.get('subject')!,
            routeParams.get('evaluation')!,
            parseInt(routeParams.get('percentageOfQuestions')!)
        ).subscribe(test => this.test = test);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.test?.questions.length! - 1) {
            this.currentQuestionIndex++;
        }
    }

    hasNextQuestion(): boolean {
        return this.currentQuestionIndex < (this.test?.questions.length ?? 0) - 1;
    }

    isLastQuestion(): boolean {
        return this.currentQuestionIndex === (this.test?.questions.length ?? 0) - 1;
    }

    isOptionSelected() {
        return this.test?.questions[this.currentQuestionIndex].options.some(option => option.selected);
    }

    checkTest() {
        console.log('Checking test...');
        // this.router.navigate(['test-result', this.test]).then(r => console.log(r));
    }

    navigateToTestMakerView() {
        this.router.navigate(['']).then(r => console.log(r));
    }
}
