import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthGuardService} from './auth-guard.service';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: ProfileComponent,canActivate: [AuthGuardService]},
      {path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuardService]},
      {path: '**', component: LoginComponent,canActivate: [AuthGuardService]}
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatGridListModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('408208327082-571vttplk0c4fq06n7i6023kikjj65p5.apps.googleusercontent.com'),
         }
      ]
    }
  },
    AuthGuardService],
  bootstrap: [AppComponent,LoginComponent,ProfileComponent,MainPageComponent]
})
export class AppModule {
}
