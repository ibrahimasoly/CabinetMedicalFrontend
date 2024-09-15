import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { AjouterPatientComponent } from './components/ajouter-patient/ajouter-patient.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfoPatientComponent } from './components/info-patient/info-patient.component';







@NgModule({
  declarations: [
    ListPatientComponent,
    AjouterPatientComponent,
    InfoPatientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    ListPatientComponent,
    AjouterPatientComponent,
  ]
})
export class PatientModule { }
