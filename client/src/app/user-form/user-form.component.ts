import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, ErrorMessagesComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

    login!: boolean;

    constructor(private router: Router, private route: ActivatedRoute, public authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.login = this.route.snapshot.data['login'];
        this.authenticationService.setErrors([]);
    }

    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    async submit() {

        let success = true;

        if (this.login) {
            success = await this.authenticationService.login(
                this.userForm.value.email ?? '',
                this.userForm.value.password ?? '',
            );
        } else {
            success = await this.authenticationService.signUp(
                this.userForm.value.firstName ?? '',
                this.userForm.value.lastName ?? '',
                this.userForm.value.email ?? '',
                this.userForm.value.password ?? '',
            );
        }
        
        if (success) {
            this.router.navigate(['/']);
        }

    }

}
