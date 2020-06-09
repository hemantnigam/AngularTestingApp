import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render content', () => {
    let contentText = fixture.debugElement.query(By.css('.dashboard-label')).nativeElement;
    expect(contentText.innerText).toContain('Welcome to dashboard');
  });

  it('should navigate back to login page when user clicks logout button', () => {
    spyOn(component.router, 'navigate');
    component.logout();
    expect(component.router.navigate).toHaveBeenCalled();
  });
});
