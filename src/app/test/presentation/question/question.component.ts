import {Component, model} from '@angular/core';
import {CardModule} from "primeng/card";
import {Question} from "../../domain/Question";
import {JsonPipe, NgForOf} from "@angular/common";
import {Option} from "../../domain/Option";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-question',
  standalone: true,
    imports: [
        CardModule,
        NgForOf,
        JsonPipe,
        RadioButtonModule,
        FormsModule
    ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
    question = model<Question>();

    selectOption(option: Option) {
       if (this.question()) {
           this.question()?.options.forEach(opt => opt.selected = false); // Deselect all options
           option.selected = true; // Select the option
       }
    }
}
