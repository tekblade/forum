import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkIfRouted:boolean=false;
  constructor(private auth:AuthGuardService,private router:Router) {
    this.checkIfRouted=this.auth.checkIfRouted;
  }

  ngOnInit(): void {
  }

}
