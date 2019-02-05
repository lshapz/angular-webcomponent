import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    BarChartComponent
 ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(BarChartComponent, {injector : this.injector});
    customElements.define('bar-chart', el);
  }

}
