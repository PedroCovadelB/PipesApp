import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

// in18nSelect
  nombre:string = 'Damaris'
  genero:string = 'femenino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'inivitarla'
  }

//in18nPlural
  clientes: string [] = ['Maria',' Pedro',' Juan',' Fernando',' Jorge']

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    if(this.genero == 'femenino'){
      this.genero = 'masculino'
      this.nombre = 'Pedro'
    }
    else{
      this.genero = 'femenino'
      this.nombre = 'Damaris'
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Pedro',
    edad: 35,
    localizacion: 'Saltillo, Coahuila, Mexico'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(2000)

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    },3500)
  })
}
