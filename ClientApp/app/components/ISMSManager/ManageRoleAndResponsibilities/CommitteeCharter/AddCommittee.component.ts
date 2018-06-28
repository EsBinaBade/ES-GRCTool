import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CommitteeCharter } from './CommitteeCharter.model';
import { CommitteeCharterService } from './CommitteeCharter.service';
import { ViewCommitteeComponent} from './ViewCommittee.component';

@Component({
    templateUrl: './AddCommittee.component.html',
    styleUrls: ['../../OrganizationSetup/OrganizationSetup.component.css'],
    providers: [CommitteeCharterService]
})

export class AddCommitteeComponent implements OnInit{
    committeeForm: FormGroup;
    committeeList: CommitteeCharter[];
    committeeId: number;
    title: string = "Create";
    errormessage: string;

    constructor(private _http: Http, private _router: Router, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _committeeService: CommitteeCharterService) {

        if (this._avRoute.snapshot.params["committeeId"]) {
            this.committeeId = this._avRoute.snapshot.params["committeeId"];
        }

        this.committeeForm = this._fb.group({
            committeeId: 0,
            chairman: ['', [Validators.required]],
            deputyChairman: ['', [Validators.required]],
            members: ['', [Validators.required]],
            about: ['', [Validators.required]],
            attendance: ['', [Validators.required]],
            voting: ['', [Validators.required]],
            meetingFrequency: ['', [Validators.required]]

        });
    }

    ngOnInit() {

        this._committeeService.getCommittee().subscribe(
            data => this.committeeList = data
        )  

        if (this.committeeId > 0) {
            this.title = "Edit";
            this._committeeService.getCommitteeByid(this.committeeId)
                .subscribe(resp => this.committeeForm.setValue(resp)
                , error => this.errormessage = error);
        }
    }


    save() {
        if (this.title == "Create") {
            this._committeeService.saveCommittee(this.committeeForm.value)
                .subscribe((data) => {
                    alert("Committee Added Successfully");
                    this._router.navigate(['/viewCommittee']);
                    this.committeeForm.reset();
                }, error => this.errormessage = error)
        }
        else if (this.title == "Edit") {
            this._committeeService.editCommittee(this.committeeForm.value)
                .subscribe((data) => {
                    alert("Committee Updated Successfully");
                    this._router.navigate(['/viewCommittee']);
                    this.committeeForm.reset();
                }, error => this.errormessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/viewCommittee']);
    }

    get chairman() { return this.committeeForm.get('chairman'); }
    get deputyChairman() { return this.committeeForm.get('deputyChairman'); }
    get members() { return this.committeeForm.get('members') };
    get about() { return this.committeeForm.get('about'); }
    get attendance() { return this.committeeForm.get('attendance'); }
    get voting() { return this.committeeForm.get('voting'); }
    get meetingFrequency() { return this.committeeForm.get('meetingFrequency'); }

}