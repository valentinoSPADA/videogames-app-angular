import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { Ruta2Component } from "./navigation/ruta2/ruta2.component";
import { LandingComponent } from "./navigation/landing/landing.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'ruta2', component: Ruta2Component},
    {path: 'landing', component: LandingComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}