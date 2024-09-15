import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Consulation } from 'src/app/core/Models/consulation';
import { Patient } from 'src/app/core/Models/patient';
import { RendezVous } from 'src/app/core/Models/rendez-vous';
import { BilanService } from 'src/app/core/Services/bilan.service';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-info-consultation',
  templateUrl: './info-consultation.component.html',
  styleUrls: ['./info-consultation.component.scss']
})
export class InfoConsultationComponent implements OnInit {
  patient!:Patient
  rdvinfo!:RendezVous[]
  rendez!:RendezVous
  consultations!:Consulation
  i:number=0

  constructor(public service_consultation: ConsulationServiceService,
    private service_Patient: PatientServiceService, private toste: ToastrService,
    private service_DRV: RendezVousServiceService, private formBuilder: FormBuilder,
    private route: Router, private bilanService: BilanService) { }

  ngOnInit(): void {
    this.trouverPatientById()
  }

  trouverPatientById(){
    this.service_Patient.getPatientById(this.service_consultation.num).subscribe(r=>{
      this.patient=r
      this.service_Patient.num=r.num_patient
      this.rdvinfo=this.patient.rendez_vous
      this.rdvinfo.forEach(re=>{
        this.rendez=re
       this.service_consultation.findConsultationById(re.num_RDV).subscribe(resultat=>{
       this.consultations=resultat
       this.service_consultation.num=this.consultations.num_consul;
       console.log(this.service_consultation.num)
       console.log(this.service_Patient.num)
       console.log(this.consultations)
       })
      })
    })
  }

  onEdite(id:number){
    this.route.navigateByUrl(`/acceuil/ajouter ordonnance/${id}`)
    console.log(id)
  }
  rdv(id: number){
    this.route.navigateByUrl(`/acceuil/ajouter rdv/${id}`)
  }

  onSubmit(id:number){
    this.route.navigateByUrl(`/acceuil/ajouter-bilan/${id}`)
  }
}
