import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsComponent } from './home.component';

describe('MyProjectsComponent', () => {
  let component: MyProjectsComponent;
  let fixture: ComponentFixture<MyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
