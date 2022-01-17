import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
    //os componentes que podem  ser mostrados no app principal(mostra html css pela tag no component html)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule //importa o cursos modulo.ts criado para podelo usar-lo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
