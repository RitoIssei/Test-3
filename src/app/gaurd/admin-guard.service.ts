import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserDataService } from '../control-data/user-data.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(private userDataService: UserDataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean  {
    if (this.userDataService.getUser()?.type === 'admin') {
      return true;
    } else {
      alert("you are not admin");
      return false;
    }
  }
}
