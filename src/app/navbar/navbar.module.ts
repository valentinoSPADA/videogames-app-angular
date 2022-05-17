import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { MaterialModule } from 'src/app/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    ComponentComponent
  ]
})
export class NavbarModule { }
