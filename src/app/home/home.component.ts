import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { users } from '../model/model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  AllUsers: users = {};
  imageUrl: any;
  name: string = '';
  gender: string = '';
   hex= '0123456789ABCDEF'
   color='#'
   randomNum:number=1

  constructor(private api: ApiService,private http:HttpClient) {}


  UserList(){

     this.http.get(`${this.api.baseUrl}/${this.randomNum}`).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.AllUsers=res
        this.imageUrl = this.AllUsers.image;
                this.imageUrl = this.AllUsers.image;

                this.name = `${this.AllUsers.firstName}`;
                this.gender = `${this.AllUsers.gender}`;
      },error:(er:any)=>{
        alert("cannot fetch data rightnow..please try after sometime")
      }
     })}
  ngOnInit() {
    this.api.getUser().subscribe({
            next: (res: any) => {
              this.AllUsers = res;
              this.imageUrl = this.AllUsers.image;
              this.imageUrl = this.AllUsers.image;

              this.name = `${this.AllUsers.firstName}`;
              this.gender = `${this.AllUsers.gender}`;
              
            },
            error: (er: any) => {
              alert('cannot fetch the data..please try after sometimes');
            },
          });

          this.colourchange()
  }

 

  colourchange(){
    this.color = "#";
      for (var i = 0; i < 6; i++) {

     this.color += this.hex[Math.floor(Math.random() * 16)];
     console.log(this.color);
     
      }
  }

 
    getRandom() {
      this.randomNum = this.api.randomNumber();
      // console.log(this.randomNum);
      
     }
  
}