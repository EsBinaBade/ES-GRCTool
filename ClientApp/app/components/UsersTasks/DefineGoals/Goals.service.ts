import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GoalService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getGoals() {
        return this._http.get(this.myAppUrl + "api/getGoals")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getGoalsById(goalId: number) {
        return this._http.get(this.myAppUrl + "api/getGoalsById/" + goalId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    addGoals(goals) {
        return this._http.post(this.myAppUrl + "api/addGoals", goals)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateGoals(goals) {
        return this._http.put(this.myAppUrl + "api/editGoals", goals)
            .map((response: Response) => response.json)
            .catch(this.errorHandler);
    }

    deleteGoals(goalId: number) {
        return this._http.delete(this.myAppUrl + "api/deleteGoals/" + goalId)
            .map((response: Response) => response.json)
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
