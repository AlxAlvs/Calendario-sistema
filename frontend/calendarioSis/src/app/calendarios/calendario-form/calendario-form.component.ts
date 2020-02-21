import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  calendarios:Calendario [] = [];

  constructor(private formBuilder: FormBuilder,
              private service: CalendarioService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao:[null, Validators.required],
      hora_inicio:[null, Validators.required],
      hora_termino:[null, Validators.required]
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

    if (this.formulario.invalid) {
      alert("existem campos inválidos");
      return;
    }

    this.service
      .buscarTodos()
      .subscribe(calendarios=>{
        this.calendarios = calendarios;

        if(this.calendarios.some(x => x.descricao == calendario.descricao && 
                                 x.hora_inicio == calendario.hora_inicio &&
                                 x.hora_termino == calendario.hora_termino &&
                                 x.id != this.calendarioId))
        {
          alert("já existe um calendário com esta descrição, hora de início e hora de término");
          return;
        }

        if(this.modoEdicao)   
        {//editar dados
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
    })   
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
