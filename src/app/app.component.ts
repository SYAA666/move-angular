import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  windowsArray: number[] = [1];
  disable() {
    return false;
  }
  addWindow() {
    this.windowsArray.push(this.windowsArray.length + 1);
  }
}
