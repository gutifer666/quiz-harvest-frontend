import { Component } from '@angular/core';
import {LocalFileTestRepository} from "../../module/test/infrastructure/localFileTestRepository";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-test-view',
  standalone: true,
  imports: [CardModule],
  templateUrl: './test-view.component.html',
  styleUrl: './test-view.component.scss'
})
export class TestViewComponent {

  constructor(private testService: LocalFileTestRepository) {
    console.log(testService.createTest("FIRST", "DATABASES"));
  }
}
