import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulation } from 'src/app/core/Models/consulation';
import { DossierMedicale } from 'src/app/core/Models/dossier-medicale';
import { Ordonnance } from 'src/app/core/Models/ordonnance';
import { Patient } from 'src/app/core/Models/patient';
import { RendezVous } from 'src/app/core/Models/rendez-vous';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { DossierMedicaleService } from 'src/app/core/Services/dossier-medicale.service';
import { LoginService } from 'src/app/core/Services/login.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.scss']
})
export class InfoPatientComponent implements OnInit {
  liste$!:Observable<Patient>
  liste!:Patient
  rdvs!:RendezVous[]
  dossierMedical!:DossierMedicale;
  consultation1!:Consulation
  ordonnance!:Ordonnance[]

  constructor(private service_patient: PatientServiceService, private rdv_service: RendezVousServiceService,
     private route: Router, public serviceDossierMedicale: DossierMedicaleService,
     private serice_consultation: ConsulationServiceService, public serviceLogin:LoginService) { }

  ngOnInit(): void {
    this.afficher_Patient()
  }
  afficher_Patient(){
    this.service_patient.getPatientById(this.service_patient.num).subscribe(r=>{
      this.liste=r
      this.rdvs=this.liste.rendez_vous
    });
    console.log(this.service_patient.num)
  }

  ajouter_rdv(id: number){
    this.route.navigateByUrl(`/acceuil/ajouter rdv/${id}`)
    this.rdv_service.num=id
  }

     
    

  afficherDossierMedicaleById(id: number){
    this.serviceDossierMedicale.findById(this.service_patient.num).subscribe(r=>{
      this.dossierMedical=r
    });
    this.serice_consultation.findConsultationById(id).subscribe(r=>{
      this.consultation1=r
    })
  }
}
