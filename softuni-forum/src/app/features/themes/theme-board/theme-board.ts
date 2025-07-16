import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemesService} from "../../../core/services";
import {Theme} from "../../../models";
import {ThemeItem} from "../theme-item/theme-item";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-theme-board',
    imports: [
        ThemeItem,
        AsyncPipe
    ],
    templateUrl: './theme-board.html',
    standalone: true,
    styleUrl: './theme-board.css'
})
export class ThemeBoard {

    themes$: Observable<Theme[]>;

    constructor(private themeService: ThemesService) {
        this.themes$ = themeService.getThemes();
    }

}
