import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Injectable()

export class RolesAndResponsibilitiesService {
    myAppUrl: string = '';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl= baseUrl;
    }

    getRolesAndResponsibilities() {
        return this._http.get(this.myAppUrl + 'api/GetRolesAndResponsibilities')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCompetencyNeed() {
        return this._http.get(this.myAppUrl + 'api/GetCompetencyNeed')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveRolesAndResponsibilities(roles) {
        return this._http.post(this.myAppUrl + "api/addRolesAndResponsibilities", roles)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getRolesAndResponsibilitiesById(roleID: number) {
        return this._http.get(this.myAppUrl + "api/GetRolesAndResponsibilitiesById/" + roleID)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    editRolesAndResponsibilities(roles) {
        return this._http.put(this.myAppUrl + "api/editRolesAndResponsibilities", roles)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);

    }

    deleteRolesAndResponsibilities(roleID) {
        console.log(roleID);
        return this._http.delete(this.myAppUrl + 'api/deleteRolesAndResponsibilities/' + roleID)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}