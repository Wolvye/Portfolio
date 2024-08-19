import { Component, inject, input } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule,RouterOutlet,RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  translate = inject(TranslationService);
  ngOnInit(){
  window.scrollTo(0, 0);
  }
}
