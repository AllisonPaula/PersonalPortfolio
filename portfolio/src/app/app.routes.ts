import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '' } 
];
