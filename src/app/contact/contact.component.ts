import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected readonly description : string = 'AROUND THE WEB & RESUME';
  protected readonly aLinks : {
    href : string,
    faIcon:string
  }[]
  constructor() {
    this.aLinks = [
      { href : 'https://www.facebook.com/mr.thitikorn.nupan/' , faIcon : 'fa-facebook-f'},
      { href : 'https://www.linkedin.com/in/thitikorn-nupan/' , faIcon : 'fa-linkedin-in'},
      { href : 'https://github.com/thitikorn-nupan' , faIcon : 'fa-github'},
      { href : 'assets/pdf/resume.pdf' , faIcon : 'fa-file'},
    ]
  }
}
