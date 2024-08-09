import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  public switchLanguarge(language: string): void {
    this.translate.use(language);
  }
}

