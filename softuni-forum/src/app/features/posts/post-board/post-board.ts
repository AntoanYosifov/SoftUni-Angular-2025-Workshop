import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../../core/services";
import {Post} from "../../../models";
import {PostItem} from "../post-item/post-item";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-post-item-board',
    imports: [
        PostItem
    ],
    templateUrl: './post-board.html',
    standalone: true,
    styleUrl: './post-board.css'
})
export class PostBoard implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];

    posts: Post[] = [];

    constructor(private postService: PostsService) {
    }

    ngOnInit(): void {

        this.subscriptions.push(
        this.postService.getPosts()
            .subscribe((posts: Post[]) => {
                this.posts = posts
            }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
