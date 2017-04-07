import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddReunionService } from './add-reunion.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css'],
  providers: [AddReunionService]
})
export class AddReunionComponent implements OnInit {

  formReunion: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AddReunionService,
    private fb: FormBuilder
  ) { this.crearControles(); }

  ngOnInit() {
    $("#infoBasic").show(500); $("#Asistentes").hide(500);
  }
  enviarReunion() {
    this.service.addReunion(this.formReunion.value)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado')
      );
  }

  crearControles() {
    this.formReunion = this.fb.group({
      tituloReunion: '',
      numeroReunion: '',
      fechaReunion: '',
      hInicioReunion: '',
      hTerminoReunion: '',
      selectorSede: '',
      descripcionReunion: '',
      asistentesForm: this.fb.array([this.initAsistente()]),
    })
  }

  initAsistente() {
    return this.fb.group({ nombreAsistente: "", correoAsistente: "", selectorCargo: "", rdAsistencia: "", justificacion: "" });
  }

  addAsistente(): void {
    const asistentesArray = <FormArray>this.formReunion.controls['asistentesForm'];
    const newAsistente = this.initAsistente();

    asistentesArray.push(newAsistente);
  }
  dellAsistente(idx: number): void {
    const asistentesArray = <FormArray>this.formReunion.controls['asistentesForm'];
    asistentesArray.removeAt(idx);
  }
  
  infoBasicReunion() {
    $("#infoBasic").show(500); $("#Asistentes").hide(500);
  }
  asistentesReunion() {
    $("#infoBasic").hide(500); $("#Asistentes").show(500);
  }

}

