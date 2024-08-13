import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input() count :number;
  @Input() selected :boolean;
  @Output('change') click = new EventEmitter();
  
  toggleStar() {
    this.selected = !this.selected;
    if(this.selected)
      this.count++;
    else
      this.count--;
    this.click.emit({
      selected: this.selected,
      count: this.count
    });
  }
}

export interface FavoriteChangedEventArgs {
  selected:boolean,
  count:number
}