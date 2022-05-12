import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [RateComponent],
  imports: [CommonModule],
  exports: [PipesModule, RateComponent],
})
export class SharedModule {}
