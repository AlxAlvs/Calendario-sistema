import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarioService } from 'src/app/services/calendario.service';

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {

  formulario:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: CalendarioService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao:[null],
      hora_inicio:[null],
      hora_termino:[null]
    });
  }

  criar() {
    console.log(this.formulario.value);
    this.service.criar(this.formulario.value).subscribe(resposta => {
      this.formulario.reset();
    });
  }
  

}
