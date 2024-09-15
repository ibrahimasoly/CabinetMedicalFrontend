import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Bilan } from '../Models/bilan';

@Injectable({
  providedIn: 'root'
})
export class BilanService {
  public patientConsultationform!:FormGroup;
  public num!:number
  private baseUrl='http://localhost:3000/Bilan';

  constructor(private http: HttpClient) { }

  //Afficher le bilan par id de la consultation
  afficher(id:number):Observable<Bilan[]>{
    return this.http.get<Bilan[]>(`${this.baseUrl}/${id}`)
  }

  //Ajouter un bilan
  save(id:number, bilan:Bilan):Observable<Bilan>{
    return this.http.post<Bilan>(`${this.baseUrl}/${id}`, bilan)
  }

}
