import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const appName = 'PromptBoost'
export const contactEmail = 'omeronce1995@gmail.com'
export const effectiveDate = new Date(2024, 3, 8)
export const dateFormat = 'fullDate'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'promptly-terms-of-use';
}
