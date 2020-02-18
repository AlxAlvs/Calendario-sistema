import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  async fazerLogin(usuario:Usuario){
    if(usuario.nome === 'admin' &&
    usuario.senha === 'admin'){
      this.mostrarMenuEmitter.emit(true);
      this.usuarioAutenticado = true;
      this.router.navigate(['/calendarios']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
