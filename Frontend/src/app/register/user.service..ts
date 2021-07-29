
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../shared/user.model";
import { UserLogin } from "../shared/userLogin.model";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class userService{
    
    constructor(private http: HttpClient, private auth: AngularFireAuth){}

    signUp(email:string, password: string){
        return this.auth.createUserWithEmailAndPassword(email,password);
      }
  
      signIn(email:string, password: string){
        return this.auth.signInWithEmailAndPassword(email,password);
      }
  
      getUser(){
        return this.auth.authState;
      }
  
      signOut(){
        return this.auth.signOut();
      }
  
  
      private users :User[];
      token: any = null;
  

      //can use below methos to connect with backend services the above methods are implemented using firebase API
      addUser(user:User){
          this.http.post<{message :string}>("http://localhost:8000/api/signup",user).subscribe((responseData)=>{
             console.log(responseData.message);
             this.users.push(user);
          })
      }
  
      loginUser(user:UserLogin){
        this.http.post<{message :JSON}>("http://localhost:8000/api/signin",user).subscribe((responseData)=> {
          console.log(responseData);
          this.token = responseData.message;
        },
        (error:any) => {console.log(error.error)}
        )
      }

}