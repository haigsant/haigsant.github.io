import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecipesComponent } from './recipes/recipes.component'; 
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; 
import { recipe_routes } from './recipes/recipes-routing.module'; 


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',  component: RecipesComponent, children: recipe_routes },
  { path: 'shopping-list', component: ShoppingListComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}