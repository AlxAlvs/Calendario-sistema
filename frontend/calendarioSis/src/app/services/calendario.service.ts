import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Calendario from '../models/Calendario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private http:HttpClient) { }

  buscarTodos(): Observable<Calendario[]> {
      return this.http
      .get(`${environment.apiBaseUrl}calendarios`)
      .pipe(map(x => <Calendario[]>x))
    
  }

  criar(calendario: any) {
    return this.http.post(`${environment.apiBaseUrl}calendarios`, calendario);
  }

  getCalendario(calendarioId : string) : Observable<Calendario>{
    return this.http.get<Calendario>(`${environment.apiBaseUrl}calendarios`+'/'+calendarioId);
  } 

  updateCalendario(calendario : Calendario) : Observable<Calendario>{
    return this.http.put<Calendario>(`${environment.apiBaseUrl}calendarios`+'/'+calendario.id.toString(), calendario);
  } 

  deleteCalendario(calendarioId : string) : Observable<Calendario> {
    return this.http.delete<Calendario>(`${environment.apiBaseUrl}calendarios`+'/'+ calendarioId.toString());
  }
}
