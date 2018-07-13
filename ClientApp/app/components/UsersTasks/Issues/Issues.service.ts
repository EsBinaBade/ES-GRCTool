import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Issues} from './Issues.model';

@Injectable()
export class IssuesService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getIssues() {
        return this._http.get(this.myAppUrl + 'api/GetIssues')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getIssuesByType() {
        return this._http.get(this.myAppUrl + 'api/GetIssuesByType')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getIssuesByExternalType() {
        return this._http.get(this.myAppUrl + 'api/GetIssuesByExternalType')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    saveIssues(issues) {
        return this._http.post(this.myAppUrl + "api/addIssues", issues)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getIssuesById(issueId: number) {
        return this._http.get(this.myAppUrl + "api/GetIssuesById/" + issueId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateIssues(issues) {
        return this._http.put(this.myAppUrl + "api/updateIssues", issues)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);

    }

    deleteIssues(issueId) {
        console.log(issueId);
        return this._http.delete(this.myAppUrl + 'api/deleteIssues/' + issueId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
