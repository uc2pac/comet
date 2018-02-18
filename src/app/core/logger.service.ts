import { Injectable } from '@angular/core';

import { NtcLogger } from 'js-ntc-logger';
import { ServerLogger } from './logModules/writerToServer';

const prodLogger = ServerLogger.getInterface();
const devLogger  = NtcLogger.createDefaultLogger().getInterface();

@Injectable()
export class LoggerService {

    constructor() {}

    log(method = 'log', message: string, data?: any, location?: string, tags?: [any]) {
        if (ENV === 'production') {
            prodLogger[method](message, data, location, tags);
        } else {
            devLogger.debug(message, data, location, tags);
        }
    }

    emerg(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('emerg', message, data, location, tags);
    }

    alert(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('alert', message, data, location, tags);
    }

    crit(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('crit', message, data, location, tags);
    }

    error(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('error', message, data, location, tags);
    }

    warning(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('warning', message, data, location, tags);
    }

    notice(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('notice', message, data, location, tags);
    }

    info(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('info', message, data, location, tags);
    }

    debug(message: string, data?: any, location?: string, tags?: [any]) {
        this.log('debug', message, data, location, tags);
    }
}