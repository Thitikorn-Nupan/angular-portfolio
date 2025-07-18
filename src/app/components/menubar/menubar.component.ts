import { Component } from '@angular/core';

@Component({
  selector: 'pfo-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  protected readonly aLinks : {text: string; href: string} []
  protected isNavButtonClick : boolean = false

  constructor() {
    this.aLinks = [
      {text:'TTKNP Software Developer',href:'#top'},
      {text:'What am i good at ?',href:'#skills'},
      {text:'About graduation',href:'#about'},
      {text:'Public Applications',href:'#apps'},
      {text:'Contact',href:'#contact'},
    ]
  }

  protected onNavButtonClick() {
    this.isNavButtonClick = !this.isNavButtonClick;
  }
}
