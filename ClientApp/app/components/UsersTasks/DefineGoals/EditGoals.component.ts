import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Goals } from './Goals.model';
import { GoalService } from './Goals.service';

@Component({
    selector: 'editGoals',
    templateUrl: './EditGoals.component.html',
    providers: [GoalService]

})
export class EditGoalsComponent {

    goalForm: FormGroup;
    errorMessage: any;
    goalId: number;

    constructor(private _avRoute: ActivatedRoute, private _goalService: GoalService, private _router: Router, private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["goalId"]) {
            this.goalId = this._avRoute.snapshot.params["goalId"];
        }

        this.goalForm = this._fb.group({
            goalId: 0,
            goalName: ['', []]

        })
    }

    ngOnInit() {
        this._goalService.getGoalsById(this.goalId).
            subscribe(resp => this.goalForm.setValue(resp),
            error => this.errorMessage = error
            );
    }

    save() {
        console.log(this.goalForm.value);
        this._goalService.updateGoals(this.goalForm.value).subscribe(
            (data) => {
                alert("Goals updated successfully");
                this._router.navigate(['/viewGoals']);
                this.goalForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewGoals']);
    }


    get goalName() { return this.goalForm.get("goalName"); }
}

