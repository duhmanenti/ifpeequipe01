import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaraLarissaComponent } from './clara-larissa.component';

describe('ClaraLarissaComponent', () => {
  let component: ClaraLarissaComponent;
  let fixture: ComponentFixture<ClaraLarissaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaraLarissaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaraLarissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
