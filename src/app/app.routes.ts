import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouteGuardService } from './service/route-guard/route-guard.service';

export const routes: Routes = [
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signin', component: SignInComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponentComponent}
];
