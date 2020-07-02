import { Component, Input, OnDestroy, HostBinding, Optional, Self, ElementRef, OnInit } from '@angular/core';
import { FormControl, NgControl, ControlValueAccessor, FormControlName, AbstractControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material'
import { Subject } from 'rxjs'
import { FocusMonitor } from '@angular/cdk/a11y'

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: InputDefaultComponent}]
})
export class InputDefaultComponent implements MatFormFieldControl<string>, OnDestroy, ControlValueAccessor, OnInit {

  private static nextId = 0

  @Input() type = 'text'
  @Input() maxlength: number
  @Input() minlength: number
  @Input() control: FormControl
  focused = false
  private _placeholder: string
  @HostBinding() id = `default-input-${InputDefaultComponent.nextId++}`
  stateChanges = new Subject<void>()
  @Input()
  get value(): string {
    return this.control.value
  }
  set value(value: string) {
    this.writeValue(value)
    this.stateChanges.next()
  }
  @Input()
  get placeholder() {
    return this._placeholder
  }
  set placeholder(plh: string) {
    this._placeholder = plh
    this.stateChanges.next()
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty
  }

  @Input()
  get required() {
    return this._required
  }
  set required(req) {
    this._required = req
    this.stateChanges.next()
  }
  private _required = false

  @Input()
  get disabled(): boolean {
    return this._disabled
  }
  set disabled(dis) {
    this._disabled = dis
    this._disabled ? this.control.disable() : this.control.enable()
    this.stateChanges.next()
  }
  private _disabled = false

  errorState = false

  controlType = 'app-input-default'

  @HostBinding('attr.aria-describedby') describedBy = ''

  onChange = (_: any) => { }
  onTouch = () => { }

  constructor(@Optional() @Self() public ngControl: NgControl,
    private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>
  ) {
    fm.monitor(elRef.nativeElement, true).subscribe( origin => {
      this.focused = !!origin
      this.stateChanges.next()
    })
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this
    }
    this.control = new FormControl('')
  }

  ngOnInit() {
    this.control = this.ngControl ? this.ngControl.control as FormControl : this.control
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ')
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input' ) {
      this.elRef.nativeElement.querySelector('input').focus()
    }
  }

  get empty() {
    return !this.control.value
  }

  ngOnDestroy() {
    this.stateChanges.complete()
    this.fm.stopMonitoring(this.elRef.nativeElement)
  }

  mostraErro() {
    return this.control.invalid && this.control.touched
  }

  erros(): string {
    const erros = Object.keys(this.control.errors)
    return this.getMensagemErro(erros)
  }

  private getMensagemErro(erro: string[]): string {
    let mensagem = ''
     erro.forEach((b ) => {
      switch (b) {
        case 'required': mensagem = `Campo obrigatorio.`
          break
        case 'maxlength': mensagem = `O campo deve conter no maximo x caracteres`
          break
        case 'minlength': mensagem = `O campo deve conter no maximo x caracteres`
          break
        case 'email': mensagem = `Por favor informe um email valido.`
          break
     }
    })
    return mensagem
  }

  writeValue(obj: any): void {
    this.control.setValue(obj)
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled  = isDisabled
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }
}
