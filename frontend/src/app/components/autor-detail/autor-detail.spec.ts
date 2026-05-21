import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDetailComponent  } from './autor-detail';

describe('AutorDetail', () => {
  let component: AutorDetailComponent ;
  let fixture: ComponentFixture<AutorDetailComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorDetailComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorDetailComponent );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
