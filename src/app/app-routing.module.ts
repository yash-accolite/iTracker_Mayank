import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";



const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
   {path: 'profile', component: ProfileComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
