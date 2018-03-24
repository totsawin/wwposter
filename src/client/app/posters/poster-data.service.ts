import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { CatchError } from 'rxjs/operators';
import { Poster } from './poster'

@Injectable()
export class PosterDataService {

  constructor(private httpClient: HttpClient) { }

  getPosters() {
    return this.httpClient.get<Poster[]>('posters.json');
  }
}

