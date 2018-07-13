import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Objectives } from './Objectives.model';
import { ObjectiveService } from './Objectives.service';
import { GoalService } from '../Goals.service';
import { Goals} from '../Goals.model';

@Component({
    selector: 'addObjectives',
    templateUrl: './AddObjectives.component.html',
    providers: [ObjectiveService, GoalService]
})

export class AddObjectivesComponent implements OnInit {
    addObjectiveForm: FormGroup;
    errorMessage: any;
    goalList: Goals[];

    constructor(private _goalService: GoalService, private _objectiveService: ObjectiveService, private _router: Router, private _fb: FormBuilder) {
        
        this.addObjectiveForm = this._fb.group({
            objectiveId: 0,
            goalId: ['', [Validators.required]],
            objectiveNumber: ['', [Validators.required]],
            SMARTspecific: ['', [Validators.required]],
            SMARTmeasurable: ['', [Validators.required]],
            SMARTacheivable: ['', [Validators.required]],
            SMARTrealistic: ['', [Validators.required]],
            SMARTtimed: ['', [Validators.required]],
            SMARTobjective: ['', [Validators.required]],
            RelatedProjects: ['', [Validators.required]],
            ResponsiblePerson: ['', [Validators.required]]
            
            
        });
    }

    ngOnInit() {
        this._goalService.getGoals().subscribe(
            data => this.goalList = data);
    }
    save() {
        this._objectiveService.addObjectives(this.addObjectiveForm.value).subscribe(
            (data) => {
                alert("Record added successfully!!");
                this._router.navigate(['/viewGoals']);
            }, error => this.errorMessage = error)
    }

    cancel() {
         this._router.navigate(['/viewGoals']);

    }

    get goalId() { return this.addObjectiveForm.get("goalId"); }
    get objectiveNumber() { return this.addObjectiveForm.get("objectiveNumber"); }
    get SMARTspecific() { return this.addObjectiveForm.get("SMARTspecific"); }
    get SMARTmeasurable() { return this.addObjectiveForm.get("SMARTmeasurable"); }
    get SMARTacheivable() { return this.addObjectiveForm.get("SMARTacheivable"); }
    get SMARTrealistic() { return this.addObjectiveForm.get("SMARTrealistic"); }
    get SMARTtimed() { return this.addObjectiveForm.get("SMARTtimed"); }
    get SMARTobjective() { return this.addObjectiveForm.get("SMARTobjective"); }
    get RelatedProjects() { return this.addObjectiveForm.get("RelatedProjects"); }
    get ResponsiblePerson() { return this.addObjectiveForm.get("ResponsiblePerson"); }

}