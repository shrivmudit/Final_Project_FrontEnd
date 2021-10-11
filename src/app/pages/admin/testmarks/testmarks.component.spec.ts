import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmarksComponent } from './testmarks.component';

describe('TestmarksComponent', () => {
  let component: TestmarksComponent;
  let fixture: ComponentFixture<TestmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
