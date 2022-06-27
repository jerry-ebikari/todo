import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-category-component',
  templateUrl: './list-category.component.html',
  styleUrls: ['list-category.component.css'],
})
export class ListCategoryComponent {
  @Input() category = 'Category';
  @Input() items = [];
  @Input() color = 'blue';
  drop(event: CdkDragDrop<string[]>) {
    // When item is moved within the same container
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // When item is moved to another container
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  // Delete a list item
  delete(i: number) {
    this.items.splice(i, 1);
  }
}
