import { Component } from '@angular/core';

@Component({
  selector: 'pfo-public-apps',
  templateUrl: './public-apps.component.html',
  styleUrl: './public-apps.component.css'
})
export class PublicAppsComponent {
  protected readonly description : string = 'Some apps deployed to server (See click  !)';
  protected readonly skills : {
    bsTarget : string,
    src : string
  } []
  constructor() {
    this.skills = [
      { bsTarget : '#portfolioModal16',  src : 'assets/images/perfume-shop-app-ic.png' },
      { bsTarget : '#portfolioModal17',  src : 'assets/images/review-books-app-ic.png' },
      { bsTarget : '#portfolioModal18',  src : 'assets/images/maintenance-app-ic.png' },
      // end row
    ]
  }
}
