import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddReunionComponent } from './add-reunion/add-reunion.component';
import { GenerarDocumentosComponent } from './generar-documentos/generar-documentos.component';
import { ListadoDocumentosComponent } from './listado-documentos/listado-documentos.component';
import { ProfileComponent } from './profile/profile.component';
import { GenerarActaComponent } from './generar-acta/generar-acta.component';
import { GenerarMinutaComponent } from './generar-minuta/generar-minuta.component';
import { GenerarInformeComponent } from './generar-informe/generar-informe.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'add_reunion', component: AddReunionComponent },
    { path: 'Generar_Documentos', component: GenerarDocumentosComponent },
    { path: 'listado_Documentos', component: ListadoDocumentosComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'generarActa', component: GenerarActaComponent },
    { path: 'generarMinuta', component: GenerarMinutaComponent },
    { path: 'generarInforme', component: GenerarInformeComponent }
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