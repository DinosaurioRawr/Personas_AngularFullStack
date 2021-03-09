import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class GuardarArchivoService {
  
  constructor(private localStorage: LocalStorageService) { }

  public Guardar(Personas) {
    this.localStorage.store('Personas', Personas);
  }
  public get_storage(valor:string){
    return this.localStorage.retrieve(valor);
  }
}
