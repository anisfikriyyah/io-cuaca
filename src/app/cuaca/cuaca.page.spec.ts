import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuacaPage } from './cuaca.page';

describe('CuacaPage', () => {
  let component: CuacaPage;
  let fixture: ComponentFixture<CuacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuacaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
