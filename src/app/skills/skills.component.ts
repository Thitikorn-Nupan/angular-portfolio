import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  protected readonly description : string = 'PROFESSIONAL SKILLS';
  protected readonly skills : {
    bsTarget : string,
    src : string
  } []

  constructor() {
    this.skills = [
      { bsTarget : '#portfolioModal1',  src : 'assets/images/spring-boot-ic.png' }, // clear
      { bsTarget : '#portfolioModal2',  src : 'assets/images/android-studio-ic.png' }, // clear
      { bsTarget : '#portfolioModal3',  src : 'assets/images/node-js-ic.png' }, // clear
      // end row
      { bsTarget : '#portfolioModal4',  src : 'assets/images/ng-ic.png' }, // clear
      { bsTarget : '#portfolioModal5',  src : 'assets/images/react-ic.png' }, // gonna clear
      { bsTarget : '#portfolioModal6',  src : 'assets/images/ts-ic.png' }, // clear
      // end row
      { bsTarget : '#portfolioModal7',  src : 'assets/images/js-ic.png' }, // clear
      { bsTarget : '#portfolioModal8',  src : 'assets/images/java-ic.png' }, // clear
      { bsTarget : '#portfolioModal9',  src : 'assets/images/kotlin-ic.png' }, // clear

      // end row
      { bsTarget : '#portfolioModal10',  src : 'assets/images/sql-server-ic.png' },
      { bsTarget : '#portfolioModal11',  src : 'assets/images/mysql-ic.png' }, // clear
      { bsTarget : '#portfolioModal12',  src : 'assets/images/postgresql-ic.png' }, // clear
      // end row
      { bsTarget : '#portfolioModal13',  src : 'assets/images/git-ic.png' }, // clear
      { bsTarget : '#portfolioModal14',  src : 'assets/images/dk-ic.png' }, // clear
      { bsTarget : '#portfolioModal15',  src : 'assets/images/ln-ic.png' }, // clear

    ]
  }
}
