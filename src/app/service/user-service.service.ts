import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }

  getBio(){
    let url: string = "http://portfolio-dotnet.herokuapp.com/api/v1/biodata/1";
    return this.http.get(url);
  }
}
