import { NgModule } from "@angular/core";

import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [  // Register the component with Angular's module system.
  ],
  imports: [
    CounterComponent,
  ],
  exports: [
    CounterComponent,
  ]
})
export class CounterModule {}
