import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

interface Subject {
    name: string;
}

interface Evaluation {
    name: string;
}

// interface PercentageOfQuestions = number from 1 to 100
interface PercentageOfQuestions {
    name: number;
    label: string;
}

@Component({
    selector: 'app-test-maker',
    standalone: true,
    imports: [
        Button,
        DropdownModule,
        ReactiveFormsModule
    ],
    templateUrl: './test-maker.component.html',
    styleUrl: './test-maker.component.scss'
})
export class TestMakerComponent implements OnInit {

    subjects: Subject[] | undefined;
    evaluations: Evaluation[] | undefined;
    percentagesOfQuestions: PercentageOfQuestions[] | undefined;

    formGroup: FormGroup | undefined;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.subjects = [
            {name: 'Databases'},
            {name: 'Environments'},
            {name: 'Workplace'},
            {name: 'Markup'},
            {name: 'Programming'},
            {name: 'Systems'},
            {name: 'Client'},
            {name: 'Server'},
            {name: 'Deployment'},
            {name: 'Interface'},
            {name: 'Business'},
            {name: 'Elective'}
        ];

        this.evaluations = [
            {name: 'First'},
            {name: 'Second'}
        ];

        this.percentagesOfQuestions = [
            {name: 25, label: '25%'},
            {name: 50, label: '50%'},
            {name: 75, label: '75%'},
            {name: 100, label: '100%'}
        ];

        this.formGroup = new FormGroup({
            selectedSubject: new FormControl<Subject | null>(null),
            selectedEvaluation: new FormControl<Evaluation | null>(null),
            selectedPercentageOfQuestions: new FormControl<{ name: string } | null>(null)
        });
    }

    createTheTest() {
        this.router.navigate(['/test', {
            subject: this.formGroup?.get('selectedSubject')?.value?.name,
            evaluation: this.formGroup?.get('selectedEvaluation')?.value?.name,
            percentageOfQuestions: this.formGroup?.get('selectedPercentageOfQuestions')?.value?.name
        }])
            .then(r => console.log(r));
    }
}
