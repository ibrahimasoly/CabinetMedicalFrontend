import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Patient } from 'src/app/core/Models/patient';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import * as openai from 'openai';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { RendezVous } from 'src/app/core/Models/rendez-vous';
import { DossierMedicaleService } from 'src/app/core/Services/dossier-medicale.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  listpatient$!: Observable<Patient[]>
  rdv!:RendezVous[]
  liste!:Patient[]


  controle: FormControl = new FormControl('');
  constructor( public Patient_service: PatientServiceService,
     private route:Router, private fb: FormBuilder, public serviceDossier: DossierMedicaleService) { }

  ngOnInit(): void {
    this.listPatient()
    this.form()
    
  }

 async listPatient(){
  this.listpatient$ =this.Patient_service.getAll()
   
  }

  supprimer(id: number):void{
    this.Patient_service.deleted(id).pipe(map(value=>this.listPatient(),
    )).subscribe()
   
  }
  save(){
    this.Patient_service.menu='B';
      this.route.navigateByUrl('/acceuil/ajouter patient');
  }

  edite(patient: Patient){
    this.Patient_service.menu='A';
    console.log(this.Patient_service.menu)

     this.Patient_service.patientform=this.fb.group(Object.assign({}, patient));

      this.route.navigateByUrl(`/acceuil/ajouter patient/${patient.num_patient}`);
      this.Patient_service.num=patient.num_patient
  }

  info_patient(id: number){
    this.route.navigateByUrl(`/acceuil/info-patient/${id}`)
    this.Patient_service.num=id
    this.serviceDossier.num=id

  }

  form(){
    this.Patient_service.patientform=this.fb.group({
      nom:this.fb.control(null)
    })
  }
  recherche(){
     this.listpatient$= this.Patient_service.searchPatient(this.Patient_service.patientform.value.nom)
  }
}

