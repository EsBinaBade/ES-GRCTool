import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Roles } from './Roles.model';

import { AddSwotRoleService } from './addRole.service';
import { TaskDetails } from '../../TaskDetails.model';
import { TaskAssignmentService } from '../../TaskAssignment.service';

@Component({
    selector: 'editAssignedRoles',
    templateUrl: './EditAssignedRoles.component.html',
    providers: [AddSwotRoleService, TaskAssignmentService]

})

export class EditAssignedRoleComponent implements OnInit {
    editAssignedRoleForm: FormGroup;
    roles: Roles[];
    taskDetailsId: number;
    errorMessage: any;

    constructor(private _router: Router, private _avRoute: ActivatedRoute, private _taskService: TaskAssignmentService, private _fb: FormBuilder, private _addService: AddSwotRoleService) {
        if (this._avRoute.snapshot.params["taskDetailsId"]) {
            this.taskDetailsId = this._avRoute.snapshot.params["taskDetailsId"];
        }

        this.editAssignedRoleForm = this._fb.group({
            taskDetailsId: 0,
            taskName: ['', []],
            deadline: ['', []],
            frequency: ['', []],
            classificationLevelId: ['', []],
            reviewer: ['', []],
            approver: ['', []],
            roleId: ['', []],
            responsible: ['', []],
            accountable: ['', []],
            support: ['', []],
            consulted: ['', []],
            informed: ['', []]

        })

    }

    ngOnInit() {
        this._addService.getRoles().subscribe(
            data => this.roles = data)

        this._taskService.getTaskDetailsById(this.taskDetailsId).
            subscribe(resp => this.editAssignedRoleForm.setValue(resp),
            error => this.errorMessage = error
            );
    }


    save() {
        console.log(this.editAssignedRoleForm.value);
        this._taskService.editTaskDetails(this.editAssignedRoleForm.value).subscribe(
            (data) => {
                alert("Role Details updated successfully");
                this._router.navigate(['/viewTaskAssignment']);
                this.editAssignedRoleForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewTaskAssignment']);
    }

    get responsible() { return this.editAssignedRoleForm.get('responsible'); }

}