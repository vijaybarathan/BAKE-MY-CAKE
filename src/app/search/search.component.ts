import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string="";

  @Output() 
  searchEvent:EventEmitter<string>=new EventEmitter<string>();
  
  search() {
    this.searchEvent.emit(this.searchText);
  }
}






