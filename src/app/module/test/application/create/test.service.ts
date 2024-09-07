import { Injectable } from '@angular/core';
import { Test } from '../../domain/Test';
import { LocalFileTestRepository } from '../../infrastructure/localFileTestRepository';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  create(subject: string, evaluation: string, percentageOfQuestions: number): Test {
    const testRepository = new LocalFileTestRepository();
    return testRepository.createTest(subject, evaluation, percentageOfQuestions);
  }
}
