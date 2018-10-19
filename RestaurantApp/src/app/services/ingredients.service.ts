import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class IngredientsService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
      getIngredient(){
        return this.ingredients.slice();
    }

    addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            const find = this.ingredients.find(item => item.name == i.name);
              if(find){
                find.amount += i.amount;
              }else{
                this.ingredients.push(i);
              }
      };
      
        this.ingredientsChanged.emit(this.ingredients.slice());
    }   
}