import { Recipe } from "../recipes/recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test 1', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
        new Recipe('A test recipe 2', 'This is a simply test 2', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
        new Recipe('A test recipe 3', 'This is a simply test 3', 
        'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg')
      ];
    
      getRecipes(){
          return this.recipes.slice();
      }
}