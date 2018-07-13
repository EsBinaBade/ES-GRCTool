import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { TaskDetails } from '../TaskDetails.model';
import { TaskAssignmentService } from '../TaskAssignment.service';
import { ClassificationLevel} from '../../../OrganizationSetup/ClassificationLevel/ClassificationLevel.model';
import { ClassificationLevelService} from '../../../OrganizationSetup/ClassificationLevel/ClassificationLevel.service';

@Component({
    selector: 'editTaskDetails',
    templateUrl: './EditTaskDetails.component.html',
    providers: [TaskAssignmentService, ClassificationLevelService]

})

export class EditTaskDetailsComponent {

    editTaskDetailsForm: FormGroup;
    errorMessage: any;
    taskDetailsId: number;
    classificationLevelLists: ClassificationLevel[];


    constructor(private _classificationLevelService: ClassificationLevelService,private _avRoute: ActivatedRoute, private _taskService: TaskAssignmentService, private _router: Router, private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["taskDetailsId"]) {
            this.taskDetailsId = this._avRoute.snapshot.params["taskDetailsId"];
        }

        this.editTaskDetailsForm = this._fb.group({
            taskDetailsId: 0,
            taskName: ['', []],
            deadline: ['', []],
            frequency: ['', []],
            classificationLevelId: ['', []],
            reviewer: ['', []],
            approver: ['', []],
            roleId: ['',[]],
            responsible: ['', []],
            accountable: ['', []],
            support: ['', []],
            consulted: ['', []],
            informed: ['', []]

        })
    }

    ngOnInit() {
        this._taskService.getTaskDetailsById(this.taskDetailsId).
            subscribe(resp => this.editTaskDetailsForm.setValue(resp),
            error => this.errorMessage = error
        );

        this._classificationLevelService.getClassificationlevel().subscribe(
            data => this.classificationLevelLists = data);
    }

    save() {
        this._taskService.editTaskDetails(this.editTaskDetailsForm.value).subscribe(
            (data) => {
                alert("Task Details updated successfully");
                this._router.navigate(['/viewTaskAssignment']);
                this.editTaskDetailsForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewTaskAssignment']);
    }

    get taskName() { return this.editTaskDetailsForm.get("taskName"); }
    get deadline() { return this.editTaskDetailsForm.get("deadline"); }
    get frequency() { return this.editTaskDetailsForm.get("frequency"); }
    get classificationLevelId() { return this.editTaskDetailsForm.get("classificationLevelId"); }
    get reviewer() { return this.editTaskDetailsForm.get("reviewer"); }
    get approver() { return this.editTaskDetailsForm.get("approver"); }


}
