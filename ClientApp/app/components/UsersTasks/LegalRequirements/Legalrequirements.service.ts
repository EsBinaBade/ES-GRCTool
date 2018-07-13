
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LegalRequirementsService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCities() {
        return this._http.get(this.myAppUrl + 'api/GetCities')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCityByCountryId(countryId) {
        return this._http.get(this.myAppUrl + 'api/GetCityByCountryId/' + countryId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCountries() {
        return this._http.get(this.myAppUrl + 'api/GetCountries')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveLegalRequirements(legal) {
        return this._http.post(this.myAppUrl + "api/AddLegalRequirements", legal)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

  

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
