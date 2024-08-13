import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './hero/hero/hero.component';
import { AboutMeComponent } from './aboutMe/about-me/about-me.component';
import { MySkillsComponent } from "./mySkills/my-skills/my-skills.component";
import { ContactComponent } from "./contact/contact/contact.component";
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { FriendsComponent } from './friends/friends/friends.component';
import AOS from 'aos';
import { WrapperComponent } from "./wrapper/wrapper.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FriendsComponent, ContactComponent, PortfolioComponent, MySkillsComponent, AboutMeComponent, RouterOutlet, FooterComponent, HeaderComponent, HeroComponent, MySkillsComponent, ContactComponent, WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  ngOnInit() {
    AOS.init();
  }
}
