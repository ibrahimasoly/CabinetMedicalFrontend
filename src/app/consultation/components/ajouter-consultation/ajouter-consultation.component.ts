import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Patient } from 'src/app/core/Models/patient';
import { RendezVous } from 'src/app/core/Models/rendez-vous';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-ajouter-consultation',
  templateUrl: './ajouter-consultation.component.html',
  styleUrls: ['./ajouter-consultation.component.scss']
})
export class AjouterConsultationComponent implements OnInit {
  listes!:Patient[]
  patient!:Patient
  rdv!:RendezVous
  n!:number
  p!:number
  constructor(public service_consultation: ConsulationServiceService,
    private service_Patient: PatientServiceService, private toste: ToastrService,
    private service_DRV: RendezVousServiceService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
      this.afficherPatientRdv()
    this.ajouterConsultation()
  }

  afficherPatientRdv(){
    this.service_DRV.findPatientWithRDV().subscribe(r=>{
      this.listes=r
      })
      
  }


  afficherPatientBy(id:number, id2:number){
    this.service_DRV.findById(id).subscribe(r=>{
     this.rdv=r
     this.p=this.rdv.num_RDV;
     console.log(this.p)
     this.toste.show("Choisi avec succès").onHidden
    })
    this.service_Patient.getPatientById(id2).subscribe(r=>{
      this.service_consultation.n=r.num_patient
      console.log(this.service_consultation.n)
    })
 
  }



  ajouterConsultation(){
      this.service_consultation.patientConsultationform=this.formBuilder.group({
        motif: [null, [Validators.required]],
        antecedent:[null, [Validators.required]] ,
        rapport:[null, [Validators.required]]
  })
  }

  ajouter(){
    this.service_consultation.save(this.service_consultation.n,this.p, this.service_consultation.patientConsultationform.value).subscribe(r=>{
      this.toste.success("Ajouter avec succès")
      console.log(this.service_consultation.n)
    })
  }

}
