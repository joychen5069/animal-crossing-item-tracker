import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  urlEndpoint = 'http://acnhapi.com/v1/fish/';

  constructor() { }

  ngOnInit(): void {
  }

  

}
