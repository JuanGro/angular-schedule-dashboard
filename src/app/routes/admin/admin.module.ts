import { NgModule } from '@angular/core';
import { DepartmentDirectorListComponent } from './department-director-list/department-director-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: DepartmentDirectorListComponent },
    { path: 'department-director-list', component: DepartmentDirectorListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [DepartmentDirectorListComponent],
    exports: [
        RouterModule
    ]
})
export class AdminModule { }
