import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullInfoComponent } from './pull-info.component';

describe('PullInfoComponent', () => {
  let component: PullInfoComponent;
  let fixture: ComponentFixture<PullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
