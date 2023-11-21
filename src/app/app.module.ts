import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {DemoserviceService} from './demoservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http'
import { ErroepageComponent } from './components/erroepage/erroepage.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { LetestrecipeComponent } from './components/letestrecipe/letestrecipe.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import{ ItemService} from 'src/app/service/item.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecipesComponent,
    RegisterComponent,
    LoginComponent,
    ErroepageComponent,
    RecipeDetailsComponent,
    LetestrecipeComponent,
    AddnewComponent,
    AddtocartComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [DemoserviceService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
