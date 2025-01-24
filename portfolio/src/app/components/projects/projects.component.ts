import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor


interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];  
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  currentIndex = 0;
  a= 'Ver Proyecto';

  // Projects Information
  projects: Project[] = [
    {
      name: 'To-Do List',
      description: 'Para gestionar tareas de forma eficiente, permitiendo a los usuarios agregar, visualizar, actualizar y eliminar actividades. Su objetivo es organizar pendientes y optimizar el tiempo. ',
      image: 'https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg',
      link: 'https://allisonpaula.github.io/To-Do-Tasks/',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'] 
    },
    {
      name: 'Encriptador de Texto',
      description: 'Convierte letras en números y viceversa funciona asignando un valor numérico a cada letra. Para desencriptar, el proceso se invierte, transformando los números nuevamente en letras.',
      image: 'https://static.vecteezy.com/system/resources/previews/035/999/156/original/lock-open-and-closed-vector.jpg',      
      link: 'https://allisonpaula.github.io/EncriptadordeTexto/',
      technologies: ['JavaSctipt', 'HTML', 'CSS'] 
    },
    {
      name: 'Librería',
      description: 'Para explorar, comprar y leer libros, con un catálogo organizado y reseñas de usuarios.',
      image: 'https://dontpanicdothis.com/wp-content/uploads/2021/05/Best-mindfulness-books-for-beginners-cover.png',
      link: 'https://allisonpaula.github.io/Library/',
      technologies: ['HTML', 'CSS', 'JavaScript'] 
    },
  ];

  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1;
    }
  }
}
