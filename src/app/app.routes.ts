import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouteGuardService } from './service/route-guard/route-guard.service';
import { PatientListComponent } from './pages/patient-list/patient-list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'signin', component: SignInComponent},
    {path: 'patients', component: PatientListComponent, canActivate: [RouteGuardService]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponentComponent}
];
