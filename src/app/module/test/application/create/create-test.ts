import { Test } from '../../domain/Test';
import {TestRepository} from "../../domain/TestRepository";

export async function createTest(testRepository:TestRepository): Promise<Test> {
  return testRepository.createTest("subject", "evaluation");
}
