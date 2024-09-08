import { Injectable } from '@angular/core';
import { TestRepository } from '../domain/TestRepository';
import { Test } from '../domain/Test';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FetchTestRepositoryService implements TestRepository {

  constructor(private readonly httpClient: HttpClient) { }

  createTest(subject: string, evaluation: string, percentageOfQuestions: number): Observable<Test> {
    return this.httpClient.get<Test>('http://localhost:8080/test/databases/first/100');
  }
}
