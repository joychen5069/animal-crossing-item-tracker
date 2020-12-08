import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from './fish.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class FishService {
    private baseUrl = 'http://www.acnhapi.com/v1/fish/'
  constructor(private http: HttpClient) {}

  list(): Observable<Fish[]> {
    const url = `${this.baseUrl}/`;
    
    return this.http
      .get(url)
      .pipe(
        map((data: any[]) =>
          data.map(
            (fish: any) =>
              new Fish(fish.id, fish.name, fish.location)
          )
        ))
  }
}
