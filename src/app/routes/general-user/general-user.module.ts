import { NgModule } from '@angular/core';
import { StudyProgramComponent } from './study-program/study-program.component';
import { UpdatePersonalInformationComponent } from './update-personal-information/update-personal-information.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: '', component: StudyProgramComponent },
    { path: 'study-program', component: StudyProgramComponent },
    { path: 'update-personal-information', component: UpdatePersonalInformationComponent },
    { path: 'student-search', component: StudentSearchComponent },
    { path: 'help', component: HelpComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule
    ],
    declarations: [
        StudyProgramComponent,
        UpdatePersonalInformationComponent,
        StudentSearchComponent,
        HelpComponent
        ],
    exports: [
        RouterModule
    ]
})
export class GeneralUserModule { }
