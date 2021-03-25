import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedvendItensComponent } from './pedvend-itens.component';

describe('PedvendItensComponent', () => {
  let component: PedvendItensComponent;
  let fixture: ComponentFixture<PedvendItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedvendItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedvendItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
