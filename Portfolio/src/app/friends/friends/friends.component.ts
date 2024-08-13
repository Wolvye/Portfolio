import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

interface Friend {
  text: string;
  imgPath: string;
}

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  translate = inject(TranslationService);
  // Deine bestehenden Deklarationen
  ozkanDE: Friend = {
    text: "Alain hat besonders durch sein Organisationstalent sowie seine Scrum und Kanban Kenntnisse einen wertvollen Beitrag zum Erfolg dieses Projektes beigetragen. <br> Seiner akribischen Herangehensweise beim Testen des Projektes, <br>verdanken wir die Entdeckung und Behebung von Bugs. Ich würde jederzeit gerne wieder mit Ihm zusammenarbeiten. Özkan Sarikaya",
    imgPath: './assets/img/ozkan.jpg'
  };
  

  ozkanENG: Friend = {
    text: "Alain made a valuable contribution to the success of this project, particularly with his organizational skills and his Scrum and Kanban knowledge. Thanks to his meticulous approach to testing the project, we were able to discover and fix bugs. I would be happy to work with him again at any time. Özkan Sarikaya",
    imgPath: './assets/img/ozkan.jpg'
  };
  
  raudelDE: Friend = {
    text: "Ich hatte die Gelegenheit, mit Alain an dem Projekt Join und Kochwelt zu arbeiten. Er ist eine organisierte Person, die ihre Erfahrungen einbringt und das Team zusammenhält. Er ist ein Mensch, der keine zeitlichen Zwänge kennt, sodass man jederzeit auf ihn zählen kann. Ich würde wieder mit ihm zusammenarbeiten, wenn ich die Gelegenheit dazu hätte. Raudel Gómez Smith",
    imgPath: './assets/img/raudel.JPEG'
  };
  
  raudelENG: Friend = {
    text: "I had the opportunity to work with Alain on the Join and Kochwelt project. He is an organized person who brings his experience and keeps the team together. He is a person who has no time limit to work with, so he can be counted on at any time. I would work with him again if I had the opportunity. Raudel Gómez Smith",
    imgPath: './assets/img/raudel.JPEG'
  };

  friendsArray: Friend[] = [this.ozkanDE, this.ozkanENG, this.raudelDE, this.raudelENG];
  
  currentIndex: number = 0;

  prevFriend() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.friendsArray.length - 1; 
    }
  }

  nextFriend() {
    if (this.currentIndex < this.friendsArray.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }
}