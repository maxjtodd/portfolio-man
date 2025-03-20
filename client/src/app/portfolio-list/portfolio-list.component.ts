import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  imports: [],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.css'
})
export class PortfolioListComponent {

    constructor(private authenticationService: AuthenticationService, private router:Router) {}

    ngOnInit() {
        if (!this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

}
