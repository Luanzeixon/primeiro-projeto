import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent // so podera usar no modulo de cursos pois se quiser usar no modulo principla tem que exportar tambem.
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent //exporta para o modulo principal (app module) pra poder usar no component principal
  ]

  /*providers:[
    CursosService //fornece as coisas dessa classe para ser mostrada
  ]*/

})
export class CursosModule { }
