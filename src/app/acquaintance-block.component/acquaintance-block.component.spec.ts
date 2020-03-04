import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquaintanceBlockComponent } from './acquaintance-block.component';

describe('AcquaintanceBlockComponent', () => {
  let component: AcquaintanceBlockComponent;
  let fixture: ComponentFixture<AcquaintanceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquaintanceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaintanceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
