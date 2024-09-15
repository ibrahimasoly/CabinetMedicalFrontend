import { Time } from "@angular/common";
import { Consulation } from "./consulation";


export class RendezVous {
    num_RDV!: number;
    date_RDV!: Date;
    heure!: Time;
    description!: string;
    consultaion!:Consulation;
}
