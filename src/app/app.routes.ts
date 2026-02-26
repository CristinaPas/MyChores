import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FunComponent } from './pages/fun/fun.component';
import { HousekeepingComponent } from './pages/housekeeping/housekeeping.component';

import { BathroomComponent } from './pages/housekeeping/bathroom/bathroom.component';
import { KitchenComponent } from './pages/housekeeping/kitchen/kitchen.component';
import { BedroomComponent } from './pages/housekeeping/bedroom/bedroom.component';
import { LivingroomComponent } from './pages/housekeeping/livingroom/livingroom.component';
import { HallComponent } from './pages/housekeeping/hall/hall.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'tasks', component: TasksComponent },
  { path: 'fun', component: FunComponent },

  { path: 'housekeeping', component: HousekeepingComponent },
  { path: 'housekeeping/bathroom', component: BathroomComponent },
  { path: 'housekeeping/kitchen', component: KitchenComponent },
  { path: 'housekeeping/bedroom', component: BedroomComponent },
  { path: 'housekeeping/living-room', component: LivingroomComponent },
  { path: 'housekeeping/hall', component: HallComponent },

  { path: '**', redirectTo: '' }
];

