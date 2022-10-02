import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private auth:AuthGuardService) {
    this.auth.checkIfRouted=false;
   }

  ngOnInit(): void {
  }

}
