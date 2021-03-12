import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSnippetComponentComponent } from './update-snippet-component.component';

describe('UpdateSnippetComponentComponent', () => {
  let component: UpdateSnippetComponentComponent;
  let fixture: ComponentFixture<UpdateSnippetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSnippetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSnippetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
