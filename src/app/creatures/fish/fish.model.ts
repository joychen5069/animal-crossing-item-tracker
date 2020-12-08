import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class Fish {
    constructor(
        public id: number,
        public name: string,
        public location: string
      ) {}
}

@Injectable({
  providedIn: "root",
})
export class FishAdapter implements Adapter<Fish> {
  adapt(fish: any): Fish {
    return new Fish(fish.id, fish.name, fish.location);
  }
}