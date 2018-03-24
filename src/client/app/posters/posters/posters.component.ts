import { Component, OnInit } from '@angular/core';
import { Poster } from '../poster';
import { PosterDataService } from '../poster-data.service';

@Component({
  selector: 'poster-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {

  posters: Poster[];

  constructor(private posterDataService: PosterDataService) { }

  ngOnInit() {
    this.posterDataService.getPosters()
      .subscribe(posters => this.posters = posters);
  }

  getPosters() {
    return this.posterDataService.getPosters();
  }

}