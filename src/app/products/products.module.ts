import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatChipsModule, MatButtonModule, MatTooltipModule,
   MatIconModule, MatDialogModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductdesignerComponent } from './productdesigner/productdesigner.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path: 'productdesigner', component: ProductdesignerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule,
    SharedModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    Ng2FilterPipeModule,
    FlexLayoutModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ],
  declarations: [ProductsComponent, ProductdesignerComponent]
})
export class ProductsModule { }
