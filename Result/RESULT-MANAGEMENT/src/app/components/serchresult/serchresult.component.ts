import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-serchresult',
  templateUrl: './serchresult.component.html',
  styleUrls: ['./serchresult.component.css']
})
export class SerchresultComponent implements OnInit {
  
  result : Results[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  searchResult =new FormGroup({
    rollno: new FormControl(''),
    name:new FormControl(''),
  })

  

  getResultByRollno() {
    this.http.post<any>('http://localhost:3004/find/',this.searchResult.value).subscribe(
      response =>{
        console.log(response);
        this.result = response;
        }
      );
  }
}

export interface Results {
 
  id: number;
  rollno: number;
  name: string;
  date:string;
  score : number;
  
}