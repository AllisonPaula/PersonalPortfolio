import { Component } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']  
})
export class MenuBarComponent {
  email = 'mailto:paulaallison88@gmail.com';

  isMenuHidden: boolean = true;
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  goEmail() {
    window.location.href = this.email;
  }
}