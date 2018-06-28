import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RolesAndResponsibilitiesService} from './RolesAndResponsibilities.service';
import { RolesAndResponsibilities } from './RolesAndResponsibilities.model';
import { AddRolesAndResponsibilitiesComponent} from './AddRolesAndResponsibilities.component';

@Component({
    selector: 'rolesNResponsibilities',
    templateUrl: './ViewRolesAndResponsibilities.component.html',
    styleUrls: ['../../OrganizationSetup/OrganizationSetup.component.css'],
    providers: [RolesAndResponsibilitiesService]
})

export class ViewRolesAndResponsibilities implements OnInit{
    roleList: RolesAndResponsibilities[];
    errorMessage: any;

    constructor(public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router, private _roles: RolesAndResponsibilitiesService) {
        this.getRolesAndResponsibilities();
    }

    ngOnInit() {
        
    }

    getRolesAndResponsibilities() {
        this._roles.getRolesAndResponsibilities().subscribe(
            data => this.roleList = data)
    }

    DeleteRoles(roleID) {
        var ans = confirm("Do you want to delete Role??" + roleID);

        if (ans) {
            this._roles.deleteRolesAndResponsibilities(roleID).subscribe((data) => {
                window.location.reload();
            })
        }
    }
}