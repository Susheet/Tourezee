import { Component, OnInit } from '@angular/core';
import { userService } from '../register/user.service.';
import {ToastrService} from "ngx-toastr";
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:userService, private toastr: ToastrService) {
    auth.getUser().subscribe((user:any) => {
      this.email = user?.email;
    });
   }

  email: any = null;
  ngOnInit(): void {
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

}
