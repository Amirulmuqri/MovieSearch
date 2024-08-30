import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.page.html',
  styleUrls: ['./movie-search.page.scss'],
})
export class MovieSearchPage  {

  searchQuery: string = '';
  movies: any[] = [];
 

  constructor(private movieService: MovieService, private navCtrl: NavController) {}

  ngOnInit() {
  }

  
 searchMovies() {
  if (this.searchQuery.trim() !== '') {
    this.movieService.searchMovies(this.searchQuery).subscribe((response) => {
      this.movies = response.Search || [];
    });
  } else {
    this.movies = [];
  }
}

viewDetails(imdbID: string) {
  this.navCtrl.navigateForward(`/movie-details/${imdbID}`);
 }
 


}
