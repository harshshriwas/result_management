import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result : Results[] = [];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults()
  {
    this.http.get<any>('http://localhost:3004/show').subscribe(
      response=>{
        console.log(response);
        this.result = response;
      }
    );
  }

   //delte leave details
   deleteResult(id:number){
    console.log(id);
    var confim = confirm("Do you want to delete");
    console.log(confim);
    // this.http.delete<any>('http://localhost:3004/delete/'+id).subscribe(
    //   response=>{
    //     console.log(response);
    //     this.result = response;
        this.ngOnInit();
    //   }
    // );
    
  }


}

export interface Results {
 
  id: number;
  rollno: number;
  name: string;
  date:string;
  score : number;
  
}