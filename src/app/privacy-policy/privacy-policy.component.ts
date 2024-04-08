import { Component } from '@angular/core';
import { appName, contactEmail, dateFormat } from '../app.component';
import { AppDatePipe } from "../date-pipe.pipe";

export interface PrivacyPlacholders {
  appName: String
  contactEmail: String,
  huggingFacePolicy: String
  date: Date
}

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [AppDatePipe]
})
export class PrivacyPolicyComponent {

  placeholders: PrivacyPlacholders = {
    appName: appName,
    contactEmail: contactEmail,
    huggingFacePolicy: "https://huggingface.co/privacy",
    date: new Date(2024, 3, 8)
  }

}
