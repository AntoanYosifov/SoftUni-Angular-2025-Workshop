import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Theme} from "../../../models";

@Component({
  selector: 'app-theme-item',
  imports: [],
  templateUrl: './theme-item.html',
  standalone: true,
  styleUrl: './theme-item.css'
})
export class ThemeItem implements OnInit, AfterViewInit{

  @Input() theme!: Theme

  ngOnInit(): void {
    console.log(this.theme);
  }

  ngAfterViewInit(): void {
    console.log(this.theme);
  }
}
