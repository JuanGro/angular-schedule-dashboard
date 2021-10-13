import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

// Services
import { AuthGuardUserNotLoggedService } from './services/auth/auth-guard-user-not-logged.service';
import { AuthGuardUserLoggedService } from './services/auth/auth-guard-user-logged.service';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        // Avoid that users enter to the system
        canActivate: [AuthGuardUserNotLoggedService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },

            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'career-director', loadChildren: './career-director/career-director.module#CareerDirectorModule' },
            { path: 'department-director', loadChildren: './department-director/department-director.module#DepartmentDirectorModule' },
            { path: 'general-user', loadChildren: './general-user/general-user.module#GeneralUserModule' },
            { path: 'student', loadChildren: './student/student.module#StudentModule' },
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuardUserLoggedService] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuardUserLoggedService] },
    // { path: 'recover', component: RecoverComponent },
    // { path: 'maintenance', component: MaintenanceComponent },

    // Not found
    { path: '**', redirectTo: 'home', canActivate: [AuthGuardUserNotLoggedService] },
    // Not found
    { path: '**', redirectTo: 'login', canActivate: [AuthGuardUserLoggedService] }

];
