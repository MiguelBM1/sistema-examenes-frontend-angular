import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { LoginService } from "../pages/login/services/login.service";
import { Observable } from "rxjs";

export const AuthInterceptor : HttpInterceptorFn =
    (req: HttpRequest<unknown>, next: HttpHandlerFn)=> {
        const loginService= inject(LoginService);
        let authReq = req;
        const token = loginService.getToken();
        if (token != null) {
            authReq = authReq.clone({ 
                setHeaders: {
                    Authorization: `Bearer ${token}`}
                })
    }
    return next(authReq);
}
    

export const AuthInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptor,
        multi: true
    } 
        
]