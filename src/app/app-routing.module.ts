import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { GolferComponent } from './core/components/golfer/golfer.component';
import { EditGolferComponent } from './core/components/edit-golfer/edit-golfer.component';
import { AddScoreComponent } from './core/components/add-score/add-score.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'golfer/:Id',
    component: GolferComponent,
  },
  {
    path: 'editGolfer/:Id',
    component: EditGolferComponent
  },
  {
    path: 'addScore/:Id',
    component: AddScoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
