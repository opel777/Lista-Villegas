import { Component } from '@angular/core';



interface Alumno{
  nombre: string;
  edad: number;
  promedio: number;
}


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    {nombre: 'Juan', edad: 18, promedio:7},
    {nombre: 'Maria', edad: 21, promedio:9},
    {nombre: 'Pedro', edad:20, promedio:7},
    {nombre: 'Luis', edad: 19, promedio:8},
    {nombre: 'Sofia', edad: 17, promedio:6},
    {nombre: 'Raul', edad:20, promedio:7},
    {nombre: 'Luisa', edad: 19, promedio:8},
    {nombre: 'Angela', edad: 17, promedio:6}
  ];
// esto define a un alumno destacado marcandolo de un color rojo el cual esta por encima o igual a 8//
  esDestacado(promedio: number):boolean{
    return promedio >= 8;
  }

}
