import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get('http://localhost:8080/dockerisez/api/users');
    // return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }
}
