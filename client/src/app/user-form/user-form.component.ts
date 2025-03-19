import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

    authenticationService: AuthenticationService = inject(AuthenticationService);

    userForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    async submit() {
        await this.authenticationService.signUp(
            this.userForm.value.firstName ?? '',
            this.userForm.value.lastName ?? '',
            this.userForm.value.email ?? '',
            this.userForm.value.password ?? '',
        );
        
        const jwt = this.authenticationService.getJwt();
        console.log(jwt);
    }
}
