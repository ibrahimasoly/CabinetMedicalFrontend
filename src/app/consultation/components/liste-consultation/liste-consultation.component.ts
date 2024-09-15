import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/core/Models/patient';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss']
})
export class ListeConsultationComponent implements OnInit {
  listes!:Patient[];


  constructor(private serice_consultation: ConsulationServiceService,
    private service_DRV: RendezVousServiceService, private route: Router) { }

  ngOnInit(): void {
    this.afficherPatientConsulter()
  }

  afficherPatientConsulter(){
    this.serice_consultation.findPatientByConsultation().subscribe(r=>{
      this.listes=r
      console.log(r)
    })
  }

  supprimer(id : number){
    this.serice_consultation.deleted(id).subscribe(r=>this.afficherPatientConsulter())
  }

  infoPatient(id:number){
    this.serice_consultation.num=id
    this.route.navigateByUrl(`/acceuil/info-consultation/${id}`)
  }


}
