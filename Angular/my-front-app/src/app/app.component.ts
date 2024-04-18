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
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
      this.users$ = this.usersService.getUsers();
  }
}
