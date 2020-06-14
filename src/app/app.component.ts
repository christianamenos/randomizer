import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randomizer';
  selected = null;
  itemsField = '';
  items: Set<string> = new Set();

  constructor() {
    // this.items.add('item1').add('item2'); // ['item1', 'item2'];
  }

  onAddItems(event) {
    this.itemsField.split(',').forEach(item => {
      this.items.add(item.trim());
    });

    this.itemsField = '';
  }

  onSelectRandomItem() {
    const arrayOfItems = Array.from(this.items);
    this.selected = arrayOfItems[Math.floor(arrayOfItems.length * Math.random())];
  }

  onRemoveItem(item){
    this.items.delete(item);
  }
}
