import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { ApiService } from './core/api.service';

@Injectable()
export class AppConfig {

    private config: any = {
        users: {},
        otherValue: null
    };

    constructor(private apiService: ApiService) {

    }

    public getConfig() {
        return this.config;
    }

    private getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users').toPromise();
    }

    private apiCallTwo() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/posts/2').toPromise();
    }

    public load() {
        const apiCallOnePromise = this.getUsers();
        const apiCallTwoPromise = this.apiCallTwo();

        return Promise.all([
            apiCallOnePromise,
            apiCallTwoPromise
        ]).then(values => {
            values[0].forEach((user) => {
                this.config.users[user.id] = user;
            });

            this.config.otherValue = values[1];
        }, reason => {
            console.log(reason)
        });
    }
}

export function configServiceFactory (config: AppConfig) {
    return () => config.load();
}