
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AddslotsComponent } from "./addslots/addslots.component";
@NgModule({
  declarations: [AddslotsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [AddslotsComponent],
})
export class PanelistModule {}