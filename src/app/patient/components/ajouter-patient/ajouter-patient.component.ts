import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { DossierMedicale } from 'src/app/core/Models/dossier-medicale';
import { Patient } from 'src/app/core/Models/patient';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { DossierMedicaleService } from 'src/app/core/Services/dossier-medicale.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.scss']
})
export class AjouterPatientComponent implements OnInit {
  patient$!:Observable<Patient>
  dossier!:any;

  constructor(private formBuilder: FormBuilder,public service:PatientServiceService, 
    private route:Router, private toast:ToastrService, private serviceDossier: DossierMedicaleService,
    public serviceConsultation: ConsulationServiceService) { }

  ngOnInit(): void {
   
    this.form()
    console.log(this.serviceDossier.num)
   

    //this.patient$ = this.service.patientform.valueChanges.pipe(map(formvalue=>({...formvalue})))
  }
  form(){
    this.service.patientform = this.formBuilder.group({
      num:[null],
      nom:[null, [Validators.required]],
      prenom:[null, [Validators.required]],
      date_naissance:[null],
      sexe:[null],
      telephone:[""]
    })
    this.serviceDossier.dossierMedicaleform=this.formBuilder.group(
     { }
    )

  }
  onSubmit(){
    if(this.service.menu=='A'){
      this.modifier()
    }else{
      this.ajouterPatient()
    }
  }

  ajouterPatient(){
   this.service.save(this.service.patientform.value).subscribe(reponse=>{
    this.toast.success("Ajouter avec succès!")
    this.serviceDossier.save(this.serviceDossier.dossierMedicaleform.value).subscribe(r=>{
    })
   })
   
  }
  modifier():void{
    this.service.modifier(this.service.patientform.value.num, this.service.patientform.value).subscribe(response=>{
      console.log(response)
      this.toast.success("Modifier avec succès!")
    })
  }
   
  

}
