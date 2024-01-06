import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemModel } from './item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = "http://localhost:8000/api/items";

  constructor(private connection: HttpClient) { }

  public listItems() {
    return this.connection.get<ItemModel[]>(this.url);
  }

  public deleteItem(itemId: number) {
    return this.connection.delete(`${this.url}/${itemId}`);
  }

  public createItem(body: { name: string }) {
    return this.connection.post(this.url, body);
  }
}
