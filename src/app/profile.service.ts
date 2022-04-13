import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "./profile";

@Injectable()

 export class ProfileService
{
   //private _url: string = "./assets/dummy-data/profile.json";

   private _url: string = "http://localhost:8080/users/";
   private emailId: string = "sumit.paul@accolitedigital.com";
   //private _url: string = "http://ec2-3-111-33-68.ap-south-1.compute.amazonaws.com:8080/users/harsh.arora@accolitedigital.com";

    constructor(private http: HttpClient){}


    getProfileInfo(emailId: string): Observable<IProfile[]>{
        return this.http.get<IProfile[]>(this._url);
        //return this.http.get<IProfile[]>(`this._url/${this.emailId}`);
    }

//     getProfileInfo(): any{		
// 		return this.http.get(this._url,  {responseType: 'blob'});
//    }


}