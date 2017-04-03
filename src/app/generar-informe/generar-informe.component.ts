import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenerarInformeService } from './generar-informe.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-generar-informe',
  templateUrl: './generar-informe.component.html',
  styleUrls: ['./generar-informe.component.css'],
  providers: [GenerarInformeService]
})
export class GenerarInformeComponent implements OnInit {

 objGeneralIndex: number = 1;
  objEspecificos = [{ id: 1, text: "" }];
  objEspecificosIndex: number = 1;

  formInforme: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GenerarInformeService,
    private fb: FormBuilder
    ) { this.crearControles(); }

  ngOnInit() {
    $("#infoBasic").show(500); $("#objGeneral").hide(500); $("#objEspec").hide(500);
  }
  showInfoBasic() {
    $("#infoBasic").show(500); $("#objGeneral").hide(500); $("#objEspec").hide(500);
  }
  showObjGral() {
    $("#infoBasic").hide(500); $("#objGeneral").show(500); $("#objEspec").hide(500);
  }
  showObjEspec() {
    $("#infoBasic").hide(500); $("#objGeneral").hide(500); $("#objEspec").show(500);
  }

  crearControles() {
    this.formInforme = this.fb.group({
      tituloInforme: '',
      fechaInforme: '',
      objetivoGeneral: this.fb.array([this.initObjetivo()]),
      objEspec: this.fb.array([this.initObjEspec()])
    })
  }

  guardarInforme() {
    this.service.addInforme(this.formInforme.value)
      .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado')
      );
  }

  initObjetivo() {
    return this.fb.group({ id: this.objGeneralIndex++, text: "" });
  }

  addObjetivo(): void {
    const objetivoArray = <FormArray>this.formInforme.controls['objetivoGeneral'];
    const newObjetivo = this.initObjetivo();

    objetivoArray.push(newObjetivo);
  }
  delObjGral(idx: number): void {
    const objetivoArray = <FormArray>this.formInforme.controls['objetivoGeneral'];
    objetivoArray.removeAt(idx);
  }


  initObjEspec() {
    return this.fb.group({ id: this.objEspecificosIndex++, text: "" });
  }

  addObjectivoEspecifico(): void {
    const objEspecArray = <FormArray>this.formInforme.controls['objEspec'];
    const newobjEspec = this.initObjEspec();

    objEspecArray.push(newobjEspec);
  }

  delObjEspecifico(idx: number): void {
    const objEspecArray = <FormArray>this.formInforme.controls['objEspec'];
    objEspecArray.removeAt(idx);
  }
}