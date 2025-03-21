import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from "../portfolio.service";
import { Portfolio } from "../portfolio";

@Component({
    selector: "app-portfolio-form",
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: "./portfolio-form.component.html",
    styleUrl: "./portfolio-form.component.css",
})
export class PortfolioFormComponent {
    portfolioForm = new FormGroup({
        name: new FormControl(""),
        private: new FormControl(true),
    });

    constructor(
        private router: Router,
        private auth: AuthenticationService,
        private portfolioService: PortfolioService,
    ) {}

    ngOnInit() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(["/"]);
        }
    }

    async submit() {
        console.log("submitted");
        console.log(this.portfolioForm.value.private!);
        const portfolio: Portfolio | null = await this.portfolioService.create(
            this.portfolioForm.value.name ?? '',
            this.portfolioForm.value.private!
        );

        if (portfolio === null) {
            console.log("Portfolio form invalid")
        }
        else {
            this.router.navigate(["/myPortfolios"])
        }

        console.log(portfolio);
    }
}
