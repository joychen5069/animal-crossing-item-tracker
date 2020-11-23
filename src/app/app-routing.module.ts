import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishComponent } from './fish/fish.component';
import { BugsComponent } from './bugs/bugs.component';
import { ArtComponent } from './art/art.component';
import { SeaCreaturesComponent } from './sea-creatures/sea-creatures.component';

const routes: Routes = [
  {path: 'fish', component: FishComponent},
  {path: 'bugs', component: BugsComponent},
  {path: 'art', component: ArtComponent},
  {path: 'sea-creatures', component: SeaCreaturesComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
