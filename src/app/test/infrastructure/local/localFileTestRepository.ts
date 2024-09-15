import {testJSON} from "../../../../assets/test";
import {Test} from "../../domain/Test";
import {TestRepository} from "../../domain/TestRepository";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class LocalFileTestRepository implements TestRepository {
  createTest(subject: string, evaluation: string, percentageOfQuestions: number): Observable<Test> {
      return of(JSON.parse(JSON.stringify(testJSON)));
  }
}
