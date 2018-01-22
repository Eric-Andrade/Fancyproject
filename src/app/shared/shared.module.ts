import { CapitalizePipe } from './capitalize.pipe';
import { TruncatePipe } from './truncate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordPipe } from './password.pipe';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    TruncatePipe, CapitalizePipe, PasswordPipe, LoadingComponent
  ],
  exports: [
    TruncatePipe, CapitalizePipe, PasswordPipe
  ]
})
export class SharedModule { }
