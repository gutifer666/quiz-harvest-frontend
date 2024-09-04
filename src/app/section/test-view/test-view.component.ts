import {Component, OnInit} from '@angular/core';
import {LocalFileTestRepository} from "../../module/test/infrastructure/localFileTestRepository";
import {CardModule} from 'primeng/card';
import {QuestionViewComponent} from "../question-view/question-view.component";
import {Test} from "../../module/test/domain/Test";
import {ActivatedRoute, Router} from "@angular/router";
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
    currentQuestionIndex: number = 0;

    constructor(private router: Router, private route: ActivatedRoute, private testService: LocalFileTestRepository) {
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        this.test = this.testService.createTest(
            routeParams.get('subject')!,
            routeParams.get('evaluation')!,
            parseInt(routeParams.get('percentageOfQuestions')!));
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
