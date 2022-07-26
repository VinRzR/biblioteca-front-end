import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCroComponent } from './home-cro.component';

describe('HomeCroComponent', () => {
  let component: HomeCroComponent;
  let fixture: ComponentFixture<HomeCroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
