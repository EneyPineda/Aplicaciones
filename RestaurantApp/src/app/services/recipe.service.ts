import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test 1', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg', 
        [
            new Ingredient('bread',2),
            new Ingredient('cheese',2)
        ]),
        new Recipe('A test recipe 2', 'This is a simply test 2', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg',
        [
            new Ingredient('apple',2)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test 3', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg',
        [
            new Ingredient('orange',2),
            new Ingredient('salt',2)
        ])
      ];
      
      constructor(private ingredientsService: IngredientsService){}
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.ingredientsService.addIngredients(ingredients);
      }
}