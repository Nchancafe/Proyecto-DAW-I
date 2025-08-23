import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaComponent } from './camisa.component';

describe('CamisaComponent', () => {
  let component: CamisaComponent;
  let fixture: ComponentFixture<CamisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CamisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
