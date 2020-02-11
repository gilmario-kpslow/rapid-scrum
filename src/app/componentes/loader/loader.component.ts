import { Component, OnInit, Input } from '@angular/core'
import { LoaderService } from './loader.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() exibir = false;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
      this.loaderService.loadEvent.subscribe(e => this.exibir = e)
  }

}
