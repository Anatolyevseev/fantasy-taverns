import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Component({
    templateUrl: './singup.component.html',

})
export class SignupComponent {
email = '';
password = '';
constructor(private authService: AuthService,private router:Router){

}

signup():void{
 const user = {email: this.email, password: this.password};
 console.log({JSON:stringify(user)});

 this.authService.create(user).subscribe((answer)) => {
 this.router.navigateByUrl(['/login']);
 };
  
}

}