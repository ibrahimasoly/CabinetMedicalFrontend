import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeConsultationComponent } from './components/liste-consultation/liste-consultation.component';
import { AjouterConsultationComponent } from './components/ajouter-consultation/ajouter-consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfoConsultationComponent } from './components/info-consultation/info-consultation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListeConsultationComponent,
    AjouterConsultationComponent,
    InfoConsultationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    ListeConsultationComponent
  ]
})
export class ConsultationModule { }
