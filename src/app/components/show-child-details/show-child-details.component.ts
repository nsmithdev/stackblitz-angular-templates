import { Component, input, TemplateRef } from '@angular/core';
import { ChildBasicsComponent } from '../child-basics/child-basics.component';


@Component({
  selector: 'app-show-child-details',
  templateUrl: './show-child-details.component.html',
})
export class ShowChildDetailsComponent {
  viewChildren = input<readonly ChildBasicsComponent[]>([]);
  viewChildrenTemplates = input<readonly TemplateRef<any>[]>([]);

  contentChildren = input<readonly TemplateRef<any>[]>();
  contentChildrenDescendants = input<readonly unknown[]>();
}
