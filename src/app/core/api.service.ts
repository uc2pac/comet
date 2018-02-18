import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ErrorHandlerService } from './errorHandler.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    constructor(
        private _http: Http,
        private _errorHandlerService: ErrorHandlerService
    ) {}

    get(url: string | Request, options?: RequestOptionsArgs) {
        return this.request('get', url, {}, options);
    }

    post(url: string | Request, data: any, options?: RequestOptionsArgs) {
        const defaultOptions = { 
            'Content-Type': 'application/json' 
        };

        let headers = new Headers(options || defaultOptions);
        let requestOptions = new RequestOptions({ headers: headers });

        return this.request('post', url, data, requestOptions);
    }

    delete(url: string | Request, options?: RequestOptionsArgs) {
        return this.request('delete', url, {}, options);
    }

    put(url: string | Request, data: any, options?: RequestOptionsArgs) {
        return this.request('put', url, data, options);
    }

    private request(method: string, url: string | Request, data?: any, options?: RequestOptionsArgs): Observable<any> {
        return this._http[method](url, data, options)
            .map(res => res.json())
            .catch(err => this._errorHandlerService.handleHttpError(err));
    }
}