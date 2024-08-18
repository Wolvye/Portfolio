import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
}
)

export class FriendsComponent {

  currentIndex: number = 0;
  testimonials: {
    text: string;
    deutsch: string;
    imgPath: string;
    person: string;
  }[] = [{
    text: "Alain made a valuable contribution to the success of this project, particularly with his organizational skills and his Scrum and Kanban knowledge. Thanks to his meticulous approach to testing the project, we were able to discover and fix bugs. I would be happy to work with him again at any time.",
    deutsch: "Alain hat besonders durch sein Organisationstalent sowie seine Scrum und Kanban Kenntnisse einen wertvollen Beitrag zum Erfolg dieses Projektes beigetragen. Seiner akribischen Herangehensweise beim Testen des Projektes, verdanken wir die Entdeckung und Behebung von Bugs. Ich würde jederzeit gerne wieder mit Ihm zusammenarbeiten.",
    imgPath: './assets/img/ozkan.jpg',
    person: 'Özkan Sarikaya'
  },
  {
    text: "I had the opportunity to work with Alain on the Join and Kochwelt project. He is an organized person who brings his experience and keeps the team together. He is a person who has no time limit to work with, so he can be counted on at any time. I would work with him again if I had the opportunity.",
    deutsch: "Ich hatte die Gelegenheit, mit Alain an dem Projekt Join und Kochwelt zu arbeiten. Er ist eine organisierte Person, die ihre Erfahrungen einbringt und das Team zusammenhält. Er ist ein Mensch, der keine zeitlichen Zwänge kennt, sodass man jederzeit auf ihn zählen kann. Ich würde wieder mit ihm zusammenarbeiten, wenn ich die Gelegenheit dazu hätte.",
    imgPath: './assets/img/raudel.JPEG',
    person: 'Raudel Gómez Smith'
  }
    ]

  translate = inject(TranslationService);
  prevFriend() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.testimonials.length - 1;
    }
  }

  nextFriend() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}