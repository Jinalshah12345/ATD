import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   private url = "http://localhost:3000";
  // private url = "http://localhost:9000";


  constructor(private http: HttpClient) {}

   // get all data

   getAllData(page = 1): Observable<User[]> {

    return this.http
     .get<User[]>(this.url, { responseType: "json"})
     .pipe(
      tap((_) => console.log('Fetch Users')));
     
    

  }


  
}
