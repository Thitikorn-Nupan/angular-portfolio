import { Component } from '@angular/core';

@Component({
  selector: 'pfo-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected image : { style : any , src : string} = {
    style : {'borderRadius':'50%','border':'4px solid #ffff'},
    src : 'assets/images/me.jpg'
  };
  protected description : string = 'Hello guys,  i\'m a fourth year at rmutp university and my majoring is com-sci.'
}
