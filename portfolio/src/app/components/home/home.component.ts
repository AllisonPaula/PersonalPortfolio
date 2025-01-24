import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class MyProjectsComponent {

  //Text
hi = 'Hola, soy';
me = ' ALLISON PAULA';
description = 'Desarrolladora de Software con pasión por el diseño y la tecnología.';
ab = ' Me caracterizo por ser una persona organizada y productiva. La responsabilidad y la disciplina son pilares en mi trabajo. Busco oportunidades para aplicar y ampliar mis conocimientos.';

//Links
instagram = 'https://www.instagram.com/allis_pb?igsh=enczeDRzZmU3MnNn';
github ='https://github.com/AllisonPaula'
email = 'mailto:paulaallison88@gmail.com';
linkedin = 'https://www.linkedin.com/in/allison-paula-71a122244/';
}