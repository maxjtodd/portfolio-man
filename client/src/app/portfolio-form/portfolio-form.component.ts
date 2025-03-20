import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  imports: [ReactiveFormsModule],
  templateUrl: './portfolio-form.component.html',
  styleUrl: './portfolio-form.component.css'
})
export class PortfolioFormComponent {

    portfolioForm = new FormGroup({
        name: new FormControl(''),
        private: new FormControl(true)
    });

    constructor(private router:Router, private auth: AuthenticationService) {}

    ngOnInit() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/'])
        }
    }

    submit() {
        console.log('submitted');
    }

}
