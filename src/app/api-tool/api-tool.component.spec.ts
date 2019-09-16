import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiToolComponent } from './api-tool.component';

describe('ApiToolComponent', () => {
  let component: ApiToolComponent;
  let fixture: ComponentFixture<ApiToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
