import { Component } from '@angular/core';
import {LocalFileTestRepository} from "../../module/test/infrastructure/localFileTestRepository";

@Component({
  selector: 'app-test-view',
  standalone: true,
  imports: [],
  templateUrl: './test-view.component.html',
  styleUrl: './test-view.component.scss'
})
export class TestViewComponent {

  constructor(private testService: LocalFileTestRepository) {
    console.log(testService.createTest("FIRST", "DATABASES"));
  }
}
