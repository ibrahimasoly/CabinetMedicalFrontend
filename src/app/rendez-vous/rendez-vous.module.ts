import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterRDVComponent } from './components/ajouter-rdv/ajouter-rdv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeRendezVousComponent } from './components/liste-rendez-vous/liste-rendez-vous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AjouterRDVComponent,
    ListeRendezVousComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    AjouterRDVComponent
  ]
})
export class RendezVousModule { }
