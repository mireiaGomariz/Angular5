import { Component } from '@angular/core'

@Component ({
  selector: 'videojuegos',
  template: `
    <h2>Componente de {{ nombre }} </h2>
   `
})

export class VideojuegosComponent {
  public nombre = 'Videojuegos 2018';
}
