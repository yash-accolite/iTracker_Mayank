import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { ProfileService } from './profile.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';


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
      {path: 'profile', component: MainPageComponent},
      {path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuardService]}
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
 
    MatCardModule,
    ModalModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
   
   

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
    AuthGuardService,ProfileService],
  bootstrap: [AppComponent,LoginComponent,ProfileComponent,MainPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
