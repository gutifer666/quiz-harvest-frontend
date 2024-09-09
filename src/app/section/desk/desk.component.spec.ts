import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskComponent } from './desk.component';

describe('DeskComponent', () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test-maker', () => {
    expect(component).toBeTruthy();
  });
});
