import { Component } from '@angular/core';
import { appName, contactEmail, effectiveDate } from '../app.component';
import { AppDatePipe } from "../date-pipe.pipe";

export interface TermsPlacholders {
  appName: String
  contactEmail: String,
  jurisdiction: String,
  date: Date,
}

@Component({
    selector: 'app-terms-of-use',
    standalone: true,
    templateUrl: './terms-of-use.component.html',
    styleUrl: './terms-of-use.component.scss',
    imports: [AppDatePipe]
})
export class TermsOfUseComponent {
  placeHolders: TermsPlacholders = {
    appName: appName,
    contactEmail: contactEmail,
    jurisdiction: 'Israel',
    date: effectiveDate
  }
}
