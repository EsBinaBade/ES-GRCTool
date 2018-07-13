import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Goals } from '../Goals.model';
import { GoalService } from '../Goals.service';
import { Objectives } from './Objectives.model';
import { ObjectiveService} from './Objectives.service';

@Component({
    selector: 'editObjectives',
    templateUrl: './EditObjectives.component.html',
    providers: [GoalService, ObjectiveService]

})
export class EditObjectivesComponent implements OnInit{

    editObjectiveForm: FormGroup;
    errorMessage: any;
    objectiveId: number;
    goalList: Goals[];

    constructor(private _avRoute: ActivatedRoute, private _objectiveService: ObjectiveService, private _goalService: GoalService, private _router: Router, private _fb: FormBuilder) {

        if (this._avRoute.snapshot.params["objectiveId"]) {
            this.objectiveId = this._avRoute.snapshot.params["objectiveId"];
        }

        this.editObjectiveForm = this._fb.group({
            objectiveId: 0,
            objectiveNumber: ['', []],
            smarTspecific: ['', []],
            sMARTmeasurable: ['', []],
            sMARTacheivable: ['', []],
            sMARTrealistic: ['', []],
            sMARTtimed: ['', []],
            sMARTobjective: ['', []],
            relatedProjects: ['', []],
            responsiblePerson: ['', []],
            goalId: ['', []]
        })
    }

    ngOnInit() {
        this._goalService.getGoals().subscribe(
            data => this.goalList = data);

        this._objectiveService.getObjectiveById(this.objectiveId).
            subscribe(resp => this.editObjectiveForm.setValue(resp),
            error => this.errorMessage = error
            );
    }

    save() {
        console.log(this.editObjectiveForm.value);
        this._objectiveService.editObjectives(this.editObjectiveForm.value).subscribe(
            (data) => {
                alert("Record updated successfully");
                this._router.navigate(['/viewGoals']);
                this.editObjectiveForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/viewGoals']);
    }


    get goalId() { return this.editObjectiveForm.get("goalId"); }
    get objectiveNumber() { return this.editObjectiveForm.get("objectiveNumber"); }
    get smarTspecific() { return this.editObjectiveForm.get("smarTspecific"); }
    get sMARTmeasurable() { return this.editObjectiveForm.get("sMARTmeasurable"); }
    get sMARTacheivable() { return this.editObjectiveForm.get("sMARTacheivable"); }
    get sMARTrealistic() { return this.editObjectiveForm.get("sMARTrealistic"); }
    get sMARTtimed() { return this.editObjectiveForm.get("sMARTtimed"); }
    get sMARTobjective() { return this.editObjectiveForm.get("sMARTobjective"); }
    get relatedProjects() { return this.editObjectiveForm.get("relatedProjects"); }
    get responsiblePerson() { return this.editObjectiveForm.get("responsiblePerson"); }

}

