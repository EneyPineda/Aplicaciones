import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  private subscription :Subscription;
  recipes: Recipe[];
  constructor(private recipeServices: RecipeService, private ruoter: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipes();
    this.subscription = this.recipeServices.recipeChanged.subscribe((event)=>{
      this.recipes = this.recipeServices.getRecipes();
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onNewRecipe() {
    this.ruoter.navigate(['new'], {relativeTo: this.route});
  }

}
