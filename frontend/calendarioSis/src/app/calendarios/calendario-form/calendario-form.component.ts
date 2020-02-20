import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarioService } from 'src/app/services/calendario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Calendario from 'src/app/models/Calendario';

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {

  formulario:FormGroup;

  modoEdicao: boolean = false;
  calendarioId: number;

  constructor(private formBuilder: FormBuilder,
              private service: CalendarioService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao:[null],
      hora_inicio:[null],
      hora_termino:[null]
    });

    this.activatedRoute.params.subscribe(params=> {
      if(params["id"] == undefined ) {
        return;
      }

      this.modoEdicao = true;
      this.calendarioId = params["id"];

      this.service.getCalendario(this.calendarioId.toString())
      .subscribe( calendario => this.carregarFormulario(calendario),
        error => console.error(error));
    });

  }

  carregarFormulario(calendario : Calendario){
    this.formulario.patchValue({
      descricao : calendario.descricao,
      hora_inicio: calendario.hora_inicio,
      hora_termino: calendario.hora_termino
    });
  }

  criar() {
    let calendario : Calendario = Object.assign({}, this.formulario.value);

    if(this.modoEdicao)   
    { //editar dados
        calendario.id = this.calendarioId;
        this.service.updateCalendario(calendario)
        .subscribe(calendario=> this.OnSaveSucess()),
         error => console.error(error);
    }
    else
    {//incluir dados
         this.service.criar(calendario)
        .subscribe(calendario=> this.OnSaveSucess()),
         error => console.error(error);
    }
  }

  OnSaveSucess(){
    if(this.modoEdicao){
      alert("Alterado com successo.");
    }else{
      alert("Cadastrado com successo.");
    }  
    this.router.navigate(["/calendarios"]);
  }
  
}
