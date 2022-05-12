import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PowerToXModule } from './power-to-x/power-to-x.module';
import { PrimeNgFeaturesModule } from './prime-ng-features/prime-ng-features.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,
    PowerToXModule,
    PrimeNgFeaturesModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
