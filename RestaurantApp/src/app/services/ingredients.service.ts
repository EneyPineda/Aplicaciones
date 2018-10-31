import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class IngredientsService{
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }
      getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
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
      
        this.ingredientsChanged.next(this.ingredients.slice());
    }   
}