import {Test} from "./Test";

export interface TestRepository {
  createTest(subject: string, evaluation: string, percentageOfQuestions: number): Test;
}
