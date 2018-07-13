
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SwotAnalysis } from './SwotAnalysis.model';
import { SwotService } from './Swot.service';

@Component({
    selector: 'editSwotAnalysis',
    templateUrl: './EditSwotAnalysis.component.html',
    providers: [SwotService]
})

export class EditSwotAnalysisComponent implements OnInit {
    addSwotAnalysisForm: FormGroup;
    title: string = "Create";
    errorMessage: any;
    swotAnalysisId: number;

    constructor(private _avRoute: ActivatedRoute, private _swotService: SwotService, private _router: Router, private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["swotAnalysisId"]) {
            this.swotAnalysisId = this._avRoute.snapshot.params["swotAnalysisId"];
        }

        this.addSwotAnalysisForm = this._fb.group({
            swotAnalysisId: 0,
            name: ['', [Validators.required]],
            description: ['', []]

        })
    }

    ngOnInit() {
            this._swotService.getSwotAnalysisById(this.swotAnalysisId).
                subscribe(resp => this.addSwotAnalysisForm.setValue(resp),
                error => this.errorMessage = error
                );
    }

    save() {
            this._swotService.updateSwotanalysis(this.addSwotAnalysisForm.value).subscribe(
                (data) => {
                    alert("Swot Description updated successfully");
                    this._router.navigate(['/viewSwotAnalysis']);
                    this.addSwotAnalysisForm.reset();
                }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewSwotAnalysis']);
    }

    get name() { return this.addSwotAnalysisForm.get("name"); }
    get description() { return this.addSwotAnalysisForm.get("description"); }
}




