import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StoresComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoresComponent]
})
export class StoresModule { }
