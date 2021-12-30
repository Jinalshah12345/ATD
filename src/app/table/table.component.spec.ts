import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../user.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let TestBedUserService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [HttpClientModule],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBedUserService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the service', () => {
    expect(TestBedUserService instanceof UserService).toBeTruthy();
  });

  it('should inject service using inject function and check its instance', inject([UserService],(injectedService: UserService)=>{

      expect(injectedService).toBeTruthy();
      expect(injectedService instanceof UserService).toBeTruthy();

  }));
    

 
})


