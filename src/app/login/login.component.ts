import { Component, OnInit} from "@angular/core";
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from "angularx-social-login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  loggedIn: boolean;


  constructor(
    private router: Router,
    public socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }
 
  loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(["profile"]));
  }
  refreshToken() {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.user.name);
  }
}
