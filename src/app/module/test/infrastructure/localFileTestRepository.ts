import {TestRepository} from "../domain/TestRepository";
import {Test} from "../domain/Test";
import testJson from "../../../../assets/test.json";

export function localFileTestRepository(): TestRepository {
  return {
    createTest
  };
}

async function createTest(subject: string, evaluation: string): Promise<Test> {
  return testJson as Test;
}
