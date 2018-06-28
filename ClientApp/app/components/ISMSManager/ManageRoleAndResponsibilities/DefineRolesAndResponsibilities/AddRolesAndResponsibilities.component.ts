import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RolesAndResponsibilities } from './RolesAndResponsibilities.model';
import { RolesAndResponsibilitiesService } from './RolesAndResponsibilities.service';
import { ViewRolesAndResponsibilities } from './ViewRolesAndResponsibilities.component';
import { CompetencyNeed} from './CompetencyNeed.model';
@Component({
    templateUrl: './AddRolesAndResponsibilities.component.html',
    styleUrls: ['../../OrganizationSetup/OrganizationSetup.component.css'],
    providers: [RolesAndResponsibilitiesService]

})

export class AddRolesAndResponsibilitiesComponent {
    roleForm: FormGroup;
    title: string = "Create";
    roleID: number;
    errorMessage: any;
    roleList: RolesAndResponsibilities[];

    constructor(public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router, private _roles: RolesAndResponsibilitiesService) {
        
        if (this._avRoute.snapshot.params["roleID"]) {
            this.roleID = this._avRoute.snapshot.params["roleID"];
        }
        this.roleForm = this._fb.group({
            roleID: 0,
            roleName: ['', [Validators.required]],
            assignedTo: ['', [Validators.required]],
            roleDescription: ['', [Validators.required]],
            authorities: ['', [Validators.required]],
            competency: ['', [Validators.required]]

        })
    }

    ngOnInit() {
        if (this.roleID > 0) {
            this.title = "Edit";
            this._roles.getRolesAndResponsibilitiesById(this.roleID)
                .subscribe(resp => this.roleForm.setValue(resp)
                , error => this.errorMessage = error);
        }

    }

    save() {
        if (this.title == "Create") {
            this._roles.saveRolesAndResponsibilities(this.roleForm.value)
                .subscribe((data) => {
                    alert("Classificationlevel added Successfully");

                    this._router.navigate(['/rolesNResponsibilities']);
                    this.roleForm.reset();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._roles.editRolesAndResponsibilities(this.roleForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/rolesNResponsibilities']);
                    this.roleForm.reset();
                }, error => this.errorMessage = error)
        }
    }

    cancel() {

        this._router.navigate(['/rolesNResponsibilities']);

    }
    get roleName() { return this.roleForm.get('roleName'); }
    get assignedTo() { return this.roleForm.get('assignedTo'); }
    get roleDescription() { return this.roleForm.get('roleDescription'); }
    get authorities() { return this.roleForm.get('authorities'); }
    get competency() { return this.roleForm.get('competency'); }


}

