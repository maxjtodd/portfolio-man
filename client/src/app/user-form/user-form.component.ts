import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

    login!: boolean;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.login = this.route.snapshot.data['login'];
    }

    authenticationService: AuthenticationService = inject(AuthenticationService);

    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    async submit() {

        if (this.login) {
            this.loginUser();
        } else {
            await this.signUp();
        }
        
        this.router.navigate(['/']);
    }

    async signUp() {
        await this.authenticationService.signUp(
            this.userForm.value.firstName ?? '',
            this.userForm.value.lastName ?? '',
            this.userForm.value.email ?? '',
            this.userForm.value.password ?? '',
        );
    }

    loginUser() {
        console.log('login');
    }
}
