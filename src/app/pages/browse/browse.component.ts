import { Component, Input, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../types/movies';
import { tmcbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    MovieCategoryComponent,
    MatIconModule,
    FooterComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  loginService = inject(LoginService);
  router = inject(Router)

movieService = inject(MovieService);
  popularMovies :Movie[] =[];
  topRateMovies :Movie[] =[];
  nowPlayMovies :Movie[] =[];
  upComingMovies :Movie[] =[];
  ratedMovie :Movie[] =[];
  bannerMovie!:Movie;
  tmcbConfig= tmcbConfig;
  public domSanitise = inject(DomSanitizer);

 
  constructor( private dialog: MatDialog){
    
  }
  ngOnInit(): void {
    // if(!this.loginService.isLoggedIn){
    //   this.router.navigateByUrl("/login");
    // }
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
    });

    this.movieService.getTopRatedMovies().subscribe((result:any) => {
      this.topRateMovies = result.results
      console.log("ncc", result);
    });

    this.movieService.getNowPlayMovies().subscribe((result:any) => {
      this.nowPlayMovies = result.results
    });

    this.movieService.getUpComingMovies().subscribe((result:any) => {
      this.upComingMovies = result.results
    })
  }
  openSignUpForm() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60vw',  
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
