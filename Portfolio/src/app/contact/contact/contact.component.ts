import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  mailTest = false;
  isChecked = true;
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

  onSubmit(ngForm: NgForm) {
    if (!this.isChecked) {
      alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
      return;
    }else{
      alert('Danke für die Mail. Ich werde mich so schnell es geht melden.')
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