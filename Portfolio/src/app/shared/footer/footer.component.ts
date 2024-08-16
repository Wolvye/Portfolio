import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';




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
    this.router.navigate(['/imprint']);
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth' 
        });
      }
}
