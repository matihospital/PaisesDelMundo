import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPaisComponent } from './tarjeta-pais.component';

describe('TarjetaPaisComponent', () => {
  let component: TarjetaPaisComponent;
  let fixture: ComponentFixture<TarjetaPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
