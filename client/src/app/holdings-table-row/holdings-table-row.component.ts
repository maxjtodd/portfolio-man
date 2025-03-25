import { Component, Input } from '@angular/core';
import { Holding } from '../holding';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-holdings-table-row',
  imports: [RouterModule],
  templateUrl: './holdings-table-row.component.html',
  styleUrl: './holdings-table-row.component.css'
})
export class HoldingsTableRowComponent {
    @Input() holding!: Holding;
}
