import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestThreadsComponent } from './latest-threads.component';

describe('LatestThreadsComponent', () => {
  let component: LatestThreadsComponent;
  let fixture: ComponentFixture<LatestThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
