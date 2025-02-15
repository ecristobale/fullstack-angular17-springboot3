import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  // Input: value comes from PARENT component
  @Input() title!: string;

  // Output: value goes to PARENT component
  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
    }
  }


  setCounter(): void {
    this.counter++;

    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('counter', this.counter.toString());
      this.counterEmmit.emit(this.counter);
    }
  }
}
