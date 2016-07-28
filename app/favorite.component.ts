import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: '<i class="glyphicon" [class.glyphicon-star]="isFavorite" [class.glyphicon-star-empty]="!isFavorite"></i>',
    host:{
        '(click)':'onClick($event)'
    }
    // inputs: ['isFavorite:is-favorite']
})
export class FavoriteComponent{
    @Input() isFavorite: boolean = false;    

    constructor(){

    }

    onClick($event){
        this.isFavorite = !this.isFavorite;
    }
}
