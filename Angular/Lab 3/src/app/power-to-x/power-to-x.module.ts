import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerToXComponent } from './power-to-x.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [PowerToXComponent],
  imports: [CommonModule,FormsModule,PipesModule],
  exports: [PowerToXComponent],
})
export class PowerToXModule {}
