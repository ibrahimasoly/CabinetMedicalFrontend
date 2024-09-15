import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Patient } from '../Models/patient';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  public patientform!:FormGroup;
  menu:string='B'
  public num!:number
  private baseUrl='http://localhost:3000/Patients'
 

  constructor(private http:HttpClient) { }

   getAll():Observable<Patient[]>{
   const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `
    });
   return this.http.get<Patient[]>(`${this.baseUrl}`, {headers} )
   }
   getPatientById(id:number):Observable<Patient>{
    return this.http.get<Patient>(`${this.baseUrl}/${id}`)
   }

   save(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.baseUrl}`, patient);
   }

   deleted(id:number):Observable<Patient>{
    return this.http.delete<Patient>(`${this.baseUrl}/${id}`)
   }

   modifier(id:number, patient:Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.baseUrl}/${id}`, patient)
   }

   searchPatient(nom: string):Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/Recherche?nom=${nom}`)
   }
}
