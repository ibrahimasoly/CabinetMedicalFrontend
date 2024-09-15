import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Consulation } from '../Models/consulation';
import { Patient } from '../Models/patient';
import { PatientServiceService } from './patient-service.service';
import { RendezVousServiceService } from './rendez-vous-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsulationServiceService {
  public patientConsultationform!:FormGroup;
  public num!:number
  public n!:number
  A:number=0
  private baseUrl='http://localhost:3000/Consultation';

  constructor(private http:HttpClient, private service_patient: PatientServiceService,
    private service_DRV: RendezVousServiceService ) { }

  findPatientByConsultation():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/listePatients`)
  } 

  findConsultationById(id: number):Observable<Consulation>{
    return this.http.get<Consulation>(`${this.baseUrl}/${id}`)
  }

  deleted(id:number):Observable<Patient>{
    return this.service_patient.deleted(id)
  }

  save(id1: number, id: number, consultation: Consulation):Observable<Consulation>{
    return this.http.post<Consulation>(`${this.baseUrl}/${id1}/${id}`, consultation)
  }


}
