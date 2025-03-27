import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

    constructor(
        public authService: AuthenticationService
    ) { }

}
