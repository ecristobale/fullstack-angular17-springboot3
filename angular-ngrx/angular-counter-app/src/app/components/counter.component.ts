import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrease, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter by using Redux (NgRx) for managing the state';

  counterComponent!: number;

  constructor(private store: Store<{count: number}>) {
    this.counterComponent = 0;
    this.store.select('count').subscribe(counterStore => {
      this.counterComponent = counterStore;
    })
  }

  increment(): void {
    // this.counterComponent++;
    this.store.dispatch(increment());
    console.log('Incrementing counter value...');
  }

  decrease(): void {
    // this.counterComponent--;
    this.store.dispatch(decrease());
    console.log('decreasing counter value...');
  }

  reset(): void {
    // this.counterComponent = 0;
    this.store.dispatch(reset());
    console.log('resetting counter value...');
  }
}
