import { Component, OnInit } from '@angular/core';
import Calendario from '../models/Calendario';
import { CalendarioService } from '../services/calendario.service';


@Component({
  selector: 'app-calendario-listar',
  templateUrl: './calendario-listar.component.html',
  styleUrls: ['./calendario-listar.component.css']
})
export class CalendarioListarComponent implements OnInit {

  calendarios:Calendario [] = [];

  constructor(private calendarioService:CalendarioService) { }

  ngOnInit() {
    this.carregarCalendarios();
  }

  carregarCalendarios(){
    this.calendarioService
      .buscarTodos()
      .subscribe(calendarios=>{
        this.calendarios = calendarios;
    })
  }
}
