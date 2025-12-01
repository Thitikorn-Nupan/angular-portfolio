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
      style : {'borderRadius':'85%','objectFit': 'cover','width':'inherit','maxWidth':'640px'},
      src : 'assets/images/me.png'
    };
    // this.description = 'hi👋🏻 , i\'m a fourth year at rmutp university. i\'ve love to learn coding , especially programming languages and frameworks , databases , tools. i\'m going to be backend or fullstack developer. some of public projects at github.com/thitikorn-nupan , if you want to know what i am doing well.'
    this.description = 'Hello , I\'m a fourth year at RMUTP university. 👋🏻  I have experience more than 3 years about software developer 💪💪 and I\'m strong about web application , \n' +
      'Many languages , frameworks , databases , tools for developing I\'ve used them , I love to learn the new thinks in this path and apply it on productions ❗, \n' +
      'that why my github has many projects. this portfolio will show you about my skills , journey , public apps , contact. 👩‍💼👋 i hope this is helpful for choosing me to the company'
  }
}
