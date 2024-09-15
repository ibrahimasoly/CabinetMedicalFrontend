import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';
import { RendezVous } from '../Models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousServiceService {
  public rdv_form!:FormGroup;
  num!:number;
  private baseUrl='http://localhost:3000/Rendez_vous'

  constructor(private http:HttpClient) { }

  findAll():Observable<RendezVous[]>{
    return this.http.get<RendezVous[]>(`${this.baseUrl}`)
  }

  ajouter_rdv(id: number, rdv:RendezVous):Observable<RendezVous>{
    return this.http.post<RendezVous>(`${this.baseUrl}/${id}`,rdv);
  }

  findPatientWithRDV():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/listePatientAvecRDV`)
  }

  findById(id:number):Observable<RendezVous>{
    return this.http.get<RendezVous>(`${this.baseUrl}/${id}`)
  }

}
