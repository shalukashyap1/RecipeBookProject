import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErroepageComponent } from './components/erroepage/erroepage.component';
import { LetestrecipeComponent } from './components/letestrecipe/letestrecipe.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'recipes',component:RecipesComponent},
  {path:'recipes/:id',component:RecipesComponent},
  {path:'newrecipe',component:LetestrecipeComponent},
  {path:'newrecipe/:id',component:LetestrecipeComponent},
  {path:'register',component:RegisterComponent},
  {path:'addnew',component:AddnewComponent},
  
  {path:'addtocart',component:AddtocartComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErroepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
