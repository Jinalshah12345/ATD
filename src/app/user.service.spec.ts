import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { User } from './models/user';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



describe('UserService', () => {
  let http: HttpClient;
  let httpTestCtrl: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
   
  });

  beforeEach(() => {

    service = TestBed.get(UserService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
  

  


});
