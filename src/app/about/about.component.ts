import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  protected readonly description : string = 'THE JOURNEY';
  protected graduations : {
    timeline : string,
    major : string,
    nameWork : string,
    shortAddressWork : string,
    description : string
  } [];
  constructor() {
    this.graduations = [
      {
        timeline : '2022 - 2026',
        major : 'computer science',
        nameWork:'Rajamangala University of Technology Phra Nakhon (RMUTP)',
        shortAddressWork : 'Dusit Bangkok, Thailand',
        description : 'almost of the time i keep to practice programming\n' +
          'languages including many frameworks\n' +
          'and i am good for backend (Using java + spring boot\n' +
          'and JS/TS + Node.js) i like to learn a new thing that way my github has a lots of public projects'
      },
      {
        timeline : '2019 - 2022',
        major : 'computer business',
        nameWork:'Pateeppaleepol Technological College',
        shortAddressWork : 'Bang Khun Thian, Thailand',
        description : 'already interest about programming languages and\n' +
          'start practicing basic coding As, Java core , Php core , JS/TS core and apply to build basic\n' +
          'web application (i was not working with frameworks of these)\n'
      }
    ]
  }
}
