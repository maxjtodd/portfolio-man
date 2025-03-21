import { Component, Input } from '@angular/core';
import { Portfolio } from '../portfolio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  imports: [RouterModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
    @Input() portfolio!: Portfolio;
}
