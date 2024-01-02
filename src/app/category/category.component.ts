import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  display: string = "";

  @Output()
  category: EventEmitter<string> = new EventEmitter<string>();

  filter() {
    this.category.emit(this.display);
  }
}




