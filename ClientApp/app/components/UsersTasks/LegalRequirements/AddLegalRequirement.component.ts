import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { City } from './City.model';
import { Country } from './CountryId.model';
import { LegalRequirements } from './LegalRequirements.model';
import { LegalRequirementsService} from './Legalrequirements.service';

@Component({
    selector: 'addLegalRequirements',
    templateUrl: './AddLegalRequirement.component.html',
    styleUrls: ['./AddLegalRequirement.component.css'],
    providers: [LegalRequirementsService]
})

export class AddLegalRequirementComponent implements OnInit {
    legalForm: FormGroup;
    countryList: Country[];
    cityList: City[];
    errorMessage: any;
    constructor(private _legalService: LegalRequirementsService, private _router: Router, private _fb: FormBuilder) {


        this.legalForm = this._fb.group({
            legalRequirementsId: 0,
            countryId: ['', [Validators.required]],
            cityName: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        this._legalService.getCountries().subscribe(
            data => this.countryList = data);
    }
    populateCity(countryId) {
        this._legalService.getCityByCountryId(countryId).subscribe(
            data => this.cityList = data);
    }

    save() {
        console.log(this.legalForm.value);
        this._legalService.saveLegalRequirements(this.legalForm.value).subscribe(
            (data) => {
                alert("Successfully Added!!");
                this.legalForm.reset();
            }, error => this.errorMessage = error)
    }

    get countryId() { return this.legalForm.get("countryId"); }
    get cityName() { return this.legalForm.get("cityName"); }

}
