import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignsComponent } from './designs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DesignsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesignsComponent]
})
export class DesignsModule { }
