import { HttpService } from '../shared/http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService{
    constructor(private http:HttpService){}
    private userData = new BehaviorSubject<any>({});
    currentUserData = this.userData.asObservable();
    isLogIn(): boolean {
        var user = this.getUser();
        if(user != null){
            return user.loggedin;
        }else{
           return false;
        }
    }
      
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
    
    logIn(obj:any): Observable<any> {
        return this.http.postData(obj,'productsapi/login');
    }
    
    signUp(obj): Observable<any> {
        return this.http.postData(obj,'productsapi/registration');
    }
    verifyOTP(obj): Observable<any> {
        return this.http.postData(obj,'productsapi/verify_otp');
    }
    logout(){
        localStorage.removeItem('user');
    }

    LoggedUserData(user:any){
        this.userData.next(user);
    }
}