import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private faker=require('faker');
  constructor() { }
  
  public GenerarPersona(nombre?){
    let persona = [];
    let options={
      min: 20,
      max: 70,
      precision: 1
    }
    if(nombre){
      persona.push(nombre);
      persona.push(this.faker.random.number(options));
      persona.push(this.faker.name.gender(nombre));
      persona.push(nombre + '.txt');
    }else{
      persona.push(this.faker.name.findName());
      persona.push(this.faker.random.number(options));
      persona.push(this.faker.name.gender(persona[0]));
      persona.push(persona[0] + '.txt');
    }
    return persona;
  }
}
