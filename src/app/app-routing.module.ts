import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { GolferComponent } from './core/components/golfer/golfer.component';
import { EditGolferComponent } from './core/components/edit-golfer/edit-golfer.component';
import { AddScoreComponent } from './core/components/add-score/add-score.component';
import { CreateGolferComponent } from './core/components/create-golfer/create-golfer.component';
import { CreateGolfCourseComponent } from './core/components/create-golf-course/create-golf-course.component';

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
  {
    path: 'createGolfer',
    component: CreateGolferComponent
  },
  {
    path: 'createGolfCourse',
    component: CreateGolfCourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
