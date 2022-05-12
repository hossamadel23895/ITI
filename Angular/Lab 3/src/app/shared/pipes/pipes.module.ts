import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { PowerToXPipe } from './power-to-x.pipe';
import { StringConvertPipe } from './string-convert.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchFilterPipe, PowerToXPipe, StringConvertPipe],
  exports: [SearchFilterPipe, PowerToXPipe, StringConvertPipe],
})
export class PipesModule {}
