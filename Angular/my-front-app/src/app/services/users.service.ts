import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get(`${environment.baseUrl}/users`);
  }
  
  public getPokemones(id:number){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
