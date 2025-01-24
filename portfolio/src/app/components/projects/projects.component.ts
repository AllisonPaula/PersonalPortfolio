import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Encriptador de Texto',
      description: 'Breve descripción del proyecto 1.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'https://static.vecteezy.com/system/resources/previews/035/999/156/original/lock-open-and-closed-vector.jpg',
      link: 'https://allisonpaula.github.io/EncriptadordeTexto/',
    },
    {
      name: 'To-Do List',
      description: 'Breve descripción del proyecto 2.',
      technologies: ['Angular', 'Tailwind', 'TypeScript'],
      image: 'https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg',
      link: 'https://github.com/proyecto2',
    },
    {
      name: 'Librería',
      description: 'Breve descripción del proyecto 2.',
      technologies: ['HTML5', 'JavaScript', 'CSS'],
      image: 'https://dontpanicdothis.com/wp-content/uploads/2021/05/Best-mindfulness-books-for-beginners-cover.png',
      link: 'https://allisonpaula.github.io/Library/',
    },
  ];
}
