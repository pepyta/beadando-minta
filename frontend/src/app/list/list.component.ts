import { Component } from '@angular/core';
import { ItemModel } from '../item-model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public name = "";
  public items: ItemModel[] = [];

  constructor(private itemService: ItemService) {
    this.loadItems();
  }

  private loadItems() {
    this.itemService.listItems().subscribe((items) => {
      this.items = items;
    });
  }

  public deleteItem(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.loadItems();
    });
  }

  public createItem() {
    this.itemService.createItem({
      name: this.name
    }).subscribe(() => {
      this.loadItems();
    });

    this.name = "";
  }
}
