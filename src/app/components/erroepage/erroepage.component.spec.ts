import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroepageComponent } from './erroepage.component';

describe('ErroepageComponent', () => {
  let component: ErroepageComponent;
  let fixture: ComponentFixture<ErroepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroepageComponent]
    });
    fixture = TestBed.createComponent(ErroepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
