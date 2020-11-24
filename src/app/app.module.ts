import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ArtComponent } from './art/art.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FishComponent } from './creatures/fish/fish.component';
import { BugsComponent } from './creatures/bugs/bugs.component';
import { SeaCreaturesComponent } from './creatures/sea-creatures/sea-creatures.component';


@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    BugsComponent,
    SeaCreaturesComponent,
    ArtComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
