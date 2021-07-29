import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { userService } from './user.service.';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef
  @ViewChild('userNameInput',{static:false}) emailInputRef:ElementRef
  @ViewChild('userNameInput',{static:false}) passwordInputRef:ElementRef
  constructor(private router:Router,
              private user:userService){}
  ngOnInit(){

  }

  onRegister(){
    const user=new User(this.nameInputRef.nativeElement.value,
      this.emailInputRef.nativeElement.value,
      this.passwordInputRef.nativeElement.value);
    this.user.addUser(user);
    this.router.navigate(['/login']);
  }
 
}
