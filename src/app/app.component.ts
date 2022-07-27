import { Component, OnInit } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { interval, Observable, observable, subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cimenaUI';

  ngOnInit(): void{

    // const obs$ = new Observable((subscriber) =>{
    //   for (let i = 1; i < 100; i += 2) {
    //     subscriber.next(i);
    //   }
    //   subscriber.complete();
    // })
    // obs$.subscribe(console.log);
  }

  // mostrarMensaje = () => {
  //   return new Promise((resolved, rejected)=>{
  //     console.log("dentro de la promesa");
  //     setTimeout(()=>{
  //       resolved("este es un mensaje desde una promesa");
  //     },5000)
  //   });
  // }

}
