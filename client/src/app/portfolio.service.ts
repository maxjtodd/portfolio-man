import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Portfolio } from "./portfolio";
import { Holding } from "./holding";

@Injectable({
    providedIn: "root",
})
export class PortfolioService {

    private errors: string[] = [];
    private reload: boolean = false;

    public getReload():boolean {
        return this.reload;
    }

    public setReload(a: boolean) {
        this.reload = a;
    }

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    async getPortfolioById(portfolioId: number): Promise<Portfolio | null> {
        const res = await fetch(`http://localhost:8080/api/portfolio/${portfolioId}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            }
        });

        const content = await res.json();

        if (res.status >= 400) {
            this.errors = content;
            return null;
        }

        return content;

    }

    async getPublicPortfolios(): Promise<Portfolio[]> {
        const res = await fetch("http://localhost:8080/api/portfolio/public");
        const content = await res.json();
        return content;
    }

    async myPortfolios(): Promise<Portfolio[] | null> {

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

    async create(name: string, isPrivate: boolean): Promise<Portfolio | null> {

        if (!this.authService.isLoggedIn()) {
            this.router.navigate(["/"]);
            return null;
        } else {
            const res = await fetch("http://localhost:8080/api/portfolio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.authService.getJwt(),
                },
                body: JSON.stringify({userId: this.authService.getUserId(), name, private: isPrivate})
            });

            if (res.status === 401 || res.status === 403) {
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


    async getHoldings(portfolioId: number): Promise<Holding[] | null> {
        const res = await fetch(`http://localhost:8080/api/holding/${portfolioId}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            },
        });

        const content = await res.json();

        if (res.status >= 400) {
            return null;
        }

        return content;
    }


}
