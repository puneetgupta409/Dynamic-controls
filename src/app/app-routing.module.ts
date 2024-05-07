import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // Default route redirects to the 'home' route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Lazy-loaded module
  { 
    path: 'home', 
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
