import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EMPTY, Observable, catchError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

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
  public pokemones$!: any;

  constructor(private usersService: UsersService){}

  listarPokemones(){
    for(let i = 1; i <= 3; i++){
      this.pokemones$ = this.usersService.getPokemones(i);
    }

  }

  ngOnInit(): void {
      this.users$ = this.usersService.getUsers();

  }
}
