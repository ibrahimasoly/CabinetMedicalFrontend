import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { __values } from 'tslib';
import { Login } from '../Models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
users: Login[]=[];
authenticatedUser!:Login|undefined

  constructor(private http:HttpClient) { 
    this.users.push({id: 1, username: "secretaire", password:"0000", roles:["USER"]})
    this.users.push({id: 2, username: "medecin", password:"1234", roles:["USER","ADMIN"]})
  }

  login(username:string, password:string):Observable<Login>{
   let loginUser= this.users.find(u=>u.username==username);
    if(!loginUser) return throwError(()=> new Error("User not found"));
    if(loginUser.password!=password){
      return throwError(()=> new Error("User not found"))
    }
    return of(loginUser);
  }

 public authenticateUser(login: Login):Observable<boolean>{
    this.authenticatedUser=login
    localStorage.setItem("autnUser", JSON.stringify({username: login.username, roles:login.roles, jwt:"JWT_TOKEN"}))
    return of(true)
  }

  hasRole(role: string):boolean{
    return this.authenticatedUser!.roles.includes(role);
  }

  isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
  logOut():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser")
    return of(true)
  }
}
