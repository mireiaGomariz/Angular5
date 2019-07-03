import { Component } from '@angular/core'

@Component ({
  selector: 'videojuegos',
  template: `
    <h2>Componente de {{ nombre }} </h2>
    <h3 *ngIf="mostrar_retro !=true">El mejor juego es {{ mejor_juego }} </h3>
    <h3 [style.background]="color"
      *ngIf="mostrar_retro">
      El mejor juego retro {{ mejor_juego_retro }}
    </h3>
    <h2>Listado de Videojuegos</h2>
    <ul>
      <li *ngFor = "let game of videojuegos">{{game}}</li>
    </ul>
   `
})

export class VideojuegosComponent {
  public nombre = 'Videojuegos 2018';
  public mejor_juego = 'Rdr2';
  public mejor_juego_retro = 'Super Mario 64';
  public mostrar_retro = true;
  public color = "yellow";
  public videojuegos = [
    'Overwatch',
    'Assasins Creed',
    'Bloodborne',
    'Call of Duty'
  ]
}


// Para mostrar el color con un atributo en corchetes deberemos añadir una propiedad a color o bien podremos usar
// una string añadiendo comillas simple [style.background]= "'red'"
