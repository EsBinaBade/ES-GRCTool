import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskList } from './TaskList.model';
import { TaskAssignmentService} from './TaskAssignment.service';

@Component({
    selector: 'viewTaskAssignment',
    templateUrl: './TaskAssignment.component.html',
    styleUrls: ['./TaskAssignment.component.css'],
    providers: [TaskAssignmentService]
})

export class TaskAssignmentComponent implements OnInit {
    TaskList: TaskList[];

    constructor(private _taskService: TaskAssignmentService) {
        this.getTaskList();
    }

    ngOnInit() { }

    getTaskList() {
        this._taskService.getTaskList().subscribe(
            data => this.TaskList = data)
    }


}