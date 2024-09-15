import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/core/Models/patient';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss']
})
export class ListeRendezVousComponent implements OnInit {
  listes!:Patient[]

  constructor(public service_consultation: ConsulationServiceService,
    private service_Patient: PatientServiceService, private toste: ToastrService,
    private service_DRV: RendezVousServiceService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.afficherPatientRdv()
  }

  afficherPatientRdv(){
    this.service_DRV.findPatientWithRDV().subscribe(r=>{
      this.listes=r  
      })
    }
}
