import { Injectable } from '@angular/core';

import { Recipe } from './recipe'; 
import { Ingredient } from '../shared/ingredient'; 

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/app_store_ios7_ios_7.png', [
    	new Ingredient('French Fries', 2), 
    	new Ingredient('Pork Meat', 1) 
  	]),
    new Recipe('Shnitzel', 'Very tasty', 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/app_store_ios7_ios_7.png', []),
    new Recipe('Summer Salad', 'Okayish', 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/app_store_ios7_ios_7.png', [])
  ]; 


  constructor() { }

  getRecipes() {
  	return this.recipes;
  }
}
