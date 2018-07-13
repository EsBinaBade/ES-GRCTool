import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ScopeStatements } from './ScopeStatements.model';
import { ScopeService} from './Scope.service';

@Component({
    selector: 'addScope',
    templateUrl: './AddScope.component.html',
    providers: [ScopeService]
})
export class AddScopeComponent implements OnInit {
    SOAForm: FormGroup;
    errorMessage: any;
    constructor(private _scopeService: ScopeService, private _router: Router, private _fb: FormBuilder) {


        this.SOAForm = this._fb.group({
            scopeId: 0,
            departments: ['', [Validators.required]],
            sOA: ['', [Validators.required]],
            sOADate: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }
    save() {
        console.log(this.SOAForm.value);
        this._scopeService.saveScopeStatements(this.SOAForm.value).subscribe(
            (data) => {
                alert("Successfully Added!!");
                this.SOAForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this.SOAForm.reset();
    }
    get departments() { return this.SOAForm.get("departments"); }
    get sOA() { return this.SOAForm.get("sOA"); }
    get sOADate() { return this.SOAForm.get("sOADate"); }

}
