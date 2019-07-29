import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class HttpService{
    constructor(private http:HttpClient){}

    getDataWithParams(inputReqest,reqUrl){
        const url = `${environment.apiEndpoint + reqUrl}`;
        return this.http.get<any>(url,{params:inputReqest});
    }

    postData(payload, requrl): Observable<any> {
        const url = `${environment.apiEndpoint + requrl}`;
        return this.http.post<any>(url, payload);
      }
    
      getData(requrl) {
        const url = `${environment.apiEndpoint + requrl}`;
        return this.http.get<any>(url);
      }
}