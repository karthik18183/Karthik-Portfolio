import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './ui-component/footer/footer.component';
import { BodyComponent } from './ui-component/body/body.component';
import { ContainerComponent } from './ui-component/container/container.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './ui-component/side-nav/side-nav.component';
import { SkillsComponent } from './ui-component/skills/skills.component';
import { ExperienceComponent } from './ui-component/experience/experience.component';
import { ProjectsComponent } from './ui-component/projects/projects.component';


import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FooterComponent,
    BodyComponent,
    ContainerComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
