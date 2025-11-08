import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  protected details : {
    id : string,
    header : string,
    totalStart : number[],
    skills : string,
    experiences : string,
    href : string ,
    label : string ,
    imagesDemo? : string[] ,
  } []

  constructor() {
    this.details = [
      {
        id : 'portfolioModal1',
        header :'Spring & Spring boot',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Spring Core (Configures , CDI & SID ,AOP , MVC , Beans Annotations)" , <br/>
                    "Spring Security" , <br/>
                    "Microservice" , <br/>
                    "Spring Cloud (Eureka , Gitbackend servers)" , <br/>
                    "Spring Data (JPA , JDBC , MongoDB)" , <br/>
                    "Spring MVC (JSP Servlet)" , <br/>
                    "Testing (JUnit , Mockito)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to Many , ...)" , <br/>
                    "Build rest api for crud and work with spring security & jwt" , <br/>
                    "Build rest api for crud and work with spring clouds (Eureka server, Gitbackend)" , <br/>
                    "Build wep applications work with rest api" , <br/>
                    "Build rest api for crud and work with mobile application (Android app)"<br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal2',
        header :'Android studio',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Fundamentals (kotlin/Java OOP , Tools/IDEs , Gradle)" , <br/>
                    "App Components (Activity/Activity Lifecycle , Intent , Services , ... )" , <br/>
                    "Layout (Linear , Relative , Constraint , Frame , ... )" , <br/>
                    "Elements (TextView , Fragments , Dialogs , Toast , Drawer , ... )" , <br/>
                    "Architecture and Design (MVC)" , <br/>
                    "Network (Volley)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many mobile apps for learning about components" , <br/>
                    "Build many mobile apps work with rest api" , <br/>
                    "Build mobile apps work with rest api for crud mysql" , <br/>
                    "Build mobile app work for crud sqlite" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=android',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal3',
        header :'Node (Js & Ts)',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Node.js Core" , <br/>
                    "Modules (Common JS , ES)" , <br/>
                    "Global Install & Local Install" , <br/>
                    "NPM" , <br/>
                    "Using Logging (Winston)" , <br/>
                    "Asynchronous (Promise , Async & Await)" , <br/>
                    "Working with files (__dirname,__filename)" , <br/>
                    "Working with APIs (http & express module )" , <br/>
                    "Working with Database (Sequelize , Mongoose)" , <br/>
                    "Environment variables" , <br/>
                    "Template Engines (ejs)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to Many , ...)" , <br/>
                    "Build rest api for crud and work with security & jwt" , <br/>
                    "Build wep applications work with rest api" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=node',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal4',
        header :'Angular',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Typescript Basics (Structural Typing , Type Inference , ...)" , <br/>
                    "Angular CLI (Angular Basics , ng commands , ...)" , <br/>
                    "Forms (ReactiveFormsModule , Template-Driven Forms , Dynamic Forms , ...)" , <br/>
                    "Template (Data & Property & Attribute & Two-way Binding , Input output , ...)" , <br/>
                    "Built-in directives (Structural Directives , ...)" , <br/>
                    "Routing (Router links , Route Guards)" ,<br/>
                    "Unit Testing" ,<br/>
                    "RxJS Basics (Observer Pattern , Observable lifecycle , ...)" ,<br/>
                    "Security (HTTP Vulnerabilities , ...)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many web applications & rest apis for crud database" , <br/>
                    "Build many web applications & apply with many frameworks (Spring Boot , Node.js , Docker)" , <br/>
                    "Build web applications & apply with private rest api (Spring  security & JWT)" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=angular',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal5',
        header :'React (Js & Ts)',
        totalStart : this.getArrayNumber(3),
        skills : `  [<br/>
                    "Typescript Basics (Structural Typing , Type Inference , ...)" , <br/>
                    "React CLI" , <br/>
                    "Hooks (useState , useEffect , ...)" , <br/>
                    "Built-in directives (Structural Directives , ...)" , <br/>
                    "Routing" ,<br/>
                    "Forms" ,<br/>
                    "API Calls" ,<br/>
                    "Security (HTTP Vulnerabilities , ...)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many web applications & rest apis for crud database" , <br/>
                    "Build many web applications & apply with many frameworks (Spring Boot , Node.js , Docker)" , <br/>
                    "Build web applications & apply with private rest api (Spring  security & JWT)" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=react',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal6',
        header :'TypeScript',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Typescript Types (Primitive & Object & Other Types)" , <br/>
                    "Combining Types (Type Union)" , <br/>
                    "Data Structures (Map , Set , Array , ...) , <br/>
                    "Loops and Iterations" , <br/>
                    "Functions (Overloading , Typing)" , <br/>
                    "Asynchronous Typescript (Promise , Callback)" <br/>
                    "Interfaces" , <br/>
                    "Classes" , <br/>
                    "Generics" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to  Many , ...)" , <br/>
                    "Build wep applications work with rest api" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=typescript',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal7',
        header :'JavaScript',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Javascript Variables (Naming Rules , Scopes)" , <br/>
                    "Data types" , <br/>
                    "Data Structures (Map , Set , Array , ...) , <br/>
                    "Loops and Iterations" , <br/>
                    "Control Flow (Exception Handling , Conditional Statements , ...) , <br/>
                    "Functions" , <br/>
                    "Classes" , <br/>
                    "Modules (ES , CommonJS)" , <br/>
                    "Asynchronous JavaScript (Promise , Callback)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to  Many , ...)" , <br/>
                    "Build wep applications work with rest api" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=javascript',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal8',
        header :'Java',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Java Fundamentals (Data Structures , OOP (Classes) , Packages , ...)" , <br/>
                    "Exception Handling" , <br/>
                    "Generics , <br/>
                    "Build Tools (Maven , Gradle)" , <br/>
                    "ORM (JPA , JDBC) , <br/>
                    "Web Frameworks (Spring , Spring Boot)" , <br/>
                    "Logging Frameworks (Log4J , LogBack)" , <br/>
                     "Testing (JUnit)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to Many , ...)" , <br/>
                    "Build rest api for mobile applications , <br/>
                    "Build wep applications work with rest api" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=java',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal9',
        header :'Kotlin',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Fundamentals (Data Structures , OOP (Classes) , Packages , ...)" , <br/>
                    "Exception Handling" , <br/>
                    "Build Tools (Maven , Gradle)" , <br/>
                    "ORM (JPA , JDBC) , <br/>
                    "Web Frameworks (Spring Boot , Android)" , <br/>
                    "Logging Frameworks (Log4J , LogBack)" , <br/>
                    "Testing (JUnit)" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build rest api for crud many database" , <br/>
                    "Build rest api for crud many relations table of database (One to Many , ...)" , <br/>
                    "Build rest api for mobile applications , <br/>
                    "Build wep applications work with rest api" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=kotlin',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal10',
        header :'SQL Server',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Basic SQL Syntax (Keywords , Data types , Operators)" , <br/>
                    "Data Manipulation Language (Insert , Select , ...)" , <br/>
                    "Aggregate Queries (COUNT(...) , SUM(...) , ...)" , <br/>
                    "Data Constraints (UNIQUE Constraint , PRIMARY KEY Constraint , ...)" , <br/>
                    "SQL JOIN Queries" , <br/>
                    "Subquery" , <br/>
                    "Views" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many sql relations (One to One , One to Many , ...)" , <br/>
                    "Build many sql statement for fix some business problems" , <br/>
                    "Build many sql work with many programing languages" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=mysql',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal11',
        header :'MySQL',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Basic SQL Syntax (Keywords , Data types , Operators)" , <br/>
                    "Data Manipulation Language (Insert , Select , ...)" , <br/>
                    "Aggregate Queries (COUNT(...) , SUM(...) , ...)" , <br/>
                    "Data Constraints (UNIQUE Constraint , PRIMARY KEY Constraint , ...)" , <br/>
                    "SQL JOIN Queries" , <br/>
                    "Subquery" , <br/>
                    "Views" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many sql relations (One to One , One to Many , ...)" , <br/>
                    "Build many sql statement for fix some business problems" , <br/>
                    "Build many sql work with many programing languages" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=mysql',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal12',
        header :'PostgreSQL',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Basic SQL Syntax (Keywords , Data types , Operators)" , <br/>
                    "Data Manipulation Language (Insert , Select , ...)" , <br/>
                    "Aggregate Queries (COUNT(...) , SUM(...) , ...)" , <br/>
                    "Data Constraints (UNIQUE Constraint , PRIMARY KEY Constraint , ...)" , <br/>
                    "SQL JOIN Queries" , <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Build many sql relations (One to One , One to Many , ...)" , <br/>
                    "Build many sql work with many programing languages" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=mysql',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal13',
        header :'Git',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "GitHub CLI" , <br/>
                    "Repositories (Cloning , Pushing , Pulling , ...)" , <br/>
                    "Branching Basics" , <br/>
                    "Merge Strategies (Fast Forward (FF) , Non-Fast Forward , Cherry Picking , ...)" , <br/>
                    "Working in a Team" , <br/>
                     ]
        `,
        experiences : `
                    [<br/>
                    "Apply to many frameworks (Spring boot , Node.js , Angular , ...)" , <br/>
                    "Remote application to Github server" , <br/>
                    "Manage application on Github server" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal14',
        header :'Docker',
        totalStart : this.getArrayNumber(3),
        skills : `  [<br/>
                    "Docker Desktop (Window)" , <br/>
                    "Structure of a Dockerfile" , <br/>
                    "Docker Compose (Files)" , <br/>
                    "Containers concept" , <br/>
                    "Shell Commands (Docker CLI) , <br/>
                    "Volume Mounts" , <br/>
                     "Using Third Party Images (Databases , Frameworks)" <br/>
                     ]
        `,
        experiences : `
                    [<br/>
                    "Build many web applications & rest apis for crud database on  containers" , <br/>
                    "Build many web applications & apply with many frameworks on containers (Spring Boot , Node.js , ...)" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories&q=docker',
        label : '"https://github.com/thitikorn-nupan"',
      }
      ,
      {
        id : 'portfolioModal15',
        header :'Linux (Ubuntu)',
        totalStart : this.getArrayNumber(4),
        skills : `  [<br/>
                    "Command Line Basics" , <br/>
                    "File System Hierarchy" , <br/>
                    "Shell Scripting" <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    "Apply with Docker" , <br/>
                    "Deploy Applications" , <br/>
                    "Setup Apache for static website" , <br/>
                    "Manage Port Applications" <br/>
                    ]
        `,
        href:'https://github.com/Thitikorn-Nupan?tab=repositories',
        label : '"https://github.com/thitikorn-nupan"',
      },
      {
        id : 'portfolioModal16',
        header :'Perfumes Shop',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Application has security" , <br/>
                    "Time user login has scope" , <br/>
                    "User has rule" , <br/>
                    "Each rule has scope for working" , <br/>
                    "Admin & User & Whoever can buy many perfumes" , <br/>
                    "If user has rule. user can check all history purchases" , <br/>
                    "Admin can manage product as insert , update , delete" , <br/>
                    "Application calculate all sellout history" , <br/>
                    "Each bill has status for validate bill" , <br/>
                    "Application can pay by QR-Code & Credit Card" , <br/>
                    "Admin can check all bills & perfumes only sellout"<br/>
                    ]
        `,
        experiences : `
                    [<br/>

                    ]
        `,
        href:'http://www.thitikorn-nupan.com/app/ecommerce/',
        label : '"www.thitikorn-nupan.com/app/ecommerce/"',
        imagesDemo: [
          'assets/images/pfs-e1.png',
          'assets/images/pfs-e2.png',
          'assets/images/pfs-e3.png',
          'assets/images/pfs-e4.png',
          'assets/images/pfs-e5.png',
          'assets/images/pfs-e6.png',
          'assets/images/pfs-e7.png',
          'assets/images/pfs-e8.png',
          'assets/images/pfs-e9.png',
          'assets/images/pfs-e10.png',
          'assets/images/pfs-e11.png',
          'assets/images/pfs-e12.png',
          'assets/images/pfs-e13.png',
          'assets/images/pfs-e14.png',
          'assets/images/pfs-e15.png',
          'assets/images/pfs-e16.png',
          'assets/images/pfs-e17.png',
          'assets/images/pfs-e18.png',
        ]
      },
      {
        id : 'portfolioModal17',
        header :'Reviews Book',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Application has security" , <br/>
                    "Time user login has scope" , <br/>
                    "User has rule" , <br/>
                    "Each rule has scope for working" , <br/>
                    "Admin & User can review many books" , <br/>
                    "If user has rule. user can manage review history as update , delete" , <br/>
                    "Admin can manage all review history as update , delete" , <br/>
                    "Admin can manage book as insert , update , delete" <br/>
                    ]
        `,
        experiences : `
                    [<br/>

                    ]
        `,
        href:'http://www.thitikorn-nupan.com/app/reviews-book/',
        label : '"www.thitikorn-nupan.com/app/reviews-book/"',
        imagesDemo: [
          'assets/images/rw-e1.png',
          'assets/images/rw-e2.png',
          'assets/images/rw-e2.2.png',
          'assets/images/rw-e3.png',
          'assets/images/rw-e4.png',
          'assets/images/rw-e5.png',
          'assets/images/rw-e6.png',
          'assets/images/rw-e7.png',
          'assets/images/rw-e8.png',
          'assets/images/rw-e9.png',
          'assets/images/rw-e10.png',
        ]
      },
      {
        id : 'portfolioModal18',
        header :'Maintenance System',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Application has security" , <br/>
                    "Time user login has scope" , <br/>
                    "User has rule" , <br/>
                    "If user has rule as user , user can check companies and members are active" , <br/>
                    "Admin can manage all maintenance bill (invoice detail each bill) as insert , update , delete", <br/>
                    "Admin can manage all member as insert , update , delete", <br/>
                    "Admin can manage all service company as insert , update , delete" , <br/>
                    "All member can manage password & username on own" , <br/>
                    ]
        `,
        experiences : `
                    [<br/>

                    ]
        `,
        href:'http://www.thitikorn-nupan.com/app/mentenance-system/',
        label : '"www.thitikorn-nupan.com/app/mentenance-system"',
        imagesDemo: [
        'assets/images/mst-e1.png',
        'assets/images/mst-e2.png',
        'assets/images/mst-e3.png',
        'assets/images/mst-e4.png',
        'assets/images/mst-e5.png',
        'assets/images/mst-e6.png',
        'assets/images/mst-e7.png',
        'assets/images/mst-e8.png',
        'assets/images/mst-e9.png',
        'assets/images/mst-e10.png',
        'assets/images/mst-e11.png',
        'assets/images/mst-e12.png',
        'assets/images/mst-e13.png',
      ]
      },
      {
        id : 'portfolioModal19',
        header :'REST API\'s Free',
        totalStart : this.getArrayNumber(5),
        skills : `  [<br/>
                    "Developer can use all the api's for developing own application", <br/>
                    "Provider the common http method as POST,GET,DELETE,PUT for application", <br/>
                    ]
        `,
        experiences : `
                    [<br/>
                    ]
        `,
        href:'assets/pdf/doc-rest-api.pdf',
        label : 'Document'
      }
    ]
  }

  private getArrayNumber(length : number): number[] {
    return Array(length).fill(0) // This will create [0, 0, 0, 0, 0],
  }
}
