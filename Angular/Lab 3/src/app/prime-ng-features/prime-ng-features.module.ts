import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgFeaturesComponent } from './prime-ng-features.component';

import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import {KnobModule} from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrimeNgFeaturesComponent],
  imports: [
    CommonModule,
    PasswordModule,
    CalendarModule,
    RatingModule,
    ButtonModule,
    KnobModule,
    FormsModule
  ],
  exports: [PrimeNgFeaturesComponent],
})
export class PrimeNgFeaturesModule {}
