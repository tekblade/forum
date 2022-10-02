import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private auth:AuthGuardService) {
    this.auth.checkIfRouted=false;
  }

  ngOnInit(): void {
  }

}
