// import required packages
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'add-one-button', // component name used in markup
  standalone: true, // component is self-contained
  styles: [
    'button { font-weight: bold; border-radius: 8px;}'
  ],
  template: // the component's markup
  `
   <button (click)="count = count + 1">Add one</button> {{ count }}
   <button (click)="count = 0">Reset</button>
  `,
})

// export component
export class AddOneButtonComponent {
  count = 0;
}

bootstrapApplication(AddOneButtonComponent);
