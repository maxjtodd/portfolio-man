import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-root',
    imports: [RouterModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'portfolio-man';
    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.authenticationService.loadJwtOnStartup();
    }
}
