import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer, Header} from "./shared/components";
import {ThemeBoard} from "./features/themes";
import {PostBoard} from "./features/posts";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ThemeBoard, PostBoard],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {}
