import { Consulation } from "./consulation";
import { RendezVous } from "./rendez-vous";

export class Patient {
    num_patient !:number;
    nom!:string;
    prenom!:string;
    date_naissance!:Date;
    sexe!:CharacterData;
    telephone!:string;
    rendez_vous!:RendezVous[];
    consultation!:Consulation[]
}
