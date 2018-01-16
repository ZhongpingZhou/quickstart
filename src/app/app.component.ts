import { Component } from '@angular/core';
import { Hero } from './hero';

@Component
({
  selector: 'my-app',
  templateUrl:'./app.component.html',
})
export class AppComponent
{
  title="Tour of Heroes";
  hero = new Hero(1,'batMan','rich','riqiu');
}