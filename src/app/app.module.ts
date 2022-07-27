import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RicentsMoviesComponent } from './features/movies/ricents-movies/ricents-movies.component';
import { CatalogoComponent } from './features/movies/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    RicentsMoviesComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
