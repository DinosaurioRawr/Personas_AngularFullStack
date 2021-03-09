import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { PersonasService } from './Services/personas.service';
import { GuardarArchivoService } from './Services/guardar-archivo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    PersonasService,
    GuardarArchivoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
