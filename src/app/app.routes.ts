import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: SignInComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', component: ErrorComponentComponent}
];
