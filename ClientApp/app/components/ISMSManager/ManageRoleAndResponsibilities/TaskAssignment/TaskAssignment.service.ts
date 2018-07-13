import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class TaskAssignmentService {
    myAppUrl: string = '';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getTaskList() {
        return this._http.get(this.myAppUrl + 'api/GetTaskDetails')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getTaskDetailsById(taskDetailsId: number) {
        return this._http.get(this.myAppUrl + 'api/GetTaskDetailsById/' + taskDetailsId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveTaskDetails(taskDetails){
        return this._http.post(this.myAppUrl + 'api/AddTaskDetails', taskDetails)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    editTaskDetails(taskDetails) {
        return this._http.put(this.myAppUrl + 'api/EditTaskDetails', taskDetails)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
}

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}