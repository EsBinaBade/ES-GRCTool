import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CommitteeCharterService} from './CommitteeCharter.service';
import { CommitteeCharter } from './CommitteeCharter.model';
import { AddCommitteeComponent} from './AddCommittee.component';

@Component({
    selector: 'viewCommittee',
    templateUrl: './ViewCommittee.component.html',
    styleUrls: ['../../OrganizationSetup/OrganizationSetup.component.css'],
    providers: [CommitteeCharterService]
})

export class ViewCommitteeComponent implements OnInit{
    committeList: CommitteeCharter[];

    constructor(public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router, private _committeeService: CommitteeCharterService) {
        this.getCommittee();
    }

    ngOnInit() {

    }

    getCommittee() {
        this._committeeService.getCommittee().subscribe(
            data => this.committeList = data)
    }

    DeleteCommittee(committeeId) {
        var ans = confirm("Do you want to delete Committee??" + committeeId);
        if (ans) {
            this._committeeService.deleteCommittee(committeeId).subscribe(
                (data) => {
                    window.location.reload();
                    this._router.navigate(['/viewCommitte']);
                })
        }
    }

}