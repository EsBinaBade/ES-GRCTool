import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Issues } from './Issues.model';
import { IssuesService} from './Issues.service';

@Component({
    selector: 'editIssues',
    templateUrl: './EditIssues.component.html',
    providers: [IssuesService]

})
export class EditIssuesComponent {

    issueForm: FormGroup;
    errorMessage: any;
    issueId: number;

    constructor(private _avRoute: ActivatedRoute, private _issuesService: IssuesService, private _router: Router, private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["issueId"]) {
            this.issueId = this._avRoute.snapshot.params["issueId"];
        }

        this.issueForm = this._fb.group({
            issueId: 0,
            description: ['', []],
            type: ['', []]

        })
    }

    ngOnInit() {
        this._issuesService.getIssuesById(this.issueId).
            subscribe(resp => this.issueForm.setValue(resp),
            error => this.errorMessage = error
            );
    }

    save() {
        console.log(this.issueForm.value);
        this._issuesService.updateIssues(this.issueForm.value).subscribe(
            (data) => {
                alert("Issues updated successfully");
                this._router.navigate(['/viewIssues']);
                this.issueForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewIssues']);
    }

    
    get description() { return this.issueForm.get("description"); }
    get type() { return this.issueForm.get("type"); }
}

