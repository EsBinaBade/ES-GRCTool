import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SignupComponent } from './components/user/sing-up/sign-up.component';
import { RegistrationSuccessComponent } from './components/user/sing-up/RegistrationSuccess.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddOrganizationComponent } from './components/adminsetup/EntitySetup/AddOrganization.component';
import { ProductKeyComponent } from './components/adminsetup/ProductKey.component';
import { InviteAdminComponent } from './components/adminsetup/InviteAdmin/InviteAdmin.component';
import { CheckProductKeyComponent } from './components/adminsetup/CheckProductKey/CheckProductKey.component';
//import { EditOrganizationComponent } from './components/adminsetup/EntitySetup/EditOrganization.component';
import { AuditComponent } from './components/adminsetup/Audit/audit.component';
import { InviteISMSComponent } from './components/adminsetup/InviteISMS/InviteISMS.component';
import { ISMSOrganizationSetup } from './components/ISMSManager/ISMSOrganizationSetup.component';
import { EntityInformationComponent } from './components/ISMSManager/OrganizationSetup/EntityInformation/EntityInformation.component';
import { OrganizationSetupComponent } from './components/ISMSManager/OrganizationSetup/OrganizationSetup.component';
import { OrganizationChartComponent } from './components/ISMSManager/OrganizationSetup/OrganizationChart/OrganizationChart.component';
import { ClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/ClassificationLevel.component';
import { AddClassificationLevelComponent } from './components/ISMSManager/OrganizationSetup/ClassificationLevel/AddClassificationLevel.component';

import { DocumentTemplateComponent} from './components/ISMSManager/OrganizationSetup/DocumentTemplate/DocumentTemplate.component';
//SetupCompleted
import { SetupCompletedComponent } from './components/ISMSManager/OrganizationSetup/SetupComplete/SetUpComplete.component';

//Start Project
import { StartProjectComponent } from './components/ISMSManager/OrganizationSetup/StartProject/StartProject.component';

//RolesAndResponsibilities
import { TabBarComponent} from './components/ISMSManager/ManageRoleAndResponsibilities/TabBar.component';
import { ViewRolesAndResponsibilities } from './components/ISMSManager/ManageRoleAndResponsibilities/DefineRolesAndResponsibilities/ViewRolesAndResponsibilities.component';
import { AddRolesAndResponsibilitiesComponent } from './components/ISMSManager/ManageRoleAndResponsibilities/DefineRolesAndResponsibilities/AddRolesAndResponsibilities.component';
//Committee Charter started
import { ViewCommitteeComponent} from './components/ISMSManager/ManageRoleAndResponsibilities/CommitteeCharter/ViewCommittee.component';
import { AddCommitteeComponent } from './components/ISMSManager/ManageRoleAndResponsibilities/CommitteeCharter/AddCommittee.component';

//Task Assignment Begins
import { TaskAssignmentComponent } from './components/ISMSManager/ManageRoleAndResponsibilities/TaskAssignment/TaskAssignment.component';
import { AssignSwotComponent } from './components/ISMSManager/ManageRoleAndResponsibilities/TaskAssignment/AssignSwot/AddSwot.component';
//import { AddRoleSwotComponent } from './components/ISMSManager/ManageRoleAndResponsibilities/TaskAssignment/AssignSwot/AddRole/addRole.component';
import { EditAssignedRoleComponent} from './components/ISMSManager/ManageRoleAndResponsibilities/TaskAssignment/EditTaskAssignmentDetails/EditAssignedRole/EditAssignedRoles.component';
import { EditTaskDetailsComponent} from './components/ISMSManager/ManageRoleAndResponsibilities/TaskAssignment/EditTaskAssignmentDetails/EditTaskDetails.component';

//Task By Users
//Swot Analysis Task
import { SwotTabComponent } from './components/UsersTasks/SwotAnalysis/SwotTab.component';
import { ViewSwotAnalysisComponent} from './components/UsersTasks/SwotAnalysis/ViewSwotAnalysis.component';
import { AddSwotAnalysisComponent } from './components/UsersTasks/SwotAnalysis/AddSwotAnalysis.component';
import { EditSwotAnalysisComponent } from './components/UsersTasks/SwotAnalysis/EditSwotAnalysis.component';

//Issues
import { ViewIssuesComponent } from './components/UsersTasks/Issues/ViewIssues.component';
import { EditIssuesComponent } from './components/UsersTasks/Issues/EditIssues.component';
import { AddIssuesComponent } from './components/UsersTasks/Issues/AddIssues.component';

//Legal Requirements
import { AddLegalRequirementComponent} from './components/UsersTasks/LegalRequirements/AddLegalRequirement.component';

//Add Scope
import { AddScopeComponent } from './components/UsersTasks/ScopeStatement/AddScope.component';

//AddGoal
import { AddGoalComponent } from './components/UsersTasks/DefineGoals/AddGoals.component';
import { ViewGoalsComponent } from './components/UsersTasks/DefineGoals/ViewGoals.component';
import { EditGoalsComponent } from './components/UsersTasks/DefineGoals/EditGoals.component';

//Objectives
import { AddObjectivesComponent } from './components/UsersTasks/DefineGoals/DefineObjectives/AddObjectives.component';
import { EditObjectivesComponent } from './components/UsersTasks/DefineGoals/DefineObjectives/EditObjectives.component';


import { appRoutes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SignupComponent,
        RegistrationSuccessComponent,
        UserComponent,
        SignInComponent,
        DashboardComponent,
        AddOrganizationComponent,
        ProductKeyComponent,
        InviteAdminComponent,
        CheckProductKeyComponent,
        InviteISMSComponent,
        //EditOrganizationComponent,
        AuditComponent,
        ISMSOrganizationSetup,
        OrganizationSetupComponent,
        EntityInformationComponent,
        OrganizationChartComponent,
        ClassificationLevelComponent,
        AddClassificationLevelComponent,
        DocumentTemplateComponent,
        SetupCompletedComponent,
        StartProjectComponent,

        TabBarComponent,
        ViewRolesAndResponsibilities,
        AddRolesAndResponsibilitiesComponent,

        ViewCommitteeComponent,
        AddCommitteeComponent,

        TaskAssignmentComponent,
        AssignSwotComponent,
        EditAssignedRoleComponent,
        EditTaskDetailsComponent,

        //Users Tasks
        //Swot Analysis
        SwotTabComponent,
        ViewSwotAnalysisComponent,
        AddSwotAnalysisComponent,
        EditSwotAnalysisComponent,

        //Issues
        ViewIssuesComponent,
        EditIssuesComponent,
        AddIssuesComponent,

        AddLegalRequirementComponent,
        AddScopeComponent,

        //AddGoals
        AddGoalComponent,
        ViewGoalsComponent,
        EditGoalsComponent,

        //AddObjectives
        AddObjectivesComponent,
        EditObjectivesComponent,

        HomeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),

    ]
})
export class AppModuleShared {
}
