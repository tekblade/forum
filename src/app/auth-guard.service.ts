import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  checkIfRouted:boolean;
  constructor(public router: Router) {
    this.checkIfRouted=false;
     }
  canActivate(): boolean {
    this.checkIfRouted=true;
    this.router.navigate(['/redirect']);
    return false;
  }
  
}
