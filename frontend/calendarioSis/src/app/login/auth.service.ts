import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private http:HttpClient) { }

  async fazerLogin(usuario:Usuario){

    let usuarios:Usuario [];  
    
    await this.http.get(`${environment.apiBaseUrl}usuarios`)
    .pipe(map(x => <Usuario[]>x))
    .subscribe(usuarios=>{usuarios = usuarios;
      if(usuarios.some(x => x.nome == usuario.nome && x.senha == usuario.senha)){
        this.mostrarMenuEmitter.emit(true);
        this.usuarioAutenticado = true;
        this.router.navigate(['/calendarios']);
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        alert("Usuario e/ou senha incorretos")
      }
    })    
  }

  criar(usuario: any) {
    return this.http.post(`${environment.apiBaseUrl}usuarios`, usuario);
  }
}
