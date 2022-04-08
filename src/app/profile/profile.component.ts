import { Component, OnInit, TemplateRef } from "@angular/core";
import { SocialAuthService } from "angularx-social-login";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

import { ProfileService } from "../profile.service";
import { IProfile } from "../profile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(
    private router: Router,
    public socialAuthService: SocialAuthService,
    private modalService: BsModalService,
    private _profileServive: ProfileService
  ) {}

  form: any = {
    primary_skill: "Java",
    secondary_skill: "React",
    tertiary_skill: "JavaScript",
  };

  public profile: IProfile[] = [];
  modalRef?: BsModalRef;

  ngOnInit() {
    this._profileServive
      .getProfileInfo()
      .subscribe((data) => (this.profile = data));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  updatePrimarySkill() {
    alert("You have updated Primary Skill to: " + this.form.primary_skill);
  }
  updateSecondarySkill() {
    alert("You have updated Secondary Skill to: " + this.form.secondary_skill);
  }
  updateTertiarySkill() {
    alert("You have updated Tertiary Skill to: " + this.form.tertiary_skill);
  }
  logout(): void {
    this.socialAuthService
      .signOut()
      .then(() => this.router.navigate(["login"]));
  }
}
