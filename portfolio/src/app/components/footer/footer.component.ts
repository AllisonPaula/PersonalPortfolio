import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

//Text
tittle = 'Gracias por visitar mi portafolio';
description = ' Conectemos a través de mis redes sociales o contáctame directamente.';
cr = ' © 2025 Allison. Todos los derechos reservados.';

//Links
instagram = 'https://www.instagram.com/allis_pb?igsh=enczeDRzZmU3MnNn';
github ='https://github.com/AllisonPaula'
email = 'mailto:paulaallison88@gmail.com';
linkedin = 'https://www.linkedin.com/in/allison-paula-71a122244/';

}
