import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdesignerComponent } from './productdesigner.component';

describe('ProductdesignerComponent', () => {
  let component: ProductdesignerComponent;
  let fixture: ComponentFixture<ProductdesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
