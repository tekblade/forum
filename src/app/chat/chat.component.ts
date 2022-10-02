import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  textAreaForm:FormGroup=this.fb.group({
    textArea:['']
  });
  posts:{
    text:String,
    color:String
  }[]=[];
  
  
  constructor(private fb:FormBuilder, private auth:AuthGuardService) { 
    
  }


  ngOnInit(): void {
    
  }
  send(): void {
    this.posts.push({text: this.textAreaForm.value.textArea,color: this.getRandomColor()});
    this.textAreaForm.controls['textArea'].setValue('');
  }
  getRandomColor():string {
    let letters='0123456789ABCDEF';
    let color:string = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

}
