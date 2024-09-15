import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/core/Models/patient';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.scss']
})
export class AjouterRDVComponent implements OnInit {
  liste!:Patient

  constructor(private formbuilder: FormBuilder, public service_patient: PatientServiceService
    , public serbice_rdv: RendezVousServiceService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.form()
    this.afficher_Patient()
    console.log(this.serbice_rdv.rdv_form.value.num_RDV)
  }

  form(){
    this.serbice_rdv.rdv_form=this.formbuilder.group({
      date_RDV:[null, [Validators.required]],
      heure:['12:54:19', [Validators.required]],
      description:[null, [Validators.required]]
    }
    )
  }

  ajouter(){
    this.serbice_rdv.ajouter_rdv(this.service_patient.num, this.serbice_rdv.rdv_form.value).subscribe(r=>{
      console.log(r)
      this.toast.success("Ajouter avec succès")
    });
  }
  afficher_Patient(){
    this.service_patient.getPatientById(this.service_patient.num).subscribe(r=>{
     console.log(this.liste=r);
    })
  }

}
