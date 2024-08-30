import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearchPage } from './movie-search.page';

describe('MovieSearchPage', () => {
  let component: MovieSearchPage;
  let fixture: ComponentFixture<MovieSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
