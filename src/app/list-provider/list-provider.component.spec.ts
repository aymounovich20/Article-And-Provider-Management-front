import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProviderComponent } from './list-provider.component';

describe('ListProviderComponent', () => {
  let component: ListProviderComponent;
  let fixture: ComponentFixture<ListProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
