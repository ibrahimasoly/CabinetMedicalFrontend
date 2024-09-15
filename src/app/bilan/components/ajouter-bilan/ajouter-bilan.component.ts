import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bilan } from 'src/app/core/Models/bilan';
import { Patient } from 'src/app/core/Models/patient';
import { BilanService } from 'src/app/core/Services/bilan.service';
import { PatientServiceService } from 'src/app/core/Services/patient-service.service';
import { PdfBilanService } from 'src/app/core/Services/pdf-bilan.service';

@Component({
  selector: 'app-ajouter-bilan',
  templateUrl: './ajouter-bilan.component.html',
  styleUrls: ['./ajouter-bilan.component.scss']
})
export class AjouterBilanComponent implements OnInit {
  bilan!:Bilan[]
  public n:number=0
  patient!: Patient
  m!:number

  constructor(public bilanService: BilanService, private formBuilder: FormBuilder,
    private patientService: PatientServiceService, private route:Router,
    private pdfBilanService: PdfBilanService) { }

  ngOnInit(): void {
    this.form()
    this.patientService.getPatientById(this.patientService.num).subscribe(r=>{
      this.patient=r;
    })
  }

  form(){
    this.bilanService.patientConsultationform=this.formBuilder.group({
      nomBilan:[null, [Validators.required]]
    })
  }

  ajouter(){
    this.bilanService.save(this.m, this.bilanService.patientConsultationform.value).subscribe(r=> {
        this.bilanService.afficher(this.bilanService.num).subscribe(re=>{
          this.bilan=re
        })
      })
  }
  onSubmit(id:number){
    console.log(id)
    this.m=id
    this.route.navigateByUrl(`/acceuil/ajouter-bilan/${id}`)
    this.bilanService.afficher(this.m).subscribe(re=>{
      this.bilan=re
    })
  }
 imprimer(){
  this.pdfBilanService.genererPDF(this.m).subscribe()
 }

}
