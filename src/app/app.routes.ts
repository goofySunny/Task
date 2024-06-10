import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';

export const routes: Routes = [
    {path: '', component: SignInComponent},
    {path: '**', component: ErrorComponentComponent}
];
