import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';

import { AppComponent }               from './app.component';
import { AppRoutingModule }           from './app-routing.module';
import { HomeComponent }              from './home/home.component';
import { ListadoDocumentosComponent } from './listado-documentos/listado-documentos.component';
import { ProfileComponent }           from './profile/profile.component';
import { AddReunionComponent }        from './add-reunion/add-reunion.component';
import { GenerarActaComponent }       from './generar-acta/generar-acta.component';
import { GenerarInformeComponent }    from './generar-informe/generar-informe.component';
import { GenerarMinutaComponent }     from './generar-minuta/generar-minuta.component';

import { GenerarInformeService } from './generar-informe/generar-informe.service';
import { GenerarActaService }    from './generar-acta/generar-acta.service';
import { AddReunionService }     from './add-reunion/add-reunion.service';
import { GenerarMinutaService }  from './generar-minuta/generar-minuta.service';
import { ListadoService }        from './listado-documentos/listado-documentos.service';
import { HomeService }           from './home/home.service';
import { ProfileService }        from './profile/profile.service';
import { LoginComponent } from './login/login.component';
import { ViewPDFComponent } from './view-pdf/view-pdf.component';
import { CompletarDocumentoComponent } from './completar-documento/completar-documento.component';
import { PanelAdministratorComponent } from './panel-administrator/panel-administrator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoDocumentosComponent,
    ProfileComponent,
    AddReunionComponent,
    GenerarActaComponent,
    GenerarInformeComponent,
    GenerarMinutaComponent,
    LoginComponent,
    ViewPDFComponent,
    CompletarDocumentoComponent,
    PanelAdministratorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
