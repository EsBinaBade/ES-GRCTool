import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SwotService } from './Swot.service';
import { SwotAnalysis} from './SwotAnalysis.model';

@Component({
    selector: 'viewSwotAnalysis',
    templateUrl: './ViewSwotAnalysis.component.html',
    providers: [SwotService]
})

export class ViewSwotAnalysisComponent implements OnInit {
    swotlist: SwotAnalysis[];
    swots: SwotAnalysis[];

    errorMessage: any;

    constructor(private _swotservice: SwotService, public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
        this.getSwotList();
        this.getSwotListExternal();
    }
    ngOnInit() {


    }
    getSwotList() {
        this._swotservice.getSwotListInternal().subscribe(
            data => this.swotlist = data)
    }

    getSwotListExternal() {
        this._swotservice.getSwotListExternal().subscribe(
            data => this.swots = data)
    }
}


