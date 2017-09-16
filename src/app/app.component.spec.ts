import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './property.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PropertyComponent
      ],
      imports: [HttpModule],
      providers: [
        PropertyService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render header tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  }));
});
