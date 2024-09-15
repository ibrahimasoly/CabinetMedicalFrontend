import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfOrdannanceService {
  private baseUrl='http://localhost:3000/pdf'

  constructor(private http: HttpClient) { }

  genererPDF(id: number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
