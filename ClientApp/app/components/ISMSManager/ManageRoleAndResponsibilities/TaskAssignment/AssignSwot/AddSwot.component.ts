import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ClassificationLevel} from '../../../OrganizationSetup/ClassificationLevel/ClassificationLevel.model';
import { ClassificationLevelService } from '../../../OrganizationSetup/ClassificationLevel/ClassificationLevel.service';
import { SwotTaskDetailService } from './AddSwot.service';
import { TaskDetails } from '../TaskDetails.model';
import { TaskList } from '../TaskList.model';

@Component({
    selector: 'addSwot',
    templateUrl: './AddSwot.component.html',
    providers: [ClassificationLevelService, SwotTaskDetailService]
})

export class AssignSwotComponent implements OnInit {
    swotForm: FormGroup;
    classificationLevelLists: ClassificationLevel[];
    errorMessage: any;
    taskId: number;

    constructor(private _classificationLevelService:ClassificationLevelService, private _taskDetailsService: SwotTaskDetailService, private _http: Http, private _router: Router, private _fb: FormBuilder, private _avRoute: ActivatedRoute)
    {
        if (this._avRoute.snapshot.params["taskId"]) {
            this.taskId = this._avRoute.snapshot.params["taskId"];
        }

        this.swotForm = this._fb.group({
            taskDetailsId: 0,
            deadline: ['', [Validators.required]],
            frequency: ['', [Validators.required]],
            classificationLevelId: ['', [Validators.required]],
            reviewer: ['', [Validators.required]],
            approver: ['', [Validators.required]]

        });
      
    }

    ngOnInit() {
        this._classificationLevelService.getClassificationlevel().subscribe(
            data => this.classificationLevelLists = data);

        this._taskDetailsService.getTaskListById(this.taskId)
            .subscribe(resp => this.swotForm.setValue(resp)
            , error => this.errorMessage = error);
        
    }

    save() {

        this._taskDetailsService.saveSwotTaskDetails(this.swotForm.value).subscribe(
            (data) => {
                alert("Task Assigned Successfully");
                this._router.navigate(['/viewTaskAssignment']);
            }, error => this.errorMessage=error)
    }

    cancel() {
        this._router.navigate(['/viewTaskAssignment']);
    }

    get deadline() { return this.swotForm.get('deadline'); }
    get frequency() { return this.swotForm.get('frequency'); }
    get classificationLevelId() { return this.swotForm.get('classificationLevelId'); }
    get reviewer() { return this.swotForm.get('reviewer'); }
    get approver() { return this.swotForm.get('approver'); }
}