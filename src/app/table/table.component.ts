import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import '@cds/core/search/register.js';
import { Observable } from 'rxjs';
import { ClrDatagridStateInterface } from '@clr/angular';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedUser = true;
  
  users$: Observable<User[]>
  
  currentPage: number;
  total = 10;
  loading:boolean;

  constructor(private service: UserService) {
    
  }

    

      


  ngOnInit(): void {

 
    this.users$ = this.service.getAllData(this.currentPage);
   
  }

  refresh(state:ClrDatagridStateInterface){
    console.log(state);
    this.loading = true;
    this.users$ = this.service.getAllData(this.currentPage);

    this.loading = false;

  }

  

}
