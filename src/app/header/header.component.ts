import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected image : { style : any , src : string}
  protected description : string

  constructor() {
    this.image = {
      style : {'borderRadius':'25%','objectFit': 'cover','width':'inherit','maxWidth':'640px'},
      src : 'assets/images/me.png'
    };
    this.description = 'hi👋🏻 , i\'m a fourth year at rmutp university. i\'ve love to learn coding , especially programming languages and frameworks , databases , tools. i\'m going to be backend or fullstack developer. some of public projects at github.com/thitikorn-nupan , if you want to know what i am doing well.'
  }
}
