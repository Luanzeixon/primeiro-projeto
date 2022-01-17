//Service intermedia entre os components e os dados, nao pode deixar isso no component
import { Injectable } from '@angular/core';

@Injectable({ //posso injetar essa classe me outra classe para poder usa-la
  providedIn: 'root' //não precisa mais adicionar os serviços no array de providers do módulo
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
