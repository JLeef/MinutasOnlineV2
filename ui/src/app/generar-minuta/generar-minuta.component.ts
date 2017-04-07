import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenerarMinutaService } from './generar-minuta.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-generar-minuta',
  templateUrl: './generar-minuta.component.html',
  styleUrls: ['./generar-minuta.component.css'],
  providers: [GenerarMinutaService]
})
export class GenerarMinutaComponent implements OnInit {

 objEspecificosIndex: number = 1;

  formMinuta: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenerarMinutaService,
    private fb: FormBuilder
  ) { this.crearControles(); }

  ngOnInit() {

  }

  crearControles() {
    this.formMinuta = this.fb.group({
      tituloMinuta: '',
      asuntoMinuta: '',
      fechaMinuta: '',
      horaInicioMinuta: '',
      horaTerminoMinuta: '',
      selectorSede: '',
      asistentesForm: this.fb.array([this.initAsistente()]),
    })
  }
  guardarMinuta() {
    this.service.addMinuta(this.formMinuta.value)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado')
      );
  }
  
  initAsistente() {
    return this.fb.group({ nombreAsistente: "", correoAsistente: "", selectorCargo: "" });
  }

  addAsistente(): void {
    const asistentesArray = <FormArray>this.formMinuta.controls['asistentesForm'];
    const newAsistente = this.initAsistente();

    asistentesArray.push(newAsistente);
  }
  dellAsistente(idx: number): void {
    const asistentesArray = <FormArray>this.formMinuta.controls['asistentesForm'];
    asistentesArray.removeAt(idx);
  }
}
