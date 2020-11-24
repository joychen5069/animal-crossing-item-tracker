import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { BugsComponent } from './creatures/bugs/bugs.component';
import { FishComponent } from './creatures/fish/fish.component';
import { SeaCreaturesComponent } from './creatures/sea-creatures/sea-creatures.component';


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
