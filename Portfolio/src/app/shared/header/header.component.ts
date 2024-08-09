import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHidden: boolean = true;

  
  toggleVisibility(){
    if (this.isHidden==false) {
      this.isHidden=true;
    }else{
      this.isHidden=false;
    }
  }
}
