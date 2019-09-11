import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosgabrielComponent } from './marcosgabriel.component';

describe('MarcosgabrielComponent', () => {
  let component: MarcosgabrielComponent;
  let fixture: ComponentFixture<MarcosgabrielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcosgabrielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosgabrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
