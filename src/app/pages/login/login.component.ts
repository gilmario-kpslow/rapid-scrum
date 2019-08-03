import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group: FormGroup
  constructor(private build: FormBuilder) {
    this.group = this.build.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {

  }

}
