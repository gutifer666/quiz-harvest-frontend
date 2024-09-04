import {Component, model} from '@angular/core';
import {CardModule} from "primeng/card";
import {Question} from "../../module/test/domain/Question";
import {JsonPipe, NgForOf} from "@angular/common";
import {Option} from "../../module/test/domain/Option";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-question-view',
  standalone: true,
    imports: [
        CardModule,
        NgForOf,
        JsonPipe,
        RadioButtonModule,
        FormsModule
    ],
  templateUrl: './question-view.component.html',
  styleUrl: './question-view.component.scss'
})
export class QuestionViewComponent {
    question = model<Question>();

    selectOption(option: Option) {
       if (this.question()) {
           this.question()?.options.forEach(opt => opt.selected = false); // Deselect all options
           option.selected = true; // Select the option
       }
    }
}
