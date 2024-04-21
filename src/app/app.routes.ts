import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppComponent } from './app.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

export const routes: Routes = [
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent }
];
