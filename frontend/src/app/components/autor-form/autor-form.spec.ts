import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorFormComponent } from './autor-form';

describe('AutorForm', () => {
  let component: AutorFormComponent ;
  let fixture: ComponentFixture<AutorFormComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorFormComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
