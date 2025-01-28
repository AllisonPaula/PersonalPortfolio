import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']  
})
export class MenuBarComponent {
  constructor(private renderer: Renderer2) {}
  email = 'mailto:paulaallison88@gmail.com';
  isDarkMode!: boolean;

  // Alternar el modo oscuro
  toggleDarkMode(): void {
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('dark')) {
      this.renderer.removeClass(htmlElement, 'dark');
      localStorage.setItem('theme', 'light'); 
      this.isDarkMode = false;
    } else {
      this.renderer.addClass(htmlElement, 'dark');
      localStorage.setItem('theme', 'dark'); 
      this.isDarkMode = true;
    }
  }

  // Aplicar tema almacenado al cargar la app
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark');
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  isMenuHidden: boolean = true;
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}