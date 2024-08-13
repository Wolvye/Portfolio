import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  translate = inject(TranslationService);
}
