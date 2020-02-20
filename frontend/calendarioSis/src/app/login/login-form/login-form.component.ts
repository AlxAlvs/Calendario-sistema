import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formulario:FormGroup;

  constructor(private service: AuthService,
              private router : Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:['', Validators.required],
      senha:['', Validators.required],
    });
  }


  criar() {

    if (this.formulario.invalid) {
      alert("usuario e/ou senha invalidos");
      return;
    }

    let usuario : Usuario = Object.assign({}, this.formulario.value);

    this.service.criar(usuario).subscribe(usuario=> this.OnSaveSucess()),
    error => console.error(error);
  }

  OnSaveSucess(){
    alert("cadastrado com sucesso");
    this.router.navigate(["/"]);
  }
}
