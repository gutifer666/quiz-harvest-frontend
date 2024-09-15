import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";
import {FloatLabelModule} from "primeng/floatlabel";
import {StudentRegisterService} from "../../infrastructure/persistence/student-register.service";
import {StudentDto} from "../../domain/student.dto";

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
    private studentRegisterService = inject(StudentRegisterService);

    public registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    onSubmit() {
        const formValue = this.registerForm.value;
        const studentDto: StudentDto = {
            name: formValue.name!,
            email: formValue.email!,
            password: formValue.password!
        };
        this.studentRegisterService.register(studentDto);
    }
}
