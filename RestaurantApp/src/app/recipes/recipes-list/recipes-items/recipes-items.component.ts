import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {
  @Input() recipe: Recipe;
 // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  //  this.recipeSelected.emit();
  }
}
