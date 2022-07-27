import { Component, OnInit } from '@angular/core';
import { catalogos } from './models/catalogos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  catalogo: catalogos[] = [
    {id: 0,nombre: "The Boys", estreno: "21-jul-2022",genero: "accion", exclusividad: "para mayores de 18 años", duracion: 2, url: "https://i.picsum.photos/id/541/400/400.jpg?hmac=t7-QqvFJEPeBgOU1Ej6KxR5r4TEPpBuJG8ueyZPI_LE"},
    {id: 0,nombre: "True Detective", estreno: "19-jul-2022",genero: "mitica", exclusividad: "para mayores de 18 años", duracion: 3, url: "https://i.picsum.photos/id/154/400/400.jpg?hmac=adCFz83Okci0HjLdbliSy_FVJP-8zR5iyoSof2ptVs4"},
    {id: 0,nombre: "Mr Robot", estreno: "15-jul-2022",genero: "hackers", exclusividad: "para mayores de 18 años", duracion: 1, url: "https://i.picsum.photos/id/72/400/400.jpg?hmac=Plu7Ga8ryGrQh_ES-RSelfvt5JHDrz9SVxMWiUb2PKI"},
    {id: 0,nombre: "Cowboy bebop", estreno: "5-jul-2022",genero: "anime", exclusividad: "para mayores de 18 años", duracion: 2, url: "https://i.picsum.photos/id/782/400/400.jpg?hmac=eMVfdPKJ9KxY3ccGamAFLp591SxrPNHxysFe9i9DSxw"}
  ]

}
