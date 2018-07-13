import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Goals } from './Goals.model';
import { GoalService } from './Goals.service';
import { Objectives} from './DefineObjectives/Objectives.model';
import { ObjectiveService } from './DefineObjectives/Objectives.service';

@Component({
    selector: 'viewGoals',
    templateUrl: './ViewGoals.component.html',
    providers: [GoalService, ObjectiveService]
})
export class ViewGoalsComponent {
    goalList: Goals[];
    errorMessage: any;
    objectiveList: Objectives[];

    constructor(private _objectiveService: ObjectiveService, private _goalService: GoalService, public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
        this.getGoals();
        this.getObjectives();
    }
    ngOnInit() {
        

    }
    getGoals() {
        this._goalService.getGoals().subscribe(
            data => this.goalList = data)
    }

    getObjectives() {
        this._objectiveService.getObjectives().subscribe(
            data => this.objectiveList = data)
    }

    delete(goalId) {
        var ans = confirm("Do you want to delete Goal??" + goalId);

        if (ans) {
            this._goalService.deleteGoals(goalId).subscribe((data) => {
                alert("Record deleted Successfully!!");
                window.location.reload();
                //this._router.navigate(['/viewIssues']);
            })
        }
    }
    deleteObjectives(objectiveId) {
        var ans = confirm("Do you want to delete Objective??" + objectiveId);

        if (ans) {
            this._objectiveService.deleteobjectives(objectiveId).subscribe((data) => {
                alert("Record deleted Successfully!!");
                window.location.reload();
                //this._router.navigate(['/viewIssues']);
            })
        }
    }
}


