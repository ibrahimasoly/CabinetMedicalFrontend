import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Login } from 'src/app/core/Models/login';
import { LoginService } from 'src/app/core/Services/login.service';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.scss']
})
export class AuthenComponent implements OnInit {
public formlogin!: FormGroup
errorMessage!:any

  constructor(private formBuilder: FormBuilder, private serviceLogin: LoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.form()
  }
  form(){
    this.formlogin=this.formBuilder.group({
      username:[null],
      password:[null]
    })
  }

  login(){
    let username = this.formlogin.value.username
    let password = this.formlogin.value.password

    this.serviceLogin.login(username, password).subscribe({
      next:(login:Login)=> {
          this.serviceLogin.authenticateUser(login).subscribe({
            next:()=>{
              this.route.navigateByUrl("/acceuil/ibe")
            }
          })
      },
      error:(err)=>{
        this.errorMessage=err
      }
    });
  }

}
