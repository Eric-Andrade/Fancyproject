import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printmelon-shell',
  template: `
  <div class="no-alternative2 app-container">
    <printmelon-index></printmelon-index>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
  .app-container{
    height: 100%;
  }
  `]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
