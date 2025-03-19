import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private jwt = '';

    setJwt(jwt: string): void {
        this.jwt = jwt;
    }

    getJwt(): string {
        return this.jwt
    }

    logout(): void {
        this.jwt = '';
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
        this.setJwt(content.jwt);
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

        this.setJwt(content.jwt);

    }

}
