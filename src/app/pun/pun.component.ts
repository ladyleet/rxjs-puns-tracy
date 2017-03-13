import { Component, OnInit, Inject } from '@angular/core';
import { Subject, Observable } from '../app.rx';
import { PunLookup } from '../pun-lookup.service';


@Component({
  selector: 'app-pun',
  templateUrl: './pun.component.html',
  styles: [],
  providers: [
    PunLookup
  ]
})
export class PunComponent implements OnInit {
  
  suggestedKeywords: string[] = null;

  keywordsInputChange$ = new Subject<string>();
  
  keyword$ = this.keywordsInputChange$
    .switchMap(text => this.puns.suggestKeywords(text))
    .do(keywords => this.suggestedKeywords = keywords);
    
  constructor(
    private puns: PunLookup
  ) { }

  ngOnInit() {
  }

}
