import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecipesComponent } from './recipes.component'; 
import { RecipeStartComponent } from './recipe-start.component'; 
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'; 
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'; 


const recipe_routes: Routes = [
  { path: '',  component: RecipesComponent, children: [
	  { path: '',  component: RecipeStartComponent },
	  { path: 'new',  component: RecipeEditComponent },
	  { path: ':id',  component: RecipeDetailComponent },
	  { path: ':id/edit',  component: RecipeEditComponent }
  ]}
];

export const recipesRouting = RouterModule.forChild(recipe_routes);

@NgModule({
  imports: [ recipesRouting ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule {}