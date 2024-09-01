import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMakerViewComponent } from './test-maker-view.component';

describe('TestMakerViewComponent', () => {
  let component: TestMakerViewComponent;
  let fixture: ComponentFixture<TestMakerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMakerViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMakerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
