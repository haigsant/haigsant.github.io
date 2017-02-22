import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecipeStartComponent } from './recipe-start.component'; 
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'; 
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'; 


export const recipe_routes: Routes = [
  { path: '',  component: RecipeStartComponent },
  { path: 'new',  component: RecipeEditComponent },
  { path: ':id',  component: RecipeDetailComponent },
  { path: ':id/edit',  component: RecipeEditComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(recipe_routes) ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule {}