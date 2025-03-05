import { Component } from '@angular/core';

@Component({
  selector: 'app-counter', // This will make AppComponent's methods available in this component
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click) = "increase(-1)" >-1</button>
    <button (click) = "resetCounter()" >Reset</button>
    <button (click) = "increase(+1)" >+1</button>

  `
})

export class CounterComponent {
  public counter: number = 0;

  increase(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
