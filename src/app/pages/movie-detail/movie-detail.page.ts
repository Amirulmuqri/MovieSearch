import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const imdbID = this.route.snapshot.paramMap.get('imdbID');
   if (imdbID) {
     this.movieService.getMovieDetails(imdbID).subscribe((response) => {
       this.movie = response;
     });
   }

}
}