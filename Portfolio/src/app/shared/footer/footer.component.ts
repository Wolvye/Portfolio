import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  translate = inject(TranslationService);
  imprint: string | any[] | null | undefined;
  router=inject(Router);

  scrollToTop(): void {
    this.router.navigate(['/imprint']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  scrollToTop2(): void {
      window.scrollTo(0, 0);
    }
  

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
