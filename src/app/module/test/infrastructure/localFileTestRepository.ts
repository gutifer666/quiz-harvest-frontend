import {testJSON} from "../../../../assets/test";
import {Test} from "../domain/Test";
import {TestRepository} from "../domain/TestRepository";
import {Injectable} from "@angular/core";

@Injectable()
export class LocalFileTestRepository implements TestRepository {
  createTest(subject: string, evaluation: string, percentageOfQuestions: number): Test {
      return JSON.parse(JSON.stringify(testJSON));
  }
}


