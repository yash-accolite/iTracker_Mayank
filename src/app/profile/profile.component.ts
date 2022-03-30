import {Component} from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{

 
  constructor(private router: Router,
    public socialAuthService: SocialAuthService) {
}

logout(): void {
this.socialAuthService.signOut().then(() => this.router.navigate(['login']));
}


}
