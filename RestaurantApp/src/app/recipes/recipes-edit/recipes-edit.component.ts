import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
    
  }
  
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
          );
        }
      } 
    }
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients': ingredients
      });
    }      
    onAddIngredient(){
      (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
      )
  }
onSubmit(){
  const recipeF = this.recipeForm.value;
  const newRecipe = new Recipe(recipeF.name, recipeF.description, recipeF.imagePath, recipeF.ingredients);
  //console.log(newRecipe);
  if (this.editMode) {
    this.recipeService.updateRecipe(this.id, newRecipe);
    this.onCancel();
  }else{
    this.recipeService.addRecipe(newRecipe);
    this.onCancel();
  }
}

odDeleteIngredient(index:number){
//terminar
 (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
}
onCancel(){
this.router.navigate(['../'],{relativeTo:this.route});
}

}
