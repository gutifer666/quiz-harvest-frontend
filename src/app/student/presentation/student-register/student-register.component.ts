import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
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

    register() {
        const studentDto = this.formValueToStudentDTO(this.registerForm.value);
        this.studentRegisterService.register(studentDto);
    }

    private formValueToStudentDTO(formValue: any): StudentDto {

        return {
            name: formValue.name!,
            email: formValue.email!,
            password: formValue.password!
        };
    }
}
