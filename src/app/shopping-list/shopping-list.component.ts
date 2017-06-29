import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoe', 10),
    new Ingredient('Apples', 12),
    new Ingredient('Lettuce', 3),
    new Ingredient('Orange', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
