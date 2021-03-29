import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfileComponent } from './get-profile.component';

describe('GetProfileComponent', () => {
  let component: GetProfileComponent;
  let fixture: ComponentFixture<GetProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
