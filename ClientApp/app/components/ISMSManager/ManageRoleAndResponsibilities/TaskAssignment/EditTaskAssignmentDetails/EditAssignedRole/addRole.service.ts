import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Injectable()

export class AddSwotRoleService {
    myAppUrl: string='';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getRoles() {
        return this._http.get(this.myAppUrl + 'api/GetRoles')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

   
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
