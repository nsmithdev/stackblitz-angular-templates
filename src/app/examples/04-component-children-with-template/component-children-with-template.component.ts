import { Component, contentChildren, TemplateRef, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ChildBasicsComponent } from '../../components/child-basics/child-basics.component';
import { ChildBasicsDirective } from '../../components/child-basics.directive';

@Component({
  selector: 'app-component-children-with-template',
  standalone: true,
  imports: [ComponentsModule, RouterLink],
  templateUrl: './component-children-with-template.component.html',
})
export class ComponentChildrenWithTemplateComponent {

  viewChildren = viewChildren(ChildBasicsComponent);
  viewChildrenTemplates = viewChildren(ChildBasicsDirective, {
    read: TemplateRef,
  });

  contentChildren = contentChildren('columnTemplate', { read: TemplateRef });
  contentChildrenDescendants = contentChildren('columnTemplate', {
    descendants: true,
  });

}
