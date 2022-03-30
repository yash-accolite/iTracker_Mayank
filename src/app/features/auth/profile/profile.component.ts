import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) {
}

logout(): void {
this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
}
}
