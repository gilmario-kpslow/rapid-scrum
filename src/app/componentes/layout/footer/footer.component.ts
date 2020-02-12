import { Component, OnInit } from '@angular/core'
import { VersaoApiService } from '../../../core/versao/versao-api.service'
import { VersaoApi } from 'src/app/core/versao/versao-api.model'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [VersaoApiService ]
})
export class FooterComponent implements OnInit {

  versao: VersaoApi
  constructor(private service: VersaoApiService ) { }

  ngOnInit() {
    this.service.getVersao().subscribe(v => this.versao = v)
  }

}
