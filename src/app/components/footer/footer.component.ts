import { Component } from '@angular/core';

@Component({
  selector: 'pfo-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  protected readonly description : string = 'Around the Web & Resume';
  protected readonly aLinks : {
    href : string,
    faIcon:string
  }[]
  constructor() {
    this.aLinks = [
      { href : 'https://www.facebook.com/Mr.Thitikorn.Nupan/' , faIcon : 'fa-facebook-f'},
      { href : 'https://www.linkedin.com/in/thitikorn-nupan/' , faIcon : 'fa-linkedin-in'},
      { href : 'https://github.com/Thitikorn-Nupan' , faIcon : 'fa-github'},
      { href : 'assets/pdf/resume.pdf' , faIcon : 'fa-file'},
    ]
  }
}
