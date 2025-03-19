import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-messages',
  imports: [CommonModule],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.css'
})
export class ErrorMessagesComponent {
    @Input() errorMessages!:string[];
}
