import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendMainComponent } from './pedvend-main.component';

describe('PedvendMainComponent', () => {
  let component: PedvendMainComponent;
  let fixture: ComponentFixture<PedvendMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
