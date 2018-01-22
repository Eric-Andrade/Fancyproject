import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
  MatMenuModule, MatSidenavModule, MatInputModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShellComponent } from './shell/shell.component';
import { IndexComponent } from './shell/index/index.component';
import { LoginComponent } from './shell/auth/login/login.component';
import { SigninComponent } from './shell/auth/signin/signin.component';
import { WelcomeComponent } from './shell/welcome/welcome.component';

import { ProductsService } from '../products/products.service';
import { OrdersService } from '../orders/orders.service';
import { DesignsService } from '../designs/designs.service';
import { StoresService } from '../stores/stores.service';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './shell/auth/login/login.service';
import { AuthguardGuard } from './shell/auth/login/authguard.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', loadChildren: './../home/home.module#HomeModule' },
  { path: 'availableproducts', canActivate: [AuthguardGuard], loadChildren: './../products/products.module#ProductsModule' },
  // { path: 'mylistingproducts', canActivate: [AuthguardGuard], loadChildren: './../products/products.module#ProductsModule' },
  { path: 'orders', canActivate: [AuthguardGuard], loadChildren: './../orders/orders.module#OrdersModule' },
  { path: 'designs', canActivate: [AuthguardGuard], loadChildren: './../designs/designs.module#DesignsModule' },
  { path: 'stores', canActivate: [AuthguardGuard], loadChildren: './../stores/stores.module#StoresModule' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [ ShellComponent, IndexComponent, LoginComponent, SigninComponent, WelcomeComponent ],
  exports: [ ShellComponent, SharedModule, MatButtonModule, MatToolbarModule,
          MatIconModule, MatCardModule, MatMenuModule, MatSidenavModule, MatInputModule, MatFormFieldModule, MatStepperModule ],
  providers: [ ProductsService, OrdersService, DesignsService, StoresService, AuthguardGuard, LoginService ]
})
export class CoreModule { }
