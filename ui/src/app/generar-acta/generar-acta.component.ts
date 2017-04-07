import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenerarActaService } from './generar-acta.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-generar-acta',
  templateUrl: './generar-acta.component.html',
  styleUrls: ['./generar-acta.component.css'],
  providers: [GenerarActaService]
})
export class GenerarActaComponent implements OnInit {

formActa: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenerarActaService,
    private fb: FormBuilder
  ) { this.crearControles(); }

  ngOnInit() {  }

  crearControles() {
    this.formActa = this.fb.group({
      tituloActa: '',
      numeroActa: '',
      fechaActa: '',
      horaInicioActa: '',
      horaTerminoActa: '',
      selectorSede: '',
      asistentesForm: this.fb.array([this.initAsistente()]),
    })
  }
  guardarActa() {
    this.service.addActa(this.formActa.value)
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
    const asistentesArray = <FormArray>this.formActa.controls['asistentesForm'];
    const newAsistente = this.initAsistente();

    asistentesArray.push(newAsistente);
  }
  dellAsistente(idx: number): void {
    const asistentesArray = <FormArray>this.formActa.controls['asistentesForm'];
    asistentesArray.removeAt(idx);
  }

}
