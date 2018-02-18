import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';

import { LoggerService } from './logger.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    constructor(private _loggerSerivce: LoggerService) { 
        
    }

    handleError(error) {
        this._loggerSerivce.error('unexpected error happened', error.message);
    }

    handleHttpError(error) {
        this.handleByStatusCode(error);
        return Observable.throw(error);
    }

    private handleByStatusCode(error) {
        switch (error.status){
            case 400: this._loggerSerivce.info('bad request was initiated', error.message);
            break;

            case 401: this._loggerSerivce.info('unauthorized user tried to open resource', error.message);
            break;

            case 403: this._loggerSerivce.notice('user tried to open forbidden resource', error.message);
            break;

            case 404: this._loggerSerivce.alert('http endpoint was not found', error.message);
            break;

            case 500: this._loggerSerivce.error('unexpected error happened', error.message);
            break;

            case 503: this._loggerSerivce.warning('some service was not available', error.message);
            break;

            default: this._loggerSerivce.error('unexpected error happened', error.message);
        }
    }
}