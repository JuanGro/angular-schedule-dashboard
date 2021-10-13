import { NgModule } from '@angular/core';
import { CareerDirectorListComponent } from './career-director-list/career-director-list.component';
import { ClassListComponent } from './class-list/class-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ClassListComponent },
    { path: 'class-list', component: ClassListComponent },
    { path: 'career-director-list', component: CareerDirectorListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CareerDirectorListComponent, ClassListComponent],
    exports: [
        RouterModule
    ]
})
export class DepartmentDirectorModule { }
