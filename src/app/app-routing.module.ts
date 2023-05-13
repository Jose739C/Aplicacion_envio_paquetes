import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructComponent } from './construct/construct.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'construccion', component: ConstructComponent }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
