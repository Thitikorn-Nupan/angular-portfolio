import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import {SkillsComponent} from "./skills/skills.component";
import {DetailsComponent} from "./details/details.component";
import {AboutComponent} from "./about/about.component";
import {PublicAppsComponent} from "./public-apps/public-apps.component";

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HeaderComponent,
    ContactComponent,
    SkillsComponent,
    DetailsComponent,
    AboutComponent,
    PublicAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
