import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGolferComponent } from './create-golfer.component';

describe('CreateGolferComponent', () => {
  let component: CreateGolferComponent;
  let fixture: ComponentFixture<CreateGolferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGolferComponent]
    });
    fixture = TestBed.createComponent(CreateGolferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
