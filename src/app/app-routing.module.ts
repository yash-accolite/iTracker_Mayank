import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ProfileComponent } from "./profile/profile.component";



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
   {path: 'profile', component: ProfileComponent,canActivate: [AuthGuardService]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
