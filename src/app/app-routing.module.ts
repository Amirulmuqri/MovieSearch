import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie-search',
    pathMatch: 'full'
  },
  {
    path: 'movie-search',
    loadChildren: () => import('./pages/movie-search/movie-search.module').then(m => m.MovieSearchPageModule)
  },
  {
    path: 'movie-details/:imdbID',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
