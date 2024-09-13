import {Test} from "./Test";
import {Observable} from "rxjs";

export interface TestRepository {
  createTest(subject: string, evaluation: string, percentageOfQuestions: number): Observable<Test>;
}
