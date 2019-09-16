import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverKeyComponent } from './recover-key.component';

describe('RecoverKeyComponent', () => {
  let component: RecoverKeyComponent;
  let fixture: ComponentFixture<RecoverKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
