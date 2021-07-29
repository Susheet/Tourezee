import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { userService } from './register/user.service.';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourezee';

  email:any = null;
  

  constructor(private router:Router, private user: userService, private auth: userService, private toastr: ToastrService){
    auth.getUser().subscribe((user:any) => {
      this.email = user?.email;
    });
  }
  
   
  async handleSignOut(){
    try{
      const res = await this.auth.signOut();
      this.router.navigateByUrl("/");
      this.toastr.info("Login again to continue");
      this.email = null;
      
    }catch(error){
      this.toastr.error("Something is wrong");
    }
  }


  goToRegister(pageName:string){

    this.router.navigate([`${pageName}`])
  }
  goToLogin(pageName:string){
    this.router.navigate([`${pageName}`])
  }
}
