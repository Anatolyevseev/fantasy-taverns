import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TavernsService, ITavern } from '../../../Tavern/taverns.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
    userName = '';
    password = '';
    tavern = '';
    showSignup = false;
    checked = false;
    role;
    taverns: ITavern[];

  constructor(private router: Router, private authService: AuthService, private tavernsService: TavernsService) { }

  checkbox(): void {
    this.checked = !this.checked;
    this.tavern = '';
    if (this.checked == false){
        this.role = 2;
    }
    else {
        this.role = 1;
}
}

  ngOnInit(): void {
    console.log({ ...this });
  }
  ngOnDestroy(): void {
    console.log('is destroyed');
  }

  toggleSignup(): void {
    this.showSignup = !this.showSignup;
    this.userName = '';
    this.password = '';
    this.tavern = '';
    this.checked = false;
  }

    login(): void {
        this.authService.login(this.userName, this.password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                console.log('username/password incorrect');
            },
        );
    }
  signup(): void {
    const payload = {
  
      UserName: this.userName,
      Password: this.password,
      TavernId: this.tavern,
      RoleId: this.role,
      
    };
    console.log(payload);
    this.authService.create(payload).subscribe(( user ) => {
      console.log(user); 
      console.log('hi world');
    });
    
  

    
  }
}
