import { FormGroup } from '@angular/forms';
export const processForm = (form: FormGroup, fn: Function) => {
  form.valid ? fn() : form.markAllAsTouched()
}
