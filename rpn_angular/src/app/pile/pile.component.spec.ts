import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PileComponent } from './pile.component';

describe('PileComponent', () => {
  let component: PileComponent;
  let fixture: ComponentFixture<PileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
