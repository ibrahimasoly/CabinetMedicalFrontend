import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { AjouterBilanComponent } from "./bilan/components/ajouter-bilan/ajouter-bilan.component";
import { AjouterConsultationComponent } from "./consultation/components/ajouter-consultation/ajouter-consultation.component";
import { InfoConsultationComponent } from "./consultation/components/info-consultation/info-consultation.component";
import { ListeConsultationComponent } from "./consultation/components/liste-consultation/liste-consultation.component";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { AuthenComponent } from "./login/components/authen/authen.component";
import { JouterOrdonnanceComponent } from "./ordannance/components/jouter-ordonnance/jouter-ordonnance.component";
import { AjouterPatientComponent } from "./patient/components/ajouter-patient/ajouter-patient.component";
import { InfoPatientComponent } from "./patient/components/info-patient/info-patient.component";
import { ListPatientComponent } from "./patient/components/list-patient/list-patient.component";
import { AjouterRDVComponent } from "./rendez-vous/components/ajouter-rdv/ajouter-rdv.component";
import { ListeRendezVousComponent } from "./rendez-vous/components/liste-rendez-vous/liste-rendez-vous.component";
import { IbeComponent } from "./ibe/ibe.component";




const rout:Routes=[
    {path: "login", component:AuthenComponent},
    {path: "", component:AuthenComponent},
    {path: "acceuil", component:AcceuilComponent,  canActivate:[AuthenticationGuard],children:[
        {path: "ajouter patient", component:AjouterPatientComponent},
    {path: "ajouter patient/:id", component:AjouterPatientComponent},
    {path: "liste patient", component:ListPatientComponent},
    {path: "liste rdv", component:ListeRendezVousComponent},
    {path: "ajouter rdv/:id", component:AjouterRDVComponent},
    {path: "info-patient/:id", component:InfoPatientComponent},
    {path: "liste patientConsulter", component:ListeConsultationComponent},
    {path: "ajouter Consultation", component:AjouterConsultationComponent},
    {path: "info-consultation/:id", component:InfoConsultationComponent},
    {path: "ajouter ordonnance/:id", component:JouterOrdonnanceComponent},
    {path: "ajouter-bilan/:id", component:AjouterBilanComponent},
    {path: "ibe", component:IbeComponent},
    ]},
    
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(rout)
    ],
    exports:[
        RouterModule
    ]
})
export class Routing{

}