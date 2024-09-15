import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMakerComponent } from './test-maker.component';

describe('TestMakerComponent', () => {
  let component: TestMakerComponent;
  let fixture: ComponentFixture<TestMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test-maker', () => {
    expect(component).toBeTruthy();
  });
});
