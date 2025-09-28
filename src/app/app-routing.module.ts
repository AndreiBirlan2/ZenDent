import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  { path: 'acasa', component: HomeComponent },
  { path: 'despre', component: AboutComponent },
  { path: 'servicii', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'acasa' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
