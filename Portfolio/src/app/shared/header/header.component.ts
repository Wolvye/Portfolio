import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHidden: boolean = true;
  translate = inject(TranslationService);

  toggleVisibility() {
    if (this.isHidden == false) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }
}
