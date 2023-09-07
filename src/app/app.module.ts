import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';

import { TableModule } from 'primeng/table';
import { GolferTableComponent } from './core/components/golfer-table/golfer-table.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { GolferComponent } from './core/components/golfer/golfer.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditGolferComponent } from './core/components/edit-golfer/edit-golfer.component';
import { AddScoreComponent } from './core/components/add-score/add-score.component';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { CreateGolferComponent } from './core/components/create-golfer/create-golfer.component';
import { CreateGolfCourseComponent } from './core/components/create-golf-course/create-golf-course.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GolferTableComponent,
    NavigationBarComponent,
    GolferComponent,
    EditGolferComponent,
    AddScoreComponent,
    CreateGolferComponent,
    CreateGolfCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    ConfirmDialogModule,
    DividerModule,
    BadgeModule,
    MenuModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
