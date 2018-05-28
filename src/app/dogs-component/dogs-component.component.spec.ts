import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsComponentComponent } from './dogs-component.component';

describe('DogsComponentComponent', () => {
  let component: DogsComponentComponent;
  let fixture: ComponentFixture<DogsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
