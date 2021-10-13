import { NgModule } from '@angular/core';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { ClassesToTakeComponent } from './classes-to-take/classes-to-take.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: AcademicRecordComponent },
    { path: 'academic-record', component: AcademicRecordComponent },
    { path: 'classes-to-take', component: ClassesToTakeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [AcademicRecordComponent, ClassesToTakeComponent],
    exports: [
        RouterModule
    ]
})
export class StudentModule { }
