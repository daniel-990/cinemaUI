import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { peliculas } from './models/peliculas';

@Component({
  selector: 'app-ricents-movies',
  templateUrl: './ricents-movies.component.html',
  styleUrls: ['./ricents-movies.component.css']
})
export class RicentsMoviesComponent implements OnInit {

  //se carga el servicio que me esta ejecutando el get movie service
  // constructor(private movieService: MoviesService) {

  // }

  ngOnInit(): void {
    // this.movieService.getRecentMovies().subscribe(data => {
    //   console.log(data);
    // });
  }

    pelicula: peliculas[] = [
      {
        img: "https://i.picsum.photos/id/497/1920/600.jpg?hmac=RYrixL2aPuFnM9kpAX-oMP0rnNx_5gFiQVymMd63E3g",
        descripcion: "plece holder 1",
        nombre: "lorem ipsum 1",
        id: 0
      },
      {
        img: "https://i.picsum.photos/id/448/1920/600.jpg?hmac=Lp7bDKOUQ5YrU-CbnsWjNFWYgTxocs5rn16TkPDLzF0",
        descripcion: "plece holder 2",
        nombre: "lorem ipsum 2",
        id: 1
      },
      {
        img: "https://i.picsum.photos/id/549/1920/600.jpg?hmac=Zpvb72qXpJOeE2uqgvN9a7hs7PTSGqHtcjpmfozWCec",
        descripcion: "plece holder 3",
        nombre: "lorem ipsum 3",
        id: 2
      },
      {
        img: "https://i.picsum.photos/id/38/1920/600.jpg?hmac=0gORSmHi8T9DLAP0RHcrSF4zO1efAvZunAK1jqsBKZo",
        descripcion: "plece holder 3",
        nombre: "lorem ipsum 3",
        id: 3
      }
    ]

}
