import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloppeurComponent } from './add-developpeur.component';

describe('AddDeveloppeurComponent', () => {
  let component: AddDeveloppeurComponent;
  let fixture: ComponentFixture<AddDeveloppeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeveloppeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeveloppeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
