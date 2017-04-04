import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddReunionComponent } from './add-reunion/add-reunion.component';
import { ListadoDocumentosComponent } from './listado-documentos/listado-documentos.component';
import { ProfileComponent } from './profile/profile.component';
import { GenerarActaComponent } from './generar-acta/generar-acta.component';
import { GenerarMinutaComponent } from './generar-minuta/generar-minuta.component';
import { GenerarInformeComponent } from './generar-informe/generar-informe.component';
import { CompletarDocumentoComponent } from './completar-documento/completar-documento.component';
import { ViewPDFComponent } from './view-pdf/view-pdf.component';
import { PanelAdministratorComponent } from './panel-administrator/panel-administrator.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'add_reunion', component: AddReunionComponent },
    { path: 'listado_Documentos', component: ListadoDocumentosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'generarActa', component: GenerarActaComponent },
    { path: 'generarMinuta', component: GenerarMinutaComponent },
    { path: 'generarInforme', component: GenerarInformeComponent },
    { path: 'viewPDF', component: ViewPDFComponent },
    { path: 'completar_Documento', component: CompletarDocumentoComponent },
    { path: 'panel_Administrator', component: PanelAdministratorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }