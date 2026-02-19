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
      { href : 'https://www.facebook.com/mr.thitikorn.nupan/' , faIcon : 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000'},
      { href : 'https://www.linkedin.com/in/thitikorn-nupan/' , faIcon : 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000'},
      { href : 'https://github.com/thitikorn-nupan' , faIcon : 'https://img.icons8.com/?size=100&id=63777&format=png&color=000000'},
      { href : 'assets/pdf/resume.pdf' , faIcon : 'https://img.icons8.com/?size=100&id=mcyAsTDJNTI9&format=png&color=000000'},
    ]
  }
}
