import { Component, computed, contentChildren, TemplateRef, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChildBasicsComponent } from '../../components/child-basics/child-basics.component';
import { ComponentsModule } from '../../components/components.module';
import { ChildBasicsDirective } from '../../components/child-basics.directive';

@Component({
  selector: 'app-component-children',
  standalone: true,
  imports: [ComponentsModule, RouterLink],
  templateUrl: './component-children.component.html',
})
export class ComponentChildrenComponent {
  
  viewChildren = viewChildren(ChildBasicsComponent);
  viewChildrenTemplates = viewChildren(ChildBasicsDirective, {
    read: TemplateRef,
  });

  contentChildren = contentChildren('columnTemplate', { read: TemplateRef });
  contentChildrenDescendants = contentChildren('columnTemplate', {
    descendants: true,
  });
  
  code_example = `  
  <app-child-basics [theCount]="1"/>
  <app-child-basics [theCount]="2"/>
  <app-child-basics [theCount]="3"/>

  viewChildren = viewChildren(ChildBasicsComponent);
  `
}
