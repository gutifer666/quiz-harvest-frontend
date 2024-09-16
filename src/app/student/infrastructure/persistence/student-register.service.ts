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
        this.httpClient.post<ApiResponse>(this.urlApi, student).subscribe(res => {
            res.token = 'el-token';
            console.log(res);
        });
    }
}

interface ApiResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    token: string;
}

