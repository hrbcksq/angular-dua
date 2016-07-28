import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <favorite [isFavorite]='post.isFavorite'></favorite>    
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
    title = "Angular"    
    post = {
        title: "Title",
        isFavorite: true
    }
}