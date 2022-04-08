import { Component } from "@angular/core";
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDatepickerConfig,
  NgbDate,
} from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-addslots",
  templateUrl: "./addslots.component.html",
  styleUrls: ["./addslots.component.scss"],
})
export class AddslotsComponent {
  repeatMode = "never";
  slotDate: NgbDate;
  Slots = [
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];
  DaysOfWeek = {
    Monday: "M",
    Tuesday: "T",
    Wednesday: "W",
    Thursday: "T",
    Friday: "F",
    Saturday: "S",
    Sunday: "S",
  };
  selectDay: string | null;
  formData: FormGroup;
  constructor(
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.disableMonths(config);

    this.slotDate = calendar.getToday();
    console.log(this.slotDate);
    this.selectDay = this.getDayfromDate();
    this.formData = new FormGroup({
      slotDate: new FormControl(this.slotDate),
      fromTimeSlot: new FormControl(),
      toTimeSlot: new FormControl(),
      repeatMode: new FormControl(this.repeatMode),
    });
  }

  //only enable dates from today to last day of next month
  disableMonths(config: NgbDatepickerConfig) {
    let startDate = new Date(),
      endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 2, 0);
    console.log(startDate, endDate);
    config.minDate = {
      year: startDate.getFullYear(),
      month: startDate.getMonth() + 1,
      day: startDate.getDate(),
    };
    config.maxDate = {
      year: startDate.getFullYear(),
      month: endDate.getMonth() + 1,
      day: endDate.getDate(),
    };
    config.outsideDays = "hidden";
  }

  onSlotDateChange(e: any) {
    this.slotDate = e;
    this.selectDay = this.getDayfromDate();
  }

  onRepeatModeChange(e: any) {
    this.repeatMode = e.target.value;
  }

  //format date in format yyyy-mm-dd
  formatDateToString(date: any) {
    return date.year + "-" + date.month + "-" + date.day;
  }

  //get name of weekday from slotdate
  getDayfromDate() {
    let days = Object.keys(this.DaysOfWeek);
    let date = new Date(this.slotDate.year, this.slotDate.month-1, this.slotDate.day);
    let weeknumber = (date.getDay() + 6 ) % 7;
    return days[weeknumber];
  }

  
  //sortNull for keeping original order of keyvalue in ngFor for DaysOfWeek
  sortNull() {
    return 0;
  }

  onClickSubmit(data: any) {
    this.formData.setValue(data);
    this.formData.setControl(
      "slotDate",
      new FormControl(this.formatDateToString(this.slotDate))
    );
    console.log('TIME SLOTS RANGE ', this.timeCheck());
    console.log("FORM DATA", this.formData.getRawValue());
  }

  //time slots validation
  timeCheck(): string | null {
    const [fromHr, fromMin] = this.formData.get('fromTimeSlot')?.value.split(":").map(Number);
    const [toHr, toMin] = this.formData.get('toTimeSlot')?.value.split(":").map(Number);
    
    if (fromHr > toHr || (fromHr == toHr && fromMin > toMin)){
      return 'INVALID';
    } else {
      return 'VALID';
    }
    return null;
  } 
}
