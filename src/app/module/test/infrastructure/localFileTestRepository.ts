import { testJSON } from "../../../../assets/test";
import { Test } from "../domain/Test";
import { TestRepository } from "../domain/TestRepository";

export class LocalFileTestRepository implements TestRepository {
  createTest(subject: string, evaluation: string): Test {
    const test: Test = JSON.parse(JSON.stringify(testJSON));
    return test;
  }
}


