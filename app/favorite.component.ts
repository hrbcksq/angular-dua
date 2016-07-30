import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styleUrls: ['app/favorite.style.css'],
    host:{
        '(click)':'onClick()'
    }    
})
export class FavoriteComponent{
    @Input() isFavorite: boolean = false;        
    @Output() onChange = new EventEmitter();    

    private onClick(){
        this.onChange.emit(this);
    }
}
