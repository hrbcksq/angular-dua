import {Component, EventEmitter, Input, Output} from 'angular2/core'

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styleUrls: ['app/like.style.css'],
    host: {
        '(click)': 'onClick()'
    }
})
export class LikeComponent{
    @Input() isLiked: boolean;
    @Input() count: number;
    @Output() onChange = new EventEmitter();

    private onClick(){
        this.onChange.emit(this);        
    }
}
