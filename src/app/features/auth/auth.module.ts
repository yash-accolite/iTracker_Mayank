import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
//import { SocialLoginModule,GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    //GoogleLoginProvider,
    //SocialAuthService,
    //SocialLoginModule,
    CommonModule
  ],
 
  exports: [
    LoginComponent,ProfileComponent
  ],
})
export class AuthModule { }
