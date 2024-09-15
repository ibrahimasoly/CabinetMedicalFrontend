import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Routing } from './routing';
import { PatientModule } from './patient/patient.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { ConsultationModule } from './consultation/consultation.module';
import { OrdannanceModule } from './ordannance/ordannance.module';
import { LoginModule } from './login/login.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BilanModule } from './bilan/bilan.module';
import { IbeComponent } from './ibe/ibe.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    IbeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PatientModule,
    RendezVousModule,
    ConsultationModule,
    OrdannanceModule,
    BilanModule,
    LoginModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
