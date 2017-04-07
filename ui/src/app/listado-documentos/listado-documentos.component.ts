import { Component, OnInit } from '@angular/core';
import { ListadoService } from './listado-documentos.service';
import { Listado } from './listado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado-documentos.component.html',
  styleUrls: ['./listado-documentos.component.css'],
  providers: [ListadoService]
})

export class ListadoDocumentosComponent implements OnInit {

  lista: Listado[];

  constructor(
    private servicio: ListadoService
  ) { }

  ngOnInit() {
    this.servicio.getListado()
      .subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
      );
  }
}