import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Roles} from './Roles.model';

import { AddSwotRoleService } from './addRole.service';


@Component({
    selector: 'addSwotRole',
    templateUrl: './addRole.component.html',
    providers: [AddSwotRoleService]

})

export class AddRoleSwotComponent implements OnInit {
    roleForm: FormGroup;
    roles: Roles[];

    constructor(private _router: Router, private _avRouter: ActivatedRoute, private _fb: FormBuilder, private _addService : AddSwotRoleService) 
    {
         this.roleForm =this._fb.group({
            roleID: 0,
            roleName: ['', [Validators.required]]

        });

    }

    ngOnInit() { 
        this._addService.getRoles().subscribe(
            data => this.roles =  data)
    }




    cancel() {
        this._router.navigate(['/viewTaskAssignment']);
    }

    get roleName() { return this.roleForm.get('roleName'); }

}