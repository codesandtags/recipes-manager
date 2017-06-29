import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pasta', 'is a great plate for you', 'http://lorempixel.com/400/200/food/'),
    new Recipe('Cosa', 'is a great plate for you', 'http://lorempixel.com/400/200/food/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
