import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Angular 17 desde app component';

  users: string[] = ['Edu','John','Doe', 'Eduardo'];
  //users!: string[];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Click en setVisible, nuevo valor de visible: ' + this.visible);
  }
}
