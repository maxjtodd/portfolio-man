import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Portfolio } from "./portfolio";

@Injectable({
    providedIn: "root",
})
export class PortfolioService {

    private errors: string[] = [];

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    async myPortfolios(): Promise<Portfolio[] | null> {

        console.log(this.authService.getJwt());

        if (!this.authService.isLoggedIn()) {
            this.router.navigate(["/"]);
            return null;
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
                return null;
            }

            const content = await res.json();

            if (res.status >= 400) {
                this.errors = content;
            }

            return content;
        }
    }
}
