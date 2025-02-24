import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'Hi Angular 17 from app component';
  
  subTitle: string = 'Counter with session state';
  
  users: string[] = ['Edu','John','Doe', 'Eduardo'];
  //users!: string[];
  
  visible: boolean = false;
  
  counter: number = 0;
  
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
    }
  }

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Click on setVisible, visible value updated: ' + this.visible);
  }

  setCounter(counter: number): void {
    this.counter = counter;
  }
}
