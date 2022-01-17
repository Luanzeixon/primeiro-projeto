import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; //typescript pode escolher tipo de variavel
  cursos: string [];
  constructor( private cursosService: CursosService) {

    this.nomePortal = 'http://loiane.training';
    /*for(let i = 0; i < this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
   }


  ngOnInit(): void {
  }

}
