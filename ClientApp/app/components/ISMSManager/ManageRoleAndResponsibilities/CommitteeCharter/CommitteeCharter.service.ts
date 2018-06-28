import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Injectable()

export class CommitteeCharterService {
    myAppUrl: string='';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCommittee() {
        return this._http.get(this.myAppUrl + 'api/GetCommittee')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCommitteeByid(committeeId) {
        return this._http.get(this.myAppUrl + 'api/GetCommitteeById/' + committeeId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveCommittee(committee) {
        return this._http.post(this.myAppUrl + "api/addCommittee", committee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    editCommittee(committee) {
        return this._http.put(this.myAppUrl + "api/editCommittee", committee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);

    }

    deleteCommittee(committeeId) {
        console.log(committeeId);
        return this._http.delete(this.myAppUrl + 'api/deleteCommittee/' + committeeId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
