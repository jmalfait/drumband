import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { LoaderService } from '../loader/loader.service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private loader: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('intercepted request ... ');
        this.loader.show();

        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue') });
        // console.log('Sending request with new header now ...');

        // send the newly created request
        return next.handle(req)
            .do(
                (response) => {
                    if (response instanceof HttpResponse) {
                        this.loader.hide();
                    }
                },
                (error) => {
                    console.log('Error Occurred');
                    console.log(error);
                    this.loader.hide();
            });
    }
}
