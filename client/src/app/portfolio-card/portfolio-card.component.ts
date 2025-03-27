import { Component, Input } from '@angular/core';
import { Portfolio } from '../portfolio';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-portfolio-card',
  imports: [RouterModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
    @Input() portfolio!: Portfolio;
    owner: User | null = null;
    constructor(
        public userService: UserServiceService
    ) {}

    ngOnInit() {
        this.setOwner();
    }

    async setOwner() {
        this.owner = await this.userService.getUserById(this.portfolio!.userId);
    }
}
