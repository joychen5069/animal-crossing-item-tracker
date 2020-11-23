import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FishComponent } from './fish/fish.component';
import { BugsComponent } from './bugs/bugs.component';
import { SeaCreaturesComponent } from './sea-creatures/sea-creatures.component';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    BugsComponent,
    SeaCreaturesComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
