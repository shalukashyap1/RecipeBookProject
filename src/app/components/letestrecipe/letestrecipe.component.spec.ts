import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestrecipeComponent } from './letestrecipe.component';

describe('LetestrecipeComponent', () => {
  let component: LetestrecipeComponent;
  let fixture: ComponentFixture<LetestrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetestrecipeComponent]
    });
    fixture = TestBed.createComponent(LetestrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
