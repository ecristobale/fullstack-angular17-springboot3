import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter by using Redux (NgRx) for managing the state';

  counter!: number;

  constructor() {
    this.counter = 0;
  }

  increment(): void {
    this.counter++;
    console.log('Incrementing counter value...');
  }

  decrease(): void {
    this.counter--;
    console.log('decreasing counter value...');
  }

  reset(): void {
    this.counter = 0;
    console.log('resetting counter value...');
  }
}
