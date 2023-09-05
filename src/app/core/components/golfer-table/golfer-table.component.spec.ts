import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferTableComponent } from './golfer-table.component';

describe('GolferTableComponent', () => {
  let component: GolferTableComponent;
  let fixture: ComponentFixture<GolferTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolferTableComponent]
    });
    fixture = TestBed.createComponent(GolferTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
