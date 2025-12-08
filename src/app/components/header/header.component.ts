import { Component } from '@angular/core';

@Component({
  selector: 'pfo-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected image : { style : any , src : string} = {
    style : {'borderRadius':'50%','border':'6px solid #ffff','objectFit': 'cover',    'height': '200px', 'width': '200px'},
    src : 'assets/images/me.jpg'
  };
  protected description : string = 'Hi👋🏻 , I\'m a fourth year at RMUTP university. I\'ve love to learn coding , especially programming languages and frameworks , databases , tools. I\'m going to be backend or full-stack developer. some of my public projects at github.com/thitikorn-nupan , If you want to know what i am doing well.'
}
