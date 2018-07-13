import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TaskList} from '../TaskList.model';

@Injectable()

export class SwotTaskDetailService {
    myAppUrl: string = '';

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    
    saveSwotTaskDetails(taskDetails) {
        let body = JSON.stringify(taskDetails);
        console.log("this is passed data" + body);
        return this._http.post(this.myAppUrl + "api/AddTaskDetails", body)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getTaskListById(taskId: number) {
        return this._http.get(this.myAppUrl + "api/GetTaskListById/" + taskId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
  
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}


