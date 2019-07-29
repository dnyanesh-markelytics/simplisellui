import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('user');

    if (token) {
      request = request.clone({
        // headers: request.headers.set('Access-Control-Allow-Origin', '*')
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if(event.body.status_code === 400 || event.body.status_code === 401){
            this.router.navigate(['/login']);
            localStorage.removeItem('user');
          }
          return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
