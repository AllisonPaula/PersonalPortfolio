import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']  // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class MenuBarComponent {
  isMenuHidden: boolean = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
