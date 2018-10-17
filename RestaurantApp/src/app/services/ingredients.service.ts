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
        //let exist: boolean = false;
        for(const i of auxIngredients){
            const a = this.ingredients.find(item => item.name == i.name);
            console.log(a);
            this.ingredients.push(i);
        }
        
         /*   this.ingredients.map(function(item){
                if(item.name == i.name){
                    item.amount = item.amount + i.amount;
                    exist = true;
                }
               // return item;
            });
            if(!exist) {
                this.ingredients.push(i);
              } 
              */
         
        this.ingredientsChanged.emit(this.ingredients.slice());
    }   
}