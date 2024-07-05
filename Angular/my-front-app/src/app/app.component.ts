import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EMPTY, Observable, catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-front-app';

  public users$!: Observable<any>;
  public pokemones$!: Observable<any>;

  Url: string = environment.baseUrl;

  constructor(private usersService: UsersService){}

  pokeRegister: Array<any> = [];
  listarPokemones(){
    for(let i = 4; i <= 6; i++){
      this.usersService.getPokemones(i).subscribe((data: any) => {
        var {name, sprites} = data;
        this.pokeRegister.push({name, sprites});
      },(err) => {
        console.log(err);
      });
    }
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
    this.listarPokemones();
  }
}
