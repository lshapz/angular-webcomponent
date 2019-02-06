import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BarChartComponent } from './bar-chart/bar-chart.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    BarChartComponent,
    // AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    BarChartComponent
 ],
  // bootstrap: [
  //   AppComponent
  // ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(BarChartComponent, {injector : this.injector});
    customElements.define('bar-chart', el);
  }

}
