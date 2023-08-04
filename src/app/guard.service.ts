import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; 
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private userDataService: UserDataService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean  {
    if (this.userDataService.getUser() !== null) {
      return true;
    } else {
      alert("You must log in");
      this.router.navigate(['']);
      return false;
    }
  }
}
