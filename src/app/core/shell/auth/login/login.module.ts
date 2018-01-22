import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
