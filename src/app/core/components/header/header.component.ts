import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsulationServiceService } from '../../Services/consulation-service.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service_consulation: ConsulationServiceService, private route:Router,
    public serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

ajouter(){
  this.service_consulation.A=0
  this.route.navigateByUrl("/acceuil/ajouter Consultation")
}

deconnecter(){
  this.serviceLogin.logOut().subscribe({
    next:(data:boolean)=>{
      this.route.navigateByUrl("/login")
    }
  })
}


}
