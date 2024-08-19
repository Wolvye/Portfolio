import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, ReactiveFormsModule, RouterModule, RouterLink,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  router = inject(Router);
  http = inject(HttpClient);
  mailTest = false;
  isChecked = false;
  isCheckedStandalone = true;
  translate = inject(TranslationService);

  contactData = {
    name: "",
    email: "",
    message: "",
  }


  post = {
    endPoint: 'https://alain-soltau.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  isPopupVisible: any;
  popupMessage: any;

  onSubmit(ngForm: NgForm) {
    if (!this.isChecked && ngForm.submitted && ngForm.form.valid && !this.mailTest) {

    } else {
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log("SERVER-GESENDET!");

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log("GESENDET!");
      ngForm.resetForm();
    }
  }

}
  // scrollToTop(): void {
  //   this.router.navigate(['/imprint']).then(() => {
  //     window.scrollTo(0, 0);
  //   });
  // }

  // constructor() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     window.scrollTo(0, 0);
  //   });
  // }



