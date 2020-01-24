import { Directive, forwardRef, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { formatar } from '../util/mask-functions';

@Directive({
  selector: '[appMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskDirective),
    multi: true,
  }],
})
export class MaskDirective implements ControlValueAccessor{

  @Input() formato: string;
  @Input() model: string;
  @Input() placeMask: string;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }
  onChange = (_: any) => { };
  onTouch = () => { };

  @HostListener('input', ['$event'])
  oninput(event: Event) {
      const value = this._elementRef.nativeElement.value.split(/\D+/).join('');
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', this._applyMask(value));
      if (this.placeMask) {
        this.onChange(this._elementRef.nativeElement.value);
      } else {
        this.onChange(this._elementRef.nativeElement.value.split(/\D+/).join(''));
      }
      this.onTouch();
      event.preventDefault();
      event.stopPropagation();
  }

  @HostListener('blur')
  onblur() {
      this.onTouch();
  }

  public writeValue(inputValue: string): void {
    if (inputValue) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', this._applyMask(inputValue.split(/\D+/).join('')));
    } else {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', null);
    }
  }

  public registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
      this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  private _applyMask(valor: string) {
    if (this.formato) {
      return formatar(this.formato, valor);
    } else {
      return valor;
    }
  }

}
