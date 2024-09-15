import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Ordonnance } from 'src/app/core/Models/ordonnance';
import { Patient } from 'src/app/core/Models/patient';
import { ConsulationServiceService } from 'src/app/core/Services/consulation-service.service';
import { OrdonnanceServiceService } from 'src/app/core/Services/ordonnance-service.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { PdfOrdannanceService } from 'src/app/core/Services/pdf-ordannance.service';
import { RendezVousServiceService } from 'src/app/core/Services/rendez-vous-service.service';

@Component({
  selector: 'app-jouter-ordonnance',
  templateUrl: './jouter-ordonnance.component.html',
  styleUrls: ['./jouter-ordonnance.component.scss']
})
export class JouterOrdonnanceComponent implements OnInit {
  ordonnance$!:Observable<Ordonnance>
  ordonnance!:Ordonnance[];
  patient$!:Observable<Patient>;
  public idConsultation!:number

  constructor(public service_ordonnance: OrdonnanceServiceService,
    private formbuiler: FormBuilder, private service_consultation: ConsulationServiceService,
    private toast: ToastrService, private service_patient: PatientServiceService,
    private service_DRV: RendezVousServiceService, private route:Router,
    private servicePdfOrdoannance: PdfOrdannanceService) { }

  ngOnInit(): void {
    this.Form()
   this.patient$= this.service_patient.getPatientById(this.service_patient.num);
   console.log(this.service_patient.num)


  }

  Form(){
    this.service_ordonnance.ordannanceform=this.formbuiler.group({
      medicament:[null, [Validators.required]],
      durejourprise:[null, [Validators.required]],
      dose:[null, [Validators.required]]
    })
    this.ordonnance$=this.service_ordonnance.ordannanceform.valueChanges
  }

  ajouter(){
    console.log(this.idConsultation)
    this.service_ordonnance.save(this.idConsultation, this.service_ordonnance.ordannanceform.value).subscribe(r=>{
      this.service_ordonnance.findByIdConsultation(this.idConsultation).subscribe(reponse=>{
        this.ordonnance=reponse;})
    })
    this.toast.success("Ajouter avec succès")
  }

  supprimer(id: number){
    this.service_ordonnance.delete(id).subscribe(r=>{
      this.service_ordonnance.findByIdConsultation(this.idConsultation).subscribe(reponse=>{
        this.ordonnance=reponse;})
    }
    );
  }

  onSubmit(id:number){
    this.route.navigateByUrl(`/acceuil/ajouter ordonnance/${id}`)
    this.idConsultation=id
    console.log(id)
    this.service_ordonnance.findByIdConsultation(id).subscribe(reponse=>{
      this.ordonnance=reponse;})
      this.toast.success("Choisi avec succès")
  }

  imprimer(){
    this.servicePdfOrdoannance.genererPDF(this.idConsultation).subscribe()
  }

}
