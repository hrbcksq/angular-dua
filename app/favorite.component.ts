import {Component, Renderer} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: '<i class="glyphicon" [class.glyphicon-star]="IsFavorite" [class.glyphicon-star-empty]="!IsFavorite"></i>',
    host:{
        '(click)':'onClick($event)'
    }
})
export class FavoriteComponent{
    public IsFavorite: boolean = false;

    constructor(private renderer: Renderer){

    }

    onClick($event){
        this.IsFavorite = !this.IsFavorite;
    }
}
