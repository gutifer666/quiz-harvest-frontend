import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-student-register',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        InputTextModule,
        Button,
        FloatLabelModule
    ],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.scss'
})
export class StudentRegisterComponent {
    private fb = inject(FormBuilder);
    public registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    onSubmit() {
        console.log(this.registerForm.value);
    }
}
