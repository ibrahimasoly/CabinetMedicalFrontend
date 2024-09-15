import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DossierMedicale } from '../Models/dossier-medicale';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicaleService {
  public dossierMedicaleform!:FormGroup;
  public num!:number

  private  baseUrl='http://localhost:3000/Dossier_medicale'

  constructor(private http: HttpClient) { }

  save(dossierMedicale: DossierMedicale):Observable<DossierMedicale>{
    return this.http.post<DossierMedicale>(`${this.baseUrl}`, dossierMedicale)
  }

  findAll():Observable<DossierMedicale[]>{
    return this.http.get<DossierMedicale[]>(`${this.baseUrl}`)
  }

  findById(id:number):Observable<DossierMedicale>{
    return this.http.get<DossierMedicale>(`${this.baseUrl}/${id}`)
  }
}
