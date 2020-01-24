import { Directive, Input, OnInit } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

export const _FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL ',
    monthYearA11yLabel: 'MMM YYYY'
  },
};


@Directive({
  selector: '[appMesAno]',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: _FORMATS},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
  ]
})
export class MesanoDirective implements OnInit {

  @Input() matDatepicker: MatDatepicker<Date>;
  @Input() control: FormControl;
  onChange = (_: any) => { };
  onTouch = () => { };

  constructor() { }

  ngOnInit() {
    this.matDatepicker.startView = 'multi-year';
    this.matDatepicker.monthSelected.subscribe(date => {
      const def = this.control.value || moment();
      def.month(date.month());
      this.control.setValue(def);
      this.matDatepicker.close();

    });

  }




}
