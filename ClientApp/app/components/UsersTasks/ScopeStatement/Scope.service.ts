

import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ScopeService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    saveScopeStatements(scope) {
        return this._http.post(this.myAppUrl + "api/AddScope", scope)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }



    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
