import { Component} from '@angular/core';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  templateMenu : MenuItem[] = [
    {
      texto: 'Basicos',
      ruta : './template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta : './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta : './template/switches'
    }
  ]

  reactiveMenu : MenuItem[] = [
    {
      texto: 'Basicos',
      ruta : './reative/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta : './reative/dinamicos'
    },
    {
      texto: 'Switches',
      ruta : './reative/switches'
    }
  ]

}
