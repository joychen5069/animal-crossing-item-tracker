import { Component, OnInit } from '@angular/core';
import { FishService } from './fish.service';
import { Fish } from './fish.model';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  fishes: Fish[]

  constructor(private fishService: FishService) { this.fishes = [] }

  ngOnInit(): void {
    this.fishService.list().subscribe((fishes: Fish[]) =>{
      console.log(fishes)
      this.fishes = fishes
    })
  }
   
  

}
