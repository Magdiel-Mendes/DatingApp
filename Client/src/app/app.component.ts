import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Client';
  users: any;
  baseURL = `${environment.URL}users`
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.http.get(this.baseURL).subscribe(res => {
      this.users = res
    })
  }
}
