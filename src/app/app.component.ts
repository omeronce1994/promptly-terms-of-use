import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface TermsPlacholders {
  appName: String
  contactEmail: String,
  jurisdiction: String
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'promptly-terms-of-use';

  placeHolders: TermsPlacholders = {
    appName: 'PromptBooster',
    contactEmail: 'omeronce1995@gmail.com',
    jurisdiction: 'Israel'
  }
}
