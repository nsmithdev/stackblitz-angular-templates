import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ChildBasicsDirective } from './child-basics.directive';
import { ChildWithContentChildrenComponent } from './child-with-content-children/child-with-content-children.component';
import { ChildBasicsComponent } from './child-basics/child-basics.component';
import { ChildWithTemplateComponent } from './child-with-template/child-with-template.component';
import { ShowChildDetailsComponent } from './show-child-details/show-child-details.component';

@NgModule({
  declarations: [
    ChildBasicsComponent,
    ChildBasicsDirective,
    ChildWithTemplateComponent,
    ChildWithContentChildrenComponent,
    ShowChildDetailsComponent,
  ],
  exports: [
    ChildBasicsComponent,
    ChildBasicsDirective,
    ChildWithTemplateComponent,
    ChildWithContentChildrenComponent,
    ShowChildDetailsComponent,
  ],
  imports: [
    CommonModule,
    JsonPipe,
  ]
})
export class ComponentsModule { }
