import { APP_BOOTSTRAP_LISTENER, Component, DoBootstrap, OnInit, ViewChild } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import * as bootstrap from 'bootstrap';
//import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myModal:any;
  modalDirect: any;
  @ViewChild('modal') input:any;
  constructor(private auth:AuthGuardService) {
    this.auth.checkIfRouted=false
  }

  ngOnInit(): void {
    console.log(this.input);    
  }
  ngAfterViewInit():void{
    
  }
}
  


