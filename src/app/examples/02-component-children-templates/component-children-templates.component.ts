import {
  Component,
  contentChildren,
  TemplateRef,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChildBasicsComponent } from '../../components/child-basics/child-basics.component';
import { ChildBasicsDirective } from '../../components/child-basics.directive';
import { ComponentsModule } from '../../components/components.module';



@Component({
  selector: 'app-component-children-templates',
  standalone: true,
  imports: [ComponentsModule, RouterLink],
  templateUrl: './component-children-templates.component.html',
})
export class ComponentChildrenTemplatesComponent {

  viewChildren = viewChildren(ChildBasicsComponent);
  viewChildrenTemplates = viewChildren(ChildBasicsDirective, {
    read: TemplateRef,
  });

  contentChildren = contentChildren('columnTemplate', { read: TemplateRef });
  contentChildrenDescendants = contentChildren('columnTemplate', {
    descendants: true,
  });

  // contentChildren = contentChildren('columnTemplate', { read: TemplateRef });
  // contentChildrenDescendants = contentChildren('columnTemplate', {
  //   descendants: true,
  // });

  code_example = `
  <app-child-basics *appChildBasics="" [theCount]="4"/>
  <app-child-basics *appChildBasics="" [theCount]="5"/>

  <ng-template [appChildBasics]="">
    <app-child-basics [theCount]="6"/>
  </ng-template>

  viewChildrenTemplates = viewChildren(ChildBasicsDirective, {
    read: TemplateRef,
  });
  `
}
