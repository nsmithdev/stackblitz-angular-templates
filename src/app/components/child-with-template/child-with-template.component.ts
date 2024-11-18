import { CommonModule, JsonPipe } from '@angular/common';
import { Component, contentChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-child-with-template',
  templateUrl: './child-with-template.component.html',
})
export class ChildWithTemplateComponent {
  public viewChild = viewChild('columnTemplate');
  public contentChild = contentChild('columnTemplate');
}
