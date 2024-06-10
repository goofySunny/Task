import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserDataService } from '../user-data-service/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private userDataService: UserDataService,
    private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.userDataService.isUserLoggedIn()) {
        return true;
      } else {
        this.route.navigate(['signin'])
        return false;
      }

    }
}
