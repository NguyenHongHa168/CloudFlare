import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../types/movies';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [CommonModule,MovieCardComponent,CarouselModule],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
 @Input() title = "";
 @Input() movieList:Movie[] =[];
 responsiveOptions: any[] | undefined;

}
