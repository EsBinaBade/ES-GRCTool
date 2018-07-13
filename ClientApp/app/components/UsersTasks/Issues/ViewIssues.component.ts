import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Issues } from './Issues.model';
import { IssuesService} from './Issues.service';

@Component({
    selector: 'viewIssues',
    templateUrl: './ViewIssues.component.html',
    providers: [IssuesService]
})
export class ViewIssuesComponent {
    issueList: Issues[];
    issue: Issues[];
    errorMessage: any;

    constructor(private _issueService: IssuesService, public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
        this.getIssues();

        this.getIssuesByExternalType();
    }
    ngOnInit() {


    }
    getIssues() {
        this._issueService.getIssuesByType().subscribe(
            data => this.issueList = data)
    }
    
    getIssuesByExternalType() {
        this._issueService.getIssuesByExternalType().subscribe(
            data => this.issue = data)
    }
    delete(issueId) {
        var ans = confirm("Do you want to delete Classification Level??" + issueId);

        if (ans) {
            this._issueService.deleteIssues(issueId).subscribe((data) => {
                alert("Record deleted Successfully!!");
                window.location.reload();
                //this._router.navigate(['/viewIssues']);
            })
        }
    }
}


