import {Inject, Injectable} from '@angular/core';
import {Test} from '../../domain/Test';
import {TestRepository} from "../../domain/TestRepository";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(@Inject('TestRepository') private testRepository: TestRepository) {
    }

    create(subject: string, evaluation: string, percentageOfQuestions: number): Observable<Test> {
        subject = subject.toLowerCase();
        evaluation = evaluation.toLowerCase();
        return this.testRepository.createTest(subject, evaluation, percentageOfQuestions);
    }
}
