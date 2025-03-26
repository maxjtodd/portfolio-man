import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private jwt = '';

    private errors: string[] = [];

    setJwt(jwt: string): void {
        this.jwt = jwt;
        localStorage.setItem("jwt", jwt);
    }

    getJwt(): string {
        return this.jwt
    }

    getUserId() {
        const decoded: User = jwtDecode(this.jwt);
        return decoded.userId;
    }

    getUser() {
        const decoded: User = jwtDecode(this.jwt);
        return decoded;
    }

    loadJwtOnStartup(): void {
        const loadedJwt = localStorage.getItem("jwt");
        if (loadedJwt !== null) {
            this.jwt = loadedJwt;
        }
    }

    setErrors(errors: string[]): void {
        this.errors = errors;
    }

    getErrors(): string[] {
        return this.errors;
    }

    logout(): void {
        this.jwt = '';
        localStorage.removeItem("jwt");
    }

    isLoggedIn(): boolean {
        return this.jwt !== '';
    }

    constructor() { }

    async signUp(firstName: string, lastName: string, email: string, password: string) {

        const res = await fetch("http://localhost:8080/api/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({firstName, lastName, email, password})
            })

        const content = await res.json();

        this.handleResponse(res.status, content);

        return res.status === 201;
    }

    async login(email: string, password: string) {

        const res = await fetch("http://localhost:8080/api/user",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            }
        );

        const content = await res.json();

        this.handleResponse(res.status, content);

        return res.status === 200;
    }

    private handleResponse(status: number, content: any) {

        if (status === 200 || status === 201) {
            this.setJwt(content.jwt);
            this.setErrors([]);
        } else {
            this.setErrors(content);
        }

    }

}
