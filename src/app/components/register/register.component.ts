import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../shared-service/user.service';
import {FormsModule,FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user = new User();
  role = ["Admin", "Team Member"];

  //myform: FormGroup;



  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {



  }

  userRegisterForm(){
    //console.log(this.user);
  //  user=new User();
  if(this.user.password == this.user.confirm_password){
      console.log("Password matched!");
      this._userService.createUser(this.user).subscribe((user)=>{
      this._router.navigate(['/view_tasks']);
      },(error)=>{
        console.log(error);
      });
    }
   else{
      console.log("Password does not match!");
      alert("Password does not match! please try again!!");
    }
  }

}
