import { MovieService } from './../../service/movie.service';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '../../components/header/header.component';
import { tmcbConfig } from '../../constants/config';
import { Movie } from '../../types/movies';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatIconModule,HeaderComponent,MovieCategoryComponent,MovieCardComponent,CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  tmcbConfig= tmcbConfig;
  bannerMovie!:Movie;

  popularMovies :Movie[] =[];
  topRateMovies :Movie[] =[];
  nowPlayMovies :Movie[] =[];
  upComingMovies :Movie[] =[];
  movieService = inject(MovieService);
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((result:any) => {
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService
      .getMovieVideos(this.bannerMovie.id)
      .subscribe((res: any) => {
        this.bannerMovie.videoKey = res.results.find(
          (x: any) => (x.site = 'YouTube')
        ).key;
      });
      console.log("tmcbConfig", this.bannerMovie.genre_ids);
  });

  this.movieService.getTopRatedMovies().subscribe((result:any) => {
    this.topRateMovies = result.results
    console.log("result", result);
  });

  this.movieService.getNowPlayMovies().subscribe((result:any) => {
    this.nowPlayMovies = result.results
  });

  this.movieService.getUpComingMovies().subscribe((result:any) => {
    this.upComingMovies = result.results
  })
  }

}
