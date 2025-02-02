import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieSearchPageRoutingModule } from './movie-search-routing.module';

import { MovieSearchPage } from './movie-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieSearchPageRoutingModule
  ],
  declarations: [MovieSearchPage]
})
export class MovieSearchPageModule {}
