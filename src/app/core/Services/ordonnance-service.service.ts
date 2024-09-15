import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ordonnance } from '../Models/ordonnance';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceServiceService {
  public ordannanceform!:FormGroup;
  public num!:number
  private baseUrl='http://localhost:3000/Ordonnance';
  constructor(private http: HttpClient) { }


  save(id:number, ordonnance: Ordonnance):Observable<Ordonnance>{
    return this.http.post<Ordonnance>(`${this.baseUrl}/Ajout/${id}`, ordonnance);
  }

  findByIdConsultation(id:number):Observable<Ordonnance[]>{
    return this.http.get<Ordonnance[]>(`${this.baseUrl}/${id}`);
  }

  delete(id: number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
