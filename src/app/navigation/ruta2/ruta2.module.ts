import { NgModule } from "@angular/core";
import { Ruta2Component } from "./ruta2.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: Ruta2Component },
];



@NgModule({
    imports: [FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MaterialModule,
        CommonModule],
    exports: [Ruta2Component],
    declarations: [Ruta2Component]
})

export class ruta2Module { }