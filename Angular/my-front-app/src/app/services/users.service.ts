import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get('/dockerisez/api/users');
  }
  public getPokemones(id:number){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
