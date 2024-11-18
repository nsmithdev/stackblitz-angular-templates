import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-basics',
  templateUrl: './child-basics.component.html',
})
export class ChildBasicsComponent {

  theCount = input.required<number>();

}
