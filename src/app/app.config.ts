import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './examples/home/home.component';
import { ComponentChildrenComponent } from './examples/01-component-children/component-children.component';
import { ComponentChildrenTemplatesComponent } from './examples/02-component-children-templates/component-children-templates.component';
import { ComponentChildWithChildrenComponent } from './examples/03-component-child-with-children/component-child-with-children.component';
import { ComponentChildrenWithTemplateComponent } from './examples/04-component-children-with-template/component-children-with-template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'component-children', component: ComponentChildrenComponent },
  { path: 'component-children-with-template', component: ComponentChildrenTemplatesComponent },
  { path: 'component-child-with-children', component: ComponentChildWithChildrenComponent },
  { path: 'component-children-templates', component: ComponentChildrenWithTemplateComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};