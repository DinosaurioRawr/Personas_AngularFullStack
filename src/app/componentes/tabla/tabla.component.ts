import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../Services/personas.service';
import { GuardarArchivoService } from '../../Services/guardar-archivo.service';

@Component({
  selector: 'app-personas',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public Personas: any[] = [];
  constructor(private personaService: PersonasService, private guardarService: GuardarArchivoService) { 
  }

  ngOnInit(): void {
    let data = this.guardarService.get_storage('Personas');
    if(data != null){
      this.Personas = data;
    }else{
      this.Personas.push(this.personaService.GenerarPersona());
    }
  }

  public agregarPersona(nombre?){
    this.Personas.push(this.personaService.GenerarPersona(nombre));
  }

  public guardar(){
    this.guardarService.Guardar(this.Personas);
    this.guardarService.get_storage('Personas');
  }
  
}
