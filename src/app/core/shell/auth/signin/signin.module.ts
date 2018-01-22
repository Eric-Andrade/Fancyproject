import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule
  ],
  declarations: [SigninComponent]
})
export class SignupModule { }
