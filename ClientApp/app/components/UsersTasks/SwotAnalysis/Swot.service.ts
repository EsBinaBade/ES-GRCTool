import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class SwotService {
    myAppUrl: string = '';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getSwotList() {
        return this._http.get(this.myAppUrl + 'api/GetSwotAnalysis')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getSwotListInternal() {
        return this._http.get(this.myAppUrl + 'api/GetSwotInternal')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getSwotListExternal() {
        return this._http.get(this.myAppUrl + 'api/GetSwotExternal')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }


    saveSwotAnalysis(swotAnalysis) {
        return this._http.post(this.myAppUrl + "api/AddSwotAnalysis", swotAnalysis)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getSwotAnalysisById(swotAnalysisId: number) {
        return this._http.get(this.myAppUrl + "api/GetSwotAnalysisById/" + swotAnalysisId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateSwotanalysis(swotAnalysis) {
        return this._http.put(this.myAppUrl + "api/EditSwotAnalysis", swotAnalysis)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);

    }

    //deleteRolesAndResponsibilities(roleID) {
    //    console.log(roleID);
    //    return this._http.delete(this.myAppUrl + 'api/deleteRolesAndResponsibilities/' + roleID)
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler);
    //}

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}