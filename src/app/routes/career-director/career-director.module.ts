import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';

import { SelectModule } from 'ng2-select';

// Components
import { StudentListComponent } from './student-list/student-list.component';
import { StudyProgramEditionComponent } from './study-program-edition/study-program-edition.component';
import { StudyProgramListComponent } from './study-program-list/study-program-list.component';

const routes: Routes = [
    { path: '', component: StudentListComponent },
    { path: 'student-list', component: StudentListComponent },
    { path: 'study-program-list', component: StudyProgramListComponent },
    { path: 'study-program-edition/:nameStudyProgram', component: StudyProgramEditionComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        Ng2SmartTableModule,
        SharedModule,
        SelectModule
    ],
    declarations: [StudentListComponent, StudyProgramEditionComponent, StudyProgramListComponent],
    exports: [
        RouterModule
    ]
})
export class CareerDirectorModule { }
