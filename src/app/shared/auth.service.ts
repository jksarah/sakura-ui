import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
endpoint:string ='http://localhost:3000/api/v1';
headers = new HttpHeaders().set("Content-Type","application/json");
currentuser = {}

  constructor(private http: HttpClient,public router:Router) { }

  signup(user:User): Observable<any>{
    let url =  `${this.endpoint}/user/register`;
    return this.http.post(url,user,{headers: this.headers}).pipe(catchError(this.handleError))
  }
 

login(user:User){
return this.http.post<any>(`${this.endpoint}/user/login`,user).subscribe((res:any)=>{
  localStorage.setItem("access_token",res.result.token)
} )
}

  handleError(error: HttpErrorResponse){
    let message = ""
    if(error.error instanceof ErrorEvent){
      message = error.error.message
    }else{
      message = `Error code: ${error.status}\n Message: ${error.message}`

    }
    return throwError(() => new Error(message))
  }
}
