import { Component, Input } from '@angular/core';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio-card',
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
    @Input() portfolio!: Portfolio;
}
