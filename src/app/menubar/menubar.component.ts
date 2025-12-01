import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  protected readonly aLinks : {text: string; href: string} []

  constructor() {
    this.aLinks = [
      {text:'THITIKORN SDE.',href:'#top'},
      {text:'Skill/Detail',href:'#skills'},
      {text:'About graduation',href:'#about'},
      {text:'Public Applications',href:'#apps'},
      {text:'Contact',href:'#contact'},
    ]
  }
}
