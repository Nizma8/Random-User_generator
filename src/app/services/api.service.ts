import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl="https://dummyjson.com/users"
 randomUsers:number=Math.floor(Math.random()*31)
  constructor(private http:HttpClient) { }

  getUser(){
   return this.http.get(`${this.baseUrl}/1`)
  }

  randomNumber(){
    return Math.floor(Math.random() * 31)+1;
  }
}
