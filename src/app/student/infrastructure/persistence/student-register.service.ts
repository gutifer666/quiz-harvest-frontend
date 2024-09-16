import {inject, Injectable} from '@angular/core';
import {StudentDto} from "../../domain/student.dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StudentRegisterService {
    private httpClient = inject(HttpClient);
    private urlApi = 'https://66c82d5c732bf1b79fa87208.mockapi.io/users';

    constructor() {
    }

    register(student: StudentDto): void {
        this.httpClient.post(this.urlApi, student).subscribe(() => {
            console.log('Student registered');

        });
    }
}

