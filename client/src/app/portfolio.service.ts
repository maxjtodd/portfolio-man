import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: "root",
})
export class PortfolioService {

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    async myPortfolios() {

        console.log(this.authService.getJwt());

        if (!this.authService.isLoggedIn()) {
            this.router.navigate(["/"]);
            return undefined;
        } else {
            const res = await fetch("http://localhost:8080/api/portfolio/myPortfolios", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.authService.getJwt(),
                },
            });

            if (res.status === 401) {
                this.authService.logout();
                this.router.navigate(["/"]);
            }

            const content = await res.json();
            return content;
        }
    }
}
