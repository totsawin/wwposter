import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"


import { PostersRoutingModule } from './posters-routing.module';
import { PostersComponent } from './posters/posters.component';
import { PosterDataService } from './poster-data.service';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostersRoutingModule
  ],
  declarations: [PostersComponent],
  providers: [PosterDataService]
})
export class PostersModule { }
