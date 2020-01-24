import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { formatar } from '../util/mask-functions';

@Directive({
  selector: '[appDateParse]'
})
export class DateParseDirective {

  @Input() format: string;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }
  onChange = (_: any) => { };
  onTouch = () => { };

  // @HostListener('input', ['$event'])
  // oninput(event: Event) {
  //     const value = this._elementRef.nativeElement.value.split(/\D+/).join('');
  //     this.onChange(value);
  //     this.onTouch();
  //     event.preventDefault();
  //     event.stopPropagation();
  // }

  @HostListener('blur')
  onblur() {

      this.onTouch();
  }

  public writeValue(inputValue: string): void {
      console.log(inputValue);
      if (inputValue) {
          console.log(this._applyMask(inputValue));
          this.onChange(this._applyMask(inputValue));
      } else {
          this.onChange(undefined);
      }
  }

  public registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
      this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
      if (isDisabled) {
          this._renderer.setAttribute(this._elementRef.nativeElement, 'disabled', 'disabled');
      } else {
          this._renderer.removeAttribute(this._elementRef.nativeElement, 'disabled');
      }
  }

  private _applyMask(valor: string) {
    return formatar('99:99:99', valor);
  }

}
