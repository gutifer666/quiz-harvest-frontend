import {inject, Injectable} from '@angular/core';
import {StudentDto} from "../../domain/student.dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StudentRegisterService {
    private httpClient = inject(HttpClient);

    constructor() {
    }

    register(student: StudentDto): void {
        let users = this.httpClient.get('https://66c82d5c732bf1b79fa87208.mockapi.io/users');
        users.subscribe((data: any) => {
            console.log(data);
        });
    }
}

