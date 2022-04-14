import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "./profile";
import { ISkill } from "./skill";

@Injectable()
export class ProfileService {
  // private _url: string = "http://localhost:8080/users/";
  private _url: string = "https://itracker-himanshu.herokuapp.com/users";
  private _skillsurl: string = "https://itracker-himanshu.herokuapp.com/skills";

  //private _url: string = "http://ec2-3-111-33-68.ap-south-1.compute.amazonaws.com:8080/users/harsh.arora@accolitedigital.com";

  constructor(private http: HttpClient) {}

  getProfileInfo(_emailId: string): Observable<IProfile> {
    return this.http.get<IProfile>(`${this._url}/${_emailId}`);
  }
  putPrimarySkillInfo(): Observable<any> {
        return this.http.put(`${this._skillsurl}`,"./src/assets/dummy-data/profile.json");
  }
  getSkillInfo(_userId: number): Observable<any> {
    return this.http.get<any>(`${this._skillsurl}?id=${_userId}`);
}

  //     getProfileInfo(): any{
  // 		return this.http.get(this._url,  {responseType: 'blob'});
  //    }
}
