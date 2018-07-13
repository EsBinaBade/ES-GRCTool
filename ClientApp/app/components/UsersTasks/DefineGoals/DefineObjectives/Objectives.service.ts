import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ObjectiveService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getObjectives() {
        return this._http.get(this.myAppUrl + "api/getObjectives")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getObjectiveById(objectiveId: number) {
        return this._http.get(this.myAppUrl + "api/getObjectiveById/" + objectiveId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    addObjectives(objectives) {
        return this._http.post(this.myAppUrl + "api/addObjectives", objectives)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    editObjectives(objectives) {
        return this._http.put(this.myAppUrl + "api/editObjectives", objectives)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteobjectives(objectiveId: number) {
        return this._http.delete(this.myAppUrl + "api/deleteObjectives/" + objectiveId)
            .map((response: Response) => response.json)
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}

