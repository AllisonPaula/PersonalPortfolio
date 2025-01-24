import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  isMenuHidden: boolean = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}