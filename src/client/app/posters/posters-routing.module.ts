import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostersComponent } from './posters/posters.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component:PostersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostersRoutingModule { }
