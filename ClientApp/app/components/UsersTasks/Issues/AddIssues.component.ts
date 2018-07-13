import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormsModule, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Issues } from './Issues.model';
import { IssuesService } from './Issues.service';

@Component({
    selector: 'addIssues',
    templateUrl: './AddIssues.component.html',
    providers: [IssuesService]
})

export class AddIssuesComponent {
    issueForm: FormGroup;
    errorMessage: any;

    constructor(private _issuesService: IssuesService, private _http: Http, private _router: Router, private _fb: FormBuilder, private _avRoute: ActivatedRoute) {
       

            this.issueForm = this._fb.group({
                issueId: 0,
                description: ['', [Validators.required]],
                type: ['', [Validators.required]]
            });


        }

    save() {
        console.log(this.issueForm.value);
    this._issuesService.saveIssues(this.issueForm.value).subscribe(
            (data) => {
                alert("Issues Added Successfully");
                this._router.navigate(['/viewIssues']);
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewIssues']);
    }

    get description() { return this.issueForm.get('description'); }
    get type() { return this.issueForm.get('type'); }
}