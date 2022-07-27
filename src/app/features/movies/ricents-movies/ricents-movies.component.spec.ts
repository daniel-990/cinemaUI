import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicentsMoviesComponent } from './ricents-movies.component';

describe('RicentsMoviesComponent', () => {
  let component: RicentsMoviesComponent;
  let fixture: ComponentFixture<RicentsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicentsMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicentsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
