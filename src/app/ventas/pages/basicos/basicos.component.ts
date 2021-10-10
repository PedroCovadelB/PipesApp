import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'pedro'
  nombreUpper: string = 'PEDRO'
  nombreCompleto: string = 'pEdRO cOVaRrubIas'

  fecha: Date = new Date(); // Fecha del dia actual

}
