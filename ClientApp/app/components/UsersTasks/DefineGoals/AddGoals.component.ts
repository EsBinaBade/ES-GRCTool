import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { Goals } from './Goals.model';
import { GoalService} from './Goals.service';
@Component({
    selector: 'addGoals',
    templateUrl: './AddGoal.component.html',
    providers: [GoalService]
})

export class AddGoalComponent {
    addGoalForm: FormGroup;
    errorMessage: any;
    constructor(private _goalService: GoalService, private _router: Router, private _fb: FormBuilder) {


        this.addGoalForm = this._fb.group({
            goalId: 0,
            goalName: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }
    save() {
        console.log(this.addGoalForm.value);
        this._goalService.addGoals(this.addGoalForm.value).subscribe(
            (data) => {
                alert("Successfully Added!!");
                this._router.navigate(['/viewGoals']);

                this.addGoalForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewGoals']);
    }
    get goalName() { return this.addGoalForm.get("goalName"); }
}