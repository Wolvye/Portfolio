import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero/hero.component";
import { AboutMeComponent } from "../aboutMe/about-me/about-me.component";
import { MySkillsComponent } from "../mySkills/my-skills/my-skills.component";
import { PortfolioComponent } from "../portfolio/portfolio/portfolio.component";
import { FriendsComponent } from "../friends/friends/friends.component";
import { ContactComponent } from "../contact/contact/contact.component";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, FriendsComponent, ContactComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
