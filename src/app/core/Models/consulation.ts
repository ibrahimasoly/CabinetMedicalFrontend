import { Bilan } from "./bilan";
import { Ordonnance } from "./ordonnance";

export class Consulation {
    num_consul!: number;
    motif!: string;
    antecedent!: string;
    rapport!: string;
    ordonnances!:Ordonnance[]
    bilans!:Bilan[]
}
