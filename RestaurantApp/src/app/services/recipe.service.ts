import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    startedEditing = new Subject<number>();
 //   recipeSelected = new EventEmitter<Recipe>();
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

      getRecipe(index:number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.ingredientsService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      
}