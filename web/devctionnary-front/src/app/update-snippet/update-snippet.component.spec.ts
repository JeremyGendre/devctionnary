import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSnippetComponent } from './update-snippet.component';

describe('UpdateSnippetComponent', () => {
  let component: UpdateSnippetComponent;
  let fixture: ComponentFixture<UpdateSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
